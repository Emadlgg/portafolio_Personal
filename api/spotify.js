// api/spotify.js
// Vercel serverless function — keeps Spotify credentials server-side only.

const TOKEN_URL = 'https://accounts.spotify.com/api/token'
const API_BASE = 'https://api.spotify.com/v1'

async function getAccessToken() {
  const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN } = process.env

  const basic = Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64')

  const res = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${basic}`,
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: SPOTIFY_REFRESH_TOKEN,
    }),
  })

  if (!res.ok) {
    throw new Error(`token refresh failed: ${res.status}`)
  }

  const data = await res.json()
  return data.access_token
}

async function spotifyFetch(path, token) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  if (res.status === 204) return null // e.g. nothing currently playing
  if (!res.ok) throw new Error(`spotify fetch failed: ${path} (${res.status})`)
  return res.json()
}

function deriveTopAlbums(topTracksItems, limit = 6) {
  const map = new Map()

  for (const track of topTracksItems) {
    const album = track.album
    if (!album) continue
    const key = album.id
    if (!map.has(key)) {
      map.set(key, {
        id: album.id,
        name: album.name,
        artist: album.artists?.[0]?.name ?? 'Unknown',
        image: album.images?.[1]?.url || album.images?.[0]?.url || null,
        url: album.external_urls?.spotify,
        count: 0,
      })
    }
    map.get(key).count += 1
  }

  return [...map.values()]
    .sort((a, b) => b.count - a.count)
    .slice(0, limit)
}

export default async function handler(req, res) {
  try {
    const token = await getAccessToken()

    const [nowPlaying, topArtists, topTracks] = await Promise.all([
      spotifyFetch('/me/player/currently-playing', token),
      spotifyFetch('/me/top/artists?time_range=short_term&limit=5', token),
      spotifyFetch('/me/top/tracks?time_range=short_term&limit=50', token),
    ])

    let now = null
    if (nowPlaying && nowPlaying.is_playing && nowPlaying.item) {
      now = {
        playing: true,
        name: nowPlaying.item.name,
        artist: nowPlaying.item.artists?.map((a) => a.name).join(', '),
        image: nowPlaying.item.album?.images?.[1]?.url,
        url: nowPlaying.item.external_urls?.spotify,
      }
    } else {
      // fallback: most recently played track
      const recent = await spotifyFetch('/me/player/recently-played?limit=1', token)
      const item = recent?.items?.[0]?.track
      if (item) {
        now = {
          playing: false,
          name: item.name,
          artist: item.artists?.map((a) => a.name).join(', '),
          image: item.album?.images?.[1]?.url,
          url: item.external_urls?.spotify,
        }
      }
    }

    const artists = (topArtists?.items ?? []).map((a) => ({
      id: a.id,
      name: a.name,
      image: a.images?.[2]?.url || a.images?.[0]?.url || null,
      url: a.external_urls?.spotify,
    }))

    const albums = deriveTopAlbums(topTracks?.items ?? [])

    res.setHeader('Cache-Control', 's-maxage=120, stale-while-revalidate=300')
    res.status(200).json({ now, artists, albums })
  } catch (err) {
    res.status(500).json({ error: 'spotify_unavailable' })
  }
}
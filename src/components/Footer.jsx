// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="border-t border-base-line py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} Osman de León
        </p>
        <p className="font-mono text-xs text-muted">
          built with react + tailwind
        </p>
      </div>
    </footer>
  )
}

export const projects = [
  // ─────────────────────────────────────────────
  // LABS / CONTINUOUS WORK
  // ─────────────────────────────────────────────

  {
    name: 'Data Science',
    description:
      'Series de tiempo, deep learning y análisis geoespacial — forecasting con SARIMA/Prophet/LSTM e imágenes satelitales Sentinel-2.',
    tags: ['python', 'data-science', 'notebooks'],
    internalLink: '/lab/data-science',
  },

  {
    name: 'Modelación y Simulación',
    description:
      'Laboratorios del curso — modelos matemáticos aplicados resueltos en notebooks.',
    tags: ['python', 'modeling', 'notebooks'],
    internalLink: '/lab/modelacion-simulacion',
  },

  // ─────────────────────────────────────────────
  // FEATURED PROJECTS
  // ─────────────────────────────────────────────

  {
    name: 'Compiler Toolkit — YALex + YAPar',
    description:
      'Toolkit de compiladores inspirado en Lex/Yacc, construido desde cero con generación de lexers, autómatas y parsers LL(1), SLR(1) y LALR.',
    tags: ['Python', 'Compilers', 'Automata', 'LALR'],
    codeUrl: 'https://github.com/Emadlgg/compiler-toolkit',
    demoUrl: 'https://youtu.be/i4ffWxEBaM0',
    featured: true,
  },

  {
    name: '3D Solar System',
    description:
      'Simulación 3D renderizada desde cero en Rust con software rendering, shaders procedurales, Z-buffer, física orbital y navegación 3D.',
    tags: ['Rust', '3D Graphics', 'Shaders', 'Rendering'],
    codeUrl: 'https://github.com/Emadlgg/rust-solar-system',
    demoUrl: 'https://youtu.be/Ba7nvaB2LQQ',
    featured: true,
  },

  {
    name: 'MCP Chatbot',
    description:
      'Asistente con Gemini y un cliente MCP implementado manualmente mediante JSON-RPC 2.0 para descubrir y ejecutar herramientas de servidores MCP.',
    tags: ['Python', 'MCP', 'JSON-RPC', 'Gemini'],
    codeUrl: 'https://github.com/Emadlgg/mcp-chatbot',
    featured: true,
  },

  {
    name: 'Supply Chain Graph',
    description:
      'Plataforma full-stack para modelar y gestionar cadenas de suministro mediante grafos y relaciones entre proveedores, fabricantes, productos y centros de distribución.',
    tags: ['React', 'Express', 'Neo4j', 'REST API'],
    codeUrl: 'https://github.com/Emadlgg/supply-chain-graph',
    featured: true,
  },

  {
    name: 'The Backrooms Escape',
    description:
      'Juego 2.5D desarrollado en Rust con un motor de raycasting propio, sprites animados, detección de colisiones, múltiples niveles y audio espacial.',
    tags: ['Rust', 'Raycasting', 'Raylib', 'Game Dev'],
    codeUrl: 'https://github.com/Emadlgg/rust-raycasting-engine',
    featured: true,
  },

  {
    name: 'Music Recommendation System',
    description:
      'Sistema de recomendación musical que combina KNN, Decision Trees, SVM e inferencia probabilística mediante Redes Bayesianas.',
    tags: ['Python', 'Machine Learning', 'Bayesian Networks', 'SVM'],
    codeUrl: 'https://github.com/Emadlgg/music-recommendation-ml',
    demoUrl: 'https://youtu.be/NzsMGKM9M6M',
    featured: true,
  },

  // ─────────────────────────────────────────────
  // OTHER PROJECTS
  // ─────────────────────────────────────────────

  {
    name: 'Movie Explorer',
    description:
      'Aplicación web desarrollada con Angular y TypeScript que consume la API de TMDB para explorar películas con scroll infinito.',
    tags: ['Angular', 'TypeScript', 'TailwindCSS', 'TMDB'],
    codeUrl: 'https://github.com/Emadlgg/Movie_App',
  },

  {
    name: 'Presence Website',
    description:
      'Sitio corporativo construido con Next.js y Notion como headless CMS, con contenido dinámico y despliegue en producción mediante Vercel.',
    tags: ['Next.js', 'Notion API', 'Headless CMS', 'Vercel'],
    codeUrl: 'https://github.com/Emadlgg/presence_website',
    liveUrl:
      'https://presence-website-3j6y-git-master-emadlgs-projects.vercel.app',
  },
]
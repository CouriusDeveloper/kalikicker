const DEFAULT_CORS_ORIGINS = [
  'https://kalikicker.de',
  'https://www.kalikicker.de',
  'https://api.kalikicker.de',
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'http://localhost:5174',
  'http://127.0.0.1:5174',
  'http://localhost:5175',
  'http://127.0.0.1:5175',
]

export default ({ env }) => {
  const corsOrigins = env.array('CORS_ORIGINS', DEFAULT_CORS_ORIGINS)
  const allowAllOrigins = corsOrigins.includes('*')

  return [
    'strapi::logger',
    'strapi::errors',
    'strapi::security',
    {
      name: 'strapi::cors',
      config: {
        origin: allowAllOrigins ? '*' : corsOrigins,
        allowedMethods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'Origin'],
        exposeHeaders: ['Content-Length', 'Date', 'X-Request-Id'],
        credentials: allowAllOrigins ? false : true,
        keepHeadersOnError: true,
      },
    },
    'strapi::poweredBy',
    'strapi::query',
    'strapi::body',
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
  ]
}

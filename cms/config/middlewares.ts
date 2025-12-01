const buildCorsOrigins = (env) => {
  const defaults = [
    env('PUBLIC_WEBSITE_URL', ''),
    env('PUBLIC_WEBSITE_URL_ALT', ''),
    'http://localhost:5173',
    'http://127.0.0.1:5173',
    'http://localhost:5174',
    'http://127.0.0.1:5174',
    'http://localhost:5175',
    'http://127.0.0.1:5175',
    'https://localhost:5173',
    'https://localhost:5174',
    'https://localhost:5175',
  ]

  const codespaceName = env('CODESPACE_NAME')
  const forwardingDomain = env('GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN')
  const codespaceOrigins =
    codespaceName && forwardingDomain
      ? ['5173', '5174', '5175'].map(
          (port) => `https://${codespaceName}-${port}.${forwardingDomain}`
        )
      : []

  const origins = [...defaults, ...codespaceOrigins]
    .map((origin) => origin?.trim())
    .filter((origin, index, array) => origin && array.indexOf(origin) === index)

  return origins.length > 0 ? origins : true
}

export default ({ env }) => [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      origin: buildCorsOrigins(env),
      allowedMethods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'Origin'],
      exposeHeaders: ['Content-Length', 'Date', 'X-Request-Id'],
      credentials: true,
      keepHeadersOnError: true,
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

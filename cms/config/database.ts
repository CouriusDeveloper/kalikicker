import path from 'path'

export default ({ env }) => {
  const client = env('DATABASE_CLIENT', 'sqlite')

  const connections = {
    sqlite: {
      client: 'sqlite',
      connection: {
        filename: path.join(__dirname, '..', '..', env('DATABASE_FILENAME', '.tmp/data.db')),
      },
      useNullAsDefault: true,
    },
    postgres: {
      client: 'postgres',
      connection: {
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapi'),
        user: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'strapi'),
        ssl: env.bool('DATABASE_SSL', true)
          ? { rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false) }
          : false,
      },
    },
  }

  if (!(client in connections)) {
    throw new Error(`Unsupported database client: ${client}`)
  }

  return {
    connection: connections[client],
  }
}

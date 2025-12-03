export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'change-me'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'change-me'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'change-me'),
    },
  },
  secrets: {
    encryptionKey: env('ENCRYPTION_KEY', 'change-me'),
  },
  flags: {
    nps: true,
    promoteEE: true,
  },
})

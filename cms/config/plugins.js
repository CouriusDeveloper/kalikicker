module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'mailgun',
      providerOptions: {
        key: env('MAILGUN_API_KEY'),
        domain: env('MAILGUN_DOMAIN'),
        url: env('MAILGUN_API_URL', 'https://api.mailgun.net'),
      },
      settings: {
        defaultFrom: env('MAIL_FROM', 'info@kalikicker.de'),
        defaultReplyTo: env('MAIL_REPLY_TO', 'info@kalikicker.de'),
      },
    },
  },
})

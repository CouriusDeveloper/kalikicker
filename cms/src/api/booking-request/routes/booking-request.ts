export default {
  routes: [
    {
      method: 'POST',
      path: '/booking-request',
      handler: 'booking-request.submit',
      config: {
        auth: false,
        policies: [],
      },
    },
  ],
}

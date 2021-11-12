module.exports = ({ env }) => ({
    // ...
    email: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'chuhx1024@126.com',
        defaultReplyTo: 'chuhx1024@126.com',
        testAddress: 'chuhx1024@126.com',
      },
    },
    // ...
});
  
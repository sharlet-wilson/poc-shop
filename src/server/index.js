import Hapi from '@hapi/hapi';

async function start() {
  const server = Hapi.server({
    host: 'localhost',
    port: process.env.PORT || 5000,
  });

  try {
    server.route({
      method: 'GET',
      path: '/',
      handler: (request, h) => {
        return 'Hello World!';
      }
    });

    await server.start();
    console.log(`Server running on: ${server.info.uri}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

start();
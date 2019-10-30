import Hapi from '@hapi/hapi';
import Inert from '@hapi/inert';

import renderer from './helpers/renderer';

async function start() {
  const server = Hapi.server({
    host: 'localhost',
    port: process.env.PORT || 5000,
  });

  try {
    await server.register(Inert);

    server.route([{
      method: 'GET',
      path: '/assets/{param*}',
      options: {
        auth: false,
        handler: {
          directory: {
            path: 'assets'
          }
        },
      }
    }, {
      method: 'GET',
      path: '/{any*}',
      handler: (request, h) => {
        return renderer(request);
      }
    }]);

    await server.start();
    console.log(`Server running on: ${server.info.uri}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

start();
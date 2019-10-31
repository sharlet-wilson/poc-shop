import "core-js/stable";
import "regenerator-runtime/runtime";
import Hapi from '@hapi/hapi';
import Inert from '@hapi/inert';

import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

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
        const store = createStore();
        return renderer(request, store);
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
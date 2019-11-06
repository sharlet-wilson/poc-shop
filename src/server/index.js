import "core-js/stable";
import "regenerator-runtime/runtime";
import Hapi from '@hapi/hapi';
import Inert from '@hapi/inert';
import { matchRoutes } from 'react-router-config';

import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import routes from '../shared/routes';
import rootSaga from '../shared/store/actions';

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
      path: '/favicon.ico',
      handler: () => {
        return {};
      }
    }, {
      method: 'GET',
      path: '/{any*}',
      handler: async (request) => {
        const store = createStore();
        store.runSaga(rootSaga);
        renderer(request, store);
        const promises = matchRoutes(routes, request.path).map(({ route }) => {
          return route.loadData
            ? route.loadData(store)
            : null
        });
        return Promise.all(promises).then(async () => {
          return renderer(request, store);
        })
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
import Hapi from '@hapi/hapi';
import Inert from '@hapi/inert';
import React from 'react';
import { renderToString } from "react-dom/server";

import App from '../shared/App';

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
      path: '/',
      handler: (request, h) => {
        const markup = renderToString(
          <App />
        )

        return `<!DOCTYPE html>
          <html>
            <head>
              <title>POC Shop</title>
            </head>
            <body>
              <div id='app'>${markup}</div>
              <script type='text/javascript' src='/assets/bundle.js' defer></script>
            </body>
          </html>`
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
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';

import routes from '../../shared/routes';

export default (request, store) => {
  const markup = renderToString(
    <Provider store={store}>
      <StaticRouter location={request.path} context={{}}>
        <div>{renderRoutes(routes)}</div>
      </StaticRouter>
    </Provider>
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
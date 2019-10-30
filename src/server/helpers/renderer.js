import React from 'react';
import { renderToString } from "react-dom/server";
import { StaticRouter } from 'react-router-dom'

import App from '../../shared/App';

export default (request) => {
  const markup = renderToString(
    <StaticRouter location={request.path} context={{}}>
      <App />
    </StaticRouter>
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
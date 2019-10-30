import React from 'react';
import { renderToString } from "react-dom/server";

import App from '../../shared/App';

export default () => {
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
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import StyleContext from 'isomorphic-style-loader/StyleContext';
import { ServerStyleSheet } from 'styled-components'

import routes from '../../shared/routes';

export default (request, store) => {
  const css = new Set(); // CSS for all rendered React components
  const insertCss = (...styles) => styles.forEach(style => css.add(style._getCss()));
  const sheet = new ServerStyleSheet();
  try {
    const markup = renderToString(sheet.collectStyles(
      <Provider store={store}>
        <StaticRouter location={request.path} context={{}}>
          <StyleContext.Provider value={{ insertCss }}>
            <div>{renderRoutes(routes)}</div>
          </StyleContext.Provider>
        </StaticRouter>
      </Provider>)
    );
    const styleTags = sheet.getStyleTags();

    return `<!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>POC Shop</title>
      </head>
      <body style="margin: 0px;">
        <div id='app'>${markup}</div>
        <script type='text/javascript' src='/assets/bundle.js' defer></script>
        <style>${[...css].join('')}</style>
        ${styleTags}
      </body>
    </html>`
  } finally {
    sheet.seal();
  }
}
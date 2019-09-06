import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <html style={{ background: '#e0ebe8' }} lang="en">
        <Head>
          <meta charSet="utf-8" />
          {/* Use minimum-scale=1 to enable GPU rasterization */}
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
        </Head>
        <body style={{ overflowX: 'hidden', margin: 0 }}>
          <Main />
          <div id="portal" />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;

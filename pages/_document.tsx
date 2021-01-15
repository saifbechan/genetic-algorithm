import React from 'react';

import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

type Props = {
  lang: string;
};

class Document extends NextDocument<Props> {
  render(): JSX.Element {
    return (
      <Html lang={this.props.lang || 'en'}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;

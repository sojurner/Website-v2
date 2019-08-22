import App, { Container } from 'next/app';
import React from 'react';
import MorphTransition from 'nextjs-morph-page';
import Loading from '../components/atoms/Loading';

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <MorphTransition
          loadingComponent={Loading}
          timeout={300}
          classNames="morph"
        >
          <Component {...pageProps} />
        </MorphTransition>
        <style jsx global>{`
          ::-webkit-scrollbar {
            width: 5px;
          }

          ::-webkit-scrollbar-track {
            box-shadow: inset 0 0 5px #e0ebe8;
            border-radius: 10px;
          }

          ::-webkit-scrollbar-thumb {
            background: gray;
            border-radius: 20px;
          }

          .morph.enter {
            opacity: 0;
          }
          .morph.enter.active {
            opacity: 1;
            transition: opacity 300ms;
          }
          .morph.exit {
            opacity: 1;
          }
          .morph.exit.active {
            opacity: 0;
            transition: opacity 300ms;
          }
        `}</style>
      </Container>
    );
  }
}

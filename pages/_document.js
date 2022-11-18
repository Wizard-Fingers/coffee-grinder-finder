import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/fonts/Marhey-Bold.ttf"
            as="font"
            crossOrigin="anonyms"
          ></link>
          <link
            rel="preload"
            href="/fonts/Marhey-Regular.ttf"
            as="font"
            crossOrigin="anonyms"
          ></link>
          <link
            rel="preload"
            href="/fonts/Marhey-SemiBold.ttf"
            as="font"
            crossOrigin="anonyms"
          ></link>
        </Head>
        <body>
          <Main></Main>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

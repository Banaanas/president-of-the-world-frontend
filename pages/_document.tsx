import { Head, Html, Main, NextScript } from "next/document";

const Document = () => {
  /* <Html/> default lang="en" attribute has been removed.
   * Next.js automatically add the lang attribute to the <html> tag. */
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <meta name="msapplication-TileColor" content="#e63371" />
        <meta name="theme-color" content="#e63371" />
        <link rel="icon" href="/images/favicons/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicons/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicons/favicon-32x32.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicons/apple-touch-icon.png"
        />
        <link
          rel="mask-icon"
          href="/images/favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="manifest" href="/images/favicons/site.webmanifest" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;

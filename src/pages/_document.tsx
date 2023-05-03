import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          property="og:title"
          content="Crie seu card para o maior evento presencial da Rocketseat"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rsxp-card.vercel.app" />
        <meta property="og:image" content="/rocketseat-og.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

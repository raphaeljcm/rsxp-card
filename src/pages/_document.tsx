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
        <meta
          property="description"
          content="Crie seu card e mostre para o mundo que você irá no RS/XP 2023. Uma experiência única, imersiva e transformadora de 2 dias em São Paulo/SP com palestras, conteúdo, muito código, networking e atividades pra você acelerar sua evolução na programação."
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

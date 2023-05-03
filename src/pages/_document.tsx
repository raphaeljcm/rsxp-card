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
          property="og:description"
          content="Crie seu card e mostre para o mundo que você irá no RS/XP 2023."
        />
        <meta
          name="description"
          content="Crie seu card e mostre para o mundo que você irá no RS/XP 2023. Uma experiência única, imersiva e transformadora de 2 dias em São Paulo/SP com palestras, conteúdo, muito código, networking e atividades pra você acelerar sua evolução na programação."
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="rsxp-card.vercel.app" />
        <meta property="twitter:url" content="https://rsxp-card.vercel.app" />
        <meta
          name="twitter:title"
          content="Crie seu card para o maior evento presencial da Rocketseat"
        />
        <meta
          name="twitter:description"
          content="Crie seu card e mostre para o mundo que você irá no RS/XP 2023."
        />
        <meta name="twitter:image" content="/rocketseat-og.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

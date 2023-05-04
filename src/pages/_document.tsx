import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta name="author" content="Raphael Marques" />
        <meta
          name="description"
          content="Crie seu card e mostre para o mundo que você irá no RS/XP 2023. O evento irá ocorrer em São Paulo no Expo Center Norte, reunindo milhares de devs da comunidade de todos os níveis e lugares do país. Serão 2 dias de palestras, networking, workshops, hackathon e muito código."
        />
        <meta
          name="keywords"
          content="rsxp, rocketseat, card, evento, boosting the world together"
        />
        <meta
          property="og:title"
          content="Crie seu card para o maior evento presencial da Rocketseat"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rsxp-card.vercel.app" />
        <meta property="og:locale" content="pt-BR" />
        <meta property="og:image" content="/rsxp-og.png" />
        <meta
          property="og:description"
          content="Crie seu card e mostre para o mundo que você irá no RS/XP 2023. O evento irá ocorrer em São Paulo no Expo Center Norte, reunindo milhares de devs da comunidade de todos os níveis e lugares do país. Serão 2 dias de palestras, networking, workshops, hackathon e muito código."
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="rsxp-card.vercel.app" />
        <meta property="twitter:url" content="https://rsxp-card.vercel.app" />
        <meta
          property="twitter:title"
          content="Crie seu card para o maior evento presencial da Rocketseat"
        />
        <meta
          property="twitter:description"
          content="Crie seu card e mostre para o mundo que você irá no RS/XP 2023. O evento irá ocorrer em São Paulo no Expo Center Norte, reunindo milhares de devs da comunidade de todos os níveis e lugares do país. Serão 2 dias de palestras, networking, workshops, hackathon e muito código.."
        />
        <meta property="twitter:image" content="/rsxp-og.png" />
        <meta property="twitter:image:width" content="1200" />
        <meta property="twitter:image:height" content="630" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import logoRsxp from '@/assets/logo.png';
import { Analytics } from '@vercel/analytics/react';

import { StarFour } from '@phosphor-icons/react';
import { GithubUserProvider } from '@/contexts/GithubUserContext';
import { useRouter } from 'next/router';
import Link from 'next/link';

const inter = Inter({
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  const { route } = useRouter();

  const randomArray = new Array(9).fill(0).map((_, i) => ++i);

  const isCardPage = route === '/card';

  return (
    <GithubUserProvider>
      <div
        className={`max-w-[1920px] mx-auto h-screen grid grid-rows-[85px_9fr_2fr] overflow-hidden relative ${inter.className}`}
      >
        <header
          className={`max-w-[1920px] px-6 py-3 ${
            isCardPage ? 'opacity-0 mx-0' : 'opacity-100 mx-auto'
          } md:opacity-100`}
        >
          <Link
            href="https://www.rocketseat.com.br/eventos/rsxp"
            target="-__blank"
          >
            <Image
              src={logoRsxp}
              width={170}
              height={60}
              alt="logo rocketseat experience"
              priority
              className="object-cover"
            />
          </Link>
        </header>

        <Component {...pageProps} />

        <footer className="max-w-[1920px] flex flex-col gap-4 mb-4 absolute bottom-0 left-0 z-10">
          <motion.ul
            className="h-6 md:h-8 bg-rocketseat-light list-none flex gap-2 items-center whitespace-nowrap"
            whileHover={{ scale: 1.1 }}
          >
            {randomArray.map(item => (
              <motion.li
                key={item}
                initial={{ translateX: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                  duration: 5,
                  ease: 'linear',
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="uppercase flex-shrink-0 font-medium flex gap-2 items-center text-sm md:text-base"
              >
                30 de Junho e 01 de Julho <StarFour />
              </motion.li>
            ))}
          </motion.ul>

          <motion.ul
            className="h-6 md:h-8 bg-new-light list-none flex gap-2 items-center whitespace-nowrap"
            whileHover={{ scale: 1.1 }}
          >
            {randomArray.map(item => (
              <motion.li
                key={item}
                animate={{ x: '-100%' }}
                transition={{
                  duration: 5,
                  ease: 'linear',
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="uppercase flex-shrink-0 font-medium flex gap-2 items-center text-sm md:text-base"
              >
                Expo Center Norte - SP <StarFour />
              </motion.li>
            ))}
          </motion.ul>
        </footer>
      </div>
      <Analytics />
    </GithubUserProvider>
  );
}

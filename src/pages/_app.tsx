import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Inter } from 'next/font/google'
import logoRsxp from '@/assets/logo.png'

import { StarFour } from '@phosphor-icons/react'
import { GithubUserProvider } from '@/contexts/GithubUserContext';
import { useRouter } from 'next/router';

const inter = Inter({
  subsets: ['latin']
});

export default function App({ Component, pageProps }: AppProps) {
  const { route } = useRouter();

  const isCardPage = route === '/card';

  return (
    <GithubUserProvider>
      <div className={`max-w-[1920px] mx-auto h-screen grid grid-rows-[85px_9fr_2fr] overflow-hidden relative ${inter.className}`}>
        <header className={`px-6 py-3 ${isCardPage ? 'opacity-0 mx-0' : 'opacity-100 mx-auto'} md:opacity-100`}>
          <Image src={logoRsxp} width={170} height={60} alt="logo rocketseat experience" priority className='object-cover' />
        </header>

        <Component {...pageProps} />

        <footer className='flex flex-col gap-4 mb-4 absolute bottom-0 left-0'>
          <motion.ul className="h-6 md:h-8 bg-rocketseat-light list-none flex gap-2 items-center whitespace-nowrap" whileHover={{ scale: 1.1 }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => (
              <motion.li
                key={item}
                initial={{ translateX: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 5, ease: 'linear', repeat: Infinity, repeatType: 'loop' }}
                className='uppercase flex-shrink-0 font-medium flex gap-2 items-center text-sm md:text-base'
              >
                30 de Junho e 01 de Julho <StarFour />
              </motion.li>
            ))}
          </motion.ul>

          <motion.ul className="h-6 md:h-8 bg-new-light list-none flex gap-2 items-center whitespace-nowrap" whileHover={{ scale: 1.1 }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => (
              <motion.li
                key={item}
                animate={{ x: '-100%' }}
                transition={{ duration: 5, ease: 'linear', repeat: Infinity, repeatType: 'loop' }}
                className='uppercase flex-shrink-0 font-medium flex gap-2 items-center text-sm md:text-base'
              >
                Expo Center Norte - SP <StarFour />
              </motion.li>
            ))}
          </motion.ul>
        </footer>
      </div>
    </GithubUserProvider>
  )
}

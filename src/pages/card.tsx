import { motion } from "framer-motion"
import Image from "next/image"

import stripImg from '@/assets/strip.png';
import badgeBackground from '@/assets/badge-background.png';
import lightsBackground from '@/assets/lights.png';
import logo from '@/assets/tiny-logo.png';
import { ShareNetwork } from "@phosphor-icons/react";
import { useGithubUser } from "@/contexts/GithubUserContext";
import Head from "next/head";

const MOTION_VARIANTS = {
  start: {
    y: -1000,
    rotateZ: 70,
    rotateY: 30,
    rotateX: 30,
    opacity: 0,
  },
  end: {
    y: 0,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    opacity: 1,
  },
};

export default function Card() {
  const { user } = useGithubUser();

  return (
    <>
      <Head>
        <title>RS/XP | Badge</title>
      </Head>
      <div className="relative p-10 flex flex-col items-center md:justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 2 }}
          className="absolute top-0 left-50"
        >
          <Image src={lightsBackground} width={897} height={844} alt="" />
        </motion.div>

        <motion.div
          className="relative w-80 border border-white/10 rounded-2xl shadow-lg bg-black/50 "
          variants={MOTION_VARIANTS}
          initial="start"
          animate="end"
          transition={{
            type: 'spring',
            duration: 4,
            bounce: 0.5,
            delay: 0.1,
          }}
          whileHover={{
            scale: 1.1,
            transition: {
              duration: 0.3,
              delay: 0,
            },
          }}
        >
          <Image
            src={stripImg}
            width={80}
            height={500}
            quality={90}
            alt="strip to hold the card"
            className="absolute translate-y-[-96%] translate-x-[150%] z-20 object-cover"
            priority
          />

          <header className="relative overflow-hidden">
            <Image src={badgeBackground} width={327} height={160} quality={90} alt="" className="rounded-t-2xl object-cover" priority />
            <Image
              src={logo}
              width={125}
              height={20}
              alt="logo"
              className="w-28 absolute top-9 left-[35%] object-cover"
            />
            <div className="w-40 h-40 rounded-full bg-gray-900 absolute left-[24.5%] translate-y-[55%] bottom-0" />
          </header>


          <main className="relative flex flex-col justify-center items-center gap-6 py-8 px-7">
            <>
              <div className="absolute -top-16 w-36 h-36 rounded-full overflow-hidden">
                <Image
                  src={user.avatar_url}
                  width={140}
                  height={140}
                  alt="userProfile"
                  className="object-cover"
                  priority
                />
              </div>

              <div className="mt-20 text-center">
                <h1 className="font-bold text-2xl text-zinc-50">
                  {user.name}
                </h1>
                <div className="flex items-center justify-center gap-2">
                  <svg
                    className="inline"
                    width="16"
                    height="16"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.99875 0C4.4775 0 0 4.495 0 10.04C0 14.475 2.865 18.2375 6.84 19.5662C7.34 19.6588 7.5225 19.3488 7.5225 19.0825C7.5225 18.8438 7.51375 18.2125 7.50875 17.375C4.7275 17.9813 4.14 16.0287 4.14 16.0287C3.68625 14.8687 3.03 14.56 3.03 14.56C2.12125 13.9375 3.0975 13.95 3.0975 13.95C4.10125 14.0212 4.62875 14.985 4.62875 14.985C5.52125 16.5187 6.97 16.0763 7.54 15.8187C7.63 15.17 7.88875 14.7275 8.175 14.4762C5.955 14.2225 3.62 13.3612 3.62 9.515C3.62 8.41875 4.01 7.5225 4.65 6.82C4.54625 6.56625 4.20375 5.545 4.7475 4.16375C4.7475 4.16375 5.5875 3.89375 7.4975 5.1925C8.295 4.97 9.15 4.85875 10.0013 4.855C10.85 4.86 11.7062 4.97 12.505 5.19375C14.4137 3.895 15.2525 4.165 15.2525 4.165C15.7975 5.5475 15.455 6.5675 15.3525 6.82125C15.9937 7.52375 16.38 8.42 16.38 9.51625C16.38 13.3725 14.0425 14.2212 11.815 14.47C12.1737 14.78 12.4937 15.3925 12.4937 16.3288C12.4937 17.6713 12.4812 18.7537 12.4812 19.0825C12.4812 19.3512 12.6613 19.6637 13.1687 19.565C17.1375 18.235 20 14.4737 20 10.04C20 4.495 15.5225 0 9.99875 0Z"
                      fill="#C4C4CC"
                    />
                  </svg>

                  <p className="text-gray-300 font-medium">{user.login}</p>
                </div>

                <p className="mt-6 text-zinc-300">{user.bio}</p>
              </div>

              <button
                type="button"
                className="defaultButton w-full hidden md:flex items-center justify-center gap-2"
              >
                <ShareNetwork /> Compartilhar
              </button>
            </>
          </main>
        </motion.div>
      </div>
    </>
  )
}

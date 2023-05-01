import { GitHubUser } from "@/@types/types";
import { useGithubUser } from "@/contexts/GithubUserContext";
import { ArrowRight, CircleNotch, Check, X } from "@phosphor-icons/react";
import axios from "axios";
import { AnimatePresence, motion } from 'framer-motion';
import Head from "next/head";
import { useRouter } from "next/router";
import { KeyboardEvent, useRef, useState } from "react";

export default function Home() {
  const [showInput, setShowInput] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fetchFinished, setFetchFinished] = useState(false);
  const [error, setError] = useState(false);

  const { addUser } = useGithubUser();
  const router = useRouter();

  const usernameRef = useRef<HTMLInputElement>(null)

  const handleFetchGithubData = async () => {
    const username = usernameRef.current?.value;
    if (!username) return;

    try {
      setLoading(true);
      setError(false);

      const { data } = await axios.get<GitHubUser>(`${process.env.NEXT_PUBLIC_GITHUB_API_URL}/users/${username}`);

      const githubUser = {
        name: data.name,
        avatar_url: data.avatar_url,
        login: data.login,
        bio: data.bio,
      }

      // mocking a request delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      addUser(githubUser);

      setLoading(false);
      setFetchFinished(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      router.push('/badge');
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  }

  const handleInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && handleFetchGithubData();

  const handleButtonKeyDown = (e: KeyboardEvent<HTMLDivElement>) => e.key === 'Enter' && setShowInput(true);

  const handleButtonIcon = () => {
    if (error) return <X color="red" size={18} />;
    if (!loading && !fetchFinished) return <ArrowRight color="white" size={18} />;
    if (loading && !fetchFinished) return <CircleNotch color="white" size={18} className="animate-spin" />;
    if (!loading && fetchFinished) return <Check color="white" size={18} />
  }

  return (
    <>
      <Head >
        <title>RX/XP | Home</title>
      </Head>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="flex flex-col items-center text-center gap-2 mt-60"
      >
        <p className="uppercase text-zinc-300 font-medium">Crie seu card para o rs/xp</p>
        <h1 className="text-transparent bg-heading bg-clip-text font-bold text-3xl leading-[1.2] max-w-xl">
          Vamos para o maior evento presencial da Rocketseat?
        </h1>
        <AnimatePresence>
          {!showInput && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowInput(true)}
              onKeyDown={handleButtonKeyDown}
              className="p-[1px] bg-gradient-to-tr from-rocketseat-light to-rocketseat-dark rounded-md mt-5"
            >
              <button
                type="button"
                className="text-zinc-200 h-12 px-12 rounded-md font-medium bg-black shadow-button hover:bg-gradient-to-r hover:from-rocketseat-light hover:via-rocketseat-dark hover:to-rocketseat-low hover:text-black transition-colors duration-300">
                Criar card
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showInput && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="relative p-[1px] bg-gradient-to-tr from-gray-500 to-gray-700 rounded-md focus-within:from-rocketseat-light focus-within:to-rocketseat-dark     transition-colors duration-300 mt-5">
              <input placeholder="Digite o seu github username" ref={usernameRef} onKeyDown={handleInputKeyDown} className="text-zinc-200 text-sm h-12 p-4 w-72 outline-none rounded-md font-medium bg-black transition-colors duration-500" />

              <button onClick={handleFetchGithubData} className="bg-gray-500/50 absolute right-2 top-1/4 rounded-full p-1">
                {handleButtonIcon()}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.main>
    </>
  )
}

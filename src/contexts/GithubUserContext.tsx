import { GitHubUser } from '@/@types/types';
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';

interface GithubUserData {
  user: GitHubUser;
  addUser: (user: GitHubUser) => void;
}

interface GithubUserProviderProps {
  children: ReactNode;
}

const GithubUserContext = createContext({} as GithubUserData);

export function GithubUserProvider({ children }: GithubUserProviderProps) {
  const [user, setUser] = useState({} as GitHubUser);

  const addUser = useCallback((user: GitHubUser) => setUser(user), []);

  return (
    <GithubUserContext.Provider value={{ user, addUser }}>
      {children}
    </GithubUserContext.Provider>
  );
}

export const useGithubUser = () => useContext(GithubUserContext);

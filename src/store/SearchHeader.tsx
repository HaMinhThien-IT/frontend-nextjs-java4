import { createContext, ReactNode, useState } from 'react';
import { Post } from '../model/Post';
interface postContextDefault {
  searchValue: string | undefined;
  getDataSearch: (data: string) => void;
}
const postDefault: postContextDefault = {
  searchValue: undefined,
  getDataSearch: (data: string) => {},
};
interface postContextProvider {
  children: ReactNode;
}
export const searchContext = createContext<postContextDefault>(postDefault);
export default function Searchcontext({ children }: postContextProvider) {
  const [searchValue, setSearchValue] = useState<string | undefined>(undefined);
  const getDataSearch = (data: string) => {
    setSearchValue(data);
  };
  const data = { searchValue, getDataSearch };
  return <searchContext.Provider value={data}>{children}</searchContext.Provider>;
}

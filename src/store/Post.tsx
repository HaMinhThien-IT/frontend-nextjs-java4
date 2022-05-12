import { createContext, ReactNode, useState } from 'react';
import { Post } from '../model/Post';
interface postContextDefault {
  post: Post;
  getDataPost: (data: Post) => void;
}
const postDefault: postContextDefault = {
  post: {} as Post,
  getDataPost: (data: Post) => {},
};
interface postContextProvider {
  children: ReactNode;
}
export const postContext = createContext<postContextDefault>(postDefault);
export default function Postcontext({ children }: postContextProvider) {
  const [post, setPost] = useState<Post>({} as Post);
  const getDataPost = (data: Post) => {
    setPost(data);
  };
  const data = { post, getDataPost };
  return <postContext.Provider value={data}>{children}</postContext.Provider>;
}

import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { Auth } from '../../pages/login';
import { parseJSON } from '../hook/useLocalStorage';

interface nameContextDefault {
  getMe: Auth;
  onGetMe: () => void;
}

const authDefault: nameContextDefault = {
  getMe: {
    idUser: 0,
    email: '',
    imgUser: '',
    role: '',
    name: '',
  },
  onGetMe: () => {},
};

interface userContextProvider {
  children: ReactNode;
}

export const authContext = createContext<nameContextDefault>(authDefault);

export default function AuthContext({ children }: userContextProvider) {
  const [getMe, setGetMe] = useState<Auth>({
    idUser: 0,
    email: '',
    imgUser: '',
    role: '',
    name: '',
  });
  const keyLocal: string = `user`;
  const onGetMe = () => {
    const getMe: Auth = parseJSON(localStorage.getItem(keyLocal)) || {
      idUser: 0,
      email: '',
      imgUser: '',
      role: '',
      name: '',
    };
    setGetMe(getMe);
  };
  useEffect(() => {
    const getMe: Auth = parseJSON(localStorage.getItem(keyLocal)) || {
      idUser: 0,
      email: '',
      imgUser: '',
      role: '',
      name: '',
    };
    setGetMe(getMe);
  }, []);

  const data = { getMe, onGetMe };
  return <authContext.Provider value={data}>{children}</authContext.Provider>;
}

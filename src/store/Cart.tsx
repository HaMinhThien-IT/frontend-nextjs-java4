import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { parseJSON } from '../hook/useLocalStorage';
import { Cart } from '../model/Cart';
import { authContext } from './Auth';

interface nameContextDefault {
  listCart: Cart[];
  onListCart: () => void;
}

const cartDefault: nameContextDefault = {
  listCart: [
    {
      idCart: '',
      idCourse: 0,
      idUser: 12,
      imageCourse: '',
      price: 799000,
      title: '',
    },
  ],
  onListCart: () => {},
};

interface userContextProvider {
  children: ReactNode;
}

export const cartContext = createContext<nameContextDefault>(cartDefault);

export default function CartContext({ children }: userContextProvider) {
  const [listCart, setListCart] = useState<Cart[]>([]);
  const { getMe } = useContext(authContext);
  const user_id = getMe.idUser;
  const keyLocal: string = `cart-${user_id}`;
  const onListCart = () => {
    const itemCarts: Cart[] = parseJSON(localStorage.getItem(keyLocal)) || [];
    setListCart(itemCarts);
  };
  useEffect(() => {
    const itemCarts: Cart[] = parseJSON(localStorage.getItem(keyLocal)) || [];
    setListCart(itemCarts);
  }, [user_id]);

  const data = { listCart, onListCart };
  return <cartContext.Provider value={data}>{children}</cartContext.Provider>;
}

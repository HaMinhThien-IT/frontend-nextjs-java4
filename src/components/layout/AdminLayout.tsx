import React, { ReactElement, ReactNode, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { authContext } from '../../store/Auth';
import Layout from './Layout';
type Props = {
  children: ReactNode;
};

const ALayout = (props: Props) => {
  const { getMe } = useContext(authContext);
  const router = useRouter();
  useEffect(() => {
    if (getMe.role !== 'user') {
      console.log('day la admin');
    } else {
      router.push('/');
    }
  }, [getMe]);
  return <Layout>{props.children}</Layout>;
};
const AdminLayout = (page: ReactElement) => <ALayout>{page}</ALayout>;
export default AdminLayout;

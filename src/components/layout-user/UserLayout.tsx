import React, { ReactElement, ReactNode, useContext } from 'react';
import { authContext } from '../../store/Auth';
import Layout from './Layout';

type Props = {
  children: ReactNode;
};

const ULayout = (props: Props) => {
  return <Layout>{props.children}</Layout>;
};
const UserLayout = (page: ReactElement) => <ULayout>{page}</ULayout>;
export default UserLayout;

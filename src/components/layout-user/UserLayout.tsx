import React, { ReactElement, ReactNode } from 'react';
import Layout from './Layout';

type Props = {
  children: ReactNode;
};

const ULayout = (props: Props) => {
  return <Layout>{props.children}</Layout>;
};
const UserLayout = (page: ReactElement) => <ULayout>{page}</ULayout>;
export default UserLayout;

import React, { ReactElement, ReactNode } from 'react';
import Layout from './Layout';
type Props = {
  children: ReactNode;
};

const ALayout = (props: Props) => {
  return <Layout>{props.children}</Layout>;
};
const AdminLayout = (page: ReactElement) => <ALayout>{page}</ALayout>;
export default AdminLayout;

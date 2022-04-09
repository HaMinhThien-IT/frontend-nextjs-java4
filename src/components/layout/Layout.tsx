import { Grid } from '@mui/material';
import React, { ReactElement, ReactNode } from 'react';
import MenuApp from '../menu-admin';
type Props = {
  children: ReactNode;
};

export const Layout = (props: Props) => {
  return (
    <Grid pt={2} pr={2} container lg={12} xl={12}>
      <Grid item lg={0.6} xl={0.6}>
        <MenuApp />
      </Grid>
      <Grid item lg={11.4} xl={11.4}>
        {props.children}
      </Grid>
    </Grid>
  );
};
export const LayoutFn = (page: ReactElement) => <Layout>{page}</Layout>;
export default Layout;

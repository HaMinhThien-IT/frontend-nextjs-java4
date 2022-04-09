import { Box, Grid } from '@mui/material';
import React, { ReactElement, ReactNode } from 'react';
import Footer from '../user/Footer';
import Header from '../user/Header';
import MenuUser from '../user/MenuUser';

type Props = {
  children: ReactNode;
};

export const Layout = (props: Props) => {
  return (
    <Box>
      <Header />
      <Box
        sx={{
          padding: '10px',
          minHeight: 'calc(100vh - 100px)',
        }}
      >
        <Grid container direction="row" justifyContent="space-between" alignItems="flex-start" lg={12}>
          <Grid item lg={0.6}>
            <MenuUser />
          </Grid>
          <Grid item lg={11.2}>
            {props.children}
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </Box>
  );
};
export const LayoutUSer = (page: ReactElement) => <Layout>{page}</Layout>;
export default Layout;

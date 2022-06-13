import { Box, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import React, { ReactElement, ReactNode } from 'react';
import Searchcontext from '../../store/SearchHeader';
import Footer from '../user/Footer';
import Header from '../user/Header';
import MenuUser from '../user/MenuUser';

type Props = {
  children: ReactNode;
};

export const Layout = (props: Props) => {
  const router = useRouter();
  console.log(router.pathname);

  return (
    <Searchcontext>
      <Box>
        <Header />
        <Box
          sx={{
            padding: '10px',
            minHeight: 'calc(100vh - 70px)',
          }}
        >
          <Grid container direction="row" justifyContent="space-between" alignItems="flex-start" lg={12}>
            <Grid item lg={String(router.pathname) == '/post' ? 0 : 0.6}>
              {String(router.pathname) == '/post' ? <></> : <MenuUser />}
            </Grid>
            <Grid item lg={String(router.pathname) == '/post' ? 12 : 11.2}>
              {props.children}
            </Grid>
          </Grid>
        </Box>
        <Footer />
      </Box>
    </Searchcontext>
  );
};
export const LayoutUSer = (page: ReactElement) => <Layout>{page}</Layout>;
export default Layout;

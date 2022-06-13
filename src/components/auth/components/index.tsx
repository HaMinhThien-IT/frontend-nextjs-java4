import { Box, BoxProps, Grid, Stack, StackProps } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { type } from 'os';
import React from 'react';
import { CgPassword } from 'react-icons/cg';
import UserLayout from '../../layout-user/UserLayout';
type props = {
  title: string;
  loginChua: JSX.Element;
  stackProps: JSX.Element;
  button: string;
  event: () => void;
  linked: string;
  eventPassword?: () => void;
};
export default function AuthComponent(props: props) {
  const router = useRouter();
  console.log(router.asPath);

  return (
    <Stack
      direction={'row'}
      justifyContent="center"
      alignItems={'center'}
      sx={{
        backgroundImage: `url("/backgroudAuth.png")`,
        width: '100%',
        minWidth: '100vw',
        height: '100vh',
        objectFit: 'cover',
        backgroundSize: 'cover',
      }}
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ background: 'rgb(255,255,255)', borderRadius: '6px' }}
        lg={5.1}
        p={7}
      >
        <Grid item lg={12}>
          <img
            src="https://accounts.fullstack.edu.vn/assets/icon/f8_icon.png"
            alt=""
            style={{ width: '100%', maxWidth: '44px' }}
          />
        </Grid>
        <Grid item lg={12}>
          <Box
            sx={{
              color: '#292929',
              lineHeight: '39px',
              fontSize: '23px',
              fontWeight: 700,
              marginTop: '15px',
              marginBottom: '30px',
            }}
          >
            {props.title}
          </Box>
          {props.stackProps}
          <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
            <button
              onClick={() => props.event()}
              style={{
                padding: '10px 16px',
                width: '100%',
                color: '#F47723',
                background: 'none',
                border: '1px solid #F47723',
                fontWeight: 600,
                borderRadius: '20px',
                cursor: 'pointer',
                fontSize: '13px',
              }}
            >
              {props.button}
            </button>
          </Stack>
          <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
            <Link href={`/${props.linked}`}>
              <a>{props.loginChua}</a>
            </Link>
          </Stack>
          {router.asPath == '/login' && (
            <Stack direction="row" justifyContent="center" alignItems="center">
              <Box sx={{ color: '#000000', lineHeight: '25px', fontSize: '14px', fontWeight: 400 }}>
                Bạn quên mật khẩu ư ?{' '}
                <span
                  onClick={props.eventPassword}
                  style={{
                    color: '#F47723',
                    lineHeight: '25px',
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  Click me !
                </span>
              </Box>
            </Stack>
          )}
        </Grid>
      </Grid>
    </Stack>
  );
}

import { Box, Stack } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import AuthComponent from '../../src/components/auth/components';
import { CgPassword } from 'react-icons/cg';
import { authContext } from '../../src/store/Auth';
import { useRouter } from 'next/router';

export default function Register() {
  const { getMe } = useContext(authContext);
  const router = useRouter();
  const register = () => {
    console.log('hihi');
  };
  useEffect(() => {
    if (getMe.idUser < 1) {
      console.log('day la admin');
    } else {
      console.log('user');
      router.push('/');
    }
  }, [getMe]);
  return (
    <AuthComponent
      linked="login"
      event={register}
      title="Đăng ký tài khoản với F8"
      loginChua={
        <Box sx={{ color: '#000000', lineHeight: '25px', fontSize: '14px', fontWeight: 400, marginTop: '10px' }}>
          Bạn đã có tài khoản?{' '}
          <span
            style={{
              color: '#F47723',
              lineHeight: '25px',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Đăng nhập
          </span>
        </Box>
      }
      stackProps={
        <>
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={2}
            sx={{ border: '2px solid #ddd', padding: '10px 16px', borderRadius: '20px', marginBottom: '14px' }}
          >
            <img
              src="https://accounts.fullstack.edu.vn/assets/images/signin/personal-18px.svg"
              style={{ width: '20px' }}
              alt=""
            />
            <input type="text" style={{ outline: 'none', border: 'none', width: '100%' }} placeholder="Email ..." />
          </Stack>
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={2}
            sx={{ border: '2px solid #ddd', padding: '10px 16px', borderRadius: '20px', marginBottom: '14px' }}
          >
            <CgPassword fontSize={'20px'} color="rgb(117,117,117)" />
            <input type="text" style={{ outline: 'none', border: 'none', width: '100%' }} placeholder="Password ..." />
          </Stack>
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={2}
            sx={{ border: '2px solid #ddd', padding: '10px 16px', borderRadius: '20px', marginBottom: '14px' }}
          >
            <CgPassword fontSize={'20px'} color="rgb(117,117,117)" />
            <input
              type="text"
              style={{ outline: 'none', border: 'none', width: '100%' }}
              placeholder="Repassword ..."
            />
          </Stack>
        </>
      }
      button={'Đăng ký'}
    />
  );
}

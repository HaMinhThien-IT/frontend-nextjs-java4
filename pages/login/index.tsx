import { Box, BoxProps, Grid, Stack, StackProps } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import AuthComponent from '../../src/components/auth/components';
import { CgPassword } from 'react-icons/cg';
import { authController } from '../../src/controller/AuthController';
import { User } from '../../src/model/User';
import { useRouter } from 'next/router';
import { authContext } from '../../src/store/Auth';
type State = {
  email: string;
  password: string;
};
export interface Auth {
  idUser: number;
  name: string;
  imgUser: string;
  role: string;
  email: string;
}
export default function Login() {
  const { onGetMe, getMe } = useContext(authContext);
  const router = useRouter();
  const [state, setState] = useState<State>({
    email: '',
    password: '',
  });
  const login = () => {
    authController.login(state.email, state.password).then((res) => {
      if (res != '') {
        const UserLocal: Auth = {
          idUser: res.idUser,
          name: res.name,
          imgUser: res.imgUser,
          role: res.role,
          email: res.email,
        };
        localStorage.setItem(`user`, JSON.stringify(UserLocal));
        onGetMe();
        router.push('/');
      } else {
        console.log('sai roi');
      }
    });
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
      linked="register"
      event={login}
      title=" Đăng ký tài khoản với F8"
      loginChua={
        <Box sx={{ color: '#000000', lineHeight: '25px', fontSize: '14px', fontWeight: 400, marginTop: '10px' }}>
          Bạn chưa có tài khoản?{' '}
          <span
            style={{
              color: '#F47723',
              lineHeight: '25px',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Đăng kí
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
            <input
              onChange={(e) => setState({ ...state, email: e.target.value })}
              type="text"
              style={{ outline: 'none', border: 'none', width: '100%' }}
              placeholder="Email ..."
            />
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
              onChange={(e) => setState({ ...state, password: e.target.value })}
              type="text"
              style={{ outline: 'none', border: 'none', width: '100%' }}
              placeholder="Password ..."
            />
          </Stack>
        </>
      }
      button={'Đăng nhập'}
    />
  );
}

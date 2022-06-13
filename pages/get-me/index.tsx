import { Box, Grid, Stack } from '@mui/material';
import React, { useContext } from 'react';
import { AiOutlineCode, AiOutlineCodepenCircle, AiOutlineMacCommand } from 'react-icons/ai';
import { BiBookAlt } from 'react-icons/bi';
import UserLayout from '../../src/components/layout-user/UserLayout';
import { authContext } from '../../src/store/Auth';

export default function GetMe() {
  const { getMe } = useContext(authContext);
  console.log(getMe);

  return (
    <Grid pt={2} container direction="row" justifyContent="space-between" alignItems="flex-start">
      <Grid
        sx={{
          boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
          borderRadius: '10px',
        }}
        item
        lg={2.5}
      >
        <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={2} p={3}>
          <img src={getMe.imgUser} alt="" width="100%" style={{ maxWidth: '50px', borderRadius: '50%' }} />
          <Box
            sx={{
              color: '#273167',
              fontSize: '20px',
              lineHeight: '30px',
              fontWeight: 700,
            }}
          >
            {getMe.name || getMe.email}
            <Box sx={{ color: '#666666', fontSize: '16px', lineHeight: '24px', fontWeight: 400 }}>
              Người dùng tại F8
            </Box>
          </Box>
        </Stack>
        <Stack p={3} pt={0} direction="row" justifyContent="flex-start" alignItems="center" spacing={2}>
          <BiBookAlt fontSize={'25px'} color="#273167" />
          <Box
            sx={{
              color: '#273167',
              fontSize: '16px',
              lineHeight: '27px',
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            Khu vực học tập
          </Box>
        </Stack>
        <Stack p={3} pt={0} direction="row" justifyContent="flex-start" alignItems="center" spacing={2}>
          <AiOutlineMacCommand fontSize={'25px'} color="#273167" />
          <Box
            sx={{
              color: '#273167',
              fontSize: '16px',
              lineHeight: '27px',
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            Thành viên vàng
          </Box>
        </Stack>
        <Stack p={3} pt={0} direction="row" justifyContent="flex-start" alignItems="center" spacing={2}>
          <AiOutlineCode fontSize={'25px'} color="#273167" />
          <Box
            sx={{
              color: '#273167',
              fontSize: '16px',
              lineHeight: '27px',
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            Kích hoạt mã
          </Box>
        </Stack>
        <Stack p={3} pt={0} direction="row" justifyContent="flex-start" alignItems="center" spacing={2}>
          <AiOutlineCodepenCircle fontSize={'25px'} color="#273167" />
          <Box
            sx={{
              color: '#273167',
              fontSize: '16px',
              lineHeight: '27px',
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            Nhận hộ trợ
          </Box>
        </Stack>
      </Grid>

      <Grid item lg={8.8}>
        <Box
          sx={{
            color: '#273167',
            fontSize: '25px',
            lineHeight: '38px',
            fontWeight: 800,
            cursor: 'pointer',
          }}
        >
          Hồ Sơ Của Tôi
        </Box>
        <Box
          sx={{
            color: '#444655',
            fontSize: '16px',
            lineHeight: '24px',
            fontWeight: 400,
            cursor: 'pointer',
          }}
        >
          Quản lý thông tin hồ sơ để bảo mật tài khoản
        </Box>
        <div className="card">
          <div className="img">
            <img src={getMe.imgUser} />
          </div>
          <div className="infos">
            <div className="name">
              <h2>{getMe.name}</h2>
              <h4>{getMe.email}@gmail.com</h4>
            </div>
            <p className="text">I am a Front End Developer, follow me to be the first who see my new work.</p>
            <ul className="stats">
              <li>
                <h3>15K</h3>
                <h4>Views</h4>
              </li>
              <li>
                <h3>82</h3>
                <h4>Projects</h4>
              </li>
              <li>
                <h3>1.3M</h3>
                <h4>Followers</h4>
              </li>
            </ul>
            <div className="links">
              <button className="follow">Follow</button>
              <button className="view">View profile</button>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}
GetMe.getLayout = UserLayout;

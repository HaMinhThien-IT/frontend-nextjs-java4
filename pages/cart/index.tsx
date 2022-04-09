import { Box, Grid, Stack } from '@mui/material';
import React from 'react';
import UserLayout from '../../src/components/layout-user/UserLayout';

export default function Cart() {
  return (
    <Stack mt={2} direction="column" justifyContent="center" alignItems="center" spacing={2}>
      <Box
        sx={{
          fontWeight: 700,
          fontSize: '32px',
          lineHeight: '37px',
          color: '#000000',
        }}
      >
        Xem lại yêu cầu đăng ký
      </Box>
      <Grid
        sx={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px', borderRadius: '10px', padding: '20px' }}
        container
        lg={8}
      >
        <Grid item lg={3.5}>
          <img
            src="https://i.ytimg.com/vi/x0fSBAgBrOQ/maxresdefault.jpg"
            alt=""
            style={{
              width: '100%',
              maxWidth: '199px',
              height: 'auto',
              borderRadius: '20px',
              boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
            }}
          />
        </Grid>
        <Grid mt={2} item lg={8.5}>
          <Box
            sx={{
              fontWeight: 700,
              fontSize: '21px',
              lineHeight: '32px',
              color: '#474747',
            }}
          >
            Xây Dựng Website với ReactJS
          </Box>
          <Stack direction="row" mt={1} spacing={3}>
            <Box
              sx={{
                fontWeight: 700,
                fontSize: '21px',
                lineHeight: '32px',
                color: '#46b5a1',
              }}
            >
              799.999đ
            </Box>
            <Box
              sx={{
                fontWeight: 500,
                fontSize: '21px',
                lineHeight: '32px',
                color: '#545454',
                textDecorationLine: 'line-through',
              }}
            >
              1,399,000đ
            </Box>
            <Box
              sx={{
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '32px',
                color: '#2979ff ',
                paddingLeft: '130px',
                cursor: 'pointer',
              }}
            >
              Bỏ khóa này
            </Box>
          </Stack>
        </Grid>
      </Grid>
      <button
        style={{
          background: 'rgb(240,81,35)',
          marginTop: '16px',
          padding: '10px 20px',
          border: 'none',
          outline: 'none',
          borderRadius: '5px',
          color: '#ffffff',
          fontSize: '16px',
          lineHeight: '18px',
          fontWeight: 600,
          cursor: 'pointer',
        }}
      >
        Hoàn tất đăng ký
      </button>
    </Stack>
  );
}
Cart.getLayout = UserLayout;

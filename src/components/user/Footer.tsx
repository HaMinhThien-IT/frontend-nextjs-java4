import React from 'react';
import { Box, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
type Props = {};

export default function Footer({}: Props) {
  return (
    <Box p={6} pt={7} pb={7} sx={{ background: 'rgb(24,24,33)' }}>
      <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
        <Grid container direction="row" justifyContent="space-between" alignItems="flex-start" lg={9}>
          <Grid item lg={3}>
            <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={1.4}>
              <Image src="/logo.png" alt="Picture of the author" width={'38px'} height={'38px'} />
              <Box
                sx={{
                  color: '#FFFF',
                  fontWeight: 700,
                  lineHeight: '16px',
                  fontSize: '14px',
                }}
              >
                Học Lập Trình Để Đi Làm
              </Box>
            </Stack>
            <Box
              sx={{
                color: 'rgb(169,179,167)',
                fontWeight: 400,
                lineHeight: '22px',
                fontSize: '14px',
              }}
            >
              Điện thoại: 0246.329.1102
            </Box>
            <Box
              sx={{
                color: 'rgb(169,179,167)',
                fontWeight: 400,
                lineHeight: '22px',
                fontSize: '14px',
              }}
            >
              Email: contact@fullstack.edu.vn
            </Box>
            <Box
              sx={{
                color: 'rgb(169,179,167)',
                fontWeight: 400,
                lineHeight: '22px',
                fontSize: '14px',
              }}
            >
              Địa chỉ: Nhà D9, lô A10, Nam Trung Yên, Trung Hòa, Cầu Giấy, Hà Nội
            </Box>
            <Box
              sx={{
                color: '#FFFF',
                fontWeight: 700,
                lineHeight: '22px',
                fontSize: '14px',
              }}
            >
              {' '}
              <Box sx={{ marginTop: '10px' }}>
                <Image src="/dmca.png" alt="Picture of the author" width={'121px'} height={'24px'} />
              </Box>
            </Box>
          </Grid>
          <Grid item lg={2.5}>
            <Box
              sx={{
                color: '#FFFF',
                fontWeight: 700,
                lineHeight: '16px',
                fontSize: '14px',
                padding: '10px 10px 10px 0px',
              }}
            >
              Về F8
            </Box>
            <Box
              sx={{
                color: 'rgb(169,179,167)',
                fontWeight: 400,
                lineHeight: '22px',
                fontSize: '14px',
              }}
            >
              Giới thiệu
            </Box>
            <Box
              sx={{
                color: 'rgb(169,179,167)',
                fontWeight: 400,
                lineHeight: '22px',
                fontSize: '14px',
              }}
            >
              Cơ hội việc làm
            </Box>
            <Box
              sx={{
                color: 'rgb(169,179,167)',
                fontWeight: 400,
                lineHeight: '22px',
                fontSize: '14px',
              }}
            >
              Đối tác
            </Box>
          </Grid>

          <Grid item lg={2.5}>
            <Box
              sx={{
                color: '#FFFF',
                fontWeight: 700,
                lineHeight: '16px',
                fontSize: '14px',
                padding: '10px 10px 10px 0px',
              }}
            >
              HỖ TRỢ
            </Box>
            <Box
              sx={{
                color: 'rgb(169,179,167)',
                fontWeight: 400,
                lineHeight: '22px',
                fontSize: '14px',
              }}
            >
              Liên hệ
            </Box>
            <Box
              sx={{
                color: 'rgb(169,179,167)',
                fontWeight: 400,
                lineHeight: '22px',
                fontSize: '14px',
              }}
            >
              Bảo mật
            </Box>
            <Box
              sx={{
                color: 'rgb(169,179,167)',
                fontWeight: 400,
                lineHeight: '22px',
                fontSize: '14px',
              }}
            >
              Điều khoản
            </Box>
          </Grid>

          <Grid item lg={3}>
            <Box
              sx={{
                color: '#FFFF',
                fontWeight: 700,
                lineHeight: '16px',
                fontSize: '14px',
                padding: '10px 10px 10px 0px',
              }}
            >
              CÔNG TY CỔ PHẦN CÔNG NGHỆ GIÁO DỤC F8
            </Box>
            <Box
              sx={{
                color: 'rgb(169,179,167)',
                fontWeight: 400,
                lineHeight: '22px',
                fontSize: '14px',
              }}
            >
              Mã số thuế: 0109922901
            </Box>
            <Box
              sx={{
                color: 'rgb(169,179,167)',
                fontWeight: 400,
                lineHeight: '22px',
                fontSize: '14px',
              }}
            >
              Ngày thành lập: 04/03/2022
            </Box>
            <Box
              sx={{
                color: 'rgb(169,179,167)',
                fontWeight: 400,
                lineHeight: '22px',
                fontSize: '14px',
              }}
            >
              Lĩnh vực: Công nghệ, giáo dục, lập trình. F8 xây dựng và phát triển những sản phẩm mạng lại giá trị cho
              cộng đồng.
            </Box>
          </Grid>
        </Grid>
        {/* bottom footer */}
      </Stack>
      <Grid pt={6} ml={21} container direction="row" justifyContent="space-between" alignItems="flex-start" lg={9}>
        <Grid item>
          <Box
            sx={{
              color: 'rgb(169,179,167)',
              fontWeight: 400,
              lineHeight: '22px',
              fontSize: '14px',
            }}
          >
            © 2022 F8 - Nền tảng học lập trình số 1 Việt Nam
          </Box>
        </Grid>
        <Grid item></Grid>
      </Grid>
    </Box>
  );
}

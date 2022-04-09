import { Avatar, Box, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import { FiSearch } from 'react-icons/fi';

import { BsBellFill } from 'react-icons/bs';
import Link from 'next/link';
type Props = {};

export default function Header({}: Props) {
  return (
    <Grid
      p={1.6}
      pr={3.4}
      pl={3.4}
      sx={{
        borderBottom: '1px solid #ddd',
      }}
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      lg={12}
    >
      <Grid item container justifyContent="left" lg={3.5}>
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={1.4}>
          <Link href="/">
            <Image src="/logo.png" alt="Picture of the author" width={'38px'} height={'38px'} />
          </Link>
          <Box
            sx={{
              color: '#000000',
              fontWeight: 700,
              lineHeight: '16px',
              fontSize: '14px',
            }}
          >
            Học Lập Trình Để Đi Làm
          </Box>
        </Stack>
      </Grid>
      <Grid item lg={4}>
        <Stack
          sx={{
            border: '1px solid #ddd',
            padding: '10px',
            borderRadius: '20px',
          }}
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <FiSearch fontSize={'20px'} />
          <input
            style={{ border: 0, outline: 0, width: '100%' }}
            placeholder="Tìm kiếm khóa học, bài viết , video ..."
          ></input>
        </Stack>
      </Grid>
      <Grid container justifyContent="right" item lg={4}>
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
          <Box
            sx={{
              color: '#000000',
              fontWeight: 700,
              lineHeight: '16px',
              fontSize: '14px',
              marginRight: '15px',
            }}
          >
            Khóa học của tôi
          </Box>
          <BsBellFill
            fontSize={'18px'}
            style={{
              marginRight: '10px',
            }}
          />
          <Avatar
            sx={{
              width: '28px',
              height: '28px',
            }}
            alt="Remy Sharp"
            src="/avt.jpg"
          />
        </Stack>
      </Grid>
    </Grid>
  );
}

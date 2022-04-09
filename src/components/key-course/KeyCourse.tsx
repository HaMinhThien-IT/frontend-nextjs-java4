import { Box, Grid } from '@mui/material';
import React from 'react';
import ListKeyCourse from './ListKeyCourse';

export default function KeyCourse() {
  return (
    <Box>
      <Grid lg={12} mt={2} container direction="row" justifyContent="space-between" alignItems="flex-start">
        <Grid lg={8}>
          <Box
            sx={{
              color: '#333333',
              fontWeight: 400,
              lineHeight: '22px',
              fontSize: '15px',
            }}
          >
            <span
              style={{
                color: '#000000',
                fontSize: '14px',
                lineHeight: '16px',
                fontWeight: 600,
              }}
            >
              4
            </span>{' '}
            chương •{' '}
            <span
              style={{
                color: '#000000',
                fontSize: '14px',
                lineHeight: '16px',
                fontWeight: 600,
              }}
            >
              10
            </span>{' '}
            bài học • Thời lượng{' '}
            <span
              style={{
                color: '#000000',
                fontSize: '14px',
                lineHeight: '16px',
                fontWeight: 600,
              }}
            >
              03 giờ 25 phút
            </span>
          </Box>
        </Grid>
        <Grid item container justifyContent={'right'} lg={4}>
          <Box
            sx={{
              color: '#f05123',
              fontWeight: 600,
              lineHeight: '16px',
              fontSize: '14px',
            }}
          >
            Mở rộng tất cả
          </Box>
        </Grid>
      </Grid>
      <ListKeyCourse />
    </Box>
  );
}

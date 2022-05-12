import { Box, Grid } from '@mui/material';
import React, { useState } from 'react';
import UserLayout from '../../src/components/layout-user/UserLayout';
import BlogItem from './components/BlogItem';
import Target from './components/Target';

type Props = {};
type State = {
  target: string[];
};
export default function Blog({}: Props) {
  const [state, setState] = useState<State>({
    target: ['Front-end / Mobile apps', 'Back-end / Devops', 'UI / UX / Design', 'Others'],
  });
  return (
    <Box pt={3} pl={4.5} pr={4.5}>
      <Box
        sx={{
          fontWeight: 900,
          fontSize: '24px',
          lineHeight: '28px',
          color: '#000000',
          marginBottom: '25px',
        }}
      >
        Bài viết nổi bật
      </Box>
      <Box
        sx={{
          color: '#666666',
          fontSize: '14px',
          lineHeight: '16px',
          fontWeight: 400,
          marginBottom: '50px',
        }}
      >
        Tổng hợp các bài viết chia sẻ về kinh nghiệm tự học lập trình online và các kỹ thuật lập trình web.
      </Box>
      <Grid container direction="row" justifyContent="space-between" alignItems="flex-start" lg={12} pt={3}>
        <Grid item lg={7.5}>
          <BlogItem />
        </Grid>
        <Grid item lg={3}>
          <Box
            sx={{
              color: '#757575',
              fontSize: '14px',
              lineHeight: '25px',
              fontWeight: 500,
              marginBottom: '20px',
            }}
          >
            CÁC CHỦ ĐỀ ĐƯỢC ĐỀ XUẤT
          </Box>
          <Grid container direction="row" justifyContent="space-between" alignItems="center" lg={12} spacing={2}>
            <Grid item lg={12}>
              {state.target.map((item, index) => (
                <Target key={index} linkTarget={item} />
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
Blog.getLayout = UserLayout;

import { Box, Grid, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import UserLayout from '../../src/components/layout-user/UserLayout';
import RichTextEditor from '../../src/components/RichText';
type State = {
  content: string;
  newPost: string;
  check: boolean;
  checkN: boolean;
};
export default function Posts() {
  const [state, setState] = useState<State>({ content: '', newPost: '', check: false, checkN: false });

  useEffect(() => {
    if (state.content != '<p><br></p>') {
      const timeOutId = setTimeout(() => {
        localStorage.setItem('content', state.content);
      }, 300);
      return () => clearTimeout(timeOutId);
    }
  }, [state.content]);
  return (
    <Grid container lg={12} p={3}>
      <Grid
        sx={{
          '& .mantine-lml7tc': {
            border: 'none',
          },
          '& .mantine-bdajhj': {
            border: 'none',
            padding: '0px',
          },
          '& .mantine-1iro4rz': {
            border: 'none',
          },
          '&  .ql-editor': {
            padding: '0px',
            marginTop: '10px',
          },
        }}
        item
        lg={12}
      >
        <Stack>
          <input
            style={{
              color: '#292929',
              fontWeight: 500,
              lineHeight: '45px',
              fontSize: '32px',
              border: 'none',
              outline: 'none',
            }}
            placeholder="Tiêu đề"
          />
        </Stack>
        <RichTextEditor
          style={{
            width: '100%',
            marginTop: '10px',
          }}
          value={state.content}
          onChange={(e) => setState({ ...state, content: e })}
        />
        {state.checkN && <>{state.check ? ' da luu ' : 'dang luu'}</>}
      </Grid>
    </Grid>
  );
}
Posts.getLayout = UserLayout;

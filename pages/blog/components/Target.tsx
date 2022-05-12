import { Box } from '@mui/material';
import React from 'react';
type Props = {
  linkTarget: string;
};
export default function Target(props: Props) {
  return (
    <Box
      sx={{
        background: 'rgb(242,242,242)',
        width: 'max-content',
        padding: '7px 15px',
        borderRadius: '20px',
        cursor: 'pointer',
        marginBottom: '10px',
      }}
    >
      <Box
        sx={{
          color: '#333333',
          fontSize: '14px',
          lineHeight: '25px',
          fontWeight: 500,
        }}
      >
        {props.linkTarget}
      </Box>
    </Box>
  );
}

import { Avatar, Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiFillWindows, AiFillPlusCircle } from 'react-icons/ai';
import { BsFillPersonLinesFill, BsBookFill } from 'react-icons/bs';
import { MdCategory } from 'react-icons/md';
type Props = {};

export default function MenuApp({}: Props) {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        background: 'rgb(255,255,255)',
      }}
      lg={12}
    >
      <Grid item lg={12}>
        <Image
          src={'/logo.png'}
          alt="Picture of the author"
          width={38}
          height={38}
          style={{
            width: '100%',
          }}
        />
      </Grid>
      <Grid
        mt={1}
        mb={1}
        pt={1.1}
        pb={1.1}
        item
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        lg={12}
        sx={{
          borderRadius: '10px',
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: '#f5f5f5',
            color: '#1a1a1a',
          },
        }}
      >
        <AiFillWindows fontSize={'33px'} />
        <span
          style={{
            fontWeight: '700',
            fontSize: '12px',
          }}
        >
          Course
        </span>
      </Grid>
      <Grid
        mt={1}
        mb={1}
        pt={1.1}
        pb={1.1}
        item
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        lg={12}
        sx={{
          cursor: 'pointer',
          borderRadius: '10px',
          '&:hover': {
            backgroundColor: '#f5f5f5',
            color: '#1a1a1a',
          },
        }}
      >
        <BsFillPersonLinesFill fontSize={'33px'} />
        <span
          style={{
            fontWeight: '700',
            fontSize: '12px',
          }}
        >
          User
        </span>
      </Grid>
      <Grid
        mt={1}
        mb={1}
        pt={1.1}
        pb={1.1}
        item
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        lg={12}
        sx={{
          cursor: 'pointer',
          borderRadius: '10px',
          '&:hover': {
            backgroundColor: '#f5f5f5',
            color: '#1a1a1a',
          },
        }}
      >
        <BsBookFill fontSize={'33px'} />
        <span
          style={{
            fontWeight: '700',
            fontSize: '12px',
          }}
        >
          Blog
        </span>
      </Grid>
      <Grid
        mt={1}
        mb={1}
        pt={1.1}
        pb={1.1}
        item
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        lg={12}
        sx={{
          cursor: 'pointer',
          borderRadius: '10px',
          '&:hover': {
            backgroundColor: '#f5f5f5',
            color: '#1a1a1a',
          },
        }}
      >
        <MdCategory fontSize={'33px'} />
        <span
          style={{
            fontWeight: '700',
            fontSize: '12px',
          }}
        >
          Category
        </span>
      </Grid>
      <Grid
        mt={1}
        mb={1}
        pt={1.1}
        pb={1.1}
        item
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        lg={12}
        sx={{
          cursor: 'pointer',
          borderRadius: '10px',
          '&:hover': {
            backgroundColor: '#f5f5f5',
            color: '#1a1a1a',
          },
        }}
      >
        <AiFillPlusCircle fontSize={'33px'} />
        <span
          style={{
            fontWeight: '700',
            fontSize: '12px',
          }}
        >
          Update ...
        </span>
      </Grid>
    </Grid>
  );
}

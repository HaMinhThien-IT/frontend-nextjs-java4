import { Avatar, Box, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useContext } from 'react';
import { FiSearch } from 'react-icons/fi';
import Badge from '@mui/material/Badge';
import { BsBellFill } from 'react-icons/bs';
import Link from 'next/link';
import { cartContext } from '../../store/Cart';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { authContext } from '../../store/Auth';
import { useRouter } from 'next/router';

type Props = {};

export default function Header({}: Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const router = useRouter();
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { listCart } = useContext(cartContext);
  const { getMe, onGetMe } = useContext(authContext);
  const logout = () => {
    localStorage.removeItem('user');
    onGetMe();
    router.push('/');
  };
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
        <>
          {getMe.imgUser.length > 1 ? (
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
              <Link href={'/cart'}>
                <a>
                  <Badge sx={{ cursor: 'pointer' }} badgeContent={listCart.length} color="primary">
                    <BsBellFill
                      fontSize={'18px'}
                      style={{
                        marginRight: '5px',
                      }}
                    />
                  </Badge>
                </a>
              </Link>

              <React.Fragment>
                <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                  <Tooltip title="Account settings">
                    <IconButton
                      onClick={handleClick}
                      size="small"
                      sx={{ ml: 2 }}
                      aria-controls={open ? 'account-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                    >
                      <Avatar sx={{ width: 32, height: 32 }} src={getMe.imgUser}></Avatar>
                    </IconButton>
                  </Tooltip>
                </Box>
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: 'visible',
                      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                      mt: 1.5,
                      '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                  <MenuItem>
                    <Avatar src={getMe.imgUser} /> {getMe.name}
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <ListItemIcon>
                      <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                  </MenuItem>
                  <MenuItem onClick={() => logout()}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </React.Fragment>
            </Stack>
          ) : (
            <Link href={'/login'}>
              <a>
                <button
                  style={{
                    backgroundColor: 'rgb(240,81,35)',
                    borderRadius: '999px',
                    color: '#fff',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: 600,
                    padding: '9px 20px',
                    outline: 'none',
                    border: 'none',
                  }}
                >
                  Đăng nhập
                </button>
              </a>
            </Link>
          )}
        </>
      </Grid>
    </Grid>
  );
}

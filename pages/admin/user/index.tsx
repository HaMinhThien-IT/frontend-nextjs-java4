import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AdminLayout from '../../../src/components/layout/AdminLayout';
import { Box } from '@mui/material';
import ModalUser from './components/ModalUser';
import { authController } from '../../../src/controller/AuthController';
import { User, Users } from '../../../src/model/User';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
import { useModal } from '../../../src/hook/useModal';
import UserItem from './components/UserItem';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
type State = {
  users: Users[];
  userEdit: Users;
};
export default function ListUser() {
  const { handleOpen, handleClose, open } = useModal();

  const [state, setState] = useState<State>({ users: [], userEdit: {} as User });
  const getListUser = () => {
    authController.getListUser().then((res) => {
      setState({ ...state, users: res });
    });
  };
  useEffect(() => {
    getListUser();
  }, []);
  const onAdd = (users: Users) => {
    if (users.idUser > 1) {
      authController.editUser(users).then(() => {
        toast.success('Sửa user thành công', {
          position: 'top-center',
          autoClose: 3000,
        });
        handleClose();
        getListUser();
      });
    } else {
      authController.addNewUser(users).then(() => {
        toast.success('Thêm user thành công', {
          position: 'top-center',
          autoClose: 3000,
        });
        handleClose();
        getListUser();
      });
    }
  };
  const onSetData = (user: User) => {
    setState({ ...state, userEdit: user });
  };
  const onDelete = (idUser: number) => {
    authController.deleteCourseById(idUser).then(() => {
      toast.success('Xóa user thành công', {
        position: 'top-center',
        autoClose: 3000,
      });
      getListUser();
    });
  };
  return (
    <Box>
      <ModalUser
        key={uuidv4()}
        dataEdit={state.userEdit}
        onAdd={onAdd}
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Image</StyledTableCell>
              <StyledTableCell align="left">Name</StyledTableCell>
              <StyledTableCell align="left">Email</StyledTableCell>
              <StyledTableCell align="left">Passwrod</StyledTableCell>
              <StyledTableCell align="left">Role</StyledTableCell>
              <StyledTableCell align="left">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {state.users &&
              state.users.map((row, index) => (
                <UserItem onSetData={onSetData} onDelete={onDelete} onOpen={handleOpen} key={index} user={row} />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
ListUser.getLayout = AdminLayout;

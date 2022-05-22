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
import { Box, Stack, TextField } from '@mui/material';
import ModalCate from './components/ModalCate';
import { categoryController } from '../../../src/controller/CategoryController';
import { Category } from '../../../src/model/Category';
import CategoryItem from './components/CategoryItem';
import { toast } from 'react-toastify';
import { useModal } from '../../../src/hook/useModal';

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

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
type State = {
  category: Category[];
  categoryEdit: Category;
};
export default function ListCaregory() {
  const [state, setState] = useState<State>({ category: [], categoryEdit: {} as Category });
  useEffect(() => {
    getListCategory();
  }, []);
  const getListCategory = () => {
    categoryController.getListCategory().then((res) => {
      setState({ ...state, category: res });
    });
  };
  const { handleOpen, handleClose, open } = useModal();
  const onAdd = (cate: Category) => {
    console.log(cate);

    if (cate.idCategory > 1) {
      categoryController.editUser(cate).then(() => {
        toast.success('Sửa category thành công', {
          position: 'top-center',
          autoClose: 3000,
        });
        handleClose();
        getListCategory();
      });
    } else {
      categoryController.addNewCate(cate).then(() => {
        toast.success('Thêm category thành công', {
          position: 'top-center',
          autoClose: 3000,
        });
        handleClose();
        getListCategory();
      });
    }
  };
  const onSetData = (category: Category) => {
    setState({ ...state, categoryEdit: category });
  };
  const onDelete = (idCategory: number) => {
    categoryController.deleteCourseById(idCategory).then(() => {
      toast.success('Xóa category thành công', {
        position: 'top-center',
        autoClose: 3000,
      });
      getListCategory();
    });
  };
  const onSearch = (e: any) => {
    if (e.target.value) {
      categoryController.searchByName(e.target.value).then((res) => {
        setState({ ...state, category: res });
      });
    } else {
      getListCategory();
    }
  };
  return (
    <Box>
      <Stack direction={'row'} justifyContent="flex-start" alignContent={'center'} spacing={3}>
        <ModalCate
          dataEdit={state.categoryEdit}
          onAdd={onAdd}
          open={open}
          handleClose={handleClose}
          handleOpen={handleOpen}
          key={new Date().getTime()}
        />
        <TextField
          sx={{
            '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
              padding: '8px',
            },
          }}
          onChange={(e) => onSearch(e)}
          placeholder="Search by name"
        />
      </Stack>
      {state.category.length == 0 ? (
        <Box>Null</Box>
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Id</StyledTableCell>
                <StyledTableCell align="left">Name</StyledTableCell>
                <StyledTableCell align="left">Image</StyledTableCell>
                <StyledTableCell align="left">Decs</StyledTableCell>
                <StyledTableCell align="left">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {state.category.map((row) => (
                <CategoryItem
                  onDelete={onDelete}
                  onOpen={handleOpen}
                  onSetData={onSetData}
                  key={row.idCategory}
                  category={row}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
}

ListCaregory.getLayout = AdminLayout;

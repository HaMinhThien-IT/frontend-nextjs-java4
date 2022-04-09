import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AdminLayout from '../../../src/components/layout/AdminLayout';
import ModalAdmin from './components/Modal';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Course } from '../../../src/model/Course';
import { courseController } from '../../../src/controller/CourseController';
import { useModal } from '../../../src/hook/useModal';
import { v4 as uuidv4 } from 'uuid';
import CourseItem from './components/CourseItem';
import { toast } from 'react-toastify';

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

type Props = {};
type State = {
  course: Course[];
  showMore: boolean;
  courseEdit: Course;
};
export default function Category({}: Props) {
  const [state, setSate] = useState<State>({
    course: [],
    showMore: false,
    courseEdit: { idCourse: 0, imageCourse: '', content: '', description: '', title: '', idCategory: 0, name: '' },
  });
  useEffect(() => {
    loadData();
  }, []);
  const loadData = () => {
    courseController.getListCourse().then((res) => {
      setSate({ ...state, course: res });
    });
  };
  const onAdd = (course: Course) => {
    if (course.idCourse != 0) {
      courseController.editCourse(course).then(() => {
        handleClose();
        toast.success('Sửa sản phẩm thành công', {
          position: 'top-center',
          autoClose: 3000,
        });
        loadData();
      });
    } else {
      courseController.addCourse(course).then(() => {
        handleClose();
        toast.success('Thêm sản phẩm thành công', {
          position: 'top-center',
          autoClose: 3000,
        });
        loadData();
      });
    }
  };
  const onSetData = (course: Course) => {
    setSate({ ...state, courseEdit: course });
    console.log(course);
  };
  const deleteCourse = (id: number) => {
    courseController.deleteCourseById(id).then(() => {
      handleClose();
      toast.success('Xóa sản phẩm thành công', {
        position: 'top-center',
        autoClose: 3000,
      });
      loadData();
    });
  };
  const { handleOpen, handleClose, open } = useModal();
  return (
    <Box>
      <ModalAdmin
        dataEdit={state.courseEdit}
        handleOpen={handleOpen}
        handleClose={handleClose}
        open={open}
        onAdd={onAdd}
        key={uuidv4()}
      />
      <Box mt={2}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Code</StyledTableCell>
                <StyledTableCell align="left">Course photo</StyledTableCell>
                <StyledTableCell align="left">Title</StyledTableCell>
                <StyledTableCell align="left">Description</StyledTableCell>
                <StyledTableCell align="left">Content</StyledTableCell>
                <StyledTableCell align="left">Category</StyledTableCell>
                <StyledTableCell align="left">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {state.course.map((item, index) => (
                <CourseItem
                  onDelete={deleteCourse}
                  onSetData={onSetData}
                  key={index}
                  course={item}
                  onOpen={handleOpen}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
Category.getLayout = AdminLayout;

import React from 'react';
import { Course } from '../../../../src/model/Course';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { AiFillEdit } from 'react-icons/ai';
import { IoIosRemoveCircle } from 'react-icons/io';
type Props = {
  course: Course;
  onOpen: () => void;
  onSetData: (course: Course) => void;
  onDelete: (id: number) => void;
};
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
export default function CourseItem(props: Props) {
  return (
    <StyledTableRow key={props.course.idCourse}>
      <StyledTableCell component="th" scope="row">
        {props.course.idCourse}
      </StyledTableCell>
      <StyledTableCell align="left">
        <img src={props.course.imageCourse} width="100px" />
      </StyledTableCell>
      <StyledTableCell align="left">{props.course.title}</StyledTableCell>
      <StyledTableCell align="left">
        {' '}
        {props.course.description.length > 40
          ? props.course.description.slice(0, 40) + '...'
          : props.course.description}
      </StyledTableCell>
      <StyledTableCell align="left">
        {props.course.content.length > 40 ? props.course.content.slice(0, 40) + '...' : props.course.content}
      </StyledTableCell>
      <StyledTableCell align="left">{props.course.idCategory}</StyledTableCell>
      <StyledTableCell align="left">
        <AiFillEdit
          onClick={() => {
            props.onSetData(props.course);
            props.onOpen();
          }}
          style={{ fontSize: '19px', color: 'rgb(20,115,230)' }}
        />{' '}
        <IoIosRemoveCircle
          onClick={() => props.onDelete(props.course.idCourse)}
          style={{ fontSize: '19px', color: 'red' }}
        />
      </StyledTableCell>
    </StyledTableRow>
  );
}

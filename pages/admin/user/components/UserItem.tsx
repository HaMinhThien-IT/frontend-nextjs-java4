import React from 'react';
import { Course } from '../../../../src/model/Course';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { IoMdRemoveCircleOutline } from 'react-icons/io';
import { AiTwotoneEdit } from 'react-icons/ai';
import { User } from '../../../../src/model/User';
type Props = {
  user: User;
  onOpen: () => void;
  onSetData: (user: User) => void;
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
export default function UserItem(props: Props) {
  return (
    <StyledTableRow key={props.user.idUser}>
      <StyledTableCell component="th" scope="row">
        <img src={props.user.imgUser} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
      </StyledTableCell>
      <StyledTableCell align="left">{props.user.name}</StyledTableCell>
      <StyledTableCell align="left">{props.user.email}</StyledTableCell>
      <StyledTableCell align="left">{props.user.password}</StyledTableCell>
      <StyledTableCell align="left">{props.user.role}</StyledTableCell>
      <StyledTableCell align="left">
        <IoMdRemoveCircleOutline
          onClick={() => props.onDelete(props.user.idUser)}
          fontSize={'25px'}
          style={{ cursor: 'pointer' }}
        />
        <AiTwotoneEdit
          onClick={() => {
            props.onOpen();
            props.onSetData(props.user);
          }}
          fontSize={'25px'}
          style={{ marginLeft: '5px', cursor: 'pointer' }}
        />
      </StyledTableCell>
    </StyledTableRow>
  );
}

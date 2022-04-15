import React from 'react';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { Category } from '../../../../src/model/Category';
import { IoMdRemoveCircleOutline } from 'react-icons/io';
import { AiTwotoneEdit } from 'react-icons/ai';
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
type Props = {
  category: Category;
  onOpen: () => void;
  onSetData: (category: Category) => void;
  onDelete: (idCategory: number) => void;
};
export default function CategoryItem(props: Props) {
  return (
    <StyledTableRow key={props.category.idCategory}>
      <StyledTableCell>{props.category.idCategory}</StyledTableCell>
      <StyledTableCell align="right"> {props.category.name}</StyledTableCell>
      <StyledTableCell align="right">
        {' '}
        <img src={props.category.image} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
      </StyledTableCell>
      <StyledTableCell align="right"> {props.category.descriptionCate}</StyledTableCell>
      <StyledTableCell align="right">
        <IoMdRemoveCircleOutline
          onClick={() => {
            props.onDelete(props.category.idCategory);
          }}
          fontSize={'25px'}
          style={{ cursor: 'pointer' }}
        />
        <AiTwotoneEdit
          onClick={() => {
            props.onOpen();
            props.onSetData(props.category);
          }}
          fontSize={'25px'}
          style={{ marginLeft: '5px', cursor: 'pointer' }}
        />
      </StyledTableCell>
    </StyledTableRow>
  );
}

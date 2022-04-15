import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Category } from '../../../../src/model/Category';
import { FormHelperText, Stack, TextField } from '@mui/material';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
type Props = {
  onAdd: (cate: Category) => void;
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  dataEdit: Category;
};
type State = {
  category: Category;
  errorMessage: string;
  errorStatus: boolean;
};
export default function ModalCate(props: Props) {
  const [state, setState] = useState<State>({
    category: props.dataEdit,
    errorMessage: '',
    errorStatus: false,
  });
  const onValidate = (category: Category) => {
    if (category.name.length <= 5) {
      setState({
        ...state,
        errorMessage: 'Trường name bắt buộc lớn hơn 5 kì tự và nhỏ hơn 50 kí tự',
        errorStatus: true,
      });
    } else {
      if (category.image.length <= 5) {
        setState({
          ...state,
          errorMessage: 'Trường Image bắt buộc lớn hơn 5 kì tự và nhỏ hơn 50 kí tự',
          errorStatus: true,
        });
      } else {
        setState({ ...state, errorMessage: '', errorStatus: false });
        props.onAdd(state.category);
      }
    }
  };
  return (
    <div>
      <Box mb={1}>
        <Button variant="outlined" onClick={() => props.handleOpen()}>
          Add Category
        </Button>
      </Box>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.open}
        onClose={() => props.handleClose()}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Add new category
            </Typography>
            <TextField
              style={{ marginTop: '10px', width: '100%', marginBottom: '10px' }}
              id="outlined-size-small"
              size="small"
              placeholder="Name ..."
              value={state.category.name}
              onChange={(e) => setState({ ...state, category: { ...state.category, name: e.target.value } })}
            />
            <TextField
              style={{ marginTop: '10px', width: '100%', marginBottom: '10px' }}
              id="outlined-size-small"
              size="small"
              placeholder="Image ..."
              value={state.category.image}
              onChange={(e) => setState({ ...state, category: { ...state.category, image: e.target.value } })}
            />
            <TextField
              style={{ marginTop: '10px', width: '100%', marginBottom: '10px' }}
              id="outlined-size-small"
              size="small"
              placeholder="Description ..."
              value={state.category.descriptionCate}
              onChange={(e) => setState({ ...state, category: { ...state.category, descriptionCate: e.target.value } })}
            />
            <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
              <Box>
                <FormHelperText sx={{ marginLeft: '0', fontSize: '12px' }} error id="accountId-error">
                  {state.errorMessage}
                </FormHelperText>
              </Box>

              <Button
                // disabled={state.errorStatus || state.category.name == undefined || state.category.image == undefined}
                onClick={() => onValidate(state.category)}
                variant="outlined"
              >
                Add new
              </Button>
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

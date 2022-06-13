import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Category } from '../../../../src/model/Category';
import { FormHelperText, Stack, TextField } from '@mui/material';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { schema } from '../../../../src/helper/yup';
import { prependOnceListener } from 'process';

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
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    reset,
  } = useForm({
    mode: 'all',
    resolver: yupResolver(schema),
  });
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

            <Controller
              name="fullName"
              control={control}
              render={({ field }) => (
                <>
                  <TextField
                    {...field}
                    style={{ marginTop: '10px', width: '100%', marginBottom: '10px' }}
                    id="outlined-size-small"
                    size="small"
                    required
                    error={!!errors.fullName?.message}
                    helperText={errors.fullName?.message}
                    placeholder="Name ..."
                    value={state.category.name}
                    onChange={(e) => {
                      setState({ ...state, category: { ...state.category, name: e.target.value } });
                      field.onChange(e);
                    }}
                  />
                </>
              )}
            />
            <Controller
              name="image"
              control={control}
              render={({ field }) => (
                <>
                  <TextField
                    {...field}
                    style={{ marginTop: '10px', width: '100%', marginBottom: '10px' }}
                    id="outlined-size-small"
                    size="small"
                    required
                    error={!!errors.image?.message}
                    helperText={errors.image?.message}
                    placeholder="Image ..."
                    value={state.category.image}
                    onChange={(e) => {
                      setState({ ...state, category: { ...state.category, image: e.target.value } });
                      field.onChange(e);
                    }}
                  />
                </>
              )}
            />
            <Controller
              name="desc"
              control={control}
              render={({ field }) => (
                <>
                  <TextField
                    {...field}
                    style={{ marginTop: '10px', width: '100%', marginBottom: '10px' }}
                    id="outlined-size-small"
                    size="small"
                    required
                    error={!!errors.desc?.message}
                    helperText={errors.desc?.message}
                    placeholder="Description ..."
                    value={state.category.descriptionCate}
                    onChange={(e) => {
                      setState({ ...state, category: { ...state.category, descriptionCate: e.target.value } });
                      field.onChange(e);
                    }}
                  />
                </>
              )}
            />

            <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
              <Button onClick={() => props.onAdd(state.category)} variant="outlined">
                Add new
              </Button>
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

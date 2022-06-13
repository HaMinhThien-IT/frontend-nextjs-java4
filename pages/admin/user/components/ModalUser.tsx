import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import { TextField, Typography } from '@mui/material';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { rules } from '../../../../src/helper/rule';
import { User } from '../../../../src/model/User';
import MessError from './MessError';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { authController } from '../../../../src/controller/AuthController';
import { useModal } from '../../../../src/hook/useModal';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

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

interface State {
  user: User;
}
type Props = {
  onAdd: (user: User) => void;
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  dataEdit: User;
};

export const schema = yup
  .object({
    email: yup.string().email('Please enter a valid email address!').required('You must enter your email address!'),
    fullName: yup.string().required('You must enter your name!'),
    image: yup.string().required('You must enter your image!'),
    password: yup.string().required('You must enter your name!'),
  })
  .required();

export default function ModalUser(props: Props) {
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    reset,
    resetField,
  } = useForm({
    mode: 'all',
    resolver: yupResolver(schema),
  });
  const [user, setUser] = React.useState<User>(props.dataEdit);
  React.useEffect(() => {
    console.log('h', user);
    if (user.idUser) {
      resetField('email', { defaultValue: user.email });
      resetField('fullName', { defaultValue: user.name });
      resetField('password', { defaultValue: user.password });
      resetField('image', { defaultValue: user.imgUser });
    }
  }, [user.idUser]);
  return (
    <Box mb={1}>
      <Button variant="contained" onClick={() => props.handleOpen()}>
        Create user
      </Button>
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
            <Box>
              <Typography>Add new user</Typography>
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
                      value={user.name}
                      onChange={(e) => {
                        setUser({ ...user, name: e.target.value });
                        field.onChange(e);
                      }}
                    />
                  </>
                )}
              />

              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <>
                    <TextField
                      {...field}
                      style={{ marginTop: '10px', width: '100%', marginBottom: '10px' }}
                      id="outlined-size-small"
                      size="small"
                      required
                      error={!!errors.email?.message}
                      helperText={errors.email?.message}
                      placeholder="Email ..."
                      value={user.email}
                      onChange={(e) => {
                        setUser({ ...user, email: e.target.value });
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
                      value={user.imgUser}
                      onChange={(e) => {
                        setUser({ ...user, imgUser: e.target.value });
                        field.onChange(e);
                      }}
                    />
                  </>
                )}
              />

              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <>
                    <TextField
                      {...field}
                      style={{ marginTop: '10px', width: '100%', marginBottom: '10px' }}
                      id="outlined-size-small"
                      size="small"
                      required
                      error={!!errors.password?.message}
                      helperText={errors.password?.message}
                      placeholder="Password ..."
                      value={user.password}
                      onChange={(e) => {
                        setUser({ ...user, password: e.target.value });
                        field.onChange(e);
                      }}
                    />
                  </>
                )}
              />
              <Button fullWidth variant="contained" onClick={() => props.onAdd(user)}>
                {' '}
                Add new
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}

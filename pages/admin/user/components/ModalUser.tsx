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

interface Test {
  user: User;
}
interface IFormInputs {
  test: Test;
}

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
export default function ModalUser(props: Props) {
  const {
    handleSubmit,
    control,
    reset,
    getValues,
    formState: { errors },
  } = useForm<IFormInputs>();
  const [state, setSate] = React.useState<State>({
    user: props.dataEdit,
  });

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    setSate({ ...state, user: data.test.user });
    props.onAdd(data.test.user);
  };

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
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box>
                <Typography>Add new user</Typography>
                <Controller
                  name="test.user.name"
                  control={control}
                  defaultValue={''}
                  rules={rules.name}
                  render={({ field }) => (
                    <TextField
                      style={{ marginTop: '10px', width: '100%', marginBottom: '10px' }}
                      id="outlined-size-small"
                      size="small"
                      placeholder="Name ..."
                      {...field}
                    />
                  )}
                />

                <MessError mess={errors.test?.user?.name?.message} />
                <Controller
                  name="test.user.email"
                  control={control}
                  defaultValue={''}
                  rules={rules.email}
                  render={({ field }) => (
                    <TextField
                      style={{ marginTop: '10px', width: '100%', marginBottom: '10px' }}
                      id="outlined-size-small"
                      size="small"
                      placeholder="Email ..."
                      {...field}
                      value={state.user.email}
                    />
                  )}
                />
                <MessError mess={errors.test?.user?.email?.message} />
                <Controller
                  name="test.user.imgUser"
                  control={control}
                  defaultValue={''}
                  rules={rules.image}
                  render={({ field }) => (
                    <TextField
                      style={{ marginTop: '10px', width: '100%', marginBottom: '10px' }}
                      id="outlined-size-small"
                      size="small"
                      placeholder="Image ..."
                      {...field}
                      value={state.user.imgUser}
                    />
                  )}
                />
                <MessError mess={errors.test?.user?.imgUser?.message} />

                <Box>
                  <Controller
                    name="test.user.password"
                    control={control}
                    defaultValue={''}
                    rules={rules.password}
                    render={({ field }) => (
                      <TextField
                        style={{ marginTop: '10px', width: '100%', marginBottom: '10px' }}
                        id="outlined-size-small"
                        size="small"
                        placeholder="Password ..."
                        {...field}
                        value={state.user.password}
                      />
                    )}
                  />
                  <MessError mess={errors.test?.user?.password?.message} />
                </Box>
                <button
                  // onClick={() => props.onAdd(state.user)}
                  style={{
                    padding: '10px 16px',
                    width: '100%',
                    marginTop: '10px',
                    backgroundImage: 'linear-gradient(68.4deg,rgba(99, 251, 215, 1) -0.4%,rgba(5, 222, 250, 1) 100.2%)',
                    outline: 'none',
                    border: '1px solid #ddd',
                    borderRadius: '3px',
                    color: 'blue',
                    fontWeight: 600,
                  }}
                  type="submit"
                >
                  Add new
                </button>
              </Box>
            </form>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}

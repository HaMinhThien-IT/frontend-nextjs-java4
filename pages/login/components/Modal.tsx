import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { Stack, TextField } from '@mui/material';
import { authController } from '../../../src/controller/AuthController';
import { ForgotPassword } from '../../../src/model/User';
import { toast } from 'react-toastify';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
  outline: 'none',
};
type Props = {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
};
export default function ModalLogin(props: Props) {
  const classes = useStyles();
  const [forgot, setForgot] = useState(false);
  const [forgotInput, setForgotInput] = useState(false);
  const [email, setEmail] = useState<ForgotPassword>({ code: 0 } as ForgotPassword);
  const [checkCode, setCheckCode] = useState<string>();
  const [inputPassword, setInputPassword] = useState<string>('');
  const [success, setSucess] = useState(false);
  const generateCode = () => {
    authController.forGotPassword(email).then((res) => {
      console.log(res);
      if (res == 401) {
        toast.error('Email không tồn tại trong hệ thống vui lòng kiểm tra lại !');
      } else {
        setForgotInput(true);
        toast.error('Vui lòng kiểm tra mã xác minh trong email!');
      }
    });
  };
  const reSetPassword = () => {
    authController.checkForgotPassword(Number(checkCode)).then((res) => {
      if (res == 203) {
        setSucess(true);
      } else {
        toast.error('Mã xác minh sai , vui lòng kiểm tra lại !');
      }
    });
  };
  const apcReset = () => {
    authController.forGotNewPassword(email.email, inputPassword).then((res) => {
      toast.success('Đổi mật khẩu thành công !');
    });
  };
  return (
    <div>
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
            <Stack spacing={2} direction={'column'} justifyContent={'space-between'} alignItems="center">
              <Button
                sx={{
                  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                  border: 0,
                  borderRadius: 3,
                  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                  color: 'white',
                  padding: '5px 20px',
                  textTransform: 'none',
                  fontWeight: 400,
                  fontSize: '15px',
                }}
                fullWidth
              >
                Reset password send mail
              </Button>
              <Button
                fullWidth
                sx={{
                  background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                  border: 0,
                  borderRadius: 3,
                  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                  color: 'white',
                  padding: '5px 10px',
                  textTransform: 'none',
                  fontWeight: 400,
                  fontSize: '15px',
                }}
                onClick={() => setForgot(!forgot)}
              >
                Forgot password send mail
              </Button>
              {forgot && (
                <>
                  <TextField
                    fullWidth
                    size="small"
                    onChange={(e) => setEmail({ ...email, email: e.target.value })}
                    sx={{
                      ' & .MuiOutlinedInput-root': {
                        padding: '0px',
                      },
                    }}
                    placeholder="Email "
                    value={email.email}
                  />

                  <>
                    {forgotInput && (
                      <TextField
                        fullWidth
                        size="small"
                        onChange={(e) => setCheckCode(e.target.value)}
                        sx={{
                          ' & .MuiOutlinedInput-root': {
                            padding: '0px',
                          },
                        }}
                        placeholder="Code ..."
                        value={checkCode}
                        disabled={success}
                      />
                    )}
                  </>
                  <>
                    {success && (
                      <TextField
                        fullWidth
                        size="small"
                        onChange={(e) => setInputPassword(e.target.value)}
                        sx={{
                          ' & .MuiOutlinedInput-root': {
                            padding: '0px',
                          },
                        }}
                        placeholder="New password ..."
                        value={inputPassword}
                      />
                    )}
                  </>
                  {
                    <>
                      {forgotInput ? (
                        <>
                          {success == true ? (
                            <Button
                              fullWidth
                              onClick={apcReset}
                              sx={{
                                background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                                border: 0,
                                borderRadius: 3,
                                boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                                color: 'white',
                                padding: '5px 10px',
                                textTransform: 'none',
                                fontWeight: 400,
                                fontSize: '15px',
                              }}
                            >
                              {' '}
                              Finish
                            </Button>
                          ) : (
                            <Button
                              fullWidth
                              onClick={reSetPassword}
                              sx={{
                                background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                                border: 0,
                                borderRadius: 3,
                                boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                                color: 'white',
                                padding: '5px 10px',
                                textTransform: 'none',
                                fontWeight: 400,
                                fontSize: '15px',
                              }}
                            >
                              {' '}
                              Check code
                            </Button>
                          )}
                        </>
                      ) : (
                        <Button
                          fullWidth
                          onClick={generateCode}
                          sx={{
                            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                            border: 0,
                            borderRadius: 3,
                            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                            color: 'white',
                            padding: '5px 10px',
                            textTransform: 'none',
                            fontWeight: 400,
                            fontSize: '15px',
                          }}
                        >
                          {' '}
                          Send mail
                        </Button>
                      )}
                    </>
                  }
                </>
              )}
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

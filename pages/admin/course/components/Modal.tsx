import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { Grid, Stack, TextField } from '@mui/material';
import { categoryController } from '../../../../src/controller/CategoryController';
import RichTextEditor from '../../../../src/components/RichText';
import { Course } from '../../../../src/model/Course';
import { Category } from '../../../../src/model/Category';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { v4 as uuidv4 } from 'uuid';
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 750,
  bgcolor: 'background.paper',
  border: '1px solid #ddd',
  boxShadow: 24,
  borderRadius: '3px',
  p: 4,
};
const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    color: 'white',
    height: 38,
    padding: '0 30px',
    textTransform: 'none',
  },
});
type State = {
  course: Course;
};
type Props = {
  onAdd: (course: Course) => void;
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  dataEdit: Course;
};
export default function ModalAdmin(props: Props) {
  const [data, setData] = React.useState<Category[]>([]);
  const [value, onChange] = React.useState('');
  const [state, setState] = React.useState<State>({
    course: props.dataEdit,
  });
  const classes = useStyles();
  React.useEffect(() => {
    categoryController.getListCategory().then((res) => {
      setData(res);
    });
  }, []);
  const handleChange = (event: SelectChangeEvent) => {
    setState({ ...state, course: { ...state.course, idCategory: Number(event.target.value as string) } });
  };

  return (
    <div>
      <Button className={classes.root} onClick={() => props.handleOpen()}>
        Thêm khóa học{' '}
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
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Add new course
            </Typography>
            <Grid container mt={3} lg={12}>
              <TextField
                style={{ marginTop: '10px' }}
                id="outlined-size-small"
                size="small"
                placeholder="Title ..."
                sx={{ width: '100%' }}
                value={state.course.title}
                onChange={(e) => setState({ ...state, course: { ...state.course, title: e.target.value } })}
              />
              <TextField
                style={{ marginTop: '10px' }}
                id="outlined-size-small"
                size="small"
                placeholder="Image ..."
                sx={{ width: '100%' }}
                value={state.course.imageCourse}
                onChange={(e) => setState({ ...state, course: { ...state.course, imageCourse: e.target.value } })}
              />
              <TextField
                style={{ marginTop: '10px', width: '100%', marginBottom: '10px' }}
                id="outlined-size-small"
                size="small"
                placeholder="Description ..."
                value={state.course.description}
                onChange={(e) => setState({ ...state, course: { ...state.course, description: e.target.value } })}
              />
              <Box sx={{ width: '100%' }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Category</InputLabel>
                  <Select
                    value={String(state.course.idCategory)}
                    key={uuidv4()}
                    label="Category"
                    onChange={handleChange}
                  >
                    {data.map((item, index) => (
                      <MenuItem key={index} value={item.idCategory}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <RichTextEditor
                style={{
                  width: '100%',
                  marginTop: '10px',
                }}
                controls={[
                  ['bold', 'italic', 'underline', 'link', 'image'],
                  ['unorderedList', 'h1', 'h2', 'h3'],
                  ['sup', 'sub'],
                ]}
                value={`${state.course.content}`}
                onChange={(e) => setState({ ...state, course: { ...state.course, content: e } })}
              />
            </Grid>
            <Stack mt={2} direction="row" justifyContent="flex-end" alignItems="center">
              <Button onClick={() => props.onAdd(state.course)} sx={{ width: '200px' }} variant="contained">
                Add new
              </Button>
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

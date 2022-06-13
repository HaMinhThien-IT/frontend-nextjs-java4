import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import UserLayout from '../../src/components/layout-user/UserLayout';
import RichTextEditor from '../../src/components/RichText';
import { categoryController } from '../../src/controller/CategoryController';
import { postController } from '../../src/controller/PostController';
import { Category } from '../../src/model/Category';
import { Post } from '../../src/model/Post';
type State = {
  content: string;
  newPost: string;
  check: boolean;
  checkN: boolean;
};
export default function Posts() {
  const [state, setState] = useState<State>({ content: '', newPost: '', check: false, checkN: false });
  const [cate, setCate] = useState<Category[]>([]);
  useEffect(() => {
    categoryController.getListCategory().then((res) => {
      setCate(res);
      getListPost();
    });
  }, []);
  useEffect(() => {
    if (state.content != '<p><br></p>') {
      const timeOutId = setTimeout(() => {
        localStorage.setItem('content', state.content);
      }, 300);
      return () => clearTimeout(timeOutId);
    }
  }, [state.content]);
  const handleChange = (event: SelectChangeEvent) => {
    setPost({ ...post, idCategory: Number(event.target.value) });
  };
  const [post, setPost] = useState<Post>({} as Post);
  const [postList, setPostList] = useState<Post[]>([]);
  console.log(post.idPost);

  const addNewPost = () => {
    if (post.idPost < 1 || post.idPost == undefined) {
      (post.idUser = 12),
        postController.addNewPost(post).then(() => {
          getListPost();
          toast.success('Add post success');
        });
      console.log('add');
    } else {
      (post.idUser = 12), console.log(post);

      postController.editPost(post).then(() => {
        getListPost();
        toast.success('edit post success');
      });
      console.log('sua');
    }
  };
  const getListPost = () => {
    postController.getListPost().then((res) => {
      console.log(res);

      setPostList(res);
    });
  };
  const remove = (id: number) => {
    postController.deleteById(id).then(() => {
      getListPost();
      toast.success('Delete post success');
    });
  };
  const [value, setValue] = React.useState('female');

  const handleChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPost({ ...post, isPublish: event.target.value });
  };
  const update = (post: Post) => {
    setPost(post);
  };
  const router = useRouter();
  const getDetail = () => {};
  console.log(post.isPublish);
  const [idCate, setIdCate] = useState<number>(0);
  const handleChange2 = (event: SelectChangeEvent) => {
    setIdCate(Number(event.target.value));
    postController.getListPostById(Number(event.target.value)).then((res) => {
      setPostList(res);
    });
  };
  return (
    <>
      <Grid container lg={12} p={3}>
        <Grid
          sx={{
            '& .mantine-lml7tc': {
              border: 'none',
            },
            '& .mantine-bdajhj': {
              border: 'none',
              padding: '0px',
            },
            '& .mantine-1iro4rz': {
              border: 'none',
            },
            '&  .ql-editor': {
              padding: '0px',
              marginTop: '10px',
            },
          }}
          item
          lg={12}
        >
          <Grid
            sx={{ width: '100%' }}
            direction={'column'}
            justifyContent="center"
            // alignItems={'center'}
            spacing={2}
            container
            xs={12}
          >
            <Grid item xs={12}>
              <Stack>
                <input
                  style={{
                    color: '#292929',
                    fontWeight: 500,
                    lineHeight: '45px',
                    fontSize: '32px',
                    border: 'none',
                    outline: 'none',
                  }}
                  placeholder="Tiêu đề"
                />
              </Stack>
            </Grid>
            <Grid item xs={12}>
              {' '}
              <TextField
                value={post.title}
                placeholder="Title"
                fullWidth
                onChange={(e) => setPost({ ...post, title: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              {' '}
              <TextField
                value={post.shortDesc}
                placeholder="Short desc ..."
                fullWidth
                onChange={(e) => setPost({ ...post, shortDesc: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              {' '}
              <TextField
                value={post.image}
                placeholder="Image"
                fullWidth
                onChange={(e) => setPost({ ...post, image: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              {' '}
              <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={String(post.isPublish)}
                  onChange={handleChanges}
                  row
                >
                  <FormControlLabel value="T" control={<Radio />} label="True" />
                  <FormControlLabel value="F" control={<Radio />} label="False" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ width: '100%' }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Category</InputLabel>
                  <Select
                    value={String(post.idCategory)}
                    // key={uuidv4()}
                    label="Category"
                    onChange={handleChange}
                  >
                    {cate.map((item, index) => (
                      <MenuItem key={index} value={item.idCategory}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid mb={1} item xs={12}>
              <Button fullWidth variant="contained" onClick={addNewPost}>
                Post
              </Button>
            </Grid>
          </Grid>

          <RichTextEditor
            style={{
              width: '100%',
              marginTop: '10px',
            }}
            value={post.content}
            onChange={(e) => setPost({ ...post, content: e })}
          />
        </Grid>
      </Grid>

      <Box mt={2}>
        <Typography>Post by cate</Typography>
        <Box sx={{ width: '100%' }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              value={String(idCate)}
              // key={uuidv4()}
              label="Category"
              onChange={handleChange2}
            >
              {cate.map((item, index) => (
                <MenuItem key={index} value={item.idCategory}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Typography mb={2} variant="h5">
          List post
        </Typography>
        <Grid container spacing={1} xs={12}>
          {
            <>
              {postList.length >= 1 ? (
                <>
                  {postList.map((item, index) => (
                    <Grid item xs={4} key={index}>
                      <Box key={index} mb={2} p={2} sx={{ border: '1px solid #ddd', borderRadius: '10px' }}>
                        <Typography>Title : {item.title}</Typography>
                        <span>Content :</span>
                        <Typography
                          sx={{ margin: 0, '& p': { margin: '0px !important' } }}
                          dangerouslySetInnerHTML={{ __html: item.content || '' }}
                        />
                        <Typography>Status : {item.isPublish == 'T' ? 'True' : 'False'}</Typography>
                        <img style={{ width: '70px', height: 'auto', borderRadius: '10px' }} src={item.image} alt="" />
                        <Typography>Desc :{item.shortDesc}</Typography>
                        <Typography>IDCate :{item.idCategory}</Typography>
                        <Button onClick={() => update(item)}>Edit</Button>

                        <Button onClick={() => remove(item.idPost)}>Remove</Button>
                        <Button onClick={() => router.push(`/post/${item.idPost}`)}>Detail</Button>
                      </Box>
                    </Grid>
                  ))}
                </>
              ) : (
                <Typography>Post khong ton tai !!</Typography>
              )}
            </>
          }
        </Grid>
      </Box>
    </>
  );
}
Posts.getLayout = UserLayout;

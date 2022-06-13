import { Grid, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { postController } from '../../src/controller/PostController';
import { Post } from '../../src/model/Post';
type Props = {
  idPost: number;
};
export default function Detail() {
  const router = useRouter();
  const { id } = router.query;
  const [item, setPost] = useState<Post>({} as Post);
  useEffect(() => {
    if (id) {
      postController.postById(Number(id)).then((res) => {
        setPost(res);
      });
    }
  }, [id]);
  return (
    <Grid direction={'row'} justifyContent="center" alignItems={'center'} container xs={12}>
      <Grid item sx={{ border: '1px solid #ddd' }} xs={12}>
        <Box mb={2} p={2}>
          <Typography>Title : {item.title}</Typography>
          <img style={{ width: '500px', height: 'auto', borderRadius: '10px' }} src={item.image} alt="" />
          <br />
          <span>Content :</span>
          <Typography
            sx={{ margin: 0, '& p': { margin: '0px !important' } }}
            dangerouslySetInnerHTML={{ __html: item.content || '' }}
          />
          <Typography>Status : {item.isPublish == 'T' ? 'True' : 'False'}</Typography>

          <Typography>Desc :{item.shortDesc}</Typography>
          <Typography>IDCate :{item.idCategory}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

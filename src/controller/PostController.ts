import axios from 'axios';
import { Post } from '../model/Post';
let localHost: string = 'http://localhost:8080';

class PostController {
  addNewPost(post: Post) {
    return axios.post(`${localHost}/post`, post);
  }
  getListPost() {
    return axios.get(`${localHost}/posts`).then((res) => {
      return res.data;
    });
  }
  listOrderById(idPost: number) {
    return axios.get(`${localHost}/post/${idPost}`).then((res) => {
      return res.data;
    });
  }
}
export const postController = new PostController();

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
  getListPostById(id: number) {
    return axios.get(`${localHost}/postById/${id}`).then((res) => {
      return res.data;
    });
  }
  postById(idPost: number) {
    return axios.get(`${localHost}/post/${idPost}`).then((res) => {
      return res.data;
    });
  }
  deleteById(idPost: Number) {
    return axios.delete(`${localHost}/removePost/${idPost}`);
  }
  editPost(post: Post) {
    return axios.put(`${localHost}/post/${post.idPost}`, post);
  }
}
export const postController = new PostController();

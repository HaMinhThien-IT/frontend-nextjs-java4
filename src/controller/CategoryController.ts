import axios from 'axios';
import { Course } from '../model/Course';
let localHost: string = 'http://localhost:8080';
class CategoryController {
  getListCategory() {
    return axios.get(`${localHost}/categories`).then((res) => {
      return res.data;
    });
  }
}
export const categoryController = new CategoryController();

import axios from 'axios';
import { Category } from '../model/Category';
let localHost: string = 'http://localhost:8080';
class CategoryController {
  getListCategory() {
    return axios.get(`${localHost}/categories`).then((res) => {
      return res.data;
    });
  }
  addNewCate(cate: Category) {
    return axios.post(`${localHost}/category`, cate).then((res) => {
      return res.data;
    });
  }
  editUser(cate: Category) {
    return axios.put(`${localHost}/category/${cate.idCategory}`, cate);
  }
  deleteCourseById(idCategory: Number) {
    return axios.delete(`${localHost}/remove/${idCategory}`);
  }
}
export const categoryController = new CategoryController();

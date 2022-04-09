import axios from 'axios';
import { Course } from '../model/Course';
let localHost: string = 'http://localhost:8080';
class CourseController {
  getListCourse() {
    return axios.get(`${localHost}/courses`).then((res) => {
      return res.data;
    });
  }
  addCourse(course: Course) {
    return axios.post(`${localHost}/course`, course);
  }
  editCourse(course: Course) {
    return axios.put(`${localHost}/course/${course.idCourse}`, course);
  }
  deleteCourseById(id: Number) {
    return axios.delete(`${localHost}/course/${id}`);
  }
  getCourseById(id: Number) {
    console.log('id controller' + id);
    return axios.get(`${localHost}/course/${id}`).then((res) => {
      return res.data;
    });
  }
}
export const courseController = new CourseController();

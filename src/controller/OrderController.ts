import { OrderCourse, OrderPagination } from './../model/Order';
import axios from 'axios';
import { Orders } from '../model/Order';
let localHost: string = 'http://localhost:8080';

class OrderController {
  addOrder(order: Orders) {
    return axios.post(`${localHost}/addOrder`, order);
  }
  addOrderCourse(orderCourse: OrderCourse) {
    return axios.post(`${localHost}/addOrderCourse`, orderCourse);
  }
  listOrderById(orderP: OrderPagination) {
    return axios.post(`${localHost}/orders`, orderP).then((res) => {
      return res.data;
    });
  }
  getTotal(idUser: number) {
    return axios.get(`${localHost}/total/${idUser}`).then((res) => {
      return res.data;
    });
  }
}
export const orderController = new OrderController();

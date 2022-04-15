export interface Orders {
  idOrders: string;
  timeOrder: string;
  status: number;
  idUser: number;
  paymentMethods: string;
  bankNumber: number;
}
export interface OrderCourse {
  idOrderCourse: string;
  idOrders: string;
  idCourse: number;
  priceCourseOrder: number;
}
export interface OrderCourseJoin extends Orders {
  idOrderCourse: string;
  priceCourseOrder: number;
  idCourse: number;
  imageCourse: string;
  title: string;
  description: string;
  content: string;
  idCategory: number;
  name: string;
}
export interface OrderPagination {
  idUser: number;
  page: number;
  pageSize: number;
}

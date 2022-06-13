export interface User {
  idUser: number;
  name: string;
  imgUser: string;
  role: string;
  password: string;
  email: string;
}
export interface Users {
  idUser: number;
  name: string;
  imgUser: string;
  role: string;
  password: string;
  email: string;
}
export interface ForgotPassword {
  email: string;
  code: number;
}

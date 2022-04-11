import axios from 'axios';
let localHost: string = 'http://localhost:8080';

class AuthController {
  login(email: string, password: string) {
    return axios.post(`${localHost}/login`, { email, password }).then((res) => {
      return res.data;
    });
  }
}
export const authController = new AuthController();

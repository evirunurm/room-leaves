import http from "../http.common";

class AuthService {

  login(data) {
    return http.post("/auth/login", data);
  }

  create(data) {
    return http.post(`/auth/signup`, data);
  }

}
export default new AuthService();
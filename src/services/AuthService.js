import http from "../http.common";

class AuthService {

  login(data) {
    return http.post("/auth/login", data);
  }

  create(id, data) {
    return http.post(`/users/signup`, data);
  }

}
export default new AuthService();
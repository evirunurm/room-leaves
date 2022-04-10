import http from "../http.common";

class UserService {

  getAll() {
    return http.get("/users");
  }

  get(id, data) {
    return http.post(`/users/${id}`, data);
  }

  create(data) {
    return http.post("/users", data);
  }

  update(id, data) {
    return http.put(`/users/${id}`, data);
  }

  delete(id) {
    return http.delete(`/users/${id}`);
  }

  deleteAll() {
    return http.delete(`/users`);
  }

}
export default new UserService();
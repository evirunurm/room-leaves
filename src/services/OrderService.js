import http from "../http.common";

class OrderService {

  getAll(userId) {
    return http.get(`/orders/${userId}`);
  }

  create(userId, data) {
    return http.post(`/orders/${userId}`, data);
  }

  update(userId, id, data) {
    return http.put(`/plants/${userId}/${id}`, data);
  }

}

export default new OrderService();
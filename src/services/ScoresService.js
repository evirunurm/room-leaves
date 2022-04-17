import http from "../http.common";

class UserService {

	create(data) {
		return http.post("/scores", data);
	}

	update(id, data) {
		return http.put(`/scores/${id}`, data);
	}

}

export default new UserService();
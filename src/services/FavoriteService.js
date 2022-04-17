import http from "../http.common";

class FavoriteService {

	getAll(userId) {
		return http.get(`/favorites/${userId}`);
	}

	create(userId, plantId) {
		return http.post(`/favorites/${userId}`, {plantId});
	}

	delete(userId, plantId) {
		return http.delete(`/favorites/${userId}/${plantId}`);
	}

}

export default new FavoriteService();
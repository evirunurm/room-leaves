import axios from "axios";

export default axios.create({
	baseURL: "https://room-leaves-api.herokuapp.com/",
	headers: {
		"Content-type": "application/json",
		"Authorization": "Bearer " + localStorage.getItem("accessToken")
	}
});
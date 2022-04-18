<template>
	<main class="me-container">
		<div class="me-wrapper">
			<h1 class="serif">Welcome back{{ name }}</h1>
			<section class="settings">
				<ul>
					<li>
						<router-link to="/me/settings">Profile settings</router-link>
					</li>
					<li>
						<router-link to="/me/favorites">My favorites</router-link>
					</li>
					<li>
						<router-link to="">Newsletter</router-link>
					</li>
				</ul>
			</section>

			<section class="orders">
				<div class="title">
					<h2 class="serif">My orders</h2>
					<a href="">See all</a>
				</div>
				<article>
					<p class="no-orders-warning" v-if="orders.length < 1">No orders</p>
					<details class="order" v-for="order in orders.slice(0, 3)">
						<summary class="summary">
							<p class="order-title">Order nº {{ (order.id).toString().padStart(6, '0') }}</p>
							<p class="order-opacity">State: {{ order.state }}</p>
							<p class="order-opacity">{{ months[new Date(Date.parse(order.createdAt)).getMonth()] }}
								{{ new Date(Date.parse(order.createdAt)).getDay() }},
								{{ new Date(Date.parse(order.createdAt)).getFullYear() }}</p>
						</summary>
						<div class="details">
							<div class="item-container" v-for="item in order.details">
								<p><a :href="'products/' + item.plantId">{{ item.plantData.name }}</a></p>
								<p>x{{ item.amount }} - <span class="price">{{ item.price }}</span></p>
							</div>
						</div>
					</details>
				</article>
			</section>
			<p>Having a problem with an order? Send us an email to <a href="">xxx@roomleaves.com</a>, we’ll be happy to
				assist
				you!</p>
			<button class="white logout-button" @click="logOut">Log out</button>
		</div>
	</main>
</template>

<script>
import UserService from "@/services/UserService";
import OrderService from "@/services/OrderService";
import PlantService from "@/services/PlantService";

export default {
	data() {
		return {
			name: "",
			orders: [],
			months: [
				"Jan",
				"Feb",
				"Mar",
				"Apr",
				"May",
				"Jun",
				"Jul",
				"Aug",
				"Sep",
				"Oct",
				"Nov",
				"Dec"
			]
		}
	},
	methods: {
		async getName() {
			try {
				let user = await UserService.get(localStorage.getItem("userId"));
				this.name = ", " + user.data["full_name"];
			} catch (err) {
				console.log(err.message);
				await this.logOut();
			}
		},
		async logOut() {
			localStorage.removeItem("accessToken");
			localStorage.removeItem("userId");
			await this.$router.push("/login");
		},
		async getOrders() {
			try {
				let orders = await OrderService.getAll(localStorage.getItem("userId"));
				this.orders = orders.data
			} catch (err) {
				console.log(err.message);
				await this.logOut();
			}
		}
	},
	mounted() {
		this.getName();
		this.getOrders();
	}
}
</script>

<style scoped>
.me-container {
	display: grid;
	place-items: center;
	margin: 0 var(--general-margin);
}

.me-wrapper {
	width: 100%;
	max-width: var(--general-max-width);
}

h1 {
	font-weight: 500;
	border-bottom: 2px solid black;
	padding-bottom: 0.5rem;
	margin: 0;
}

/* SETTINGS */
.settings {
	margin: 2rem 0;
}

.settings > ul {
	list-style: none;
}

.settings a {
	color: black;
	text-decoration: none;
}

.settings a:hover {
	text-decoration: underline;
}

/* ORDERS */

.title {
	position: relative;
}

.title > a {
	position: absolute;
	top: calc(50% - 3px);
	right: 0;
	transform: translateY(-50%);
	color: var(--lightgreen);
	text-decoration: none;
}

.title > a:hover {
	text-decoration: underline;
}

.orders {
	margin-bottom: 1.5rem;
}

.no-orders-warning {
	opacity: 70%;
	align-self: center;
}

.summary {
	cursor: pointer;
}

.summary > .order-title {
	display: inline;
}

.order {
	border-bottom: 2px solid rgba(0, 0, 0, .2);
	padding: 1rem 0;
}

.order .order-opacity {
	opacity: 60%;
}

.details {
	padding: 0.5rem 0 0 0;
}

.item-container {
	display: flex;
	justify-content: space-between;
}


.price:after {
	content: "€";
	font-size: 0.9em;
}

/* LOG OUT */
.logout-button {
	width: 100%;
	max-width: 200px;
	margin: 2rem 0;
}

</style>
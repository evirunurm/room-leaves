<template>
  <div class="me-container">
    <div class="me-wrapper">
      <h1 class="serif" >Welcome back{{ name }}</h1>
      <section class="settings">
        <ul>
          <li><router-link to="">Profile settings</router-link></li>
          <li><router-link to="">My favorites</router-link></li>
          <li><router-link to="">Newsletter</router-link></li>
        </ul>
      </section>

      <section class="orders">
        <div class="title">
          <h2 class="serif">My orders</h2>
          <a href="">See all</a>
        </div>
        <article>
          <p class="no-orders-warning" v-if="orders.length < 1">No orders</p>
          <p v-for="order in orders">{{ order.id }}
            <a v-for="item in order.details">{{ getPlantsData(item.id).name }}</a>
          </p>
        </article>
      </section>
      <p>Having a problem with an order? Send us an email to <a href="">xxx@roomleaves.com</a>, we’ll be happy to assist you!</p>
      <button class="white logout-button" @click="logOut">Log out</button>
    </div>

  </div>

</template>

<script>
import UserService from "@/services/UserService";
import OrderService from "@/services/OrderService";
import PlantService from "@/services/PlantService";

export default {
  data() {
    return {
      name: "",
      orders: []
    }
  },
  methods: {
    async getName() {
      try {
        let user = await UserService.get(localStorage.getItem("userId"));
        this.name = ", " + user.data["full_name"];
      } catch (err) {
        console.log(err);
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
        console.log(this.orders);
      } catch (err) {
        console.log(err.message)
      }
    },
    async getPlantsData(id) {
      try {
        let plant = await PlantService.get(id);
        console.log(plant)
        return plant.data;
      } catch (err) {
        console.log(err.message);
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


/* LOG OUT */
.logout-button {
  width: 100%;
  max-width: 200px;
  margin: 2rem 0;
}


</style>
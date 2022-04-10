<template>
  <h1>Hello {{ name }}</h1>
  <button @click="logOut">Log out</button>
</template>

<script>
import UserService from "@/services/UserService";

export default {
  data() {
    return {
      name: "User"
    }
  },
  methods: {
    async getName() {
      try {
         let user = await UserService.get(localStorage.getItem("userId"));
         this.name = user.data["full_name"];
      } catch (err) {
        console.log(err);
      }
    },
    async logOut() {
      localStorage.removeItem("accessToken");
      await this.$router.push("/login");
    }
  },
  mounted() {
    this.getName()
  }
}
</script>

<style scoped>

</style>
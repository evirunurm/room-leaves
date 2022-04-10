<template>
  <div class="login">
    <div class="login-wrapper">
      <img class="logo-image" src="../assets/logo.png" alt="Room Leaves logo">
      <form @submit.prevent="validateData" class="login-form" action="" method="POST" id="login-form">
        <div class="form-input">
          <label class="required-input" for="login-email">Email</label>
          <input id="login-email" name="email"  type="email" >
        </div>
        <div class="form-input">
          <label class="required-input" for="password">Password</label>
          <input id="password" name="password"  type="password" minlength="6" maxlength="16">
          <p v-if="wrongData" class="error-message">Wrong email or password</p>
        </div>
        <button class="green submit-button">Log in</button>
      </form>
      <a href="">Forgotten your password?</a>
      <p>Don´t have an account? <router-link to="/signup">Sign up</router-link></p>
    </div>
  </div>
</template>

<script>
import AuthService from "@/services/AuthService";

export default {
  data() {
    return {
      wrongData: false
    }
  },
  methods: {
    validateData(e) {
      e.preventDefault();

      const email = document.getElementById("login-email").value;
      const password = document.getElementById("password").value;

      if ( email === "" || email === undefined || email.length < 1 ) {
        this.wrongData = true;
      }

      if ( password === "" || password === undefined || password.length < 6 || password.length > 16 || !password ) {
        this.wrongData = true;
      }

      if (!this.wrongData) {
        const form = document.getElementById("login-form");
        this.submitForm(form);
      }
    },
    async submitForm(form) {
      const data = {};
      Object.keys(form).forEach((key) => {
        data[form[key].name] = form[key].value;
      });


      try {
        let response = await AuthService.login(data);
        let token = response.data?.accessToken;
        let userId = response.data?.id;
        localStorage.setItem("accessToken", token);
        localStorage.setItem("userId", userId);
        await this.$router.push("/me");
      } catch (err) {
        console.log(err);
      }

    }
  }
}
</script>

<style scoped>
.login {
  display: flex;
  justify-content: center;
}

.login-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: var(--general-margin);
  max-width: calc(var(--general-max-width) - 300px);
}

.login-wrapper form {
  width: 100%;
}

.logo-image {
  margin-bottom: 2rem;
  width: 50%;
}

/* FORM */
.form-input {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.form-input .required-input:after{
  content: " *";
  color: var(--lightgreen);
}

.form-input input {
  border: 2px solid black;
  padding: 0.5em 1rem;
  color: var(--darkgreen);
}

.form-input input:focus {
  outline: 2px solid var(--pink);
}

.submit-button {
  margin: 2rem 0;
}

.error-message {
  color: rgba(200, 0, 0);
  font-size: 0.9rem;
}
</style>
<template>
  <div class="login">
    <div class="login-wrapper">
      <img class="logo-image" src="../assets/logo.png" alt="Room Leaves logo">
      <form @submit.prevent="validateData" class="signup-form" action="" method="POST" id="signup-form">
        <div class="form-input">
          <label class="required-input" for="signup-email">Email</label>
          <input id="signup-email" name="email"  type="email" >
        </div>
        <div class="form-input">
          <label class="required-input" for="password">Password</label>
          <input id="password" name="password"  type="password" minlength="6" maxlength="16">
          <p class="error-message">Wrong email or password</p>
        </div>
        <button class="green submit-button">Log in</button>
      </form>
      <a href="">Forgotten your password?</a>
      <p>Don´t have an account? <a href="">Sign up</a></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {

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

.signup-form {
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
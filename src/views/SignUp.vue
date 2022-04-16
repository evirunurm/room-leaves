<template>
  <div class="signup">
    <div class="signup-wrapper">
      <img class="logo-image" src="../assets/logo.png" alt="Room Leaves logo">
      <form @submit.prevent="validateData" class="signup-form" action="" method="POST" id="signup-form">
        <div class="form-input">
          <label class="required-input" for="fullname">Full name</label>
          <p v-if="failedName" class="error-message">Check your name</p>
          <input id="fullname" name="fullname"  type="text">
        </div>
        <div class="form-input">
          <label class="required-input" for="signup-email">Email</label>
          <p v-if="failedEmail" class="error-message">Check your email</p>
          <input id="signup-email" name="email"  type="email" >
        </div>
        <div class="form-input">
          <label class="required-input" for="password">Password</label>
          <p v-if="failedPass" class="error-message">Check your password</p>
          <input id="password" name="password"  type="password" minlength="6" maxlength="16">
        </div>
        <div class="form-input">
          <label class="required-input" for="password2">Confirm password</label>
          <p v-if="failedPass2" class="error-message">Confirmation must be the same as your password</p>
          <input id="password2"  type="password" minlength="6" maxlength="16">
        </div>
        <button class="green submit-button">Sign Up</button>
      </form>
    </div>
  </div>
</template>

<script>
import UserService from "@/services/UserService";
import AuthService from "@/services/AuthService";

export default {
  data() {
    return {
      failedName: false,
      failedEmail: false,
      failedPass: false,
      failedPass2: false,
    }
  },
  methods: {
    validateData(e) {
      e.preventDefault()

      const name = document.getElementById("fullname").value;
      const email = document.getElementById("signup-email").value;
      const password = document.getElementById("password").value;
      const password2 = document.getElementById("password2").value;

      // Validate data
      if ( name === "" || name === undefined || name.length < 1 ) {
        this.failedName = true;
      } else {
        this.failedName = false;
      }

      if ( email === "" || email === undefined || email.length < 1 ) {
        this.failedEmail = true;
      } else {
        this.failedEmail = false;
      }

      if ( password === "" || password === undefined || password.length < 6 || password.length > 16 || !password ) {
        this.failedPass = true;
      } else {
        this.failedPass = false;
      }

      if (password !== password2) {
        this.failedPass2 = true;
      } else {
        this.failedPass2 = false;
      }

      if (!this.failedName && !this.failedEmail && !this.failedPass && !this.failedPass2 ) {
        const form = document.getElementById("signup-form");
        this.submitForm(form);
      }

    },
    async submitForm(form) {
      const data = {};
      Object.keys(form).forEach((key) => {
        data[form[key].name] = form[key].value;
      });

      try {
        await AuthService.create(data);
        await this.$router.push("/login");
      } catch (err) {
        console.log(err.message);
        this.failedEmail = true;
      }
      
    }
  }
}
</script>

<style scoped>

.signup {
  display: flex;
  justify-content: center;
}

.signup-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: var(--general-margin);
  max-width: calc(var(--general-max-width) - 300px);
}

.signup-wrapper form {
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
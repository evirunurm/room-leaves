<template>
  <section class="welcome-wrapper">
    <article class="welcome-image-container">
      <h1>Welcome</h1>
      <h2 class="serif">Room<br>Leaves</h2>
    </article>

    <article class="welcome-text-container">
      <p>Test how your new roommate will adapt to your home.</p>
      <p>Virtual Reality Integration<br/>
        Right here, right now</p>
      <button>Know more</button>
    </article>
  </section>
</template>

<script>
export default {
  name: "WelcomeScreen",
  data() {

  }
}

</script>


<style scoped>
.welcome-wrapper {
  width: 100%;
}

.welcome-image-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 5rem 0;
  position: relative;
}
/* Left and right leaf */
.welcome-image-container:before, .welcome-image-container:after {
  content: "";
  position: absolute;
  height: 100%;
  width: 300px;
  top: 0;
  transition: 0.5s ease-out;
}

/* Left leaf */
.welcome-image-container:before {
  left: 0;
  background: url("../assets/leaf-left.png");
  background-repeat: no-repeat;
  background-position-x: -100px;
}

/* Right leaf */
.welcome-image-container:after {
  right: 0;
  background: url("../assets/leaf-right.png");
  background-repeat: no-repeat;
  background-position-x: 100px;
}

.welcome-image-container h1 {
  font-size: 3rem;
  font-weight: lighter;
  border-bottom: 2px solid black;
  margin-bottom: 0.15em;
  width: calc(100% - (50% - 100px)); /* Full size minus the amount I'll be moving the title to the right (left property of ".welcome-image-container > *") */
}

.welcome-image-container h2 {
  font-size: 4rem;
  font-weight: normal;
  line-height: 90%;
}

.welcome-image-container > * {
  position: relative;
  left: 50%;
  transform: translateX(-100px);
}


@media (max-width: 655px) {
  .welcome-image-container:before, .welcome-image-container:after {
    background-size: 200px;
  }

  .welcome-image-container:before {
    background-position-x: -90px;
  }

  .welcome-image-container:after {
    background-position-x: 200px;
  }
}

</style>
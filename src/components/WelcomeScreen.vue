<template>
  <section class="welcome-wrapper">
    <article class="welcome-image-container">
      <h1>Welcome</h1>
      <h2 class="serif">Room<br>Leaves</h2>
    </article>

    <article class="welcome-text-container">
      <p class="welcome-text">Test how your new roommate will adapt to your home.</p>
      <p class="bold welcome-text-vr"><span class="lightgreen-font">V</span>irtual <span class="lightgreen-font">R</span>eality Integration<br/>
        Right here, right now</p>
       <router-link to="/about"><button class="white">Know more</button></router-link>
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
  padding: 0 0 5rem 0;
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
  width: 30%;
  max-width: 300px;
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

/* Text Container */

.welcome-text-container {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75em;
}

.welcome-text {
  font-size: 1.5rem;
  font-weight: lighter;
  max-width: 380px;
}

.welcome-text-vr {
  font-size: 1.3rem;
}

.white {
  width: 35%;
  margin-top: 2em;
  border: 2px solid var(--darkgreen);
  min-width: 250px;
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

  .welcome-text {
    font-size: 1.2rem;
    font-weight: lighter;
    max-width: 380px;
    margin: 0 1em;
  }

  .welcome-text-vr {
    margin: 0 1em;
    font-size: 1rem;
  }

}

</style>
<template>
  <header>
    <div class="logo">
      <img src="./assets/logo.png" alt="Room Leaves logotype" height="48" >
    </div>
    <div class="right" id="right">
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </nav>
      <div class="header-icons">
        <button @click="isSearchbarOpen = true; searchbarOpened()"><img height="20" src="./assets/search-icon.png" alt="Search Icon"></button>
        <Transition name="widthAppearance">
          <div v-show="isSearchbarOpen" id="searchbar">
            <input name="search" type="text" placeholder="Search...">
          </div>
        </Transition>
        <button><img height="20" src="./assets/shopping-cart-icon.png" alt="Search Icon"></button>
      </div>
    </div>
  </header>
  <router-view />
  <footer>
    <section class="newsletter">
      <p>Be the first one to receive all the exclusive discounts</p>
      <div class="newsletter-title">
        <p>Subscribe to our</p>
        <label for="email" class="big serif">Newsletter</label>
      </div>
      <input id="email" type="email" name="email">
      <button class="white">Sign in</button>
    </section>
    <section class="legal">
      <ul>
        <li>Careers</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Site Map</li>
        <li>Contact Us</li>
      </ul>
    </section>
    <section class="credits">
      <a href="https://www.flaticon.com/free-icons/cart" title="cart icons">Cart icons created by Catalin Fertu - Flaticon</a>
      <a href="https://www.flaticon.com/free-icons/search" title="search icons">Search icons created by Catalin Fertu - Flaticon</a>
    </section>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      isSearchbarOpen: false
    }
  },
  methods: {
    searchbarOpened() {
      document.body.addEventListener("click", this.closeSearchBar.bind(event));
    },
    closeSearchBar(event) {
      /* Hides the searchbar only in case you're clicking outside of the general box containing the nav bar and cart/search idons. */
      if (!document.querySelector("#right").contains(event.target)) {
        this.isSearchbarOpen = false;
        document.body.removeEventListener("click", this.closeSearchBar);
      }
    }
  }
}

</script>



<style>

/* NORMALIZATION */
body {
  font-family: 'Montserrat', sans-serif;
  font-family: 'Poppins', sans-serif;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* General */


/********************/
/****** Header ******/
/********************/
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 1rem 3rem;
}

.header-icons {
  display: flex;
  list-style: none;
  gap: 1em;
}

.header-icons button {
  cursor: pointer;
  background: none;
  border: none;
  position: relative;
}

/* The green dot pointing to the hovered icon */
.header-icons button:hover::after {
 content: "";
  position: absolute;
  background: #60894A;
  height: 0.5rem;
  width: 0.5rem;
  top: -0.45rem;
  border-radius: 50%;
}

.right {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  align-items: baseline;
}

nav {
  display: flex;
  gap: 1em;
}

nav a {
  color: black;
  text-decoration: none;
  font-size: 1.1rem;
}

nav a:hover {
  text-decoration: underline;
}

#searchbar {
  overflow: hidden;
  width: 175px; /* Same as it's child, the input */
}

#searchbar input {
  width: calc(100% - 4px); /* Same as it's parent */
  border: none;
  border-bottom: 1px solid rgba(0,0,0, 0.3);
  font-size: 0.9rem;
  margin: 2px;
  padding: 0.25em 0 0.25em 0.75em;
}

.widthAppearance-enter-active,
.widthAppearance-leave-active {
  animation: showSearchbar 0.25s ease-out;
}

.widthAppearance-enter-from,
.widthAppearance-leave-to {
 animation: hideSearchbar 0.25s ease-out;
}

#searchbar input:focus {
  outline: 2px solid rgba(16, 69, 71, 0.5);
}

/********************/
/****** Footer ******/
/********************/
footer {
  background: green;
  width: 100%;
  padding: 1rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 2em;
  align-items: center;
  color: white;

}

footer > section {
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1rem;
}


/* NEWSLETTER */
footer > section.newsletter label {
  font-size: 2rem;
}

footer > section.newsletter input {
  font-size: 1rem;
  padding: 0.25em 0 0.25em 0.75em;
  background: none;
  border: none;
  border-bottom: 1px solid white;
}

/* LEGAL */

footer > section.legal > ul {
  list-style: none;
}









@keyframes showSearchbar {
  0% {
    width: 0px;
  }
  100% {
    width: 175px; /* Same as the container it's applied to --> #searchbar */
  }
}

@keyframes hideSearchbar {
  0% {
    width: 175px; /* Same as the container it's applied to --> #searchbar */
  }
  100% {
    width: 0px;
  }
}


@media (max-device-width: 440px) {
  nav {
    flex-direction: column;
    position: absolute;
    background: red;
    z-index: 100;
    right: -3em; /* Negative the size of body's padding */
    padding: 1.5em;
    top: 100%;
  }
}

</style>

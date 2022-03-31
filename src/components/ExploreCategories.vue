<template>
  <section class="explore-category-wrapper-container">
    <div class="explore-category-wrapper">
      <article class="explore-category-title">
        <h3>Explore</h3>
        <p>Discover your new favorites</p>
      </article>
      |
      <div v-for="category in categories.slice(0, limit)" class="category-container">
        <img :src="category.img" alt="">
        <a :href="category.url" class="category-title">{{ capitalize(category.name) }}</a>
      </div>
      <div class="explore-category-more"><a href="">More +</a></div>

    </div>
  </section>
</template>

<script>
export default {
  name: "ExploreCategories",
  data() {
    return {
      categories: [
        {
          id: "1",
          img: require("../assets/cactus-category.png"),
          name: "cactus",
          url: ""
        },
        {
          id: "2",
          img: require("../assets/cactus-category.png"),
          name: "aloe vera",
          url: ""
        },
        {
          id: "3",
          img: require("../assets/cactus-category.png"),
          name: "succulent",
          url: ""
        },
        {
          id: "4",
          img: require("../assets/cactus-category.png"),
          name: "flowers",
          url: ""
        }
      ],
      limit: 3
    }
  },
  methods: {
    capitalize(string) {
      return string.split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
    },

  },
  mounted() {

  }
}
</script>

<style scoped>

.explore-category-wrapper-container {
  background: var(--darkgreen);
  padding: 0 var(--general-margin);
  color: white;
  display: flex;
  justify-content: center;
}

.explore-category-wrapper {
  width: 100%;
  max-width: var(--general-max-width);;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.explore-category-title {
  max-width: 25%;
}

.explore-category-wrapper a {
  color: white;
  text-decoration: none;
  text-align: center;
}

.explore-category-more {
  display: flex;
  justify-content: flex-end;
  position: relative;
  bottom: 23px;
}

.explore-category-wrapper a:hover {
  text-decoration: underline;
}

.explore-category-wrapper .category-title {
  color: white;
  text-decoration: none;
}

.explore-category-wrappers .category-title:hover {
  text-decoration: underline;
  cursor: pointer;
}

.category-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  text-align: center;
  position: relative;
  bottom: 50px;
  gap: 0.5em;
}

.category-container img {
  height: 23vw;
  max-height: 150px;
  filter: drop-shadow(0 5px 5px rgba( 0, 0, 0, 0.3));

}

@media (max-width: 450px) {
  .explore-category-title h3 {
    font-size: 0.9rem;
  }

  .explore-category-title p {
    font-size: 0.7rem;
  }

  .category-container:nth-last-child(2), .category-container:nth-last-child(3){
    display: none;
  }

  .category-container, .explore-category-more {
      bottom: 10px;
  }

  .explore-category-wrapper {
    font-size: 0.9rem;
    gap: 1em;
  }
}

@media (max-width: 550px) {

  .category-container:nth-last-child(2) {
     display: none;
  }
}

</style>
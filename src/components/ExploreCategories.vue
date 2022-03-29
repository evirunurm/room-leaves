<template>
  <section class="explore-category-wrapper">
    <article class="explore-category-title">
      <h3>Explore</h3>
      <p>Discover your new favorites</p>
    </article>
    |
    <article class="explore-category-body">
      <div v-for="category in categories.slice(0, limit)" class="category-container">
        <img :src="category.img" alt="">
        <a :href="category.url" class="category-title">{{ capitalize(category.name) }}</a>
      </div>
      <a href="">More +</a>
    </article>
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

.explore-category-wrapper {
  width: 100%;
  background: green;
  display: flex;
  gap: 1em;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem var(--general-margin);
  color: white;
}

.explore-category-title {
  max-width: 25%;
}

.explore-category-body {
  display: flex;
  align-items: center;
  flex-grow: 2;
  justify-content: space-between;
}

.explore-category-body a {
  color: white;
  text-decoration: none;
}

.explore-category-body a:hover {
  text-decoration: underline;
}

.explore-category-body .category-title {
  color: white;
  text-decoration: none;
}

.explore-category-body .category-title:hover {
  text-decoration: underline;
  cursor: pointer;
}

.category-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  bottom: 50px;
  gap: 0.5em;
}

.category-container img {
  height: 23vw;
  max-height: 150px;
}

</style>
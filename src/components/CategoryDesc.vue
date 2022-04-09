<template>
  <article class="category-wrapper" :style="'background: #' + category.color + ';'">
    <div class="category-data">
      <h3>{{ category.name }}</h3>
      <p>{{ category.description }}</p>
    </div>

    <div class="category-image">
       <img :src="loadImg(category.name.toLowerCase())" height="150" alt="">
    </div>

  </article>
</template>

<script>
export default {
  name: "CategoryDesc",
  props: {
    category: Object,
  },
  methods: {
    loadImg(id) {
      let img;
      try {
        img = require('../assets/' + id + '-category.png');
        console.log(img)
        return img;
      } catch (err) {
        console.log("Image not found for plant with id: " + id);
      }
    }
  }
}
</script>

<style scoped>
 .category-wrapper {

 }
</style>
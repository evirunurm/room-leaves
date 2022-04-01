<template>
  <div class="ProductCarousel">
    <div class="ProductCarousel-container">
      <div class="title">
        <h3 class="serif">{{ title }}</h3>
        <router-link to="/products" class="see-all">See all</router-link>
      </div>

      <section class="carousel-wrapper">
        <div class="carousel-img-container" id="" v-for="plant in plants">
          <img :src="'./src/assets/plants/imgs/plant_' + plant.image_id + '.png'" alt="Plant">
          <p>{{ plant.name }}</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCarousel",
  props: {
    title: String,
    query: Object,
    plants: Array
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>
.ProductCarousel {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: var(--general-margin);
}

.ProductCarousel-container {
  max-width: var(--general-max-width);
  width: 100%;
  display: flex;
  flex-direction: column;
}

.title {
  position: relative;
  border-bottom: 2px solid black;
  padding: 0.25rem 0;
}

.title h3 {
  width: 100%;
  font-size: 1.5rem;
  font-weight: normal;
}

.title .see-all {
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  right: 0;
  text-decoration: none;
  color: var(--lightgreen);
}

.title .see-all:hover {
  text-decoration: underline;
}

.carousel-wrapper {
  padding: 0.75rem 0;
  display: flex;
  gap: 0.75rem;
  overflow-x: auto;
}

.carousel-img-container {
  height: 100px;
  width: 100px;
  min-width: 100px;
}
.carousel-img-container img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}


.carousel-wrapper::-webkit-scrollbar {
  width: 0.25rem;
}

/* Scroll Track */
.carousel-wrapper::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.25);
}

/* Scroll Handle */
.carousel-wrapper::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.5);
}

/* Scroll Handle on hover */
.carousel-wrapper::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 1);
}

@media (max-width: 400px) {
  .title h3 {
    font-size: 1.2rem;
  }
}


</style>
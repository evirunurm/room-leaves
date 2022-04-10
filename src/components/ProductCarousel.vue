<template>
  <div class="ProductCarousel">
    <div class="ProductCarousel-container">
      <div class="title">
        <h3 class="serif">{{ title }}</h3>
        <router-link to="/products" class="see-all">See all</router-link>
      </div>

      <section class="carousel-wrapper">
        <div class="carousel-img-container" id="" v-for="plant in plants">
          <PlantImage :clickable="true" :plant-id="plant.id" :stock="plant.stock > 0" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import PlantImage from "@/components/PlantImage";
export default {
  name: "ProductCarousel",
  components: {
    PlantImage,
  },
  props: {
    title: String,
    plants: Array
  }
}
</script>

<style scoped>
.ProductCarousel {
  width: 100%;
  display: flex;
  justify-content: center;
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
  padding: 0 0 0.5rem 0;
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
  padding: 1.25rem 0;
  display: flex;
  gap: 0.75rem;
  overflow-x: auto;
}

.carousel-img-container {
  max-width: 200px;
  min-width: 150px;
}

.carousel-wrapper::-webkit-scrollbar {
  width: 0.75rem;
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
<template>
  <section class="products-container">
    <div class="products-wrapper">
      <ProductGrid v-for="plant in plants" :plantPrice="plant.price" :plantName="plant.name" :plantId="plant.id" :plantStock="plant.stock"></ProductGrid>
    </div>
  </section>
</template>

<script>
import PlantImage from "../components/PlantImage";
import ProductGrid from "../components/ProductGrid";
import axios from "axios";

export default  {
  components: {
    PlantImage,
    ProductGrid
  },
  data() {
    return {
      plants: [],
    }
  },
  methods: {
    async getPlantsData() {
      // let plants = await axios.get("https://room-leaves-api.herokuapp.com/plants");
      let plants = await axios.get("http://localhost/plants/");
      console.log(plants.data);
      this.plants = plants.data;
    }
  },
  mounted() {
    this.getPlantsData();
  }
}
</script>

<style scoped>

.products-container {
  margin: var(--general-margin);
  display: flex;
  justify-content: center;
}

.products-wrapper {
  display: grid;
  gap: var(--general-margin);
  grid-template-columns: 1fr 1fr;
  max-width: var(--general-max-width);
}

</style>
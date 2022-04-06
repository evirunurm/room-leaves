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
      plants: [
        {
            "id": 1,
            "stock": 10,
            "description": "Una planta random",
            "name": "Plant1",
            "price": 69,
            "humidity": null,
            "temperature": null,
            "height": 0.2,
            "createdAt": "2022-04-02T13:15:11.000Z",
            "updatedAt": "2022-04-02T13:15:11.000Z",
            "categoryId": null
        },
        {
            "id": 11,
            "stock": 10,
            "description": "Una planta random",
            "name": "Plant2",
            "price": 69,
            "humidity": null,
            "temperature": null,
            "height": 0.2,
            "createdAt": "2022-04-02T13:15:45.000Z",
            "updatedAt": "2022-04-02T13:15:45.000Z",
            "categoryId": 1
        },
        {
            "id": 81,
            "stock": 10,
            "description": "Una planta random",
            "name": "Plant3",
            "price": 69,
            "humidity": null,
            "temperature": null,
            "height": 0.2,
            "createdAt": "2022-04-04T16:00:24.000Z",
            "updatedAt": "2022-04-04T16:00:24.000Z",
            "categoryId": null
        },
        {
            "id": 91,
            "stock": 10,
            "description": "Una planta random",
            "name": "Plant4",
            "price": 69,
            "humidity": null,
            "temperature": null,
            "height": 0.2,
            "createdAt": "2022-04-04T16:00:30.000Z",
            "updatedAt": "2022-04-04T16:00:30.000Z",
            "categoryId": null
        }
    ],
    }
  },
  methods: {
    async getPlantsData() {
      // let plants = await axios.get("https://room-leaves-api.herokuapp.com/plants");
      // console.log(plants.data);
      // this.plants = plants.data;
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
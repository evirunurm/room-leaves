<template>
  <div class="products">
    <h1>This is where all the products will go</h1>
  </div>
  <section class="products-container">

    <PlantImage v-for="plant in plants" :plantId="plant.image_id" ></PlantImage>
  </section>
</template>

<script>
import PlantImage from "../components/PlantImage";

export default  {
  components: {
    PlantImage,
  },
  data() {
    return {
      plants: [
        {
          name: "Plant 1",
          image_id: "1"
        },{
          name: "Plant 1",
          image_id: "2"
        },{
          name: "Plant 1",
          image_id: "3"
        },{
          name: "Plant 1",
          image_id: "4"
        },{
          name: "Plant 1",
          image_id: "5"
        },{
          name: "Plant 1",
          image_id: "6"
        }
      ],
    }
  }
}
</script>

<style scoped>
.products-container {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
}
</style>
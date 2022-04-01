<template>
  <div class="home">
    <ProductCarousel title="New Arrivals" :query="orderQuery" :plants="plants"></ProductCarousel>
  </div>
</template>

<script>
// @ is an alias to /src
import ImageCarousel from '@/components/ImageCarousel.vue'
import WelcomeScreen from '@/components/WelcomeScreen.vue'
import ExploreCategories from '@/components/ExploreCategories.vue'
import ProductCarousel from '@/components/ProductCarousel.vue'

export default {
  name: 'Home',
  components: {
    ImageCarousel,
    WelcomeScreen,
    ExploreCategories,
    ProductCarousel
  },
  data() {
    return {
      plants: [
        {
          name: "Plant 1",
          image_id: "1"
        },{
          name: "Plant 1",
          image_id: "1"
        },{
          name: "Plant 1",
          image_id: "1"
        },{
          name: "Plant 1",
          image_id: "1"
        },{
          name: "Plant 1",
          image_id: "1"
        },{
          name: "Plant 1",
          image_id: "1"
        }
      ],
      orderQuery: {
        order: [
          'date',
          'DESC'
        ],
      }
    }
  }
}
</script>

<style scoped>
.hello {
  margin: 0 var(--general-margin);
}
</style>

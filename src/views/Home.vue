<template>
  <div class="home">
    <ProductCarousel title="New Arrivals" query="{ order: [ 'date', 'DESC' ] }" ></ProductCarousel>
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
  }
}
</script>

<style scoped>
.hello {
  margin: 0 var(--general-margin);
}
</style>

<template>
  <div class="home">
    <ImageCarousel class="hello"></ImageCarousel>
  </div>
</template>

<script>
// @ is an alias to /src
import ImageCarousel from '@/components/ImageCarousel.vue'

export default {
  name: 'Home',
  components: {
    ImageCarousel
  }
}
</script>

<style scoped>
.hello {
  margin: 0 var(--general-margin);
}
</style>

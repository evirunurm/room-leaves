<template>
  <div class="home">
    <WelcomeScreen ></WelcomeScreen>
  </div>
</template>

<script>
// @ is an alias to /src
import ImageCarousel from '@/components/ImageCarousel.vue'
import WelcomeScreen from '@/components/WelcomeScreen.vue'

export default {
  name: 'Home',
  components: {
    ImageCarousel,
    WelcomeScreen
  }
}
</script>

<style scoped>
.hello {
  margin: 0 var(--general-margin);
}
</style>

<template>
  <div class="home">

    <WelcomeScreen ></WelcomeScreen>
    <ExploreCategories ></ExploreCategories>
    <ImageCarousel class="hello"></ImageCarousel>
  </div>
</template>

<script>
// @ is an alias to /src
import ImageCarousel from '@/components/ImageCarousel.vue'
import WelcomeScreen from '@/components/WelcomeScreen.vue'
import ExploreCategories from '@/components/ExploreCategories.vue'

export default {
  name: 'Home',
  components: {
    ImageCarousel,
    WelcomeScreen,
    ExploreCategories
  }
}
</script>

<style scoped>
.hello {
  margin: 0 var(--general-margin);
}
</style>

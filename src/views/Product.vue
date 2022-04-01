<template>
  <div class="product">
    <h1>This is the product page</h1>
    <PlantImage plantImage="" plantId="plant"></PlantImage>
  </div>
</template>

<script>
import PlantImage from '@/components/PlantImage';

export default {
  components: {
    PlantImage,
  },
  methods: {
    printRoute() {
      console.log(this.$route)
    }
  }
}
</script>
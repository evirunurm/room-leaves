<template>
  <div class="product">
    <h1>This is the product page</h1>
    <PlantImage :stock="true" :clickable="false" :plantId="plantId"></PlantImage>
  </div>
</template>

<script>
import PlantImage from '@/components/PlantImage';

export default {
  components: {
    PlantImage,
  },
  data() {
    return {
      plantId: this.$route.params.id
    }
  },
  methods: {
    getPlantData() {

    }
  },
  mounted() {

  }
}
</script>
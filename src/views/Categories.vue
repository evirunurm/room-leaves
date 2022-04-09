<template>
  <div class="categories">
    <section class="categories-wrapper">
      <CategoryDesc v-for="category in categories" :category="category"  ></CategoryDesc>
    </section>
  </div>
</template>

<script>
import CategoryDesc from "@/components/CategoryDesc";
import axios from "axios";

export default {
  components: {
    CategoryDesc,
  },
  data() {
    return {
      categories: [],
      colors: ["104547", "AF929D", "60894A"]
    }
  },
  methods: {
    async fetchCategories() {
      // let plants = await axios.get("https://room-leaves-api.herokuapp.com/plants");
      let categories = await axios.get("http://localhost/categories/");
      this.categories = categories.data;
    },
    assignColors() {
      let round = 1;
      for (let i = 0; i < this.categories.length; i++) {
        if (i < this.colors.length ) {
          this.categories[i].color = this.colors[i];
        } else {
          this.categories[i].color = this.colors[(i - this.colors.length) * round];
        }
      }
    }
  },
  async mounted() {
    await this.fetchCategories();
    this.assignColors();
    console.log(this.categories)
  }
}
</script>

<style scoped>
.categories {
  width: 100%;
  display: flex;
  align-items: center;
}

.categories-wrapper {
  width: 100%;
  margin: 0 var(--general-margin);
}
</style>
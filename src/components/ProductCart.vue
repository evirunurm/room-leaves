<template>
<article class="product-cart">
  <PlantImage class="plant-image" :plant-id="item.id" :clickable="true" :stock="item.stock > 0" ></PlantImage>
  <div class="plant-data">
    <div class="plant-data-section">
      <p class="plant-name">{{ item.name }}</p>
      <p class="plant-price">{{ item.price }}</p>
    </div>
    <div class="plant-data-section">
      <div class="plant-amount">
        <input class="plant-amount-input" @input="updateCart($event)" type="number" id="amount" name="amount"
       min="0" max="30" v-model="item.amount">
      </div>
    <a class="plant-fav" @click="moveToFavorites($event)" href="">Move to favorites</a>
    </div>
    <button @click="removeItem($event)" class="remove-button">
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 10V15M3 5.00002H19L17.42 19.22C17.3658 19.7094 17.1331 20.1616 16.7663 20.49C16.3994 20.8185 15.9244 21 15.432 21H6.568C6.07564 21 5.60056 20.8185 5.23375 20.49C4.86693 20.1616 4.63416 19.7094 4.58 19.22L3 5.00002ZM6.345 2.14702C6.50675 1.80398 6.76271 1.51401 7.083 1.31093C7.4033 1.10784 7.77474 1.00001 8.154 1.00002H13.846C14.2254 0.999821 14.5971 1.10756 14.9176 1.31066C15.2381 1.51376 15.4942 1.80383 15.656 2.14702L17 5.00002H5L6.345 2.14702V2.14702ZM1 5.00002H21H1ZM9 10V15V10Z" stroke="#104547" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  </div>
</article>
</template>

<script>
import PlantImage from "@/components/PlantImage";

export default {
  name: "ProductCart",
  components: {
    PlantImage
  },
  props: {
    item: Object,
  },
  data() {
    return {
      tooMany: false
    }
  },
  methods: {
    updateCart(e) {
      let cart = JSON.parse(localStorage.getItem("cart"));
      if (this.item.amount === 0) {
        this.removeItem();
      }

      if (this.item.stock >= this.item.amount) {
        cart[cart.findIndex(item => item.id === this.item.id)].amount = e.target.value;
        localStorage.setItem("cart", JSON.stringify(cart));
        this.tooMany = false;
      } else {
        // If too many plants
        e.target.value = cart[cart.findIndex(item => item.id === this.item.id)].amount;
        this.tooMany = true;
      }
    },
    moveToFavorites() {
      // TODO: create favorites.
      this.removeItem();
    },
    removeItem() {
      let cart = JSON.parse(localStorage.getItem("cart"));
      let index = cart.findIndex(item => item.id === this.item.id);
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      this.$emit("update");
    }
  }
}
</script>

<style scoped>
.product-cart {
  width: 100%;
  display: flex;
  gap: 2.5rem;
  position: relative;
}

.plant-data {
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.plant-data-section {
  display: flex;
  flex-direction: column;
/*  gap: 1.5rem;*/
}

.plant-name {
  font-size: 1.5rem;
}

.plant-price {
  font-size: 1.2rem;
}

.plant-name {
  width: 70%;
  word-wrap: break-word;
}

.remove-button {
  position: absolute;
  top: 0;
  right: 0;
}

.plant-image, .plant-data {
  width: 50%;
}

.plant-price {
  opacity: 70%;
}

.plant-price:after {
  content: "€";
  font-size: 0.9em;
}

/* REMOVE INPUT */
.remove-button {
  border: 2px solid var(--darkgreen);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.3rem;
  width: 2.3rem;
  cursor: pointer;
  transition: 0.15s ease-in;
  background: none;
}

.remove-button svg {
  position: relative;
}

.remove-button:hover {
  background: var(--darkgreen);
}

.remove-button:hover path {
  stroke: white;
}

.plant-amount-input {
  margin-bottom: 0.25rem;
  padding: 0.25rem;
  border: 2px solid var(--lightgreen)
}

@media (max-width: 450px) {
  .product-cart {
    width: 100%;
    display: flex;
    gap: 1rem;
    position: relative;
  }

  .plant-name, .plant-price, .plant-fav {
    font-size: 0.9rem;
    line-height: 110%;
  }

  .plant-data-section {
    gap: 0.2rem;
  }

  /* TODO: BUTTON FOR MOBILE */

}
</style>
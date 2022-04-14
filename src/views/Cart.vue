<template>
  <div class="cart-container">
    <div class="cart-wrapper">
      <h1 v-if="items.length > 0">My Cart ({{ items.length }})</h1>
      <h1 v-else="items.length == 0">My Cart</h1>

      <section class="cart-items">
        <ProductCart @update="getFromLocal" v-for="item in items" :item="item"></ProductCart>
      </section>

       <section class="cart-section">
        <h2>Subtotal</h2>
        <article>
          <p class="subtotal-name">Subtotal</p>
          <p class="subtotal-value">{{ subtotal }}</p>
        </article>
         <article>
          <p class="subtotal-name">Delivery fees</p>
          <p class="subtotal-value">{{ delivery }}</p>
        </article>
         <article>
          <p class="subtotal-name">Tax</p>
          <p class="subtotal-value">{{ tax }}</p>
        </article>
         <article>
          <p class="subtotal-name">Total</p>
          <p class="subtotal-value">{{ subtotal + delivery + tax }}</p>
        </article>
      </section>

      <section class="cart-section">
        <h2>Discounts</h2>
        <p>Applied on checkout</p>
      </section>

    </div>
  </div>
</template>

<script>
import ProductCart from "@/components/ProductCart";

export default {
  components: {
    ProductCart
  },
  data() {
    return {
      items: [],
      subtotal: 0,
      delivery: 0,
      tax: 0,

    }
  },
  methods: {
    getFromLocal() {
      this.items = JSON.parse(localStorage.getItem("cart"));
    },
    loadPrice() {
      this.getTotal();
      this.getDelivery();
      this.getTax();
    },
    getTotal() {
      let subtotal = this.items.reduce( (prev, curr) => {
        return prev + parseFloat(curr.price)
      }, 0);
      this.subtotal = subtotal;
      return this.subtotal;
    },
    getDelivery() {
      let delivery = Math.round(this.subtotal / 100 * 10 );
      this.delivery = delivery;
      return this.delivery;
    },
    getTax() {
      let tax = Math.round(this.subtotal / 100 * 21 );
      this.tax = tax;
      return this.tax;
    }
  },
  mounted() {
    this.getFromLocal();
    this.loadPrice();
  }
}
</script>

<style scoped>

.cart-items {
  display: flex;
  flex-direction: column;
  gap:2rem;
  margin: var(--general-margin);
  max-width: var(--general-max-width);
}

.subtotal-value:after {
  content: "€";
  font-size: 0.9em;
}

</style>
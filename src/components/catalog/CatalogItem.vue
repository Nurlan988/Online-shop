<template>
  <div class="v-catalog-item">
    <img
      class="v-catalog-item__image"
      :src="require('../../assets/image/' + product_data.image)"
      alt="img"
    />
    <p class="v-catalog-item__name">{{ product_data.name }}</p>
    <p class="v-catalog-item__price">Price: {{ product_data.price }} $</p>
    <button class="v-catalog-item__btn btn" @click="addToCart">
      Add to card
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CatalogItem",
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["CART", "PRODUCTS"]),
  },
  methods: {
    addToCart() {
      const filteredProduct = this.CART.includes(this.product_data);
      if (filteredProduct) {
        alert("You have already added this product to your cart");
      } else {
        this.$emit("addToCart", this.product_data);
      }
    },
  },
};
</script>

<style>
.v-catalog-item {
  display: flex;
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: calc(var(--padding) * 2);
  margin-bottom: calc(var(--margin) * 2);
  align-items: center;
  flex-direction: column;
}
.v-catalog-item__image {
  width: 225px;
  height: 200px;
  object-fit: cover;
  box-shadow: 0 0 8px 0 #e0e0e0;
}
</style>
<template>
  <div class="v-catalog">
    <router-link :to="{ name: 'cart' }">
      <div class="v-catalog__link_to_cart">Cart: {{ CART.length }}</div>
    </router-link>
    <h1>Catalog</h1>
    <div class="v-catalog__list">
      <app-catalog-item
        v-for="product in PRODUCTS"
        :key="product.article"
        :product_data="product"
        @addToCart="addToCart"
      ></app-catalog-item>
    </div>
  </div>
</template>

<script>
import CatalogItem from "./CatalogItem.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Catalog",
  components: {
    "app-catalog-item": CatalogItem,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CART"]),
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART"]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API().then((response) => {
      if (response.data) {
        console.log("Data arrived");
      }
    });
  },
};
</script>

<style>
.v-catalog h1 {
  text-align: center;
}

.v-catalog__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.v-catalog__link_to_cart {
  position: fixed;
  top: 10px;
  right: 10px;
  padding: calc(var(--padding) * 2);
  border: solid 1px #aeaeae;
  background: #ffffff;
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
  color: teal;
}

.filters {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.range-slider {
  width: 200px;
  margin: auto 16px;
  text-align: center;
  position: relative;
}

.range-slider svg,
.range-slider input[type="range"] {
  position: absolute;
  left: 0;
  bottom: 0;
}

input[type="range"]::-webkit-slider-thumb {
  z-index: 2;
  position: relative;
  top: 2px;
  margin-top: -7px;
}
</style>
<template>
  <div class="v-cart">
    <router-link :to="{ name: 'catalog' }">
      <div class="v-cart__link_to_catalog">Back to catalog</div>
    </router-link>
    <h1>Cart</h1>
    <p v-if="!CART.length" class="v-cart__empty">
      There are no products in cart...
    </p>
    <app-cart-item
      v-for="(item, index) in CART"
      :key="item.article"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
      @incrementItem="incrementItem(index)"
      @decrementItem="decrementItem(index)"
    ></app-cart-item>
    <div v-if="CART.length" class="v-cart__total">
      <p class="v-cart__total-name">Total:</p>
      <p>{{ cartTotalCost }} $</p>
    </div>
  </div>
</template>

<script>
import cartItem from "./CartItem.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Cart",
  components: {
    "app-cart-item": cartItem,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["CART"]),
    cartTotalCost() {
      let result = [];

      for (let item of this.CART) {
        result.push(item.price * item.quantity);
      }
      result = result.reduce((sum, el) => {
        return sum + el;
      });

      return result.toFixed(2);
    },
  },
  methods: {
    ...mapActions([
      "DLETE_FROM_CART",
      "INCREMENT_CART_ITEM",
      "DECREMENT_CART_ITEM",
    ]),
    deleteFromCart(index) {
      this.DLETE_FROM_CART(index);
    },
    incrementItem(index) {
      this.INCREMENT_CART_ITEM(index);
    },
    decrementItem(index) {
      this.DECREMENT_CART_ITEM(index);
    },
  },
};
</script>

<style>
.v-cart {
  text-align: center;
  margin-bottom: 100px;
}
.v-cart__link_to_catalog {
  position: fixed;
  top: 10px;
  right: 10px;
  padding: calc(var(--padding) * 2);
  border: solid 1px #aeaeae;
  background: #ffffff;
  cursor: pointer;
  color: teal;
  font-size: 18px;
  font-weight: 700;
}
.v-cart__empty {
  font-size: 24px;
  margin-top: 100px;
}
.v-cart__total {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  padding: calc(var(--padding) * 2);
  display: flex;
  justify-content: center;
  background: #26ae68;
  color: #ffffff;
  font-size: 20px;
}
.v-cart__total-name {
  margin-right: calc(var(--margin) * 2);
}
</style>
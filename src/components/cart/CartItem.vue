<template>
  <div class="v-cart-item">
    <img
      class="v-catalog-item__image"
      :src="require('../../assets/image/' + cart_item_data.image)"
      alt="img"
    />
    <div class="v-cart-item__info">
      <p>Name: {{ cart_item_data.name }}</p>
      <p>Price: {{ cart_item_data.price }}</p>
      <p>Article: {{ cart_item_data.article }}</p>
    </div>
    <div class="v-cart-item__quantity">
      <p>Quantity:</p>
      <span>
        <span @click="decrementItem" class="v-cart-item__quantity-dectement"
          >-</span
        >
        {{ cart_item_data.quantity }}
        <span @click="incrementItem" class="v-cart-item__quantity-increment"
          >+</span
        >
      </span>
    </div>
    <button class="btn btn-denger" @click="deleteFromCart">Delete</button>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    deleteFromCart() {
      this.$emit("deleteFromCart");
    },
    decrementItem() {
      this.$emit("decrementItem");
    },
    incrementItem() {
      this.$emit("incrementItem");
    },
  },
  mounted() {
    this.cart_item_data["quantity"] = 1;
  },
};
</script>

<style>
.v-cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  margin: 10px 0;
  border: 2px solid rgb(172, 172, 172);
  border-radius: 6px;
  padding-right: 20px;
}
.v-cart-item img {
  width: 150px;
  height: 150px;
  border-radius: 6px;
  box-shadow: 0 0 8px 0 #e0e0e0;
}
.v-cart-item__info {
  display: flex;
  flex-direction: column;
  align-items: start;
}
.v-cart-item__quantity span {
  margin: 10px;
}
.v-cart-item__quantity-dectement,
.v-cart-item__quantity-increment {
  cursor: pointer;
}
.v-cart-item .btn-denger {
  background-color: red;
}
.v-cart-item .btn-denger:hover {
  background-color: rgb(255, 42, 42);
}
</style>
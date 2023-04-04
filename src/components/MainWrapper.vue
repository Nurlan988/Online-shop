<template>
  <div class="v-main-wrapper">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "MainWrapper",
  data() {
    return {};
  },
};
</script>

<style>
.v-main-wrapper {
  width: 900px;
  margin: 0 auto;
}
</style>
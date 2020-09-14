<template>
  <header class="main-header">
    <div class="container">
      <h1 class="main-header__heading">{{ name }}</h1>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  props: {
    name: {
      type: String,
      default: 'App',
    },
  },
};
</script>

<style lang="scss" scoped>
.main-header {
  background-color: #567;

  &__heading {
    margin: 0;
    color: #fff;
    font-size: 20px;
    line-height: 50px;
  }
}
</style>

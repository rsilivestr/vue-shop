<template>
  <header class="main-header">
    <div class="main-header__container container">
      <h1 class="main-header__heading">{{ name }}</h1>
      <nav class="main-header__nav topnav">
        <router-link class="topnav__link" exact to="/">Home</router-link>
        <router-link class="topnav__link" to="/about">About</router-link>
      </nav>
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
$lineHeight: 50px;

.main-header {
  background-color: #567;

  &__container {
    display: flex;
    justify-content: space-between;
  }

  &__heading {
    margin: 0;
    color: #fff;
    font-size: 20px;
    line-height: $lineHeight;
  }
}
.topnav {
  &__link {
    padding: 0 10px;
    color: #fff;
    line-height: $lineHeight;
  }
}
</style>

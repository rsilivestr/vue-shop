<template>
  <main class="main-content container">
    <h1 class="main-content__heading">Home</h1>
    <ProductList />
  </main>
</template>

<script>
import ProductList from '../components/ProductList';

export default {
  name: 'Home',
  components: {
    ProductList,
  },
};
</script>

<template>
  <main class="container">
    <h1>Home</h1>
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

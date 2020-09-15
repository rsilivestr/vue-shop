<template>
  <div class="products">
    <div v-for="item in allItems" :key="item.id" class="products__item">{{ item.name }}</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ProductList',
  methods: {
    ...mapActions(['fetchItems']),
  },
  computed: mapGetters(['allItems']),
  created() {
    this.fetchItems({ limit: 12, page: 1 }); // default params
  },
};
</script>

<style lang="scss" scoped>
.products {
  display: grid;
  grid-template: auto / 1fr 1fr;
  gap: 20px;

  @media all and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  &__item {
    background-color: #fafafa;
    min-height: 200px;
  }
}
</style>

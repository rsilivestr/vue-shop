<template>
  <main class="container">
    <h1>Home</h1>
    <div class="tiles">
      <div v-for="item in allItems" :key="item.id" class="tiles__item">
        {{ item.name }}
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Home',
  data() {
    return {};
  },
  methods: {
    ...mapActions(['fetchItems']),
  },
  computed: mapGetters(['allItems']),
  created() {
    this.fetchItems();
  },
};
</script>

<style lang="scss" scoped>
.tiles {
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

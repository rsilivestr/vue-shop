<template>
  <main class="container">
    <h1>Home</h1>
    <div class="tiles">
      <div v-for="item in storedItems" :key="item.id" class="tiles__item">
        {{ item.name }}
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {};
  },
  computed: {
    storedItems() {
      return this.$store.state.items;
    },
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

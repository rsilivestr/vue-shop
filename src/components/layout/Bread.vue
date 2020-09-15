<template>
  <nav class="bread">
    <div class="container">
      <router-link
        v-for="parent of parentLinks"
        :key="parent.id"
        class="bread__link"
        exact
        :to="parent.to"
        >{{ parent.title }}</router-link
      >
      <span class="bread__current">Текущая страница</span>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Bread',
  data() {
    return {
      parentLinks: [
        { id: 0, to: '/', title: 'Главная' },
        { id: 1, to: '/', title: 'Категория' },
        { id: 2, to: '/', title: 'Подкатегория' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.bread {
  line-height: 2;
  background-color: #ea4;

  &__link {
    color: #fff;
    text-decoration: none;

    &::after {
      content: '➤';
      padding: 0 4px;
    }
  }
}
</style>

<template>
  <nav class="bread">
    <div class="bread__container container">
      <template v-for="parent of parentLinks">
        <router-link :key="parent.id" class="bread__link" exact :to="parent.to">{{
          parent.title
        }}</router-link
        ><span :key="parent.id + 10" class="bread__separator">/</span> </template
      ><span class="bread__current">Текущая страница</span>
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
  color: #fff;

  &__container {
    display: flex;
  }

  &__link {
    color: #fff;
    text-decoration: none;
  }

  &__separator {
    margin: 0 8px;
  }

  &__current {
    font-weight: 700;
  }
}
</style>

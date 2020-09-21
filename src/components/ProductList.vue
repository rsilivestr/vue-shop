<template>
  <div>
    <div class="products">
      <div v-for="item in allItems" :key="item.id" class="products__item">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ProductList',
  data() {
    return {
      nextPage: 2,
    };
  },
  methods: {
    ...mapActions(['fetchItems']),
    fetchNextPage() {
      this.fetchItems({ limit: 12, page: this.nextPage });

      this.nextPage += 1;
    },
  },
  computed: {
    ...mapGetters(['allItems']),
  },
  created() {
    this.fetchItems({ limit: 12, page: 1 }); // default params
  },
  mounted() {
    const pageLoader = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.fetchItems({ limit: 12, page: this.nextPage });

          this.nextPage += 1;
        }
      });
    });

    pageLoader.observe(document.querySelector('.main-footer'));
  },
};
</script>

<style lang="scss" scoped>
.products {
  display: grid;
  grid-template: auto / 1fr 1fr;
  gap: 20px;
  // Prevent IntersectionObserver false loading
  min-height: 860px;

  @media all and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  &__item {
    background-color: #fafafa;
    min-height: 200px;
  }
}
</style>

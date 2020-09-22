<template>
  <footer class="main-footer">
    <p class="main-footer__copy container">&copy; Vue Shop 2020</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss" scoped>
.main-footer {
  color: #fff;
  background-color: #567;

  &__copy {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
}
</style>

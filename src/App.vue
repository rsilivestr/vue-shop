<template>
  <div id="vue-shop">
    <TheHeader />
    <router-view />
  </div>
</template>

<script>
import About from './views/About';
import Home from './views/Home';
import TheHeader from './components/layout/TheHeader';

export default {
  name: 'App',
  components: {
    TheHeader,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  display: flex;
  flex-flow: column nowrap;
  min-height: 100vh;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.container {
  width: 100%;
  max-width: 1024px;
  padding: 0 12px;
  margin: 0 auto;
}
</style>

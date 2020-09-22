<template>
  <div id="vue-shop">
    <Header />
    <Bread />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Bread from './components/layout/Bread';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';

export default {
  name: 'App',
  components: {
    Bread,
    Footer,
    Header,
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
  margin: 0;
}

#vue-shop {
  display: flex;
  flex-flow: column nowrap;
  min-height: 100vh;
  font-family: Arial, Helvetica, sans-serif;
}

.main-content {
  flex: auto;
}

.container {
  width: 100%;
  max-width: 1024px;
  padding: 0 12px;
  margin: 0 auto;
}
</style>

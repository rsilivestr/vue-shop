<template>
  <div id="vue-shop">
    <Header />
    <Bread />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
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
  methods: {
    ...mapActions(['getToken']),
  },
  created() {
    this.getToken();
  },
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
  margin-top: 64px;
  margin-bottom: 64px;
}

.container {
  width: 100%;
  max-width: 1024px;
  padding-left: 12px;
  padding-right: 12px;
  margin-left: auto;
  margin-right: auto;
}

.form {
  background-color: #5671;
  max-width: 360px;
  padding: 1.5rem;

  &__submit {
    width: 100%;
    background-color: #678;
    padding: 0.5rem;
    color: #fff;
    border: none;
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;

    &:hover {
      background-color: #567;
    }
  }
}
.form-group {
  display: block;
  position: relative;
  margin-bottom: 2rem;

  &__label {
    display: block;
    margin-bottom: 0.5rem;
  }

  &__input {
    width: 100%;
    border: 0px solid transparent;
    padding: 0.5rem;
    border-bottom: 2px solid transparent;

    &:not(.invalid):focus {
      border-bottom-color: blueviolet;
    }

    &.invalid {
      border-bottom-color: firebrick;
    }
  }

  &__error {
    display: block;
    position: absolute;
    top: 105%;
    color: firebrick;
    font-size: 0.75rem;
  }
}
</style>

<template>
  <header class="header">
    <div class="header__container container">
      <h1 class="header__heading">{{ name }}</h1>
      <nav class="header__nav topnav">
        <router-link class="topnav__link" exact to="/">Home</router-link>
        <router-link class="topnav__link" to="/about">About</router-link>
        <router-link v-if="!token" class="topnav__link" to="/login">Login</router-link>
        <router-link v-if="!token" class="topnav__link" to="/register">Register</router-link>
        <router-link v-if="token" class="topnav__link" to="/profile">{{userInfo.firstName}}</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Header',
  props: {
    name: {
      type: String,
      default: 'App',
    },
  },
  computed: {
    ...mapGetters(['token', 'userInfo']),
  },
};
</script>

<style lang="scss" scoped>
.header {
  background-color: #567;
  color: #fff;
  height: 50px;
  position: relative;

  &__container {
    align-items: center;
    display: flex;
    justify-content: space-between;
    height: 100%;
  }

  &__heading {
    margin: 0;
    font-size: 20px;
  }
}

.topnav {
  align-items: center;
  display: flex;
  gap: 20px;

  &__link {
    color: #fff;
    line-height: 1.5;
    text-decoration: none;
  }
}
</style>

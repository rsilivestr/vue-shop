<template>
  <main class="main-content container">
    <h1 class="main-content__heading">Привет, {{userInfo.firstName}}</h1>
    <button @click="logout">Выйти</button>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Profile',
  computed: {
    ...mapGetters(['token', 'userInfo']),
  },
  methods: {
    ...mapActions(['removeToken']),
    logout() {
      this.removeToken();
      this.$router.push('/');
    },
  },
};
</script>
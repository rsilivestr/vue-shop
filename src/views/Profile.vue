<template>
  <main class="main-content container">
    <h1>Привет, {{userInfo.username}}</h1>
  </main>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Profile',
  computed: {
    ...mapGetters(['userInfo']),
  },
};
</script>
<template>
  <main class="main-content container">
    <h1>Привет, {{userInfo.firstName}}</h1>
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
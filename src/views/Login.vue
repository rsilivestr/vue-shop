<template>
  <main class="main-content container">
    <h1>Вход в личный кабинет</h1>
    <form @submit.prevent="submitForm">
      <label>
        Почта
        <input v-model="email" type="text" name="email" />
      </label>
      <label>
        Пароль
        <input v-model="password" type="password" name="password" />
      </label>
      <input type="submit" value="Войти" />
    </form>
  </main>
</template>

<script>
import { mapActions } from 'vuex';
import axios from 'axios';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    ...mapActions(['setToken']),
    async submitForm() {
      if ('' === this.email || '' === this.password) {
        // Show message about empty fields
        // Then
        return;
      }

      // Do some validation

      // All good (refactor: move to store / service)
      const res = await axios.post('http://localhost:3000/login', {
        email: this.email,
        password: this.password,
      });

      const resData = await res.data;

      if (resData) {
        // Get token from response
        const token = resData.token;
        this.setToken(token);
        // Redirect to profile
        this.$router.push('/profile');
      }
    },
  },
};
</script>

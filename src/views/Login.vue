<template>
  <main class="main-content container">
    <h1>Вход в личный кабинет</h1>
    <form @submit.prevent="submitForm">
      <label>
        Имя пользователя
        <input v-model="username" type="text" name="username" />
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
      username: '',
      password: '',
    };
  },
  methods: {
    ...mapActions(['saveToken']),
    async submitForm() {
      if ('' === this.username || '' === this.password) {
        // Show message about empty fields
        // Then
        return;
      }

      // Do some validation

      // All good (refactor: move to store)
      const res = await axios.post('http://localhost:3000/login', {
        username: this.username,
        password: this.password,
      });

      const resData = await res.data;

      if (resData) {
        // Get token from response
        const token = resData.token;
        this.saveToken(token);

        // Set user state to authorized

        // Save user information
      }
    },
  },
};
</script>

<template>
  <main class="main-content container">
    <h1>Регистрация</h1>
    <form @submit.prevent="submitForm">
      <label>
        Email
        <input v-model="email" type="text" />
      </label>
      <label>
        Пароль
        <input v-model="password" type="password" />
      </label>
      <label>
        Имя
        <input v-model="firstName" type="text" />
      </label>
      <input type="submit" value="Зарегистрироваться" />
    </form>
  </main>
</template>

<script>
import { mapActions } from 'vuex';
import axios from 'axios';

export default {
  name: 'Register',
  data() {
    return {
      email: '',
      password: '',
      firstName: '',
    };
  },
  methods: {
    ...mapActions(['saveToken', 'saveUser']),
    async submitForm() {
      if ('' === this.email || '' === this.password) {
        // Show message about empty fields
        // Then
        return;
      }

      // Do some validation

      // All good (refactor: move to store / service)
      const res = await axios.post('http://localhost:3000/register', {
        email: this.email,
        password: this.password,
        firstName: this.firstName,
      });

      const resData = await res.data;

      console.log(resData);

      if (resData) {
        // Get token from response
        const token = resData.token;
        this.saveToken(token);
        // Set user state to authorized
        const user = resData.user;
        user.authorized = true;
        // Save user information
        this.saveUser(user);
        // Redirect to profile
        this.$router.push('/profile');
      }
    },
  },
};
</script>
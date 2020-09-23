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
// import axios from 'axios';

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
    ...mapActions(['requestRegister']),
    async submitForm() {
      if ('' === this.email || '' === this.password) {
        // Show message about empty fields
        // Then
        return;
      }

      // Do some validation

      const { email, password, firstName } = this;
      this.requestRegister({ email, password, firstName }).then((success) => {
        // Redirect on successful login
        if (success) {
          this.$router.push('/profile');
        }
        // else show serverErrorMessage from store
      });
    },
  },
};
</script>
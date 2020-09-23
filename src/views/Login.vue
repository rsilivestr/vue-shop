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

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    ...mapActions(['setToken', 'requestLogin']),
    async submitForm() {
      if ('' === this.email || '' === this.password) {
        // Show message about empty fields
        // Then
        return;
      }

      // Do some validation

      this.requestLogin({
        email: this.email,
        password: this.password,
      }).then((success) => {
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

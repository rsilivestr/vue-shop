<template>
  <main class="main-content container">
    <h1 class="main-content__heading">Регистрация</h1>

    <form class="form" @submit.prevent="submitForm">
      <label class="form-group">
        <span class="form-group__label">Email</span>
        <input
          v-model.trim="$v.email.$model"
          class="form-group__input"
          :class="{ invalid: $v.email.$dirty && $v.email.$invalid }"
          type="text"
        />
        <span v-if="$v.email.$dirty && !$v.email.required" class="form-group__error">
          Поле обязательно для заполнения
        </span>
        <span v-else-if="$v.email.$dirty && !$v.email.email" class="form-group__error">
          Введите корректный адрес почты
        </span>
      </label>

      <label class="form-group">
        <span class="form-group__label">Пароль</span>
        <input
          v-model.trim="$v.password.$model"
          class="form-group__input"
          :class="{ invalid: $v.password.$dirty && $v.password.$invalid }"
          type="password"
        />
        <span
          v-if="$v.password.$dirty && !$v.password.required"
          class="form-group__error"
        >
          Поле обязательно для заполнения
        </span>
      </label>

      <label class="form-group">
        <span class="form-group__label">Имя</span>
        <input
          v-model.trim="$v.firstName.$model"
          class="form-group__input"
          :class="{ invalid: $v.firstName.$dirty && $v.firstName.$invalid }"
          type="text"
        />
        <span
          v-if="$v.firstName.$dirty && !$v.firstName.required"
          class="form-group__error"
        >
          Поле обязательно для заполнения
        </span>
      </label>

      <input type="submit" value="Зарегистрироваться" class="form__submit" />
    </form>
  </main>
</template>

<script>
import { mapActions } from 'vuex';
import { required, email } from 'vuelidate/lib/validators';

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
  validations: {
    email: { email, required },
    password: { required },
    firstName: { required },
  },
};
</script>

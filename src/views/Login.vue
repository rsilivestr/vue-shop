<template>
  <main class="main-content container">
    <h1>Вход в личный кабинет</h1>
    <form class="form" @submit.prevent="submitForm">
      <label class="form-group"
        ><span class="form-group__label">Почта</span
        ><input
          v-model.trim="$v.email.$model"
          class="form-group__input"
          :class="{ invalid: $v.email.$dirty && $v.email.$invalid }"
          type="text"
          name="email"
        /><span v-if="$v.email.$dirty && !$v.email.required" class="form-group__error"
          >Поле обязательно для заполнения</span
        ><span v-else-if="$v.email.$dirty && !$v.email.email" class="form-group__error"
          >Введите корректный адрес почты</span
        ></label
      ><label class="form-group"
        ><span class="form-group__label">Пароль</span
        ><input
          v-model="$v.password.$model"
          class="form-group__input"
          :class="{ invalid: $v.email.$dirty && $v.email.$invalid }"
          type="password"
          name="password"
        /><span
          v-if="$v.password.$dirty && !$v.password.required"
          class="form-group__error"
          >Поле обязательно для заполнения</span
        ></label
      ><input type="submit" value="Войти" class="form__submit" />
    </form>
  </main>
</template>

<script>
import { mapActions } from 'vuex';
import { required, email } from 'vuelidate/lib/validators';

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
        // Show message about empty groups
        // Then
        return;
      }

      // Do some validation

      const { email, password } = this;
      this.requestLogin({ email, password }).then((success) => {
        // Redirect on successful login
        if (success) {
          this.$router.push('/profile');
        }
        // else show serverErrorMessage from store
      });
    },
  },
  validations: {
    email: { required, email },
    password: { required },
  },
};
</script>

<style lang="scss" scoped>
.form {
  background-color: #56a1;
  max-width: 360px;
  padding: 1.5rem;

  &__submit {
    width: 100%;
    background-color: #5ba;
    padding: 0.5rem;
    color: #fff;
    border: none;
    text-align: center;
    text-transform: uppercase;

    &:hover {
      background-color: #4a9;
    }
  }
}
.form-group {
  display: block;
  position: relative;
  margin-bottom: 2rem;

  &__label {
    display: block;
    margin-bottom: 0.5rem;
  }

  &__input {
    width: 100%;
    border: 0px solid transparent;
    padding: 0.5rem;
    border-bottom: 2px solid transparent;

    &:not(.invalid):focus {
      border-bottom-color: blueviolet;
    }

    &.invalid {
      border-bottom-color: firebrick;
    }
  }

  &__error {
    display: block;
    position: absolute;
    top: 105%;
    color: firebrick;
    font-size: 0.75rem;
  }
}
</style>

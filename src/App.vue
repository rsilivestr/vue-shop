<template>
  <!-- Component attribute order
    1. Definition
      is
    2. List Rendering
      v-for
    3. Conditionals
      v-if
      v-show
      v-cloak
    4. Render Modifiers
      v-pre
      v-once
    5. Global Awareness
      id
    6. Unique Attributes
      ref
      key
    7. Two-Way Binding
      v-model
    8. Other Attributes
    9. Events
    10. Content
      v-html
      v-text
  -->
  <TheHeader />
</template>

<script>
import TheHeader from './components/layout/TheHeader';

export default {
  // el

  name: 'App',

  // parent
  // functional
  // delimeters
  // comments

  components: {
    TheHeader,
  },

  // directives
  // filters
  // extends
  // mixins
  // inheritAttrs
  // model
  // props/propsData

  data() {
    return {};
  },

  // computed
  // watch
  // beforeCreate
  // created
  // beforeMount
  // mounted
  // beforeUpdate
  // updated
  // activated
  // deactivated
  // beforeDestroy
  // destroyed

  methods: {},

  // template/render
  // renderError
};
</script>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  display: flex;
  flex-flow: column nowrap;
  min-height: 100vh;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.container {
  width: 100%;
  max-width: 1024px;
  padding: 0 12px;
  margin: 0 auto;
}
</style>

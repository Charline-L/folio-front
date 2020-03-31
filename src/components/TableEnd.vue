<template>

  <section class="c-table">

    <router-link to="/">Retour à la page d'accueil</router-link>

  </section>

</template>

<script>
export default {
  name: 'TableEnd',
  props: {
    name: String,
    category: String,
    value: String,
    projects: Array
  },
  methods: {

  }
}
</script>

<style lang="sass">
.c-table-end
  background-color: red

</style>

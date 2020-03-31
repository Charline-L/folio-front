<template>

  <section class="c-table-end">

    <router-link to="/" class="t-t2">Retour à la page d'accueil</router-link>

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
  border-top: solid 5px $black
  border-bottom: solid 5px $black
  padding: 8rem 0

</style>

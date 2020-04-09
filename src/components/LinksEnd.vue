<template>

  <section class="c-table-end">

    <router-link 
      to="/" 
      class="c-table-end__home t-t2">Retour <br v-if="next && next.title"> à la page d'accueil</router-link>

    <router-link 
      v-if="next && next.title" 
      :to="`/projects/${next.id}`" 
      class="c-table-end__project">

      <p class="c-table-end__name t-t2">Voir le projet <br> {{ next.title }}</p>
      <img :src="next.image.url" :alt="next.image.alt" class="c-table-end__image">

    </router-link>

  </section>

</template>

<script>
export default {
  name: 'LinksEnd',
  props: {
    name: String,
    category: String,
    value: String,
    projects: Array,
    next: Object
  }
}
</script>

<style lang="sass">
.c-table-end
  border-top: solid 5px $black
  border-bottom: solid 5px $black
  padding: 4rem 0
  display: flex
  align-items: center
  justify-content: space-between

  +break-max($tablet)
    flex-direction: column-reverse
    text-align: center
    border-width: 2px
    br
      display: none

  &__home
    flex-grow: 1

  &__project
    display: flex
    justify-content: flex-end
    align-items: center

  &__image
    +size(11.5rem)
    border-radius: 100%
    overflow: radius
    display: block

    +break-max($tablet)
      display: none

  &__name
    text-align: right
    margin-right: 4rem

    +break-max($tablet)
      margin-right: 0
      margin-bottom: 2rem
</style>

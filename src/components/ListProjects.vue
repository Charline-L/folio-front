<template>

  <ul :class="`${className || ''} c-list-projects`">

    <BoxeProject v-for="(project, index) of projects" :key="index" :project="project" />
    
  </ul>

</template>

<script>
import BoxeProject from './BoxeProject.vue'

export default {
  name: 'ListProjects',
  components: {
    BoxeProject
  },
  props: {
    projects: Array,
    className: String,
  }
}
</script>

<style lang="sass">
.c-list-projects
  margin-bottom: 10rem
  +size(100%, auto)
  
  &__item
    +size(100%, auto)
    padding: 3rem 3rem 3rem 0
    display: flex
    align-items: center
    border-top: solid 5px $black

    &:last-child
      border-bottom: solid 5px $black

  &__container-texts
    margin-right: 3rem
    flex-grow: 1

  &__container-images
    margin-right: 3rem

  &__image
    +size(11.4rem)
    border-radius: 100%
    overflow: hidden
    object-fit: cover
    object-position: center
    margin: 0 1rem
    +remove-margin-h

  &__link
    display: flex
    align-items: center
    justify-content: center
    +size(11.4rem)
    border-radius: 100%
    +transition-25-ease

    &:hover
      background-color: $black
      path
        fill: $powder

  &__svg
    +size(30%)
    
    path
      +transition-25-ease
      fill: $black
</style>

<template>

  <ul :class="`${className || ''} c-list-filters t-t1`">

    <li class="c-list-filters__group">

      <Filters 
        :filters="filters.type" 
        :projects="projects"
        category="type" 
      />

    </li>

    <li class="c-list-filters__group">

      <Filters 
        :filters="filters.site" 
        :projects="projects" 
        category="site" 
      />

    </li>

    <li class="c-list-filters__group">
      
      <Filters 
        :filters="filters.language" 
        :projects="projects" 
        category="language" 
      />

    </li>

  </ul>

</template>

<script>
import Filters from './Filters.vue'

export default {
  name: 'ListFilters',
  props: {
    filters: Object,
    projects: Array,
    className: String,
  },
  components: {
    Filters
  }
}
</script>

<style lang="sass">
.c-list-filters
  display: flex
  justify-content: space-between
  align-items: flex-start
  margin-bottom: 10rem

  +break-max($tablet)
    flex-direction: column

  &__group
    padding-right: 2rem

    &:last-child
      padding-right: 0
</style>

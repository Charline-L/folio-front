<template>

  <ul class="c-filters">

    <Tag 
      v-for="(tag, index) of filters" 
      :key="index" 
      :value="tag.value" 
      :name="tag.name" 
      :category="category" 
      :projects="projects" 
    />
  
  </ul>

</template>

<script>
import Tag from './Tag.vue'

export default {
  name: 'Filters',
  components: {
    Tag
  },
  props: {
    filters: Object,
    projects: Array,
    category: String
  },
  data(){
    return {
      tags: Object.values(this.filters)
    }
  }
}
</script>

<style lang="sass">
.c-filters
  display: flex
  flex-direction: column

  +break-max($tablet)
    flex-direction: row
    flex-wrap: wrap
    margin-bottom: 2rem
    justify-content: center
</style>

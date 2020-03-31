<template>

  <div id="projects" class="p-projects t-black c-table">

    <p>Projet {{ $route.params.id }}</p>

    <TableEnd />
    
  </div>

</template>

<script>
import TableEnd from '../components/TableEnd'

export default {
  name: 'Projects',
  components: {
    TableEnd
  },
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>

<style lang="sass">
.p-projects
  background-color: $powder
  padding-top: 10rem
  min-height: 100vh
</style>
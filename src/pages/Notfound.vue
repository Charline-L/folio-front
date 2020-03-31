<template>

  <div id="notfound" class="p-notfound t-black c-table">

    <p>Page introuvable</p>

    <TableEnd />
    
  </div>

</template>

<script>
import TableEnd from '../components/TableEnd'

export default {
  name: 'Notfound',
  components: {
    TableEnd
  },
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>

<style lang="sass">
.p-notfound
  background-color: $powder
  padding-top: 10rem
  min-height: 100vh
</style>
<template>

  <div id="legals" class="p-legals t-black c-table">

    <header class="c-table__top">

      <h1>Mentions légales</h1>

      <div>
        <p>Charline Laporte</p>
        <p>hello[a]charline-laporte.fr</p>
      </div>

    </header>

    <main class="c-table__middle">

    </main>

    <TableEnd />
    
  </div>

</template>

<script>
import TableEnd from '../components/TableEnd'

export default {
  name: 'Legals',
  components: {
    TableEnd
  },
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>

<style lang="sass">
.p-legals
  background-color: $powder
  padding-top: 10rem
  min-height: 100vh
</style>
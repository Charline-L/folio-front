<template>

  <div id="notfound" class="p-notfound g-flux--large t-black p-table">

    <header class="p-table__top">

      <h1 class="p-table__right t-t1">Oups</h1>

      <div class="p-table__left p-table__intro t-description">
        <p class="t-bold">La page que vous demandez</p>
        <p>n’existe pas...</p>
      </div>

      <p class="p-table__circle t-emoji--small">👀</p>

    </header>

    <LinksEnd />

  </div>

</template>

<script>
import LinksEnd from '../components/LinksEnd'

export default {
  name: 'Notfound',
  components: {
    LinksEnd
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

  +break-max($tablet)
    .c-table-end
      padding-top: 10rem
</style>
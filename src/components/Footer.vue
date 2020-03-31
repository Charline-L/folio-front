<template>

  <footer class="c-footer g-flux--large t-t2 t-black">

    <router-link to="/legals" tag="a">Mentions légales</router-link>

    <p>🍪 free !</p>

  </footer>  

</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="sass">

.c-footer
  background-color: #FFFFFF
  padding-top: 3rem
  padding-bottom: 3rem
  display: flex
  justify-content: space-between
  align-items: center
</style>
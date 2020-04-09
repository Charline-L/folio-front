<template>

  <div id="legals" class="p-legals g-flux--large t-black p-table">

    <header class="p-table__top">

      <h1 class="p-table__left t-t1">Mentions légales</h1>

      <div class="p-table__right p-table__intro t-description">
        <p class="t-bold">Charline Laporte</p>
        <p>{{ email }}</p>
      </div>

      <p class="p-table__circle t-black t-description">{{ currentYear }}</p>

    </header>

    <main class="p-table__middle t-description">

      <h2 class="p-table__bloc p-table__left">Hébergement</h2>
      <div class="p-table__bloc p-table__right" v-html="registar"></div>

    </main>

    <LinksEnd />

  </div>

</template>

<script>
import LinksEnd from '../components/LinksEnd'
import axios from 'axios'

export default {
  name: 'Legals',
  components: {
    LinksEnd
  },
  data() {
    return {
      email: null,
      registar: null,
      currentYear: new Date().getFullYear()
    }
  },
  mounted () {
    window.scrollTo(0, 0)

    axios 
    .get(process.env.VUE_APP_API + 'pages/9')
      .then(response => {
        const data = response.data.acf
        this.email = data.email
        this.registar = data.registar
      })
      .catch(error => {
        console.error('error', error)
      })
  }
}
</script>

<style lang="sass">
.p-legals
  background-color: $powder
  padding-top: 10rem
  min-height: 100vh
</style>
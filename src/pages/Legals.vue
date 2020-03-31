<template>

  <div id="legals" class="p-legals g-flux--large t-black p-table">

    <header class="p-table__top">

      <h1 class="p-table__right t-t1">Mentions légales</h1>

      <div class="p-table__left p-table__intro t-description">
        <p class="t-bold">Charline Laporte</p>
        <p>{{ email }}</p>
      </div>

      <p class="p-table__circle t-black t-description">{{ currentYear }}</p>

    </header>

    <main class="p-table__middle t-description">

      <p class="p-table__bloc p-table__right">Hébergement</p>
      <div class="p-table__bloc p-table__left" v-html="registar"></div>

    </main>

    <TableEnd />

  </div>

</template>

<script>
import TableEnd from '../components/TableEnd'

import axios from 'axios'

export default {
  name: 'Legals',
  components: {
    TableEnd
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
        console.log('data', data)
      })
      .catch(error => {
        console.log('error', error)
        console.log('url', process.env.VUE_APP_API + 'acf/v3/pages/5')
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
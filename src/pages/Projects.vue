<template>

  <div id="projects" class="p-projects g-flux--large t-black p-table">

    <header class="p-table__top" v-if="top">

      <h1 class="p-table__left t-t1">{{ title }}</h1>

      <div class="p-table__right p-table__intro p-table__intro--column t-description">
        
        <div>
          <p class="t-bold">{{ top.first.bold }}</p>
          <p>{{ top.first.thin }}</p>
        </div>

        <div>
          <p class="t-bold">{{ top.second.bold }}</p>
          <p>{{ top.second.thin }}</p>
        </div>

      </div>

      <a 
        v-if="top.icon.link" 
        target="_blank"
        rel="noopener"
        :href="top.icon.link" 
        class="p-table__circle t-emoji--small"
      >{{ top.icon.text }}</a>
      <p
        v-else
        class="p-table__circle t-emoji--smal"
      >{{ top.icon.text }}</p>

    </header>

    <main class="p-table__middle t-description" v-if="middle">

      <div class="p-table__bloc p-table__left" v-html="middle.description"></div>
      <div class="p-table__bloc p-table__right" v-html="middle.list"></div>
      
    </main>

    <TableEnd />
    
  </div>

</template>

<script>
import TableEnd from '../components/TableEnd'
import axios from 'axios'

export default {
  name: 'Projects',
  components: {
    TableEnd
  },
  data() {
    return {
      title: null,
      top: null,
      middle: null,
      images: null
    }
  },
  mounted () {
    window.scrollTo(0, 0)

    axios 
    .get(process.env.VUE_APP_API + 'posts/' + this.$route.params.id)
      .then(response => {
        const data = response.data.acf
        this.title = data.title
        this.top = data.top
        this.middle = data.middle
        this.images = data.images
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
.p-projects
  background-color: $powder
  padding-top: 10rem
  min-height: 100vh
</style>
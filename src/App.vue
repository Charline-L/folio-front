<template>

  <div id="app" class="p-home g-flux--large t-black">

    <CircleAndText 
      v-if="introduction"
      :firstMessage="introduction.top"
      :secondMessage="introduction.bottom"
      className="p-home__top"
      emoji="👋"
    />

    <Tmce 
      v-if="main"
      :content="main"
    />

    <ListTechnos 
      v-if="technos"
      :technos="technos"
    />

    <ListFilters 
      v-if="filters && projects"
      :projects="projects"
      :filters="filters"
    />

    <ListProjects 
      v-if="projects"
      :projects="projects"
    />  

  </div>

</template>

<script>
import CircleAndText from './components/CircleAndText.vue'
import Tmce from './components/Tmce.vue'
import ListTechnos from './components/ListTechnos.vue'
import ListFilters from './components/ListFilters.vue'
import ListProjects from './components/ListProjects.vue'

import axios from 'axios'

export default {
  name: 'App',
  components: {
    CircleAndText,
    Tmce,
    ListTechnos,
    ListFilters,
    ListProjects
  },
  data() {
    return {
      introduction: null,
      main: null,
      technos: null,
      filters: null,
      projects: null
    }
  },
  mounted () {

    axios
    .get(process.env.VUE_APP_API + 'pages/5')
      .then(response => {
        const data = response.data.acf
        this.introduction = data.introduction
        this.main = data.main
        this.technos = data.techno
        this.filters = data.filters
      })
      .catch(error => {
        console.log('error', error)
        console.log('url', process.env.VUE_APP_API + 'acf/v3/pages/5')
      })

    axios
    .get(process.env.VUE_APP_API + 'posts')
      .then(response => {
        const data = response.data
        this.projects = data
      })
      .catch(error => {
        console.log('error', error)
        console.log('url', process.env.VUE_APP_API + 'posts')
      })
  }
}
</script>

<style lang="sass">

.p-home
  background-color: $powder
  padding-top: 10rem
  min-height: 100vh

  &__top
    margin-bottom: 10rem
</style>
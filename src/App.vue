<template>

  <div id="app" class="p-home t-black">

    <header class="g-flux--large ">

      <CircleAndText 
        v-if="introduction"
        :firstMessage="introduction.top"
        :secondMessage="introduction.bottom"
        className="p-home__top"
        emoji="👋"
      />

    </header>

    <main class="g-flux--large">

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
      
    </main>

    <footer>

      <div class="p-home__bottom g-flux--large">

        <CircleAndText 
          v-if="conclusion"
          :firstMessage="conclusion"
          emoji="🤖"
        />

        <ListSocials 
          v-if="socials"
          :socials="socials" 
        />

      </div>

      <div class="g-flux--large p-home__banner t-t2 t-black">

        <a href="#">Mentions légales</a>
        <p>🍪 free !</p>

      </div>

    </footer>  

  </div>

</template>

<script>
import CircleAndText from './components/CircleAndText.vue'
import Tmce from './components/Tmce.vue'
import ListTechnos from './components/ListTechnos.vue'
import ListFilters from './components/ListFilters.vue'
import ListProjects from './components/ListProjects.vue'
import ListSocials from './components/ListSocials.vue'

import axios from 'axios'

export default {
  name: 'App',
  components: {
    CircleAndText,
    Tmce,
    ListTechnos,
    ListFilters,
    ListProjects,
    ListSocials
  },
  data() {
    return {
      introduction: null,
      conclusion: null,
      main: null,
      technos: null,
      filters: null,
      projects: null,
      socials: null
    }
  },
  mounted () {

    axios
    .get(process.env.VUE_APP_API + 'pages/5')
      .then(response => {
        const data = response.data.acf
        this.introduction = data.introduction
        this.conclusion = data.conclusion
        this.main = data.main
        this.technos = data.techno
        this.filters = data.filters
        this.socials = data.socials
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

  &__bottom
    display: flex
    justify-content: space-between
    align-items: center
    margin-bottom: 10rem

  &__banner
    background-color: #FFFFFF
    padding-top: 3rem
    padding-bottom: 3rem
    display: flex
    justify-content: space-between
    align-items: center
</style>
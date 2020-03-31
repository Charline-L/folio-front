<template>

  <div id="home" class="p-home t-black">

     <header class="g-flux--large">

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

      <section class="p-home__bottom">

        <CircleAndText 
          v-if="conclusion"
          :firstMessage="conclusion"
          emoji="🤖"
        />

        <ListSocials 
          v-if="socials"
          :socials="socials" 
        />

      </section>
      
    </main>

  </div>

</template>

<script>
import CircleAndText from '../components/CircleAndText'
import Tmce from '../components/Tmce'
import ListTechnos from '../components/ListTechnos'
import ListFilters from '../components/ListFilters'
import ListProjects from '../components/ListProjects'
import ListSocials from '../components/ListSocials'

import axios from 'axios'

export default {
  name: 'Home',
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

    window.scrollTo(0, 0)

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
  padding-top: 10rem

  &__top
    margin-bottom: 10rem

  &__bottom
    display: flex
    justify-content: space-between
    align-items: center
    margin-bottom: 10rem
</style>
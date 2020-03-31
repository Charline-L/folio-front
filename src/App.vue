<template>

  <div id="app" class="p-app t-black">

    <router-view></router-view>

    <Footer />

  </div>

</template>

<script>
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>

<style lang="sass">

@import './css/main.min.css';
@import './font/stylesheet.css';

.p-app
  background-color: $powder
  padding-top: 10rem
  min-height: 100vh
</style>
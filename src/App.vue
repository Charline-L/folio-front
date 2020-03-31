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
  min-height: 100vh

.p-table
  +size(100%)

  &__top
    +size(100%, auto)
    padding: 3rem 0 6rem 0
    border-top: solid 5px $black
    display: flex
    justify-content: space-between
    position: relative

  &__right
    +size(calc(35% - 2rem), auto)

  &__left
    +size(calc(65% - 2rem), auto)

  &__intro
    *:first-child
      line-height: 5rem

  &__middle
    display: flex
    justify-content: space-between

  &__bloc
    padding: 3rem 0 6rem 0
    border-top: solid 5px $black

  &__circle
    +size(11.5rem)
    border-radius: 100%
    border: solid 5px $black
    background-color: $powder
    z-index: 1
    +absolute(auto, 4rem, 0)
    transform: translateY(50%)
    display: flex
    justify-content: center
    align-items: center
</style>
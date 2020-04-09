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
    
    +break-max($tablet)
      flex-direction: column
      border-width: 2px


  &__title
    +break-max($tablet)
      text-align: center

  &__left
    +size(calc(35% - 2rem), auto)
    padding-right: 4rem

    +break-max($tablet)
      width: 100%
      padding-right: 0

  &__right
    +size(calc(65% - 2rem), auto)

    +break-max($tablet)
      width: 100%

  &__intro

    +break-max($tablet)
      margin-top: 4rem

    & > *
      margin-right: 4rem
      +remove-margin-h
    
      *:first-child
        line-height: 5rem

      +break-max($tablet)
        margin-right: 0
        margin-bottom: 2rem

        *:first-child
          line-height: initial

        *:last-child
          margin-bottom: 0rem

    &--column
      display: flex

      +break-max($tablet)
        flex-direction: column

  &__middle
    display: flex
    justify-content: space-between

    +break-max($tablet)
      flex-direction: column

      &:last-child
        margin-bottom: 0

  &__bloc
    padding-top: 3rem
    padding-bottom: 6rem
    border-top: solid 5px $black

    +break-max($tablet)
      margin-bottom: 2rem

      &:first-child    
        padding-bottom: 0
        padding-top: 8rem
        border-top-width: 2px

      &:last-child
        padding-top: 0
        margin-bottom: 0
        padding-bottom: 4rem
        border-top-width: 0

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

    +break-max($tablet)
      right: 50%
      transform: translateY(50%) translateX(50%)
      border-width: 2px

</style>
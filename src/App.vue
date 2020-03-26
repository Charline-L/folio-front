<template>
  <div id="app" class="g-flux--large">
    <CircleAndText 
      firstMessage="Bonjour Charline !"
      secondMessage="Développeuse web."
      emoji="👋"
    />
  </div>
</template>

<script>
import CircleAndText from './components/CircleAndText.vue'

export default {
  name: 'App',
  components: {
    CircleAndText
  }
}
</script>

<style lang="sass">

#app
  color: $black
  background-color: $powder
  padding-top: 10rem
</style>
<template>
  <div :class="`c-circle-and-text ${className}`">
    <span class="c-circle-and-text__emoji t-emoji" aria-label="hidden">
      {{ emoji }}
    </span>
    <div class="t-t1">
      <p>{{ firstMessage }}</p>
      <p v-if="secondMessage">{{ secondMessage }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CircleAndText',
  props: {
    firstMessage: String,
    secondMessage: String,
    emoji: String,
    className: String,
  }
}
</script>

<style lang="sass">
.c-circle-and-text
  display: flex
  align-items: center

  +break-max($tablet)
    flex-direction: column
    text-align: center

  &__emoji
    +size(20rem)
    display: flex
    justify-content: center
    align-items: center
    background-color: $black
    border-radius: 100%
    padding-top: 1rem  
    margin-right: 8rem

    +break-max($tablet)
      +size(10rem)
      margin-bottom: 2rem
      margin-right: 0

</style>

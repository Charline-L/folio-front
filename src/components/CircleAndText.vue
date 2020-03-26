<template>
  <div class="c-circle-and-text">
    <span class="c-circle-and-text__emoji">
      {{ emoji }}
    </span>
    <div class="c-circle-and-text__container-texts">
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
  }
}
</script>

<style lang="sass">
.c-circle-and-text
  display: flex
  align-items: center

  &__emoji
    +size(20rem)
    display: flex
    justify-content: center
    align-items: center
    background-color: $black
    border-radius: 100%
    font-size: 5rem
    padding-top: 1rem  
    margin-right: 8rem

  &__container-texts
    font-family: $bold
    font-size: 3.2rem
    line-height: 5rem

</style>

<template>

  <li class="c-screen" v-if="image">

    <p class="c-screen__text p-table__left">
      {{ image.caption }}
    </p>

    <img class="c-screen__image p-table__right" :src="image.url" />

  </li>

</template>

<script>
export default {
  name: 'Screen',
  props: {
    image: Object,
  }
}
</script>

<style lang="sass">
.c-screen
  display: flex
  align-items: flex-end
  margin-bottom: 10rem

  +break-max($tablet)
    flex-direction: column-reverse
    margin-bottom: 5rem

  &:last-child
    margin-bottom: 14rem
    +break-max($tablet)
      margin-bottom: 10rem

  &__text
    flex-grow: 1
    +break-max($tablet)
      width: 100%
      text-align: center

  &__image
    height: auto
    +break-max($tablet)
      width: 100%
      margin-bottom: 2rem
</style>

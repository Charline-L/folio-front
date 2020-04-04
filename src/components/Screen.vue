<template>

  <li class="c-image" v-if="image">

    <p class="c-image__text p-table__left">
      {{ image.caption }}
    </p>

    <img class="p-table__right" :src="image.url" />

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
.c-image
  display: flex
  align-items: flex-end
  margin-bottom: 10rem

  &:last-child
    margin-bottom: 14rem

  &__text
    flex-grow: 1
</style>

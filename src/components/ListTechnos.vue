<template>
  <ul :class="`${className || ''} c-list-technos`">

    <li class="c-list-technos__item">
      <span class="c-list-technos__tooltip t-t2 t-powder">{{ technos.typescript.caption }}</span>
      <img :src="technos.typescript.url" alt="technos.typescript.alt" class="c-list-technos__image">
    </li>

    <li class="c-list-technos__item">
      <span class="c-list-technos__tooltip t-t2 t-powder">{{ technos.javascript.caption }}</span>
      <img :src="technos.javascript.url" :alt="technos.javascript.alt" class="c-list-technos__image">
    </li>

    <li class="c-list-technos__item">
      <span class="c-list-technos__tooltip t-t2 t-powder">{{ technos.vue.caption }}</span>
      <img :src="technos.vue.url" :alt="technos.vue.alt" class="c-list-technos__image">
    </li>

    <li class="c-list-technos__item">
      <span class="c-list-technos__tooltip t-t2 t-powder">{{ technos.nuxt.caption }}</span>
      <img :src="technos.nuxt.url" :alt="technos.nuxt.alt" class="c-list-technos__image">
    </li>

    <li class="c-list-technos__item">
      <span class="c-list-technos__tooltip t-t2 t-powder">{{ technos.sass.caption }}</span>
      <img :src="technos.sass.url" :alt="technos.sass.alt" class="c-list-technos__image">
    </li>

    <li class="c-list-technos__item">
      <span class="c-list-technos__tooltip t-t2 t-powder">{{ technos.strapi.caption }}</span>
      <img :src="technos.strapi.url" :alt="technos.strapi.alt" class="c-list-technos__image">
    </li>

    <li class="c-list-technos__item">
      <span class="c-list-technos__tooltip t-t2 t-powder">{{ technos.wordpress.caption }}</span>
      <img :src="technos.wordpress.url" :alt="technos.wordpress.alt" class="c-list-technos__image">
    </li>

    <li class="c-list-technos__item">
      <span class="c-list-technos__tooltip t-t2 t-powder">{{ technos.woo.caption }}</span>
      <img :src="technos.woo.url" :alt="technos.woo.alt" class="c-list-technos__image">
    </li>

  </ul>
</template>

<script>
export default {
  name: 'ListTechnos',
  props: {
    technos: Object,
    className: String,
  }
}
</script>

<style lang="sass">
.c-list-technos
  +size(100%, auto)
  margin-bottom: 10rem
  display: flex
  justify-content: space-between

  &__item
    position: relative
    +size(100% / 9, 0)
    padding-bottom: calc(100% / 9)
    border-radius: 100%
    overflow: hidden

    &:after
      content: ''
      border: solid 5px $black
      border-radius: 100%
      +absolute(0, 0)
      +size(calc(100% - 10px))

    &:hover
      .c-list-technos__tooltip
        opacity: 1

  &__tooltip
    +absolute(0, 0)
    +size(100%)
    display: flex
    align-items: center
    justify-content: center
    text-align: center
    padding: 10px
    background-color: $black
    z-index: 1
    opacity: 0
    +transition-25-ease

    &::selection
      background-color: $powder
      color: $black

  &__image
    +absolute(0, 0)
    +size(100%)

</style>

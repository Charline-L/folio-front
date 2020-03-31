<template>

  <li 
    v-if="
      $store.state.filters.value === null || 
      project.acf.filters[$store.state.filters.category] === $store.state.filters.value
    "
    class="c-boxe-project__item" 
  > 

    <div class="c-boxe-project__container-texts">

      <p class="t-t1 t-black">{{ project.acf.title }}</p>
      <p class="t-description t-black">{{ project.acf.boxe }}</p>

    </div>

    <div class="c-boxe-project__container-images">

      <img :src="project.acf.boxe_images.one.url" :alt="project.acf.boxe_images.one.alt" class="c-boxe-project__image">
      <img :src="project.acf.boxe_images.two.url" :alt="project.acf.boxe_images.two.alt" class="c-boxe-project__image">
      <img :src="project.acf.boxe_images.three.url" :alt="project.acf.boxe_images.three.alt" class="c-boxe-project__image">

    </div>

    <router-link :to="`projects/${project.id}`" class="c-boxe-project__link">

      <svg width="36" height="30" viewBox="0 0 36 30" fill="none" xmlns="http://www.w3.org/2000/svg" class="c-boxe-project__svg">
        <path d="M1.5 16.5023L31.425 16.5023L19.9687 27.4164C19.3687 27.9883 19.35 28.9353 19.9125 29.5354C20.4844 30.1355 21.4312 30.1543 22.0312 29.5917L35.1188 17.1212C35.6813 16.5586 36 15.7991 36 15.0021C36 14.2051 35.6906 13.4457 35.0906 12.8549L22.0313 0.41256C21.7406 0.13127 21.3656 2.53532e-06 21 2.50336e-06C20.6063 2.46893e-06 20.2125 0.1594 19.9125 0.468817C19.3406 1.0689 19.3688 2.01591 19.9688 2.58787L31.4719 13.5019L1.5 13.5019C0.674997 13.5019 -2.43141e-06 14.177 -2.50354e-06 15.0021C-2.57567e-06 15.8272 0.674997 16.5023 1.5 16.5023Z" />
      </svg>
      
    </router-link>
    
  </li>

</template>

<script>

export default {
  name: 'BoxeProject',
  props: {
    project: Object
  }
}

</script>

<style lang="sass">
.c-boxe-project
  +size(100%, auto)
  
  &__item
    +size(100%, auto)
    padding: 3rem 3rem 3rem 0
    display: flex
    align-items: center
    border-top: solid 5px $black

    &:last-child
      border-bottom: solid 5px $black

  &__container-texts
    margin-right: 3rem
    flex-grow: 1

  &__container-images
    margin-right: 3rem

  &__image
    +size(11.4rem)
    border-radius: 100%
    overflow: hidden
    object-fit: cover
    object-position: center
    margin: 0 1rem
    +remove-margin-h

  &__link
    display: flex
    align-items: center
    justify-content: center
    +size(11.4rem)
    border-radius: 100%
    +transition-25-ease
    overflow: hidden

    &:hover
      background-color: $black
      .c-boxe-project__svg
        animation: arrow-animation 0.3s linear forwards
      path
        fill: $powder

  &__svg
    +size(30%)
    
    path
      +transition-25-ease
      fill: $black


@keyframes arrow-animation
  0%
    transform: translateX(0)

  50%
    transform: translateX(200%)

  51%
    transform: translateX(-200%)

  100%
    transform: translateX(0)
</style>

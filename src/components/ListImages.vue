<template>

  <ul class="c-list-images t-black t-description">

    <Screen v-for="(image, index) of imagesArray" :image="image || null" :key="index" />

  </ul>

</template>

<script>
import Screen from './Screen.vue'

export default {
  name: 'ListImages',
  props: {
    images: Object,
  },
  components: {
    Screen
  },
  data(){
    return {
      imagesArray: Object.values(this.images)
    }
  }
}
</script>

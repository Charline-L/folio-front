<template>
  <video autoplay muted loop class="c-video">
    <source :src="src" type="video/mp4">
  </video>
</template>

<script>
export default {
  name: 'VideoPlayer',
  props: {
    src: String
  }
}
</script>

<style lang="sass">
.c-video
  +size(100%, auto)
  margin-bottom: 14rem

  +break-max($tablet)
    margin-bottom: 10rem

</style>



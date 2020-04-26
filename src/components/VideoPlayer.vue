<template>
  <video autoplay muted loop class="c-video" playsinline>
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
  border-top: solid 5px $black

  +break-max($tablet)
    margin-bottom: 10rem
    border-width: 2px

</style>



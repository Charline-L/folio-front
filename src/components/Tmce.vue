<template>
  <div :class="`${className || ''} c-tmce t-t1`" v-html="content">
  </div>
</template>

<script>
export default {
  name: 'Tmce',
  props: {
    content: String,
    className: String,
  }
}
</script>

<style lang="sass">
.c-tmce
  +size(calc(100% - 15rem), auto)
  margin-bottom: 10rem
  
  +break-max($tablet)
    width: 100%
</style>

<template>

  <li 
    v-if="name" 
    :class="$store.state.filters.value === value ? 'c-tag c-tag--active' : 'c-tag'"
  >
    
    <button type="button" @click="toggleTag" class="c-tag__button">
      <span class="c-tag__name t-black t-t1">{{ name }}</span>
      <span class="c-tag__number">{{ numberOfProjects }}</span>    
    </button>

  </li>

</template>

<script>
import { mapMutations } from 'vuex'
import anime from 'animejs'

export default {
  name: 'Tag',
  props: {
    name: String,
    category: String,
    value: String,
    projects: Array
  },
  data(){
    return {
      numberOfProjects: this.getNumberOfProjects(),
      $list: null
    }
  },
  mounted(){
    this.$filters = document.querySelector('.c-list-filters')
  },
  methods: {
    getNumberOfProjects(){
      return this.projects.filter((project) => project.acf.filters[this.category] === this.value).length
    },
    toggleTag() {
      const isActive = this.$store.state.filters.value === this.value
      this.changeFilter({
        value: isActive ? null : this.value, 
        category: isActive ? null : this.category
      })
      this.scrollToList()
    },
    scrollToList() {

      anime({
        targets: ['html', 'body'],
        scrollTop: this.$filters.offsetTop - 50,
        duration: 500,
        easing: 'easeOutExpo'
      })
    },
    ...mapMutations({
      changeFilter: 'filters/changeFilter'
    })
  }
}
</script>

<style lang="sass">
.c-tag
  display: flex
  justify-content: flex-start
  align-items: center
  margin-bottom: 1rem
  +remove-margin-v

  &:hover
    +break-min($tablet)
      .c-tag__number
        right: -4rem

  +break-max($tablet)
    margin-bottom: 0
    margin: 0 2rem

  &--active
    .c-tag__number
      color: $powder
      right: -4rem
      background-color: $black

  &__button
    position: relative

  &__number
    +absolute(-1rem, -3rem)
    +size(4rem)
    color: $black
    border-radius: 100%
    +transition-25-ease
    display: flex
    justify-content: center
    align-items: center

</style>

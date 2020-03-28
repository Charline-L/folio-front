module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/sass/components.sass";`
      }
    }
  }
};
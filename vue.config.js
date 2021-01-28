module.exports = {
    css: {
      loaderOptions: {
        sass: {
          prependData: `@import "@/sass/_mixins.scss";
                        @import "@/sass/_colors.scss";`
        },
      }
    }
  };
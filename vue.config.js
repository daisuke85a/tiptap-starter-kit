module.exports = {
  runtimeCompiler: true,
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "./src/assets/sass/variables.scss";',
      },
    },
  },
};

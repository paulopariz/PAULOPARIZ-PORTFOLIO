module.exports = {
  chainWebpack: (config) => {
    config.plugin("preload").tap((options) => {
      options[0].include = "initial";
      return options;
    });
    config.plugin("prefetch").tap((options) => {
      options[0].include = "asyncChunks";
      return options;
    });
  },
  deferredAssets: {
    js: ["async-script.js"],
  },
};

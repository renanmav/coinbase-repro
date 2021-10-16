module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["@coinbase/babel-preset-expo"],
  };
};

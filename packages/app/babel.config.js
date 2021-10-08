module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["module:@coinbase/babel"],
  };
};

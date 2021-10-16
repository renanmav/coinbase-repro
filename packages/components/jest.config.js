const pkg = require("./package");

module.exports = {
  displayName: pkg.name,
  rootDir: "./",
  preset: "jest-expo",
  reporters: ["default"],
  coverageReporters: ["lcov", "html"],
  testRegex: "(test|spec).[jt]sx?$",
  transform: {
    "^.+\\.[tj]sx?$": ["babel-jest", { cwd: __dirname }],
  },
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|@react-native|react-clone-referenced-element|@react-native-picker|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*)",
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
};

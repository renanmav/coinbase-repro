module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["plugin:@typescript-eslint/recommended", "plugin:import/warnings"],
  plugins: ["import", "react-native"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
    "react-native/no-unused-styles": "error",
    "import/order": [
      "error",
      {
        pathGroups: [
          {
            pattern: "@coinbase/**",
            group: "external",
            position: "before",
          },
        ],
        "newlines-between": "always",
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
    "no-nested-ternary": "error",
  },
  settings: {
    "import/internal-regex": "^@coinbase/",
    "import/resolver": {
      node: {
        extensions: [
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
          ".android.jsx",
          ".ios.jsx",
          ".android.tsx",
          ".ios.tsx",
          ".android.ts",
          ".ios.ts",
        ],
      },
    },
  },
  overrides: [
    {
      files: ["*.js", "*.jsx"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
};

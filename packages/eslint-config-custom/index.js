module.exports = {
  extends: ["next", "turbo", "prettier"],
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "no-non-null-assertion": "off",
    "indent": [
        "error",
        2
    ],
    "linebreak-style": [
        "error",
        "unix"
    ],
    "quotes": [
        "error",
        "single"
    ],
    "semi": [
        "error",
        "never"
    ],
    "@next/next/no-html-link-for-pages": "off",
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
};

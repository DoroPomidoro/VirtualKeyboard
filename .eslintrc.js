module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["airbnb-base"],
  rules: {
    semi: "off",
    quotes: ["error", "double"],
    "linebreak-style": ["error", "windows"],
  },
};

module.exports = {
  parserOptions: {
    "parser": "babel-eslint",
    "sourceType": "module"
  },
  extends: [
    "standard",
    "prettier",
    "prettier/standard",
    "plugin:vue/recommended"
  ],
  plugins: ["vue","prettier","standard"],
  rules: {
    "prettier/prettier": "error"
  }
}

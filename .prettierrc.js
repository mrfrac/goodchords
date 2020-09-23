module.exports = {
  parser: "@typescript-eslint/parser",
  extends:  [
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  trailingComma: "all",
  arrowParens: "always",
  proseWrap: "never"
}

module.exports = {
  extends: ["@rocketseat/eslint-config/react"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        semi: true,
        arrowParens: "avoid",
        endOfLine: "auto",
      },
    ],
  },
};

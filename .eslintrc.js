module.exports = {
  root: true,
  extends: ["eslint:recommended", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": 2,
  },
  env: {
    node: true,
  },
};

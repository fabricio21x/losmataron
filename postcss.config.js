const { resolve } = require("path");

module.exports = {
  plugins: [
    require("postcss-import")({
      path: [resolve("src")],
    }),
    require("tailwindcss"),
    require("autoprefixer"),
    require("postcss-preset-env")({ stage: 1 }),
  ],
};

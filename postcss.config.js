const path = require("path");
const process = require("process");

module.exports = (ctx) => ({
  plugins: [
    require("tailwindcss")(path.resolve(__dirname, "tailwind.config.js")),
    require("autoprefixer"),
    process.env.FLASK_PROD === "production" &&
      require("@fullhuman/postcss-purgcss")({
        content: [path.resolve(__dirname, "templates/**/*.html")],
        defaultExtractore: (content) =>
          content.match(/[A-Za-z0-9-_:/]+/g) || [],
      }),
  ],
});

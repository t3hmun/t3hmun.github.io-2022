// This config exists because of issues between tailwind and astro https://github.com/tailwindlabs/prettier-plugin-tailwindcss/issues/31#issuecomment-1312202554
// No changes to prettier's formatting rules.

module.exports = {
  plugins: [
    "prettier-plugin-astro",
    "prettier-plugin-organize-imports",
    "prettier-plugin-tailwindcss", // This must be last
  ],
  pluginSearchDirs: false,
};

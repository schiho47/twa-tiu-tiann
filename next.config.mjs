import i18nConfig from "./next-i18next.config.js";

const { i18n } = i18nConfig;
/** @type {import('next').NextConfig} */
const nextConfig = withContentlayer({
  reactStrictMode: true,
  i18n,
});

module.exports = nextConfig;

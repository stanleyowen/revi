/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["private-user-images.githubusercontent.com"],
    },
    i18n: {
        locales: ["en-US", "id-ID"],
        defaultLocale: "en-US",
    },
};

module.exports = nextConfig;

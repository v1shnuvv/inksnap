/** @type {import('next').NextConfig} */

const isProd = true;
const nextConfig = {
    // output: "export",
    distDir: 'dist',
    basePath: isProd ? '/inksnap' : '',
    images: { unoptimized: true }
}

module.exports = nextConfig

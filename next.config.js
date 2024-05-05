/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV

const nextConfig = {
    output: "export",
    distDir: 'dist',
    basePath: isProd ? '/inksnap' : '',
    "paths": {
        "@/components/*": ["src/components/*"],
        "@/context/*": ["src/context/*"],
        "@/provider/*": ["src/provider/*"]
    }
}

module.exports = nextConfig

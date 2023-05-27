/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[{
            protocol:'https',
            hostname:'**'
        }]
    },
    env: {
        VERCEL_URL: process.env.VERCEL_URL,
      },
}

module.exports = nextConfig

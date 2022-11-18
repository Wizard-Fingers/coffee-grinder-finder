// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

// Added the follow configs into next.config.js
module.exports = {
  cleanDistDir: false,
  images: {
    disableStaticImages: true,
  },
}
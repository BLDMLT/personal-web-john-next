/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    AUTH0_NAMESPACE: process.env.AUTH0_NAMESPACE,
    BASE_URL: process.env.BASE_URL
  }
};

export default nextConfig;
// no need for it, it will be in jsconfig.json
// const path = require('path');

// module.exports = {
//   webpack: config => {
//     config.resolve.alias['@'] = path.resolve(__dirname);
//     return config;
//   }
// }
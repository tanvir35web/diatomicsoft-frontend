// /** @type {import('next').NextConfig} */
// const nextConfig = {

//     images: {
//       remotePatterns: [
//         {
//           protocol: 'https',
//           hostname: 'i.ibb.co.com',
//           port: '',
//         },
//         {
//           protocol: 'https',
//           hostname: 'i.ibb.co',
//           port: '',
//         },
//         {
//           protocol: 'https',
//           hostname: 'ibb.co.com',
//           port: '',
//         },
//       ],
   
//   }
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static export
  images: {
    unoptimized: true,
  },
  basePath: '', // Use if deploying to a subdirectory (e.g., /blog)
  assetPrefix: '', // Specify if you need a custom prefix for assets
};

export default nextConfig;

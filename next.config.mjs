/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'i.ibb.co.com',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'i.ibb.co',
          port: '',
        },
      ],
   
  }
};

export default nextConfig;

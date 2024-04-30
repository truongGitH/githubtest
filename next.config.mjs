/** @type {import('next').NextConfig} */
const nextConfig = {
    
        images: {
          remotePatterns: [
            {
              protocol: 'https',
              hostname: 'hoanghamobile.com',
              port: '',
              pathname: '/tin-tuc/**',
            },
          ],
        },
      
};

export default nextConfig;

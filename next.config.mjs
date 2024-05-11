/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/browse',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

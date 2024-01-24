/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "basehub.earth",
      },
    ],
  },
};

export default nextConfig;

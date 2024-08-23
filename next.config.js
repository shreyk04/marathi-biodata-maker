/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Required if you use Next.js' Image component
  },
};

module.exports = nextConfig;

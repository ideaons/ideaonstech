import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow Three.js and React Three Fiber in Next.js
  transpilePackages: ["three", "@react-three/fiber", "@react-three/drei"],
};

export default nextConfig;

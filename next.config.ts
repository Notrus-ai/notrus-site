import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   typescript: {
    ignoreBuildErrors: true, // agora funciona sem Turbopack
  },
};

module.exports = {
  async redirects() {
    return [
      {
        source: '/pt/isp',
        destination: '/pt/automacao-atendimento-provedores-internet',
        permanent: true, // 301 redirect (melhor para SEO)
      },
    ]
  },
}

export default nextConfig;

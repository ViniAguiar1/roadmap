import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // Este app é uma zona do viniciusaguiardev.com.br: o portfólio reescreve
  // /:locale/roadmap e /roadmap-static/* para cá. O prefixo impede que os
  // assets daqui colidam com os do portfólio no mesmo domínio.
  assetPrefix: "/roadmap-static",
  async headers() {
    // Observabilidade: o DevTools mostra qual app respondeu.
    return [{ source: "/(.*)", headers: [{ key: "x-zone", value: "roadmap" }] }]
  },
}

export default nextConfig

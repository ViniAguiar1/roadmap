import type { MetadataRoute } from "next"

// O endereço canônico é viniciusaguiardev.com.br/:locale/roadmap, cujo robots
// é do portfólio. O domínio do deploy deste app seria conteúdo duplicado.
export default function robots(): MetadataRoute.Robots {
  return { rules: [{ userAgent: "*", disallow: "/" }] }
}

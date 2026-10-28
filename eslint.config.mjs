import nextConfig from "eslint-config-next"

const config = [
  ...nextConfig,
  { ignores: ["node_modules/**", ".next/**", "out/**", "next-env.d.ts"] },
  // Código gerado pelo shadcn.
  { files: ["components/sheet.tsx"], rules: { "react-hooks/purity": "off" } },
]

export default config

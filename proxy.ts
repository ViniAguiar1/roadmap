import { NextResponse, type NextRequest } from "next/server"
import { DEFAULT_LOCALE, isLocale } from "@/lib/i18n"

// O app só tem /:locale/roadmap: qualquer caminho sem locale cai em /pt/roadmap.
export function proxy(request: NextRequest) {
  const first = request.nextUrl.pathname.split("/").filter(Boolean)[0]
  if (isLocale(first)) return NextResponse.next()

  const url = request.nextUrl.clone()
  url.pathname = `/${DEFAULT_LOCALE}/roadmap`
  return NextResponse.redirect(url, 308)
}

export const config = {
  matcher: ["/((?!_next|roadmap-static|api|.*\\..*).*)"],
}

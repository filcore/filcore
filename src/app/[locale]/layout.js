import "../globals.css";
import { Noto_Sans_KR, Open_Sans } from "next/font/google";
import HeaderFixed from "@/components/layouts/HeaderFixed";
import SideFixedMenu from "@/components/layouts/SideFixedMenu";
import SmoothScrollProvider from "@/components/layouts/SmoothScrollProvider";
import ProductDetailLayer from "@/components/common/ProductDetailLayer";
import NewsDetail from "@/components/common/NewsDetail";
// import { NextIntlClientProvider, hasLocale } from "next-intl";
// import { notFound } from "next/navigation";
// import { routing } from "@/i18n/routing";
// import { setRequestLocale } from "next-intl/server";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-kr",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

// generateStaticParams: 빌드 시 모든 locale 경로 생성
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  // 유효한 locale이 아니면 404
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // 서버 측에서 request locale 설정
  setRequestLocale(locale);

  return (
    <html lang={locale} className={`${notoSansKR.variable} ${openSans.variable}`}>
      <body className="antialiased">
        <NextIntlClientProvider>
          <NewsDetail />
          <ProductDetailLayer />
          <HeaderFixed />
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
          <SideFixedMenu />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

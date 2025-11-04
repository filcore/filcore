// src/app/[locale]/layout.js
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import "../globals.css";
import { Noto_Sans_KR, Open_Sans } from "next/font/google";
import HeaderFixed from "@/components/layouts/HeaderFixed";
import SideFixedMenu from "@/components/layouts/SideFixedMenu";
import SmoothScrollProvider from "@/components/layouts/SmoothScrollProvider";
import ProductDetailLayer from "@/components/common/ProductDetailLayer";
import NewsDetail from "@/components/common/NewsDetail";
import MobileMenuWrap from '@/components/common/MobileMenuWrap';
import getRequestConfig from '@/i18n/request';
import { routing } from '@/i18n/routing';

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

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  // 유효하지 않은 locale이면 404
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // 해당 locale 메시지 가져오기
  const { messages } = await getRequestConfig({ requestLocale: locale });

  return (
    <html className={`${notoSansKR.variable} ${openSans.variable}`} lang={locale}>
      <body className="antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <MobileMenuWrap />
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

// src/app/layout.js

import "./globals.css";
import { Noto_Sans_KR, Open_Sans } from "next/font/google";
import HeaderFixed from "@/components/layouts/HeaderFixed";
import SideFixedMenu from "@/components/layouts/SideFixedMenu";
import SmoothScrollProvider from "@/components/layouts/SmoothScrollProvider";
import ProductDetailLayer from "@/components/common/ProductDetailLayer";
import NewsDetail from "@/components/common/NewsDetail";
import MobileMenuWrap from '@/components/common/MobileMenuWrap';

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

export default function RootLayout({ children }) {
  return (
    <html className={`${notoSansKR.variable} ${openSans.variable}`} lang="ko">
      <body className="antialiased">
        <MobileMenuWrap />
        <NewsDetail />
        <ProductDetailLayer />
        <HeaderFixed />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
        <SideFixedMenu />
      </body>
    </html>
  );
}

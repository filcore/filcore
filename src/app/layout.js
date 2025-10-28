import "./globals.css";
import { Noto_Sans_KR, Open_Sans } from "next/font/google";
import HeaderFixed from '@/components/layouts/HeaderFixed';
import SideFixedMenu from '@/components/layouts/SideFixedMenu';
import SmoothScrollProvider from "@/components/layouts/SmoothScrollProvider";
import ProductDetailLayer from '@/components/common/ProductDetailLayer';
import NewsDetail from '@/components/common/NewsDetail';

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"], // 한글은 latin도 포함되어야 함
  weight: ["400", "500", "700"], // 필요 가중치만 선택
  variable: "--font-noto-sans-kr",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});


export const metadata = {
  title: "FilCore | MF & UF membrane with Filcore",
  description: "Filcore Co., Ltd. is a global leader in hollow fiber membrane technology, providing high-quality MF and UF membrane solutions for water treatment industries worldwide.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={`${notoSansKR.variable} ${openSans.variable}`}>
      <body
        className={` antialiased`}
      >
        <NewsDetail />
        <ProductDetailLayer />
        <HeaderFixed />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
        <SideFixedMenu />
      </body>
    </html>
  );
}

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "FilCore | MF & UF membrane with Filcore",
  description: "Filcore Co., Ltd. is a global leader in hollow fiber membrane technology, providing high-quality MF and UF membrane solutions for water treatment industries worldwide.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

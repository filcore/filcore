import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

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
        <div className='fixed top-0 left-0 w-full'>
          <div className='container mx-auto flex items-center justify-between h-26'>
            <div>
              <Link href="/">
                <img src="/logo.png" alt="" className='w-[180px]' />
              </Link>
            </div>
            <ul className='flex items-center gap-10 font-semibold'>
              <li>
                <Link href="/">인사말</Link>
              </li>
              <li>
                <Link href="/">제품소개</Link>
              </li>
              <li>
                <Link href="/">기술연구소</Link>
              </li>
              <li>
                <Link href="/">필코아소식</Link>
              </li>
              <li>
                <Link href="/">고객센터</Link>
              </li>
              <li>
                <Link href="/">ENG</Link>
              </li>
              <li>
                <Link href="/" className='bg-[#54a8c7] text-white p-3 rounded-md'>Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='w-full'>
          {children}
        </div>
      </body>
    </html>
  );
}

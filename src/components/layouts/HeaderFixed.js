"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";

export default function HeaderFixed() {
  const headerRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const header = headerRef.current;
      const logo = logoRef.current;

      if (!header || !logo) return;

      if (scrollY > 50) {
        // 스크롤 내렸을 때

        // blur 복원
        header.classList.add("backdrop-blur-sm");

        gsap.to(header, {
          backgroundColor: "rgba(0, 0, 0, 0.85)",
          height: "60px",
          // boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          duration: 0.3,
          ease: "power1.out",
        });

        gsap.to(logo, {
          width: "120px",
          duration: 0.3,
          ease: "power1.out",
        });
      } else {
        // 원래 상태

        // blur 제거
        header.classList.remove("backdrop-blur-sm");

        gsap.to(header, {
          backgroundColor: "rgba(0, 0, 0, 0)",
          height: "104px", // h-26
          boxShadow: "none",
          duration: 0.3,
          ease: "power1.out",
        });

        gsap.to(logo, {
          width: "180px",
          duration: 0.3,
          ease: "power1.out",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={headerRef}
      className="header fixed top-0 left-0 w-full z-30 h-26 flex items-center"
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <img
            ref={logoRef}
            src="/logo-w.png"
            alt="logo"
            className="w-[180px]"
          />
        </Link>
        <ul className="flex items-center gap-10 font-normal text-white">
          <li><Link href="/">인사말</Link></li>
          <li><Link href="/">제품소개</Link></li>
          <li><Link href="/">기술연구소</Link></li>
          <li><Link href="/">필코아소식</Link></li>
          <li><Link href="/">고객센터</Link></li>
          <li><Link href="/">ENG</Link></li>
          <li>
            <Link
              href="/"
              className="bg-[#54a8c7] text-white p-1 px-2 rounded-md"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

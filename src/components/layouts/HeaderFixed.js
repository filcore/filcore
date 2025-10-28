"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

export default function HeaderFixed() {
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const [activeMenu, setActiveMenu] = useState("sectionHero"); // 기본 활성 메뉴

  const menuItems = [
    { name: "인사말", target: "sectionHero" },
    { name: "제품소개", target: "sectionProducts" },
    { name: "기술연구소", target: "sectionRnd" },
    { name: "필코아소식", target: "sectionContact" },
  ];

  const handleMenuClick = (target) => {
    const section = document.querySelector(`.${target}`);
    if (!section) return;

    const targetY = section.getBoundingClientRect().top + window.scrollY - 0;

    gsap.to(window, {
      duration: 0.7,
      scrollTo: targetY,
      ease: "power2.out",
    });
  };

  // 헤더 축소/확장
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const header = headerRef.current;
      const logo = logoRef.current;

      if (!header || !logo) return;

      if (scrollY > 50) {
        header.classList.add("backdrop-blur-sm");

        gsap.to(header, {
          backgroundColor: "rgba(0, 0, 0, 0.85)",
          height: "60px",
          duration: 0.3,
          ease: "power1.out",
        });

        gsap.to(logo, {
          width: "120px",
          duration: 0.3,
          ease: "power1.out",
        });
      } else {
        header.classList.remove("backdrop-blur-sm");

        gsap.to(header, {
          backgroundColor: "rgba(0, 0, 0, 0)",
          height: "104px",
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

  // ✅ ScrollTrigger로 메뉴 활성화
  useEffect(() => {
    menuItems.forEach((item) => {
      const section = document.querySelector(`.${item.target}`);
      if (!section) return;

      ScrollTrigger.create({
        trigger: section,
        start: "top 100", // 섹션이 화면 상단 100px 지점에 도달하면
        end: "bottom top",
        onEnter: () => setActiveMenu(item.target),
        onEnterBack: () => setActiveMenu(item.target),
      });
    });

    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
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
            className="w-[180px] transition-all"
          />
        </Link>

        <ul className="flex items-center gap-10 font-normal text-white">
          {menuItems.map((item) => (
            <li key={item.target}>
              <button
                onClick={() => handleMenuClick(item.target)}
                className={`cursor-pointer transition-colors ${activeMenu === item.target ? "text-[#3f8da8]" : "text-white"
                  }`}
              >
                {item.name}
              </button>
            </li>
          ))}

          <li>
            <Link href="/" className="opacity-80 hover:opacity-100">
              ENG
            </Link>
          </li>

          <li>
            <button
              onClick={() => handleMenuClick("sectionContact")}
              className="bg-[#54a8c7] text-white p-1 px-2 rounded-md hover:bg-[#3f8da8] transition-colors cursor-pointer"
            >
              Contact Us
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // ✅ 현재 경로 감지용
import { useTranslations, useLocale } from "next-intl"; // ✅ 언어 감지
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icon } from "@iconify/react";
import { menuItems } from "@/data/menuItems";
import { scrollToSection } from "@/utils/scrollToSection";
import { useMenuStore } from "@/store/menuStore";

gsap.registerPlugin(ScrollTrigger);

export default function HeaderFixed() {
  const t = useTranslations("Menu");
  const locale = useLocale(); // ✅ 현재 locale 값 (ko, en 등)
  const pathname = usePathname();

  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const [activeMenu, setActiveMenu] = useState("sectionHero");
  const openMenu = useMenuStore((state) => state.openMenu);

  const handleMenuClick = (target) => {
    scrollToSection(target, 0);
  };

  // ✅ 헤더 축소/확장 애니메이션
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const header = headerRef.current;
      const logo = logoRef.current;
      if (!header || !logo) return;

      const isMd = window.innerWidth >= 768;

      if (scrollY > 50) {
        gsap.to(header, { backgroundColor: "rgba(0,0,0,0.85)", height: isMd ? "60px" : "50px", duration: 0.3 });
        gsap.to(logo, { width: isMd ? "120px" : "100px", duration: 0.3 });
      } else {
        gsap.to(header, { backgroundColor: "rgba(0,0,0,0)", height: isMd ? "112px" : "80px", duration: 0.3 });
        gsap.to(logo, { width: isMd ? "180px" : "130px", duration: 0.3 });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ ScrollTrigger로 현재 메뉴 활성화
  useEffect(() => {
    menuItems.forEach((item) => {
      const section = document.querySelector(`.${item.target}`);
      if (!section) return;

      ScrollTrigger.create({
        trigger: section,
        start: "top 100",
        end: "bottom top",
        onEnter: () => setActiveMenu(item.target),
        onEnterBack: () => setActiveMenu(item.target),
      });
    });

    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  }, []);

  return (
    <div ref={headerRef} className="fixed top-0 left-0 w-full z-30 h-20 md:h-28 flex items-center">
      <div className="container mx-auto flex items-center justify-between px-5">
        {/* ✅ 로고 클릭 시 현재 언어 기준으로 이동 */}
        <Link href={`/${locale}`}>
          <img ref={logoRef} src="/logo-w.png" alt="logo" className="w-[130px] md:w-[180px]" />
        </Link>

        {/* ✅ 모바일 메뉴 버튼 */}
        <button onClick={openMenu} className="m-menu text-white md:hidden">
          <Icon icon="subway:menu" width="27" height="27" />
        </button>

        <ul className="hidden md:flex gap-10 text-white">
          {menuItems.map((item) => (
            <li key={item.target}>
              <button
                onClick={() => handleMenuClick(item.target)}
                className={`transition-colors ${activeMenu === item.target ? "text-[#3f8da8]" : "text-white"
                  } cursor-pointer`}
              >
                {t(item.key)}
              </button>
            </li>
          ))}
          <li>
            <Link href={`/${locale === "ko" ? "en" : "ko"}`} className="opacity-80 hover:opacity-100">
              {t("eng")}
            </Link>
          </li>
          <li>
            <button
              onClick={() => handleMenuClick("sectionContact")}
              className="bg-[#54a8c7] text-white p-1 px-2 rounded-md hover:bg-[#3f8da8] transition-colors cursor-pointer"
            >
              {t("contact")}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

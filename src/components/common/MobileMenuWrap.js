"use client";
import React, { useEffect } from "react";
import { useMenuStore } from "@/store/menuStore";
import { menuItems } from "@/data/menuItems";
import { scrollToSection } from "@/utils/scrollToSection";
import { Icon } from "@iconify/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function MobileMenuWrap() {
  const { isMenuOpen, closeMenu, activeMenu, setActiveMenu } = useMenuStore();

  // ScrollTrigger로 섹션 진입 시 activeMenu 업데이트
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
  }, [setActiveMenu]);

  if (!isMenuOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-lg z-50">
      <div className="relative w-full h-full bg-white p-8 flex flex-col">
        <button
          className="absolute top-4 right-4 text-2xl text-black"
          onClick={closeMenu}
        >
          <Icon icon="mdi:close" width="28" height="28" />
        </button>

        <ul className="mt-16 space-y-6 text-lg">
          {menuItems.map((item) => (
            <li key={item.target}>
              <button
                className={`w-full text-left ${activeMenu === item.target ? "text-[#3f8da8]" : "text-gray-800"
                  } hover:text-[#3f8da8]`}
                onClick={() => {
                  scrollToSection(item.target, 0);
                  closeMenu();
                }}
              >
                {item.name}
              </button>
            </li>
          ))}

          <li>
            <a
              href="/"
              className="block text-gray-800 hover:text-[#3f8da8]"
            >
              ENG
            </a>
          </li>

          <li>
            <button
              onClick={() => {
                scrollToSection("sectionContact", 0);
                closeMenu();
              }}
              className="bg-[#54a8c7] text-white w-full p-2 rounded-md hover:bg-[#3f8da8]"
            >
              Contact Us
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

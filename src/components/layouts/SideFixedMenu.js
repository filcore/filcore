"use client";
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Icon } from '@iconify/react';

gsap.registerPlugin(ScrollToPlugin);

export default function SideFixedMenu() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    gsap.to(window, {
      scrollTo: { y: 0 }, // ✅ 객체 형태로 전달
      duration: 0.6,
      ease: "power2.out",
    });
  };

  return (
    <div className="sideMenu fixed right-10 bottom-7 z-30">
      {visible && (
        <button
          onClick={scrollToTop}
          className="goto text-white animate-bounce cursor-pointer"
        >
          <Icon icon="iconoir:fast-top-circle" width="50" height="50" />
        </button>
      )}
    </div>
  );
}

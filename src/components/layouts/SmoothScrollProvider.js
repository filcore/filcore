"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";

export default function SmoothScrollProvider({ children }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollSmoother);

    // 이미 생성된 스무더가 있으면 제거
    if (ScrollSmoother.get()) ScrollSmoother.get().kill();

    // ScrollSmoother 생성
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.2, // 부드러움 정도
      effects: true, // data-speed, data-lag 효과 허용
      normalizeScroll: true, // 스크롤 안정화
    });
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
}

"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useNewsStore } from "@/store/newsStore"; // 뉴스 스토어 임포트

export default function SmoothScrollProvider({ children }) {
  const { selectedNews } = useNewsStore(); // 뉴스 선택 상태 가져오기

  useEffect(() => {
    gsap.registerPlugin(ScrollSmoother);

    // 이미 생성된 smoother가 있으면 제거
    if (ScrollSmoother.get()) ScrollSmoother.get().kill();

    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.2, // 부드러움 정도
      effects: true, // data-speed, data-lag 허용
      normalizeScroll: true,
    });

    return () => {
      smoother.kill();
    };
  }, []);

  // ✅ 뉴스 모달 상태 변화 감지
  useEffect(() => {
    const smoother = ScrollSmoother.get();
    if (!smoother) return;

    if (selectedNews) {
      // 모달 열림 → smoother 정지 + body 스크롤 막기
      smoother.paused(true);
      document.body.style.overflow = "hidden";
    } else {
      // 모달 닫힘 → smoother 재개 + body 스크롤 복원
      smoother.paused(false);
      document.body.style.overflow = "auto";
    }
  }, [selectedNews]);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
}

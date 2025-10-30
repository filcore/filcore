// src/utils/scrollToSection.js
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

/**
 * 페이지 내 특정 섹션으로 스크롤 이동하는 공통 함수
 * @param {string} targetClass - 섹션 클래스명 (예: 'sectionProducts')
 * @param {number} offset - 상단 여백 보정값 (헤더 높이 등)
 */
export const scrollToSection = (targetClass, offset = 0) => {
  const section = document.querySelector(`.${targetClass}`);
  if (!section) return;

  const targetY = section.getBoundingClientRect().top + window.scrollY - offset;

  gsap.to(window, {
    duration: 0.7,
    scrollTo: targetY,
    ease: "power2.out",
  });
};

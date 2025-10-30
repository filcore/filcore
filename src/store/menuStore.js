// src/store/menuStore.js
"use client";
import { create } from "zustand";

export const useMenuStore = create((set) => ({
  isMenuOpen: false,
  activeMenu: "sectionHero", // 기본 활성 메뉴

  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  openMenu: () => set({ isMenuOpen: true }),
  closeMenu: () => set({ isMenuOpen: false }),

  setActiveMenu: (menu) => set({ activeMenu: menu }), // ✅ 메뉴 활성화
}));

import { create } from "zustand";

export const useProductStore = create((set) => ({
  selectedProduct: null, // 선택된 상품
  setSelectedProduct: (product) => set({ selectedProduct: product }),
  clearSelectedProduct: () => set({ selectedProduct: null }),
}));

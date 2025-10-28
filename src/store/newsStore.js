import { create } from "zustand";

export const useNewsStore = create((set) => ({
  selectedNews: null,
  openNews: (news) => set({ selectedNews: news }),
  closeNews: () => set({ selectedNews: null }),
}));

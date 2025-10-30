"use client";
import React from "react";
import { Icon } from "@iconify/react";
import { useNewsStore } from "@/store/newsStore";

export default function NewsDetail() {
  const { selectedNews, closeNews } = useNewsStore();

  if (!selectedNews) return null; // 선택된 뉴스 없으면 렌더링 안함

  return (
    <div
      className="newsDetail fixed inset-0 bg-white/50 backdrop-blur-sm flex items-center justify-center z-50 px-5 md:px-0"
      onClick={closeNews} // 배경 클릭 시 닫힘
    >
      <div
        className="max-w-3xl relative mx-auto bg-white rounded-2xl shadow-lg h-[80vh] overflow-y-auto p-10"
        onClick={(e) => e.stopPropagation()} // 내부 클릭 시 닫힘 방지
      >
        <button
          className="closePrdDetail absolute top-5 right-5 z-30 cursor-pointer"
          onClick={closeNews} // X 버튼 클릭 시 닫힘
        >
          <Icon icon="ri:close-large-fill" width="24" height="24" />
        </button>

        <div className="text-black/50 mb-2">{selectedNews.date}</div>
        <div className="text-2xl pb-5 border-b border-b-zinc-500 font-bold">
          {selectedNews.title}
        </div>

        <div className="mt-5 space-y-4">
          {selectedNews.images?.map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
              className="rounded-lg mb-4 max-h-[60vh] w-auto mx-auto object-contain"
            />
          ))}
          {selectedNews.content?.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

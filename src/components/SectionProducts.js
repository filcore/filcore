"use client";
import React, { useState } from "react";
import Purifier from './Purifier';
import Commercial from './Commercial';
import Medical from './Medical';
import Accessories from './Accessories';

export default function SectionProducts() {
  // ✅ 현재 선택된 탭 상태
  const [activeTab, setActiveTab] = useState("home");

  return (
    <section className="section min-h-screen bg-zinc-200 flex items-center justify-center py-40">
      <div className="container mx-auto grid grid-cols-1 gap-10 place-items-start">
        {/* 왼쪽 텍스트 */}
        <div className="grid grid-cols-1 gap-2 text-2xl col-span-1">
          <div className="text-5xl font-black mb-5">Products.</div>
          <div className="text-xl">Innovative Membrane Solutions</div>
          <div className="text-2xl font-light">
            기재 되어있는 유량은 원수 상태 및 출수구 크기에 따라 다를 수 있습니다.
          </div>
        </div>

        {/* 오른쪽 콘텐츠 */}
        <div className="col-span-2 grid grid-cols-1 gap-4 w-full">
          {/* 탭 버튼 */}
          <div className="grid grid-cols-4 gap-5 h-10 font-bold">
            <button
              onClick={() => setActiveTab("home")}
              className={`prdTab block w-full h-full rounded-sm cursor-pointer transition-all duration-300 ${activeTab === "home" ? "bg-[#54a8c7] text-white" : "bg-zinc-50"
                }`}
            >
              가정용 정수기
            </button>
            <button
              onClick={() => setActiveTab("industrial")}
              className={`prdTab block w-full h-full rounded-sm cursor-pointer transition-all duration-300 ${activeTab === "industrial"
                ? "bg-[#54a8c7] text-white"
                : "bg-zinc-50"
                }`}
            >
              상업용&amp;산업용
            </button>
            <button
              onClick={() => setActiveTab("medical")}
              className={`prdTab block w-full h-full rounded-sm cursor-pointer transition-all duration-300 ${activeTab === "medical"
                ? "bg-[#54a8c7] text-white"
                : "bg-zinc-50"
                }`}
            >
              의료용
            </button>
            <button
              onClick={() => setActiveTab("other")}
              className={`prdTab block w-full h-full rounded-sm cursor-pointer transition-all duration-300 ${activeTab === "other"
                ? "bg-[#54a8c7] text-white"
                : "bg-zinc-50"
                }`}
            >
              기타
            </button>
          </div>

          {/* 탭 콘텐츠 */}
          <div className="">
            {activeTab === "home" && (
              <Purifier />
            )}
            {activeTab === "industrial" && (
              <Commercial />
            )}
            {activeTab === "medical" && (
              <Medical />
            )}
            {activeTab === "other" && (
              <Accessories />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import Purifier from './Purifier';
import Commercial from './Commercial';
import Medical from './Medical';
import Accessories from './Accessories';

export default function SectionProducts() {
  const t = useTranslations("SectionProducts");

  const [activeTab, setActiveTab] = useState("home");

  return (
    <section id='sectionProducts' className="section sectionProducts min-h-screen bg-zinc-200 flex items-center justify-center py-20 md:py-40">
      <div className="container mx-auto grid grid-cols-1 gap-10 md:gap-15 place-items-start px-5 md:px-0">
        {/* 왼쪽 텍스트 */}
        <div className="grid grid-cols-1 gap-2 text-2xl col-span-1">
          <div className="text-5xl font-black mb-5">{t("title")}</div>
          <div className="text-lg md:text-xl">{t("subtitle")}</div>
          <div className="text-xl md:text-2xl font-light">{t("description")}</div>
        </div>

        {/* 오른쪽 콘텐츠 */}
        <div className="col-span-2 grid grid-cols-1 gap-4 w-full">
          {/* 탭 버튼 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-5 md:h-10 font-bold">
            <button
              onClick={() => setActiveTab("home")}
              className={`prdTab block w-full h-full rounded-sm cursor-pointer transition-all duration-300 ${activeTab === "home" ? "bg-[#54a8c7] text-white" : "bg-zinc-50"} p-1.5 md:p-0`}
            >
              {t("tabs.home")}
            </button>
            <button
              onClick={() => setActiveTab("industrial")}
              className={`prdTab block w-full h-full rounded-sm cursor-pointer transition-all duration-300 ${activeTab === "industrial" ? "bg-[#54a8c7] text-white" : "bg-zinc-50"} p-1.5 md:p-0`}
            >
              {t("tabs.industrial")}
            </button>
            <button
              onClick={() => setActiveTab("medical")}
              className={`prdTab block w-full h-full rounded-sm cursor-pointer transition-all duration-300 ${activeTab === "medical" ? "bg-[#54a8c7] text-white" : "bg-zinc-50"} p-1.5 md:p-0`}
            >
              {t("tabs.medical")}
            </button>
            <button
              onClick={() => setActiveTab("other")}
              className={`prdTab block w-full h-full rounded-sm cursor-pointer transition-all duration-300 ${activeTab === "other" ? "bg-[#54a8c7] text-white" : "bg-zinc-50"} p-1.5 md:p-0`}
            >
              {t("tabs.other")}
            </button>
          </div>

          {/* 탭 콘텐츠 */}
          <div className="">
            {activeTab === "home" && <Purifier />}
            {activeTab === "industrial" && <Commercial />}
            {activeTab === "medical" && <Medical />}
            {activeTab === "other" && <Accessories />}
          </div>
        </div>
      </div>
    </section>
  );
}

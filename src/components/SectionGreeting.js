"use client";

import React from "react";
import { useTranslations } from "next-intl";

export default function SectionGreeting() {
  const t = useTranslations("SectionGreeting");

  return (
    <section id='sectionGreeting' className="section sectionGreeting min-h-screen bg-zinc-100 flex items-center justify-center bg-[url(/white1.jpg)] bg-cover bg-center py-20 md:py-40">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-25 place-items-start px-5 md:px-0">
        {/* 타이틀 & 서브 텍스트 */}
        <div className="grid grid-cols-1 gap-2 text-2xl col-span-1">
          <div className="text-5xl font-black mb-5">
            {t("title")}
          </div>
          <div className="text-lg md:text-xl">
            {t("subtitle")}
          </div>
          <div className="text-xl md:text-2xl font-light">
            {t("description")}
          </div>
        </div>

        {/* 본문 텍스트 */}
        <div className="col-span-2">
          <div className="p-10 bg-white/40 backdrop-blur-sm rounded-4xl text-lg space-y-3 border border-white">
            <p>{t("paragraph1")}</p>
            <p>{t("paragraph2")}</p>
            <p>{t("paragraph3")}</p>
            <p>{t("paragraph4")}</p>
            <p>{t("paragraph5")}</p>
            <p>{t("paragraph6")}</p>
            <p>
              {t("signature")}
              <br />
              <strong>{t("ceo")}</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import React from "react";
import { useTranslations } from "next-intl";

export default function SectionFooter() {
  const t = useTranslations("SectionFooter"); // JSON 키: SectionFooter

  return (
    <div className="w-full bg-zinc-900">
      <div className="container mx-auto min-h-30 flex items-center text-white py-10 px-10 md:px-0">
        <div className="text-sm space-y-1">
          <div className="text-lg">{t("company")}</div>
          <div>{t("ceo")}</div>
          <div>{t("address")}</div>
          <div>{t("telFax")}</div>
          <div>{t("emailDomestic")}</div>
          <div>{t("emailGlobal")}</div>
          <div className="mt-5">{t("copyright")}</div>
        </div>
      </div>
    </div>
  );
}

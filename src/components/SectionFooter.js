"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { Icon } from '@iconify/react';

export default function SectionFooter() {
  const t = useTranslations("SectionFooter"); // JSON 키: SectionFooter

  return (
    <div className="w-full bg-zinc-900">
      <div className="container mx-auto min-h-30 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0 items-start text-white py-10 px-10 md:px-0">
        <div className="text-sm space-y-1">
          <div className="text-lg">{t("company")}</div>
          <div>{t("ceo")}</div>
          <div>{t("address")}</div>
          <div>{t("telFax")}</div>
          <div>{t("emailDomestic")}</div>
          <div>{t("emailGlobal")}</div>
          <div className="mt-5">{t("copyright")}</div>
        </div>
        <div className='flex md:justify-end'>
          <a
            href="/files/Filcore Catalogue 2024.pdf"
            download
            className=" bg-black text-white p-3 rounded-lg flex gap-3"
          >
            <Icon icon="vscode-icons:file-type-pdf2" width="28" height="28" /> {t("pdf")}
          </a>
        </div>
      </div>
    </div>
  );
}

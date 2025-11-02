"use client";
import React from "react";
import { Icon } from "@iconify/react";
import { newsData } from "@/data/newsData";
import { useNewsStore } from "@/store/newsStore";
import { useTranslations } from "next-intl";

export default function SectionContact() {
  const { openNews } = useNewsStore();
  const t = useTranslations("SectionContact"); // JSON 키: SectionContact

  return (
    <section id='sectionContact' className="section sectionContact relative min-h-screen bg-[url(/white6.jpg)] bg-cover bg-center flex items-center justify-center py-20 md:py-40">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-15 md:gap-10 place-items-start px-5 md:px-0">
        {/* 왼쪽 Contact 정보 */}
        <div className="grid grid-cols-1 gap-5 text-2xl col-span-1">
          <div className="text-5xl font-black">{t("title")}</div>

          <div className="grid grid-cols-1 gap-5 text-lg">
            <div>
              <div className="text-xl font-bold mb-2">{t("email")}</div>
              <div className='space-y-2'>
                <div>
                  <div className='text-sm font-bold'>{t("domestic")}</div>
                  <div>domestic@filcore.co.kr</div>
                </div>
                <div>
                  <div className='text-sm font-bold'>{t("overseas")}</div>
                  <div>overseas@filcore.co.kr</div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-xl font-bold">{t("tel")}</div>
              <div>+82-31-433-3988</div>
            </div>
            <div>
              <div className="text-xl font-bold">{t("fax")}</div>
              <div>+82-31-433-3987</div>
            </div>
            <div>
              <div className="text-xl font-bold">{t("addr")}</div>
              <div>{t("address")}</div>
            </div>
            <div className="flex">
              <a
                href="https://maps.app.goo.gl/jjB4mmSFoyY9e3iq8"
                target="_blank"
                className="flex items-center border border-zinc-400 p-4 space-x-2 hover:bg-zinc-100 transition"
              >
                <Icon icon="logos:google-maps" width="25" height="25" />
                <span>{t("googleMap")}</span>
              </a>
            </div>
          </div>
        </div>

        {/* 오른쪽 News 리스트 */}
        <div className="grid grid-cols-1 gap-5 w-full">
          <div className="text-5xl font-black">{t("newsTitle")}</div>
          <div className="grid grid-cols-1 gap-3 divide-y divide-zinc-400">
            {newsData.map((news) => (
              <div
                key={news.id}
                className="newsList pb-3 group cursor-pointer"
                onClick={() => openNews(news)}
              >
                <div className="text-2xl font-black group-hover:text-green-600 transition-colors duration-300">
                  {news.title} {/* 필요시 newsData 자체도 locale 반영 가능 */}
                </div>
                <div className="text-gray-500">{news.date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import React from "react";
import { Icon } from "@iconify/react";
import { newsData } from "@/data/newsData";
import { useNewsStore } from "@/store/newsStore";

export default function SectionContact() {
  const { openNews } = useNewsStore();

  return (
    <section className="section sectionContact relative min-h-screen bg-[url(/white6.jpg)] bg-cover bg-center flex items-center justify-center py-40">
      <div className="container mx-auto grid grid-cols-2 gap-10 place-items-start">
        {/* 왼쪽 Contact 정보 */}
        <div className="grid grid-cols-1 gap-5 text-2xl col-span-1">
          <div className="text-5xl font-black">Contact.</div>

          <div className="grid grid-cols-1 gap-5 text-lg">
            <div>
              <div className="text-xl font-bold">Email.</div>
              <div>국내영업 문의 : domestic@filcore.co.kr</div>
              <div>해외영업 문의 : overseas@filcore.co.kr</div>
            </div>
            <div>
              <div className="text-xl font-bold">Tel.</div>
              id-      <div>+82-31-433-3988</div>
            </div>
            <div>
              <div className="text-xl font-bold">Fax.</div>
              <div>+82-31-433-3987</div>
            </div>
            <div>
              <div className="text-xl font-bold">Addr.</div>
              <div>
                경기도 시흥시 산기대학로 60, 시화공단 1나 402호 우편번호 15085
              </div>
            </div>
            <div className="flex">
              <a
                href="https://maps.app.goo.gl/jybozJWJ1DisjA2U9"
                target="_blank"
                className="flex items-center border border-zinc-400 p-4 space-x-2 hover:bg-zinc-100 transition"
              >
                <Icon icon="logos:google-maps" width="25" height="25" />
                <span>GoogleMap</span>
              </a>
            </div>
          </div>
        </div>

        {/* 오른쪽 News 리스트 */}
        <div className="grid grid-cols-1 gap-5 w-full">
          <div className="text-5xl font-black">News.</div>
          <div className="grid grid-cols-1 gap-3 divide-y divide-zinc-400">
            {newsData.map((news) => (
              <div
                key={news.id}
                className="newsList pb-3 group cursor-pointer"
                onClick={() => openNews(news)}
              >
                <div className="text-2xl font-black group-hover:text-green-600 transition-colors duration-300">
                  {news.title}
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

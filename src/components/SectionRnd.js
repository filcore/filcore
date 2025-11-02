"use client";
import React from 'react';
import { useTranslations } from "next-intl";

export default function SectionRnd() {
  const t = useTranslations("SectionRnd"); // JSON의 rnd 키

  return (
    <section id='sectionRnd' className="section sectionRnd min-h-screen bg-zinc-100 flex items-center justify-center bg-[url(/rnd1.jpg)] bg-cover bg-center py-20 md:py-40">
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-25 place-items-start px-5 md:px-0'>
        <div className='grid grid-cols-1 gap-2 text-2xl col-span-1 text-white'>
          <div className='text-5xl font-black mb-5'>
            {t("title")}
          </div>
          <div className='text-lg md:text-xl'>
            {t("subtitle")}
          </div>
          <div className='text-xl md:text-2xl font-light'>
            {t("description")}
          </div>
        </div>
        <div className='col-span-2'>
          <div className='p-10 bg-white/80 backdrop-blur-sm rounded-4xl text-lg space-y-5 border border-white'>
            <div className='text-2xl font-bold'>
              {t("introTitle")}
            </div>
            <p>
              {t("introText")}
            </p>
            <div className='text-2xl font-bold'>
              {t("researchTitle")}
            </div>
            <div>
              <div className='text-xl font-semibold'>
                {t("research1Title")}
              </div>
              <p>{t("research1Desc1")}</p>
              <p>{t("research1Desc2")}</p>
              <p>{t("research1Desc3")}</p>
              <p>{t("research1Desc4")}</p>
            </div>
            <div className='grid grid-cols-3 gap-5'>
              <img src="/s1.png" alt="" className='rounded-xl' />
              <img src="/s2.png" alt="" className='rounded-xl' />
              <img src="/s3.png" alt="" className='rounded-xl' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

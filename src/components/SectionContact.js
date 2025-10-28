"use client";
import React, { useState } from "react";
import Purifier from './Purifier';
import Commercial from './Commercial';
import Medical from './Medical';
import Accessories from './Accessories';

export default function SectionContact() {
  // ✅ 현재 선택된 탭 상태
  const [activeTab, setActiveTab] = useState("home");

  return (
    <section className="section sectionProducts min-h-screen bg-[url(/white6.jpg)] bg-cover bg-center flex items-center justify-center py-40">
      <div className="container mx-auto grid grid-cols-2 gap-10 place-items-start">
        {/* 왼쪽 텍스트 */}
        <div className="grid grid-cols-1 gap-5 text-2xl col-span-1">
          <div className="text-5xl font-black ">Contact.</div>
          <div className="text-xl ">

          </div>
          <div className="grid grid-cols-1 gap-5 text-lg">
            <div>
              <div className='text-xl font-bold'>
                Email.
              </div>
              <div>
                filcore@filcore.co.kr
              </div>
            </div>
            <div>
              <div className='text-xl font-bold'>
                Tel.
              </div>
              <div>
                031-433-3988
              </div>
            </div>
            <div>
              <div className='text-xl font-bold'>
                Fax.
              </div>
              <div>
                031-433-3987
              </div>
            </div>
            <div>
              <div className='text-xl font-bold'>
                Addr.
              </div>
              <div>
                경기도 시흥시 산기대학로 60, 시화공단 1나 402호 우편번호 15085
              </div>
            </div>
          </div>
        </div>

        {/* 오른쪽 콘텐츠 */}
        <div className="grid grid-cols-1 gap-5 w-full">
          <div className="text-5xl font-black ">News.</div>
          <div className="text-xl ">

          </div>
          <div>ss</div>
        </div>
      </div>
    </section>
  );
}

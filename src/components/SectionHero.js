"use client";

import React from 'react';

export default function Section1Hero() {
  return (
    <section className="section sectionHero h-screen flex items-center justify-center bg-[#eff7fa] bg-[url(/hero1.jpg)] bg-cover bg-center">
      <div className="container mx-auto px-5 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className='md:col-span-2 text-white space-y-3'>
            <div className='text-2xl md:text-3xl font-bold text-shadow-black text-center md:text-left'>
              세계와 경쟁하는 정수 기술의 선두주자
            </div>
            <div className='text-4xl md:text-7xl font-black text-shadow-black text-center md:text-left'>
              Your Trusted Partner in Advanced Water Treatment
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
}

import React from 'react'

export default function Section1Hero() {
  return (
    <section className="section sectionHero h-screen flex items-center justify-center bg-[#eff7fa] bg-[url(/hero1.jpg)] bg-cover bg-center">
      <div className="container mx-auto ">
        <div className="grid grid-cols-3">
          <div className='col-span-2 text-white space-y-3'>
            <div className='text-3xl font-bold shadow'>
              세계와 경쟁하는 정수 기술의 선두주자
            </div>
            <div className='text-7xl font-black shadow'>
              Your Trusted Partner in Advanced Water Treatment
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  )
}

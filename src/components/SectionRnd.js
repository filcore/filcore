import React from 'react'

export default function SectionRnd() {
  return (
    <section className="section sectionRnd min-h-screen bg-zinc-100 flex items-center justify-center bg-[url(/rnd1.jpg)] bg-cover bg-center">
      <div className='container mx-auto grid grid-cols-3 gap-25 place-items-start '>
        <div className='grid grid-cols-1 gap-2 text-2xl col-span-1 text-white'>
          <div className='text-5xl font-black mb-5'>
            R&D Center.
          </div>
          <div className='text-xl'>
            Driving Innovation Through Research and Technology
          </div>
          <div className='text-2xl font-light'>
            연구소소개
          </div>
        </div>
        <div className='col-span-2'>
          <div className='p-10 bg-white/80 backdrop-blur-sm rounded-4xl text-lg space-y-5 border border-white'>
            <div className='text-2xl font-bold'>
              ㈜필코아의 미래가치 창출은 기술연구소로부터 시작됩니다.
            </div>
            <p>
              2007년도 창립이후, 2008년도에 전문 연구 기관으로서 기업관련 연구기관으로 인정 받았습니다. 우리는 최첨단 제품을 제공하며, 가장 신뢰할 수 있는 제품이 되기 위하여 기술을 개발하고, 제품을 개선하는데 심혈을 기울이고 있습니다.
            </p>
            <div className='text-2xl font-bold'>
              연구분야
            </div>
            <div>
              <div className='text-xl font-semibold'>
                막 & 모듈개발
              </div>
              <p>정수용 분야: 일반 정수용, 자연압 제품, 상업용 제품, 간이 상수도용</p>
              <p>산업용 분야: 초순수 제조 분야, 반도체용, RO system 전처리용 등</p>
              <p>의료용 분야: pyrogen free water, 의료기구 세정용, 손 세척용 등</p>
              <p>기타 막 개발: Nano filter membrane, 탈기막</p>
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
  )
}

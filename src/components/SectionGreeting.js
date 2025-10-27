import React from 'react'

export default function SectionGreeting() {
  return (
    <section className="section sectionGreeting min-h-screen bg-zinc-100 flex items-center justify-center bg-[url(/white1.jpg)] bg-cover bg-center py-40">
      <div className='container mx-auto grid grid-cols-3 gap-25 place-items-start'>
        <div className='grid grid-cols-1 gap-2 text-2xl col-span-1'>
          <div className='text-5xl font-black mb-5'>
            Greeting.
          </div>
          <div className='text-xl'>
            Your Business Partner for Water Treatment
          </div>
          <div className='text-2xl font-light'>
            세계와 경쟁하며, 신뢰로 성장하는 기업. 깨끗한 물을 위한 기술혁신으로
            지속 가능한 내일을 만들어갑니다.
          </div>
        </div>
        <div className='col-span-2'>
          <div className='p-10 bg-white/40 backdrop-blur-sm rounded-4xl text-lg space-y-3 border border-white'>
            <p>
              ㈜필코아는 2007년 설립 이래, 완벽한 품질 관리와 철저한 고객 중심 경영을 바탕으로 신뢰할 수 있는 정수 솔루션을 제공해왔습니다. 저희는 UF용 중공사막을 비롯하여 경쟁력 있는 다양한 Grade와 형태의 제품을 연구·개발하며, 고객의 다양한 요구에 부응하기 위해 끊임없이 노력하고 있습니다.
            </p>
            <p>
              우리는 단순히 제품을 공급하는 것을 넘어, 지속적인 기술 혁신과 첨단 연구를 통해 수처리 산업의 발전을 선도하고자 합니다. ㈜필코아의 모든 제품은 최첨단 기술과 철저한 품질 관리를 결합하여, 고객이 믿고 안심하며 사용할 수 있도록 제작되고 있습니다.
            </p>
            <p>
              저희는 앞으로도 기술력과 품질을 바탕으로 고객 만족을 최우선으로 하고, 글로벌 시장에서도 인정받는 최고의 수처리 전문 브랜드가 되기 위해 최선을 다할 것을 약속드립니다.
            </p>
            <p>
              ㈜필코아의 미래 가치는 기술연구소와 혁신적 개발에서 시작됩니다. 연구개발을 통해 확보한 전문성을 바탕으로, 정수용·산업용·의료용 분야를 아우르는 다양한 제품과 솔루션을 제공하며, 고객의 삶과 산업 현장에 실질적 가치를 더하고자 합니다.
            </p>
            <p>
              앞으로도 ㈜필코아는 ‘신뢰와 기술로 세상을 깨끗하게’라는 사명 아래, 지속적인 혁신과 연구로 수처리 산업을 선도하며, 고객과 함께 성장해 나가겠습니다.
            </p>
            <p>
              감사합니다.
            </p>
            <p>
              ㈜필코아 대표 <br />
              <strong>김승현, 몬젠타카시</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

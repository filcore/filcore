import React from 'react'

export default function SectionFooter() {
  return (
    <div className="w-full bg-zinc-900">
      <div className="container mx-auto min-h-30 flex items-center text-white py-10 px-10 md:px-0">
        <div className="text-sm space-y-1">
          <div className="text-lg">(주)필코아</div>
          <div>대표 : 김승현</div>
          <div>경기도 시흥시 산기대학로 60, 시화공단 1나 402호 우편번호 15085</div>
          <div>TEL : 031-433-3988 | FAX : 031-433-3987</div>
          <div>
            korea : domestic@filcore.co.kr
          </div>
          <div>
            global : overseas@filcore.co.kr
          </div>
          <div className="mt-5">Copyright © filcore.co.kr 2019</div>
        </div>
      </div>
    </div>
  )
}

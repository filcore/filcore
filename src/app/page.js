'use client'
import Section1Hero from "@/components/Section1Hero";
import SectionGreeting from "@/components/SectionGreeting";
import SectionHistory from "@/components/SectionHistory";
import SectionProducts from "@/components/SectionProducts";
import SectionRnd from "@/components/SectionRnd";
import SectionCertificates from "@/components/SectionCertificates";
import SectionContact from "@/components/SectionContact";

export default function Home() {
  return (
    <main>
      {/* 섹션별 제목/텍스트 */}
      <Section1Hero />
      <SectionGreeting />
      <SectionHistory />
      <SectionProducts />
      <SectionRnd />
      <SectionCertificates />
      <SectionContact />

      <div className="w-full bg-zinc-900">
        <div className="container mx-auto min-h-30 flex items-center text-white py-10">
          <div className="text-sm space-y-1">
            <div className="text-lg">(주)필코아</div>
            <div>대표 : 김승현</div>
            <div>경기도 시흥시 산기대학로 60, 시화공단 1나 402호 우편번호 15085</div>
            <div>TEL : 031-433-3988 | FAX : 031-433-3987</div>
            <div>filcore@filcore.co.kr</div>
            <div className="mt-5">Copyright © filcore.co.kr 2019</div>
          </div>
        </div>
      </div>
    </main>
  );
}

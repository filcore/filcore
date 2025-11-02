'use client'
import Section1Hero from "@/components/SectionHero";
import SectionGreeting from "@/components/SectionGreeting";
import SectionHistory from "@/components/SectionHistory";
import SectionProducts from "@/components/SectionProducts";
import SectionRnd from "@/components/SectionRnd";
import SectionCertificates from "@/components/SectionCertificates";
import SectionContact from "@/components/SectionContact";
import SectionFooter from '@/components/SectionFooter';

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
      <SectionFooter />
    </main>
  );
}

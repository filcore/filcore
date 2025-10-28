"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Section1Hero from '@/components/Section1Hero';
import SectionGreeting from '@/components/SectionGreeting';
import SectionHistory from '@/components/SectionHistory';
import SectionProducts from '@/components/SectionProducts';
import SectionRnd from '@/components/SectionRnd';
import SectionCertificates from '@/components/SectionCertificates';
import SectionContact from '@/components/SectionContact';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <main className="">
      <Section1Hero />
      <SectionGreeting />
      <SectionHistory />
      <SectionProducts />
      <SectionRnd />
      <SectionCertificates />
      <SectionContact />
    </main >
  );
}

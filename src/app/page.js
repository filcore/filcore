"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Section1Hero from '@/components/Section1Hero';
import SectionGreeting from '@/components/SectionGreeting';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <main className="">
      <Section1Hero />
      <SectionGreeting />
      <section className="section min-h-screen bg-green-400 flex items-center justify-center">
        Section 2
      </section>
      <section className="section min-h-screen bg-blue-400 flex items-center justify-center">
        Section 3
      </section>
    </main >
  );
}

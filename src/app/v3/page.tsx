"use client";

import { SidebarV3 } from "@/components/SidebarV3";
import { Hero } from "@/components/sections-v3/Hero";
import { CoreFocus } from "@/components/sections-v3/CoreFocus";
import { Foundation } from "@/components/sections-v3/Foundation";
import { MarketLandscape } from "@/components/sections-v3/MarketLandscape";
import { MarketReality } from "@/components/sections-v3/MarketReality";
import { Philosophy } from "@/components/sections-v3/Philosophy";
import { FourPillars } from "@/components/sections-v3/FourPillars";
import { Pillar1Technical } from "@/components/sections-v3/Pillar1Technical";
import { Pillar2Expansion } from "@/components/sections-v3/Pillar2Expansion";
import { Pillar3International } from "@/components/sections-v3/Pillar3International";
import { Pillar4Conversion } from "@/components/sections-v3/Pillar4Conversion";
import { Roadmap } from "@/components/sections-v3/Roadmap";
import { KPIs } from "@/components/sections-v3/KPIs";
import { WhyMe } from "@/components/sections-v3/WhyMe";
import { StoryTransition } from "@/components/ui/StoryTransition";
import { motion } from "framer-motion";
import { ReactNode } from "react";

const FadeIn = ({ children }: { children: ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    className="w-full h-full flex flex-col justify-center"
  >
    {children}
  </motion.div>
);

const Slide = ({ id, children }: { id: string; children: ReactNode }) => (
  <section 
    id={id} 
    className="w-full min-h-[100dvh] snap-start snap-always shrink-0 flex relative pt-[72px]"
  >
    <div className="w-full max-w-5xl mx-auto px-6 lg:px-12 py-8 my-auto flex flex-col justify-center h-full">
      {children}
    </div>
  </section>
);

export default function PresentationV3() {
  return (
    <div className="bg-[#fafafa] text-zinc-900 font-sans relative">
      <SidebarV3 />

      <main id="main-scroll" className="w-full h-[100dvh] overflow-y-auto snap-y snap-mandatory scroll-smooth relative">
          <Slide id="introduction">
            <FadeIn><Hero /></FadeIn>
          </Slide>

          <Slide id="core-focus">
            <FadeIn><CoreFocus /></FadeIn>
          </Slide>

          <Slide id="transition-1">
            <FadeIn><StoryTransition text="Before detailing the strategic roadmap, it is essential to establish the current baseline." /></FadeIn>
          </Slide>

          <Slide id="foundation">
            <FadeIn><Foundation /></FadeIn>
          </Slide>

          <Slide id="transition-1-5">
            <FadeIn><StoryTransition text="To contextualize our growth potential, we must analyze our position relative to key UK competitors." /></FadeIn>
          </Slide>

          <Slide id="market-landscape">
            <FadeIn><MarketLandscape /></FadeIn>
          </Slide>

          <Slide id="transition-3">
            <FadeIn><StoryTransition text="Our growth plan is built on three strategic pillars." /></FadeIn>
          </Slide>

          <Slide id="four-pillars">
            <FadeIn><FourPillars /></FadeIn>
          </Slide>

          <Slide id="transition-3-5">
            <FadeIn><StoryTransition text="Execution begins with securing the technical foundation." /></FadeIn>
          </Slide>

          <Slide id="pillar-1">
            <FadeIn><Pillar1Technical /></FadeIn>
          </Slide>

          <Slide id="transition-4">
            <FadeIn><StoryTransition text="With crawlability and indexation optimized, the focus shifts to programmatic category expansion." /></FadeIn>
          </Slide>

          <Slide id="pillar-2">
            <FadeIn><Pillar2Expansion /></FadeIn>
          </Slide>

          <Slide id="transition-6">
            <FadeIn><StoryTransition text="Acquisition is only the first half of the equation; the final step is optimizing for conversion." /></FadeIn>
          </Slide>

          <Slide id="pillar-3">
            <FadeIn><Pillar4Conversion /></FadeIn>
          </Slide>

          <Slide id="transition-7">
            <FadeIn><StoryTransition text="The following roadmap outlines the execution phases for the first 90 days." /></FadeIn>
          </Slide>

          <Slide id="roadmap">
            <FadeIn><Roadmap /></FadeIn>
          </Slide>

          <Slide id="transition-8">
            <FadeIn><StoryTransition text="Performance will be measured against strict commercial KPIs." /></FadeIn>
          </Slide>

          <Slide id="kpis">
            <FadeIn><KPIs /></FadeIn>
          </Slide>

          <Slide id="transition-9">
            <FadeIn><StoryTransition text="Finally, an overview of my qualifications to execute this strategy." /></FadeIn>
          </Slide>

          <Slide id="why-me">
            <FadeIn><WhyMe /></FadeIn>
          </Slide>
      </main>
    </div>
  );
}

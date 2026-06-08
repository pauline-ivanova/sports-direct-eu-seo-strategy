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
            <FadeIn><StoryTransition text="Our growth plan is built on four strategic pillars." /></FadeIn>
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

          <Slide id="insight-2">
            <FadeIn>
              <div className="flex flex-col items-center justify-center text-center space-y-8 w-full h-full max-w-4xl mx-auto">
                <div className="w-16 h-16 rounded-2xl bg-[#ED0000]/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#ED0000]">
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.9 1.3 1.5 1.5 2.5" />
                    <path d="M9 18h6" />
                    <path d="M10 22h4" />
                  </svg>
                </div>
                <h3 className="text-3xl md:text-4xl font-semibold text-zinc-900 leading-tight">
                  Inventory depth is our primary lever for semantic search dominance.
                </h3>
                <p className="text-xl md:text-2xl text-zinc-500 leading-relaxed max-w-3xl">
                  By algorithmically aligning brand equity (e.g., Nike) with specific product categories (e.g., Running), we can generate <strong>thousands of highly relevant, indexable paths</strong> to capture long-tail demand.
                </p>
              </div>
            </FadeIn>
          </Slide>

          <Slide id="transition-6">
            <FadeIn><StoryTransition text="Acquisition is only the first half of the equation; the final step is optimizing for conversion." /></FadeIn>
          </Slide>

          <Slide id="pillar-3">
            <FadeIn><Pillar4Conversion /></FadeIn>
          </Slide>

          <Slide id="insight-4">
            <FadeIn>
              <div className="flex flex-col items-center justify-center text-center space-y-8 w-full h-full max-w-4xl mx-auto">
                <div className="w-16 h-16 rounded-2xl bg-[#ED0000]/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#ED0000]">
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.9 1.3 1.5 1.5 2.5" />
                    <path d="M9 18h6" />
                    <path d="M10 22h4" />
                  </svg>
                </div>
                <h3 className="text-3xl md:text-4xl font-semibold text-zinc-900 leading-tight">
                  Technical SEO must integrate seamlessly with UX and CRO.
                </h3>
                <p className="text-xl md:text-2xl text-zinc-500 leading-relaxed max-w-3xl">
                  By analyzing user behavior and anticipating shifts in algorithmic search (e.g., SGE), we ensure that incremental organic traffic is <strong>highly qualified and primed to convert</strong>.
                </p>
              </div>
            </FadeIn>
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

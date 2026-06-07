"use client";

import { Sidebar } from "@/components/Sidebar";
import { Hero } from "@/components/sections/Hero";
import { CoreFocus } from "@/components/sections/CoreFocus";
import { Foundation } from "@/components/sections/Foundation";
import { MarketLandscape } from "@/components/sections/MarketLandscape";
import { MarketReality } from "@/components/sections/MarketReality";
import { Philosophy } from "@/components/sections/Philosophy";
import { FourPillars } from "@/components/sections/FourPillars";
import { Pillar1Technical } from "@/components/sections/Pillar1Technical";
import { Pillar2Expansion } from "@/components/sections/Pillar2Expansion";
import { Pillar3International } from "@/components/sections/Pillar3International";
import { Pillar4Conversion } from "@/components/sections/Pillar4Conversion";
import { Roadmap } from "@/components/sections/Roadmap";
import { KPIs } from "@/components/sections/KPIs";
import { WhyMe } from "@/components/sections/WhyMe";
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

// Wrapper for each slide to ensure it takes exactly 100vh and centers content
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

export default function Presentation() {
  return (
    <div className="bg-[#fafafa] text-zinc-900 font-sans relative">
      <Sidebar />

      {/* Main Content Area - Full height scrolling container with snap */}
      <main id="main-scroll" className="w-full h-[100dvh] overflow-y-auto snap-y snap-mandatory scroll-smooth">
          <Slide id="introduction">
            <FadeIn><Hero /></FadeIn>
          </Slide>

          <Slide id="core-focus">
            <FadeIn><CoreFocus /></FadeIn>
          </Slide>

          <Slide id="transition-1">
            <FadeIn><StoryTransition text="Before diving into the strategy, let's look at where Sports Direct stands today and the landscape we are operating in." /></FadeIn>
          </Slide>

          <Slide id="foundation">
            <FadeIn><Foundation /></FadeIn>
          </Slide>

          <Slide id="transition-1-5">
            <FadeIn><StoryTransition text="To understand our true potential, we must map our position against the wider market landscape." /></FadeIn>
          </Slide>

          <Slide id="market-landscape">
            <FadeIn><MarketLandscape /></FadeIn>
          </Slide>

          <Slide id="market-reality">
            <FadeIn><MarketReality /></FadeIn>
          </Slide>

          <Slide id="transition-2">
            <FadeIn><StoryTransition text="To achieve this, I rely on a specific framework and set of principles." /></FadeIn>
          </Slide>

          <Slide id="philosophy">
            <FadeIn><Philosophy /></FadeIn>
          </Slide>

          <Slide id="transition-3">
            <FadeIn><StoryTransition text="These principles form the foundation of my strategy, which is built on four interconnected pillars of growth." /></FadeIn>
          </Slide>

          <Slide id="four-pillars">
            <FadeIn><FourPillars /></FadeIn>
          </Slide>

          <Slide id="transition-3-5">
            <FadeIn><StoryTransition text="With the four pillars established, let's start with the most critical one: Protecting the Foundation." /></FadeIn>
          </Slide>

          <Slide id="pillar-1">
            <FadeIn><Pillar1Technical /></FadeIn>
          </Slide>

          <Slide id="transition-4">
            <FadeIn><StoryTransition text="Once the technical foundation is secure and Google is crawling efficiently, we can aggressively capture new demand." /></FadeIn>
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
                  Sports Direct possesses the inventory depth to dominate the entire semantic search landscape.
                </h3>
                <p className="text-xl md:text-2xl text-zinc-500 leading-relaxed max-w-3xl">
                  By algorithmically pairing brand strength (e.g. Nike) with sport-specific intent, we can unlock <strong>hundreds of thousands of new indexable paths</strong>—without adding a single new product to the catalog.
                </p>
              </div>
            </FadeIn>
          </Slide>

          <Slide id="transition-5">
            <FadeIn><StoryTransition text="This model works exceptionally well in the UK. But my responsibility spans the EU estate. How do we scale this success across borders?" /></FadeIn>
          </Slide>

          <Slide id="pillar-3">
            <FadeIn><Pillar3International /></FadeIn>
          </Slide>

          <Slide id="insight-3">
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
                  The current UK traffic dominance isn&apos;t a market limit—it&apos;s a technical bottleneck masking massive EU potential.
                </h3>
                <p className="text-xl md:text-2xl text-zinc-500 leading-relaxed max-w-3xl">
                  By executing flawless technical governance (Hreflang) and deep semantic localization, we transform dormant European catalogs into <strong>rapidly scaling, high-converting revenue streams</strong>.
                </p>
              </div>
            </FadeIn>
          </Slide>

          <Slide id="transition-6">
            <FadeIn><StoryTransition text="So, we've driven targeted, non-brand traffic from across Europe. Now, we need to ensure that traffic actually converts." /></FadeIn>
          </Slide>

          <Slide id="pillar-4">
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
                  We don&apos;t just optimize for algorithms; we optimize for human purchasing behavior.
                </h3>
                <p className="text-xl md:text-2xl text-zinc-500 leading-relaxed max-w-3xl">
                  By aligning technical SEO with Conversion Rate Optimization (CRO) and preparing for AI-driven search (SGE), we ensure that every incremental organic session is <strong>maximally primed to convert</strong>.
                </p>
              </div>
            </FadeIn>
          </Slide>

          <Slide id="transition-7">
            <FadeIn><StoryTransition text="The strategy is comprehensive. Here is how I plan to execute it in my first three months." /></FadeIn>
          </Slide>

          <Slide id="roadmap">
            <FadeIn><Roadmap /></FadeIn>
          </Slide>

          <Slide id="transition-8">
            <FadeIn><StoryTransition text="How will we know this plan is working?" /></FadeIn>
          </Slide>

          <Slide id="kpis">
            <FadeIn><KPIs /></FadeIn>
          </Slide>

          <Slide id="transition-9">
            <FadeIn><StoryTransition text="Finally, why am I the right person to deliver these results?" /></FadeIn>
          </Slide>

          <Slide id="why-me">
            <FadeIn><WhyMe /></FadeIn>
          </Slide>
      </main>
    </div>
  );
}

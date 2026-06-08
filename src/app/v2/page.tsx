"use client";

import { SidebarV2 } from "@/components/SidebarV2";
import { Hero } from "@/components/sections-v2/Hero";
import { CoreFocus } from "@/components/sections-v2/CoreFocus";
import { Foundation } from "@/components/sections-v2/Foundation";
import { MarketLandscape } from "@/components/sections-v2/MarketLandscape";
import { MarketReality } from "@/components/sections-v2/MarketReality";
import { Philosophy } from "@/components/sections-v2/Philosophy";
import { FourPillars } from "@/components/sections-v2/FourPillars";
import { Pillar1Technical } from "@/components/sections-v2/Pillar1Technical";
import { Pillar2Expansion } from "@/components/sections-v2/Pillar2Expansion";
import { Pillar3International } from "@/components/sections-v2/Pillar3International";
import { Pillar4Conversion } from "@/components/sections-v2/Pillar4Conversion";
import { Roadmap } from "@/components/sections-v2/Roadmap";
import { KPIs } from "@/components/sections-v2/KPIs";
import { WhyMe } from "@/components/sections-v2/WhyMe";
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

export default function PresentationV2() {
  return (
    <div className="bg-[#fafafa] text-zinc-900 font-sans relative">
      <SidebarV2 />

      <main id="main-scroll" className="w-full h-[100dvh] overflow-y-auto snap-y snap-mandatory scroll-smooth relative">
          <Slide id="introduction">
            <FadeIn><Hero /></FadeIn>
          </Slide>

          <Slide id="core-focus">
            <FadeIn><CoreFocus /></FadeIn>
          </Slide>

          <Slide id="transition-1">
            <FadeIn><StoryTransition text="Before we talk about the plan, let's look at where we are right now." /></FadeIn>
          </Slide>

          <Slide id="foundation">
            <FadeIn><Foundation /></FadeIn>
          </Slide>

          <Slide id="transition-1-5">
            <FadeIn><StoryTransition text="To understand how much we can grow, let's see how we compare to our rivals in the UK." /></FadeIn>
          </Slide>

          <Slide id="market-landscape">
            <FadeIn><MarketLandscape /></FadeIn>
          </Slide>

          <Slide id="market-reality">
            <FadeIn><MarketReality /></FadeIn>
          </Slide>

          <Slide id="transition-2">
            <FadeIn><StoryTransition text="To fix these problems, I use a few simple rules." /></FadeIn>
          </Slide>

          <Slide id="philosophy">
            <FadeIn><Philosophy /></FadeIn>
          </Slide>

          <Slide id="transition-3">
            <FadeIn><StoryTransition text="These rules help build our 4 steps for growth." /></FadeIn>
          </Slide>

          <Slide id="four-pillars">
            <FadeIn><FourPillars /></FadeIn>
          </Slide>

          <Slide id="transition-3-5">
            <FadeIn><StoryTransition text="Let's start with Step 1: Fixing the basics." /></FadeIn>
          </Slide>

          <Slide id="pillar-1">
            <FadeIn><Pillar1Technical /></FadeIn>
          </Slide>

          <Slide id="transition-4">
            <FadeIn><StoryTransition text="Once our website is fixed and running smoothly, we can bring in new customers." /></FadeIn>
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
                  We already have enough products to completely dominate the internet.
                </h3>
                <p className="text-xl md:text-2xl text-zinc-500 leading-relaxed max-w-3xl">
                  Just by matching famous brands (like Nike) with what people want (like Running), we can easily create <strong>thousands of new ways</strong> for people to find our site and buy from us.
                </p>
              </div>
            </FadeIn>
          </Slide>

          <Slide id="transition-5">
            <FadeIn><StoryTransition text="This is great, but we need to make sure we are doing this perfectly for the UK customer." /></FadeIn>
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
                  The people who already buy from us are just the beginning.
                </h3>
                <p className="text-xl md:text-2xl text-zinc-500 leading-relaxed max-w-3xl">
                  By fixing errors and focusing exactly on the words UK shoppers use, we can easily turn our current traffic into <strong>even more money</strong>.
                </p>
              </div>
            </FadeIn>
          </Slide>

          <Slide id="transition-6">
            <FadeIn><StoryTransition text="We've brought in the customers. Now, we just need to get them to checkout." /></FadeIn>
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
                  We design for real people, not just computers.
                </h3>
                <p className="text-xl md:text-2xl text-zinc-500 leading-relaxed max-w-3xl">
                  By tracking what makes people buy and preparing for new Google features, we make sure that every new visitor is <strong>ready to spend money</strong>.
                </p>
              </div>
            </FadeIn>
          </Slide>

          <Slide id="transition-7">
            <FadeIn><StoryTransition text="That's the plan. Here is what we'll do in the first 3 months." /></FadeIn>
          </Slide>

          <Slide id="roadmap">
            <FadeIn><Roadmap /></FadeIn>
          </Slide>

          <Slide id="transition-8">
            <FadeIn><StoryTransition text="How do we know if it's working?" /></FadeIn>
          </Slide>

          <Slide id="kpis">
            <FadeIn><KPIs /></FadeIn>
          </Slide>

          <Slide id="transition-9">
            <FadeIn><StoryTransition text="Finally, why am I the best fit for this job?" /></FadeIn>
          </Slide>

          <Slide id="why-me">
            <FadeIn><WhyMe /></FadeIn>
          </Slide>
      </main>
    </div>
  );
}

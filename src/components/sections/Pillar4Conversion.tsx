"use client";

import { ShoppingCart, Sparkles, LayoutTemplate } from "lucide-react";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { DataInsight } from "@/components/ui/DataInsight";

export function Pillar4Conversion() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <SectionBadge section="Part 2" title="The Strategy" pillar="Pillar 4" />
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900" suppressHydrationWarning>Conversion & CRO Integration</h2>
          <p className="mt-4 text-zinc-500 text-lg">
            Because SEO doesn&apos;t stop at the click.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8">
        {/* Left: CRO & Commercial Alignment */}
        <div className="lg:col-span-6 flex flex-col">
          <div className="flex-1 p-8 bg-zinc-50 rounded-2xl border border-zinc-200 flex flex-col justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-zinc-200 rounded-xl">
                <ShoppingCart className="w-6 h-6 text-zinc-900" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900" suppressHydrationWarning>SEO/CRO Synergy</h3>
            </div>
            
            <p className="text-zinc-700 text-lg leading-relaxed mb-6" suppressHydrationWarning>
              Traffic volume is a vanity metric if it doesn&apos;t convert. We must embed SEO within the wider commercial ecosystem, actively testing how organic landing pages drive Add-to-Carts.
            </p>

            <div className="mt-auto pt-6 border-t border-zinc-200">
              <div className="p-5 border border-[#ED0000]/20 rounded-xl bg-[#ED0000]/5 shadow-sm">
                <h4 className="text-sm font-semibold text-[#ED0000] mb-2 uppercase tracking-wide">Commercial Hypothesis</h4>
                <p className="text-sm text-zinc-700 font-medium leading-relaxed italic">
                  &quot;How does the prominence of <span className="font-bold text-zinc-900">FrasersPlus</span> financing messaging impact bounce rates and conversion velocity on lower-priced vs premium product tiers originating from organic search?&quot;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: AI & Generative Search */}
        <div className="lg:col-span-6 flex flex-col">
          <div className="flex-1 p-8 bg-zinc-50 rounded-2xl border border-zinc-200 flex flex-col justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-zinc-200 rounded-xl">
                <Sparkles className="w-6 h-6 text-zinc-900" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900" suppressHydrationWarning>SGE & AI-Readiness</h3>
            </div>
            
            <p className="text-zinc-700 text-lg leading-relaxed mb-6" suppressHydrationWarning>
              As Google shifts toward Search Generative Experience (SGE), traditional keyword targeting alone is no longer sufficient. We must structure data to feed LLM-driven research phases.
            </p>

            <div className="mt-auto pt-6 border-t border-zinc-200">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <LayoutTemplate className="w-5 h-5 text-[#ED0000] shrink-0 mt-0.5" />
                  <p className="text-sm text-zinc-700 font-medium leading-relaxed">
                    Transition category content from &quot;SEO filler text&quot; to genuine buyer-centric purchasing guides.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <LayoutTemplate className="w-5 h-5 text-[#ED0000] shrink-0 mt-0.5" />
                  <p className="text-sm text-zinc-700 font-medium leading-relaxed">
                    Deploy granular Schema.org markup (Product, FAQ, Review) to dominate visual SERP features.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

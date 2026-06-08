"use client";

import { ShoppingCart, Sparkles, LayoutTemplate } from "lucide-react";
import { SectionBadge } from "@/components/ui/SectionBadge";

export function Pillar4Conversion() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <SectionBadge section="Part 2" title="Strategic Pillars" pillar="Pillar 4" />
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900" suppressHydrationWarning>Conversion Optimization</h2>
          <p className="mt-4 text-zinc-500 text-lg">
            Maximizing the commercial yield of acquired traffic.
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
              <h3 className="text-xl font-semibold text-zinc-900" suppressHydrationWarning>CRO & Commercial Alignment</h3>
            </div>
            
            <p className="text-zinc-700 text-lg leading-relaxed mb-6" suppressHydrationWarning>
              Implementing iterative A/B testing frameworks to reduce friction in the user journey and increase the session-to-transaction conversion rate.
            </p>

            <div className="mt-auto pt-6 border-t border-zinc-200">
              <div className="p-5 border border-[#ED0000]/20 rounded-xl bg-[#ED0000]/5 shadow-sm">
                <h4 className="text-sm font-semibold text-[#ED0000] mb-2 uppercase tracking-wide">Hypothesis Testing Example</h4>
                <p className="text-sm text-zinc-700 font-medium leading-relaxed italic">
                  "Does elevating the visibility of FrasersPlus financing options on high-AOV product pages significantly increase immediate conversion rates?"
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
              <h3 className="text-xl font-semibold text-zinc-900" suppressHydrationWarning>Generative Search Readiness</h3>
            </div>
            
            <p className="text-zinc-700 text-lg leading-relaxed mb-6" suppressHydrationWarning>
              Structuring content and metadata to ensure prominent visibility within AI-driven search experiences (e.g., Google SGE).
            </p>

            <div className="mt-auto pt-6 border-t border-zinc-200">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <LayoutTemplate className="w-5 h-5 text-[#ED0000] shrink-0 mt-0.5" />
                  <p className="text-sm text-zinc-700 font-medium leading-relaxed">
                    Transforming standard category descriptions into comprehensive, entity-based buying guides.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <LayoutTemplate className="w-5 h-5 text-[#ED0000] shrink-0 mt-0.5" />
                  <p className="text-sm text-zinc-700 font-medium leading-relaxed">
                    Deploying advanced Product schema to guarantee rich snippet rendering (pricing, reviews, availability) in SERPs.
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

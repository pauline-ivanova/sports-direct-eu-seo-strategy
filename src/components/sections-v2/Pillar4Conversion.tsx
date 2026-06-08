"use client";

import { ShoppingCart, Sparkles, LayoutTemplate } from "lucide-react";
import { SectionBadge } from "@/components/ui/SectionBadge";

export function Pillar4Conversion() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <SectionBadge section="Part 2" title="The Plan" pillar="Step 4" />
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900" suppressHydrationWarning>Getting More Sales</h2>
          <p className="mt-4 text-zinc-500 text-lg">
            Because getting visitors is only half the job.
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
              <h3 className="text-xl font-semibold text-zinc-900" suppressHydrationWarning>Turning Visitors into Buyers</h3>
            </div>
            
            <p className="text-zinc-700 text-lg leading-relaxed mb-6" suppressHydrationWarning>
              We will constantly test our pages to make sure it's as easy as possible for people to click "Add to Cart" after they arrive from Google.
            </p>

            <div className="mt-auto pt-6 border-t border-zinc-200">
              <div className="p-5 border border-[#ED0000]/20 rounded-xl bg-[#ED0000]/5 shadow-sm">
                <h4 className="text-sm font-semibold text-[#ED0000] mb-2 uppercase tracking-wide">Example Question We'll Answer</h4>
                <p className="text-sm text-zinc-700 font-medium leading-relaxed italic">
                  "Does showing FrasersPlus payment options help people buy more expensive items right away?"
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
              <h3 className="text-xl font-semibold text-zinc-900" suppressHydrationWarning>Ready for the Future</h3>
            </div>
            
            <p className="text-zinc-700 text-lg leading-relaxed mb-6" suppressHydrationWarning>
              As Google starts using AI to answer questions directly, we will make sure our product answers show up first.
            </p>

            <div className="mt-auto pt-6 border-t border-zinc-200">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <LayoutTemplate className="w-5 h-5 text-[#ED0000] shrink-0 mt-0.5" />
                  <p className="text-sm text-zinc-700 font-medium leading-relaxed">
                    Turn boring page text into genuinely helpful buyer guides.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <LayoutTemplate className="w-5 h-5 text-[#ED0000] shrink-0 mt-0.5" />
                  <p className="text-sm text-zinc-700 font-medium leading-relaxed">
                    Add special code so our reviews and prices pop out on Google results.
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

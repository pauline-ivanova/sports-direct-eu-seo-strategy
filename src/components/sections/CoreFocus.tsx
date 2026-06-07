"use client";

import { TrendingUp, Layers, Globe } from "lucide-react";

export function CoreFocus() {
  return (
    <div className="space-y-8">
      <div className="text-center md:text-left">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900" suppressHydrationWarning>Core Focus Areas</h2>
        <p className="mt-4 text-zinc-500 text-lg max-w-3xl">
          To achieve sustainable growth across the European estate, this strategy is built upon three foundational principles. We prioritize business impact over vanity metrics.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
        <div className="flex flex-col gap-4 p-6 border border-zinc-200 rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-zinc-300 group">
          <div className="w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center text-zinc-900 transition-colors duration-300 group-hover:bg-[#ED0000]/10 group-hover:text-[#ED0000]">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-zinc-900" suppressHydrationWarning>Revenue-Led SEO</h3>
            <p className="mt-2 text-sm text-zinc-500 leading-relaxed" suppressHydrationWarning>
              Prioritizing actions that directly impact organic revenue, moving beyond vanity metrics like traffic and isolated rankings. Every initiative must have a clear path to ROI.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col gap-4 p-6 border border-zinc-200 rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-zinc-300 group">
          <div className="w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center text-zinc-900 transition-colors duration-300 group-hover:bg-[#ED0000]/10 group-hover:text-[#ED0000]">
            <Layers className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-zinc-900" suppressHydrationWarning>Scalable Architecture</h3>
            <p className="mt-2 text-sm text-zinc-500 leading-relaxed" suppressHydrationWarning>
              Turning complex facets into powerful demand-capture engines while protecting crawl budget. We build systems that scale automatically as inventory grows.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 p-6 border border-zinc-200 rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-zinc-300 group">
          <div className="w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center text-zinc-900 transition-colors duration-300 group-hover:bg-[#ED0000]/10 group-hover:text-[#ED0000]">
            <Globe className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-zinc-900" suppressHydrationWarning>Pan-European Reach</h3>
            <p className="mt-2 text-sm text-zinc-500 leading-relaxed" suppressHydrationWarning>
              Strategies designed not just for the UK, but scalable across all 5+ languages and EU markets, adapting to local search nuances and cultural behaviors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

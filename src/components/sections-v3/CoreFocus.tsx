"use client";

import { TrendingUp, Layers, MapPin } from "lucide-react";

export function CoreFocus() {
  return (
    <div className="space-y-8">
      <div className="text-center md:text-left">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900" suppressHydrationWarning>Strategic Focus Areas</h2>
        <p className="mt-4 text-zinc-500 text-lg max-w-3xl">
          To drive sustainable growth in the UK market, the strategy centers on high-impact initiatives that directly influence revenue generation and market share.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
        <div className="flex flex-col gap-4 p-6 border border-zinc-200 rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-zinc-300 group">
          <div className="w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center text-zinc-900 transition-colors duration-300 group-hover:bg-[#ED0000]/10 group-hover:text-[#ED0000]">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-zinc-900" suppressHydrationWarning>Commercial Viability</h3>
            <p className="mt-2 text-sm text-zinc-500 leading-relaxed" suppressHydrationWarning>
              Prioritizing initiatives that yield measurable revenue growth. Traffic acquisition is secondary to capturing high-intent, converting audiences.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col gap-4 p-6 border border-zinc-200 rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-zinc-300 group">
          <div className="w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center text-zinc-900 transition-colors duration-300 group-hover:bg-[#ED0000]/10 group-hover:text-[#ED0000]">
            <Layers className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-zinc-900" suppressHydrationWarning>Technical Excellence</h3>
            <p className="mt-2 text-sm text-zinc-500 leading-relaxed" suppressHydrationWarning>
              Establishing a robust technical foundation to ensure optimal crawlability, indexation, and structured data utilization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

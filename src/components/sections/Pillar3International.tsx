"use client";

import { Globe2, Languages, MapPin } from "lucide-react";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { DataInsight } from "@/components/ui/DataInsight";

export function Pillar3International() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <SectionBadge section="Part 2" title="The Strategy" pillar="Pillar 3" />
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900" suppressHydrationWarning>Scaling Across Europe</h2>
          <p className="mt-4 text-zinc-500 text-lg">
            International SEO & True Localisation.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8">
        {/* Left: Hreflang Architecture */}
        <div className="lg:col-span-6 flex flex-col">
          <div className="flex-1 p-8 bg-zinc-50 rounded-2xl border border-zinc-200 flex flex-col justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-zinc-200 rounded-xl">
                <Globe2 className="w-6 h-6 text-zinc-900" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900" suppressHydrationWarning>Global Indexation Governance</h3>
            </div>
            
            <p className="text-zinc-700 text-lg leading-relaxed mb-6" suppressHydrationWarning>
              At enterprise scale, misaligned language tags cause devastating cross-market cannibalisation and index bloat. We must enforce strict programmatic governance over regional visibility.
            </p>

            <div className="mt-auto pt-6 border-t border-zinc-200">
              <ul className="space-y-3 text-zinc-700 font-medium">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#ED0000]" />
                  Automated hreflang reciprocity validation
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#ED0000]" />
                  Self-referencing & return-tag compliance
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#ED0000]" />
                  Strategic <code className="bg-white border border-zinc-200 px-1.5 py-0.5 rounded text-sm mx-1">x-default</code> for global routing
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right: True Localisation */}
        <div className="lg:col-span-6 flex flex-col">
          <div className="flex-1 p-8 bg-zinc-50 rounded-2xl border border-zinc-200 flex flex-col justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-zinc-200 rounded-xl">
                <Languages className="w-6 h-6 text-zinc-900" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900" suppressHydrationWarning>Semantic Intent Localization</h3>
            </div>
            
            <p className="text-zinc-700 text-lg leading-relaxed mb-6" suppressHydrationWarning>
              Direct 1:1 translation is a critical failure point in pan-European eCommerce. We must align category taxonomies with hyper-local search behaviors and regional vernaculars.
            </p>

            <div className="mt-auto pt-6 border-t border-zinc-200">
              <div className="p-5 border border-zinc-200 rounded-xl bg-white shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-[#ED0000]" />
                  <span className="text-base font-semibold text-zinc-900">Local Search Intent (e.g., DACH Region)</span>
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Translating &quot;Football Boots&quot; into generic German misses market-specific intent. Capturing granular local variations (e.g., DE vs AT vs CH terminology) is required to unlock full regional market share.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

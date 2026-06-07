"use client";

import { Network, MousePointerClick, Link as LinkIcon } from "lucide-react";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { DataInsight } from "@/components/ui/DataInsight";

export function Pillar2Expansion() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <SectionBadge section="Part 2" title="The Strategy" pillar="Pillar 2" />
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900" suppressHydrationWarning>Commercial Expansion</h2>
          <p className="mt-4 text-zinc-500 text-lg">
            Categories & Internal Linking as the primary mid-term growth lever.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8">
        {/* Left: Programmatic Landing Pages */}
        <div className="lg:col-span-6 flex flex-col">
          <div className="flex-1 p-8 bg-zinc-50 rounded-2xl border border-zinc-200 flex flex-col justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-zinc-200 rounded-xl">
                <MousePointerClick className="w-6 h-6 text-zinc-900" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900" suppressHydrationWarning>Programmatic Facet Indexing</h3>
            </div>
            
            <p className="text-zinc-700 text-lg leading-relaxed mb-6" suppressHydrationWarning>
              Unlock incremental revenue by mapping long-tail search demand to dynamic taxonomy intersections. We transition faceted navigation from a crawl-trap into an <strong>automated semantic net</strong>.
            </p>

            <div className="mt-auto pt-6 border-t border-zinc-200">
              <h4 className="font-semibold text-zinc-900 mb-4 text-sm" suppressHydrationWarning>High-Yield Semantic Clusters</h4>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white border border-zinc-200 text-zinc-700 rounded-lg text-sm shadow-sm font-medium">Brand + Category</span>
                <span className="px-4 py-2 bg-white border border-zinc-200 text-zinc-700 rounded-lg text-sm shadow-sm font-medium">Gender + Sport</span>
                <span className="px-4 py-2 bg-white border border-zinc-200 text-zinc-700 rounded-lg text-sm shadow-sm font-medium">Product + Color</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Hub Strategy */}
        <div className="lg:col-span-6 flex flex-col">
          <div className="flex-1 p-8 bg-zinc-50 rounded-2xl border border-zinc-200 flex flex-col justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="p-2 bg-zinc-200 rounded-xl">
                <LinkIcon className="w-6 h-6 text-zinc-900" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900" suppressHydrationWarning>Link Equity Orchestration</h3>
            </div>
            
            <p className="text-zinc-700 text-lg leading-relaxed mb-6 relative z-10" suppressHydrationWarning>
              Architecting contextual content silos to funnel PageRank systematically. We bridge informational top-of-funnel (ToFu) queries directly into commercial pages.
            </p>

            <div className="mt-auto pt-6 border-t border-zinc-200 relative z-10">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-1/3 text-sm font-medium text-zinc-600">The Zone (Blog)</div>
                  <div className="flex-1 h-px bg-zinc-300 relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-zinc-400 rotate-45"></div>
                  </div>
                  <div className="w-1/3 text-sm font-medium text-[#ED0000]">Categories</div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-1/3 text-sm font-medium text-zinc-600">Buying Guides</div>
                  <div className="flex-1 h-px bg-zinc-300 relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-zinc-400 rotate-45"></div>
                  </div>
                  <div className="w-1/3 text-sm font-medium text-[#ED0000]">Categories</div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-1/3 text-sm font-medium text-zinc-600">Brand Hubs</div>
                  <div className="flex-1 h-px bg-zinc-300 relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-zinc-400 rotate-45"></div>
                  </div>
                  <div className="w-1/3 text-sm font-medium text-[#ED0000]">Product Pages</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

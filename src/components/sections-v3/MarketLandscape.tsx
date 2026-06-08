"use client";

import { SectionBadge } from "@/components/ui/SectionBadge";
import { Evidence } from "@/components/ui/evidence";

export function MarketLandscape() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <SectionBadge section="Part 1" title="The Foundation" />
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900" suppressHydrationWarning>UK Market Positioning</h2>
          <p className="mt-4 text-zinc-500 text-lg max-w-2xl">
            Evaluating our competitive standing within the UK digital landscape.
          </p>
        </div>
        <div className="text-xs text-zinc-400 px-2 mt-2 md:mt-0 whitespace-nowrap">
          *Data Source: Semrush UK
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
        <Evidence 
          title="Market Share" 
          description="Sports Direct maintains a leading traffic share in the UK, competing primarily with Nike (D2C) and JD Sports (retail)." 
          imageSrc="/competitive-map.png"
        />
        <Evidence 
          title="Keyword Overlap" 
          description="Analysis of shared search visibility highlights direct competition for high-volume transactional queries." 
          imageSrc="/competitors-list.png"
        />
      </div>
    </div>
  );
}

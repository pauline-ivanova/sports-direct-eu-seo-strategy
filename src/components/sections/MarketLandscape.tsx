"use client";

import { SectionBadge } from "@/components/ui/SectionBadge";
import { Evidence } from "@/components/ui/evidence";

export function MarketLandscape() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <SectionBadge section="Part 1" title="Context & Philosophy" />
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900" suppressHydrationWarning>The Market Landscape</h2>
          <p className="mt-4 text-zinc-500 text-lg max-w-2xl">
            Visualizing our organic search dominance against key industry players.
          </p>
        </div>
        <div className="text-xs text-zinc-400 px-2 mt-2 md:mt-0 whitespace-nowrap">
          *Data Source: Semrush
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
        <Evidence 
          title="Competitive Positioning Map" 
          description="Sports Direct leads in organic traffic, with Nike as the closest brand competitor and JD Sports as the closest retail competitor." 
          imageSrc="/competitive-map.png"
        />
        <Evidence 
          title="Main Organic Competitors" 
          description="Top overlapping domains by common keywords, highlighting our primary battlegrounds." 
          imageSrc="/competitors-list.png"
        />
      </div>
    </div>
  );
}

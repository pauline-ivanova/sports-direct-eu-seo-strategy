"use client";

import { SectionBadge } from "@/components/ui/SectionBadge";
import { Evidence } from "@/components/ui/evidence";

export function MarketLandscape() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <SectionBadge section="Part 1" title="Where we are" />
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900" suppressHydrationWarning>The UK Market</h2>
          <p className="mt-4 text-zinc-500 text-lg max-w-2xl">
            Seeing how we compare against our biggest competitors in the UK.
          </p>
        </div>
        <div className="text-xs text-zinc-400 px-2 mt-2 md:mt-0 whitespace-nowrap">
          *Data Source: Semrush
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
        <Evidence 
          title="Where We Stand" 
          description="Sports Direct gets the most online visitors in the UK, with Nike as our biggest brand rival and JD Sports as our main store rival." 
          imageSrc="/competitive-map.png"
        />
        <Evidence 
          title="Our Main Rivals" 
          description="The companies we share the most customers with when people search online." 
          imageSrc="/competitors-list.png"
        />
      </div>
    </div>
  );
}

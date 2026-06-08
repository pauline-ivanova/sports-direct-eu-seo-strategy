"use client";

import { SectionBadge } from "@/components/ui/SectionBadge";
import { DataInsight } from "@/components/ui/DataInsight";

export function MarketReality() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <SectionBadge section="Part 1" title="Where we are" />
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900" suppressHydrationWarning>What Competitors Do Better</h2>
          <p className="mt-4 text-zinc-500 text-lg">
            Even though we have more visitors overall, our rivals do some things better that help them sell more.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <div className="lg:col-span-7 grid grid-cols-2 gap-4">
          {/* JD Sports */}
          <div className="flex flex-col gap-3 p-5 rounded-2xl border border-zinc-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center shrink-0 border border-zinc-100 overflow-hidden p-1.5">
              <img src="/logos/jd.png" alt="JD Sports" className="w-full h-full object-contain" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-zinc-900">JD Sports</h4>
              <p className="text-sm text-zinc-500 mt-2 leading-relaxed">Their website is easier to navigate and their product categories are better organized.</p>
            </div>
          </div>

          {/* Nike */}
          <div className="flex flex-col gap-3 p-5 rounded-2xl border border-zinc-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center shrink-0 border border-zinc-100 overflow-hidden p-1.5">
              <img src="/logos/nike.png" alt="Nike" className="w-full h-full object-contain" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-zinc-900">Nike</h4>
              <p className="text-sm text-zinc-500 mt-2 leading-relaxed">They have great product pages that show off their brand well.</p>
            </div>
          </div>

          {/* Zalando */}
          <div className="flex flex-col gap-3 p-5 rounded-2xl border border-zinc-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center shrink-0 border border-zinc-100 overflow-hidden p-1.5">
              <img src="/logos/zalando.png" alt="Zalando" className="w-full h-full object-contain" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-zinc-900">Zalando</h4>
              <p className="text-sm text-zinc-500 mt-2 leading-relaxed">They make it very easy for customers to filter and find exactly what they want.</p>
            </div>
          </div>

          {/* Decathlon */}
          <div className="flex flex-col gap-3 p-5 rounded-2xl border border-zinc-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center shrink-0 border border-zinc-100 overflow-hidden p-1.5">
              <img src="/logos/decathlon.png" alt="Decathlon" className="w-full h-full object-contain" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-zinc-900">Decathlon</h4>
              <p className="text-sm text-zinc-500 mt-2 leading-relaxed">They mix helpful guides with products you can buy very smoothly.</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex">
          <DataInsight 
            insight="We might have more overall visitors, but our rivals are catching customers right when they want to buy. By fixing our website structure, we can easily grab those sales." 
            layout="col"
            className="h-full justify-center"
          />
        </div>
      </div>
    </div>
  );
}

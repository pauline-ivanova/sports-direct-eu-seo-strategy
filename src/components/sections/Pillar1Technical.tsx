"use client";

import { ShieldAlert, Filter, PackageX } from "lucide-react";
import { SectionBadge } from "@/components/ui/SectionBadge";

export function Pillar1Technical() {
  return (
    <div className="space-y-8">
      <div>
        <SectionBadge section="Part 2" title="The Strategy" pillar="Pillar 1" />
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900" suppressHydrationWarning>Protecting the Foundation</h2>
        <p className="mt-4 text-zinc-500 text-lg">
          Technical efficiency & crawl management.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: The Problem */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="flex-1 p-8 bg-[#ED0000]/5 rounded-2xl border border-[#ED0000]/10 flex flex-col justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#ED0000]/10 rounded-xl">
                <ShieldAlert className="w-6 h-6 text-[#ED0000]" />
              </div>
              <h3 className="text-xl font-semibold text-[#ED0000]" suppressHydrationWarning>The Problem: Crawl Waste</h3>
            </div>
            
            <p className="text-zinc-700 text-lg leading-relaxed" suppressHydrationWarning>
              Enterprise catalogs generate millions of URL permutations. When Googlebot is trapped in low-value faceted parameter loops, your <strong>crawl budget is depleted</strong>.
              <br/><br/>
              The result? New seasonal inventory and high-margin products suffer from <strong>delayed indexation</strong>, directly impacting revenue.
            </p>
          </div>
        </div>

        {/* Right: The Solution */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-zinc-900" suppressHydrationWarning>The Solution</h3>
          </div>
          
          <div className="grid gap-4">
            <div className="flex gap-5 p-6 border border-zinc-200 rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-zinc-300 group">
              <div className="w-14 h-14 rounded-2xl bg-zinc-100 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-[#ED0000]/5 group-hover:text-[#ED0000]">
                <Filter className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-semibold text-zinc-900" suppressHydrationWarning>Intelligent Faceted Navigation</h4>
                <p className="text-sm text-zinc-500 mt-2 leading-relaxed" suppressHydrationWarning>Dynamically restrict crawl paths for low-volume permutations via <code className="bg-zinc-100 px-1.5 py-0.5 rounded text-zinc-700 text-sm">robots.txt</code>, while intentionally exposing high-demand intersections (e.g. Brand + Category) as indexable &quot;money pages&quot;.</p>
              </div>
            </div>

            <div className="flex gap-5 p-6 border border-zinc-200 rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-zinc-300 group">
              <div className="w-14 h-14 rounded-2xl bg-zinc-100 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-[#ED0000]/5 group-hover:text-[#ED0000]">
                <PackageX className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-semibold text-zinc-900" suppressHydrationWarning>Lifecycle-Based OOS Handling</h4>
                <p className="text-sm text-zinc-500 mt-2 leading-relaxed" suppressHydrationWarning>Deploy tiered logic (Temporary vs. Permanent Out-of-Stock) to salvage link equity, prevent soft 404s, and eliminate category cannibalisation across the European estate.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { CheckCircle2, Search, MapPin, Code2 } from "lucide-react";
import { SectionBadge } from "@/components/ui/SectionBadge";

export function Roadmap() {
  return (
    <div className="space-y-10">
      <div>
        <SectionBadge section="Part 3" title="Timeline" />
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900" suppressHydrationWarning>The 90-Day Plan</h2>
        <p className="mt-4 text-zinc-500 text-lg">
          What we will do in the first three months.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        {/* Month 1 */}
        <div className="relative">
          <div className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-white border-2 border-zinc-200 flex items-center justify-center">
            <Search className="w-3 h-3 text-zinc-500" />
          </div>
          <div className="pl-6 border-l border-zinc-200 h-full pb-4">
            <h3 className="text-xl font-bold text-zinc-900 mb-6">Month 1: Fix Basics</h3>
            <div className="space-y-5">
              <div className="p-5 border border-zinc-200 rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <h4 className="font-semibold text-zinc-900 flex items-center gap-2 text-base">
                  <CheckCircle2 className="w-4 h-4 text-[#ED0000]" /> Website Cleanup
                </h4>
                <p className="text-sm text-zinc-600 mt-2 leading-relaxed">Find and fix all the errors that stop Google from reading our site properly.</p>
              </div>
              <div className="p-5 border border-zinc-200 rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <h4 className="font-semibold text-zinc-900 flex items-center gap-2 text-base">
                  <CheckCircle2 className="w-4 h-4 text-[#ED0000]" /> Quick Wins
                </h4>
                <p className="text-sm text-zinc-600 mt-2 leading-relaxed">Update page titles on our most popular products to get more clicks right away.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Month 2 */}
        <div className="relative">
          <div className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-white border-2 border-zinc-200 flex items-center justify-center">
            <MapPin className="w-3 h-3 text-zinc-500" />
          </div>
          <div className="pl-6 border-l border-zinc-200 h-full pb-4">
            <h3 className="text-xl font-bold text-zinc-900 mb-6">Month 2: Grow</h3>
            <div className="space-y-5">
              <div className="p-5 border border-zinc-200 rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <h4 className="font-semibold text-zinc-900 flex items-center gap-2 text-base">
                  <CheckCircle2 className="w-4 h-4 text-[#ED0000]" /> New Product Pages
                </h4>
                <p className="text-sm text-zinc-600 mt-2 leading-relaxed">Create pages for specific searches like "Nike Running Shoes" so customers can find them instantly.</p>
              </div>
              <div className="p-5 border border-zinc-200 rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <h4 className="font-semibold text-zinc-900 flex items-center gap-2 text-base">
                  <CheckCircle2 className="w-4 h-4 text-[#ED0000]" /> UK Focus
                </h4>
                <p className="text-sm text-zinc-600 mt-2 leading-relaxed">Make sure we are using exactly the words that British shoppers use.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Month 3 */}
        <div className="relative">
          <div className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-white border-2 border-zinc-200 flex items-center justify-center">
            <Code2 className="w-3 h-3 text-zinc-500" />
          </div>
          <div className="pl-6 border-l border-zinc-200 h-full pb-4">
            <h3 className="text-xl font-bold text-zinc-900 mb-6">Month 3: Sales</h3>
            <div className="space-y-5">
              <div className="p-5 border border-zinc-200 rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <h4 className="font-semibold text-zinc-900 flex items-center gap-2 text-base">
                  <CheckCircle2 className="w-4 h-4 text-[#ED0000]" /> Testing What Works
                </h4>
                <p className="text-sm text-zinc-600 mt-2 leading-relaxed">Start testing different page layouts to see which one makes people buy the most.</p>
              </div>
              <div className="p-5 border border-zinc-200 rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <h4 className="font-semibold text-zinc-900 flex items-center gap-2 text-base">
                  <CheckCircle2 className="w-4 h-4 text-[#ED0000]" /> Keeping it Clean
                </h4>
                <p className="text-sm text-zinc-600 mt-2 leading-relaxed">Add checks to make sure our website team doesn't accidentally break search rankings in the future.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

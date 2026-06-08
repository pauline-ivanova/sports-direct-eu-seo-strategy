"use client";

import { CheckCircle2, Search, MapPin, Code2 } from "lucide-react";
import { SectionBadge } from "@/components/ui/SectionBadge";

export function Roadmap() {
  return (
    <div className="space-y-10">
      <div>
        <SectionBadge section="Part 3" title="Execution" />
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900" suppressHydrationWarning>90-Day Execution Plan</h2>
        <p className="mt-4 text-zinc-500 text-lg">
          Phased implementation roadmap for the UK market.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        {/* Month 1 */}
        <div className="relative">
          <div className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-white border-2 border-zinc-200 flex items-center justify-center">
            <Search className="w-3 h-3 text-zinc-500" />
          </div>
          <div className="pl-6 border-l border-zinc-200 h-full pb-4">
            <h3 className="text-xl font-bold text-zinc-900 mb-6">Month 1: Foundation</h3>
            <div className="space-y-5">
              <div className="p-5 border border-zinc-200 rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <h4 className="font-semibold text-zinc-900 flex items-center gap-2 text-base">
                  <CheckCircle2 className="w-4 h-4 text-[#ED0000]" /> Technical Audit & Remediation
                </h4>
                <p className="text-sm text-zinc-600 mt-2 leading-relaxed">Identify and resolve critical crawlability blockers, parameter handling issues, and indexation bloat.</p>
              </div>
              <div className="p-5 border border-zinc-200 rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <h4 className="font-semibold text-zinc-900 flex items-center gap-2 text-base">
                  <CheckCircle2 className="w-4 h-4 text-[#ED0000]" /> High-Yield Optimizations
                </h4>
                <p className="text-sm text-zinc-600 mt-2 leading-relaxed">Execute immediate metadata and schema updates on high-margin product categories to drive short-term revenue.</p>
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
            <h3 className="text-xl font-bold text-zinc-900 mb-6">Month 2: Expansion</h3>
            <div className="space-y-5">
              <div className="p-5 border border-zinc-200 rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <h4 className="font-semibold text-zinc-900 flex items-center gap-2 text-base">
                  <CheckCircle2 className="w-4 h-4 text-[#ED0000]" /> PLP Generation
                </h4>
                <p className="text-sm text-zinc-600 mt-2 leading-relaxed">Deploy programmatic landing pages targeting high-intent, long-tail queries identified in the semantic analysis.</p>
              </div>
              <div className="p-5 border border-zinc-200 rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <h4 className="font-semibold text-zinc-900 flex items-center gap-2 text-base">
                  <CheckCircle2 className="w-4 h-4 text-[#ED0000]" /> UK Localization
                </h4>
                <p className="text-sm text-zinc-600 mt-2 leading-relaxed">Align taxonomy and on-page content strictly with UK search terminology and behavioral patterns.</p>
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
            <h3 className="text-xl font-bold text-zinc-900 mb-6">Month 3: Optimization</h3>
            <div className="space-y-5">
              <div className="p-5 border border-zinc-200 rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <h4 className="font-semibold text-zinc-900 flex items-center gap-2 text-base">
                  <CheckCircle2 className="w-4 h-4 text-[#ED0000]" /> CRO Integration
                </h4>
                <p className="text-sm text-zinc-600 mt-2 leading-relaxed">Initiate A/B testing protocols on key landing pages to maximize the conversion rate of acquired organic traffic.</p>
              </div>
              <div className="p-5 border border-zinc-200 rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <h4 className="font-semibold text-zinc-900 flex items-center gap-2 text-base">
                  <CheckCircle2 className="w-4 h-4 text-[#ED0000]" /> Governance Framework
                </h4>
                <p className="text-sm text-zinc-600 mt-2 leading-relaxed">Establish automated QA processes to prevent future technical regressions during development cycles.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { CheckCircle2, Search, Globe, Code2 } from "lucide-react";
import { SectionBadge } from "@/components/ui/SectionBadge";

export function Roadmap() {
  return (
    <div className="space-y-10">
      <div>
        <SectionBadge section="Part 3" title="Execution & Results" />
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900" suppressHydrationWarning>The 90-Day Roadmap</h2>
        <p className="mt-4 text-zinc-500 text-lg">
          Translating strategy into an actionable rollout plan.
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
              <div className="p-5 border border-zinc-200 rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-zinc-300">
                <h4 className="font-semibold text-zinc-900 flex items-center gap-2 text-base">
                  <CheckCircle2 className="w-4 h-4 text-[#ED0000]" /> Tech & Crawl Triage
                </h4>
                <p className="text-sm text-zinc-600 mt-2 leading-relaxed">Execute pan-EU technical audit focusing on crawl budget optimization, facet blocking rules, and Hreflang reciprocity fixes.</p>
              </div>
              <div className="p-5 border border-zinc-200 rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-zinc-300">
                <h4 className="font-semibold text-zinc-900 flex items-center gap-2 text-base">
                  <CheckCircle2 className="w-4 h-4 text-[#ED0000]" /> Fast-Tracking Wins
                </h4>
                <p className="text-sm text-zinc-600 mt-2 leading-relaxed">Deploy automated Meta CTR testing on high-impression/low-click categories to drive immediate traffic lifts.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Month 2 */}
        <div className="relative">
          <div className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-white border-2 border-zinc-200 flex items-center justify-center">
            <Globe className="w-3 h-3 text-zinc-500" />
          </div>
          <div className="pl-6 border-l border-zinc-200 h-full pb-4">
            <h3 className="text-xl font-bold text-zinc-900 mb-6">Month 2: Expansion</h3>
            <div className="space-y-5">
              <div className="p-5 border border-zinc-200 rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-zinc-300">
                <h4 className="font-semibold text-zinc-900 flex items-center gap-2 text-base">
                  <CheckCircle2 className="w-4 h-4 text-[#ED0000]" /> Semantic Architecture
                </h4>
                <p className="text-sm text-zinc-600 mt-2 leading-relaxed">Map search demand to inventory. Dynamically generate indexable facet intersections (e.g. Brand + Sport) to capture long-tail demand.</p>
              </div>
              <div className="p-5 border border-zinc-200 rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-zinc-300">
                <h4 className="font-semibold text-zinc-900 flex items-center gap-2 text-base">
                  <CheckCircle2 className="w-4 h-4 text-[#ED0000]" /> True Localisation
                </h4>
                <p className="text-sm text-zinc-600 mt-2 leading-relaxed">Audit top 20% revenue-driving categories in DACH/FR for semantic intent matching vs direct translation.</p>
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
            <h3 className="text-xl font-bold text-zinc-900 mb-6">Month 3: Integration</h3>
            <div className="space-y-5">
              <div className="p-5 border border-zinc-200 rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-zinc-300">
                <h4 className="font-semibold text-zinc-900 flex items-center gap-2 text-base">
                  <CheckCircle2 className="w-4 h-4 text-[#ED0000]" /> SEO/CRO Alignment
                </h4>
                <p className="text-sm text-zinc-600 mt-2 leading-relaxed">Launch initial testing sprints on product pages to measure organic conversion velocity (e.g. FrasersPlus messaging impact).</p>
              </div>
              <div className="p-5 border border-zinc-200 rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-zinc-300">
                <h4 className="font-semibold text-zinc-900 flex items-center gap-2 text-base">
                  <CheckCircle2 className="w-4 h-4 text-[#ED0000]" /> "SEO By Design"
                </h4>
                <p className="text-sm text-zinc-600 mt-2 leading-relaxed">Embed automated SEO QA checklists into Jira/Dev workflows to prevent future technical regressions before deployment.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

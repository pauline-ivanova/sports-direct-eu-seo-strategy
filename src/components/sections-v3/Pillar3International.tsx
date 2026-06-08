"use client";

import { MapPin, Users } from "lucide-react";
import { SectionBadge } from "@/components/ui/SectionBadge";

export function Pillar3International() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <SectionBadge section="Part 2" title="Strategic Pillars" pillar="Pillar 3" />
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900" suppressHydrationWarning>UK Localization</h2>
          <p className="mt-4 text-zinc-500 text-lg">
            Aligning taxonomy with regional search behavior.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8">
        {/* Left: Local Architecture */}
        <div className="lg:col-span-6 flex flex-col">
          <div className="flex-1 p-8 bg-zinc-50 rounded-2xl border border-zinc-200 flex flex-col justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-zinc-200 rounded-xl">
                <MapPin className="w-6 h-6 text-zinc-900" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900" suppressHydrationWarning>Market Penetration</h3>
            </div>
            
            <p className="text-zinc-700 text-lg leading-relaxed mb-6" suppressHydrationWarning>
              Ensuring maximum visibility in the UK SERPs by eliminating structural friction and consolidating local authority signals.
            </p>

            <div className="mt-auto pt-6 border-t border-zinc-200">
              <ul className="space-y-3 text-zinc-700 font-medium">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#ED0000]" />
                  Resolving internal redirect chains and 404s
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#ED0000]" />
                  Prioritizing UK-specific inventory availability
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#ED0000]" />
                  Optimizing local schema and structured data
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
                <Users className="w-6 h-6 text-zinc-900" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900" suppressHydrationWarning>Semantic Alignment</h3>
            </div>
            
            <p className="text-zinc-700 text-lg leading-relaxed mb-6" suppressHydrationWarning>
              Adapting site taxonomy and metadata to match the exact colloquial terminology utilized by the UK consumer base.
            </p>

            <div className="mt-auto pt-6 border-t border-zinc-200">
              <div className="p-5 border border-zinc-200 rounded-xl bg-white shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-[#ED0000]" />
                  <span className="text-base font-semibold text-zinc-900">Query Optimization</span>
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Pivoting from generic industry terminology to high-volume regional variants (e.g., optimizing for "footy boots" and "trainers" over "athletic footwear").
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

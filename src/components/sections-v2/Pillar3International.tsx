"use client";

import { MapPin, Users } from "lucide-react";
import { SectionBadge } from "@/components/ui/SectionBadge";

export function Pillar3International() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <SectionBadge section="Part 2" title="The Plan" pillar="Step 3" />
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900" suppressHydrationWarning>Winning the UK Market</h2>
          <p className="mt-4 text-zinc-500 text-lg">
            Speaking directly to local customers.
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
              <h3 className="text-xl font-semibold text-zinc-900" suppressHydrationWarning>Local Visibility</h3>
            </div>
            
            <p className="text-zinc-700 text-lg leading-relaxed mb-6" suppressHydrationWarning>
              We want to make sure that when someone in the UK searches for sporting goods, Sports Direct is the first thing they see. No confusion, no broken links.
            </p>

            <div className="mt-auto pt-6 border-t border-zinc-200">
              <ul className="space-y-3 text-zinc-700 font-medium">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#ED0000]" />
                  Fixing site errors to keep users happy
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#ED0000]" />
                  Focusing entirely on UK product availability
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#ED0000]" />
                  Directing local buyers to the right products
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
              <h3 className="text-xl font-semibold text-zinc-900" suppressHydrationWarning>Understanding UK Shoppers</h3>
            </div>
            
            <p className="text-zinc-700 text-lg leading-relaxed mb-6" suppressHydrationWarning>
              We need to use the exact words that UK customers use when they shop. Being generic doesn't work; we need to speak their language.
            </p>

            <div className="mt-auto pt-6 border-t border-zinc-200">
              <div className="p-5 border border-zinc-200 rounded-xl bg-white shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-[#ED0000]" />
                  <span className="text-base font-semibold text-zinc-900">How People Actually Search</span>
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Instead of just using standard terms like "athletic footwear", we optimize for what people actually type: "footy boots", "trainers", and "kits".
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

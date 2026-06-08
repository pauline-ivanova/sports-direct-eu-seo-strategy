"use client";

import { ShieldAlert, Filter, PackageX } from "lucide-react";
import { SectionBadge } from "@/components/ui/SectionBadge";

export function Pillar1Technical() {
  return (
    <div className="space-y-8">
      <div>
        <SectionBadge section="Part 2" title="The Plan" pillar="Step 1" />
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900" suppressHydrationWarning>Fixing the Basics</h2>
        <p className="mt-4 text-zinc-500 text-lg">
          Making sure Google can actually read our site.
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
              <h3 className="text-xl font-semibold text-[#ED0000]" suppressHydrationWarning>The Problem: Getting Lost</h3>
            </div>
            
            <p className="text-zinc-700 text-lg leading-relaxed" suppressHydrationWarning>
              Our website has so many product filters (size, color, brand) that Google gets confused and wastes time reading empty or unhelpful pages.
              <br/><br/>
              Because of this, our newest and best products often don't show up in search results fast enough, meaning <strong>we lose out on sales</strong>.
            </p>
          </div>
        </div>

        {/* Right: The Solution */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-zinc-900" suppressHydrationWarning>The Solution</h3>
          </div>
          
          <div className="grid gap-4">
            <div className="flex gap-5 p-6 border border-zinc-200 rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
              <div className="w-14 h-14 rounded-2xl bg-zinc-100 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-[#ED0000]/5 group-hover:text-[#ED0000]">
                <Filter className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-semibold text-zinc-900" suppressHydrationWarning>Smarter Filters</h4>
                <p className="text-sm text-zinc-500 mt-2 leading-relaxed" suppressHydrationWarning>We will tell Google to ignore useless filter combinations and only focus on the ones people actually search for (like "Nike Running Shoes").</p>
              </div>
            </div>

            <div className="flex gap-5 p-6 border border-zinc-200 rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
              <div className="w-14 h-14 rounded-2xl bg-zinc-100 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-[#ED0000]/5 group-hover:text-[#ED0000]">
                <PackageX className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-semibold text-zinc-900" suppressHydrationWarning>Handling Sold-Out Items</h4>
                <p className="text-sm text-zinc-500 mt-2 leading-relaxed" suppressHydrationWarning>When an item sells out, we'll guide customers to similar products instead of showing them an annoying "Out of Stock" or error page.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

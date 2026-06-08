"use client";

import { TrendingUp, Layers, MapPin } from "lucide-react";

export function CoreFocus() {
  return (
    <div className="space-y-8">
      <div className="text-center md:text-left">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900" suppressHydrationWarning>What We Focus On</h2>
        <p className="mt-4 text-zinc-500 text-lg max-w-3xl">
          To grow our UK presence naturally, we are keeping things simple. We only care about actions that actually increase sales, rather than just chasing meaningless numbers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
        <div className="flex flex-col gap-4 p-6 border border-zinc-200 rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-zinc-300 group">
          <div className="w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center text-zinc-900 transition-colors duration-300 group-hover:bg-[#ED0000]/10 group-hover:text-[#ED0000]">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-zinc-900" suppressHydrationWarning>Focus on Sales</h3>
            <p className="mt-2 text-sm text-zinc-500 leading-relaxed" suppressHydrationWarning>
              We prioritize actions that bring in money. Getting more visitors is good, but getting visitors who actually buy is what matters.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col gap-4 p-6 border border-zinc-200 rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-zinc-300 group">
          <div className="w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center text-zinc-900 transition-colors duration-300 group-hover:bg-[#ED0000]/10 group-hover:text-[#ED0000]">
            <Layers className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-zinc-900" suppressHydrationWarning>A Better Website</h3>
            <p className="mt-2 text-sm text-zinc-500 leading-relaxed" suppressHydrationWarning>
              Making sure search engines can easily read our site, and turning complicated product filters into helpful pages for customers.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 p-6 border border-zinc-200 rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-zinc-300 group">
          <div className="w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center text-zinc-900 transition-colors duration-300 group-hover:bg-[#ED0000]/10 group-hover:text-[#ED0000]">
            <MapPin className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-zinc-900" suppressHydrationWarning>UK Domination</h3>
            <p className="mt-2 text-sm text-zinc-500 leading-relaxed" suppressHydrationWarning>
              Tailoring our approach specifically for the UK audience, understanding exactly how local customers search and shop.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

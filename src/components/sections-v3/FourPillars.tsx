"use client";

import { ShieldCheck, TrendingUp, MapPin, MousePointerClick } from "lucide-react";

const pillars = [
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "1. Technical Foundation",
    description: "Resolving crawlability issues and establishing a robust site architecture.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "2. Category Expansion",
    description: "Programmatically scaling indexable paths to capture long-tail demand.",
  },
  {
    icon: <MousePointerClick className="w-6 h-6" />,
    title: "3. Conversion Optimization",
    description: "Removing friction from the user journey to maximize revenue per session.",
  },
];

export function FourPillars() {
  return (
    <div className="space-y-12">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900" suppressHydrationWarning>Strategic Pillars</h2>
        <p className="mt-4 text-zinc-500 text-lg leading-relaxed" suppressHydrationWarning>
          A structured methodology to secure the technical base, expand market share, and drive commercial performance in the UK.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pillars.map((pillar, idx) => (
          <div key={idx} className="flex flex-col gap-4 p-6 border border-zinc-200 rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md group h-full">
            <div className="w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center text-zinc-900 transition-colors duration-300 group-hover:bg-[#ED0000]/10 group-hover:text-[#ED0000]">
              {pillar.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-zinc-900" suppressHydrationWarning>{pillar.title}</h3>
              <p className="mt-2 text-sm text-zinc-500 leading-relaxed" suppressHydrationWarning>
                {pillar.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

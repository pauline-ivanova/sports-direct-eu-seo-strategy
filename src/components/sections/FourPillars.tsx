"use client";

import { ShieldCheck, TrendingUp, Globe, MousePointerClick } from "lucide-react";

const pillars = [
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Enterprise Architecture",
    description: "Securing crawl efficiency and controlling indexation across millions of dynamic URLs.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Non-Brand Dominance",
    description: "Programmatically unlocking high-intent search demand through scalable facet optimization.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Hyper-Localised Scaling",
    description: "Adapting to cultural search behaviors and local market nuances, moving beyond basic translation.",
  },
  {
    icon: <MousePointerClick className="w-6 h-6" />,
    title: "Experience & Conversion",
    description: "Aligning landing page intent with user expectations to eliminate friction and maximize revenue.",
  },
];

export function FourPillars() {
  return (
    <div className="space-y-12">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900" suppressHydrationWarning>The 4 Pillars of Growth</h2>
        <p className="mt-4 text-zinc-500 text-lg leading-relaxed" suppressHydrationWarning>
          An interconnected framework designed to secure the technical baseline, unlock programmatic growth, and dominate local European markets.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((pillar, idx) => (
          <div key={idx} className="flex flex-col gap-4 p-6 border border-zinc-200 rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-zinc-300 group h-full">
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

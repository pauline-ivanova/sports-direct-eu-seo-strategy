"use client";

import { TrendingUp, Settings, BarChart3, Globe, Code2 } from "lucide-react";

const principles = [
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Revenue before rankings",
    description: "SEO is a commercial driver, not just a traffic channel. Every action must map to revenue.",
  },
  {
    icon: <Settings className="w-5 h-5" />,
    title: "Scale before manual optimisation",
    description: "Focus on programmatic and template-level changes across the enterprise estate.",
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: "Data before assumptions",
    description: "Decisions driven by crawl logs, search demand, and user behavior.",
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: "Local market insight over direct translation",
    description: "True localization adapts to cultural search nuances, not just language.",
  },
  {
    icon: <Code2 className="w-5 h-5" />,
    title: "SEO embedded into product workflows",
    description: "SEO by Design: preventing issues before they are deployed.",
  },
];

export function Philosophy() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900" suppressHydrationWarning>My SEO Philosophy</h2>
        <p className="mt-4 text-zinc-500 text-lg" suppressHydrationWarning>
          Operating principles that form the foundation of the strategy.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {principles.map((principle, idx) => (
          <div key={idx} className="flex gap-4 p-6 border border-zinc-200 rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-zinc-300 group">
            <div className="w-12 h-12 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-900 shrink-0 transition-colors duration-300 group-hover:bg-[#ED0000]/10 group-hover:text-[#ED0000]">
              {principle.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-zinc-900" suppressHydrationWarning>{principle.title}</h3>
              <p className="mt-2 text-sm text-zinc-500 leading-relaxed" suppressHydrationWarning>
                {principle.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

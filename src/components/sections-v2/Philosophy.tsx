"use client";

import { TrendingUp, Settings, BarChart3, MapPin, Code2 } from "lucide-react";

const principles = [
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Sales over Traffic",
    description: "Getting people to the site is only good if they actually buy something.",
  },
  {
    icon: <Settings className="w-5 h-5" />,
    title: "Fix the Big Picture",
    description: "Instead of fixing pages one by one, we make improvements that apply to the whole website.",
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: "Use Real Data",
    description: "We don't guess. We look at what customers are actually searching for.",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    title: "Know the UK Customer",
    description: "We tailor everything to how people in the UK search and shop.",
  },
  {
    icon: <Code2 className="w-5 h-5" />,
    title: "Build it Right",
    description: "We make sure our web developers keep the site search-friendly from the start.",
  },
];

export function Philosophy() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900" suppressHydrationWarning>How I Work</h2>
        <p className="mt-4 text-zinc-500 text-lg" suppressHydrationWarning>
          These simple rules guide everything we do.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {principles.map((principle, idx) => (
          <div key={idx} className="flex gap-4 p-6 border border-zinc-200 rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
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

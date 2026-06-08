"use client";

import { TrendingUp, Settings, BarChart3, MapPin, Code2 } from "lucide-react";

const principles = [
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Commercial Alignment",
    description: "Prioritizing metrics that directly correlate with revenue generation and ROI.",
  },
  {
    icon: <Settings className="w-5 h-5" />,
    title: "Scalable Architecture",
    description: "Implementing programmatic, sitewide solutions rather than isolated page-level fixes.",
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: "Data-Driven Execution",
    description: "Basing taxonomy and content decisions strictly on quantitative search volume and intent analysis.",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    title: "UK Market Specificity",
    description: "Calibrating the strategy exclusively to the behavioral nuances of the UK consumer.",
  },
  {
    icon: <Code2 className="w-5 h-5" />,
    title: "Technical Integration",
    description: "Aligning SEO requirements with engineering workflows to ensure native search compliance.",
  },
];

export function Philosophy() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900" suppressHydrationWarning>Strategic Philosophy</h2>
        <p className="mt-4 text-zinc-500 text-lg" suppressHydrationWarning>
          The core principles driving the execution of this roadmap.
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

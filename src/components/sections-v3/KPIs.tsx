"use client";

import { LineChart, Layers, Megaphone, Activity } from "lucide-react";

export function KPIs() {
  const kpis = [
    {
      title: "Incremental\nRevenue",
      subtitle: "Primary Objective",
      description: "Direct revenue generated from non-brand organic sessions",
      icon: <LineChart className="w-6 h-6 text-zinc-900" />,
      colorClass: "group-hover:bg-[#ED0000]/10 group-hover:text-[#ED0000]"
    },
    {
      title: "Indexation\nEfficiency",
      subtitle: "Technical Health",
      description: "Ratio of crawled pages to revenue-generating indexed URLs",
      icon: <Layers className="w-6 h-6 text-zinc-900" />,
      colorClass: "group-hover:bg-[#ED0000]/10 group-hover:text-[#ED0000]"
    },
    {
      title: "UK Share\nof Voice",
      subtitle: "Market Position",
      description: "Visibility across high-volume transactional query clusters",
      icon: <Megaphone className="w-6 h-6 text-zinc-900" />,
      colorClass: "group-hover:bg-[#ED0000]/10 group-hover:text-[#ED0000]"
    },
    {
      title: "Conversion\nRate",
      subtitle: "Commercial Yield",
      description: "Session-to-transaction ratio for organic landing pages",
      icon: <Activity className="w-6 h-6 text-zinc-900" />,
      colorClass: "group-hover:bg-[#ED0000]/10 group-hover:text-[#ED0000]"
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 mb-4" suppressHydrationWarning>Performance Measurement</h2>
        <p className="text-lg text-zinc-600 font-medium">
          Success is evaluated strictly through commercial and operational metrics.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, i) => (
          <div key={i} className="p-6 border border-zinc-200 rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md group flex flex-col justify-start">
            <div className={`w-12 h-12 rounded-xl bg-zinc-100 flex items-center justify-center shrink-0 mb-4 transition-colors duration-300 ${kpi.colorClass}`}>
              {kpi.icon}
            </div>
            <h4 className="font-semibold text-zinc-900 text-xl mb-1 whitespace-pre-line">{kpi.title}</h4>
            <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">{kpi.subtitle}</p>
            <p className="text-sm text-zinc-600 leading-relaxed">{kpi.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

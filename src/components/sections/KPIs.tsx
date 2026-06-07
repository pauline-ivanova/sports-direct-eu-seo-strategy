"use client";

import { Target, TrendingUp, BarChart3, Activity, Layers, Megaphone, LineChart } from "lucide-react";

export function KPIs() {
  const kpis = [
    {
      title: "Organic Revenue",
      subtitle: "North Star",
      icon: <LineChart className="w-6 h-6 text-zinc-900" />,
      colorClass: "group-hover:bg-[#ED0000]/10 group-hover:text-[#ED0000]"
    },
    {
      title: "Category Coverage",
      subtitle: "Growth Lever",
      icon: <Layers className="w-6 h-6 text-zinc-900" />,
      colorClass: "group-hover:bg-[#ED0000]/10 group-hover:text-[#ED0000]"
    },
    {
      title: "Share of Voice",
      subtitle: "Market Position",
      icon: <Megaphone className="w-6 h-6 text-zinc-900" />,
      colorClass: "group-hover:bg-[#ED0000]/10 group-hover:text-[#ED0000]"
    },
    {
      title: "Indexation Health",
      subtitle: "Technical KPI",
      icon: <Activity className="w-6 h-6 text-zinc-900" />,
      colorClass: "group-hover:bg-[#ED0000]/10 group-hover:text-[#ED0000]"
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900" suppressHydrationWarning>Visual KPI Dashboard</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, i) => (
          <div key={i} className="p-6 border border-zinc-200 rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-zinc-300 group flex flex-col justify-center">
            <div className={`w-12 h-12 rounded-xl bg-zinc-100 flex items-center justify-center shrink-0 mb-4 transition-colors duration-300 ${kpi.colorClass}`}>
              {kpi.icon}
            </div>
            <h4 className="font-semibold text-zinc-900 text-xl mb-1">{kpi.title}</h4>
            <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider">{kpi.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

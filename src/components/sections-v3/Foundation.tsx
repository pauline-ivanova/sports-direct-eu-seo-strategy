"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { DataInsight } from "@/components/ui/DataInsight";

const data = [
  { name: "Branded", value: 55 },
  { name: "Non-Branded", value: 45 },
];
const COLORS = ["#18181b", "#ED0000"];

export function Foundation() {
  return (
    <div className="space-y-6">
      <div>
        <SectionBadge section="Part 1" title="Context & Philosophy" />
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900" suppressHydrationWarning>Current UK Baseline</h2>
        <p className="mt-4 text-zinc-500 text-lg max-w-2xl">
          With a formidable organic footprint already in place, our focus shifts from building authority to maximizing its commercial impact.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left: Data Blocks */}
        <div className="lg:col-span-7 flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 border border-zinc-200 rounded-2xl bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-center">
              <div className="text-xs text-zinc-500 mb-1">Authority Score</div>
              <div className="text-3xl font-bold text-zinc-900">80</div>
            </div>
            <div className="p-4 border border-zinc-200 rounded-2xl bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-center">
              <div className="text-xs text-zinc-500 mb-1">Organic Traffic</div>
              <div className="text-3xl font-bold text-zinc-900">10.5M</div>
            </div>
            <div className="p-4 border border-zinc-200 rounded-2xl bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-center">
              <div className="text-xs text-zinc-500 mb-1">Backlinks</div>
              <div className="text-3xl font-bold text-zinc-900">13.1M</div>
            </div>
            <div className="p-4 border border-zinc-200 rounded-2xl bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-center">
              <div className="text-xs text-zinc-500 mb-1">Ref. Domains</div>
              <div className="text-3xl font-bold text-zinc-900">22.9K</div>
            </div>
            <div className="col-span-2 p-4 border border-zinc-200 rounded-2xl bg-white shadow-sm flex flex-row items-center justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="flex-1 h-24">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={data}
                      cx="50%"
                      cy="50%"
                      innerRadius={30}
                      outerRadius={45}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e4e4e7', boxShadow: 'none' }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex-1 flex flex-col gap-3 pl-4 border-l border-zinc-100">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-900" />
                  <span className="text-sm font-medium text-zinc-700">Branded (55%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ED0000]" />
                  <span className="text-sm font-medium text-zinc-700">Non-Branded (45%)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-xs text-zinc-400 px-2 mt-2 whitespace-nowrap">
            *Data Source: Semrush
          </div>
        </div>

        {/* Right: Takeaway */}
        <div className="lg:col-span-5 flex">
          <DataInsight 
            insight="With 13.1M backlinks and an Authority Score of 80, our foundation is rock-solid. Combined with a healthy 45% non-branded traffic share, the priority shifts from building trust to aggressively converting this massive top-of-funnel visibility into revenue." 
            layout="col"
            className="h-full justify-center"
          />
        </div>
      </div>
    </div>
  );
}

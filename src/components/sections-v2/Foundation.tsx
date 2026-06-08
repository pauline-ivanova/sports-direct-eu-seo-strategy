"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { DataInsight } from "@/components/ui/DataInsight";

const data = [
  { name: "Brand Search", value: 55 },
  { name: "General Search", value: 45 },
];
const COLORS = ["#18181b", "#ED0000"];

export function Foundation() {
  return (
    <div className="space-y-6">
      <div>
        <SectionBadge section="Part 1" title="Where we are" />
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900" suppressHydrationWarning>Our Starting Point</h2>
        <p className="mt-4 text-zinc-500 text-lg max-w-2xl">
          We already have a strong website. Now, our goal is to turn our popularity into more sales.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left: Data Blocks */}
        <div className="lg:col-span-7 flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 border border-zinc-200 rounded-2xl bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-center">
              <div className="text-xs text-zinc-500 mb-1">Site Strength</div>
              <div className="text-3xl font-bold text-zinc-900">Great</div>
            </div>
            <div className="p-4 border border-zinc-200 rounded-2xl bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-center">
              <div className="text-xs text-zinc-500 mb-1">Monthly Visitors</div>
              <div className="text-3xl font-bold text-zinc-900">10.5M</div>
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
                  <span className="text-sm font-medium text-zinc-700">Searching for "Sports Direct" (55%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ED0000]" />
                  <span className="text-sm font-medium text-zinc-700">Searching for products (45%)</span>
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
            insight="Our website is very trusted. With 45% of visitors finding us by searching for general products (like 'running shoes'), we just need to focus on turning these visitors into paying customers." 
            layout="col"
            className="h-full justify-center"
          />
        </div>
      </div>
    </div>
  );
}

"use client";

import { ShieldCheck, TrendingUp, MapPin, MousePointerClick } from "lucide-react";

const pillars = [
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "1. Fix the Basics",
    description: "Make sure search engines can easily read our website without getting lost.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "2. Show More Products",
    description: "Help customers find specific items like 'Nike Running Shoes' faster.",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "3. Win the UK Market",
    description: "Target exactly what UK shoppers are looking for, using the words they use.",
  },
  {
    icon: <MousePointerClick className="w-6 h-6" />,
    title: "4. Get More Sales",
    description: "Make the buying process so easy that visitors naturally become customers.",
  },
];

export function FourPillars() {
  return (
    <div className="space-y-12">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900" suppressHydrationWarning>Our 4 Steps to Growth</h2>
        <p className="mt-4 text-zinc-500 text-lg leading-relaxed" suppressHydrationWarning>
          A simple plan to fix the website, show off our products, and get more people in the UK to buy from us.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

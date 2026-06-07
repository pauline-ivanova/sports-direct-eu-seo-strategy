import { Lightbulb } from "lucide-react";

export function DataInsight({ insight, className = "", layout = "row" }: { insight: string; className?: string; layout?: "row" | "col" }) {
  return (
    <div className={`flex ${layout === 'row' ? 'flex-col md:flex-row items-start md:items-center' : 'flex-col items-start'} gap-6 p-6 md:p-8 bg-white border border-zinc-200 rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-zinc-300 w-full relative overflow-hidden group ${className}`}>
      {/* Subtle accent line at the top */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#ED0000] to-[#ED0000]/60 opacity-90" />
      
      <div className="w-12 h-12 rounded-2xl bg-[#ED0000]/10 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-[#ED0000]/20">
        <Lightbulb className="w-6 h-6 text-[#ED0000]" />
      </div>
      <div className="flex flex-col justify-center flex-1">
        <span className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-2">Strategic Takeaway</span>
        <span className="text-lg text-zinc-500 leading-relaxed">{insight}</span>
      </div>
    </div>
  );
}

import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-8 h-full">
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 leading-tight max-w-4xl" suppressHydrationWarning>
        Unlocking Organic Growth for <span className="text-zinc-400">Sports Direct EU</span>
      </h1>
      
      <p className="text-xl text-zinc-500 max-w-2xl font-light leading-relaxed">
        A strategic roadmap focusing on technical excellence, category expansion, and localized demand capture across the European estate.
      </p>

      <div className="flex items-center gap-4 pt-6">
        <a href="#core-focus" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 text-white font-medium hover:bg-zinc-800 transition-colors">
          View Strategy
          <ArrowRight className="w-4 h-4" />
        </a>
        <a href="https://www.linkedin.com/in/polina-a-ivanova/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-zinc-900 border border-zinc-200 font-medium hover:bg-zinc-50 transition-colors shadow-sm">
          Polina Ivanova
        </a>
      </div>
    </div>
  );
}

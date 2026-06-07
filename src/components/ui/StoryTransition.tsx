import { ArrowDown } from "lucide-react";

export function StoryTransition({ text }: { text: string }) {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-12 w-full h-full">
      <h2 className="text-3xl md:text-5xl font-medium text-zinc-400 leading-tight max-w-4xl tracking-tight">
        {text}
      </h2>
      <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center animate-bounce">
        <ArrowDown className="w-6 h-6 text-zinc-400" />
      </div>
    </div>
  );
}

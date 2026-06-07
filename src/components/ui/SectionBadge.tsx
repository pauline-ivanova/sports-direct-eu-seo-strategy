export function SectionBadge({ section, title, pillar }: { section: string; title: string; pillar?: string }) {
  return (
    <div className="flex flex-wrap items-center gap-2 mb-6">
      <span className="px-3 py-1.5 rounded-full bg-[#ED0000] text-white text-[10px] sm:text-xs font-bold tracking-widest uppercase shadow-sm">
        {section}
      </span>
      <span className="px-3 py-1.5 rounded-full bg-white text-zinc-900 border border-zinc-200 text-[10px] sm:text-xs font-bold tracking-widest uppercase shadow-sm">
        {title}
      </span>
      {pillar && (
        <span className="px-3 py-1.5 rounded-full bg-zinc-900 text-white text-[10px] sm:text-xs font-bold tracking-widest uppercase shadow-sm">
          {pillar}
        </span>
      )}
    </div>
  );
}

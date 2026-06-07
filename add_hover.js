const fs = require('fs');
const path = require('path');

const dir = 'C:\\Users\\anato\\Documents\\PROJECTS\\Sports Direct UK\\presentation\\src\\components\\sections';

const replacements = [
  {
    file: 'CoreFocus.tsx',
    oldStr: 'className="flex flex-col gap-4 p-6 border border-zinc-200 rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-zinc-300"',
    newStr: 'className="flex flex-col gap-4 p-6 border border-zinc-200 rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-zinc-300 group"'
  },
  {
    file: 'CoreFocus.tsx',
    oldStr: 'className="w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center text-zinc-900"',
    newStr: 'className="w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center text-zinc-900 transition-colors duration-300 group-hover:bg-[#ED0000]/10 group-hover:text-[#ED0000]"'
  },
  {
    file: 'CoreFocus.tsx',
    oldStr: 'className="w-12 h-12 rounded-2xl bg-[#ED0000]/5 flex items-center justify-center text-[#ED0000]"',
    newStr: 'className="w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center text-zinc-900 transition-colors duration-300 group-hover:bg-[#ED0000]/10 group-hover:text-[#ED0000]"'
  }
  {
    file: 'StartingPoint.tsx',
    oldStr: 'className="p-4 border border-zinc-200 rounded-lg bg-white"',
    newStr: 'className="p-4 border border-zinc-200 rounded-lg bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-zinc-300"'
  },
  {
    file: 'StartingPoint.tsx',
    oldStr: 'className="p-6 border border-zinc-200 rounded-xl bg-white shadow-sm flex flex-col items-center justify-center"',
    newStr: 'className="p-6 border border-zinc-200 rounded-xl bg-white shadow-sm flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-zinc-300"'
  },
  {
    file: 'StartingPoint.tsx',
    oldStr: 'className="flex items-start gap-4 p-4 rounded-xl border border-zinc-200 bg-white"',
    newStr: 'className="flex items-start gap-4 p-4 rounded-xl border border-zinc-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-zinc-300"'
  },
  {
    file: 'StartingPoint.tsx',
    oldStr: 'className="p-5 bg-zinc-900 text-white rounded-xl shadow-md"',
    newStr: 'className="p-5 bg-zinc-900 text-white rounded-xl shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"'
  },
  {
    file: 'Pillar1Technical.tsx',
    oldStr: 'className="p-6 bg-[#ED0000]/5 rounded-xl border border-[#ED0000]/10"',
    newStr: 'className="p-6 bg-[#ED0000]/5 rounded-xl border border-[#ED0000]/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"'
  },
  {
    file: 'Pillar1Technical.tsx',
    oldStr: 'className="flex gap-4 p-4 border border-zinc-200 rounded-xl bg-white"',
    newStr: 'className="flex gap-4 p-4 border border-zinc-200 rounded-xl bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-zinc-300"'
  },
  {
    file: 'Pillar2Expansion.tsx',
    oldStr: 'className="p-5 border border-zinc-200 rounded-xl bg-white shadow-sm"',
    newStr: 'className="p-5 border border-zinc-200 rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-zinc-300"'
  },
  {
    file: 'Pillar2Expansion.tsx',
    oldStr: 'className="relative p-6 border border-zinc-200 rounded-xl bg-white shadow-sm overflow-hidden"',
    newStr: 'className="relative p-6 border border-zinc-200 rounded-xl bg-white shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-zinc-300"'
  },
  {
    file: 'Pillar4Conversion.tsx',
    oldStr: 'className="mt-4 p-4 border border-zinc-200 rounded-lg bg-white"',
    newStr: 'className="mt-4 p-4 border border-zinc-200 rounded-lg bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-zinc-300"'
  },
  {
    file: 'Roadmap.tsx',
    oldStr: 'className="p-4 border border-zinc-200 rounded-xl bg-white shadow-sm"',
    newStr: 'className="p-4 border border-zinc-200 rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-zinc-300"'
  },
  {
    file: 'Roadmap.tsx',
    oldStr: 'className="p-4 border border-zinc-200 rounded-xl bg-white shadow-sm sm:col-span-2"',
    newStr: 'className="p-4 border border-zinc-200 rounded-xl bg-white shadow-sm sm:col-span-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-zinc-300"'
  },
  {
    file: 'Roadmap.tsx',
    oldStr: 'className="p-4 border border-[#ED0000]/20 rounded-xl bg-[#ED0000]/5 shadow-sm"',
    newStr: 'className="p-4 border border-[#ED0000]/20 rounded-xl bg-[#ED0000]/5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"'
  },
  {
    file: 'KPIs.tsx',
    oldStr: 'className="p-8 bg-zinc-900 rounded-2xl text-white shadow-xl relative overflow-hidden"',
    newStr: 'className="p-8 bg-zinc-900 rounded-2xl text-white shadow-xl relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"'
  },
  {
    file: 'KPIs.tsx',
    oldStr: 'className="p-6 border border-zinc-200 rounded-xl bg-white shadow-sm flex items-start gap-4"',
    newStr: 'className="p-6 border border-zinc-200 rounded-xl bg-white shadow-sm flex items-start gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-zinc-300 group"'
  },
  {
    file: 'KPIs.tsx',
    oldStr: 'className="w-12 h-12 rounded-xl bg-zinc-100 flex items-center justify-center shrink-0"',
    newStr: 'className="w-12 h-12 rounded-xl bg-zinc-100 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-[#ED0000]/10 group-hover:text-[#ED0000]"'
  },
  {
    file: 'WhyMe.tsx',
    oldStr: 'className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm"',
    newStr: 'className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-zinc-300"'
  },
  {
    file: 'WhyMe.tsx',
    oldStr: 'className="p-8 bg-zinc-900 text-white rounded-xl shadow-xl h-full flex flex-col justify-center"',
    newStr: 'className="p-8 bg-zinc-900 text-white rounded-xl shadow-xl h-full flex flex-col justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"'
  }
];

replacements.forEach(({ file, oldStr, newStr }) => {
  const filePath = path.join(dir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    // Use split/join to replace all occurrences
    content = content.split(oldStr).join(newStr);
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file}`);
  }
});

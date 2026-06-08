"use client";

import { CheckCircle2, Mail, Phone, Link as LinkIcon } from "lucide-react";

export function WhyMe() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900" suppressHydrationWarning>Why Me?</h2>
        <p className="mt-4 text-zinc-500 text-lg">
          Why I am the right person to do this.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 flex flex-col">
          <div className="flex-1 p-8 bg-zinc-50 border border-zinc-200 rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <h3 className="text-xl font-semibold text-zinc-900 mb-6">What I Bring to the Table</h3>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <div className="mt-1 shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-[#ED0000]" />
                </div>
                <div>
                  <span className="font-bold text-zinc-900 text-base">Focus on Real Results</span>
                  <p className="text-sm text-zinc-600 mt-2 leading-relaxed">I care about making the company money, not just making charts look pretty. Every technical change I make is meant to drive sales.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="mt-1 shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-[#ED0000]" />
                </div>
                <div>
                  <span className="font-bold text-zinc-900 text-base">I Know the Market</span>
                  <p className="text-sm text-zinc-600 mt-2 leading-relaxed">I know exactly how UK customers think and search. I know how to speak to them to get them to buy.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="mt-1 shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-[#ED0000]" />
                </div>
                <div>
                  <span className="font-bold text-zinc-900 text-base">Experience with Big Sites</span>
                  <p className="text-sm text-zinc-600 mt-2 leading-relaxed">I have worked with massive websites before. I know how to manage huge product catalogs without breaking things.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col">
          <div className="p-8 bg-zinc-900 text-white rounded-2xl shadow-xl h-full flex flex-col justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <div className="space-y-6">
              <a href="mailto:work.polina.ivanova@gmail.com" className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#ED0000]/20 group-hover:text-[#ED0000] transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-medium text-sm break-all">work.polina.ivanova@gmail.com</span>
              </a>
              
              <a href="tel:+447918329441" className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#ED0000]/20 group-hover:text-[#ED0000] transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="font-medium text-sm whitespace-nowrap">+44 79 1832 9441</span>
              </a>
              
              <a href="https://www.linkedin.com/in/polina-a-ivanova/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#ED0000]/20 group-hover:text-[#ED0000] transition-colors">
                  <LinkIcon className="w-5 h-5" />
                </div>
                <span className="font-medium text-sm break-all">linkedin.com/in/polina-a-ivanova/</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

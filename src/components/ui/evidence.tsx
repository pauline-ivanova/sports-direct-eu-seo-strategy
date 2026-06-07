"use client";

import { Camera, X, ZoomIn } from "lucide-react";
import { useState } from "react";

export function Evidence({ title, description, imageSrc }: { title: string; description: string; imageSrc?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  if (imageSrc) {
    return (
      <>
        <div className="flex flex-col gap-3 w-full mt-4">
          {/* Text is now the primary focus, placed above the image */}
          <div className="space-y-1.5 px-1">
            <h4 className="text-lg font-bold text-zinc-900">{title}</h4>
            {description && (
              <p className="text-sm text-zinc-600 leading-relaxed">
                {description}
              </p>
            )}
          </div>
          
          {/* Image is supplementary evidence */}
          <div 
            className="relative rounded-xl overflow-hidden border border-zinc-200 shadow-sm bg-white group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-zinc-300 mt-2"
            onClick={() => setIsOpen(true)}
          >
            <div className="relative w-full">
              <img 
                src={imageSrc} 
                alt={title} 
                className="w-full h-auto object-contain"
                suppressHydrationWarning
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 bg-white/90 backdrop-blur-sm text-zinc-900 px-3 py-1.5 rounded-full flex items-center gap-2 text-sm font-medium transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-sm">
                  <ZoomIn className="w-4 h-4" />
                  Click to expand
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal / Lightbox */}
        {isOpen && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8 animate-in fade-in duration-200"
            onClick={() => setIsOpen(false)}
          >
            <button 
              className="absolute top-4 right-4 md:top-8 md:right-8 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-10"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
            <div 
              className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={imageSrc} 
                alt={title} 
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              />
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <div className="mt-6 border-2 border-dashed border-zinc-200 bg-zinc-50/50 rounded-xl p-8 flex flex-col items-center justify-center text-center space-y-3 group hover:border-[#ED0000]/30 hover:bg-[#ED0000]/5 transition-colors cursor-pointer">
      <div className="w-12 h-12 bg-white border border-zinc-200 rounded-full flex items-center justify-center shadow-sm group-hover:border-[#ED0000]/30 group-hover:text-[#ED0000] transition-colors">
        <Camera className="w-5 h-5 text-zinc-400 group-hover:text-[#ED0000]" />
      </div>
      <div>
        <div className="font-medium text-zinc-900 text-sm">{title}</div>
        <div className="text-xs text-zinc-500 mt-1 max-w-sm mx-auto">{description}</div>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { ArrowUp, MoreHorizontal } from "lucide-react";
import { motion } from "framer-motion";

const NAV_ITEMS = [
  { id: "introduction", label: "Overview" },
  { id: "core-focus", label: "Focus Areas" },
  { id: "foundation", label: "The Foundation" },
  { id: "market-landscape", label: "Landscape" },
  { id: "market-reality", label: "Insights" },
  { id: "philosophy", label: "Philosophy" },
  { id: "four-pillars", label: "4 Pillars" },
  { id: "pillar-1", label: "Technical" },
  { id: "pillar-2", label: "Expansion" },
  { id: "pillar-3", label: "International" },
  { id: "pillar-4", label: "Conversion" },
  { id: "roadmap", label: "Roadmap" },
  { id: "kpis", label: "KPIs" },
  { id: "why-me", label: "Why Me?" },
];

export function Sidebar() {
  const [activeSection, setActiveSection] = useState("introduction");
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const [leftMenuOpen, setLeftMenuOpen] = useState(false);
  const [rightMenuOpen, setRightMenuOpen] = useState(false);
  const leftMenuRef = useRef<HTMLDivElement>(null);
  const rightMenuRef = useRef<HTMLDivElement>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll mobile nav to active item
    if (mobileNavRef.current) {
      const activeEl = document.getElementById(`nav-mobile-${activeSection}`);
      if (activeEl) {
        const container = mobileNavRef.current;
        const scrollLeft = activeEl.offsetLeft - container.offsetWidth / 2 + activeEl.offsetWidth / 2;
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      }
    }
  }, [activeSection]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (leftMenuRef.current && !leftMenuRef.current.contains(event.target as Node)) {
        setLeftMenuOpen(false);
      }
      if (rightMenuRef.current && !rightMenuRef.current.contains(event.target as Node)) {
        setRightMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const mainEl = document.getElementById("main-scroll");
    if (!mainEl) return;

    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      setScrolled(target.scrollTop > 20);
      
      // Calculate scroll progress percentage
      const scrollHeight = target.scrollHeight - target.clientHeight;
      const progress = scrollHeight > 0 ? (target.scrollTop / scrollHeight) * 100 : 0;
      setScrollProgress(progress);
    };
    mainEl.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { 
        root: mainEl,
        rootMargin: "-20% 0px -40% 0px" 
      }
    );

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      mainEl.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    const mainEl = document.getElementById("main-scroll");
    if (mainEl) {
      mainEl.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNavClick = (id: string) => {
    const target = document.getElementById(id);
    const mainEl = document.getElementById("main-scroll");
    if (target && mainEl) {
      mainEl.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    }
    setLeftMenuOpen(false);
    setRightMenuOpen(false);
  };

  // Calculate which items to show based on active section
  const activeIndex = NAV_ITEMS.findIndex(item => item.id === activeSection);
  
  // We want to show 5 items total: the active one, 2 before, and 2 after
  let startIndex = Math.max(0, activeIndex - 2);
  let endIndex = Math.min(NAV_ITEMS.length - 1, activeIndex + 2);
  
  // Adjust if we're near the beginning or end to always show 5 items (if possible)
  if (endIndex - startIndex < 4) {
    if (startIndex === 0) {
      endIndex = Math.min(NAV_ITEMS.length - 1, startIndex + 4);
    } else if (endIndex === NAV_ITEMS.length - 1) {
      startIndex = Math.max(0, endIndex - 4);
    }
  }

  const visibleItems = NAV_ITEMS.slice(startIndex, endIndex + 1);
  const leftHiddenItems = NAV_ITEMS.slice(0, startIndex);
  const rightHiddenItems = NAV_ITEMS.slice(endIndex + 1);

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 bg-white border-b border-zinc-200 transition-all duration-300",
          scrolled ? "shadow-sm py-2 md:py-3" : "py-3 md:py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between gap-4 md:gap-0">
          <div className="flex-shrink-0 flex items-center gap-4 md:border-r border-zinc-200 md:pr-6 md:w-[180px]">
            <Image 
              src="/Sports-Direct-2020.svg" 
              alt="Sports Direct Logo" 
              width={120} 
              height={24} 
              className="w-auto h-5 md:h-6 object-contain"
            />
          </div>
          
          <nav ref={mobileNavRef} className="flex-1 flex justify-start md:justify-center overflow-x-auto scrollbar-hide relative">
            <div className="flex items-center gap-1 sm:gap-2 min-w-max">
              {/* Desktop Left Menu Button */}
              <div className="hidden md:block">
                {startIndex > 0 && (
                  <div className="relative" ref={leftMenuRef}>
                    <button
                      onClick={() => setLeftMenuOpen(!leftMenuOpen)}
                      className={cn(
                        "p-2 text-zinc-400 hover:text-zinc-900 transition-colors rounded-full hover:bg-zinc-100 flex items-center justify-center",
                        leftMenuOpen && "bg-zinc-100 text-zinc-900"
                      )}
                      aria-label="Previous sections"
                    >
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                    {leftMenuOpen && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-zinc-200 py-2 flex flex-col gap-1 z-50">
                        {leftHiddenItems.map((item) => (
                          <a
                            key={item.id}
                            href={`#${item.id}`}
                            onClick={(e) => {
                              e.preventDefault();
                              handleNavClick(item.id);
                            }}
                            className="px-4 py-2 text-[13px] font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-all text-left mx-2 rounded-md"
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
              
              {/* Mobile: Show all items. Desktop: Show visibleItems */}
              <div className="flex md:hidden items-center gap-1">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      id={`nav-mobile-${item.id}`}
                      key={`mobile-${item.id}`}
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.id);
                      }}
                      className={cn(
                        "relative px-3 py-1.5 text-[12px] font-medium rounded-full transition-colors whitespace-nowrap duration-300",
                        isActive
                          ? "text-white"
                          : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100"
                      )}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeNavBackgroundMobile"
                          className="absolute inset-0 bg-zinc-900 rounded-full shadow-sm"
                          initial={false}
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                      <span className="relative z-10">{item.label}</span>
                    </a>
                  );
                })}
              </div>

              <div className="hidden md:flex items-center gap-1 sm:gap-2">
                {visibleItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      id={`nav-${item.id}`}
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.id);
                      }}
                      className={cn(
                        "relative px-3 sm:px-4 py-2 text-[13px] font-medium rounded-full transition-colors whitespace-nowrap duration-300",
                        isActive
                          ? "text-white"
                          : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100"
                      )}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeNavBackground"
                          className="absolute inset-0 bg-zinc-900 rounded-full shadow-sm"
                          initial={false}
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                      <span className="relative z-10">{item.label}</span>
                    </a>
                  );
                })}
              </div>

              {/* Desktop Right Menu Button */}
              <div className="hidden md:block">
                {endIndex < NAV_ITEMS.length - 1 && (
                  <div className="relative" ref={rightMenuRef}>
                    <button
                      onClick={() => setRightMenuOpen(!rightMenuOpen)}
                      className={cn(
                        "p-2 text-zinc-400 hover:text-zinc-900 transition-colors rounded-full hover:bg-zinc-100 flex items-center justify-center",
                        rightMenuOpen && "bg-zinc-100 text-zinc-900"
                      )}
                      aria-label="Next sections"
                    >
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                    {rightMenuOpen && (
                      <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-zinc-200 py-2 flex flex-col gap-1 z-50">
                        {rightHiddenItems.map((item) => (
                          <a
                            key={item.id}
                            href={`#${item.id}`}
                            onClick={(e) => {
                              e.preventDefault();
                              handleNavClick(item.id);
                            }}
                            className="px-4 py-2 text-[13px] font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-all text-left mx-2 rounded-md"
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </nav>

          {/* Spacer to perfectly center the nav relative to the logo */}
          <div className="w-[180px] hidden lg:block"></div>
        </div>

        {/* Reading Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-transparent z-50">
          <div 
            className="h-full bg-[#ED0000] transition-all duration-75 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </header>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={cn(
          "p-3 rounded-full bg-zinc-900 text-white shadow-xl transition-all duration-300 hover:bg-[#ED0000] hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#ED0000] focus:ring-offset-2 flex items-center justify-center",
          scrolled ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0 pointer-events-none"
        )}
        style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 9999 }}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </>
  );
}

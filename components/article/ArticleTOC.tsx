"use client";

import { useState, useEffect } from "react";
import { List } from "lucide-react";

interface TOCItem {
  id: string;
  title: string;
}

interface ArticleTOCProps {
  items: TOCItem[];
}

export function ArticleTOC({ items }: ArticleTOCProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id || "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0% -60% 0%" }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav className="space-y-3 font-sans-ui text-xs">
      <div className="flex items-center gap-2 font-mono-meta text-[11px] uppercase tracking-wider text-[#697480] font-semibold pb-2 border-b border-[#16324F]/10">
        <List className="w-3.5 h-3.5 text-[#B99A5E]" />
        <span>Table of Contents</span>
      </div>

      <ul className="space-y-1.5">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className={`block py-1 px-2.5 rounded transition-all leading-snug ${
                  isActive
                    ? "bg-[#16324F] text-white font-semibold shadow-2xs translate-x-1"
                    : "text-[#697480] hover:text-[#16324F] hover:bg-[#16324F]/05"
                }`}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

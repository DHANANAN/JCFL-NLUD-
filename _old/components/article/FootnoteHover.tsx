"use client";

import { useState } from "react";

interface FootnoteHoverProps {
  id: number;
  text: string;
}

export function FootnoteHover({ id, text }: FootnoteHoverProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById(`fn-${id}`);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
      target.classList.add("bg-[#B99A5E]/15");
      setTimeout(() => {
        target.classList.remove("bg-[#B99A5E]/15");
      }, 2000);
    }
  };

  return (
    <span
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        id={`fnref-${id}`}
        href={`#fn-${id}`}
        onClick={handleClick}
        className="footnote-ref select-none"
        aria-describedby={`fn-tooltip-${id}`}
      >
        [{id}]
      </a>

      {isHovered && (
        <span
          id={`fn-tooltip-${id}`}
          role="tooltip"
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 sm:w-80 p-3 rounded-md bg-[#0B1927] text-white text-xs font-serif-display leading-relaxed shadow-xl z-30 pointer-events-none animate-in fade-in zoom-in-95 duration-150 border border-[#B99A5E]/40"
        >
          <span className="font-mono-meta font-bold text-[#B99A5E] mr-1.5">[{id}]</span>
          {text}
        </span>
      )}
    </span>
  );
}

export function FootnoteItem({ id, text }: FootnoteHoverProps) {
  const handleReturn = (e: React.MouseEvent) => {
    e.preventDefault();
    const ref = document.getElementById(`fnref-${id}`);
    if (ref) {
      ref.scrollIntoView({ behavior: "smooth", block: "center" });
      ref.focus();
    }
  };

  return (
    <li
      id={`fn-${id}`}
      className="flex items-start gap-2.5 py-2 text-xs sm:text-sm font-serif-display leading-relaxed text-[#202832]/85 transition-colors rounded p-1"
    >
      <span className="font-mono-meta font-bold text-[#B99A5E] shrink-0 mt-0.5">
        [{id}]
      </span>
      <div className="flex-1">
        <span>{text}</span>{" "}
        <a
          href={`#fnref-${id}`}
          onClick={handleReturn}
          className="inline-block text-[#537C78] hover:text-[#16324F] font-mono-meta ml-1 hover:underline select-none"
          title="Return to reading text"
          aria-label={`Return to footnote ${id} reference`}
        >
          ↩
        </a>
      </div>
    </li>
  );
}

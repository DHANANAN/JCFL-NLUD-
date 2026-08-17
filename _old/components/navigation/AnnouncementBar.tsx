"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Landmark } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="bg-[#16324F] text-[#F8F7F2] py-2 px-4 border-b border-[#B99A5E]/30 text-xs font-sans-ui tracking-wide">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
          <span className="inline-flex items-center gap-1.5 font-bold text-[#B99A5E]">
            <Sparkles className="w-3.5 h-3.5 text-[#B99A5E]" />
            NLU DELHI · INAUGURAL EDITION
          </span>
          <span className="text-[#F8F7F2]/40">·</span>
          <span className="text-[#F8F7F2]/90 hidden sm:inline font-light">
            Journal of Corporate and Financial Laws (Volume 1 · Issue 1, 2026)
          </span>
        </div>
        <Link
          href="/submission-guidelines"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B99A5E] hover:text-[#F8F7F2] transition-colors group shrink-0 pl-3"
        >
          <span>Call for Papers &amp; Submissions</span>
          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}

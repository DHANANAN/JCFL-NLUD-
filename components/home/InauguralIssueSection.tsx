"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Download, Layers, ShieldCheck, Sparkles } from "lucide-react";
import { currentIssue } from "@/lib/data/issues";

export function InauguralIssueSection() {
  return (
    <section className="py-16 lg:py-24 bg-white border-b border-[#16324F]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-4 h-4 text-[#B99A5E]" />
          <span className="font-mono-meta text-xs uppercase tracking-widest text-[#B99A5E] font-semibold">
            Inaugural Edition
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: 3D Collectible Cover Mockup (5 cols) */}
          <div className="lg:col-span-5 flex justify-center perspective-1000">
            <div className="relative w-full max-w-[340px] aspect-[1/1.42] rounded-lg bg-[#16324F] p-8 text-white journal-cover-3d flex flex-col justify-between border-2 border-[#B99A5E]/40 overflow-hidden select-none">
              {/* Inner Decorative Editorial Borders */}
              <div className="absolute inset-2 border border-[#B99A5E]/30 rounded pointer-events-none" />
              <div className="absolute inset-3 border border-white/10 rounded pointer-events-none" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-radial from-[#B99A5E]/20 to-transparent pointer-events-none" />

              {/* Cover Header */}
              <div className="relative z-10 space-y-2">
                <div className="flex items-center justify-between border-b border-[#B99A5E]/30 pb-2.5">
                  <span className="font-mono-meta text-[10px] text-[#B99A5E] uppercase tracking-widest font-semibold">
                    VOL. 1 · ISSUE 1
                  </span>
                  <span className="font-mono-meta text-[10px] text-white/70 uppercase tracking-widest">
                    2026
                  </span>
                </div>

                <div className="pt-2">
                  <div className="text-[10px] text-[#B99A5E] tracking-widest uppercase font-mono-meta">
                    INAUGURAL PUBLICATION
                  </div>
                  <h3 className="font-serif-display text-xl sm:text-2xl font-bold tracking-tight text-white leading-tight mt-1">
                    Journal of Corporate &amp; Financial Laws
                  </h3>
                </div>
              </div>

              {/* Center Seal */}
              <div className="relative z-10 flex flex-col items-center justify-center my-auto py-6">
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-[#B99A5E] bg-[#0B1927] shadow-xl">
                  <Image
                    src="/assets/images/cclgfl-logo.jpg"
                    alt="CCLGFL Seal"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="font-serif-display text-xs text-[#B99A5E] tracking-wider mt-3 text-center uppercase font-medium">
                  The Architecture of Law &amp; Capital
                </div>
              </div>

              {/* Cover Footer */}
              <div className="relative z-10 border-t border-[#B99A5E]/30 pt-3">
                <div className="font-sans-ui text-[9px] uppercase tracking-wider text-white/80 font-medium leading-tight text-center">
                  Centre for Corporate Law, Governance &amp; Financial Laws
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Overview & Details (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-block font-mono-meta text-xs text-[#537C78] font-semibold uppercase tracking-wider mb-2">
                Volume 1 · Issue 1 (2026)
              </div>
              <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#16324F] leading-tight">
                Corporate Law for a Dynamic Financial Architecture
              </h2>
            </div>

            <p className="text-[#202832]/85 text-base sm:text-lg font-sans-ui leading-relaxed font-light">
              The inaugural edition of the Journal of Corporate and Financial Laws convenes doctrinal and empirical scholarship on emerging corporate governance frontiers, algorithmic financial markets, cross-border restructuring, and sustainable capital allocation.
            </p>

            {/* Issue Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-3 border-y border-[#16324F]/10 font-sans-ui text-sm">
              <div>
                <div className="text-xs text-[#697480] font-mono-meta">Published Articles</div>
                <div className="text-lg font-bold text-[#16324F] font-serif-display">6 Contributions</div>
              </div>
              <div>
                <div className="text-xs text-[#697480] font-mono-meta">Publication Status</div>
                <div className="text-sm font-semibold text-[#537C78] mt-1 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#537C78]" />
                  Inaugural Issue
                </div>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <div className="text-xs text-[#697480] font-mono-meta">Access Model</div>
                <div className="text-sm font-semibold text-[#16324F] mt-1">Open Access / PDF</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/publications"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#16324F] text-[#F8F7F2] font-sans-ui text-sm font-semibold hover:bg-[#0D1F31] transition-colors shadow-xs group"
              >
                <BookOpen className="w-4 h-4 text-[#B99A5E]" />
                <span>Explore Inaugural Issue</span>
                <ArrowRight className="w-4 h-4 text-[#B99A5E] group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/publications/archive"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-[#16324F]/20 text-[#16324F] font-sans-ui text-sm font-semibold hover:bg-[#F8F7F2] transition-colors shadow-2xs"
              >
                <Layers className="w-4 h-4 text-[#697480]" />
                <span>Journal Archive</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

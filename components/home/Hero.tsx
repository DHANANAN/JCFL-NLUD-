"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, FileCheck, ShieldCheck } from "lucide-react";
import { GovernanceNetworkCanvas } from "./GovernanceNetworkCanvas";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#16324F]/10">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-governance-grid opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-6 lg:space-y-8">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#16324F]/15 bg-white/60 text-[#16324F] font-mono-meta text-[11px] uppercase tracking-widest font-semibold shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B99A5E] animate-pulse" />
              Centre for Corporate Law, Governance & Financial Laws
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#16324F] tracking-tight leading-[1.08]">
              Journal of <br />
              <span className="text-[#16324F] italic font-normal">Corporate &amp;</span> <br />
              Financial Laws
            </h1>

            {/* Supporting Copy */}
            <p className="text-[#202832]/85 text-base sm:text-lg lg:text-xl font-sans-ui leading-relaxed max-w-2xl font-light">
              A scholarly platform dedicated to rigorous research and contemporary discourse across corporate law, governance, financial regulation, and allied areas of commercial law.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/publications"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-[#16324F] text-[#F8F7F2] font-sans-ui text-sm font-semibold hover:bg-[#0D1F31] hover:shadow-lg transition-all duration-200 group"
              >
                <BookOpen className="w-4 h-4 text-[#B99A5E]" />
                <span>Explore Publications</span>
                <ArrowRight className="w-4 h-4 text-[#B99A5E] group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/submission-guidelines"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-md border border-[#16324F]/20 bg-white/80 hover:bg-white text-[#16324F] font-sans-ui text-sm font-semibold transition-all duration-200 shadow-2xs hover:border-[#16324F]/40"
              >
                <FileCheck className="w-4 h-4 text-[#537C78]" />
                <span>Submission Guidelines</span>
              </Link>
            </div>

            {/* Institutional Metadata Badges */}
            <div className="pt-4 border-t border-[#16324F]/10 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#697480] font-mono-meta">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#537C78]" />
                <span>Inaugural Volume 1 (2026)</span>
              </div>
              <span className="text-[#16324F]/20">·</span>
              <div>Double-Blind Review Model</div>
              <span className="text-[#16324F]/20">·</span>
              <div>Open Access Dissemination</div>
            </div>
          </div>

          {/* Right Column: Signature Governance Network (5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="w-full relative rounded-2xl bg-gradient-to-b from-white/80 to-[#F8F7F2]/40 border border-[#16324F]/12 p-4 shadow-sm backdrop-blur-xs">
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-[#16324F]/08 text-xs font-mono-meta text-[#697480]">
                <div className="flex items-center gap-1.5 font-medium text-[#16324F]">
                  <span className="w-2 h-2 rounded-full bg-[#537C78]" />
                  GOVERNANCE NETWORK
                </div>
                <span className="text-[10px] bg-[#16324F]/05 px-2 py-0.5 rounded border border-[#16324F]/10">
                  LAW × GOVERNANCE × CAPITAL
                </span>
              </div>

              {/* Interactive Canvas Canvas */}
              <GovernanceNetworkCanvas />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

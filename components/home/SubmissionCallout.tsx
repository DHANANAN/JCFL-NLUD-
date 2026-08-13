"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, FileCheck, Sparkles } from "lucide-react";

export function SubmissionCallout() {
  return (
    <section className="py-16 lg:py-24 bg-[#16324F] text-[#F8F7F2] relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-governance-grid-dark opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#B99A5E]/40 bg-white/5 text-xs font-mono-meta text-[#B99A5E]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CALL FOR PAPERS · ROLLING SUBMISSIONS</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Contribute to the conversation.
          </h2>

          <p className="text-sm sm:text-base text-[#F8F7F2]/80 font-sans-ui leading-relaxed font-light">
            We invite legal scholars, judiciary members, regulators, corporate practitioners, doctoral candidates, and law students to submit unpublished manuscripts across corporate law, securities regulation, insolvency, and digital finance.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/submission-guidelines"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-[#B99A5E] text-[#0B1927] font-sans-ui text-sm font-bold hover:bg-[#d4b476] transition-all shadow-md group"
            >
              <FileCheck className="w-4 h-4" />
              <span>Read Submission Guidelines</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/submission-guidelines#checklist"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md border border-white/20 hover:bg-white/10 text-white font-sans-ui text-sm font-semibold transition-all"
            >
              <CheckCircle2 className="w-4 h-4 text-[#B99A5E]" />
              <span>Author Checklist</span>
            </Link>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-[#F8F7F2]/60 font-mono-meta">
            <div>Bluebook (21st Ed.) Citations</div>
            <span>·</span>
            <div>Double-Blind Peer Review</div>
            <span>·</span>
            <div>No Publication Fees (Open Access)</div>
          </div>
        </div>
      </div>
    </section>
  );
}

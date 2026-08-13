"use client";

import Link from "next/link";
import { ArrowRight, Quote, Users } from "lucide-react";

export function EditorialDeskNote() {
  return (
    <section className="py-16 lg:py-24 bg-white border-b border-[#16324F]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-[#F8F7F2] p-8 sm:p-12 border border-[#16324F]/10 shadow-xs">
          <Quote className="w-10 h-10 text-[#B99A5E]/40 mb-4" />

          <div className="font-mono-meta text-xs uppercase tracking-widest text-[#537C78] font-semibold mb-2">
            Inaugural Editorial Address
          </div>

          <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#16324F] leading-tight mb-6">
            Bridging Doctrinal Rigor and Financial Architecture
          </h2>

          <div className="space-y-4 text-[#202832]/85 text-sm sm:text-base font-sans-ui leading-relaxed font-light">
            <p>
              The launch of the Journal of Corporate and Financial Laws marks a foundational step in establishing a dedicated institutional platform for critical legal inquiry into corporate governance, capital market operations, and financial stability.
            </p>
            <p>
              As corporations navigate transformative shifts—from artificial intelligence in the boardroom and fractional securities tokenization to cross-border debt resolution and ESG reporting mandates—legal academia must provide analytical precision and principled guidance.
            </p>
            <p>
              We express our profound gratitude to our patron leadership, faculty advisors, peer reviewers, and contributing scholars for their stewardship in presenting this inaugural volume.
            </p>
          </div>

          {/* Signature Block */}
          <div className="mt-8 pt-6 border-t border-[#16324F]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="font-serif-display font-bold text-[#16324F] text-base">
                [INSERT EDITOR-IN-CHIEF NAME]
              </div>
              <div className="text-xs text-[#697480] font-mono-meta mt-0.5">
                Editor-in-Chief · Journal of Corporate and Financial Laws
              </div>
            </div>

            <Link
              href="/about/editorial-board"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#16324F] hover:text-[#B99A5E] transition-colors group"
            >
              <Users className="w-4 h-4 text-[#537C78]" />
              <span>Meet the Full Editorial Board</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

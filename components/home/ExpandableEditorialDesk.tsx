"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Quote, Users, Maximize2, X, Sparkles } from "lucide-react";
import { FadeIn } from "@/components/motion/MotionWrapper";

export function ExpandableEditorialDesk() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <section className="py-20 lg:py-28 bg-white border-b border-[#16324F]/10 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="relative rounded-2xl bg-[#F8F7F2] p-8 sm:p-12 lg:p-14 border border-[#16324F]/10 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <Quote className="w-10 h-10 text-[#B99A5E]/50" />
                <button
                  onClick={() => setIsExpanded(true)}
                  className="inline-flex items-center gap-1 text-xs font-mono-meta text-[#537C78] hover:text-[#16324F] transition-colors py-1 px-2.5 rounded bg-white border border-[#16324F]/10"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Expand Address</span>
                </button>
              </div>

              <div className="font-mono-meta text-xs uppercase tracking-widest text-[#537C78] font-bold mb-2">
                Inaugural Editorial Address · NLU Delhi
              </div>

              <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#16324F] leading-tight mb-6">
                Bridging Doctrinal Rigor and Financial Architecture
              </h2>

              <div className="space-y-4 text-[#202832]/85 text-sm sm:text-base font-sans-ui leading-relaxed font-light">
                <p>
                  The launch of the Journal of Corporate and Financial Laws (JCFL) at National Law University Delhi marks a foundational milestone in establishing a dedicated institutional platform for critical legal inquiry into corporate governance, capital market operations, and financial stability.
                </p>
                <p>
                  As corporations navigate transformative shifts—from artificial intelligence in boardrooms and fractional securities tokenization to cross-border debt resolution under UNCITRAL and BRSR reporting mandates—legal academia must provide analytical precision and principled guidance.
                </p>
              </div>

              {/* Signature Block */}
              <div className="mt-8 pt-6 border-t border-[#16324F]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="font-serif-display font-bold text-[#16324F] text-base sm:text-lg">
                    [INSERT EDITOR-IN-CHIEF NAME]
                  </div>
                  <div className="text-xs text-[#697480] font-mono-meta mt-0.5">
                    Editor-in-Chief · Journal of Corporate and Financial Laws
                  </div>
                  <div className="text-[11px] text-[#537C78] font-mono-meta">
                    Centre for Corporate Law, Governance &amp; Financial Laws, NLU Delhi
                  </div>
                </div>

                <Link
                  href="/about/editorial-board"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#16324F] hover:text-[#B99A5E] transition-colors group"
                >
                  <Users className="w-4 h-4 text-[#537C78]" />
                  <span>Meet the Full Editorial Board</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Expanded Address Modal */}
      {isExpanded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1927]/70 backdrop-blur-xs animate-in fade-in duration-150">
          <div
            className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-[#16324F]/15 overflow-hidden flex flex-col max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b border-[#16324F]/10 bg-[#F8F7F2]">
              <div>
                <div className="text-xs font-mono-meta text-[#B99A5E] font-bold uppercase tracking-wider">
                  Complete Editorial Address
                </div>
                <h3 className="font-serif-display font-bold text-xl text-[#16324F]">
                  Inaugural Address by the Editor-in-Chief
                </h3>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="p-1.5 rounded-lg text-[#697480] hover:text-[#16324F] hover:bg-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-8 overflow-y-auto space-y-4 text-sm font-serif-display leading-relaxed text-[#202832]/90">
              <p>
                Welcome to the inaugural edition of the Journal of Corporate and Financial Laws, an academic initiative of the Centre for Corporate Law, Governance &amp; Financial Laws at National Law University Delhi.
              </p>
              <p>
                Modern corporate jurisprudence can no longer remain siloed from the realities of financial engineering, macroeconomic volatility, and computational regulation. Our inaugural issue directly addresses the friction between legacy statutory doctrines and modern capital architectures.
              </p>
              <p>
                We invite legal academicians, judiciary members, corporate practitioners, regulators, and research scholars to join this ongoing scholarly dialogue, submitting their most incisive work to our forthcoming issues.
              </p>
              <div className="pt-6 border-t border-[#16324F]/10">
                <div className="font-bold text-[#16324F]">[INSERT EDITOR-IN-CHIEF NAME]</div>
                <div className="text-xs text-[#697480] font-sans-ui">Editor-in-Chief, JCFL</div>
                <div className="text-xs text-[#537C78] font-sans-ui">National Law University Delhi</div>
              </div>
            </div>

            <div className="p-4 bg-[#F8F7F2] border-t border-[#16324F]/10 flex justify-end">
              <button
                onClick={() => setIsExpanded(false)}
                className="px-4 py-2 rounded-md bg-[#16324F] text-white text-xs font-semibold hover:bg-[#0D1F31]"
              >
                Close Address
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

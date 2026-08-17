"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BookOpen, Sparkles, List, X, ChevronDown } from "lucide-react";
import { publications } from "@/lib/data/publications";
import { FadeIn } from "@/components/motion/MotionWrapper";

export function InauguralIssueSection() {
  const [coverTilt, setCoverTilt] = useState({ x: 0, y: -4 });
  const [glare, setGlare] = useState({ x: 50, y: 50 });
  const [showTOC, setShowTOC] = useState(false);

  return (
    <section className="relative py-28 lg:py-36 overflow-hidden">
      {/* Background — warm parchment */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FAF9F4] via-[#F5F1E8] to-[#F0EAD8]" />

      {/* Decorative large circle watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-[#B8943F]/10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[#B8943F]/08 pointer-events-none" />

      {/* SVG ornamental bracket — top */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 opacity-15 pointer-events-none">
        <svg viewBox="0 0 200 30" className="w-48 h-8" fill="none">
          <path d="M0,15 Q50,0 100,15 Q150,30 200,15" stroke="#B8943F" strokeWidth="1.5"/>
          <circle cx="100" cy="15" r="3" fill="#B8943F"/>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* ── Left: 3D Collectible Cover (4 cols) ── */}
          <div className="lg:col-span-4 flex flex-col items-center gap-5">
            <FadeIn direction="up">
              <div className="perspective-1200">
                {/* The cover card */}
                <div
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    setCoverTilt({
                      x: ((y - rect.height / 2) / rect.height) * -14,
                      y: ((x - rect.width / 2) / rect.width) * 14,
                    });
                    setGlare({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
                  }}
                  onMouseLeave={() => { setCoverTilt({ x: 0, y: -4 }); }}
                  style={{
                    transform: `perspective(1200px) rotateX(${coverTilt.x}deg) rotateY(${coverTilt.y}deg)`,
                    transition: "transform 0.12s ease-out",
                    transformStyle: "preserve-3d",
                  }}
                  className="relative w-[280px] sm:w-[300px] aspect-[1/1.45] rounded-2xl bg-[#16324F] cursor-pointer overflow-hidden shadow-[0_40px_80px_-20px_rgba(22,50,79,0.5)] group"
                >
                  {/* Foil glare layer */}
                  <div
                    className="absolute inset-0 pointer-events-none z-20 transition-opacity duration-200 group-hover:opacity-100 opacity-60"
                    style={{
                      background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,240,190,0.45) 0%, rgba(184,148,63,0.15) 35%, transparent 65%)`,
                    }}
                  />

                  {/* Gold border inset */}
                  <div className="absolute inset-2.5 border border-[#B8943F]/50 rounded-xl z-10 pointer-events-none" />
                  <div className="absolute inset-4 border border-white/10 rounded-lg z-10 pointer-events-none" />

                  {/* Bookmark ribbon */}
                  <div className="absolute top-0 right-8 z-30 w-6">
                    <div className="bg-[#B8943F] h-12 w-6 flex justify-center items-end pb-1.5 shadow-lg">
                      <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[8px] border-t-[#16324F]" />
                    </div>
                  </div>

                  {/* Cover content */}
                  <div className="relative z-10 h-full flex flex-col justify-between p-7">
                    {/* Top label */}
                    <div>
                      <div className="flex items-center justify-between border-b border-[#B8943F]/30 pb-2.5">
                        <span className="text-[9px] font-mono-meta text-[#B8943F] uppercase tracking-[0.2em] font-bold">VOL. 1 · ISSUE 1</span>
                        <span className="text-[9px] font-mono-meta text-white/70">2026</span>
                      </div>
                      <div className="mt-3">
                        <p className="text-[8px] font-mono-meta text-[#B8943F] uppercase tracking-widest">INAUGURAL EDITION</p>
                        <h3 className="font-display text-xl font-black text-white mt-1 leading-tight">
                          Journal of Corporate &amp; Financial Laws
                        </h3>
                      </div>
                    </div>

                    {/* Centre seal */}
                    <div className="flex flex-col items-center gap-3">
                      <div className="relative w-20 h-20 rounded-full border-2 border-[#B8943F] overflow-hidden shadow-xl bg-[#0B1927]">
                        <Image src="/assets/images/cclgfl-logo.jpg" alt="CCLGFL Seal" fill className="object-cover" />
                      </div>
                      <p className="text-[9px] font-mono-meta text-[#B8943F]/90 text-center uppercase tracking-widest">
                        The Architecture of Law &amp; Capital
                      </p>
                    </div>

                    {/* Bottom publisher */}
                    <div className="border-t border-[#B8943F]/30 pt-2.5 text-center">
                      <p className="text-[8px] font-sans-ui text-white/80 uppercase tracking-[0.12em] leading-tight">
                        Centre for Corporate Law, Governance &amp; Financial Laws · NLU Delhi
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* TOC toggle */}
              <button
                onClick={() => setShowTOC(!showTOC)}
                className="mt-4 inline-flex items-center gap-2 text-xs font-sans-ui font-semibold text-[#6B7A8D] hover:text-[#16324F] transition-colors px-4 py-2 rounded-full bg-white/70 border border-[#16324F]/10 hover:border-[#16324F]/25"
              >
                <List className="w-3.5 h-3.5 text-[#3D7068]" />
                {showTOC ? "Hide Contents" : "Table of Contents"}
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showTOC ? "rotate-180" : ""}`} />
              </button>
            </FadeIn>
          </div>

          {/* ── Right: Editorial info (8 cols) ── */}
          <div className="lg:col-span-8 space-y-8">
            <FadeIn direction="up" delay={0.1}>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-px bg-[#B8943F]" />
                  <span className="text-xs font-mono-meta text-[#B8943F] uppercase tracking-[0.2em] font-semibold">Collectible Inaugural Edition</span>
                </div>
                <h2 className="font-display text-4xl sm:text-5xl font-black text-[#16324F] leading-tight">
                  Corporate Law for a Dynamic Financial Architecture
                </h2>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <p className="font-editorial text-[#3A4A5C] text-lg leading-relaxed">
                The maiden edition convenes foundational doctrinal and empirical scholarship on algorithmic boardrooms, cross-border insolvency under UNCITRAL, fractional securities tokenization, and BRSR sustainability obligations.
              </p>
            </FadeIn>

            {/* Stats row */}
            <FadeIn direction="up" delay={0.25}>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { n: "6", label: "Peer-Reviewed Articles" },
                  { n: "2026", label: "Inaugural Year" },
                  { n: "OA", label: "Diamond Open Access" },
                ].map(({ n, label }) => (
                  <div key={label} className="card-warm p-5 text-center">
                    <div className="font-display text-3xl font-black text-[#16324F]">{n}</div>
                    <div className="text-[11px] font-mono-meta text-[#6B7A8D] mt-1 uppercase tracking-[0.12em]">{label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* TOC drawer */}
            <AnimatePresence>
              {showTOC && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="card-soft p-6 space-y-2">
                    <div className="text-xs font-mono-meta text-[#B8943F] uppercase tracking-[0.15em] font-semibold mb-3">
                      Articles in this Issue
                    </div>
                    {publications.map((p, idx) => (
                      <Link key={p.id} href={`/publications/${p.slug}`} className="flex items-center justify-between py-2 border-b border-[#16324F]/06 last:border-0 hover:text-[#B8943F] transition-colors group">
                        <span className="text-sm font-editorial text-[#16324F] group-hover:text-[#B8943F] pr-4">{idx + 1}. {p.title}</span>
                        <span className="text-[10px] font-mono-meta text-[#6B7A8D] shrink-0">pp. {p.startPage}–{p.endPage}</span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <FadeIn direction="up" delay={0.35}>
              <div className="flex flex-wrap gap-4">
                <Link href="/publications" className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#16324F] text-[#FAF9F4] text-sm font-semibold font-sans-ui hover:bg-[#0D1F31] transition-all shadow-lg shadow-[#16324F]/20 hover:-translate-y-0.5">
                  <BookOpen className="w-4 h-4 text-[#B8943F]" />
                  Explore Inaugural Issue
                  <ArrowRight className="w-4 h-4 text-[#B8943F] group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/publications/archive" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#16324F]/20 text-[#16324F] text-sm font-semibold font-sans-ui hover:bg-[#16324F]/05 transition-all">
                  Journal Archive
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

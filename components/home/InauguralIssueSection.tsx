"use client";

import { useState, useRef, MouseEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Download, Layers, Sparkles, ChevronRight, CheckCircle2, List } from "lucide-react";
import { currentIssue } from "@/lib/data/issues";
import { publications } from "@/lib/data/publications";
import { FadeIn } from "@/components/motion/MotionWrapper";

export function InauguralIssueSection() {
  const coverRef = useRef<HTMLDivElement | null>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(-5);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [showTOCDrawer, setShowTOCDrawer] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!coverRef.current) return;
    const rect = coverRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -10;
    const rY = ((x - centerX) / centerX) * 10;

    setRotateX(rX);
    setRotateY(rY);
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(-4);
  };

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-[#16324F]/10 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-[#B99A5E]/05 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-[#B99A5E]" />
            <span className="font-mono-meta text-xs uppercase tracking-widest text-[#B99A5E] font-semibold">
              Collectible Inaugural Edition
            </span>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Interactive 3D Collectible Cover Mockup (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center perspective-1000">
            <div
              ref={coverRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                transformStyle: "preserve-3d",
                transition: "transform 0.15s ease-out, box-shadow 0.2s ease-out",
              }}
              className="relative w-full max-w-[350px] aspect-[1/1.42] rounded-xl bg-[#16324F] p-8 text-white flex flex-col justify-between border-2 border-[#B99A5E]/50 shadow-2xl overflow-hidden select-none cursor-pointer group"
            >
              {/* Dynamic Metallic Glare Sheen Reflection */}
              <div
                className="absolute inset-0 pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(185, 154, 94, 0.45) 0%, transparent 60%)`,
                }}
              />

              {/* Decorative Gold Inset Border */}
              <div className="absolute inset-2.5 border border-[#B99A5E]/40 rounded-lg pointer-events-none" />
              <div className="absolute inset-3.5 border border-white/10 rounded pointer-events-none" />

              {/* Bookmark Ribbon on top right */}
              <div className="absolute top-0 right-7 w-5 h-10 bg-[#B99A5E] shadow-md flex items-end justify-center pb-1">
                <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[6px] border-b-[#16324F]" />
              </div>

              {/* Cover Top Header */}
              <div className="relative z-10 space-y-2">
                <div className="flex items-center justify-between border-b border-[#B99A5E]/30 pb-2.5">
                  <span className="font-mono-meta text-[10px] text-[#B99A5E] uppercase tracking-widest font-bold">
                    VOL. 1 · ISSUE 1
                  </span>
                  <span className="font-mono-meta text-[10px] text-white/80 uppercase tracking-widest">
                    2026
                  </span>
                </div>

                <div className="pt-2">
                  <div className="text-[9px] text-[#B99A5E] tracking-widest uppercase font-mono-meta font-semibold">
                    INAUGURAL SCHOLARSHIP
                  </div>
                  <h3 className="font-serif-display text-2xl font-bold tracking-tight text-white leading-tight mt-1">
                    Journal of Corporate &amp; Financial Laws
                  </h3>
                </div>
              </div>

              {/* Center Institutional Seal */}
              <div className="relative z-10 flex flex-col items-center justify-center my-auto py-6">
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-[#B99A5E] bg-[#0B1927] shadow-2xl group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/assets/images/cclgfl-logo.jpg"
                    alt="CCLGFL Official Seal"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="font-serif-display text-xs text-[#B99A5E] tracking-widest mt-3 text-center uppercase font-medium">
                  The Architecture of Law &amp; Capital
                </div>
              </div>

              {/* Cover Footer */}
              <div className="relative z-10 border-t border-[#B99A5E]/30 pt-3">
                <div className="font-sans-ui text-[10px] uppercase tracking-wider text-white/85 font-semibold leading-tight text-center">
                  Centre for Corporate Law, Governance &amp; Financial Laws
                </div>
              </div>
            </div>

            {/* Quick TOC Toggle Button */}
            <button
              onClick={() => setShowTOCDrawer(!showTOCDrawer)}
              className="mt-4 inline-flex items-center gap-2 text-xs font-mono-meta text-[#16324F] hover:text-[#B99A5E] transition-colors py-1 px-3 rounded-full bg-[#F8F7F2] border border-[#16324F]/10 hover:border-[#B99A5E]"
            >
              <List className="w-3.5 h-3.5 text-[#537C78]" />
              <span>{showTOCDrawer ? "Hide Table of Contents" : "Quick Peek Table of Contents"}</span>
            </button>
          </div>

          {/* Right Column: Editorial Overview & Interactive TOC (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <FadeIn direction="up" delay={0.1}>
              <div className="inline-block font-mono-meta text-xs text-[#537C78] font-bold uppercase tracking-wider mb-2">
                Volume 1 · Issue 1 (2026)
              </div>
              <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#16324F] leading-tight">
                Corporate Law for a Dynamic Financial Architecture
              </h2>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <p className="text-[#202832]/85 text-base sm:text-lg font-sans-ui leading-relaxed font-light">
                The maiden edition of the Journal of Corporate and Financial Laws convenes foundational doctrinal and empirical scholarship on emerging corporate governance frontiers, algorithmic financial markets, cross-border restructuring, and sustainable capital allocation.
              </p>
            </FadeIn>

            {/* Issue Quick Stats */}
            <FadeIn direction="up" delay={0.3}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-4 border-y border-[#16324F]/10 font-sans-ui text-sm">
                <div>
                  <div className="text-xs text-[#697480] font-mono-meta">Published Articles</div>
                  <div className="text-xl font-bold text-[#16324F] font-serif-display">6 Contributions</div>
                </div>
                <div>
                  <div className="text-xs text-[#697480] font-mono-meta">Editorial Status</div>
                  <div className="text-sm font-semibold text-[#537C78] mt-1 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#537C78] animate-pulse" />
                    Inaugural Edition
                  </div>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <div className="text-xs text-[#697480] font-mono-meta">Access Model</div>
                  <div className="text-sm font-semibold text-[#16324F] mt-1">Diamond Open Access</div>
                </div>
              </div>
            </FadeIn>

            {/* Table of Contents Drawer */}
            {showTOCDrawer && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="p-5 rounded-xl bg-[#F8F7F2] border border-[#16324F]/15 space-y-3"
              >
                <div className="text-xs font-mono-meta text-[#16324F] uppercase tracking-wider font-bold">
                  Inaugural Issue Articles:
                </div>
                <div className="space-y-2 text-xs font-sans-ui">
                  {publications.map((p, idx) => (
                    <Link
                      key={p.id}
                      href={`/publications/${p.slug}`}
                      className="flex items-center justify-between p-2 rounded hover:bg-white transition-colors group"
                    >
                      <span className="font-serif-display font-medium text-[#16324F] group-hover:text-[#B99A5E] truncate max-w-[85%]">
                        {idx + 1}. {p.title}
                      </span>
                      <span className="font-mono-meta text-[10px] text-[#697480] shrink-0">
                        pp. {p.startPage}–{p.endPage}
                      </span>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Action Buttons */}
            <FadeIn direction="up" delay={0.4}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/publications"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-[#16324F] text-[#F8F7F2] font-sans-ui text-sm font-semibold hover:bg-[#0D1F31] transition-all shadow-md group"
                >
                  <BookOpen className="w-4 h-4 text-[#B99A5E]" />
                  <span>Explore Inaugural Issue</span>
                  <ArrowRight className="w-4 h-4 text-[#B99A5E] group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/publications/archive"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-md border border-[#16324F]/20 text-[#16324F] font-sans-ui text-sm font-semibold hover:bg-[#F8F7F2] transition-colors shadow-2xs"
                >
                  <Layers className="w-4 h-4 text-[#697480]" />
                  <span>Journal Archive Chronology</span>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, BookOpen, Sparkles, FileText, Scale, Pause, Play } from "lucide-react";
import { useSwipeGesture } from "@/hooks/useSwipeGesture";

interface CarouselSlide {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  accentColor: string;
  stat: { number: string; label: string };
}

const slides: CarouselSlide[] = [
  {
    id: "inaugural-vol-1",
    badge: "INAUGURAL EDITION (2026)",
    title: "Corporate Law for a Dynamic Financial Architecture",
    subtitle: "Volume 1 · Issue 1 · Peer-Reviewed Academic Research",
    description:
      "Convenes foundational doctrinal and empirical scholarship on algorithmic boardrooms, cross-border insolvency under UNCITRAL, fractional securities regulation, and BRSR sustainability metrics.",
    primaryCta: { label: "Explore Inaugural Issue", href: "/publications" },
    secondaryCta: { label: "Journal Archive", href: "/publications/archive" },
    accentColor: "#B99A5E",
    stat: { number: "06", label: "Published Contributions" },
  },
  {
    id: "call-for-papers",
    badge: "CALL FOR MANUSCRIPTS · NLU DELHI",
    title: "Shaping Contemporary Corporate & Financial Jurisprudence",
    subtitle: "Rolling Submissions Open for Volume 1, Issue 2",
    description:
      "Inviting scholars, judges, corporate counsels, regulatory practitioners, and students to submit doctrinal articles, essays, case comments, and legislative analyses.",
    primaryCta: { label: "Read Submission Guidelines", href: "/submission-guidelines" },
    secondaryCta: { label: "Author Checklist", href: "/submission-guidelines#checklist" },
    accentColor: "#537C78",
    stat: { number: "21st Ed.", label: "Bluebook Standard" },
  },
  {
    id: "law-capital-nexus",
    badge: "INSTITUTIONAL RESEARCH NEXUS",
    title: "At the Confluence of Law, Governance & Capital Markets",
    subtitle: "Centre for Corporate Law, Governance & Financial Laws",
    description:
      "Dedicated to advancing empirical legal economics, corporate fiduciary standards, systemic risk mitigation, and digital asset regulatory sandboxes at National Law University Delhi.",
    primaryCta: { label: "About CCLGFL", href: "/about/centre" },
    secondaryCta: { label: "Research Domains", href: "/#disciplines" },
    accentColor: "#16324F",
    stat: { number: "12", label: "Taxonomy Domains" },
  },
];

export function GrandCarousel() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentIdx((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIdx((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const swipeHandlers = useSwipeGesture({
    onSwipeLeft: nextSlide,
    onSwipeRight: prevSlide,
  });

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 7500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIdx]);

  const activeSlide = slides[currentIdx];

  return (
    <section
      {...swipeHandlers}
      className="relative rounded-2xl bg-gradient-to-br from-[#0B1927] via-[#16324F] to-[#0D1F31] text-white p-8 sm:p-12 lg:p-14 overflow-hidden border border-[#B99A5E]/30 shadow-2xl select-none"
    >
      {/* Background Subtle Nodal Grid */}
      <div className="absolute inset-0 bg-governance-grid-dark opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-radial from-[#B99A5E]/15 to-transparent pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Narrative Text (8 cols) */}
        <div className="lg:col-span-8 space-y-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 font-mono-meta text-[11px] uppercase tracking-widest text-[#B99A5E]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{activeSlide.badge}</span>
              </div>

              {/* Title */}
              <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-white leading-[1.12]">
                {activeSlide.title}
              </h2>

              {/* Subtitle */}
              <div className="font-serif-display text-sm sm:text-base text-[#B99A5E] italic">
                {activeSlide.subtitle}
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#F8F7F2]/80 font-sans-ui leading-relaxed max-w-2xl font-light">
                {activeSlide.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <Link
                  href={activeSlide.primaryCta.href}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#B99A5E] text-[#0B1927] text-xs font-bold hover:bg-[#d4b476] transition-all shadow-md group"
                >
                  <span>{activeSlide.primaryCta.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>

                {activeSlide.secondaryCta && (
                  <Link
                    href={activeSlide.secondaryCta.href}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-white/20 hover:bg-white/10 text-white text-xs font-medium transition-all"
                  >
                    <span>{activeSlide.secondaryCta.label}</span>
                  </Link>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Metric Stat / Callout (4 cols) */}
        <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs text-center min-w-[200px] shadow-lg">
            <div className="font-serif-display text-4xl sm:text-5xl font-extrabold text-[#B99A5E]">
              {activeSlide.stat.number}
            </div>
            <div className="font-mono-meta text-[11px] uppercase tracking-wider text-[#F8F7F2]/70 mt-1 font-semibold">
              {activeSlide.stat.label}
            </div>
            <div className="text-[10px] font-mono-meta text-[#537C78] mt-2 pt-2 border-t border-white/10">
              Swipe or use controls
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Carousel Controls Bar */}
      <div className="relative z-10 mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
        {/* Slide Indicators */}
        <div className="flex items-center gap-2">
          {slides.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setCurrentIdx(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIdx
                  ? "w-8 bg-[#B99A5E]"
                  : "w-2 bg-white/30 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows & Play/Pause */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="p-2 rounded-full border border-white/15 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
            title={isAutoPlaying ? "Pause carousel" : "Play carousel"}
            aria-label="Toggle auto play"
          >
            {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>

          <button
            onClick={prevSlide}
            className="p-2 rounded-full border border-white/15 hover:bg-white/10 text-white transition-colors"
            title="Previous slide"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={nextSlide}
            className="p-2 rounded-full border border-white/15 hover:bg-white/10 text-white transition-colors"
            title="Next slide"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

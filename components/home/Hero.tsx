"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, FileCheck, ShieldCheck, Sparkles, Scale } from "lucide-react";
import { GovernanceNetworkCanvas } from "./GovernanceNetworkCanvas";
import { TextReveal } from "@/components/motion/TextReveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#16324F]/10">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-governance-grid opacity-60 pointer-events-none" />

      {/* Floating Glow Ambient Spheres */}
      <div className="absolute top-10 right-1/4 w-80 h-80 bg-[#B99A5E]/08 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#537C78]/08 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-6 lg:space-y-8">
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-[#16324F]/15 bg-white/80 backdrop-blur-xs text-[#16324F] font-mono-meta text-[11px] uppercase tracking-widest font-semibold shadow-2xs"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#B99A5E] animate-pulse" />
              Centre for Corporate Law, Governance &amp; Financial Laws
            </motion.div>

            {/* Main Editorial Headline with Masked Reveal */}
            <div className="space-y-1">
              <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#16324F] tracking-tight leading-[1.06]">
                <TextReveal text="Journal of" delay={0.15} as="span" />
                <br />
                <span className="text-[#16324F] italic font-normal">
                  <TextReveal text="Corporate &" delay={0.25} as="span" />
                </span>
                <br />
                <TextReveal text="Financial Laws" delay={0.35} as="span" />
              </h1>
            </div>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.45 }}
              className="text-[#202832]/85 text-base sm:text-lg lg:text-xl font-sans-ui leading-relaxed max-w-2xl font-light"
            >
              A premier scholarly platform dedicated to rigorous research, doctrinal clarity, and contemporary discourse across corporate law, governance, financial regulation, and commercial jurisprudence.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.55 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Link
                href="/publications"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-[#16324F] text-[#F8F7F2] font-sans-ui text-sm font-semibold hover:bg-[#0D1F31] hover:shadow-xl transition-all duration-200 group relative overflow-hidden"
              >
                <BookOpen className="w-4 h-4 text-[#B99A5E]" />
                <span>Explore Publications</span>
                <ArrowRight className="w-4 h-4 text-[#B99A5E] group-hover:translate-x-1.5 transition-transform" />
              </Link>

              <Link
                href="/submission-guidelines"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md border border-[#16324F]/25 bg-white/90 hover:bg-white text-[#16324F] font-sans-ui text-sm font-semibold transition-all duration-200 shadow-2xs hover:border-[#16324F]/50 hover:shadow-md"
              >
                <FileCheck className="w-4 h-4 text-[#537C78]" />
                <span>Submission Guidelines</span>
              </Link>
            </motion.div>

            {/* Institutional Metadata Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="pt-4 border-t border-[#16324F]/10 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#697480] font-mono-meta"
            >
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#537C78]" />
                <span>Inaugural Volume 1 (2026)</span>
              </div>
              <span className="text-[#16324F]/20">·</span>
              <div>Double-Blind Peer Review</div>
              <span className="text-[#16324F]/20">·</span>
              <div>Diamond Open Access</div>
            </motion.div>
          </div>

          {/* Right Column: Signature Governance Network (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <div className="w-full relative rounded-2xl bg-gradient-to-b from-white/95 to-[#F8F7F2]/60 border border-[#16324F]/15 p-4 shadow-xl backdrop-blur-md">
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-[#16324F]/08 text-xs font-mono-meta text-[#697480]">
                <div className="flex items-center gap-1.5 font-medium text-[#16324F]">
                  <span className="w-2 h-2 rounded-full bg-[#537C78] animate-pulse" />
                  GOVERNANCE NETWORK
                </div>
                <span className="text-[10px] bg-[#16324F]/05 px-2 py-0.5 rounded border border-[#16324F]/10 font-bold text-[#16324F]">
                  LAW × GOVERNANCE × CAPITAL
                </span>
              </div>

              {/* Interactive Canvas */}
              <GovernanceNetworkCanvas />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

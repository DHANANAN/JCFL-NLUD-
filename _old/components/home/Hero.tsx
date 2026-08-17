"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, FileCheck, ShieldCheck } from "lucide-react";
import { GovernanceNetworkCanvas } from "./GovernanceNetworkCanvas";
import { TextReveal } from "@/components/motion/TextReveal";

// Decorative floating SVG shapes
function FloatingShape({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none">
      <circle cx="60" cy="60" r="55" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" opacity="0.5" />
      <circle cx="60" cy="60" r="35" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <path d="M60 20 L80 50 L60 80 L40 50 Z" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    </svg>
  );
}

function ScaleIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
      <line x1="40" y1="10" x2="40" y2="70" stroke="#B8943F" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="10" y1="28" x2="70" y2="28" stroke="#B8943F" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M10 28 Q18 48 26 48 Q34 48 26 28" stroke="#16324F" strokeWidth="1.8" fill="rgba(22,50,79,0.06)"/>
      <path d="M70 28 Q62 48 54 48 Q46 48 54 28" stroke="#3D7068" strokeWidth="1.8" fill="rgba(61,112,104,0.06)"/>
      <line x1="28" y1="70" x2="52" y2="70" stroke="#B8943F" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[92vh] flex flex-col justify-center">
      {/* Warm organic dot-matrix background */}
      <div className="absolute inset-0 bg-governance-grid pointer-events-none" />

      {/* Big ambient blob — warm gold, top-right */}
      <div className="absolute -top-24 -right-24 w-[520px] h-[520px] organic-blob bg-[#D4A843]/10 animate-drift pointer-events-none" />
      {/* Navy blob, bottom-left */}
      <div className="absolute -bottom-32 -left-32 w-[420px] h-[420px] organic-blob-2 bg-[#16324F]/06 animate-float-reverse pointer-events-none" />
      {/* Teal accent mid */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 organic-blob bg-[#3D7068]/07 animate-float pointer-events-none blur-2xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* ── Left: Editorial headline (7 cols) ── */}
          <div className="lg:col-span-7 space-y-8">

            {/* NLU Delhi pill */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="inline-flex items-center gap-2.5"
            >
              <span className="tag-pill bg-[#16324F] text-[#F7F0DE]">
                NLU Delhi · CCLGFL
              </span>
              <span className="tag-pill bg-[#B8943F]/15 text-[#7A5C18]">
                Inaugural Edition 2026
              </span>
            </motion.div>

            {/* Headline */}
            <div>
              <h1 className="font-display text-[3.2rem] sm:text-[4.2rem] lg:text-[5rem] xl:text-[5.8rem] font-black text-[#16324F] leading-[0.95] tracking-tight">
                <TextReveal text="Journal of" delay={0.1} as="span" />
                <br />
                <em className="font-normal text-[#B8943F] not-italic" style={{ fontStyle: 'italic' }}>
                  <TextReveal text="Corporate &" delay={0.2} as="span" />
                </em>
                <br />
                <TextReveal text="Financial Laws" delay={0.3} as="span" />
              </h1>

              {/* Decorative rule under headline */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.6, duration: 0.8, ease: [0.16,1,0.3,1] }}
                className="mt-6 h-px origin-left bg-gradient-to-r from-[#B8943F] via-[#B8943F]/50 to-transparent w-3/4"
              />
            </div>

            {/* Subline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.45 }}
              className="text-[#3A4A5C] text-lg sm:text-xl font-editorial leading-relaxed max-w-[520px] font-normal"
            >
              A peer-reviewed scholarly forum on corporate governance, capital markets, insolvency, and financial regulation — published by the Centre for Corporate Law, Governance &amp; Financial Laws at <strong className="text-[#16324F]">National Law University Delhi.</strong>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link href="/publications" className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#16324F] text-[#FAF9F4] font-sans-ui text-sm font-semibold hover:bg-[#0D1F31] transition-all duration-300 shadow-lg shadow-[#16324F]/20 hover:shadow-xl hover:shadow-[#16324F]/30 hover:-translate-y-0.5">
                Read Vol. 1 · Issue 1
                <ArrowRight className="w-4 h-4 text-[#B8943F] group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link href="/submission-guidelines" className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#16324F]/20 text-[#16324F] font-sans-ui text-sm font-semibold hover:bg-[#16324F]/05 transition-all duration-200">
                <FileCheck className="w-4 h-4 text-[#3D7068]" />
                Submit a Manuscript
              </Link>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap items-center gap-5 text-xs font-sans-ui text-[#6B7A8D]"
            >
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#3D7068]" />
                Double-Blind Peer Reviewed
              </span>
              <span className="text-[#16324F]/20">·</span>
              <span>Diamond Open Access</span>
              <span className="text-[#16324F]/20">·</span>
              <span>Bluebook 21st Citation Standard</span>
            </motion.div>
          </div>

          {/* ── Right: Organic canvas widget (5 cols) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16,1,0.3,1] }}
            className="lg:col-span-5 relative"
          >
            {/* Floating SVG decoration */}
            <FloatingShape className="absolute -top-10 -right-6 w-28 h-28 text-[#B8943F] animate-float opacity-70" />
            <FloatingShape className="absolute -bottom-8 -left-4 w-20 h-20 text-[#3D7068] animate-float-reverse opacity-50" />

            {/* Canvas container — organic shape */}
            <div className="relative rounded-[2.5rem] bg-gradient-to-br from-white via-[#FAF9F4] to-[#F0EEE7] border border-[#16324F]/10 p-5 shadow-2xl shadow-[#16324F]/12">
              {/* Mini header */}
              <div className="flex items-center justify-between mb-3 text-xs font-mono-meta text-[#6B7A8D]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#3D7068] animate-pulse" />
                  <span className="font-semibold text-[#16324F]">GOVERNANCE NEXUS</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#16324F]/06 border border-[#16324F]/10 font-semibold">
                  LIVE · 60FPS
                </span>
              </div>

              <GovernanceNetworkCanvas />

              {/* Floating scale icon overlay */}
              <div className="absolute bottom-4 right-4 w-14 h-14 opacity-20">
                <ScaleIcon />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Organic wave bottom */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-12">
          <path d="M0,40 C240,10 480,60 720,35 C960,10 1200,55 1440,30 L1440,60 L0,60 Z" fill="#F5F2EA" />
        </svg>
      </div>
    </section>
  );
}

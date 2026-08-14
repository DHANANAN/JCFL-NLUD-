"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, FolderOpen, Scale } from "lucide-react";
import { FadeIn } from "@/components/motion/MotionWrapper";

function ScaleDecor() {
  return (
    <svg viewBox="0 0 120 100" fill="none" className="w-full h-full">
      <line x1="60" y1="10" x2="60" y2="88" stroke="#B8943F" strokeWidth="2" strokeLinecap="round"/>
      <line x1="20" y1="30" x2="100" y2="30" stroke="#B8943F" strokeWidth="2" strokeLinecap="round"/>
      {/* Left pan */}
      <path d="M20 30 C12 42 12 56 28 56 C44 56 44 42 36 30" fill="#16324F" opacity="0.1" stroke="#16324F" strokeWidth="1.5"/>
      <ellipse cx="28" cy="56" rx="14" ry="4" fill="#16324F" opacity="0.08"/>
      {/* Right pan */}
      <path d="M100 30 C92 42 92 52 84 52 C76 52 76 42 84 30" fill="#3D7068" opacity="0.1" stroke="#3D7068" strokeWidth="1.5"/>
      <ellipse cx="84" cy="52" rx="14" ry="4" fill="#3D7068" opacity="0.08"/>
      {/* Base */}
      <line x1="44" y1="88" x2="76" y2="88" stroke="#B8943F" strokeWidth="3" strokeLinecap="round"/>
      {/* Books on left pan */}
      <rect x="18" y="44" width="20" height="8" rx="1" fill="#16324F" opacity="0.4"/>
      <rect x="20" y="38" width="16" height="6" rx="1" fill="#B8943F" opacity="0.5"/>
    </svg>
  );
}

export function AboutCentreSection() {
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden bg-[#FAF9F4]">
      {/* Gentle top wave */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" className="w-full h-16">
          <path d="M0,60 C360,10 720,80 1080,30 C1260,10 1380,70 1440,50 L1440,0 L0,0 Z" fill="#F5F2EA"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Visual illustration panel */}
          <FadeIn direction="right">
            <div className="relative">
              {/* Rotated card stack effect */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl bg-[#3D7068]/12 rotate-3" />
              <div className="absolute -top-2 -left-2 w-full h-full rounded-3xl bg-[#B8943F]/10 rotate-1.5" />

              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#16324F] to-[#0B1927] p-10 shadow-2xl shadow-[#16324F]/25">
                {/* Dot grid */}
                <div className="absolute inset-0 bg-governance-grid-dark opacity-40" />

                {/* Scale illustration */}
                <div className="relative z-10 flex flex-col items-center gap-6">
                  <div className="w-32 h-28 opacity-80">
                    <ScaleDecor />
                  </div>

                  {/* CCLGFL logo */}
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#B8943F] bg-[#0B1927] shadow-xl">
                    <Image src="/assets/images/cclgfl-logo.jpg" alt="CCLGFL" width={80} height={80} className="object-cover" />
                  </div>

                  <div className="text-center">
                    <div className="font-display text-xl font-black text-white leading-tight">
                      Centre for Corporate Law,<br />Governance &amp; Financial Laws
                    </div>
                    <div className="text-sm font-sans-ui text-[#B8943F] mt-1.5 font-medium">
                      National Law University Delhi
                    </div>
                  </div>

                  {/* Research cluster pills */}
                  <div className="flex flex-wrap justify-center gap-2">
                    {["Corporate Governance", "Capital Markets", "Banking Law", "Digital Finance"].map(c => (
                      <span key={c} className="text-[10px] font-sans-ui px-3 py-1 rounded-full bg-white/10 text-white/80 border border-white/15">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right: Text content */}
          <div className="space-y-8">
            <FadeIn direction="up">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-px bg-[#B8943F]" />
                  <span className="text-xs font-mono-meta text-[#B8943F] uppercase tracking-[0.2em] font-semibold">About the Centre</span>
                </div>
                <h2 className="font-display text-4xl sm:text-5xl font-black text-[#16324F] leading-tight">
                  Where Law Meets Capital Architecture
                </h2>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.1}>
              <p className="font-editorial text-[#3A4A5C] text-lg leading-relaxed">
                The Centre for Corporate Law, Governance &amp; Financial Laws at National Law University Delhi is a specialized institutional hub dedicated to rigorous empirical and doctrinal legal research at the confluence of corporate governance, capital markets, insolvency regimes, and financial regulation.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.15}>
              <p className="font-editorial text-[#6B7A8D] text-base leading-relaxed">
                As corporations navigate transformative shifts — from artificial intelligence in boardrooms and fractional securities tokenization to UNCITRAL cross-border debt resolution and BRSR sustainability mandates — CCLGFL provides the analytical precision and principled guidance that policymakers, courts, and practitioners require.
              </p>
            </FadeIn>

            {/* Vision & Mission quick stats */}
            <FadeIn direction="up" delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-[#16324F]/05 border border-[#16324F]/08">
                  <div className="font-mono-meta text-xs text-[#3D7068] uppercase tracking-[0.15em] font-bold mb-2">Vision</div>
                  <p className="font-editorial text-sm text-[#1C2533] leading-relaxed">
                    To cultivate a leading platform for corporate jurisprudence and financial regulatory reform.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-[#B8943F]/08 border border-[#B8943F]/15">
                  <div className="font-mono-meta text-xs text-[#B8943F] uppercase tracking-[0.15em] font-bold mb-2">Mission</div>
                  <p className="font-editorial text-sm text-[#1C2533] leading-relaxed">
                    Fostering research, facilitating dialogue, and mentoring the next generation of commercial law scholars.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.25}>
              <Link href="/about/centre" className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#16324F] text-[#FAF9F4] text-sm font-semibold font-sans-ui hover:bg-[#0D1F31] transition-all shadow-lg shadow-[#16324F]/20 hover:-translate-y-0.5">
                Full Institutional Profile
                <ArrowRight className="w-4 h-4 text-[#B8943F] group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

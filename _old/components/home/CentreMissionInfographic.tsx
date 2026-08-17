"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BookOpen, Scale, Landmark, GraduationCap, ShieldCheck } from "lucide-react";
import { FadeIn } from "@/components/motion/MotionWrapper";

const pillars = [
  {
    id: "research",
    num: "01",
    title: "Scholarly Research",
    description: "Producing the Journal of Corporate and Financial Laws (JCFL), empirical working papers, and doctrinal monographs examining the frontiers of Indian and comparative commercial jurisprudence.",
    highlights: [
      "Flagship JCFL publication with double-blind peer review",
      "Empirical studies on listed corporate governance datasets",
      "Doctrinal treatises on SEBI, IBC, and Companies Act frameworks",
    ],
    Icon: BookOpen,
    accent: "#16324F",
    light: "#EAF0F5",
    svgDecor: (
      <svg viewBox="0 0 100 80" fill="none" className="w-full h-full">
        <rect x="10" y="10" width="35" height="45" rx="3" fill="#16324F" opacity="0.1" stroke="#16324F" strokeWidth="1"/>
        <rect x="55" y="10" width="35" height="45" rx="3" fill="#16324F" opacity="0.07" stroke="#16324F" strokeWidth="1"/>
        <line x1="10" y1="60" x2="90" y2="60" stroke="#B8943F" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M25 30 Q32 22 40 30" stroke="#B8943F" strokeWidth="1.5" fill="none"/>
        <circle cx="27" cy="38" r="2" fill="#B8943F" opacity="0.7"/>
      </svg>
    )
  },
  {
    id: "policy",
    num: "02",
    title: "Policy & Regulatory Engagement",
    description: "Authoring evidence-based consultation memos and policy briefs submitted to SEBI, MCA, RBI, NCLT, and Parliamentary Standing Committees on corporate and financial legislation.",
    highlights: [
      "Inputs on Draft Digital Competition Bill & SM-REITs",
      "UNCITRAL Model Law cross-border insolvency memos",
      "Investor protection and enforcement review briefs",
    ],
    Icon: Scale,
    accent: "#3D7068",
    light: "#E1EDEB",
    svgDecor: (
      <svg viewBox="0 0 100 80" fill="none" className="w-full h-full">
        <line x1="50" y1="8" x2="50" y2="70" stroke="#3D7068" strokeWidth="2" strokeLinecap="round"/>
        <line x1="15" y1="25" x2="85" y2="25" stroke="#3D7068" strokeWidth="2" strokeLinecap="round"/>
        <ellipse cx="28" cy="46" rx="14" ry="8" fill="#3D7068" opacity="0.15" stroke="#3D7068" strokeWidth="1.2"/>
        <ellipse cx="72" cy="40" rx="14" ry="8" fill="#B8943F" opacity="0.15" stroke="#B8943F" strokeWidth="1.2"/>
      </svg>
    )
  },
  {
    id: "conferences",
    num: "03",
    title: "Academic Symposia & Conclaves",
    description: "Convening the Annual Corporate Law Conclave at NLU Delhi, international comparative law symposia, and specialized regulatory roundtables connecting academia with judiciary and practice.",
    highlights: [
      "Annual Corporate & Financial Law Conclave at NLU Delhi",
      "Algorithmic governance & FinTech oversight roundtables",
      "Comparative symposia with international law faculties",
    ],
    Icon: Landmark,
    accent: "#B8943F",
    light: "#F7F0DE",
    svgDecor: (
      <svg viewBox="0 0 100 80" fill="none" className="w-full h-full">
        <polygon points="50,8 90,35 50,62 10,35" fill="#B8943F" opacity="0.1" stroke="#B8943F" strokeWidth="1.5"/>
        <circle cx="50" cy="35" r="8" fill="#B8943F" opacity="0.3"/>
        <circle cx="24" cy="52" r="5" fill="#16324F" opacity="0.2"/>
        <circle cx="76" cy="52" r="5" fill="#3D7068" opacity="0.2"/>
        <line x1="50" y1="43" x2="24" y2="47" stroke="#B8943F" strokeWidth="1" opacity="0.5"/>
        <line x1="50" y1="43" x2="76" y2="47" stroke="#B8943F" strokeWidth="1" opacity="0.5"/>
      </svg>
    )
  },
  {
    id: "fellowships",
    num: "04",
    title: "Fellowships & Mentorship",
    description: "Incubating the next generation of commercial law scholars through the CCLGFL Student Editorial Board, research assistantships, and advanced academic writing workshops.",
    highlights: [
      "CCLGFL Student Editorial Board Fellowship Program",
      "Empirical research assistantships on corporate datasets",
      "Bluebook citation & academic legal writing workshops",
    ],
    Icon: GraduationCap,
    accent: "#234668",
    light: "#EAF0F5",
    svgDecor: (
      <svg viewBox="0 0 100 80" fill="none" className="w-full h-full">
        <polygon points="50,10 90,32 72,32 72,55 28,55 28,32 10,32" fill="#234668" opacity="0.1" stroke="#234668" strokeWidth="1.5"/>
        <rect x="38" y="55" width="24" height="8" rx="2" fill="#B8943F" opacity="0.3"/>
        <circle cx="50" cy="26" r="6" fill="#234668" opacity="0.25"/>
      </svg>
    )
  },
];

export function CentreMissionInfographic() {
  const [active, setActive] = useState("research");
  const activePillar = pillars.find(p => p.id === active)!;

  return (
    <section className="relative py-28 lg:py-36 overflow-hidden">
      {/* Warm cream bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F5F2EA] to-[#EDE9DE]" />

      {/* Decorative large watermark circle */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-96 h-96 rounded-full border border-[#B8943F]/12 pointer-events-none" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-64 h-64 rounded-full border border-[#B8943F]/08 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="max-w-2xl mb-16">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-px bg-[#B8943F]" />
              <span className="text-xs font-mono-meta text-[#B8943F] uppercase tracking-[0.2em] font-semibold">Institutional Architecture</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-[#16324F] leading-tight">
              Four Pillars of CCLGFL
            </h2>
            <p className="font-editorial text-[#6B7A8D] text-base mt-3">
              At National Law University Delhi, the Centre operates across four institutional mandates that together define its scholarly and policy impact.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Selector tabs (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {pillars.map(p => {
              const isActive = p.id === active;
              return (
                <button
                  key={p.id}
                  onClick={() => setActive(p.id)}
                  className={`text-left w-full rounded-2xl transition-all duration-300 flex items-center gap-4 p-5 group ${
                    isActive
                      ? "bg-[#16324F] text-white shadow-xl shadow-[#16324F]/25 scale-[1.01]"
                      : "bg-white/80 hover:bg-white text-[#1C2533] hover:shadow-md"
                  }`}
                >
                  {/* SVG icon box */}
                  <div
                    className="w-14 h-14 rounded-xl shrink-0 p-2 flex items-center justify-center"
                    style={{ backgroundColor: isActive ? "rgba(255,255,255,0.1)" : p.light }}
                  >
                    <p.Icon className="w-6 h-6" style={{ color: isActive ? "#B8943F" : p.accent }} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className={`text-[10px] font-mono-meta font-bold uppercase tracking-[0.18em] mb-0.5 ${isActive ? "text-[#B8943F]" : "text-[#6B7A8D]"}`}>
                      Pillar {p.num}
                    </div>
                    <div className={`font-display text-lg font-bold leading-snug ${isActive ? "text-white" : "text-[#16324F]"}`}>
                      {p.title}
                    </div>
                  </div>

                  {isActive && <span className="w-2 h-2 rounded-full bg-[#B8943F] animate-ping shrink-0" />}
                </button>
              );
            })}
          </div>

          {/* Detail panel (7 cols) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePillar.id}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.3 }}
                className="h-full card-warm rounded-3xl p-8 sm:p-10 flex flex-col justify-between gap-7"
              >
                {/* SVG illustration */}
                <div
                  className="w-full h-32 rounded-2xl overflow-hidden"
                  style={{ backgroundColor: activePillar.light }}
                >
                  <div className="w-full h-full opacity-80">{activePillar.svgDecor}</div>
                </div>

                {/* Text */}
                <div className="space-y-4">
                  <div>
                    <div className="text-[10px] font-mono-meta text-[#B8943F] font-bold uppercase tracking-[0.18em] mb-1.5">
                      Pillar {activePillar.num} · NLU Delhi Mandate
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-black text-[#16324F]">
                      {activePillar.title}
                    </h3>
                  </div>
                  <p className="font-editorial text-[#3A4A5C] text-base leading-relaxed">
                    {activePillar.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {activePillar.highlights.map(h => (
                      <li key={h} className="flex items-start gap-2.5 text-sm font-sans-ui text-[#3A4A5C]">
                        <ShieldCheck className="w-4 h-4 text-[#3D7068] mt-0.5 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[#16324F]/08">
                  <span className="text-xs font-mono-meta text-[#6B7A8D]">CCLGFL · National Law University Delhi</span>
                  <Link href="/about/centre" className="inline-flex items-center gap-1.5 text-xs font-semibold font-sans-ui text-[#16324F] hover:text-[#B8943F] transition-colors">
                    Institutional Profile <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

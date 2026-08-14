"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { StaggerContainer, StaggerItem, FadeIn } from "@/components/motion/MotionWrapper";

// Each discipline has a unique SVG pictograph
const disciplines = [
  {
    id: "corporate-law",
    n: "01",
    title: "Corporate Law",
    desc: "Director fiduciary duties, corporate personality, and capital structure.",
    color: "#16324F",
    bg: "#EAF0F5",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="8" y="16" width="32" height="24" rx="4" fill="#16324F" opacity="0.12"/>
        <rect x="14" y="10" width="20" height="10" rx="2" fill="#16324F" opacity="0.2"/>
        <line x1="24" y1="16" x2="24" y2="40" stroke="#16324F" strokeWidth="1.5"/>
        <line x1="8" y1="28" x2="40" y2="28" stroke="#B8943F" strokeWidth="1.5"/>
        <circle cx="24" cy="28" r="4" fill="#B8943F"/>
      </svg>
    )
  },
  {
    id: "securities",
    n: "02",
    title: "Securities Regulation",
    desc: "Disclosure frameworks, insider trading, public issues, and SEBI enforcement.",
    color: "#3D7068",
    bg: "#E1EDEB",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <polyline points="4,40 14,28 22,34 32,20 44,12" stroke="#3D7068" strokeWidth="2" fill="none" strokeLinejoin="round"/>
        <circle cx="44" cy="12" r="3" fill="#B8943F"/>
        <circle cx="22" cy="34" r="2.5" fill="#3D7068"/>
        <line x1="4" y1="44" x2="44" y2="44" stroke="#3D7068" strokeWidth="1.5" opacity="0.3"/>
        <line x1="4" y1="8" x2="4" y2="44" stroke="#3D7068" strokeWidth="1.5" opacity="0.3"/>
      </svg>
    )
  },
  {
    id: "banking",
    n: "03",
    title: "Banking & Finance",
    desc: "Prudential regulation, credit facilities, and systemic risk mitigation.",
    color: "#B8943F",
    bg: "#F7F0DE",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="6" y="20" width="36" height="22" rx="3" fill="#B8943F" opacity="0.12"/>
        <polygon points="24,6 42,20 6,20" fill="#B8943F" opacity="0.25"/>
        <rect x="12" y="26" width="6" height="12" fill="#B8943F" opacity="0.5"/>
        <rect x="21" y="26" width="6" height="12" fill="#16324F" opacity="0.3"/>
        <rect x="30" y="26" width="6" height="12" fill="#3D7068" opacity="0.4"/>
      </svg>
    )
  },
  {
    id: "governance",
    n: "04",
    title: "Corporate Governance",
    desc: "Board independence, stewardship codes, and ESG accountability.",
    color: "#16324F",
    bg: "#EAF0F5",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="14" r="7" fill="#16324F" opacity="0.15" stroke="#16324F" strokeWidth="1.5"/>
        <circle cx="10" cy="34" r="5" fill="#3D7068" opacity="0.2" stroke="#3D7068" strokeWidth="1.2"/>
        <circle cx="38" cy="34" r="5" fill="#B8943F" opacity="0.25" stroke="#B8943F" strokeWidth="1.2"/>
        <line x1="24" y1="21" x2="10" y2="29" stroke="#16324F" strokeWidth="1.2" opacity="0.5"/>
        <line x1="24" y1="21" x2="38" y2="29" stroke="#16324F" strokeWidth="1.2" opacity="0.5"/>
      </svg>
    )
  },
  {
    id: "insolvency",
    n: "05",
    title: "Insolvency & Restructuring",
    desc: "IBC jurisprudence, NCLT procedure, and cross-border debt resolution.",
    color: "#3D7068",
    bg: "#E1EDEB",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M24 6 L42 40 L6 40 Z" fill="#3D7068" opacity="0.12" stroke="#3D7068" strokeWidth="1.5" strokeLinejoin="round"/>
        <line x1="24" y1="18" x2="24" y2="28" stroke="#B8943F" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="24" cy="34" r="2.5" fill="#B8943F"/>
      </svg>
    )
  },
  {
    id: "competition",
    n: "06",
    title: "Competition & Markets",
    desc: "Antitrust enforcement, merger control, and digital market power regulation.",
    color: "#B8943F",
    bg: "#F7F0DE",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="18" cy="20" r="12" fill="#B8943F" opacity="0.15" stroke="#B8943F" strokeWidth="1.5"/>
        <circle cx="30" cy="28" r="10" fill="#3D7068" opacity="0.15" stroke="#3D7068" strokeWidth="1.5"/>
        <path d="M22,16 Q26,22 22,28" fill="#16324F" opacity="0.2"/>
      </svg>
    )
  },
  {
    id: "fintech",
    n: "07",
    title: "FinTech & Digital Finance",
    desc: "Tokenized securities, crypto assets, and algorithmic lending governance.",
    color: "#16324F",
    bg: "#EAF0F5",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="10" y="10" width="28" height="28" rx="8" fill="#16324F" opacity="0.1" stroke="#16324F" strokeWidth="1.2"/>
        <path d="M20 24 L24 18 L28 24 L24 30 Z" fill="#B8943F" opacity="0.7"/>
        <line x1="24" y1="10" x2="24" y2="18" stroke="#B8943F" strokeWidth="1.5"/>
        <line x1="24" y1="30" x2="24" y2="38" stroke="#B8943F" strokeWidth="1.5"/>
      </svg>
    )
  },
  {
    id: "esg",
    n: "08",
    title: "ESG & Sustainability Law",
    desc: "BRSR Core, climate finance regulation, and green bond frameworks.",
    color: "#3D7068",
    bg: "#E1EDEB",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M24 40 C24 40 8 30 8 18 C8 12 15 8 24 14 C33 8 40 12 40 18 C40 30 24 40 24 40Z" fill="#3D7068" opacity="0.2" stroke="#3D7068" strokeWidth="1.5"/>
        <path d="M24 20 Q28 24 24 34 Q20 28 24 20Z" fill="#3D7068" opacity="0.4"/>
      </svg>
    )
  },
  {
    id: "commercial",
    n: "09",
    title: "Commercial Law",
    desc: "Contractual risk allocation, commercial arbitration, and trade remedies.",
    color: "#B8943F",
    bg: "#F7F0DE",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="8" y="8" width="32" height="32" rx="4" fill="none" stroke="#B8943F" strokeWidth="1.5"/>
        <path d="M16 20 L24 14 L32 20" stroke="#B8943F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 28 L24 34 L32 28" stroke="#16324F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
        <line x1="24" y1="14" x2="24" y2="34" stroke="#B8943F" strokeWidth="1.5" opacity="0.4"/>
      </svg>
    )
  },
];

export function ResearchAreaGrid() {
  return (
    <section className="relative py-28 overflow-hidden bg-[#FAF9F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="max-w-2xl mb-16">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-px bg-[#B8943F]" />
              <span className="text-xs font-mono-meta text-[#B8943F] uppercase tracking-[0.2em] font-semibold">Fields of Inquiry</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-[#16324F] leading-tight mb-4">
              Research Disciplines
            </h2>
            <p className="font-editorial text-[#6B7A8D] text-base">
              Twelve thematic domains spanning foundational corporate doctrines to modern digital asset governance, all examined through rigorous legal methodology.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {disciplines.map((d) => (
            <StaggerItem key={d.id}>
              <div className="card-soft p-6 h-full flex flex-col gap-4 group hover:border-[#B8943F]/30 transition-all">
                <div className="flex items-start justify-between">
                  <div
                    className="p-3 rounded-2xl"
                    style={{ backgroundColor: d.bg }}
                  >
                    {d.icon}
                  </div>
                  <span className="font-mono-meta text-[10px] text-[#B8943F] font-bold opacity-60">{d.n}</span>
                </div>

                <div>
                  <h3 className="font-display text-lg font-bold text-[#16324F] mb-1.5 leading-snug group-hover:text-[#B8943F] transition-colors">
                    {d.title}
                  </h3>
                  <p className="text-sm font-editorial text-[#6B7A8D] leading-relaxed">
                    {d.desc}
                  </p>
                </div>

                <div className="mt-auto pt-3 border-t border-[#16324F]/05 flex items-center justify-between text-[11px] font-sans-ui text-[#6B7A8D]">
                  <span>Browse articles</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[#B8943F]" />
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

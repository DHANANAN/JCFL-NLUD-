"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Scale, Users, GraduationCap, Sparkles, ArrowRight, ShieldCheck, FileCheck, Landmark } from "lucide-react";
import { FadeIn } from "@/components/motion/MotionWrapper";

interface PillarData {
  id: string;
  title: string;
  subtitle: string;
  icon: any;
  metric: string;
  metricLabel: string;
  description: string;
  highlights: string[];
  color: string;
}

const pillars: PillarData[] = [
  {
    id: "research",
    title: "Scholarly Research & Publications",
    subtitle: "Doctrinal Treatises & Empirical Law & Economics",
    icon: BookOpen,
    metric: "01",
    metricLabel: "Primary Academic Mandate",
    description:
      "Publishing authoritative, double-blind peer-reviewed scholarship through the Journal of Corporate and Financial Laws (JCFL), faculty monographs, and pre-publication working paper series.",
    highlights: [
      "Flagship Journal of Corporate & Financial Laws (JCFL)",
      "Empirical investigations into corporate governance & board stewardship",
      "Doctrinal analysis of SEBI, IBC, and Competition Act frameworks",
    ],
    color: "#16324F",
  },
  {
    id: "policy",
    title: "Policy & Regulatory Reform",
    subtitle: "Consultative Inputs to SEBI, MCA, RBI & Parliament",
    icon: Scale,
    metric: "02",
    metricLabel: "Institutional Consultation",
    description:
      "Drafting evidence-based consultation memos, policy briefs, and statutory recommendations on commercial legislation, digital market gatekeeping, and cross-border restructuring.",
    highlights: [
      "Consultative submissions on Draft Digital Competition Bill",
      "Inputs on Small & Medium REITs (SM-REITs) and tokenized securities",
      "Advisory memos on UNCITRAL Model Law cross-border insolvency adoption",
    ],
    color: "#537C78",
  },
  {
    id: "conferences",
    title: "Academic Symposia & Conclaves",
    subtitle: "National & International Juridical Dialogue",
    icon: Landmark,
    metric: "03",
    metricLabel: "National & Global Conclaves",
    description:
      "Convening premier conferences bringing together Supreme Court and High Court jurists, SEBI / CCI regulators, corporate general counsels, and leading global legal academics.",
    highlights: [
      "Annual Corporate & Financial Law Conclave at NLU Delhi",
      "Specialized roundtables on algorithmic governance & FinTech oversight",
      "Comparative corporate law symposia with international faculties",
    ],
    color: "#B99A5E",
  },
  {
    id: "fellowships",
    title: "Fellowships & Student Mentorship",
    subtitle: "Nurturing Future Commercial Law Scholars",
    icon: GraduationCap,
    metric: "04",
    metricLabel: "Student & Scholar Incubation",
    description:
      "Incubating student editors, graduate researchers, and doctoral fellows in advanced statutory analysis, economic analysis of law, and academic editing standards.",
    highlights: [
      "CCLGFL Student Editorial Board Fellowship Program",
      "Empirical research assistantships on listed corporate datasets",
      "Mentorship workshops on academic legal writing and Bluebook citations",
    ],
    color: "#234668",
  },
];

export function CentreMissionInfographic() {
  const [selectedPillarId, setSelectedPillarId] = useState<string>("research");

  const activePillar = pillars.find((p) => p.id === selectedPillarId) || pillars[0];

  return (
    <section className="py-20 lg:py-28 bg-[#F8F7F2] border-b border-[#16324F]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 font-mono-meta text-xs uppercase tracking-widest text-[#537C78] font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#B99A5E]" />
              Institutional Mission Architecture
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#16324F]">
              Four Pillars of CCLGFL at NLU Delhi
            </h2>
            <p className="text-sm sm:text-base text-[#697480] font-sans-ui font-light">
              Interactive visualization of our institutional core: from academic publication and statutory reform to global symposia and scholar incubation.
            </p>
          </div>
        </FadeIn>

        {/* Infographic Hub: 4 Selector Tabs + Detailed Animated Quadrant */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left 4 Selector Tabs (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3">
            {pillars.map((pillar) => {
              const isSelected = pillar.id === selectedPillarId;
              const Icon = pillar.icon;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setSelectedPillarId(pillar.id)}
                  className={`w-full text-left p-5 rounded-xl border transition-all duration-300 flex items-start gap-4 ${
                    isSelected
                      ? "bg-[#16324F] text-white border-[#B99A5E] shadow-xl translate-x-2"
                      : "bg-white text-[#202832] border-[#16324F]/10 hover:border-[#16324F]/30 hover:bg-[#FFFFFF]"
                  }`}
                >
                  <div
                    className={`p-3 rounded-lg shrink-0 ${
                      isSelected
                        ? "bg-white/10 text-[#B99A5E]"
                        : "bg-[#F8F7F2] text-[#16324F]"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className={`font-mono-meta text-xs font-bold ${isSelected ? "text-[#B99A5E]" : "text-[#537C78]"}`}>
                        PILLAR {pillar.metric}
                      </span>
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-[#B99A5E] animate-ping" />
                      )}
                    </div>
                    <div className={`font-serif-display font-bold text-base sm:text-lg mt-0.5 ${isSelected ? "text-white" : "text-[#16324F]"}`}>
                      {pillar.title}
                    </div>
                    <div className={`text-xs mt-1 ${isSelected ? "text-[#F8F7F2]/75" : "text-[#697480]"}`}>
                      {pillar.subtitle}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Animated Detailed Display Box (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-white border border-[#16324F]/15 p-8 sm:p-12 shadow-md relative overflow-hidden flex flex-col justify-between">
            {/* Background Geometric Watermark */}
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-radial from-[#B99A5E]/10 to-transparent pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activePillar.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="space-y-6 relative z-10"
              >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-[#16324F]/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#16324F] text-[#B99A5E] flex items-center justify-center shadow-md">
                      <activePillar.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="font-mono-meta text-xs text-[#537C78] uppercase tracking-wider font-bold">
                        Pillar {activePillar.metric} // NLU Delhi Mandate
                      </span>
                      <h3 className="font-serif-display font-bold text-2xl text-[#16324F]">
                        {activePillar.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Narrative Description */}
                <p className="text-sm sm:text-base text-[#202832]/85 font-sans-ui leading-relaxed font-light">
                  {activePillar.description}
                </p>

                {/* Key Highlights / Institutional Outputs */}
                <div className="space-y-3 pt-2">
                  <div className="font-mono-meta text-xs text-[#16324F] uppercase tracking-wider font-bold">
                    Key Institutional Outputs &amp; Initiatives:
                  </div>
                  <div className="space-y-2">
                    {activePillar.highlights.map((h, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-3.5 rounded-lg bg-[#F8F7F2] border border-[#16324F]/08 text-xs font-sans-ui text-[#202832]"
                      >
                        <ShieldCheck className="w-4 h-4 text-[#537C78] shrink-0 mt-0.5" />
                        <span className="font-medium">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Footer Action */}
            <div className="pt-8 mt-6 border-t border-[#16324F]/10 flex items-center justify-between text-xs relative z-10">
              <span className="font-mono-meta text-[#697480]">
                Centre for Corporate Law, Governance &amp; Financial Laws
              </span>
              <Link
                href="/about/centre"
                className="inline-flex items-center gap-1.5 font-bold text-[#16324F] hover:text-[#B99A5E] transition-colors"
              >
                <span>Read Institutional Profile</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

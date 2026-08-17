"use client";

import { motion } from "framer-motion";
import { Sparkles, Calendar, BookOpen, Scale, Landmark, ShieldCheck } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/MotionWrapper";

interface TimelineEvent {
  year: string;
  phase: string;
  title: string;
  description: string;
  focusArea: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "2013–2016",
    phase: "Statutory Modernization",
    title: "Enactment of the Companies Act, 2013 & IBC 2016",
    description:
      "Transition from outdated colonial paradigms to stakeholder-driven corporate governance, independent director mandates, and institutional creditor-led insolvency resolution.",
    focusArea: "Corporate Law & Insolvency",
  },
  {
    year: "2017–2020",
    phase: "Capital Market Maturity",
    title: "Kotak Committee Reforms & LODR Governance Standards",
    description:
      "Elevation of board independence, separation of Chairman and MD roles, scrutiny over Related Party Transactions (RPTs), and heightened insider trading enforcement by SEBI.",
    focusArea: "Securities & Governance",
  },
  {
    year: "2021–2024",
    phase: "ESG & Digital Transformation",
    title: "BRSR Core Mandates & Digital Competition Frameworks",
    description:
      "Introduction of business responsibility sustainability reporting, regulation of ESG rating providers, Small & Medium REITs (SM-REITs), and ex-ante digital market gatekeeper prescriptions.",
    focusArea: "ESG & Digital Markets",
  },
  {
    year: "2026 & Beyond",
    phase: "Inaugural Scholarly Discourse",
    title: "Launch of JCFL at NLU Delhi (Volume 1 · Issue 1)",
    description:
      "Establishing a permanent National Law University Delhi research journal addressing algorithmic boardrooms, tokenized securities, modified universalism in cross-border debt, and systemic financial stability.",
    focusArea: "Inaugural Journal Platform",
  },
];

export function JurisprudenceTimeline() {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-[#16324F]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 font-mono-meta text-xs uppercase tracking-widest text-[#537C78] font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#B99A5E]" />
              Historical &amp; Futuristic Narrative
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#16324F]">
              Evolution of Corporate &amp; Financial Jurisprudence
            </h2>
            <p className="text-sm sm:text-base text-[#697480] font-sans-ui font-light">
              How landmark statutory reforms, capital market transformations, and NLU Delhi scholarship shape the future of commercial jurisprudence in India.
            </p>
          </div>
        </FadeIn>

        {/* Timeline Path */}
        <div className="relative">
          {/* Vertical Connecting Center Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#16324F] via-[#B99A5E] to-[#537C78] -translate-x-1/2 opacity-30 pointer-events-none" />

          <div className="space-y-10 lg:space-y-12">
            {timelineEvents.map((evt, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <FadeIn key={evt.year} direction="up" delay={idx * 0.1}>
                  <div className={`flex flex-col lg:flex-row items-center gap-8 ${isEven ? "lg:flex-row-reverse" : ""}`}>
                    {/* Event Card */}
                    <div className="w-full lg:w-1/2">
                      <div className="p-8 rounded-2xl bg-[#F8F7F2] border border-[#16324F]/10 hover:border-[#B99A5E] hover:shadow-xl transition-all duration-300 group">
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className="px-2.5 py-0.5 rounded-full bg-[#16324F] text-white text-[10px] font-mono-meta font-bold uppercase tracking-wider">
                            {evt.phase}
                          </span>
                          <span className="text-xs font-mono-meta font-bold text-[#B99A5E]">
                            {evt.year}
                          </span>
                        </div>

                        <h3 className="font-serif-display font-bold text-xl text-[#16324F] mb-2 leading-snug">
                          {evt.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-[#202832]/80 font-sans-ui leading-relaxed font-light mb-4">
                          {evt.description}
                        </p>

                        <div className="pt-3 border-t border-[#16324F]/08 flex items-center justify-between text-[11px] font-mono-meta text-[#537C78]">
                          <span>{evt.focusArea}</span>
                          <span className="text-[#16324F] font-semibold">Jurisprudential Milestone</span>
                        </div>
                      </div>
                    </div>

                    {/* Timeline Center Node */}
                    <div className="hidden lg:flex items-center justify-center relative">
                      <div className="w-10 h-10 rounded-full bg-white border-2 border-[#16324F] text-[#B99A5E] flex items-center justify-center font-mono-meta font-bold text-xs shadow-md z-10">
                        0{idx + 1}
                      </div>
                    </div>

                    {/* Empty Opposite Column on Desktop */}
                    <div className="hidden lg:block w-1/2" />
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { ArrowRight, Scale, Sparkles } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/MotionWrapper";

const mandateTopics = [
  { index: "01", title: "Corporate Law", desc: "Corporate personality, director liability, and capital structure doctrines." },
  { index: "02", title: "Securities Regulation", desc: "Disclosure frameworks, insider trading prohibitions, and public issues." },
  { index: "03", title: "Banking & Finance", desc: "Prudential regulation, syndicated debt facilities, and systemic risk." },
  { index: "04", title: "Corporate Governance", desc: "Board independence, stewardship codes, and stakeholder accountability." },
  { index: "05", title: "Insolvency & Restructuring", desc: "IBC jurisprudence, creditor priority, and cross-border resolution." },
  { index: "06", title: "Competition & Markets", desc: "Antitrust enforcement, merger thresholds, and digital market power." },
  { index: "07", title: "Financial Regulation", desc: "Macroprudential policy, shadow banking, and IFSC GIFT City." },
  { index: "08", title: "Commercial Law", desc: "Contractual risk allocation, arbitration, and commercial remedies." },
  { index: "09", title: "Emerging Business Regulation", desc: "FinTech, venture capital structuring, and platform economics." }
];

export function JournalMandate() {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-[#16324F]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Academic Statement (5 cols) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <FadeIn direction="up">
              <div className="flex items-center gap-1.5 font-mono-meta text-xs uppercase tracking-widest text-[#537C78] font-bold">
                <Scale className="w-3.5 h-3.5 text-[#B99A5E]" />
                Academic Purpose &amp; Scope
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.1}>
              <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#16324F] leading-tight">
                At the intersection of law, governance and financial markets.
              </h2>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <p className="text-[#202832]/85 text-base sm:text-lg font-sans-ui leading-relaxed font-light">
                The Journal of Corporate and Financial Laws is established to bridge foundational doctrinal legal analysis with real-world financial architecture. We provide a peer-reviewed forum for rigorous scholarship examining the statutory, regulatory, and judicial frameworks that govern capital formation and enterprise stewardship.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <div className="pt-2">
                <Link
                  href="/about/journal"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#16324F]/08 text-[#16324F] font-sans-ui text-xs font-bold hover:bg-[#16324F] hover:text-white transition-all group shadow-2xs"
                >
                  <span>Read Full Aims &amp; Scope</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#B99A5E] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: 9 Key Focus Areas (7 cols) */}
          <div className="lg:col-span-7">
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {mandateTopics.map((topic) => (
                <StaggerItem key={topic.index}>
                  <div className="p-6 rounded-xl border border-[#16324F]/10 bg-[#F8F7F2]/60 hover:bg-white hover:border-[#B99A5E] hover:shadow-lg transition-all duration-300 group h-full flex flex-col justify-between hover:-translate-y-1">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono-meta text-xs font-bold text-[#B99A5E]">
                          {topic.index}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#537C78]/40 group-hover:bg-[#537C78] group-hover:scale-150 transition-all" />
                      </div>
                      <h3 className="font-serif-display font-bold text-base text-[#16324F] mb-1 group-hover:text-[#16324F]">
                        {topic.title}
                      </h3>
                      <p className="text-xs text-[#697480] font-sans-ui leading-relaxed">
                        {topic.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#16324F]/06 flex items-center justify-between text-[10px] font-mono-meta text-[#537C78]">
                      <span>Core Discipline</span>
                      <span className="text-[#16324F] opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                        Explore →
                      </span>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}

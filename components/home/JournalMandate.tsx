"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

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
    <section className="py-16 lg:py-24 bg-white border-b border-[#16324F]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Academic Statement (5 cols) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="font-mono-meta text-xs uppercase tracking-widest text-[#537C78] font-semibold">
              Academic Purpose &amp; Scope
            </div>

            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#16324F] leading-tight">
              At the intersection of law, governance and financial markets.
            </h2>

            <p className="text-[#202832]/80 text-base font-sans-ui leading-relaxed font-light">
              The Journal of Corporate and Financial Laws is established to bridge foundational doctrinal legal analysis with real-world financial architecture. We provide a peer-reviewed forum for rigorous scholarship examining the statutory, regulatory, and judicial frameworks that govern capital formation and enterprise stewardship.
            </p>

            <div className="pt-2">
              <Link
                href="/about/journal"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#16324F]/08 text-[#16324F] font-sans-ui text-xs font-semibold hover:bg-[#16324F] hover:text-white transition-all group"
              >
                <span>Read Full Aims &amp; Scope</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: 9 Key Focus Areas (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {mandateTopics.map((topic) => (
              <div
                key={topic.index}
                className="p-5 rounded-lg border border-[#16324F]/10 bg-[#F8F7F2]/60 hover:bg-white hover:border-[#B99A5E]/50 hover:shadow-sm transition-all duration-200 group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono-meta text-xs font-bold text-[#B99A5E]">
                    {topic.index}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#537C78]/40 group-hover:bg-[#537C78] transition-colors" />
                </div>
                <h3 className="font-serif-display font-semibold text-base text-[#16324F] mb-1">
                  {topic.title}
                </h3>
                <p className="text-xs text-[#697480] font-sans-ui leading-relaxed">
                  {topic.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

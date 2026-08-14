"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, FileCheck, Sparkles } from "lucide-react";
import { FadeIn } from "@/components/motion/MotionWrapper";

// Illustrated SVG for the submission callout
function ManuscriptIllustration() {
  return (
    <svg viewBox="0 0 240 180" fill="none" className="w-full h-full max-w-xs mx-auto">
      {/* Paper stack */}
      <rect x="30" y="40" width="100" height="130" rx="6" fill="#FAF9F4" stroke="#16324F" strokeWidth="1.5" opacity="0.9"/>
      <rect x="40" y="30" width="100" height="130" rx="6" fill="#F5F2EA" stroke="#16324F" strokeWidth="1.2" opacity="0.7"/>
      <rect x="50" y="20" width="100" height="130" rx="6" fill="#fff" stroke="#16324F" strokeWidth="1.5"/>
      {/* Lines on top paper */}
      <line x1="64" y1="45" x2="136" y2="45" stroke="#B8943F" strokeWidth="2" strokeLinecap="round"/>
      <line x1="64" y1="60" x2="136" y2="60" stroke="#16324F" strokeWidth="1" strokeLinecap="round" opacity="0.3"/>
      <line x1="64" y1="72" x2="136" y2="72" stroke="#16324F" strokeWidth="1" strokeLinecap="round" opacity="0.3"/>
      <line x1="64" y1="84" x2="120" y2="84" stroke="#16324F" strokeWidth="1" strokeLinecap="round" opacity="0.2"/>
      {/* Seal */}
      <circle cx="95" cy="114" r="18" fill="#16324F" opacity="0.12" stroke="#B8943F" strokeWidth="1.5"/>
      <circle cx="95" cy="114" r="10" fill="#B8943F" opacity="0.2"/>
      {/* Pen/quill */}
      <path d="M160 25 L180 10 L185 20 L165 60 Z" fill="#3D7068" opacity="0.6"/>
      <line x1="165" y1="60" x2="160" y2="70" stroke="#3D7068" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M180 10 Q190 5 188 15" fill="#B8943F" opacity="0.5"/>
      {/* Sparkle decorations */}
      <text x="200" y="50" fontSize="12" fill="#B8943F" opacity="0.6">✦</text>
      <text x="20" y="25" fontSize="8" fill="#3D7068" opacity="0.5">✦</text>
    </svg>
  );
}

export function SubmissionCallout() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Deep navy gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1927] via-[#16324F] to-[#0E2438]" />

      {/* Dot matrix */}
      <div className="absolute inset-0 bg-governance-grid-dark opacity-30 pointer-events-none" />

      {/* Gold organic blob */}
      <div className="absolute top-0 right-0 w-96 h-96 organic-blob bg-[#B8943F]/10 animate-drift pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 organic-blob-2 bg-[#3D7068]/10 animate-float-reverse pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left illustration column (4 cols) */}
          <div className="lg:col-span-4 hidden lg:flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20, rotate: -5 }}
              whileInView={{ opacity: 1, y: 0, rotate: -2 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-56 animate-float"
            >
              <ManuscriptIllustration />
            </motion.div>
          </div>

          {/* Right content (8 cols) */}
          <div className="lg:col-span-8 text-white space-y-7">
            <FadeIn direction="up">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-px bg-[#B8943F]" />
                  <span className="text-xs font-mono-meta text-[#B8943F] uppercase tracking-[0.2em] font-semibold">
                    Call for Manuscripts · Rolling Submissions
                  </span>
                </div>
                <h2 className="font-display text-4xl sm:text-5xl font-black leading-tight">
                  Share Your Scholarship with India's Premier Corporate Law Journal
                </h2>
                <p className="font-editorial text-[#F5F2EA]/80 text-lg leading-relaxed max-w-xl">
                  We invite doctrinal articles, empirical studies, legislative analyses, case comments, and book reviews from scholars, practitioners, judges, and students across legal academia.
                </p>
              </div>
            </FadeIn>

            {/* Feature chips */}
            <FadeIn direction="up" delay={0.1}>
              <div className="flex flex-wrap gap-3">
                {[
                  "Bluebook 21st Citation",
                  "Double-Blind Peer Review",
                  "Diamond Open Access",
                  "6-Week Turnaround",
                ].map(label => (
                  <span key={label} className="tag-pill bg-white/10 text-white border border-white/15">
                    {label}
                  </span>
                ))}
              </div>
            </FadeIn>

            {/* Categories */}
            <FadeIn direction="up" delay={0.15}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {["Articles", "Essays", "Case Comments", "Book Reviews"].map((c, i) => (
                  <div key={c} className="rounded-2xl bg-white/06 border border-white/10 p-4 text-center">
                    <div className="font-display text-base font-bold text-white mb-1">{c}</div>
                    <div className="text-[10px] font-mono-meta text-[#B8943F]/90">
                      {i === 0 ? "6,000–12,000 words" : i === 1 ? "3,000–6,000 words" : i === 2 ? "2,500–4,000 words" : "1,200–2,500 words"}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link href="/submission-guidelines" className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#B8943F] text-[#0B1927] font-semibold font-sans-ui text-sm hover:bg-[#D4A843] transition-all shadow-lg hover:-translate-y-0.5">
                  Read Submission Guidelines
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/submission-guidelines#checklist" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/20 text-white font-semibold font-sans-ui text-sm hover:bg-white/10 transition-all">
                  <FileCheck className="w-4 h-4 text-[#B8943F]" />
                  Author Checklist
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

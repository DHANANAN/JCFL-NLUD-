"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Sparkles, Download, ExternalLink } from "lucide-react";
import { publications } from "@/lib/data/publications";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/MotionWrapper";

// Illustrated icon SVGs embedded inline
function ArticleTypeIcon({ type }: { type: string }) {
  if (type.toLowerCase().includes("article")) {
    return (
      <svg viewBox="0 0 36 36" className="w-8 h-8" fill="none">
        <rect x="4" y="4" width="28" height="28" rx="6" fill="#EAF0F5" stroke="#16324F" strokeWidth="1.2"/>
        <line x1="10" y1="12" x2="26" y2="12" stroke="#B8943F" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="10" y1="16" x2="26" y2="16" stroke="#16324F" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
        <line x1="10" y1="20" x2="22" y2="20" stroke="#16324F" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
        <line x1="10" y1="24" x2="20" y2="24" stroke="#16324F" strokeWidth="1" strokeLinecap="round" opacity="0.3"/>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 36 36" className="w-8 h-8" fill="none">
      <rect x="4" y="4" width="28" height="28" rx="6" fill="#E1EDEB" stroke="#3D7068" strokeWidth="1.2"/>
      <circle cx="18" cy="16" r="5" stroke="#3D7068" strokeWidth="1.5"/>
      <line x1="10" y1="26" x2="26" y2="26" stroke="#3D7068" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function FeaturedScholarship() {
  const featured = publications.slice(0, 3);

  return (
    <section className="relative py-24 lg:py-32 bg-[#F5F2EA]">
      {/* Top organic wave */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-14">
          <path d="M0,30 C360,70 720,0 1080,40 C1260,60 1380,20 1440,30 L1440,0 L0,0 Z" fill="#FAF9F4"/>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-px bg-[#B8943F]" />
                <span className="text-xs font-mono-meta text-[#B8943F] uppercase tracking-[0.2em] font-semibold">
                  Curated Scholarship
                </span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-black text-[#16324F] leading-tight">
                Featured Publications
              </h2>
              <p className="text-[#6B7A8D] font-editorial text-base max-w-md">
                Inaugural peer-reviewed research from Volume 1 · Issue 1 (2026)
              </p>
            </div>

            <Link href="/publications" className="group inline-flex items-center gap-2 text-sm font-semibold font-sans-ui text-[#16324F] hover:text-[#B8943F] transition-colors">
              Explore all articles
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeIn>

        {/* Cards */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          {featured.map((pub) => (
            <StaggerItem key={pub.id}>
              <article className="card-soft h-full flex flex-col overflow-hidden group cursor-pointer">
                {/* Card top band — coloured */}
                <div
                  className="h-2 w-full"
                  style={{
                    background: pub.researchAreas[0]?.toLowerCase().includes("securities")
                      ? "linear-gradient(90deg, #3D7068, #537C78)"
                      : pub.researchAreas[0]?.toLowerCase().includes("insolvency")
                      ? "linear-gradient(90deg, #B8943F, #D4A843)"
                      : "linear-gradient(90deg, #16324F, #234668)"
                  }}
                />

                <div className="p-7 flex flex-col flex-1 gap-4">
                  {/* Meta row */}
                  <div className="flex items-center justify-between">
                    <ArticleTypeIcon type={pub.publicationType} />
                    <span className="text-[10px] font-mono-meta text-[#6B7A8D] uppercase tracking-[0.15em]">
                      {pub.readingTimeMinutes} min read
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-lg font-bold text-[#16324F] leading-snug group-hover:text-[#B8943F] transition-colors">
                    <Link href={`/publications/${pub.slug}`}>{pub.title}</Link>
                  </h3>

                  {/* Authors */}
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {pub.authors.slice(0, 2).map((a, i) => (
                        <div key={a.slug} className="w-7 h-7 rounded-full bg-gradient-to-br from-[#16324F] to-[#3D7068] border-2 border-white flex items-center justify-center text-white text-[10px] font-bold font-display">
                          {a.name.charAt(0)}
                        </div>
                      ))}
                    </div>
                    <span className="text-xs font-sans-ui text-[#6B7A8D] font-medium">
                      {pub.authors.map(a => a.name.split(' ').slice(-1)[0]).join(', ')}
                    </span>
                  </div>

                  {/* Abstract snippet */}
                  <p className="text-sm font-editorial text-[#3A4A5C] line-clamp-3 leading-relaxed flex-1">
                    {pub.abstract}
                  </p>

                  {/* Keywords */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {pub.keywords.slice(0, 2).map(kw => (
                      <span key={kw} className="text-[10px] font-sans-ui px-2.5 py-0.5 rounded-full bg-[#16324F]/06 text-[#16324F] font-medium border border-[#16324F]/08">
                        {kw}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="pt-3 border-t border-[#16324F]/06 flex items-center justify-between">
                    <span className="text-[11px] font-mono-meta text-[#3D7068] font-medium">
                      pp. {pub.startPage}–{pub.endPage}
                    </span>
                    <Link
                      href={`/publications/${pub.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold font-sans-ui text-[#16324F] group-hover:text-[#B8943F] transition-colors"
                    >
                      Read <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-14">
          <path d="M0,20 C360,60 720,0 1080,50 C1260,70 1380,25 1440,20 L1440,60 L0,60 Z" fill="#FAF9F4"/>
        </svg>
      </div>
    </section>
  );
}

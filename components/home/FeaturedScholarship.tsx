"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Quote, Eye, User, Sparkles } from "lucide-react";
import { featuredPublications } from "@/lib/data/publications";
import { Publication } from "@/lib/data/types";
import { CitationModal } from "@/components/article/CitationModal";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/MotionWrapper";

export function FeaturedScholarship() {
  const [citePublication, setCitePublication] = useState<Publication | null>(null);

  return (
    <section className="py-20 lg:py-28 bg-[#F8F7F2] border-b border-[#16324F]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <div className="flex items-center gap-1.5 font-mono-meta text-xs uppercase tracking-widest text-[#537C78] font-bold mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#B99A5E]" />
                Curated Doctrinal Research
              </div>
              <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#16324F]">
                Featured Publications
              </h2>
            </div>

            <Link
              href="/publications"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#16324F] hover:text-[#B99A5E] transition-colors group"
            >
              <span>View All Publications Archive</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </FadeIn>

        {/* Editorial Articles Staggered Grid */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredPublications.map((pub) => (
            <StaggerItem key={pub.id} className="h-full">
              <article className="relative h-full flex flex-col justify-between rounded-2xl bg-white p-8 border border-[#16324F]/10 hover:border-[#B99A5E] hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1.5">
                {/* Top Meta Line */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[#16324F]/08 text-xs font-mono-meta">
                    <span className="px-2.5 py-0.5 rounded bg-[#16324F]/08 text-[#16324F] font-bold uppercase text-[10px] tracking-wider">
                      {pub.publicationType}
                    </span>
                    <div className="flex items-center gap-1.5 text-[#697480]">
                      <Clock className="w-3.5 h-3.5 text-[#537C78]" />
                      <span>{pub.readingTimeMinutes} min read</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif-display text-xl font-bold text-[#16324F] leading-snug group-hover:text-[#16324F]/85 transition-colors mb-3">
                    <Link href={`/publications/${pub.slug}`} className="hover:underline">
                      {pub.title}
                    </Link>
                  </h3>

                  {/* Authors */}
                  <div className="flex items-center gap-2 mb-4 text-xs font-sans-ui text-[#697480]">
                    <User className="w-3.5 h-3.5 text-[#B99A5E] shrink-0" />
                    <span className="font-semibold text-[#202832]">
                      {pub.authors.map((a) => a.name).join(", ")}
                    </span>
                  </div>

                  {/* Abstract snippet */}
                  <p className="text-xs sm:text-sm text-[#202832]/75 font-sans-ui line-clamp-3 leading-relaxed mb-6 font-light">
                    {pub.abstract}
                  </p>
                </div>

                {/* Card Footer with Quick Cite & Read Actions */}
                <div className="pt-4 border-t border-[#16324F]/08 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {pub.researchAreas.slice(0, 1).map((area) => (
                      <span
                        key={area}
                        className="text-[11px] font-sans-ui text-[#537C78] bg-[#E8EFEB] px-2.5 py-0.5 rounded-full font-medium"
                      >
                        {area}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setCitePublication(pub)}
                      className="p-1.5 rounded-md hover:bg-[#F8F7F2] text-[#697480] hover:text-[#16324F] transition-colors text-xs font-mono-meta flex items-center gap-1"
                      title="Quick Cite"
                    >
                      <Quote className="w-3.5 h-3.5 text-[#B99A5E]" />
                      <span className="hidden sm:inline">Cite</span>
                    </button>

                    <Link
                      href={`/publications/${pub.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#16324F] group-hover:text-[#B99A5E] transition-colors"
                    >
                      <span>Read</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Citation Modal */}
      {citePublication && (
        <CitationModal
          publication={citePublication}
          isOpen={!!citePublication}
          onClose={() => setCitePublication(null)}
        />
      )}
    </section>
  );
}

"use client";

import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { researchAreas } from "@/lib/data/research-areas";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/MotionWrapper";

export function ResearchAreaGrid() {
  return (
    <section className="py-20 lg:py-28 bg-[#F8F7F2] border-b border-[#16324F]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <div className="flex items-center gap-1.5 font-mono-meta text-xs uppercase tracking-widest text-[#537C78] font-bold mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#B99A5E]" />
                Thematic Taxonomy
              </div>
              <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#16324F]">
                Fields of Legal &amp; Financial Inquiry
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#697480] max-w-md font-sans-ui leading-relaxed">
              Browse our complete taxonomy of 12 research domains spanning foundational commercial doctrines to modern digital asset governance.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {researchAreas.map((area) => (
            <StaggerItem key={area.id} className="h-full">
              <Link
                href={`/publications?area=${encodeURIComponent(area.title)}`}
                className="relative p-6 rounded-xl bg-white border border-[#16324F]/10 hover:border-[#B99A5E] hover:shadow-xl transition-all duration-300 group flex flex-col justify-between h-full hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono-meta text-xs font-bold text-[#B99A5E] group-hover:scale-110 transition-transform origin-left">
                      {area.indexNumber}
                    </span>
                    <div className="p-1 rounded bg-[#F8F7F2] text-[#697480] group-hover:bg-[#16324F] group-hover:text-white transition-all">
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                  <h3 className="font-serif-display font-bold text-base text-[#16324F] group-hover:text-[#16324F] mb-2 leading-snug">
                    {area.title}
                  </h3>
                  <p className="text-xs text-[#697480] font-sans-ui line-clamp-2 leading-relaxed mb-4">
                    {area.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#16324F]/06 flex items-center justify-between text-[11px] font-mono-meta text-[#537C78]">
                  <span>{area.keyTopics.length} Key Sub-Themes</span>
                  <span className="text-[#16324F] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Filter Archive →
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

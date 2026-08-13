"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, FileText, Quote, Sparkles } from "lucide-react";
import { publications } from "@/lib/data/publications";
import { Publication } from "@/lib/data/types";
import { CitationModal } from "@/components/article/CitationModal";
import { FadeIn } from "@/components/motion/MotionWrapper";

export function LatestPublicationsTable() {
  const [citePublication, setCitePublication] = useState<Publication | null>(null);

  return (
    <section className="py-20 lg:py-28 bg-[#F8F7F2] border-b border-[#16324F]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="flex items-center gap-1.5 font-mono-meta text-xs uppercase tracking-widest text-[#537C78] font-bold mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#B99A5E]" />
                Volume 1 · Issue 1
              </div>
              <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#16324F]">
                Inaugural Issue Index
              </h2>
            </div>

            <Link
              href="/publications"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#16324F] hover:text-[#B99A5E] transition-colors group"
            >
              <span>Full Publication Archive</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </FadeIn>

        {/* Desktop Table View */}
        <FadeIn direction="up" delay={0.15}>
          <div className="hidden lg:block bg-white rounded-2xl border border-[#16324F]/10 overflow-hidden shadow-sm">
            <table className="w-full text-left border-collapse font-sans-ui">
              <thead>
                <tr className="bg-[#16324F]/04 border-b border-[#16324F]/10 text-[11px] font-mono-meta uppercase tracking-wider text-[#697480]">
                  <th className="py-4 px-5 w-16">No.</th>
                  <th className="py-4 px-4 w-28">Type</th>
                  <th className="py-4 px-4">Article Title</th>
                  <th className="py-4 px-4 w-52">Author(s)</th>
                  <th className="py-4 px-4 w-44">Research Area</th>
                  <th className="py-4 px-5 text-right w-36">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#16324F]/08 text-sm">
                {publications.map((pub, idx) => (
                  <tr
                    key={pub.id}
                    className="hover:bg-[#F8F7F2]/90 transition-colors group"
                  >
                    <td className="py-4 px-5 font-mono-meta text-xs text-[#B99A5E] font-bold">
                      {String(idx + 1).padStart(2, "0")}
                    </td>
                    <td className="py-4 px-4">
                      <span className="inline-block text-[10px] font-mono-meta px-2.5 py-0.5 rounded bg-[#16324F]/06 text-[#16324F] uppercase font-bold">
                        {pub.publicationType}
                      </span>
                    </td>
                    <td className="py-4 px-4 font-serif-display font-medium text-[#16324F]">
                      <Link
                        href={`/publications/${pub.slug}`}
                        className="group-hover:text-[#16324F] hover:underline transition-colors block leading-snug"
                      >
                        {pub.title}
                      </Link>
                    </td>
                    <td className="py-4 px-4 text-xs text-[#202832]/80 font-sans-ui font-medium">
                      {pub.authors.map((a) => a.name).join(", ")}
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-[11px] text-[#537C78] bg-[#E8EFEB] px-2.5 py-0.5 rounded-full font-medium">
                        {pub.researchAreas[0]}
                      </span>
                    </td>
                    <td className="py-4 px-5 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => setCitePublication(pub)}
                          className="p-1 rounded text-[#697480] hover:text-[#16324F] hover:bg-white transition-colors text-xs font-mono-meta"
                          title="Cite Article"
                        >
                          <Quote className="w-3.5 h-3.5 text-[#B99A5E]" />
                        </button>
                        <Link
                          href={`/publications/${pub.slug}`}
                          className="inline-flex items-center gap-1 text-xs font-bold text-[#16324F] group-hover:text-[#B99A5E] transition-colors"
                        >
                          <span>Read</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>

        {/* Mobile / Tablet Stacked Cards */}
        <div className="lg:hidden space-y-3">
          {publications.map((pub, idx) => (
            <div
              key={pub.id}
              className="p-6 rounded-xl bg-white border border-[#16324F]/10 hover:border-[#16324F]/30 transition-all shadow-xs"
            >
              <div className="flex items-center justify-between gap-2 text-xs font-mono-meta text-[#697480] mb-2 pb-2 border-b border-[#16324F]/06">
                <span className="font-bold text-[#B99A5E]">#{String(idx + 1).padStart(2, "0")}</span>
                <span className="px-2 py-0.5 rounded bg-[#16324F]/08 text-[#16324F] uppercase text-[10px] font-bold">
                  {pub.publicationType}
                </span>
                <span>{pub.year}</span>
              </div>

              <h3 className="font-serif-display font-bold text-base text-[#16324F] mb-2 leading-snug">
                <Link href={`/publications/${pub.slug}`}>{pub.title}</Link>
              </h3>

              <div className="text-xs text-[#697480] mb-3">
                {pub.authors.map((a) => a.name).join(", ")}
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-[#16324F]/06">
                <span className="text-[11px] text-[#537C78] bg-[#E8EFEB] px-2.5 py-0.5 rounded font-medium">
                  {pub.researchAreas[0]}
                </span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setCitePublication(pub)}
                    className="text-xs font-mono-meta text-[#B99A5E] hover:underline"
                  >
                    Cite
                  </button>
                  <Link
                    href={`/publications/${pub.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#16324F]"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#B99A5E]" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
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

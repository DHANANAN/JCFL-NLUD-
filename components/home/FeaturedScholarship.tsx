"use client";

import Link from "next/link";
import { ArrowRight, Clock, Download, FileText, User } from "lucide-react";
import { featuredPublications } from "@/lib/data/publications";

export function FeaturedScholarship() {
  return (
    <section className="py-16 lg:py-24 bg-[#F8F7F2] border-b border-[#16324F]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="font-mono-meta text-xs uppercase tracking-widest text-[#537C78] font-semibold mb-2">
              Curated Research
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#16324F]">
              Featured Publications
            </h2>
          </div>

          <Link
            href="/publications"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#16324F] hover:text-[#B99A5E] transition-colors group"
          >
            <span>View All Publications</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Editorial Articles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredPublications.map((pub) => (
            <article
              key={pub.id}
              className="relative flex flex-col justify-between rounded-xl bg-white p-7 border border-[#16324F]/10 hover:border-[#16324F]/30 hover:shadow-lg transition-all duration-300 group"
            >
              {/* Top Meta Line */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[#16324F]/08 text-xs font-mono-meta">
                  <span className="px-2 py-0.5 rounded bg-[#16324F]/08 text-[#16324F] font-semibold uppercase text-[10px] tracking-wider">
                    {pub.publicationType}
                  </span>
                  <div className="flex items-center gap-1.5 text-[#697480]">
                    <Clock className="w-3 h-3 text-[#537C78]" />
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
                  <span className="font-medium text-[#202832]">
                    {pub.authors.map((a) => a.name).join(", ")}
                  </span>
                </div>

                {/* Abstract snippet */}
                <p className="text-xs sm:text-sm text-[#202832]/75 font-sans-ui line-clamp-3 leading-relaxed mb-6 font-light">
                  {pub.abstract}
                </p>
              </div>

              {/* Card Footer */}
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

                <Link
                  href={`/publications/${pub.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#16324F] group-hover:text-[#B99A5E] transition-colors"
                >
                  <span>Read</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

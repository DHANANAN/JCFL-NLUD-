import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Library, BookOpen, Calendar, ArrowRight, FileCheck, Layers, Sparkles } from "lucide-react";
import { issues } from "@/lib/data/issues";

export const metadata: Metadata = {
  title: "Journal Archive | Volumes & Issues",
  description:
    "Explore past, present, and forthcoming volumes of the Journal of Corporate and Financial Laws published by CCLGFL.",
};

export default function ArchivePage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-[#F8F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header Hero Banner */}
        <div className="rounded-2xl bg-white border border-[#16324F]/10 p-8 sm:p-12 lg:p-16 shadow-xs relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#16324F]/15 bg-[#F8F7F2] text-[#16324F] font-mono-meta text-xs uppercase tracking-widest font-semibold">
              <Library className="w-3.5 h-3.5 text-[#B99A5E]" />
              Historical &amp; Forthcoming Repository
            </div>

            <h1 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#16324F] leading-tight">
              Journal Archive &amp; Volume Index
            </h1>

            <p className="text-base sm:text-lg text-[#697480] font-sans-ui leading-relaxed font-light">
              Browse the complete volume chronology of the Journal of Corporate and Financial Laws. As an inaugural publication established in 2026, the archive will continuously document ongoing scholarship.
            </p>
          </div>
        </div>

        {/* Volume 1 Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#16324F]/10 pb-4">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#B99A5E]" />
              <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#16324F]">
                2026 — Volume 1
              </h2>
            </div>
            <span className="font-mono-meta text-xs text-[#537C78] uppercase font-semibold">
              Inaugural Publishing Year
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {issues.map((issue) => (
              <div
                key={`${issue.volume}-${issue.issue}`}
                className="p-8 rounded-2xl bg-white border border-[#16324F]/10 hover:border-[#B99A5E] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono-meta text-xs font-bold text-[#B99A5E]">
                      VOLUME {issue.volume} · ISSUE {issue.issue}
                    </span>
                    <span
                      className={`text-[10px] font-mono-meta px-2.5 py-0.5 rounded-full font-semibold uppercase ${
                        issue.status === "Published"
                          ? "bg-[#E8EFEB] text-[#537C78]"
                          : "bg-[#16324F]/08 text-[#16324F]"
                      }`}
                    >
                      {issue.status}
                    </span>
                  </div>

                  <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#16324F] leading-snug">
                    {issue.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#697480] font-sans-ui leading-relaxed font-light">
                    {issue.description}
                  </p>

                  <div className="flex items-center gap-4 text-xs font-mono-meta text-[#697480] pt-2">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#537C78]" />
                      <span>{issue.publicationDate}</span>
                    </div>
                    {issue.articleCount > 0 && (
                      <div className="flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-[#B99A5E]" />
                        <span>{issue.articleCount} Articles</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#16324F]/08 flex items-center justify-between">
                  {issue.status === "Published" ? (
                    <Link
                      href="/publications"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#16324F] text-white text-xs font-semibold hover:bg-[#0D1F31] transition-colors"
                    >
                      <span>Explore Issue Articles</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#B99A5E]" />
                    </Link>
                  ) : (
                    <Link
                      href="/submission-guidelines"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded border border-[#16324F]/20 text-[#16324F] text-xs font-medium hover:bg-[#F8F7F2] transition-colors"
                    >
                      <span>Submit for this Issue</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  )}

                  <span className="text-[11px] font-mono-meta text-[#697480]">
                    Open Access
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

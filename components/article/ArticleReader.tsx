"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Clock, Download, Quote, Share2, Tag, BookOpen, FileText, ArrowRight, User, ZoomIn, ZoomOut } from "lucide-react";
import { Publication } from "@/lib/data/types";
import { publications } from "@/lib/data/publications";
import { ArticleTOC } from "./ArticleTOC";
import { FootnoteHover, FootnoteItem } from "./FootnoteHover";
import { CitationModal } from "./CitationModal";
import { PDFViewerModal } from "./PDFViewerModal";
import { ReadingProgressBar } from "./ReadingProgressBar";
import { ShareMenu } from "./ShareMenu";

interface ArticleReaderProps {
  publication: Publication;
}

export function ArticleReader({ publication }: ArticleReaderProps) {
  const [citationModalOpen, setCitationModalOpen] = useState(false);
  const [pdfModalOpen, setPdfModalOpen] = useState(false);
  const [fontSize, setFontSize] = useState<"normal" | "large" | "larger">("normal");

  const relatedPublications = publications
    .filter((p) => p.id !== publication.id && p.researchAreas.some((r) => publication.researchAreas.includes(r)))
    .slice(0, 3);

  const fontSizeClass = {
    normal: "text-base sm:text-lg leading-[1.85]",
    large: "text-lg sm:text-xl leading-[1.9]",
    larger: "text-xl sm:text-2xl leading-[2.0]",
  }[fontSize];

  return (
    <>
      <ReadingProgressBar />

      <div className="py-10 sm:py-14 bg-[#F8F7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Back Navigation Bar */}
          <div className="flex items-center justify-between gap-4 text-xs font-sans-ui text-[#697480]">
            <Link
              href="/publications"
              className="inline-flex items-center gap-1.5 hover:text-[#16324F] transition-colors font-medium group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Publications Archive</span>
            </Link>

            <div className="flex items-center gap-2 font-mono-meta">
              <span className="text-[#B99A5E]">VOL. {publication.volume} · ISSUE {publication.issue}</span>
              <span>·</span>
              <span>{publication.publicationDate}</span>
            </div>
          </div>

          {/* Article Header Card */}
          <header className="rounded-2xl bg-white border border-[#16324F]/10 p-8 sm:p-12 lg:p-14 shadow-xs space-y-6">
            {/* Top Meta Line */}
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono-meta pb-4 border-b border-[#16324F]/08">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded bg-[#16324F]/08 text-[#16324F] font-bold uppercase tracking-wider text-[10px]">
                  {publication.publicationType}
                </span>
                <span className="text-[#537C78] font-medium bg-[#E8EFEB] px-2 py-0.5 rounded">
                  {publication.researchAreas[0]}
                </span>
              </div>

              <div className="flex items-center gap-4 text-[#697480]">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#537C78]" />
                  <span>{publication.readingTimeMinutes} min read</span>
                </div>
                <span>·</span>
                <span>Pages {publication.startPage}–{publication.endPage}</span>
              </div>
            </div>

            {/* Title & Subtitle */}
            <div className="space-y-3">
              <h1 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#16324F] leading-[1.15]">
                {publication.title}
              </h1>
              {publication.subtitle && (
                <p className="font-serif-display text-base sm:text-lg lg:text-xl text-[#697480] italic leading-relaxed font-light">
                  {publication.subtitle}
                </p>
              )}
            </div>

            {/* Authors & Affiliations */}
            <div className="pt-4 border-t border-[#16324F]/08 flex flex-wrap items-center gap-6">
              {publication.authors.map((author) => (
                <div key={author.slug} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#16324F]/08 flex items-center justify-center text-[#16324F] font-serif-display font-bold text-sm shrink-0">
                    {author.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-serif-display font-bold text-sm text-[#16324F]">
                      {author.name}
                    </div>
                    <div className="text-xs text-[#697480] font-sans-ui">
                      {author.affiliation}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Bar (Cite, PDF, Share, Font Size) */}
            <div className="pt-6 border-t border-[#16324F]/08 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setCitationModalOpen(true)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-[#16324F] text-white text-xs font-semibold hover:bg-[#0D1F31] transition-all shadow-2xs"
                >
                  <Quote className="w-3.5 h-3.5 text-[#B99A5E]" />
                  <span>Cite This Article</span>
                </button>

                <button
                  onClick={() => setPdfModalOpen(true)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md border border-[#16324F]/20 bg-white hover:bg-[#F8F7F2] text-[#16324F] text-xs font-semibold transition-all shadow-2xs"
                >
                  <Download className="w-3.5 h-3.5 text-[#537C78]" />
                  <span>Download / View PDF</span>
                </button>

                <ShareMenu title={publication.title} />
              </div>

              {/* Reading Size Controls */}
              <div className="flex items-center gap-1 border border-[#16324F]/15 rounded p-0.5 bg-[#F8F7F2] text-xs font-mono-meta">
                <button
                  onClick={() => setFontSize("normal")}
                  className={`px-2 py-1 rounded ${fontSize === "normal" ? "bg-white shadow-2xs text-[#16324F] font-bold" : "text-[#697480]"}`}
                  title="Normal Text Size"
                >
                  A
                </button>
                <button
                  onClick={() => setFontSize("large")}
                  className={`px-2 py-1 rounded ${fontSize === "large" ? "bg-white shadow-2xs text-[#16324F] font-bold" : "text-[#697480]"}`}
                  title="Large Text Size"
                >
                  A+
                </button>
                <button
                  onClick={() => setFontSize("larger")}
                  className={`px-2 py-1 rounded ${fontSize === "larger" ? "bg-white shadow-2xs text-[#16324F] font-bold" : "text-[#697480]"}`}
                  title="Extra Large Text Size"
                >
                  A++
                </button>
              </div>
            </div>
          </header>

          {/* Main Reading Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Rail: Sticky Table of Contents (3 cols) */}
            <aside className="hidden lg:block lg:col-span-3 sticky top-24 bg-white p-6 rounded-xl border border-[#16324F]/10 space-y-6">
              <ArticleTOC items={publication.tableOfContents} />

              <div className="pt-4 border-t border-[#16324F]/08 text-[11px] font-mono-meta text-[#697480] space-y-1">
                <div>DOI: {publication.doi || "[To be assigned]"}</div>
                <div>Open Access Repository</div>
              </div>
            </aside>

            {/* Center / Right: Article Content Body (9 cols) */}
            <main className="lg:col-span-9 space-y-8 bg-white p-8 sm:p-12 lg:p-14 rounded-2xl border border-[#16324F]/10 shadow-xs">
              {/* Abstract Box */}
              <div className="p-6 sm:p-8 rounded-xl bg-[#F8F7F2] border-l-4 border-[#16324F] space-y-3">
                <div className="font-mono-meta text-xs uppercase tracking-widest text-[#16324F] font-bold">
                  Abstract
                </div>
                <p className="font-serif-display text-sm sm:text-base leading-relaxed text-[#202832]/90 font-light">
                  {publication.abstract}
                </p>

                {/* Keywords */}
                <div className="pt-3 border-t border-[#16324F]/10 flex flex-wrap items-center gap-2">
                  <span className="font-mono-meta text-[10px] text-[#697480] uppercase tracking-wider font-semibold">
                    Keywords:
                  </span>
                  {publication.keywords.map((kw) => (
                    <span
                      key={kw}
                      className="text-xs font-sans-ui text-[#16324F] bg-white px-2.5 py-0.5 rounded border border-[#16324F]/10"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Rendered Article Sections */}
              <div className="space-y-12 pt-4">
                {publication.sections.map((section, sIdx) => (
                  <section key={section.id} id={section.id} className="space-y-5 scroll-mt-24">
                    <h2 className="font-serif-display text-xl sm:text-2xl lg:text-3xl font-bold text-[#16324F] border-b border-[#16324F]/10 pb-3">
                      {section.title}
                    </h2>

                    <div className={`space-y-5 font-serif-display text-[#202832]/90 ${fontSizeClass}`}>
                      {section.paragraphs.map((para, pIdx) => {
                        // Render interactive footnote references if matching paragraph
                        const footnote = publication.footnotes[sIdx];
                        return (
                          <p key={pIdx} className="leading-relaxed">
                            {para}
                            {pIdx === 0 && footnote && (
                              <FootnoteHover id={footnote.id} text={footnote.text} />
                            )}
                          </p>
                        );
                      })}
                    </div>
                  </section>
                ))}
              </div>

              {/* Footnotes Section at Bottom */}
              <div id="footnotes-section" className="mt-16 pt-8 border-t-2 border-[#16324F]/15 space-y-4">
                <div className="font-mono-meta text-xs uppercase tracking-widest text-[#B99A5E] font-bold">
                  Footnotes &amp; References
                </div>
                <ol className="divide-y divide-[#16324F]/06">
                  {publication.footnotes.map((fn) => (
                    <FootnoteItem key={fn.id} id={fn.id} text={fn.text} />
                  ))}
                </ol>
              </div>
            </main>
          </div>

          {/* Related Scholarship Grid */}
          {relatedPublications.length > 0 && (
            <div className="pt-10 border-t border-[#16324F]/10 space-y-6">
              <h3 className="font-serif-display text-2xl font-bold text-[#16324F]">
                Related Publications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPublications.map((rel) => (
                  <article
                    key={rel.id}
                    className="p-6 rounded-xl bg-white border border-[#16324F]/10 hover:border-[#B99A5E] transition-all flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-mono-meta px-2 py-0.5 rounded bg-[#16324F]/08 text-[#16324F] uppercase font-semibold">
                        {rel.publicationType}
                      </span>
                      <h4 className="font-serif-display font-bold text-base text-[#16324F] mt-2 mb-2 leading-snug">
                        <Link href={`/publications/${rel.slug}`} className="hover:underline">
                          {rel.title}
                        </Link>
                      </h4>
                      <p className="text-xs text-[#697480] line-clamp-2">{rel.abstract}</p>
                    </div>

                    <Link
                      href={`/publications/${rel.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#16324F] mt-4 hover:text-[#B99A5E]"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Citation Modal */}
      <CitationModal
        publication={publication}
        isOpen={citationModalOpen}
        onClose={() => setCitationModalOpen(false)}
      />

      {/* PDF Reader Modal */}
      <PDFViewerModal
        publication={publication}
        isOpen={pdfModalOpen}
        onClose={() => setPdfModalOpen(false)}
      />
    </>
  );
}

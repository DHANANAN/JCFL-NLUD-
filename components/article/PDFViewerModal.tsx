"use client";

import { X, Download, Printer, ExternalLink, FileText, CheckCircle2 } from "lucide-react";
import { Publication } from "@/lib/data/types";

interface PDFViewerModalProps {
  publication: Publication;
  isOpen: boolean;
  onClose: () => void;
}

export function PDFViewerModal({ publication, isOpen, onClose }: PDFViewerModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1927]/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-4xl h-[85vh] bg-white rounded-xl shadow-2xl border border-[#16324F]/15 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#16324F]/10 bg-[#16324F] text-white">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="p-1.5 rounded bg-white/10 text-[#B99A5E] shrink-0">
              <FileText className="w-4 h-4" />
            </div>
            <div className="overflow-hidden">
              <div className="text-xs font-mono-meta text-[#B99A5E]">
                VOL. {publication.volume} · ISSUE {publication.issue} ({publication.year}) · PP. {publication.startPage}–{publication.endPage}
              </div>
              <h3 className="font-serif-display font-medium text-sm text-white truncate max-w-xl">
                {publication.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors"
              title="Print formatted version"
            >
              <Printer className="w-3.5 h-3.5 text-[#B99A5E]" />
              <span className="hidden sm:inline">Print Document</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-md text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close PDF viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF Simulated Reading Canvas */}
        <div className="flex-1 overflow-y-auto bg-[#EAF0F5] p-6 sm:p-10 flex justify-center">
          <div className="w-full max-w-2xl bg-white rounded shadow-md border border-[#16324F]/10 p-8 sm:p-14 space-y-6 text-[#202832] font-serif-display text-sm leading-relaxed">
            {/* Header branding */}
            <div className="border-b border-[#16324F]/15 pb-4 text-center space-y-1">
              <div className="text-xs uppercase font-mono-meta text-[#B99A5E] font-semibold">
                Journal of Corporate and Financial Laws
              </div>
              <div className="text-[10px] text-[#697480] uppercase tracking-wider font-mono-meta">
                Centre for Corporate Law, Governance &amp; Financial Laws
              </div>
              <div className="text-[11px] text-[#16324F] font-mono-meta pt-1">
                Volume {publication.volume} · Issue {publication.issue} · {publication.publicationDate}
              </div>
            </div>

            {/* Article Heading */}
            <div className="text-center space-y-2 pt-2">
              <h2 className="text-lg sm:text-xl font-bold text-[#16324F] leading-tight">
                {publication.title}
              </h2>
              <div className="text-xs text-[#202832] font-sans-ui font-medium">
                {publication.authors.map((a) => a.name).join(" & ")}
              </div>
              <div className="text-[11px] text-[#697480] italic font-sans-ui">
                {publication.authors[0]?.affiliation}
              </div>
            </div>

            {/* Abstract Box */}
            <div className="p-4 rounded bg-[#F8F7F2] border-l-2 border-[#537C78] text-xs font-sans-ui leading-relaxed space-y-1">
              <span className="font-bold text-[#16324F] uppercase tracking-wider font-mono-meta text-[10px]">
                Abstract —{" "}
              </span>
              <span>{publication.abstract}</span>
            </div>

            {/* Simulated Section Content */}
            <div className="space-y-4 pt-2 text-xs sm:text-sm">
              <h4 className="font-bold text-[#16324F] border-b border-[#16324F]/10 pb-1">
                {publication.sections[0]?.title}
              </h4>
              {publication.sections[0]?.paragraphs.map((p, i) => (
                <p key={i} className="text-justify indent-4 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            {/* Footer metadata */}
            <div className="pt-8 border-t border-[#16324F]/15 flex items-center justify-between text-[10px] font-mono-meta text-[#697480]">
              <span>[1 J. Corp. &amp; Fin. L. {publication.startPage}]</span>
              <span>Open Access Academic Dissemination</span>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-[#F8F7F2] border-t border-[#16324F]/10 flex items-center justify-between text-xs text-[#697480] font-sans-ui">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#537C78]" />
            <span>Digital Repository Format · Double-Blind Peer Reviewed</span>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded bg-[#16324F] text-white text-xs font-medium hover:bg-[#0D1F31] transition-colors"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
}

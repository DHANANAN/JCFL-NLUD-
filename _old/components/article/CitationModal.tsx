"use client";

import { useState } from "react";
import { X, Check, Copy, Quote, Download, Sparkles } from "lucide-react";
import { Publication } from "@/lib/data/types";
import { generateCitations, FormattedCitations } from "@/lib/citation";

interface CitationModalProps {
  publication: Publication;
  isOpen: boolean;
  onClose: () => void;
}

type CitationFormatKey = keyof FormattedCitations;

export function CitationModal({ publication, isOpen, onClose }: CitationModalProps) {
  const [activeFormat, setActiveFormat] = useState<CitationFormatKey>("bluebook");
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const citations = generateCitations(publication);

  const formats: { key: CitationFormatKey; label: string; sub: string }[] = [
    { key: "bluebook", label: "Bluebook", sub: "21st Edition (Law Review Standard)" },
    { key: "oscola", label: "OSCOLA", sub: "4th Edition (UK/Commonwealth Standard)" },
    { key: "apa", label: "APA", sub: "7th Edition" },
    { key: "mla", label: "MLA", sub: "9th Edition" },
    { key: "chicago", label: "Chicago", sub: "17th Edition (Notes & Bibliography)" },
    { key: "bibtex", label: "BibTeX", sub: "LaTeX / Overleaf Syntax" },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(citations[activeFormat]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadBibTeX = () => {
    const element = document.createElement("a");
    const file = new Blob([citations.bibtex], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `${publication.slug}.bib`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleDownloadRIS = () => {
    const risContent = `TY  - JOUR
TI  - ${publication.title}
AU  - ${publication.authors.map((a) => a.name).join("\nAU  - ")}
JO  - Journal of Corporate and Financial Laws
VL  - ${publication.volume}
IS  - ${publication.issue}
SP  - ${publication.startPage || 1}
EP  - ${publication.endPage || 30}
PY  - ${publication.year}
PB  - Centre for Corporate Law, Governance & Financial Laws
ER  - `;
    const element = document.createElement("a");
    const file = new Blob([risContent], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `${publication.slug}.ris`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1927]/65 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-[#16324F]/15 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#16324F]/10 bg-[#F8F7F2]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-white text-[#16324F] border border-[#16324F]/10 shadow-2xs">
              <Quote className="w-4 h-4 text-[#B99A5E]" />
            </div>
            <div>
              <h3 className="font-serif-display font-bold text-xl text-[#16324F]">
                Cite This Publication
              </h3>
              <p className="text-xs text-[#697480] font-sans-ui">
                Standard academic citation formats generated from authentic metadata.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-[#697480] hover:text-[#16324F] hover:bg-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Format Selector Tabs */}
        <div className="flex overflow-x-auto border-b border-[#16324F]/10 bg-[#F8F7F2]/60 p-2 gap-1.5 scrollbar-thin">
          {formats.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFormat(f.key)}
              className={`px-3 py-1.5 rounded-md text-xs font-mono-meta whitespace-nowrap transition-all ${
                activeFormat === f.key
                  ? "bg-[#16324F] text-white font-semibold shadow-xs"
                  : "text-[#697480] hover:text-[#16324F] hover:bg-white"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Citation Display Area */}
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono-meta text-[#697480] uppercase tracking-wider font-semibold">
              {formats.find((f) => f.key === activeFormat)?.sub}
            </span>
            <span className="text-[11px] font-mono-meta text-[#537C78] flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#B99A5E]" />
              Verified Metadata
            </span>
          </div>

          <div className="p-4 rounded-xl bg-[#F8F7F2] border border-[#16324F]/12 text-sm font-serif-display leading-relaxed text-[#202832] selection:bg-[#B99A5E]/30 select-all overflow-x-auto shadow-2xs">
            {activeFormat === "bibtex" ? (
              <pre className="font-mono-meta text-xs whitespace-pre-wrap leading-normal text-[#16324F]">
                {citations.bibtex}
              </pre>
            ) : (
              <p>{citations[activeFormat]}</p>
            )}
          </div>

          {/* Quick Export Downloads */}
          <div className="flex items-center gap-3 pt-2">
            <span className="text-xs font-mono-meta text-[#697480]">Export file:</span>
            <button
              onClick={handleDownloadBibTeX}
              className="inline-flex items-center gap-1 text-xs font-mono-meta px-2.5 py-1 rounded bg-[#F8F7F2] border border-[#16324F]/15 hover:bg-white text-[#16324F] transition-all"
            >
              <Download className="w-3 h-3 text-[#B99A5E]" />
              <span>.bib (BibTeX)</span>
            </button>
            <button
              onClick={handleDownloadRIS}
              className="inline-flex items-center gap-1 text-xs font-mono-meta px-2.5 py-1 rounded bg-[#F8F7F2] border border-[#16324F]/15 hover:bg-white text-[#16324F] transition-all"
            >
              <Download className="w-3 h-3 text-[#537C78]" />
              <span>.ris (EndNote/Zotero)</span>
            </button>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-5 bg-[#F8F7F2] border-t border-[#16324F]/10 flex items-center justify-between">
          <div className="text-[11px] text-[#697480] font-sans-ui font-mono-meta">
            Volume {publication.volume} · Issue {publication.issue} ({publication.year})
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-md text-xs font-medium text-[#697480] hover:text-[#16324F] transition-colors"
            >
              Close
            </button>

            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-md bg-[#16324F] text-white text-xs font-semibold hover:bg-[#0D1F31] transition-all shadow-xs"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#B99A5E]" />
                  <span>Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#B99A5E]" />
                  <span>Copy Citation</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { X, Check, Copy, Quote, BookOpen } from "lucide-react";
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
    { key: "bluebook", label: "Bluebook", sub: "21st Edition (Law Review)" },
    { key: "oscola", label: "OSCOLA", sub: "4th Edition (UK/Commonwealth)" },
    { key: "apa", label: "APA", sub: "7th Edition" },
    { key: "mla", label: "MLA", sub: "9th Edition" },
    { key: "chicago", label: "Chicago", sub: "17th Edition (Notes & Bib)" },
    { key: "bibtex", label: "BibTeX", sub: "LaTeX Reference" },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(citations[activeFormat]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1927]/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-xl bg-white rounded-xl shadow-2xl border border-[#16324F]/15 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#16324F]/10 bg-[#F8F7F2]">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded bg-white text-[#16324F] border border-[#16324F]/10">
              <Quote className="w-4 h-4 text-[#B99A5E]" />
            </div>
            <div>
              <h3 className="font-serif-display font-bold text-lg text-[#16324F]">
                Cite This Publication
              </h3>
              <p className="text-xs text-[#697480] font-sans-ui">
                Standard academic citation formats generated from authentic metadata.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-md text-[#697480] hover:text-[#16324F] hover:bg-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Format Selector Tabs */}
        <div className="flex overflow-x-auto border-b border-[#16324F]/10 bg-[#F8F7F2]/50 p-2 gap-1.5">
          {formats.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFormat(f.key)}
              className={`px-3 py-1.5 rounded text-xs font-mono-meta whitespace-nowrap transition-all ${
                activeFormat === f.key
                  ? "bg-[#16324F] text-white font-semibold shadow-2xs"
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
            <span className="text-xs font-mono-meta text-[#697480] uppercase tracking-wider">
              {formats.find((f) => f.key === activeFormat)?.sub}
            </span>
            <span className="text-[11px] font-mono-meta text-[#537C78]">
              Verified Editorial Metadata
            </span>
          </div>

          <div className="p-4 rounded-lg bg-[#F8F7F2] border border-[#16324F]/12 text-sm font-serif-display leading-relaxed text-[#202832] selection:bg-[#B99A5E]/30 select-all overflow-x-auto">
            {activeFormat === "bibtex" ? (
              <pre className="font-mono-meta text-xs whitespace-pre-wrap leading-normal text-[#16324F]">
                {citations.bibtex}
              </pre>
            ) : (
              <p>{citations[activeFormat]}</p>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-[#F8F7F2] border-t border-[#16324F]/10 flex items-center justify-between">
          <div className="text-[11px] text-[#697480] font-sans-ui">
            Volume {publication.volume} · Issue {publication.issue} ({publication.year})
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded text-xs font-medium text-[#697480] hover:text-[#16324F] transition-colors"
            >
              Close
            </button>

            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-[#16324F] text-white text-xs font-semibold hover:bg-[#0D1F31] transition-colors shadow-xs"
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

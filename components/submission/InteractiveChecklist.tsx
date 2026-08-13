"use client";

import { useState } from "react";
import { CheckCircle2, Circle, Sparkles, ArrowRight, RotateCcw, Download, FileCheck } from "lucide-react";
import confetti from "canvas-confetti";
import { checklistItems } from "@/lib/data/policies";

export function InteractiveChecklist() {
  const [checkedIds, setCheckedIds] = useState<string[]>([]);
  const [celebrated, setCelebrated] = useState(false);

  const toggleCheck = (id: string) => {
    if (checkedIds.includes(id)) {
      setCheckedIds(checkedIds.filter((item) => item !== id));
      setCelebrated(false);
    } else {
      const nextChecked = [...checkedIds, id];
      setCheckedIds(nextChecked);

      if (nextChecked.length === checklistItems.length && !celebrated) {
        setCelebrated(true);
        try {
          confetti({
            particleCount: 100,
            spread: 80,
            origin: { y: 0.6 },
            colors: ["#16324F", "#B99A5E", "#537C78"],
          });
        } catch {
          // fallback if canvas-confetti is not loaded
        }
      }
    }
  };

  const handleReset = () => {
    setCheckedIds([]);
    setCelebrated(false);
  };

  const handleDownloadSummary = () => {
    const summaryText = `JOURNAL OF CORPORATE AND FINANCIAL LAWS (JCFL)
Centre for Corporate Law, Governance & Financial Laws
=====================================================
AUTHOR PRE-SUBMISSION VERIFICATION SUMMARY
Date: ${new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
Status: Complete (${checkedIds.length} of ${checklistItems.length} Verified)

Checklist Criteria:
${checklistItems
  .map(
    (item, idx) =>
      `[${checkedIds.includes(item.id) ? "X" : " "}] ${idx + 1}. ${item.title}\n    - ${item.description}`
  )
  .join("\n\n")}

=====================================================
Submission Email: submissions.jcfl@institution.ac.in
Citation Standard: Bluebook (21st Edition)
Review Model: Double-Blind Peer Review
`;

    const element = document.createElement("a");
    const file = new Blob([summaryText], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "JCFL-Author-Submission-Checklist.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const completedCount = checkedIds.length;
  const totalCount = checklistItems.length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  return (
    <div id="checklist" className="rounded-2xl bg-white border border-[#16324F]/15 p-8 sm:p-10 shadow-sm">
      {/* Header & Progress */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#16324F]/10">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-mono-meta text-xs uppercase tracking-widest text-[#B99A5E] font-bold">
              Self-Assessment Protocol
            </span>
            {completedCount === totalCount && (
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#537C78] bg-[#E8EFEB] px-2.5 py-0.5 rounded-full">
                <Sparkles className="w-3.5 h-3.5" />
                Ready for Submission!
              </span>
            )}
          </div>
          <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#16324F] mt-1">
            Author Pre-Submission Checklist
          </h3>
          <p className="text-xs sm:text-sm text-[#697480] font-sans-ui mt-0.5">
            Verify every editorial and formatting requirement prior to transmitting your file.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="font-mono-meta font-extrabold text-lg text-[#16324F]">
              {completedCount} / {totalCount}
            </div>
            <div className="text-[10px] text-[#697480] uppercase tracking-wider font-semibold">Requirements Met</div>
          </div>
          {completedCount > 0 && (
            <button
              onClick={handleReset}
              className="p-2 rounded-lg hover:bg-[#F8F7F2] text-[#697480] hover:text-[#16324F] transition-colors border border-[#16324F]/10"
              title="Reset checklist"
              aria-label="Reset checklist"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-[#16324F]/08 h-2.5 rounded-full my-6 overflow-hidden">
        <div
          className="bg-gradient-to-r from-[#537C78] via-[#B99A5E] to-[#16324F] h-full transition-all duration-300 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Checklist Items */}
      <div className="space-y-3">
        {checklistItems.map((item, idx) => {
          const isChecked = checkedIds.includes(item.id);
          return (
            <div
              key={item.id}
              onClick={() => toggleCheck(item.id)}
              className={`flex items-start gap-4 p-4 sm:p-5 rounded-xl border transition-all cursor-pointer select-none ${
                isChecked
                  ? "bg-[#E8EFEB]/40 border-[#537C78]/50 text-[#16324F] shadow-2xs"
                  : "bg-[#F8F7F2]/60 border-[#16324F]/08 hover:bg-white hover:border-[#16324F]/25 text-[#202832]"
              }`}
            >
              <button
                type="button"
                className="mt-0.5 shrink-0 text-[#16324F] transition-transform duration-150 active:scale-90"
                aria-checked={isChecked}
              >
                {isChecked ? (
                  <CheckCircle2 className="w-5 h-5 text-[#537C78]" />
                ) : (
                  <Circle className="w-5 h-5 text-[#697480]/50" />
                )}
              </button>

              <div className="flex-1">
                <div className={`font-serif-display text-sm sm:text-base font-bold ${isChecked ? "line-through text-[#697480]" : "text-[#16324F]"}`}>
                  {idx + 1}. {item.title}
                </div>
                <p className="text-xs text-[#697480] font-sans-ui mt-0.5 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Checklist Footer Actions */}
      <div className="mt-8 pt-6 border-t border-[#16324F]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <button
          onClick={handleDownloadSummary}
          className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg border border-[#16324F]/20 text-xs font-mono-meta font-medium text-[#16324F] hover:bg-[#F8F7F2] transition-colors"
        >
          <Download className="w-3.5 h-3.5 text-[#537C78]" />
          <span>Download Verification Summary (.txt)</span>
        </button>

        {completedCount === totalCount ? (
          <a
            href="mailto:submissions.jcfl@institution.ac.in?subject=Manuscript%20Submission%20-%20JCFL"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-[#16324F] text-white text-xs font-bold hover:bg-[#0D1F31] transition-all shadow-md group"
          >
            <span>Proceed to Submit Manuscript</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#B99A5E] group-hover:translate-x-1 transition-transform" />
          </a>
        ) : (
          <div className="text-xs text-[#697480] font-mono-meta text-center sm:text-right">
            Complete {totalCount - completedCount} more items to enable final transmission
          </div>
        )}
      </div>
    </div>
  );
}

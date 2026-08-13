"use client";

import { useState, useEffect } from "react";
import { CheckCircle2, Circle, Sparkles, ArrowRight, RotateCcw } from "lucide-react";
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
            particleCount: 80,
            spread: 70,
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

  const completedCount = checkedIds.length;
  const totalCount = checklistItems.length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  return (
    <div id="checklist" className="rounded-xl bg-white border border-[#16324F]/15 p-6 sm:p-8 shadow-xs">
      {/* Header & Progress */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#16324F]/10">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-mono-meta text-xs uppercase tracking-widest text-[#B99A5E] font-semibold">
              Self-Assessment Protocol
            </span>
            {completedCount === totalCount && (
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#537C78] bg-[#E8EFEB] px-2 py-0.5 rounded-full">
                <Sparkles className="w-3.5 h-3.5" />
                Ready for Submission!
              </span>
            )}
          </div>
          <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#16324F] mt-1">
            Author Pre-Submission Checklist
          </h3>
          <p className="text-xs text-[#697480] font-sans-ui mt-0.5">
            Verify every editorial requirement prior to manuscript upload.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <div className="font-mono-meta font-bold text-sm text-[#16324F]">
              {completedCount} / {totalCount}
            </div>
            <div className="text-[10px] text-[#697480] uppercase tracking-wider">Completed</div>
          </div>
          {completedCount > 0 && (
            <button
              onClick={handleReset}
              className="p-1.5 rounded hover:bg-[#F8F7F2] text-[#697480] hover:text-[#16324F] transition-colors"
              title="Reset checklist"
              aria-label="Reset checklist"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-[#16324F]/08 h-2 rounded-full my-6 overflow-hidden">
        <div
          className="bg-gradient-to-r from-[#537C78] to-[#B99A5E] h-full transition-all duration-300 ease-out"
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
              className={`flex items-start gap-3.5 p-4 rounded-lg border transition-all cursor-pointer select-none ${
                isChecked
                  ? "bg-[#E8EFEB]/40 border-[#537C78]/40 text-[#16324F]"
                  : "bg-[#F8F7F2]/60 border-[#16324F]/08 hover:bg-white hover:border-[#16324F]/20 text-[#202832]"
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
                <div className={`font-serif-display text-sm font-semibold ${isChecked ? "line-through text-[#697480]" : "text-[#16324F]"}`}>
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

      {/* Checklist Footer Notification */}
      {completedCount === totalCount ? (
        <div className="mt-6 p-4 rounded-lg bg-[#E8EFEB] border border-[#537C78]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-sans-ui text-[#16324F]">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#537C78]" />
            <span className="font-semibold">
              All pre-submission criteria verified. You are ready to submit your manuscript!
            </span>
          </div>
          <a
            href="mailto:submissions.jcfl@institution.ac.in?subject=Manuscript%20Submission%20-%20JCFL"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded bg-[#16324F] text-white text-xs font-semibold hover:bg-[#0D1F31] transition-colors shrink-0"
          >
            <span>Proceed to Submit</span>
            <ArrowRight className="w-3 h-3 text-[#B99A5E]" />
          </a>
        </div>
      ) : (
        <div className="mt-4 text-center text-xs text-[#697480] font-mono-meta">
          Please check all {totalCount} items before transmitting your final file to the editorial desk.
        </div>
      )}
    </div>
  );
}

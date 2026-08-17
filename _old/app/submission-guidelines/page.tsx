import type { Metadata } from "next";
import Link from "next/link";
import { FileCheck, Download, Mail, ArrowRight, ShieldCheck, CheckCircle2, AlertCircle, Info, Sparkles } from "lucide-react";
import { manuscriptCategories, submissionPolicies } from "@/lib/data/policies";
import { InteractiveChecklist } from "@/components/submission/InteractiveChecklist";

export const metadata: Metadata = {
  title: "Submission Guidelines & Author Checklist | Journal of Corporate and Financial Laws",
  description:
    "Review word limits, Bluebook citation standards, formatting instructions, AI policy, and interactive submission checklist for the Journal of Corporate and Financial Laws.",
};

export default function SubmissionGuidelinesPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-[#F8F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header Hero Banner */}
        <div className="rounded-2xl bg-white border border-[#16324F]/10 p-8 sm:p-12 lg:p-16 shadow-xs relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#16324F]/15 bg-[#F8F7F2] text-[#16324F] font-mono-meta text-xs uppercase tracking-widest font-semibold">
              <FileCheck className="w-3.5 h-3.5 text-[#B99A5E]" />
              Call for Papers · Volume 1
            </div>

            <h1 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#16324F] leading-tight">
              Submission Guidelines
            </h1>

            <p className="text-base sm:text-lg text-[#697480] font-sans-ui leading-relaxed font-light">
              Everything authors need to prepare, format, and submit a manuscript for peer review to the Journal of Corporate and Financial Laws.
            </p>

            {/* Top Quick Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#checklist"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#16324F] text-white text-xs font-semibold hover:bg-[#0D1F31] transition-all shadow-xs group"
              >
                <CheckCircle2 className="w-4 h-4 text-[#B99A5E]" />
                <span>Open Author Checklist</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#B99A5E] group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="mailto:submissions.jcfl@institution.ac.in?subject=Manuscript%20Submission%20-%20JCFL"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-[#16324F]/20 bg-white hover:bg-[#F8F7F2] text-[#16324F] text-xs font-semibold transition-all shadow-2xs"
              >
                <Mail className="w-4 h-4 text-[#537C78]" />
                <span>Submit via Editorial Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Categories of Manuscripts Table */}
        <div className="bg-white rounded-2xl border border-[#16324F]/10 p-8 sm:p-10 shadow-xs space-y-6">
          <div>
            <div className="font-mono-meta text-xs uppercase tracking-widest text-[#537C78] font-semibold mb-1">
              Manuscript Classification
            </div>
            <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#16324F]">
              Categories &amp; Word Limits
            </h2>
            <p className="text-xs sm:text-sm text-[#697480] font-sans-ui mt-1">
              All word counts are inclusive of footnotes. Speaking footnotes should not be used to bypass word limits.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse font-sans-ui text-sm">
              <thead>
                <tr className="bg-[#16324F]/04 border-b border-[#16324F]/10 text-[11px] font-mono-meta uppercase tracking-wider text-[#697480]">
                  <th className="py-3.5 px-4 w-40">Category</th>
                  <th className="py-3.5 px-4 w-52">Word Count Limit</th>
                  <th className="py-3.5 px-4">Description &amp; Scope</th>
                  <th className="py-3.5 px-4 w-32">Abstract</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#16324F]/08">
                {manuscriptCategories.map((cat) => (
                  <tr key={cat.type} className="hover:bg-[#F8F7F2]/60 transition-colors">
                    <td className="py-4 px-4 font-serif-display font-bold text-[#16324F]">
                      {cat.type}
                    </td>
                    <td className="py-4 px-4 font-mono-meta text-xs text-[#537C78] font-semibold">
                      {cat.wordLimit}
                    </td>
                    <td className="py-4 px-4 text-xs text-[#202832]/85 leading-relaxed">
                      {cat.description}
                      <div className="text-[11px] text-[#697480] italic mt-1">{cat.notes}</div>
                    </td>
                    <td className="py-4 px-4 text-xs">
                      {cat.abstractRequired ? (
                        <span className="inline-flex items-center gap-1 text-[#537C78] font-medium bg-[#E8EFEB] px-2 py-0.5 rounded">
                          Required
                        </span>
                      ) : (
                        <span className="text-[#697480]">Optional</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Detailed Editorial Policies Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Rail: Quick Sticky TOC */}
          <div className="hidden lg:block lg:col-span-4 sticky top-28 bg-white p-6 rounded-xl border border-[#16324F]/10 space-y-3 font-sans-ui text-xs">
            <div className="font-mono-meta text-[11px] uppercase tracking-wider text-[#B99A5E] font-semibold pb-2 border-b border-[#16324F]/10">
              Guidelines Sections
            </div>
            <ul className="space-y-1.5">
              {submissionPolicies.map((p) => (
                <li key={p.id}>
                  <a
                    href={`#${p.id}`}
                    className="block py-1.5 px-2 rounded text-[#697480] hover:text-[#16324F] hover:bg-[#F8F7F2] transition-colors font-medium truncate"
                  >
                    {p.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Policies Content (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            {submissionPolicies.map((sec) => (
              <section
                key={sec.id}
                id={sec.id}
                className="bg-white p-8 rounded-xl border border-[#16324F]/10 space-y-4 scroll-mt-24"
              >
                <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#16324F] border-b border-[#16324F]/10 pb-3">
                  {sec.title}
                </h3>

                <div className="space-y-3 text-sm text-[#202832]/85 font-sans-ui leading-relaxed font-light">
                  {sec.content.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                {sec.callout && (
                  <div className="mt-4 p-4 rounded-lg bg-[#E8EFEB] border border-[#537C78]/30 flex items-start gap-3 text-xs text-[#16324F]">
                    <Info className="w-4 h-4 text-[#537C78] shrink-0 mt-0.5" />
                    <span>{sec.callout.text}</span>
                  </div>
                )}
              </section>
            ))}
          </div>
        </div>

        {/* Interactive Author Checklist Component */}
        <InteractiveChecklist />
      </div>
    </div>
  );
}

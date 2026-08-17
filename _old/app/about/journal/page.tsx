import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, ShieldCheck, FileCheck, Scale, Award, Eye, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About the Journal | Aims, Scope & Editorial Policies",
  description:
    "Explore the aims, scope, editorial philosophy, double-blind peer review process, open-access policy, and publication ethics of the Journal of Corporate and Financial Laws.",
};

export default function AboutJournalPage() {
  const sections = [
    { id: "overview", title: "1. Overview & Mandate" },
    { id: "aims-scope", title: "2. Aims & Scope" },
    { id: "editorial-philosophy", title: "3. Editorial Philosophy" },
    { id: "review-process", title: "4. Double-Blind Peer Review Model" },
    { id: "open-access", title: "5. Open Access Declaration" },
    { id: "publication-ethics", title: "6. Publication Ethics & Anti-Plagiarism" },
    { id: "copyright-archiving", title: "7. Copyright & Digital Archiving" },
    { id: "citation-standard", title: "8. Citation Standard" },
  ];

  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-[#F8F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header Hero Banner */}
        <div className="rounded-2xl bg-white border border-[#16324F]/10 p-8 sm:p-12 lg:p-16 shadow-xs relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#16324F]/15 bg-[#F8F7F2] text-[#16324F] font-mono-meta text-xs uppercase tracking-widest font-semibold">
              <BookOpen className="w-3.5 h-3.5 text-[#B99A5E]" />
              Journal Profile &amp; Governance
            </div>

            <h1 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#16324F] leading-tight">
              About the Journal of Corporate &amp; Financial Laws
            </h1>

            <p className="text-base sm:text-lg text-[#697480] font-sans-ui leading-relaxed font-light">
              The flagship publication of the Centre for Corporate Law, Governance &amp; Financial Laws, providing a platform for rigorous scholarship at the intersection of corporate law, financial regulation, and governance.
            </p>
          </div>
        </div>

        {/* Content Layout: Sticky Left Nav + Editorial Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Nav Rail (4 cols) */}
          <div className="hidden lg:block lg:col-span-4 sticky top-28 bg-white p-6 rounded-xl border border-[#16324F]/10 space-y-3 font-sans-ui text-xs">
            <div className="font-mono-meta text-[11px] uppercase tracking-wider text-[#B99A5E] font-semibold pb-2 border-b border-[#16324F]/10">
              Journal Policies Index
            </div>
            <ul className="space-y-1.5">
              {sections.map((sec) => (
                <li key={sec.id}>
                  <a
                    href={`#${sec.id}`}
                    className="block py-1.5 px-2 rounded text-[#697480] hover:text-[#16324F] hover:bg-[#F8F7F2] transition-colors font-medium"
                  >
                    {sec.title}
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-[#16324F]/10">
              <Link
                href="/submission-guidelines"
                className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded bg-[#16324F] text-white text-xs font-semibold hover:bg-[#0D1F31] transition-colors"
              >
                <span>Submission Guidelines</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#B99A5E]" />
              </Link>
            </div>
          </div>

          {/* Right Content Area (8 cols) */}
          <div className="lg:col-span-8 space-y-10">
            {/* 1. Overview */}
            <section id="overview" className="bg-white p-8 rounded-xl border border-[#16324F]/10 space-y-4">
              <h2 className="font-serif-display text-2xl font-bold text-[#16324F] border-b border-[#16324F]/10 pb-3">
                1. Overview &amp; Mandate
              </h2>
              <div className="space-y-3 text-sm text-[#202832]/85 font-sans-ui leading-relaxed font-light">
                <p>
                  The Journal of Corporate and Financial Laws (JCFL) is an academic publication of the Centre for Corporate Law, Governance &amp; Financial Laws. The Journal seeks to facilitate rigorous research and informed dialogue on developments across corporate law, financial regulation, governance, and related areas of commercial law.
                </p>
                <p>
                  Conceived as an inaugural scholarly forum in 2026, the Journal bridges traditional doctrinal legal jurisprudence with empirical financial and economic analysis, catering to legal academics, judges, corporate practitioners, regulators, and research scholars.
                </p>
              </div>
            </section>

            {/* 2. Aims & Scope */}
            <section id="aims-scope" className="bg-white p-8 rounded-xl border border-[#16324F]/10 space-y-4">
              <h2 className="font-serif-display text-2xl font-bold text-[#16324F] border-b border-[#16324F]/10 pb-3">
                2. Aims &amp; Scope
              </h2>
              <div className="space-y-3 text-sm text-[#202832]/85 font-sans-ui leading-relaxed font-light">
                <p>
                  The Journal invites scholarly submissions examining statutory, judicial, and regulatory developments across:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-[#16324F] pt-2">
                  <li className="flex items-center gap-2 p-2 rounded bg-[#F8F7F2]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#537C78]" />
                    Corporate Governance &amp; Board Liability
                  </li>
                  <li className="flex items-center gap-2 p-2 rounded bg-[#F8F7F2]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#537C78]" />
                    Capital Markets &amp; Securities Regulation
                  </li>
                  <li className="flex items-center gap-2 p-2 rounded bg-[#F8F7F2]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#537C78]" />
                    Insolvency &amp; Restructuring Jurisprudence
                  </li>
                  <li className="flex items-center gap-2 p-2 rounded bg-[#F8F7F2]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#537C78]" />
                    Banking Law &amp; Prudential Supervision
                  </li>
                  <li className="flex items-center gap-2 p-2 rounded bg-[#F8F7F2]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#537C78]" />
                    Competition &amp; Digital Antitrust
                  </li>
                  <li className="flex items-center gap-2 p-2 rounded bg-[#F8F7F2]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#537C78]" />
                    FinTech, AI &amp; Digital Asset Regulation
                  </li>
                </ul>
              </div>
            </section>

            {/* 3. Editorial Philosophy */}
            <section id="editorial-philosophy" className="bg-white p-8 rounded-xl border border-[#16324F]/10 space-y-4">
              <h2 className="font-serif-display text-2xl font-bold text-[#16324F] border-b border-[#16324F]/10 pb-3">
                3. Editorial Philosophy
              </h2>
              <div className="space-y-3 text-sm text-[#202832]/85 font-sans-ui leading-relaxed font-light">
                <p>
                  Scholarship published in the Journal must demonstrate high doctrinal rigor, methodological clarity, and direct relevance to commercial jurisprudence. The editorial board favors manuscripts that advance principled critiques of existing statutory frameworks, evaluate comparative international precedents, and offer actionable regulatory insights.
                </p>
              </div>
            </section>

            {/* 4. Double-Blind Peer Review */}
            <section id="review-process" className="bg-white p-8 rounded-xl border border-[#16324F]/10 space-y-4">
              <h2 className="font-serif-display text-2xl font-bold text-[#16324F] border-b border-[#16324F]/10 pb-3">
                4. Double-Blind Peer Review Model
              </h2>
              <div className="space-y-3 text-sm text-[#202832]/85 font-sans-ui leading-relaxed font-light">
                <p>
                  To guarantee intellectual objectivity and meritocratic publication standards, the Journal adheres to a multi-stage editorial review workflow:
                </p>
                <div className="space-y-2 pt-2">
                  <div className="p-3 rounded bg-[#F8F7F2] border-l-2 border-[#16324F] text-xs">
                    <span className="font-bold text-[#16324F]">Stage 1: Preliminary Editorial Triage</span> — Initial evaluation for thematic alignment, plagiarism check, and compliance with word limits.
                  </div>
                  <div className="p-3 rounded bg-[#F8F7F2] border-l-2 border-[#537C78] text-xs">
                    <span className="font-bold text-[#16324F]">Stage 2: Double-Blind Peer Review</span> — Anonymized manuscript is evaluated by external domain experts, faculty advisors, and commercial practitioners.
                  </div>
                  <div className="p-3 rounded bg-[#F8F7F2] border-l-2 border-[#B99A5E] text-xs">
                    <span className="font-bold text-[#16324F]">Stage 3: Editorial Decision &amp; Substantive Copyediting</span> — Final decision (Accept, Revise &amp; Resubmit, Reject) followed by rigorous citation and source verification.
                  </div>
                </div>
              </div>
            </section>

            {/* 5. Open Access Declaration */}
            <section id="open-access" className="bg-white p-8 rounded-xl border border-[#16324F]/10 space-y-4">
              <h2 className="font-serif-display text-2xl font-bold text-[#16324F] border-b border-[#16324F]/10 pb-3">
                5. Open Access Declaration
              </h2>
              <div className="space-y-3 text-sm text-[#202832]/85 font-sans-ui leading-relaxed font-light">
                <p>
                  The Journal is committed to Diamond Open Access principles. All published articles and full issue volumes are made freely and permanently accessible online upon publication without article processing charges (APCs) or paywalls.
                </p>
              </div>
            </section>

            {/* 6. Ethics & Plagiarism */}
            <section id="publication-ethics" className="bg-white p-8 rounded-xl border border-[#16324F]/10 space-y-4">
              <h2 className="font-serif-display text-2xl font-bold text-[#16324F] border-b border-[#16324F]/10 pb-3">
                6. Publication Ethics &amp; Anti-Plagiarism Policy
              </h2>
              <div className="space-y-3 text-sm text-[#202832]/85 font-sans-ui leading-relaxed font-light">
                <p>
                  The Journal maintains a strict zero-tolerance policy against academic misconduct, including data falsification, duplicate submission, and plagiarism. All manuscripts undergo automated similarity screening.
                </p>
                <div className="p-4 rounded-md bg-[#E8EFEB] border border-[#537C78]/30 text-xs text-[#16324F] font-medium">
                  Similarity threshold: [Specific percentage threshold to be confirmed by Editorial Board, e.g. 10% maximum similarity index excluding properly cited references].
                </div>
              </div>
            </section>

            {/* 7. Copyright & Archiving */}
            <section id="copyright-archiving" className="bg-white p-8 rounded-xl border border-[#16324F]/10 space-y-4">
              <h2 className="font-serif-display text-2xl font-bold text-[#16324F] border-b border-[#16324F]/10 pb-3">
                7. Copyright &amp; Digital Archiving
              </h2>
              <div className="space-y-3 text-sm text-[#202832]/85 font-sans-ui leading-relaxed font-light">
                <p>
                  Authors retain moral rights in their scholarship. The Journal is granted an exclusive first-publication license. Articles are archived in permanent digital academic repositories and indexed across leading legal databases.
                </p>
              </div>
            </section>

            {/* 8. Citation Standard */}
            <section id="citation-standard" className="bg-white p-8 rounded-xl border border-[#16324F]/10 space-y-4">
              <h2 className="font-serif-display text-2xl font-bold text-[#16324F] border-b border-[#16324F]/10 pb-3">
                8. Citation Standard
              </h2>
              <div className="space-y-3 text-sm text-[#202832]/85 font-sans-ui leading-relaxed font-light">
                <p>
                  All citations must strictly conform to the <strong>Bluebook: A Uniform System of Citation (21st Edition)</strong>. Footnotes must appear at the bottom of the relevant page rather than as endnotes.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

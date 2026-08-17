import type { Metadata } from "next";
import { Users, ShieldCheck, Mail, UserCheck, Sparkles } from "lucide-react";
import { editorialBoard } from "@/lib/data/editorial-board";

export const metadata: Metadata = {
  title: "Faculty Advisors & Editorial Board | People Behind the Journal",
  description:
    "Meet the patron leadership, faculty advisors, editor-in-chief, managing editor, and student editors behind the Journal of Corporate and Financial Laws.",
};

export default function EditorialBoardPage() {
  const categories = [
    "Patron / Institutional Leadership",
    "Faculty Advisors",
    "Editor-in-Chief",
    "Managing Editor",
    "Senior Student Editors",
    "Associate Editors",
    "Technical & Design Team",
  ] as const;

  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-[#F8F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header Banner */}
        <div className="rounded-2xl bg-white border border-[#16324F]/10 p-8 sm:p-12 lg:p-16 shadow-xs relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#16324F]/15 bg-[#F8F7F2] text-[#16324F] font-mono-meta text-xs uppercase tracking-widest font-semibold">
              <Users className="w-3.5 h-3.5 text-[#B99A5E]" />
              Editorial Stewardship
            </div>

            <h1 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#16324F] leading-tight">
              Faculty Advisors &amp; Editorial Board
            </h1>

            <p className="text-base sm:text-lg text-[#697480] font-sans-ui leading-relaxed font-light">
              The Journal of Corporate and Financial Laws is guided by distinguished faculty scholars, legal practitioners, and dedicated student editors committed to academic excellence and peer review integrity.
            </p>
          </div>
        </div>

        {/* Editorial Categories Grid */}
        <div className="space-y-16">
          {categories.map((cat) => {
            const members = editorialBoard.filter((m) => m.category === cat);
            if (members.length === 0) return null;

            return (
              <section key={cat} className="space-y-6">
                <div className="flex items-center gap-3 border-b border-[#16324F]/10 pb-3">
                  <span className="w-2 h-2 rounded-full bg-[#B99A5E]" />
                  <h2 className="font-serif-display text-xl sm:text-2xl font-bold text-[#16324F]">
                    {cat}
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {members.map((member) => (
                    <div
                      key={member.id}
                      className="p-6 rounded-xl bg-white border border-[#16324F]/10 hover:border-[#B99A5E] hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
                    >
                      <div>
                        {/* Member Avatar / Monogram */}
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 rounded-full bg-[#16324F]/08 border border-[#16324F]/15 flex items-center justify-center font-serif-display font-bold text-lg text-[#16324F] group-hover:bg-[#16324F] group-hover:text-white transition-colors">
                            {member.name.charAt(1) === "I" ? "JC" : member.name.slice(0, 2)}
                          </div>
                          <div>
                            <span className="text-[10px] font-mono-meta text-[#537C78] uppercase tracking-wider font-semibold">
                              {member.designation}
                            </span>
                            <h3 className="font-serif-display font-bold text-base text-[#16324F] leading-snug">
                              {member.name}
                            </h3>
                          </div>
                        </div>

                        <div className="text-xs text-[#697480] font-mono-meta mb-3">
                          {member.institutionalAffiliation}
                        </div>

                        {member.bio && (
                          <p className="text-xs text-[#202832]/80 font-sans-ui leading-relaxed line-clamp-3">
                            {member.bio}
                          </p>
                        )}
                      </div>

                      {member.isPlaceholder && (
                        <div className="mt-4 pt-3 border-t border-[#16324F]/06 flex items-center justify-between text-[10px] font-mono-meta text-[#B99A5E]">
                          <span>EDITORIAL PLACEHOLDER</span>
                          <span>Official Appointment Pending</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}

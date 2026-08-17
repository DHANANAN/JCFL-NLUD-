import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Building, Scale, BookOpen, Users, GraduationCap, ArrowRight, Mail, MapPin, Sparkles, CheckCircle2 } from "lucide-react";
import { centreData } from "@/lib/data/centre";

export const metadata: Metadata = {
  title: "About the Centre | Centre for Corporate Law, Governance & Financial Laws",
  description:
    "Learn about the Centre for Corporate Law, Governance & Financial Laws (CCLGFL), its vision, research clusters, institutional initiatives, and policy impact.",
};

export default function AboutCentrePage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-[#F8F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header Hero Banner */}
        <div className="rounded-2xl bg-white border border-[#16324F]/10 p-8 sm:p-12 lg:p-16 shadow-xs relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-governance-grid opacity-40 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#16324F]/15 bg-[#F8F7F2] text-[#16324F] font-mono-meta text-xs uppercase tracking-widest font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B99A5E]" />
                Institutional Profile
              </div>

              <h1 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#16324F] leading-tight">
                Centre for Corporate Law, Governance &amp; Financial Laws
              </h1>

              <p className="text-base sm:text-lg text-[#697480] font-sans-ui max-w-2xl font-light">
                {centreData.tagline}
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-2 border-[#B99A5E] bg-[#16324F] shadow-xl">
                <Image
                  src="/assets/images/cclgfl-logo.jpg"
                  alt="Centre Seal"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Who We Are & Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-28">
            <div className="font-mono-meta text-xs uppercase tracking-widest text-[#537C78] font-semibold">
              01 // Identity &amp; Mandate
            </div>
            <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#16324F]">
              Institutional Overview
            </h2>
            <p className="text-sm text-[#697480] font-sans-ui">
              Dedicated to rigorous research, institutional dialogue, and corporate regulatory impact.
            </p>
          </div>

          <div className="lg:col-span-8 bg-white p-8 sm:p-10 rounded-xl border border-[#16324F]/10 space-y-6 text-[#202832]/85 font-sans-ui text-base leading-relaxed font-light">
            <p>
              {centreData.overview}
            </p>
            <p>
              Established as a premier research hub within the National Law University system, the Centre integrates rigorous legal doctrinal scholarship with empirical financial economics, facilitating evidence-based legal reform across capital markets, banking institutions, and enterprise governance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#16324F]/10">
              <div className="p-5 rounded-lg bg-[#F8F7F2] border border-[#16324F]/08">
                <div className="font-serif-display font-bold text-base text-[#16324F] mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#B99A5E]" />
                  <span>Our Vision</span>
                </div>
                <p className="text-xs text-[#697480] leading-relaxed">
                  {centreData.vision}
                </p>
              </div>

              <div className="p-5 rounded-lg bg-[#F8F7F2] border border-[#16324F]/08">
                <div className="font-serif-display font-bold text-base text-[#16324F] mb-2 flex items-center gap-2">
                  <Scale className="w-4 h-4 text-[#537C78]" />
                  <span>Our Mission</span>
                </div>
                <p className="text-xs text-[#697480] leading-relaxed">
                  {centreData.mission}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Research Clusters */}
        <div className="space-y-8">
          <div className="border-b border-[#16324F]/10 pb-4">
            <div className="font-mono-meta text-xs uppercase tracking-widest text-[#537C78] font-semibold mb-1">
              02 // Scholarly Specialization
            </div>
            <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#16324F]">
              Key Research Clusters
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {centreData.researchClusters.map((cluster, idx) => (
              <div
                key={cluster.name}
                className="p-6 rounded-xl bg-white border border-[#16324F]/10 hover:border-[#B99A5E] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="font-mono-meta text-xs font-bold text-[#B99A5E] mb-2">
                    0{idx + 1}
                  </div>
                  <h3 className="font-serif-display font-bold text-base text-[#16324F] mb-2 leading-snug">
                    {cluster.name}
                  </h3>
                  <p className="text-xs text-[#697480] font-sans-ui leading-relaxed">
                    {cluster.focus}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#16324F]/06 text-[11px] font-mono-meta text-[#537C78]">
                  Specialized Research Desk
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Initiatives */}
        <div className="space-y-8">
          <div className="border-b border-[#16324F]/10 pb-4">
            <div className="font-mono-meta text-xs uppercase tracking-widest text-[#537C78] font-semibold mb-1">
              03 // Programs &amp; Output
            </div>
            <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#16324F]">
              Institutional Initiatives
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {centreData.initiatives.map((item) => (
              <div key={item.title} className="p-6 rounded-xl bg-white border border-[#16324F]/10 space-y-3">
                <span className="text-[10px] font-mono-meta px-2 py-0.5 rounded bg-[#16324F]/08 text-[#16324F] uppercase font-semibold">
                  {item.type}
                </span>
                <h3 className="font-serif-display font-bold text-lg text-[#16324F]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#697480] font-sans-ui leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact & Collaborate Strip */}
        <div className="rounded-xl bg-[#16324F] text-white p-8 sm:p-12 border border-[#B99A5E]/30 relative overflow-hidden">
          <div className="max-w-3xl space-y-6">
            <div className="font-mono-meta text-xs text-[#B99A5E] uppercase tracking-widest font-semibold">
              Institutional Engagement
            </div>
            <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-white leading-tight">
              Collaborate With the Centre
            </h2>
            <p className="text-sm text-white/80 font-sans-ui leading-relaxed font-light">
              We welcome academic partnerships, joint symposia proposals, and research inquiries from domestic and international law faculties, judicial academies, and regulatory organizations.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-4 font-mono-meta text-xs text-white/80">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#B99A5E]" />
                <span>{centreData.contact.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#B99A5E]" />
                <span>{centreData.contact.office}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

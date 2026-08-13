"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building, CheckCircle, GraduationCap, Scale, Users } from "lucide-react";
import { centreData } from "@/lib/data/centre";

export function AboutCentreSection() {
  return (
    <section className="py-16 lg:py-24 bg-white border-b border-[#16324F]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Official Institutional Seal & Profile (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-2 border-[#B99A5E] bg-[#16324F] shadow-xl">
              <Image
                src="/assets/images/cclgfl-logo.jpg"
                alt="Centre for Corporate Law, Governance & Financial Laws Official Seal"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <div className="font-mono-meta text-xs uppercase tracking-widest text-[#B99A5E] font-semibold">
                Institutional Publisher
              </div>
              <h3 className="font-serif-display text-2xl font-bold text-[#16324F] mt-1">
                Centre for Corporate Law, Governance &amp; Financial Laws
              </h3>
              <p className="text-xs text-[#697480] font-mono-meta uppercase tracking-wider mt-1">
                [Affiliated National Law University Hub]
              </p>
            </div>
          </div>

          {/* Right Column: Narrative & Pillars (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="font-mono-meta text-xs uppercase tracking-widest text-[#537C78] font-semibold mb-2">
                About the Centre
              </div>
              <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#16324F] leading-tight">
                {centreData.tagline}
              </h2>
            </div>

            <p className="text-[#202832]/85 text-base sm:text-lg font-sans-ui leading-relaxed font-light">
              {centreData.overview}
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {centreData.pillars.slice(0, 4).map((pillar) => (
                <div key={pillar.title} className="flex items-start gap-3 p-3 rounded-md bg-[#F8F7F2] border border-[#16324F]/06">
                  <div className="p-1.5 rounded bg-white text-[#16324F] shadow-2xs mt-0.5">
                    <Scale className="w-4 h-4 text-[#537C78]" />
                  </div>
                  <div>
                    <h4 className="font-serif-display font-semibold text-sm text-[#16324F]">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-[#697480] font-sans-ui leading-relaxed mt-0.5">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/about/centre"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#16324F] text-[#F8F7F2] font-sans-ui text-xs font-semibold hover:bg-[#0D1F31] transition-all group"
              >
                <span>Discover the Centre (CCLGFL)</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#B99A5E] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

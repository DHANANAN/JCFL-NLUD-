"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, MapPin, ShieldCheck, FileCheck, BookOpen } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0B1927] text-[#F8F7F2] relative overflow-hidden border-t border-[#B99A5E]/20">
      {/* Background Governance Grid Overlay */}
      <div className="absolute inset-0 bg-governance-grid-dark opacity-30 pointer-events-none" />

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Column 1 & 2: Branding & Institutional Profile */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3.5">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#B99A5E] bg-[#16324F] shrink-0 shadow-md">
                <Image
                  src="/assets/images/cclgfl-logo.jpg"
                  alt="CCLGFL Official Seal"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-serif-display font-bold text-lg text-white leading-tight">
                  Journal of Corporate and Financial Laws
                </h3>
                <p className="text-xs text-[#B99A5E] uppercase tracking-wider font-mono-meta mt-0.5">
                  Centre for Corporate Law, Governance & Financial Laws
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#F8F7F2]/75 leading-relaxed pr-4">
              A peer-focused academic journal established to foster rigorous, doctrinal, and empirical discourse across corporate governance, capital markets regulation, banking law, and contemporary commercial jurisprudence.
            </p>

            <div className="flex flex-wrap gap-2 text-[11px] font-mono-meta text-[#B99A5E]">
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">
                ISSN: [To be confirmed upon indexing]
              </span>
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">
                Volume 1 · Issue 1 (2026)
              </span>
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">
                Open Access
              </span>
            </div>
          </div>

          {/* Column 3: Explore & Archive */}
          <div className="space-y-4">
            <h4 className="font-mono-meta text-xs uppercase tracking-widest text-[#B99A5E] font-semibold">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-[#F8F7F2]/80">
              <li>
                <Link href="/" className="hover:text-white transition-colors hover-underline-animation">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/publications" className="hover:text-white transition-colors hover-underline-animation">
                  Current Issue (Vol. 1)
                </Link>
              </li>
              <li>
                <Link href="/publications/archive" className="hover:text-white transition-colors hover-underline-animation">
                  Journal Archive
                </Link>
              </li>
              <li>
                <Link href="/about/journal" className="hover:text-white transition-colors hover-underline-animation">
                  Aims & Scope
                </Link>
              </li>
              <li>
                <Link href="/about/centre" className="hover:text-white transition-colors hover-underline-animation">
                  About CCLGFL
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Governance & Ethics */}
          <div className="space-y-4">
            <h4 className="font-mono-meta text-xs uppercase tracking-widest text-[#B99A5E] font-semibold">
              Governance & Policies
            </h4>
            <ul className="space-y-2.5 text-xs text-[#F8F7F2]/80">
              <li>
                <Link href="/about/editorial-board" className="hover:text-white transition-colors hover-underline-animation">
                  Editorial Board & Advisors
                </Link>
              </li>
              <li>
                <Link href="/submission-guidelines" className="hover:text-white transition-colors hover-underline-animation">
                  Submission Guidelines
                </Link>
              </li>
              <li>
                <Link href="/about/journal#peer-review" className="hover:text-white transition-colors hover-underline-animation">
                  Peer Review Framework
                </Link>
              </li>
              <li>
                <Link href="/about/journal#publication-ethics" className="hover:text-white transition-colors hover-underline-animation">
                  Publication Ethics & Plagiarism
                </Link>
              </li>
              <li>
                <Link href="/about/journal#open-access" className="hover:text-white transition-colors hover-underline-animation">
                  Open Access Declaration
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Institutional Editorial Desk */}
          <div className="space-y-4">
            <h4 className="font-mono-meta text-xs uppercase tracking-widest text-[#B99A5E] font-semibold">
              Editorial Desk
            </h4>
            <div className="space-y-3 text-xs text-[#F8F7F2]/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B99A5E] shrink-0 mt-0.5" />
                <span className="text-[#F8F7F2]/75">
                  Centre for Corporate Law, Governance & Financial Laws
                  <br />
                  <span className="text-[#F8F7F2]/50 italic">[Official Institutional Campus Address]</span>
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#B99A5E] shrink-0 mt-0.5" />
                <span className="text-[#F8F7F2]/75">
                  Editorial: <span className="text-[#B99A5E]">[Official Editorial Email]</span>
                </span>
              </div>

              <div className="pt-2">
                <Link
                  href="/submission-guidelines"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded bg-white/10 hover:bg-[#B99A5E] text-white hover:text-[#0B1927] transition-all text-xs font-medium w-full justify-center group"
                >
                  <span>Submit for Inaugural Issue</span>
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Accreditation Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F8F7F2]/50 font-sans-ui">
          <div className="text-center sm:text-left">
            © 2026 Journal of Corporate and Financial Laws. Published by the Centre for Corporate Law, Governance & Financial Laws.
          </div>

          <div className="flex items-center gap-6 text-[11px]">
            <Link href="/about/journal#copyright" className="hover:text-white transition-colors">
              Copyright & Licensing
            </Link>
            <span>·</span>
            <Link href="/about/journal#ethics" className="hover:text-white transition-colors">
              Academic Ethics
            </Link>
            <span>·</span>
            <Link href="/submission-guidelines" className="hover:text-white transition-colors">
              Author Guidelines
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, MapPin, ExternalLink } from "lucide-react";
import { researchAreas } from "@/lib/data/research-areas";

function FooterWaveDivider() {
  return (
    <div className="w-full overflow-hidden leading-none">
      <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" className="w-full h-16">
        <path d="M0,20 C240,70 480,10 720,50 C960,85 1200,20 1440,45 L1440,80 L0,80 Z" fill="#0B1927" />
      </svg>
    </div>
  );
}

export function Footer() {
  return (
    <>
      {/* Organic wave transition from page content */}
      <FooterWaveDivider />

      <footer className="bg-[#0B1927] text-[#F5F2EA] pt-16 pb-10 font-sans-ui">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#16324F]">

            {/* Brand column (4 cols) */}
            <div className="lg:col-span-4 space-y-5">
              <div className="flex items-center gap-3.5">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#B8943F]/60 bg-[#16324F] shrink-0">
                  <Image src="/assets/images/cclgfl-logo.jpg" alt="CCLGFL NLU Delhi" fill className="object-cover" />
                </div>
                <div>
                  <div className="font-display font-black text-white text-lg leading-tight">
                    Journal of Corporate &amp; Financial Laws
                  </div>
                  <div className="text-[10px] font-mono-meta text-[#B8943F] uppercase tracking-[0.14em] mt-0.5">
                    CCLGFL · NLU Delhi
                  </div>
                </div>
              </div>

              <p className="text-[#F5F2EA]/65 text-sm font-editorial leading-relaxed">
                Published by the Centre for Corporate Law, Governance &amp; Financial Laws at National Law University Delhi — pioneering legal scholarship at the confluence of law and capital.
              </p>

              <div className="space-y-2 text-xs font-mono-meta text-[#6B7A8D]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#B8943F] shrink-0" />
                  <span>Sector 14, Dwarka, New Delhi – 110078, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#3D7068] shrink-0" />
                  <a href="mailto:submissions.jcfl@institution.ac.in" className="hover:text-[#B8943F] transition-colors">
                    submissions.jcfl@institution.ac.in
                  </a>
                </div>
              </div>
            </div>

            {/* Quick nav (2 cols) */}
            <div className="lg:col-span-2 space-y-4">
              <div className="text-[10px] font-mono-meta text-[#B8943F] uppercase tracking-[0.18em] font-bold">The Journal</div>
              <ul className="space-y-2.5 text-sm text-[#F5F2EA]/70">
                {[
                  ["/about/journal", "Aims & Scope"],
                  ["/about/centre", "About CCLGFL"],
                  ["/about/editorial-board", "Editorial Board"],
                  ["/publications", "Current Issue"],
                  ["/publications/archive", "Archive"],
                ].map(([href, label]) => (
                  <li key={href}>
                    <Link href={href} className="hover:text-[#B8943F] transition-colors font-editorial">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Authors (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <div className="text-[10px] font-mono-meta text-[#B8943F] uppercase tracking-[0.18em] font-bold">For Authors</div>
              <ul className="space-y-2.5 text-sm text-[#F5F2EA]/70">
                {[
                  ["/submission-guidelines", "Submission Guidelines"],
                  ["/submission-guidelines#checklist", "Author Checklist"],
                  ["/submission-guidelines#peer-review", "Peer Review Process"],
                  ["/submission-guidelines#ai-policy", "AI & Academic Integrity"],
                  ["/submission-guidelines#open-access", "Open Access Policy"],
                ].map(([href, label]) => (
                  <li key={href}>
                    <Link href={href} className="hover:text-[#B8943F] transition-colors font-editorial">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Research domains (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <div className="text-[10px] font-mono-meta text-[#B8943F] uppercase tracking-[0.18em] font-bold">Research Domains</div>
              <ul className="space-y-2 text-sm text-[#F5F2EA]/65">
                {researchAreas.slice(0, 6).map(area => (
                  <li key={area.id}>
                    <Link href={`/publications?area=${encodeURIComponent(area.title)}`} className="hover:text-[#B8943F] transition-colors font-editorial line-clamp-1">
                      {area.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-meta text-[#6B7A8D]">
            <div>
              © 2026 Journal of Corporate and Financial Laws · Centre for Corporate Law, Governance &amp; Financial Laws, National Law University Delhi.
            </div>
            <div className="flex items-center gap-4">
              <span>ISSN: [To be assigned]</span>
              <span>·</span>
              <span>CC BY-NC 4.0</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

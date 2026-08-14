import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, MapPin, Scale, ShieldCheck, Landmark } from "lucide-react";
import { researchAreas } from "@/lib/data/research-areas";

export function Footer() {
  return (
    <footer className="bg-[#0B1927] text-[#F8F7F2] border-t border-[#16324F] pt-16 pb-12 font-sans-ui text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#16324F]/80">
          {/* Column 1: Institutional Identity & Emblem (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#B99A5E] bg-[#16324F] shrink-0">
                <Image
                  src="/assets/images/cclgfl-logo.jpg"
                  alt="Centre for Corporate Law, Governance & Financial Laws, NLU Delhi Seal"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-serif-display font-bold text-lg text-white block leading-tight">
                  Journal of Corporate &amp; Financial Laws
                </span>
                <span className="font-mono-meta text-[11px] text-[#B99A5E] tracking-wider uppercase font-semibold">
                  CCLGFL · National Law University Delhi
                </span>
              </div>
            </div>

            <p className="text-xs text-[#F8F7F2]/70 font-light leading-relaxed">
              Published by the Centre for Corporate Law, Governance &amp; Financial Laws at National Law University Delhi (NLU Delhi). Dedicated to pioneering legal scholarship and policy discourse across corporate governance and financial markets.
            </p>

            <div className="pt-2 text-xs text-[#697480] space-y-1.5 font-mono-meta">
              <div className="flex items-center gap-1.5">
                <Landmark className="w-3.5 h-3.5 text-[#B99A5E]" />
                <span>Sector 14, Dwarka, New Delhi – 110078, India</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#537C78]" />
                <a href="mailto:submissions.jcfl@institution.ac.in" className="hover:text-white transition-colors">
                  submissions.jcfl@institution.ac.in
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation & About (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="font-mono-meta text-xs uppercase tracking-widest text-[#B99A5E] font-semibold">
              The Journal
            </div>
            <ul className="space-y-2 text-xs text-[#F8F7F2]/80">
              <li>
                <Link href="/about/journal" className="hover:text-[#B99A5E] transition-colors">
                  Aims &amp; Scope
                </Link>
              </li>
              <li>
                <Link href="/about/centre" className="hover:text-[#B99A5E] transition-colors">
                  About CCLGFL (NLU Delhi)
                </Link>
              </li>
              <li>
                <Link href="/about/editorial-board" className="hover:text-[#B99A5E] transition-colors">
                  Faculty Advisors &amp; Board
                </Link>
              </li>
              <li>
                <Link href="/publications" className="hover:text-[#B99A5E] transition-colors">
                  Current Issue (Vol. 1)
                </Link>
              </li>
              <li>
                <Link href="/publications/archive" className="hover:text-[#B99A5E] transition-colors">
                  Journal Archive
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Submission & Ethics (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="font-mono-meta text-xs uppercase tracking-widest text-[#B99A5E] font-semibold">
              Authors &amp; Ethics
            </div>
            <ul className="space-y-2 text-xs text-[#F8F7F2]/80">
              <li>
                <Link href="/submission-guidelines" className="hover:text-[#B99A5E] transition-colors">
                  Submission Guidelines
                </Link>
              </li>
              <li>
                <Link href="/submission-guidelines#checklist" className="hover:text-[#B99A5E] transition-colors">
                  Author Self-Assessment Checklist
                </Link>
              </li>
              <li>
                <Link href="/submission-guidelines#peer-review" className="hover:text-[#B99A5E] transition-colors">
                  Double-Blind Peer Review
                </Link>
              </li>
              <li>
                <Link href="/submission-guidelines#ai-policy" className="hover:text-[#B99A5E] transition-colors">
                  GenAI &amp; Academic Integrity Policy
                </Link>
              </li>
              <li>
                <Link href="/submission-guidelines#open-access" className="hover:text-[#B99A5E] transition-colors">
                  Diamond Open Access Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Research Areas (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="font-mono-meta text-xs uppercase tracking-widest text-[#B99A5E] font-semibold">
              Research Domains
            </div>
            <ul className="space-y-1.5 text-xs text-[#F8F7F2]/75">
              {researchAreas.slice(0, 5).map((area) => (
                <li key={area.id}>
                  <Link
                    href={`/publications?area=${encodeURIComponent(area.title)}`}
                    className="hover:text-[#B99A5E] transition-colors line-clamp-1"
                  >
                    {area.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Metadata */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#697480] font-mono-meta">
          <div>
            &copy; 2026 Journal of Corporate and Financial Laws · Centre for Corporate Law, Governance &amp; Financial Laws, National Law University Delhi.
          </div>
          <div className="flex items-center gap-4">
            <span>ISSN: [To be assigned]</span>
            <span>·</span>
            <span>Diamond Open Access (CC BY-NC 4.0)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

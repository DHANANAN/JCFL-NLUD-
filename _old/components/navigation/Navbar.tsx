"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Search, ChevronDown, Menu, BookOpen, Building, Users, FileText, Library } from "lucide-react";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [pubsOpen, setPubsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openSearch = () => window.dispatchEvent(new CustomEvent("open-command-palette"));

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-400 ${
          isScrolled
            ? "bg-[#FAF9F4]/95 backdrop-blur-md shadow-sm border-b border-[#16324F]/08"
            : "bg-[#FAF9F4] border-b border-[#16324F]/06"
        }`}
        style={{ paddingBlock: isScrolled ? "10px" : "14px" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#B8943F]/40 shadow-sm bg-[#16324F] shrink-0 group-hover:border-[#B8943F] transition-all">
              <Image src="/assets/images/cclgfl-logo.jpg" alt="CCLGFL NLU Delhi" fill className="object-cover" priority />
            </div>
            <div>
              <div className="font-display font-bold text-[#16324F] text-base sm:text-lg leading-none tracking-tight">
                Journal of Corporate &amp; Financial Laws
              </div>
              <div className="text-[10px] font-mono-meta text-[#6B7A8D] uppercase tracking-[0.12em] mt-0.5">
                CCLGFL · National Law University Delhi
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 font-sans-ui text-sm font-medium">
            <Link href="/" className={`transition-colors hover:text-[#B8943F] hover-underline-animation ${pathname === "/" ? "text-[#16324F] font-semibold" : "text-[#3A4A5C]"}`}>
              Home
            </Link>

            {/* About dropdown */}
            <div className="relative" onMouseEnter={() => setAboutOpen(true)} onMouseLeave={() => setAboutOpen(false)}>
              <button className={`flex items-center gap-1 transition-colors hover:text-[#B8943F] ${pathname.startsWith("/about") ? "text-[#16324F] font-semibold" : "text-[#3A4A5C]"}`}>
                About <ChevronDown className={`w-3.5 h-3.5 transition-transform ${aboutOpen ? "rotate-180 text-[#B8943F]" : ""}`} />
              </button>
              {aboutOpen && (
                <div className="absolute top-full -left-4 pt-2 w-72 animate-in fade-in slide-in-from-top-1 duration-100 z-50">
                  <div className="bg-white rounded-2xl shadow-xl border border-[#16324F]/08 p-2">
                    {[
                      { href: "/about/journal", Icon: BookOpen, label: "About the Journal", sub: "Aims, scope & ethics" },
                      { href: "/about/centre", Icon: Building, label: "About CCLGFL (NLU Delhi)", sub: "Institutional profile" },
                      { href: "/about/editorial-board", Icon: Users, label: "Faculty Advisors & Board", sub: "Editors and reviewers" },
                    ].map(({ href, Icon, label, sub }) => (
                      <Link key={href} href={href} className="flex items-start gap-3 p-3 rounded-xl hover:bg-[#FAF9F4] transition-colors group">
                        <div className="p-2 rounded-lg bg-[#EAF0F5] group-hover:bg-[#16324F] transition-colors shrink-0">
                          <Icon className="w-3.5 h-3.5 text-[#16324F] group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <div className="font-semibold text-[#16324F] text-sm">{label}</div>
                          <div className="text-xs text-[#6B7A8D]">{sub}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Publications dropdown */}
            <div className="relative" onMouseEnter={() => setPubsOpen(true)} onMouseLeave={() => setPubsOpen(false)}>
              <button className={`flex items-center gap-1 transition-colors hover:text-[#B8943F] ${pathname.startsWith("/publications") ? "text-[#16324F] font-semibold" : "text-[#3A4A5C]"}`}>
                Publications <ChevronDown className={`w-3.5 h-3.5 transition-transform ${pubsOpen ? "rotate-180 text-[#B8943F]" : ""}`} />
              </button>
              {pubsOpen && (
                <div className="absolute top-full -left-4 pt-2 w-60 animate-in fade-in slide-in-from-top-1 duration-100 z-50">
                  <div className="bg-white rounded-2xl shadow-xl border border-[#16324F]/08 p-2">
                    {[
                      { href: "/publications", Icon: FileText, label: "Current Issue (Vol. 1)", sub: "Inaugural scholarship" },
                      { href: "/publications/archive", Icon: Library, label: "Journal Archive", sub: "All volumes" },
                    ].map(({ href, Icon, label, sub }) => (
                      <Link key={href} href={href} className="flex items-start gap-3 p-3 rounded-xl hover:bg-[#FAF9F4] transition-colors group">
                        <div className="p-2 rounded-lg bg-[#E1EDEB] group-hover:bg-[#3D7068] transition-colors shrink-0">
                          <Icon className="w-3.5 h-3.5 text-[#3D7068] group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <div className="font-semibold text-[#16324F] text-sm">{label}</div>
                          <div className="text-xs text-[#6B7A8D]">{sub}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/submission-guidelines" className={`transition-colors hover:text-[#B8943F] hover-underline-animation ${pathname === "/submission-guidelines" ? "text-[#16324F] font-semibold" : "text-[#3A4A5C]"}`}>
              Submit
            </Link>
          </nav>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={openSearch}
              className="flex items-center gap-2 px-3 py-2 rounded-full border border-[#16324F]/12 bg-white text-xs font-sans-ui text-[#6B7A8D] hover:text-[#16324F] hover:border-[#16324F]/25 transition-all shadow-xs"
            >
              <Search className="w-3.5 h-3.5" />
              Search...
              <kbd className="font-mono-meta text-[10px] bg-[#F5F2EA] border border-[#16324F]/10 rounded px-1.5 py-0.5">⌘K</kbd>
            </button>

            <Link href="/submission-guidelines" className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#16324F] text-[#FAF9F4] text-xs font-semibold font-sans-ui hover:bg-[#0D1F31] transition-all shadow-md hover:shadow-lg hover:-translate-y-px">
              Submit Manuscript
            </Link>
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-2 lg:hidden">
            <button onClick={openSearch} className="p-2 rounded-full border border-[#16324F]/12 text-[#16324F]" aria-label="Search">
              <Search className="w-4 h-4" />
            </button>
            <button onClick={() => setMobileOpen(true)} className="p-2 rounded-full border border-[#16324F]/12 text-[#16324F]" aria-label="Menu">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} onOpenSearch={openSearch} />
    </>
  );
}

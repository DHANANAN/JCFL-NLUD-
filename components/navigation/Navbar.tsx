"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Search, ChevronDown, Menu, X, ArrowUpRight, BookOpen, Building, Users, FileText, Library } from "lucide-react";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [publicationsDropdownOpen, setPublicationsDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openSearch = () => {
    window.dispatchEvent(new CustomEvent("open-command-palette"));
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#F8F7F2]/95 backdrop-blur-md shadow-xs border-b border-[#16324F]/10 py-3"
            : "bg-[#F8F7F2] border-b border-[#16324F]/08 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Identity */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-[#B99A5E]/40 shadow-xs group-hover:border-[#B99A5E] transition-all bg-[#16324F] shrink-0">
              <Image
                src="/assets/images/cclgfl-logo.jpg"
                alt="Centre for Corporate Law, Governance & Financial Laws Logo"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif-display font-bold text-[#16324F] text-base sm:text-lg lg:text-xl tracking-tight leading-none group-hover:text-[#16324F]/90">
                Journal of Corporate & Financial Laws
              </span>
              <span className="font-sans-ui text-[10px] sm:text-[11px] text-[#697480] uppercase tracking-wider font-medium mt-1">
                Centre for Corporate Law, Governance & Financial Laws
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 font-sans-ui text-sm font-medium text-[#202832]">
            <Link
              href="/"
              className={`transition-colors hover:text-[#16324F] hover-underline-animation ${
                pathname === "/" ? "text-[#16324F] font-semibold" : "text-[#202832]/80"
              }`}
            >
              Home
            </Link>

            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1 transition-colors hover:text-[#16324F] ${
                  pathname.startsWith("/about") ? "text-[#16324F] font-semibold" : "text-[#202832]/80"
                }`}
                aria-expanded={aboutDropdownOpen}
              >
                <span>About</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${aboutDropdownOpen ? "rotate-180 text-[#B99A5E]" : ""}`} />
              </button>

              {aboutDropdownOpen && (
                <div className="absolute top-full -left-4 w-72 pt-3 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="bg-white rounded-lg shadow-xl border border-[#16324F]/10 p-2 text-sm">
                    <Link
                      href="/about/journal"
                      className="flex items-start gap-3 p-2.5 rounded-md hover:bg-[#F8F7F2] transition-colors group"
                    >
                      <BookOpen className="w-4 h-4 text-[#16324F] mt-0.5 group-hover:text-[#B99A5E] transition-colors" />
                      <div>
                        <div className="font-medium text-[#16324F]">About the Journal</div>
                        <div className="text-xs text-[#697480]">Aims, scope, ethics, and review model</div>
                      </div>
                    </Link>

                    <Link
                      href="/about/centre"
                      className="flex items-start gap-3 p-2.5 rounded-md hover:bg-[#F8F7F2] transition-colors group"
                    >
                      <Building className="w-4 h-4 text-[#16324F] mt-0.5 group-hover:text-[#B99A5E] transition-colors" />
                      <div>
                        <div className="font-medium text-[#16324F]">About the Centre</div>
                        <div className="text-xs text-[#697480]">Institutional profile & research clusters</div>
                      </div>
                    </Link>

                    <Link
                      href="/about/editorial-board"
                      className="flex items-start gap-3 p-2.5 rounded-md hover:bg-[#F8F7F2] transition-colors group"
                    >
                      <Users className="w-4 h-4 text-[#16324F] mt-0.5 group-hover:text-[#B99A5E] transition-colors" />
                      <div>
                        <div className="font-medium text-[#16324F]">Faculty Advisors & Editorial Board</div>
                        <div className="text-xs text-[#697480]">Patrons, advisors, and student editors</div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Publications Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setPublicationsDropdownOpen(true)}
              onMouseLeave={() => setPublicationsDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1 transition-colors hover:text-[#16324F] ${
                  pathname.startsWith("/publications") ? "text-[#16324F] font-semibold" : "text-[#202832]/80"
                }`}
              >
                <span>Publications</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${publicationsDropdownOpen ? "rotate-180 text-[#B99A5E]" : ""}`} />
              </button>

              {publicationsDropdownOpen && (
                <div className="absolute top-full -left-4 w-64 pt-3 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="bg-white rounded-lg shadow-xl border border-[#16324F]/10 p-2 text-sm">
                    <Link
                      href="/publications"
                      className="flex items-start gap-3 p-2.5 rounded-md hover:bg-[#F8F7F2] transition-colors group"
                    >
                      <FileText className="w-4 h-4 text-[#16324F] mt-0.5 group-hover:text-[#B99A5E] transition-colors" />
                      <div>
                        <div className="font-medium text-[#16324F]">Current Issue (Vol. 1)</div>
                        <div className="text-xs text-[#697480]">Inaugural scholarship repository</div>
                      </div>
                    </Link>

                    <Link
                      href="/publications/archive"
                      className="flex items-start gap-3 p-2.5 rounded-md hover:bg-[#F8F7F2] transition-colors group"
                    >
                      <Library className="w-4 h-4 text-[#16324F] mt-0.5 group-hover:text-[#B99A5E] transition-colors" />
                      <div>
                        <div className="font-medium text-[#16324F]">Journal Archive</div>
                        <div className="text-xs text-[#697480]">Past volumes and future editions</div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/submission-guidelines"
              className={`transition-colors hover:text-[#16324F] hover-underline-animation ${
                pathname === "/submission-guidelines" ? "text-[#16324F] font-semibold" : "text-[#202832]/80"
              }`}
            >
              Submission Guidelines
            </Link>
          </nav>

          {/* Right Action Icons & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Search Trigger */}
            <button
              onClick={openSearch}
              className="flex items-center gap-2.5 px-3 py-1.5 rounded-md border border-[#16324F]/15 bg-white/70 hover:bg-white text-xs text-[#697480] hover:text-[#16324F] transition-all hover:border-[#16324F]/30 shadow-2xs"
              aria-label="Search publications and content"
            >
              <Search className="w-3.5 h-3.5 text-[#16324F]" />
              <span>Search...</span>
              <kbd className="font-mono-meta text-[10px] bg-[#F8F7F2] border border-[#16324F]/10 rounded px-1.5 py-0.5 text-[#697480]">
                ⌘K
              </kbd>
            </button>

            {/* Submit Manuscript CTA */}
            <Link
              href="/submission-guidelines"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-[#16324F] text-[#F8F7F2] text-xs font-semibold hover:bg-[#0D1F31] transition-all duration-200 shadow-xs group"
            >
              <span>Submit Manuscript</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#B99A5E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Search & Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={openSearch}
              className="p-2 rounded-md border border-[#16324F]/15 text-[#16324F] hover:bg-white transition-colors"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-md border border-[#16324F]/15 text-[#16324F] hover:bg-white transition-colors"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Sheet */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenSearch={openSearch}
      />
    </>
  );
}

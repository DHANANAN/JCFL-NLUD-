"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X, Search, ArrowRight, BookOpen, Building, Users, FileText, Library } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSearch: () => void;
}

export function MobileMenu({ isOpen, onClose, onOpenSearch }: MobileMenuProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close on route change
  useEffect(() => {
    onClose();
  }, [pathname]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#F8F7F2] animate-in fade-in duration-200">
      {/* Header Bar */}
      <div className="flex items-center justify-between p-4 border-b border-[#16324F]/10">
        <div className="flex items-center gap-3">
          <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#B99A5E]/40 bg-[#16324F]">
            <Image
              src="/assets/images/cclgfl-logo.jpg"
              alt="Logo"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="font-serif-display font-bold text-sm text-[#16324F]">JCFL</div>
            <div className="text-[10px] text-[#697480] uppercase tracking-wider">CCLGFL</div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="p-2 rounded-md border border-[#16324F]/15 text-[#16324F] hover:bg-white transition-colors"
          aria-label="Close menu"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Menu Body */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* Search Bar */}
        <button
          onClick={() => {
            onClose();
            onOpenSearch();
          }}
          className="w-full flex items-center justify-between px-4 py-3 rounded-lg border border-[#16324F]/15 bg-white text-sm text-[#697480]"
        >
          <span className="flex items-center gap-2">
            <Search className="w-4 h-4 text-[#16324F]" />
            Search articles, authors, topics...
          </span>
          <kbd className="font-mono-meta text-xs bg-[#F8F7F2] border border-[#16324F]/10 rounded px-2 py-0.5">
            ⌘K
          </kbd>
        </button>

        {/* Primary Links */}
        <div className="space-y-1">
          <Link
            href="/"
            className={`block px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
              pathname === "/" ? "bg-[#16324F]/08 text-[#16324F] font-bold" : "text-[#202832] hover:bg-[#16324F]/05"
            }`}
          >
            Home
          </Link>
        </div>

        {/* About Sub-Navigation */}
        <div>
          <div className="text-xs font-mono-meta text-[#B99A5E] uppercase tracking-wider px-3 mb-2 font-semibold">
            About the Publication
          </div>
          <div className="space-y-1">
            <Link
              href="/about/journal"
              className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-[#202832] hover:bg-[#16324F]/05"
            >
              <BookOpen className="w-4 h-4 text-[#16324F]" />
              <span>About the Journal</span>
            </Link>
            <Link
              href="/about/centre"
              className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-[#202832] hover:bg-[#16324F]/05"
            >
              <Building className="w-4 h-4 text-[#16324F]" />
              <span>About the Centre (CCLGFL)</span>
            </Link>
            <Link
              href="/about/editorial-board"
              className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-[#202832] hover:bg-[#16324F]/05"
            >
              <Users className="w-4 h-4 text-[#16324F]" />
              <span>Faculty Advisors & Editorial Board</span>
            </Link>
          </div>
        </div>

        {/* Publications Sub-Navigation */}
        <div>
          <div className="text-xs font-mono-meta text-[#B99A5E] uppercase tracking-wider px-3 mb-2 font-semibold">
            Scholarship & Issues
          </div>
          <div className="space-y-1">
            <Link
              href="/publications"
              className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-[#202832] hover:bg-[#16324F]/05"
            >
              <FileText className="w-4 h-4 text-[#16324F]" />
              <span>Current Issue (Volume 1 · Issue 1)</span>
            </Link>
            <Link
              href="/publications/archive"
              className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-[#202832] hover:bg-[#16324F]/05"
            >
              <Library className="w-4 h-4 text-[#16324F]" />
              <span>Journal Archive</span>
            </Link>
          </div>
        </div>

        {/* Guidelines */}
        <div>
          <Link
            href="/submission-guidelines"
            className="block px-3 py-2.5 rounded-md text-base font-medium text-[#202832] hover:bg-[#16324F]/05"
          >
            Submission Guidelines
          </Link>
        </div>

        {/* Submit CTA */}
        <div className="pt-4 border-t border-[#16324F]/10">
          <Link
            href="/submission-guidelines"
            className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#16324F] text-white font-medium text-sm shadow-md"
          >
            <span>Submit Manuscript</span>
            <ArrowRight className="w-4 h-4 text-[#B99A5E]" />
          </Link>
        </div>
      </div>
    </div>
  );
}

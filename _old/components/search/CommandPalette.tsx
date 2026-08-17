"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, FileText, User, Tag, BookOpen, ArrowRight, X, Sparkles } from "lucide-react";
import { publications } from "@/lib/data/publications";
import { researchAreas } from "@/lib/data/research-areas";
import { editorialBoard } from "@/lib/data/editorial-board";

interface SearchResult {
  id: string;
  title: string;
  subtitle: string;
  category: "Publication" | "Research Area" | "Editorial Board" | "Page";
  href: string;
}

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Listen for custom open event & ⌘K / Ctrl+K shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    const handleCustomOpen = () => setIsOpen(true);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-command-palette", handleCustomOpen);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-command-palette", handleCustomOpen);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setQuery("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Static searchable pages
  const staticPages: SearchResult[] = [
    { id: "page-home", title: "Home", subtitle: "Journal Inaugural Landing", category: "Page", href: "/" },
    { id: "page-publications", title: "Publications Archive", subtitle: "Browse all research papers & issues", category: "Page", href: "/publications" },
    { id: "page-archive", title: "Journal Archive", subtitle: "Past volumes and forthcoming issues", category: "Page", href: "/publications/archive" },
    { id: "page-about-journal", title: "About the Journal", subtitle: "Aims, scope, ethics & review model", category: "Page", href: "/about/journal" },
    { id: "page-about-centre", title: "About CCLGFL", subtitle: "Institutional profile & research focus", category: "Page", href: "/about/centre" },
    { id: "page-editorial-board", title: "Faculty Advisors & Editorial Board", subtitle: "Patrons, advisors, and editors", category: "Page", href: "/about/editorial-board" },
    { id: "page-submission-guidelines", title: "Submission Guidelines", subtitle: "Manuscript guidelines & author checklist", category: "Page", href: "/submission-guidelines" },
  ];

  // Map publications
  const publicationResults: SearchResult[] = publications.map((pub) => ({
    id: `pub-${pub.id}`,
    title: pub.title,
    subtitle: `${pub.publicationType} · ${pub.authors.map((a) => a.name).join(", ")} (${pub.year})`,
    category: "Publication",
    href: `/publications/${pub.slug}`,
  }));

  // Map research areas
  const areaResults: SearchResult[] = researchAreas.map((area) => ({
    id: `area-${area.id}`,
    title: area.title,
    subtitle: area.description,
    category: "Research Area",
    href: `/publications?area=${encodeURIComponent(area.title)}`,
  }));

  const allItems = [...publicationResults, ...areaResults, ...staticPages];

  const filteredResults = query.trim() === ""
    ? allItems.slice(0, 7)
    : allItems.filter((item) => {
        const q = query.toLowerCase();
        return (
          item.title.toLowerCase().includes(q) ||
          item.subtitle.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q)
        );
      });

  const handleSelect = (item: SearchResult) => {
    setIsOpen(false);
    router.push(item.href);
  };

  const handleKeyNavigation = (e: React.KeyboardEvent) => {
    if (filteredResults.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredResults.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredResults.length) % filteredResults.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredResults[selectedIndex]) {
        handleSelect(filteredResults[selectedIndex]);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-[#0B1927]/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-[#16324F]/15 overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[#16324F]/10 bg-[#F8F7F2]">
          <Search className="w-5 h-5 text-[#16324F] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyNavigation}
            placeholder="Search articles, authors, research areas, or guidelines..."
            className="flex-1 bg-transparent text-[#202832] placeholder-[#697480] text-sm focus:outline-hidden font-sans-ui"
          />
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 rounded text-[#697480] hover:text-[#16324F] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-2 divide-y divide-[#16324F]/05">
          {filteredResults.length === 0 ? (
            <div className="py-12 text-center text-sm text-[#697480]">
              No matching publications or pages found for &ldquo;{query}&rdquo;.
            </div>
          ) : (
            filteredResults.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
                    isSelected ? "bg-[#16324F]/08 text-[#16324F]" : "hover:bg-[#F8F7F2] text-[#202832]"
                  }`}
                >
                  <div className="flex items-start gap-3 overflow-hidden">
                    <div className="mt-0.5 p-1.5 rounded bg-white border border-[#16324F]/10 text-[#16324F] shrink-0">
                      {item.category === "Publication" && <FileText className="w-3.5 h-3.5" />}
                      {item.category === "Research Area" && <Tag className="w-3.5 h-3.5" />}
                      {item.category === "Page" && <BookOpen className="w-3.5 h-3.5" />}
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-sm font-semibold truncate font-serif-display">
                        {item.title}
                      </div>
                      <div className="text-xs text-[#697480] truncate font-sans-ui">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono-meta text-[#B99A5E] uppercase px-2 py-0.5 rounded bg-[#B99A5E]/10 shrink-0 ml-2 font-medium">
                    {item.category}
                  </span>
                </div>
              );
            })
          )}
        </div>

        {/* Command Palette Footer */}
        <div className="px-4 py-2.5 bg-[#F8F7F2] border-t border-[#16324F]/10 flex items-center justify-between text-[11px] font-mono-meta text-[#697480]">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>Esc Close</span>
          </div>
          <span className="text-[#16324F] font-medium">JCFL · CCLGFL</span>
        </div>
      </div>
    </div>
  );
}

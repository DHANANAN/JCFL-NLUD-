"use client";

import { useState, useMemo, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Search, Filter, BookOpen, Clock, User, ArrowRight, LayoutGrid, List, ArrowUpDown, X, Tag } from "lucide-react";
import { publications } from "@/lib/data/publications";
import { researchAreas } from "@/lib/data/research-areas";
import { PublicationType } from "@/lib/data/types";

function PublicationsContent() {
  const searchParams = useSearchParams();
  const initialArea = searchParams.get("area") || "All";

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string>("All");
  const [selectedArea, setSelectedArea] = useState<string>(initialArea);
  const [selectedVolume, setSelectedVolume] = useState<string>("All");
  const [sortBy, setSortBy] = useState<"newest" | "oldest" | "title">("newest");
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");

  const publicationTypes: ("All" | PublicationType)[] = [
    "All",
    "Article",
    "Essay",
    "Note",
    "Case Comment",
  ];

  const filteredPublications = useMemo(() => {
    return publications.filter((pub) => {
      // Search Query
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === "" ||
        pub.title.toLowerCase().includes(q) ||
        pub.abstract.toLowerCase().includes(q) ||
        pub.authors.some((a) => a.name.toLowerCase().includes(q)) ||
        pub.keywords.some((k) => k.toLowerCase().includes(q)) ||
        pub.researchAreas.some((r) => r.toLowerCase().includes(q));

      // Type Filter
      const matchesType = selectedType === "All" || pub.publicationType === selectedType;

      // Area Filter
      const matchesArea =
        selectedArea === "All" ||
        pub.researchAreas.some((r) => r.toLowerCase() === selectedArea.toLowerCase());

      // Volume Filter
      const matchesVolume =
        selectedVolume === "All" || String(pub.volume) === selectedVolume;

      return matchesSearch && matchesType && matchesArea && matchesVolume;
    }).sort((a, b) => {
      if (sortBy === "title") {
        return a.title.localeCompare(b.title);
      }
      return 0; // default order
    });
  }, [searchQuery, selectedType, selectedArea, selectedVolume, sortBy]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedType("All");
    setSelectedArea("All");
    setSelectedVolume("All");
    setSortBy("newest");
  };

  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-[#F8F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Page Header */}
        <div className="rounded-2xl bg-white border border-[#16324F]/10 p-8 sm:p-12 shadow-xs relative overflow-hidden">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#16324F]/15 bg-[#F8F7F2] text-[#16324F] font-mono-meta text-xs uppercase tracking-widest font-semibold">
              <BookOpen className="w-3.5 h-3.5 text-[#B99A5E]" />
              Scholarly Archive
            </div>
            <h1 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#16324F]">
              Publications Repository
            </h1>
            <p className="text-sm sm:text-base text-[#697480] font-sans-ui font-light">
              Peer-reviewed doctrinal and empirical research across corporate law, securities regulation, financial governance, and commercial jurisprudence.
            </p>
          </div>
        </div>

        {/* Search & Filter Controls Bar */}
        <div className="bg-white p-6 rounded-xl border border-[#16324F]/10 space-y-5 shadow-xs">
          {/* Main Search Input */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#697480]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, author name, keyword, or research area..."
              className="w-full pl-11 pr-10 py-3 rounded-lg border border-[#16324F]/15 bg-[#F8F7F2]/60 focus:bg-white focus:outline-hidden focus:border-[#16324F] text-sm text-[#202832] font-sans-ui"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#697480] hover:text-[#16324F]"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Filter Dropdowns & View Toggles */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-[#16324F]/06">
            <div className="flex flex-wrap items-center gap-3 text-xs font-sans-ui">
              {/* Publication Type Filter */}
              <div className="flex items-center gap-1.5">
                <span className="font-mono-meta text-[#697480] text-[11px] uppercase">Type:</span>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="px-2.5 py-1.5 rounded border border-[#16324F]/15 bg-white text-xs text-[#16324F] font-medium"
                >
                  {publicationTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              {/* Research Area Filter */}
              <div className="flex items-center gap-1.5">
                <span className="font-mono-meta text-[#697480] text-[11px] uppercase">Area:</span>
                <select
                  value={selectedArea}
                  onChange={(e) => setSelectedArea(e.target.value)}
                  className="px-2.5 py-1.5 rounded border border-[#16324F]/15 bg-white text-xs text-[#16324F] font-medium max-w-[200px] truncate"
                >
                  <option value="All">All Disciplines</option>
                  {researchAreas.map((a) => (
                    <option key={a.id} value={a.title}>
                      {a.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Volume Filter */}
              <div className="flex items-center gap-1.5">
                <span className="font-mono-meta text-[#697480] text-[11px] uppercase">Volume:</span>
                <select
                  value={selectedVolume}
                  onChange={(e) => setSelectedVolume(e.target.value)}
                  className="px-2.5 py-1.5 rounded border border-[#16324F]/15 bg-white text-xs text-[#16324F] font-medium"
                >
                  <option value="All">All Volumes</option>
                  <option value="1">Volume 1 (2026)</option>
                </select>
              </div>

              {(searchQuery || selectedType !== "All" || selectedArea !== "All" || selectedVolume !== "All") && (
                <button
                  onClick={clearFilters}
                  className="text-xs text-[#B99A5E] hover:underline font-mono-meta font-medium ml-2"
                >
                  Reset Filters
                </button>
              )}
            </div>

            {/* Right: Results Count & View Toggle */}
            <div className="flex items-center gap-4 text-xs">
              <span className="font-mono-meta text-[#697480]">
                Showing <strong className="text-[#16324F]">{filteredPublications.length}</strong> Results
              </span>

              <div className="flex items-center border border-[#16324F]/15 rounded p-0.5 bg-[#F8F7F2]">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-1.5 rounded ${viewMode === "grid" ? "bg-white shadow-2xs text-[#16324F]" : "text-[#697480]"}`}
                  title="Grid View"
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setViewMode("table")}
                  className={`p-1.5 rounded ${viewMode === "table" ? "bg-white shadow-2xs text-[#16324F]" : "text-[#697480]"}`}
                  title="Table View"
                >
                  <List className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Publications Results */}
        {filteredPublications.length === 0 ? (
          <div className="bg-white rounded-xl border border-[#16324F]/10 p-12 text-center space-y-3">
            <h3 className="font-serif-display text-xl font-bold text-[#16324F]">
              No publications match your criteria
            </h3>
            <p className="text-xs sm:text-sm text-[#697480] max-w-md mx-auto font-sans-ui">
              Try adjusting your search terms or clearing selected filters to view available scholarship in the inaugural issue.
            </p>
            <button
              onClick={clearFilters}
              className="mt-2 px-4 py-2 rounded bg-[#16324F] text-white text-xs font-medium hover:bg-[#0D1F31] transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        ) : viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPublications.map((pub) => (
              <article
                key={pub.id}
                className="flex flex-col justify-between rounded-xl bg-white p-6 border border-[#16324F]/10 hover:border-[#B99A5E] hover:shadow-lg transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs font-mono-meta mb-3 pb-2 border-b border-[#16324F]/06">
                    <span className="px-2 py-0.5 rounded bg-[#16324F]/06 text-[#16324F] font-semibold uppercase text-[10px]">
                      {pub.publicationType}
                    </span>
                    <div className="flex items-center gap-1 text-[#697480]">
                      <Clock className="w-3 h-3 text-[#537C78]" />
                      <span>{pub.readingTimeMinutes} min</span>
                    </div>
                  </div>

                  <h3 className="font-serif-display text-lg font-bold text-[#16324F] leading-snug mb-3 group-hover:text-[#16324F]/80">
                    <Link href={`/publications/${pub.slug}`} className="hover:underline">
                      {pub.title}
                    </Link>
                  </h3>

                  <div className="flex items-center gap-2 mb-3 text-xs font-sans-ui text-[#202832]/80">
                    <User className="w-3.5 h-3.5 text-[#B99A5E] shrink-0" />
                    <span>{pub.authors.map((a) => a.name).join(", ")}</span>
                  </div>

                  <p className="text-xs text-[#697480] font-sans-ui line-clamp-3 leading-relaxed mb-4">
                    {pub.abstract}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#16324F]/06 flex items-center justify-between">
                  <span className="text-[11px] text-[#537C78] bg-[#E8EFEB] px-2.5 py-0.5 rounded font-medium">
                    {pub.researchAreas[0]}
                  </span>

                  <Link
                    href={`/publications/${pub.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#16324F] group-hover:text-[#B99A5E] transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Table View */
          <div className="bg-white rounded-xl border border-[#16324F]/10 overflow-hidden shadow-xs">
            <table className="w-full text-left border-collapse font-sans-ui text-sm">
              <thead>
                <tr className="bg-[#16324F]/04 border-b border-[#16324F]/10 text-[11px] font-mono-meta uppercase tracking-wider text-[#697480]">
                  <th className="py-3.5 px-5 w-16">No.</th>
                  <th className="py-3.5 px-4 w-28">Type</th>
                  <th className="py-3.5 px-4">Article Title</th>
                  <th className="py-3.5 px-4 w-52">Author(s)</th>
                  <th className="py-3.5 px-4 w-44">Research Area</th>
                  <th className="py-3.5 px-5 text-right w-28">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#16324F]/08">
                {filteredPublications.map((pub, idx) => (
                  <tr key={pub.id} className="hover:bg-[#F8F7F2] transition-colors group">
                    <td className="py-4 px-5 font-mono-meta text-xs text-[#B99A5E] font-semibold">
                      {String(idx + 1).padStart(2, "0")}
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-[10px] font-mono-meta px-2 py-0.5 rounded bg-[#16324F]/06 text-[#16324F] uppercase font-medium">
                        {pub.publicationType}
                      </span>
                    </td>
                    <td className="py-4 px-4 font-serif-display font-medium text-[#16324F]">
                      <Link href={`/publications/${pub.slug}`} className="hover:underline">
                        {pub.title}
                      </Link>
                    </td>
                    <td className="py-4 px-4 text-xs text-[#202832]/80">
                      {pub.authors.map((a) => a.name).join(", ")}
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-[11px] text-[#537C78] bg-[#E8EFEB] px-2 py-0.5 rounded font-medium">
                        {pub.researchAreas[0]}
                      </span>
                    </td>
                    <td className="py-4 px-5 text-right">
                      <Link
                        href={`/publications/${pub.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#16324F] group-hover:text-[#B99A5E]"
                      >
                        <span>Read</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default function PublicationsPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-sm font-mono-meta">Loading Publications Repository...</div>}>
      <PublicationsContent />
    </Suspense>
  );
}

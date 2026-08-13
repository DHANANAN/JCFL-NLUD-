"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, FileText } from "lucide-react";
import { publications } from "@/lib/data/publications";

export function LatestPublicationsTable() {
  return (
    <section className="py-16 lg:py-24 bg-[#F8F7F2] border-b border-[#16324F]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="font-mono-meta text-xs uppercase tracking-widest text-[#537C78] font-semibold mb-2">
              Volume 1 · Issue 1
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#16324F]">
              Inaugural Issue Index
            </h2>
          </div>

          <Link
            href="/publications"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#16324F] hover:text-[#B99A5E] transition-colors group"
          >
            <span>Full Publication Archive</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Desktop Table View */}
        <div className="hidden lg:block bg-white rounded-xl border border-[#16324F]/10 overflow-hidden shadow-xs">
          <table className="w-full text-left border-collapse font-sans-ui">
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
            <tbody className="divide-y divide-[#16324F]/08 text-sm">
              {publications.map((pub, idx) => (
                <tr
                  key={pub.id}
                  className="hover:bg-[#F8F7F2]/80 transition-colors group"
                >
                  <td className="py-4 px-5 font-mono-meta text-xs text-[#B99A5E] font-semibold">
                    {String(idx + 1).padStart(2, "0")}
                  </td>
                  <td className="py-4 px-4">
                    <span className="inline-block text-[10px] font-mono-meta px-2 py-0.5 rounded bg-[#16324F]/06 text-[#16324F] uppercase font-medium">
                      {pub.publicationType}
                    </span>
                  </td>
                  <td className="py-4 px-4 font-serif-display font-medium text-[#16324F]">
                    <Link
                      href={`/publications/${pub.slug}`}
                      className="group-hover:text-[#16324F] hover:underline transition-colors block"
                    >
                      {pub.title}
                    </Link>
                  </td>
                  <td className="py-4 px-4 text-xs text-[#202832]/80 font-sans-ui">
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
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#16324F] group-hover:text-[#B99A5E] transition-colors"
                    >
                      <span>Read</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile / Tablet Stacked Cards */}
        <div className="lg:hidden space-y-3">
          {publications.map((pub, idx) => (
            <div
              key={pub.id}
              className="p-5 rounded-lg bg-white border border-[#16324F]/10 hover:border-[#16324F]/30 transition-all"
            >
              <div className="flex items-center justify-between gap-2 text-xs font-mono-meta text-[#697480] mb-2 pb-2 border-b border-[#16324F]/06">
                <span className="font-bold text-[#B99A5E]">#{String(idx + 1).padStart(2, "0")}</span>
                <span className="px-2 py-0.5 rounded bg-[#16324F]/08 text-[#16324F] uppercase text-[10px]">
                  {pub.publicationType}
                </span>
                <span>{pub.year}</span>
              </div>

              <h3 className="font-serif-display font-semibold text-base text-[#16324F] mb-2">
                <Link href={`/publications/${pub.slug}`}>{pub.title}</Link>
              </h3>

              <div className="text-xs text-[#697480] mb-3">
                {pub.authors.map((a) => a.name).join(", ")}
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-[#16324F]/06">
                <span className="text-[11px] text-[#537C78] bg-[#E8EFEB] px-2 py-0.5 rounded">
                  {pub.researchAreas[0]}
                </span>
                <Link
                  href={`/publications/${pub.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#16324F]"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#B99A5E]" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

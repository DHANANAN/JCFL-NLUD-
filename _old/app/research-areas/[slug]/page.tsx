import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, BookOpen, Clock, User, ArrowRight, Tag } from "lucide-react";
import { researchAreas } from "@/lib/data/research-areas";
import { publications } from "@/lib/data/publications";

interface ResearchAreaPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return researchAreas.map((area) => ({
    slug: area.slug,
  }));
}

export async function generateMetadata({ params }: ResearchAreaPageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = researchAreas.find((a) => a.slug === slug);

  if (!area) {
    return { title: "Research Area Not Found" };
  }

  return {
    title: `${area.title} | Research Taxonomy | Journal of Corporate and Financial Laws`,
    description: area.description,
  };
}

export default async function ResearchAreaPage({ params }: ResearchAreaPageProps) {
  const { slug } = await params;
  const area = researchAreas.find((a) => a.slug === slug);

  if (!area) {
    notFound();
  }

  const matchingPublications = publications.filter((pub) =>
    pub.researchAreas.some((r) => r.toLowerCase() === area.title.toLowerCase())
  );

  return (
    <div className="py-12 sm:py-16 bg-[#F8F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <Link
          href="/publications"
          className="inline-flex items-center gap-1.5 text-xs text-[#697480] hover:text-[#16324F] transition-colors font-medium group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Publications</span>
        </Link>

        {/* Header */}
        <div className="rounded-2xl bg-white border border-[#16324F]/10 p-8 sm:p-12 shadow-xs space-y-4">
          <div className="flex items-center gap-2">
            <span className="font-mono-meta text-xs font-bold text-[#B99A5E]">
              TAXONOMY // DOMAIN {area.indexNumber}
            </span>
          </div>

          <h1 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#16324F]">
            {area.title}
          </h1>

          <p className="text-base text-[#697480] font-sans-ui max-w-3xl leading-relaxed font-light">
            {area.description}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono-meta text-[#697480]">Core Focus Themes:</span>
            {area.keyTopics.map((topic) => (
              <span
                key={topic}
                className="text-xs font-sans-ui text-[#537C78] bg-[#E8EFEB] px-2.5 py-0.5 rounded font-medium"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        {/* Publications List */}
        <div className="space-y-6">
          <h2 className="font-serif-display text-2xl font-bold text-[#16324F]">
            Published Scholarship in this Field ({matchingPublications.length})
          </h2>

          {matchingPublications.length === 0 ? (
            <div className="bg-white rounded-xl border border-[#16324F]/10 p-12 text-center text-sm text-[#697480]">
              Manuscripts in this research area are currently undergoing double-blind peer review for upcoming issues.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {matchingPublications.map((pub) => (
                <article
                  key={pub.id}
                  className="flex flex-col justify-between rounded-xl bg-white p-6 border border-[#16324F]/10 hover:border-[#B99A5E] hover:shadow-lg transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono-meta text-[#697480] mb-3 pb-2 border-b border-[#16324F]/06">
                      <span className="px-2 py-0.5 rounded bg-[#16324F]/06 text-[#16324F] uppercase font-bold text-[10px]">
                        {pub.publicationType}
                      </span>
                      <span>{pub.readingTimeMinutes} min</span>
                    </div>

                    <h3 className="font-serif-display text-lg font-bold text-[#16324F] leading-snug mb-3">
                      <Link href={`/publications/${pub.slug}`} className="hover:underline">
                        {pub.title}
                      </Link>
                    </h3>

                    <p className="text-xs text-[#697480] line-clamp-3 mb-4">{pub.abstract}</p>
                  </div>

                  <Link
                    href={`/publications/${pub.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#16324F] group-hover:text-[#B99A5E] pt-3 border-t border-[#16324F]/06"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

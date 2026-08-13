import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, User, BookOpen, Mail, Building, ArrowRight } from "lucide-react";
import { publications } from "@/lib/data/publications";

interface AuthorPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const authorSlugs = new Set<string>();
  publications.forEach((p) => {
    p.authors.forEach((a) => {
      authorSlugs.add(a.slug);
    });
  });

  return Array.from(authorSlugs).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: AuthorPageProps): Promise<Metadata> {
  const { slug } = await params;
  let foundAuthor: { name: string; affiliation: string } | null = null;

  for (const pub of publications) {
    const a = pub.authors.find((author) => author.slug === slug);
    if (a) {
      foundAuthor = a;
      break;
    }
  }

  if (!foundAuthor) {
    return { title: "Author Not Found" };
  }

  return {
    title: `${foundAuthor.name} | Author Profile | Journal of Corporate and Financial Laws`,
    description: `Published academic scholarship by ${foundAuthor.name} (${foundAuthor.affiliation}) in the Journal of Corporate and Financial Laws.`,
  };
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  const { slug } = await params;
  let authorData: any = null;

  for (const pub of publications) {
    const a = pub.authors.find((author) => author.slug === slug);
    if (a) {
      authorData = a;
      break;
    }
  }

  if (!authorData) {
    notFound();
  }

  const authorPublications = publications.filter((p) =>
    p.authors.some((a) => a.slug === slug)
  );

  return (
    <div className="py-12 sm:py-16 bg-[#F8F7F2]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <Link
          href="/publications"
          className="inline-flex items-center gap-1.5 text-xs text-[#697480] hover:text-[#16324F] transition-colors font-medium group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Publications</span>
        </Link>

        {/* Profile Card */}
        <div className="p-8 sm:p-12 rounded-2xl bg-white border border-[#16324F]/10 shadow-xs flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-[#16324F] text-white flex items-center justify-center font-serif-display font-bold text-2xl shrink-0 shadow-md">
            {authorData.name.charAt(0)}
          </div>
          <div className="space-y-2">
            <span className="font-mono-meta text-xs uppercase tracking-widest text-[#B99A5E] font-semibold">
              Contributing Scholar
            </span>
            <h1 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#16324F]">
              {authorData.name}
            </h1>
            <p className="text-sm text-[#697480] font-sans-ui">
              {authorData.affiliation} {authorData.role ? `· ${authorData.role}` : ""}
            </p>
            {authorData.bio && (
              <p className="text-xs sm:text-sm text-[#202832]/80 font-sans-ui pt-2 leading-relaxed max-w-2xl font-light">
                {authorData.bio}
              </p>
            )}
          </div>
        </div>

        {/* Bibliography List */}
        <div className="space-y-6">
          <h2 className="font-serif-display text-xl sm:text-2xl font-bold text-[#16324F]">
            Articles Published in JCFL ({authorPublications.length})
          </h2>

          <div className="space-y-4">
            {authorPublications.map((pub) => (
              <article
                key={pub.id}
                className="p-6 rounded-xl bg-white border border-[#16324F]/10 hover:border-[#B99A5E] hover:shadow-md transition-all space-y-3"
              >
                <div className="flex items-center justify-between text-xs font-mono-meta text-[#697480]">
                  <span className="px-2 py-0.5 rounded bg-[#16324F]/08 text-[#16324F] uppercase font-bold text-[10px]">
                    {pub.publicationType}
                  </span>
                  <span>Volume {pub.volume} · Issue {pub.issue} ({pub.year})</span>
                </div>

                <h3 className="font-serif-display text-lg font-bold text-[#16324F]">
                  <Link href={`/publications/${pub.slug}`} className="hover:underline">
                    {pub.title}
                  </Link>
                </h3>

                <p className="text-xs text-[#697480] line-clamp-2 leading-relaxed">
                  {pub.abstract}
                </p>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-[#537C78] bg-[#E8EFEB] px-2 py-0.5 rounded">
                    {pub.researchAreas[0]}
                  </span>
                  <Link
                    href={`/publications/${pub.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#16324F] hover:text-[#B99A5E]"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

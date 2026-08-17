import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { publications } from "@/lib/data/publications";
import { ArticleReader } from "@/components/article/ArticleReader";

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return publications.map((pub) => ({
    slug: pub.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const publication = publications.find((p) => p.slug === slug);

  if (!publication) {
    return {
      title: "Publication Not Found | Journal of Corporate and Financial Laws",
    };
  }

  return {
    title: `${publication.title} | Journal of Corporate and Financial Laws`,
    description: publication.abstract.slice(0, 160),
    authors: publication.authors.map((a) => ({ name: a.name })),
    keywords: publication.keywords,
    openGraph: {
      title: publication.title,
      description: publication.abstract,
      type: "article",
      publishedTime: "2026-01-01T00:00:00Z",
      authors: publication.authors.map((a) => a.name),
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const publication = publications.find((p) => p.slug === slug);

  if (!publication) {
    notFound();
  }

  return <ArticleReader publication={publication} />;
}

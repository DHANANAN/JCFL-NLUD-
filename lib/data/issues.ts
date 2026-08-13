import { Issue } from "./types";

export const issues: Issue[] = [
  {
    volume: 1,
    issue: 1,
    year: 2026,
    title: "Inaugural Edition: Corporate Law for a Dynamic Financial Architecture",
    isInaugural: true,
    status: "Published",
    publicationDate: "Inaugural Issue, 2026",
    description: "The maiden edition of the Journal of Corporate and Financial Laws convenes doctrinal and empirical scholarship on emerging corporate governance frontiers, algorithmic financial markets, cross-border restructuring, and sustainable capital allocation.",
    articleCount: 6,
    pdfUrl: "#",
    coverImage: "/assets/images/volume-1-issue-1-cover.png"
  },
  {
    volume: 1,
    issue: 2,
    year: 2026,
    title: "Volume 1, Issue 2: Future Frontiers in Securities & Banking Jurisprudence",
    isInaugural: false,
    status: "Forthcoming",
    publicationDate: "Winter 2026 [Forthcoming]",
    description: "Scheduled for release following the upcoming call for manuscripts. Will feature cutting-edge discourse on digital assets, prudential supervision, and international financial center governance.",
    articleCount: 0,
    pdfUrl: undefined,
    coverImage: "/assets/images/volume-1-issue-2-cover.png"
  }
];

export const currentIssue = issues[0];

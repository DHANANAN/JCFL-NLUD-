import { Publication } from "./data/types";

export interface FormattedCitations {
  bluebook: string;
  oscola: string;
  apa: string;
  mla: string;
  chicago: string;
  bibtex: string;
}

export function generateCitations(pub: Publication): FormattedCitations {
  const authorNames = pub.authors.map(a => a.name).join(", ");
  const firstAuthorLastFirst = pub.authors[0] 
    ? `${pub.authors[0].name.split(" ").slice(-1)[0]}, ${pub.authors[0].name.split(" ").slice(0, -1).join(" ")}`
    : "[Author Name]";
  const journalName = "J. Corp. & Fin. L.";
  const fullJournalName = "Journal of Corporate and Financial Laws";
  const vol = pub.volume;
  const issue = pub.issue;
  const year = pub.year;
  const startPg = pub.startPage || 1;
  const endPg = pub.endPage || 24;
  const pageRange = `${startPg}–${endPg}`;
  const doiStr = pub.doi && !pub.doi.includes("to be") ? ` https://doi.org/${pub.doi}` : "";

  // 1. Bluebook (21st Ed.) Law Review Format: Author, Title, Vol. J. NAME (Year)
  const bluebook = `${authorNames}, ${pub.title}, ${vol} ${journalName} ${startPg} (${year}).`;

  // 2. OSCOLA (4th Ed.): Author, 'Title' (Year) Vol(Issue) Journal StartPage
  const oscola = `${authorNames}, '${pub.title}' (${year}) ${vol}(${issue}) ${fullJournalName} ${startPg}.`;

  // 3. APA (7th Ed.): Author. (Year). Title. Journal, Vol(Issue), pages. DOI
  const apaAuthors = pub.authors.map(a => {
    const parts = a.name.split(" ");
    const last = parts.slice(-1)[0];
    const initials = parts.slice(0, -1).map(p => `${p[0]}.`).join(" ");
    return `${last}, ${initials}`;
  }).join(", & ");
  const apa = `${apaAuthors} (${year}). ${pub.title}. ${fullJournalName}, ${vol}(${issue}), ${pageRange}.${doiStr}`;

  // 4. MLA (9th Ed.): Author. "Title." Journal, vol. X, no. X, Year, pp. XX-XX.
  const mla = `${firstAuthorLastFirst}. "${pub.title}." ${fullJournalName}, vol. ${vol}, no. ${issue}, ${year}, pp. ${pageRange}.`;

  // 5. Chicago (17th Ed. Notes & Bibliography): Author. "Title." Journal Vol, no. Issue (Year): Start-End.
  const chicago = `${firstAuthorLastFirst}. "${pub.title}." ${fullJournalName} ${vol}, no. ${issue} (${year}): ${pageRange}.${doiStr}`;

  // 6. BibTeX format
  const bibtexKey = `${pub.authors[0]?.name.split(" ").slice(-1)[0].toLowerCase() || "author"}${year}${pub.slug.slice(0, 8)}`;
  const bibtex = `@article{${bibtexKey},
  author    = {${pub.authors.map(a => a.name).join(" and ")}},
  title     = {${pub.title}},
  journal   = {${fullJournalName}},
  volume    = {${vol}},
  number    = {${issue}},
  pages     = {${startPg}--${endPg}},
  year      = {${year}},
  publisher = {Centre for Corporate Law, Governance & Financial Laws}
}`;

  return {
    bluebook,
    oscola,
    apa,
    mla,
    chicago,
    bibtex
  };
}

export type PublicationType = 
  | 'Article' 
  | 'Essay' 
  | 'Note' 
  | 'Comment' 
  | 'Case Comment' 
  | 'Book Review' 
  | 'Editorial';

export interface Author {
  name: string;
  slug: string;
  affiliation: string;
  role?: string;
  bio?: string;
  orcid?: string;
  email?: string;
}

export interface Footnote {
  id: number;
  text: string;
}

export interface SectionContent {
  id: string;
  title: string;
  level?: number;
  paragraphs: string[];
}

export interface Publication {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  publicationType: PublicationType;
  authors: Author[];
  abstract: string;
  keywords: string[];
  researchAreas: string[];
  volume: number;
  issue: number;
  year: number;
  publicationDate: string; // e.g. "Inaugural Issue, 2026"
  startPage?: number;
  endPage?: number;
  doi?: string; // e.g. "[DOI to be assigned upon official indexing]"
  pdfUrl?: string;
  featured?: boolean;
  readingTimeMinutes: number;
  sections: SectionContent[];
  footnotes: Footnote[];
  tableOfContents: { id: string; title: string }[];
}

export interface Issue {
  volume: number;
  issue: number;
  year: number;
  title: string;
  isInaugural: boolean;
  status: 'Published' | 'Forthcoming' | 'Archive';
  publicationDate: string;
  description: string;
  articleCount: number;
  pdfUrl?: string;
  coverImage?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  category: 
    | 'Patron / Institutional Leadership' 
    | 'Faculty Advisors' 
    | 'Editor-in-Chief' 
    | 'Managing Editor' 
    | 'Senior Student Editors' 
    | 'Associate Editors' 
    | 'Technical & Design Team';
  institutionalAffiliation: string;
  bio?: string;
  image?: string;
  linkedin?: string;
  isPlaceholder?: boolean;
}

export interface ResearchArea {
  id: string;
  slug: string;
  title: string;
  indexNumber: string;
  description: string;
  iconName: string;
  keyTopics: string[];
  articleCount?: number;
}

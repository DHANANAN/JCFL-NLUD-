export interface ManuscriptCategory {
  type: string;
  wordLimit: string;
  description: string;
  abstractRequired: boolean;
  notes: string;
}

export interface PolicySection {
  id: string;
  title: string;
  content: string[];
  callout?: {
    type: 'note' | 'important' | 'tip';
    text: string;
  };
}

export interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  sectionId: string;
}

export const manuscriptCategories: ManuscriptCategory[] = [
  {
    type: "Articles",
    wordLimit: "6,000 – 10,000 words [Subject to official confirmation]",
    description: "Comprehensive doctrinal, empirical, or theoretical treatments of foundational issues in corporate, financial, and governance laws.",
    abstractRequired: true,
    notes: "Inclusive of footnotes. Must include an abstract of 250–300 words and 4–6 keywords."
  },
  {
    type: "Essays",
    wordLimit: "4,000 – 6,000 words [Subject to official confirmation]",
    description: "Compact, conceptually focused scholarship challenging established doctrinal positions or offering novel theoretical interventions.",
    abstractRequired: true,
    notes: "Inclusive of footnotes. Must include an abstract of 200–250 words and 4–6 keywords."
  },
  {
    type: "Notes & Comments",
    wordLimit: "3,000 – 5,000 words [Subject to official confirmation]",
    description: "Targeted analyses of recent statutory enactments, regulatory amendments, or emerging commercial practices.",
    abstractRequired: true,
    notes: "Inclusive of footnotes. Abstract required."
  },
  {
    type: "Case Comments",
    wordLimit: "2,500 – 4,000 words [Subject to official confirmation]",
    description: "Critical analyses of landmark rulings of the Supreme Court, High Courts, NCLAT, NCLT, SAT, or international commercial tribunals.",
    abstractRequired: true,
    notes: "Must identify the procedural history, ratio decidendi, and wider commercial implications."
  },
  {
    type: "Book Reviews",
    wordLimit: "1,500 – 2,500 words [Subject to official confirmation]",
    description: "Critical reviews of recent authoritative scholarly publications and treatises in corporate and financial legal literature.",
    abstractRequired: false,
    notes: "Must provide comprehensive critical evaluation rather than simple chapter summaries."
  }
];

export const submissionPolicies: PolicySection[] = [
  {
    id: "scope-submissions",
    title: "1. Scope & Thematic Focus",
    content: [
      "The Journal of Corporate and Financial Laws (JCFL) welcomes scholarly manuscripts addressing themes within the broad rubric of corporate law, financial law, governance, capital markets, banking regulation, commercial arbitration, insolvency jurisprudence, and emerging business regulation.",
      "Interdisciplinary submissions integrating law with economics, finance, corporate sociology, or public policy are particularly encouraged, provided they maintain rigorous legal doctrinal framing."
    ],
    callout: {
      type: "important",
      text: "Manuscripts must demonstrate originality, rigorous scholarly methodology, and direct relevance to contemporary commercial and financial jurisprudence."
    }
  },
  {
    id: "formatting-requirements",
    title: "2. Formatting Requirements",
    content: [
      "File Format: Manuscripts must be submitted exclusively in Microsoft Word (.doc / .docx) format.",
      "Font & Spacing: Main text must be set in Times New Roman, Font Size 12, with 1.5 line spacing and 1-inch margins on all sides.",
      "Footnotes: Footnotes must be formatted in Times New Roman, Font Size 10, with single (1.0) line spacing.",
      "Headings Structure: Use a clear hierarchical numbering system (e.g., I., A., 1., a.). Avoid excessive nested subheadings."
    ]
  },
  {
    id: "citation-style",
    title: "3. Citation Standard & Footnoting",
    content: [
      "Citations must strictly conform to the Bluebook (21st Edition) system of uniform citation or the prescribed institutional citation manual.",
      "All citations must appear as numbered footnotes at the bottom of the relevant page. Endnotes and in-text parenthetical citations (e.g., Harvard/APA style) will not be accepted.",
      "Speaking and explanatory footnotes should be utilized judiciously and must not be used to circumvent prescribed word limits."
    ]
  },
  {
    id: "co-authorship",
    title: "4. Co-Authorship & Eligibility",
    content: [
      "Co-authorship is permitted up to a maximum of two (2) authors. Co-authorship of three or more authors is permitted only in exceptional cases with prior editorial approval.",
      "Submissions are invited from legal academics, judges, regulatory practitioners, corporate legal counsels, doctoral candidates, and law students enrolled in recognized undergraduate or postgraduate programs."
    ]
  },
  {
    id: "anonymity-blind-review",
    title: "5. Anonymity & Double-Blind Peer Review",
    content: [
      "To ensure an impartial, double-blind peer review process, the main manuscript document must not contain any author-identifying details (including name, designation, institutional affiliation, acknowledgements, or metadata in file properties).",
      "A separate Title Page / Cover Letter containing full author details (name, affiliation, contact email, brief biographical note, and word count) must be provided upon submission."
    ],
    callout: {
      type: "tip",
      text: "Remember to remove personal information from Word file metadata under File > Info > Inspect Document."
    }
  },
  {
    id: "originality-plagiarism",
    title: "6. Originality & Plagiarism Policy",
    content: [
      "All submissions must represent original, unpublished scholarly work. Manuscripts currently under consideration by any other journal, book volume, or publication platform will be disqualified immediately.",
      "The Journal maintains a strict zero-tolerance policy towards plagiarism. All manuscripts undergo automated similarity screening prior to editorial review.",
      "Similarity index exceeding standard academic thresholds ([Threshold to be confirmed by Editorial Board, e.g. 10%]) will result in summary rejection."
    ]
  },
  {
    id: "artificial-intelligence-policy",
    title: "7. Generative Artificial Intelligence (AI) Policy",
    content: [
      "Generative AI tools (e.g., LLMs) cannot be credited as authors or co-authors on any manuscript.",
      "If generative AI tools were utilized in preliminary data processing or linguistic proofreading, authors must explicitly disclose the tool, model version, and scope of usage in their cover letter."
    ]
  },
  {
    id: "copyright-open-access",
    title: "8. Copyright & Open Access Framework",
    content: [
      "The Journal of Corporate and Financial Laws operates under an open-access model to ensure maximum global dissemination and scholarly impact.",
      "Authors retain moral rights in their work while granting the Journal an exclusive first-publication license, followed by non-exclusive rights for archiving and indexing across international legal databases."
    ]
  },
  {
    id: "submission-procedure",
    title: "9. Submission Procedure & Deadlines",
    content: [
      "Manuscripts for the Inaugural Edition / Call for Papers should be submitted through the official editorial submission portal or emailed to the editorial desk at [INSERT OFFICIAL SUBMISSION EMAIL, e.g. jcfl.submissions@institution.ac.in].",
      "Subject line for email submissions: 'Manuscript Submission - [Category] - [Title of Manuscript]'.",
      "Submission Deadline: [INSERT OFFICIAL SUBMISSION DEADLINE / Submissions Open for Volume 1, Issue 1]."
    ]
  }
];

export const checklistItems: ChecklistItem[] = [
  {
    id: "scope-match",
    title: "Manuscript aligns with Journal's thematic scope",
    description: "Topic falls within corporate law, financial regulation, capital markets, governance, or related commercial jurisprudence.",
    sectionId: "scope-submissions"
  },
  {
    id: "word-limit",
    title: "Word count complies with category limits",
    description: "Total word count (including all footnotes) conforms to the prescribed threshold for Articles, Essays, or Comments.",
    sectionId: "scope-submissions"
  },
  {
    id: "abstract-keywords",
    title: "Abstract and keywords included",
    description: "Includes an abstract (200–300 words) and 4–6 relevant academic keywords.",
    sectionId: "scope-submissions"
  },
  {
    id: "file-format",
    title: "Word (.docx) format and typography styling",
    description: "Submitted in .doc/.docx format with Times New Roman (12pt body / 10pt footnotes) and 1.5 line spacing.",
    sectionId: "formatting-requirements"
  },
  {
    id: "citations-bluebook",
    title: "Prescribed citation standard followed",
    description: "All sources cited as numbered footnotes conforming strictly to the Bluebook (21st Ed.) standard.",
    sectionId: "citation-style"
  },
  {
    id: "anonymized",
    title: "Manuscript completely anonymized for double-blind review",
    description: "All author names, institutional affiliations, and file metadata have been removed from the main manuscript file.",
    sectionId: "anonymity-blind-review"
  },
  {
    id: "co-authorship-verified",
    title: "Co-authorship limits respected (Max 2 authors)",
    description: "Manuscript has no more than two co-authors, with all contributors identified on the separate Title Page.",
    sectionId: "co-authorship"
  },
  {
    id: "originality-confirmed",
    title: "Originality and exclusive submission confirmation",
    description: "Work is entirely original, unplagiarized, and not under concurrent consideration by any other journal or publisher.",
    sectionId: "originality-plagiarism"
  }
];

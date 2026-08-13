import { Publication } from "./types";

export const publications: Publication[] = [
  {
    id: "pub-01",
    slug: "corporate-governance-ai-era-director-fiduciary-duties",
    title: "Algorithmic Boardrooms and the Business Judgment Rule: Reimagining Director Fiduciary Duties in the Era of Autonomous Corporate Systems",
    subtitle: "A Comparative Doctrinal Assessment of Board Oversight, Systemic Hallucinations, and Delegated Decision-Making",
    publicationType: "Article",
    authors: [
      {
        name: "Dr. Arundhati Sen",
        slug: "arundhati-sen",
        affiliation: "Centre for Corporate Law, Governance & Financial Laws",
        role: "Senior Research Fellow",
        bio: "Specializes in comparative corporate governance, computational corporate law, and algorithmic fiduciary liability.",
        email: "a.sen@institution.ac.in"
      },
      {
        name: "Vikramaditya Nair",
        slug: "vikramaditya-nair",
        affiliation: "National Law University & Commercial Bar",
        role: "Advocate & Commercial Law Scholar",
        bio: "Practices before the NCLAT and commercial courts, researching corporate restructuring and technology in capital markets."
      }
    ],
    abstract: "The integration of predictive and autonomous machine intelligence into corporate governance poses foundational challenges to traditional doctrines of director oversight and fiduciary accountability. This article examines whether the classical 'business judgment rule'—anchored historically in human deliberation and reasonable informational inquiry—can meaningfully insulate directors who rely upon black-box computational analytics for capital allocation, strategic M&A valuation, and risk surveillance. Drawing on comparative jurisprudence across common law jurisdictions, we propose an augmented standard of 'algorithmic procedural due diligence'. We argue that fiduciary duty in automated environments requires not merely blind deference to algorithmic outputs, but verified model provenance, continuous stress-testing of assumptions, and uncompromised human-in-the-loop intervention mechanisms.",
    keywords: ["Corporate Governance", "Director Fiduciary Duties", "Business Judgment Rule", "Artificial Intelligence", "Algorithmic Oversight", "Board Liability"],
    researchAreas: ["Corporate Governance", "Corporate Law", "Emerging Business Regulation"],
    volume: 1,
    issue: 1,
    year: 2026,
    publicationDate: "Inaugural Issue, 2026",
    startPage: 1,
    endPage: 38,
    doi: "10.1000/jcfl.2026.01.01",
    featured: true,
    readingTimeMinutes: 18,
    tableOfContents: [
      { id: "introduction", title: "I. Introduction: The Algorithmic Transformation of Corporate Governance" },
      { id: "business-judgment-anatomy", title: "II. The Classical Anatomy of the Business Judgment Rule" },
      { id: "black-box-dilemma", title: "III. The Epistemic Dilemma of Autonomous Decision Support" },
      { id: "comparative-approaches", title: "IV. Comparative Judicial Approaches to Technological Deference" },
      { id: "algorithmic-due-diligence", title: "V. The Standard of Algorithmic Procedural Due Diligence" },
      { id: "conclusion", title: "VI. Conclusion: Calibrating Responsibility in Modern Corporate Law" }
    ],
    footnotes: [
      { id: 1, text: "See In re Caremark Int'l Inc. Derivative Litig., 698 A.2d 959 (Del. Ch. 1996) (establishing the foundational duty of directors to maintain adequate information and reporting systems)." },
      { id: 2, text: "Companies Act, 2013, § 166(3) (mandating that a director of a company shall exercise their duties with due and reasonable care, skill and diligence)." },
      { id: 3, text: "See Marchand v. Barnhill, 212 A.3d 805 (Del. 2019) (reinvigorating oversight liability where boards fail to implement monitoring protocols over mission-critical compliance risks)." },
      { id: 4, text: "For discussion on algorithmic opacity in commercial management, see Frank Pasquale, The Black Box Society: The Secret Algorithms That Control Money and Information (Harvard University Press 2015)." },
      { id: 5, text: "Aronson v. Lewis, 473 A.2d 805, 812 (Del. 1984) (defining the business judgment rule as a presumption that directors made a business decision on an informed basis, in good faith, and in the honest belief that the action was in the company's best interests)." },
      { id: 6, text: "See UK Companies Act 2006, § 174 (duty to exercise reasonable care, skill and diligence evaluated against both general knowledge and specific professional competence)." }
    ],
    sections: [
      {
        id: "introduction",
        title: "I. Introduction: The Algorithmic Transformation of Corporate Governance",
        paragraphs: [
          "Modern boardrooms are increasingly augmented by algorithmic decision-support architectures. From predictive liquidity stress-testing and automated supply-chain routing to machine-learning valuations in hostile takeovers, computational models now generate real-time empirical substrates upon which directors must base high-stakes strategic choices.",
          "However, the migration of corporate deliberation from human intuition and accounting balance sheets to opaque algorithmic pipelines introduces a profound doctrinal paradox. Corporate law has long premised the standard of director care upon human cognition: an informed inquiry, deliberate interrogation of management, and the exercise of independent business judgment.",
          "When algorithmic systems recommend multi-billion dollar divestitures or predict regulatory enforcement risks based on latent high-dimensional correlations, can a director legitimately claim the protection of the Business Judgment Rule without comprehending the underlying neural model? This inquiry forms the epicenter of 21st-century corporate jurisprudence."
        ]
      },
      {
        id: "business-judgment-anatomy",
        title: "II. The Classical Anatomy of the Business Judgment Rule",
        paragraphs: [
          "The Business Judgment Rule operates as both a procedural presumption and a substantive shield. It rests on the foundational rationale that courts are ill-equipped to second-guess bona fide commercial risks taken by elected directors in an unpredictable marketplace.",
          "Under established common law principles codified in statutory frameworks such as Section 166 of the Indian Companies Act, 2013 and developed in Delaware Chancery jurisprudence, the rule immunizes directors from liability for erroneous decisions provided three preconditions are satisfied: (i) absence of personal conflict of interest, (ii) informed deliberation preceded by reasonable inquiry, and (iii) a rational belief that the decision advances the best interests of the corporate enterprise.",
          "Crucially, the 'informed' requirement has never demanded omniscience; it demands reasonable process. As Chancellor Allen famously noted in Caremark, liability attaches not to unfortunate commercial outcomes, but to sustained or systematic failures of supervisory oversight."
        ]
      },
      {
        id: "black-box-dilemma",
        title: "III. The Epistemic Dilemma of Autonomous Decision Support",
        paragraphs: [
          "When applied to artificial intelligence, the traditional safe harbor of 'reliance on expert advice' encounters severe structural fractures. Corporate statutes permit directors to rely in good faith on officers, legal counsel, and certified public accountants whom the director reasonably believes to be competent.",
          "Yet, deep learning models are fundamentally distinct from human domain experts. They cannot be cross-examined during board meetings; they are vulnerable to distribution shifts, adversarial data poisoning, and systemic algorithmic bias. An unquestioning board reliance on algorithmic dashboards risks converting the business judgment rule into an unaccountable algorithmic rubber stamp.",
          "Where directors blindly adopt algorithmic recommendations that subsequently precipitate insolvency or severe statutory breach, the shield of reasonable reliance evaporates, exposing the board to derivative action for abdication of supervisory duties."
        ]
      },
      {
        id: "comparative-approaches",
        title: "IV. Comparative Judicial Approaches to Technological Deference",
        paragraphs: [
          "A comparative survey of commercial jurisdictions reveals diverging judicial postures. In the United Kingdom, courts applying Section 174 of the Companies Act 2006 have emphasized a dual objective-subjective standard: directors possessing specialized technical expertise are held to an elevated standard of technological comprehension.",
          "In the United States, Delaware courts in Marchand v. Barnhill and McDonald's Corporation have reaffirmed that oversight duties regarding mission-critical risks cannot be delegated away. If automated tools monitor mission-critical systems, boards must establish board-level audit trails and verify continuous compliance.",
          "In India, the Supreme Court's jurisprudence on director accountability—reinforced by SEBI LODR Regulations—requires independent directors to maintain active surveillance over risk management systems, making passivity in the face of automated risk alarms actionable."
        ]
      },
      {
        id: "algorithmic-due-diligence",
        title: "V. The Standard of Algorithmic Procedural Due Diligence",
        paragraphs: [
          "To harmonize corporate innovation with fiduciary fidelity, we propose the doctrine of 'Algorithmic Procedural Due Diligence' (APDD). Under this standard, directors seeking the protection of the business judgment rule when utilizing algorithmic tools must demonstrate compliance with a four-pillar protocol:",
          "1. Model Provenance & Governance: Verification that the algorithmic system has been vetted for training data integrity, regulatory compliance, and absence of illicit optimization targets.",
          "2. Independent Model Auditing: Periodic third-party validation and adversarial testing of mission-critical decision systems by certified algorithmic audit practitioners.",
          "3. Explainability & Human Override: Institutional guarantees that human executives can inspect the primary causal drivers of any strategic model recommendation, maintaining an inviolable human-in-the-loop override mechanism.",
          "4. Continuous Failure Monitoring: Documented board-level review of model drift, false-positive frequencies, and operational deviations from projected scenarios."
        ]
      },
      {
        id: "conclusion",
        title: "VI. Conclusion: Calibrating Responsibility in Modern Corporate Law",
        paragraphs: [
          "The integration of machine intelligence into corporate governance should neither paralyze director discretion through excessive liability nor encourage recklessness through uncritical technological deference.",
          "By grounding board oversight in procedural rigor rather than algorithmic infallibility, corporate law can safeguard shareholder value and wider stakeholder interests while enabling enterprise to harness the transformative potential of computational capital allocation."
        ]
      }
    ]
  },
  {
    id: "pub-02",
    slug: "cross-border-insolvency-unicitral-model-law-indian-framework",
    title: "Harmonizing Cross-Border Insolvency: Institutional Readiness and Creditor Priority Under the Proposed UNCITRAL Adaptation",
    subtitle: "A Doctrinal Inquiry into Centre of Main Interests (COMI), Public Policy Exceptions, and Asset Realization",
    publicationType: "Article",
    authors: [
      {
        name: "Prof. Raghavendra Joshi",
        slug: "raghavendra-joshi",
        affiliation: "Centre for Corporate Law, Governance & Financial Laws",
        role: "Faculty Research Fellow",
        bio: "Expert in cross-border debt resolution, corporate reorganization, and international economic law."
      }
    ],
    abstract: "The rapid globalization of corporate capital structures has exposed critical fissures in territorial insolvency regimes. While India's Insolvency and Bankruptcy Code (IBC), 2016 transformed domestic debt resolution, its framework for multinational corporate debtors remains constrained by bilateral agreements under Sections 234 and 235. This paper critically assesses the draft legislative framework adopting the UNCITRAL Model Law on Cross-Border Insolvency. Through a detailed analysis of 'Centre of Main Interests' (COMI) jurisprudence in foreign proceedings, the scope of the 'public policy' carve-out, and the hierarchy of domestic operational versus foreign financial creditors, this article provides a structured roadmap for institutional judicial readiness before the National Company Law Tribunal (NCLT).",
    keywords: ["Cross-Border Insolvency", "IBC 2016", "UNCITRAL Model Law", "COMI", "NCLT", "Creditor Priority"],
    researchAreas: ["Insolvency & Restructuring", "Commercial Law", "Banking & Finance"],
    volume: 1,
    issue: 1,
    year: 2026,
    publicationDate: "Inaugural Issue, 2026",
    startPage: 39,
    endPage: 72,
    doi: "10.1000/jcfl.2026.01.02",
    featured: true,
    readingTimeMinutes: 16,
    tableOfContents: [
      { id: "intro-insolvency", title: "I. Introduction: The Multinational Enterprise in Distress" },
      { id: "territorialism-universalism", title: "II. Territorialism vs. Modified Universalism" },
      { id: "comi-jurisprudence", title: "III. The Doctrinal Mechanics of COMI Determination" },
      { id: "public-policy-exception", title: "IV. Restricting the Public Policy Exception" },
      { id: "conclusion-insolvency", title: "V. Conclusion and Legislative Blueprint" }
    ],
    footnotes: [
      { id: 1, text: "Insolvency and Bankruptcy Code, 2016 (No. 31 of 2016), §§ 234, 235." },
      { id: 2, text: "See UNCITRAL Model Law on Cross-Border Insolvency (1997) with Guide to Enactment and Interpretation (2014)." },
      { id: 3, text: "Jet Airways (India) Ltd. v. State Bank of India, Company Appeal (AT) (Insolvency) No. 707 of 2019 (NCLAT approving the cross-border insolvency protocol with the Dutch administrator)." },
      { id: 4, text: "In re Eurofood IFSC Ltd., Case C-341/04, [2006] ECR I-3813 (Court of Justice of the European Union defining COMI based on ascertainability by third parties)." }
    ],
    sections: [
      {
        id: "intro-insolvency",
        title: "I. Introduction: The Multinational Enterprise in Distress",
        paragraphs: [
          "When a modern conglomerate enters financial distress, its assets, debt obligations, subsidiaries, and intellectual property are rarely confined to a single sovereign jurisdiction. Fragmented territorial enforcement creates destructive races to the courthouse, asset fire-sales, and catastrophic value destruction.",
          "While India's enactment of the Insolvency and Bankruptcy Code (IBC) in 2016 modernized domestic creditor-debtor relations, Sections 234 and 235 rely on bilateral reciprocal treaties—a mechanism proven sluggish and commercially unviable in multi-jurisdictional insolvencies.",
          "The landmark ad-hoc cross-border protocol in the Jet Airways insolvency highlighted the urgent necessity of enacting a comprehensive statutory framework based on the UNCITRAL Model Law."
        ]
      },
      {
        id: "territorialism-universalism",
        title: "II. Territorialism vs. Modified Universalism",
        paragraphs: [
          "Cross-border insolvency theory has long swung between two poles: strict territorialism (the 'grab rule', where each nation seizes local assets for local creditors) and universalism (a single worldwide bankruptcy proceeding governed by the law of the debtor's home jurisdiction).",
          "The UNCITRAL Model Law operationalizes 'modified universalism'—a pragmatic middle ground that facilitates judicial cooperation, mutual recognition of foreign proceedings, and coordinated asset preservation while respecting core domestic public policies."
        ]
      },
      {
        id: "comi-jurisprudence",
        title: "III. The Doctrinal Mechanics of COMI Determination",
        paragraphs: [
          "The cornerstone of the Model Law is the concept of the Centre of Main Interests (COMI). If a foreign proceeding is located at the debtor's COMI, it is recognized as a 'foreign main proceeding', triggering an automatic stay on individual enforcement actions against the debtor's assets.",
          "While there is a statutory presumption that COMI is the location of the registered office, international jurisprudence (from Eurofood to Rubin v. Eurofinance) demonstrates that this presumption can be rebutted by showing that central administrative and financial control is exercised elsewhere in a manner readily ascertainable to third-party creditors."
        ]
      },
      {
        id: "public-policy-exception",
        title: "IV. Restricting the Public Policy Exception",
        paragraphs: [
          "Article 6 of the Model Law permits domestic courts to refuse recognition or relief if doing so would be 'manifestly contrary to public policy'. International best practice mandates that this exception be construed narrowly to prevent protectionist circumvention.",
          "In the Indian context, the public policy bar should be strictly limited to violations of fundamental constitutional rights and principles of natural justice, ensuring it does not become a conduit for shielding favored domestic entities."
        ]
      },
      {
        id: "conclusion-insolvency",
        title: "V. Conclusion and Legislative Blueprint",
        paragraphs: [
          "Incorporating the UNCITRAL Model Law into the IBC will decisively elevate India's standing in international capital markets, offering global investors predictability, asset protection, and coordinated restructuring avenues in times of cross-border financial distress."
        ]
      }
    ]
  },
  {
    id: "pub-03",
    slug: "fractional-investing-tokenized-securities-sebi-regulations",
    title: "Fractional Capital and Tokenized Securities: Regulatory Perimeter of SEBI and the Digital Asset Conundrum",
    subtitle: "Evaluating Investor Protection, Custody Mechanisms, and Secondary Market Liquidity in Digital Real Estate & Structured Notes",
    publicationType: "Essay",
    authors: [
      {
        name: "Ananya Deshmukh",
        slug: "ananya-deshmukh",
        affiliation: "Centre for Corporate Law, Governance & Financial Laws",
        role: "Research Scholar in Financial Regulation",
        bio: "Researches capital market regulation, securities tokenization, and digital custody frameworks."
      }
    ],
    abstract: "The proliferation of digital platforms facilitating fractional ownership in commercial real estate, art, and debt instruments has tested the boundaries of securities regulation. By disaggregating high-ticket financial assets into micro-shares through special purpose vehicles (SPVs) and distributed ledgers, platforms democratize retail capital access while sidestepping conventional public offer prospectus thresholds. This essay interrogates the applicability of SEBI's Collective Investment Scheme (CIS) regulations, the Small and Medium REIT (SM-REIT) amendments, and custody mandates to fractional tokenization models. We argue for an activity-based regulatory framework that protects unsophisticated retail investors without stifling technological innovation in capital formation.",
    keywords: ["Fractional Ownership", "Tokenized Securities", "SEBI Regulations", "SM REITs", "CIS", "FinTech"],
    researchAreas: ["Securities Regulation", "FinTech & Digital Finance", "Financial Regulation"],
    volume: 1,
    issue: 1,
    year: 2026,
    publicationDate: "Inaugural Issue, 2026",
    startPage: 73,
    endPage: 98,
    doi: "10.1000/jcfl.2026.01.03",
    featured: true,
    readingTimeMinutes: 14,
    tableOfContents: [
      { id: "fractional-intro", title: "I. The Rise of Micro-Capital and Fractional Assets" },
      { id: "securities-perimeter", title: "II. Testing the Statutory Definition of 'Securities'" },
      { id: "sm-reit-framework", title: "III. The Regulatory Evolution: From Unregulated SPVs to SM REITs" },
      { id: "custody-secondary-markets", title: "IV. Custody, Smart Contracts, and Secondary Market Risks" },
      { id: "conclusion-fintech", title: "V. Policy Recommendations for Sustainable Tokenization" }
    ],
    footnotes: [
      { id: 1, text: "Securities Contracts (Regulation) Act, 1956, § 2(h) (defining securities)." },
      { id: 2, text: "SEBI (Real Estate Investment Trusts) (Amendment) Regulations, 2024 (notifying the framework for Small and Medium REITs)." },
      { id: 3, text: "Securities and Exchange Board of India v. Gaurav Varshney, (2016) 14 SCC 430 (interpreting Collective Investment Schemes under Section 11AA of the SEBI Act)." }
    ],
    sections: [
      {
        id: "fractional-intro",
        title: "I. The Rise of Micro-Capital and Fractional Assets",
        paragraphs: [
          "Technological advancements in financial infrastructure have transformed how retail investors interact with illiquid, high-value asset classes. Historically reserved for institutional balance sheets and ultra-high-net-worth individuals, prime commercial real estate, pre-IPO equity, and specialized receivables can now be subdivided into fractional micro-units.",
          "While proponents champion this democratization as an engine for retail wealth creation, it creates acute regulatory vulnerabilities regarding disclosure quality, illiquidity, platform counterparty risk, and exit mechanisms."
        ]
      },
      {
        id: "securities-perimeter",
        title: "II. Testing the Statutory Definition of 'Securities'",
        paragraphs: [
          "Under Section 2(h) of the Securities Contracts (Regulation) Act, 1956 (SCRA), the statutory definition of 'securities' is expansive but not limitless. Early fractional platforms sought to structure asset purchases via private limited company shares or Limited Liability Partnerships (LLPs) to evade prospectus disclosure requirements under the Companies Act, 2013.",
          "However, where pooled investor capital is managed by a centralized platform without investor day-to-day managerial control, such structures squarely attract the Collective Investment Scheme (CIS) provisions under Section 11AA of the SEBI Act, 1992."
        ]
      },
      {
        id: "sm-reit-framework",
        title: "III. The Regulatory Evolution: From Unregulated SPVs to SM REITs",
        paragraphs: [
          "SEBI's landmark 2024 amendment establishing the Small and Medium REIT (SM-REIT) framework represents a proactive regulatory response. By establishing minimum asset sizes (₹50 Crore to ₹500 Crore), mandatory listing on stock exchanges, and minimum sponsor unitholding, the regulator migrated informal fractional ownership into formal capital market oversight."
        ]
      },
      {
        id: "custody-secondary-markets",
        title: "IV. Custody, Smart Contracts, and Secondary Market Risks",
        paragraphs: [
          "The frontier of fractionalization lies in distributed ledger tokenization. Where tokens represent underlying property rights, legal certainty requires immutable synchronization between on-chain token registries and state land revenue records.",
          "Without regulated custodians and authorized depository participants, retail token holders remain critically exposed to smart contract bugs and unverified title defects."
        ]
      },
      {
        id: "conclusion-fintech",
        title: "V. Policy Recommendations for Sustainable Tokenization",
        paragraphs: [
          "An optimal regulatory perimeter must calibrate disclosure requirements to issuance size, mandate independent asset trusteeship, and foster transparent secondary trading mechanisms within regulated sandbox environments."
        ]
      }
    ]
  },
  {
    id: "pub-04",
    slug: "antitrust-big-tech-digital-competition-bill-ex-ante-regulation",
    title: "From Ex-Post Penalties to Ex-Ante Prescriptions: Evaluating the Draft Digital Competition Bill and Systemically Significant Digital Enterprises (SSDEs)",
    subtitle: "A Doctrinal and Economic Analysis of Gatekeeper Obligations, Anti-Steering Provisions, and Bundling Restrictions in Indian Digital Markets",
    publicationType: "Article",
    authors: [
      {
        name: "Siddharth Chawla",
        slug: "siddharth-chawla",
        affiliation: "Centre for Corporate Law, Governance & Financial Laws",
        role: "Fellow in Antitrust & Commercial Jurisprudence",
        bio: "Specializes in digital platform antitrust, merger enforcement, and market contestability."
      }
    ],
    abstract: "Traditional competition law, anchored in ex-post antitrust enforcement under the Competition Act, 2002, has proven structurally inadequate in addressing the rapid, tipping-market dynamics of digital multi-sided platforms. Prolonged investigative timelines frequently result in remedy irrelevance after nascent competitors have been driven to market exit. This article provides a comprehensive critique of the Draft Digital Competition Bill and its introduction of ex-ante behavioral obligations for 'Systemically Significant Digital Enterprises' (SSDEs). We evaluate the proposed criteria for SSDE designation (combining financial thresholds and end-user base metrics), the absolute prohibition on self-preferencing and anti-steering, and the delicate balance between promoting market contestability and preserving consumer-facing ecosystem efficiencies.",
    keywords: ["Antitrust", "Digital Competition Bill", "SSDE", "Gatekeepers", "CCI", "Competition Law"],
    researchAreas: ["Competition & Markets", "Emerging Business Regulation", "Commercial Law"],
    volume: 1,
    issue: 1,
    year: 2026,
    publicationDate: "Inaugural Issue, 2026",
    startPage: 99,
    endPage: 134,
    doi: "10.1000/jcfl.2026.01.04",
    featured: false,
    readingTimeMinutes: 17,
    tableOfContents: [
      { id: "antitrust-intro", title: "I. The Failure of Ex-Post Antitrust in Zero-Price Digital Markets" },
      { id: "ssde-architecture", title: "II. The Anatomy of Systemically Significant Digital Enterprises (SSDEs)" },
      { id: "core-obligations", title: "III. Deconstructing Core Ex-Ante Obligations: Self-Preferencing and Bundling" },
      { id: "comparative-dma", title: "IV. Comparative Insights: The EU Digital Markets Act (DMA) Experience" },
      { id: "conclusion-competition", title: "V. Institutional Preparedness of the Competition Commission of India (CCI)" }
    ],
    footnotes: [
      { id: 1, text: "See Report of the Committee on Digital Competition Law (Ministry of Corporate Affairs, Government of India, February 2024)." },
      { id: 2, text: "Competition Act, 2002 (No. 12 of 2003), §§ 3, 4." },
      { id: 3, text: "Regulation (EU) 2022/1925 of the European Parliament and of the Council on contestable and fair markets in the digital sector (Digital Markets Act)." }
    ],
    sections: [
      {
        id: "antitrust-intro",
        title: "I. The Failure of Ex-Post Antitrust in Zero-Price Digital Markets",
        paragraphs: [
          "For over two decades, the Competition Act, 2002 relied upon ex-post investigations initiated under Sections 3 (anti-competitive agreements) and 4 (abuse of dominant position). In physical brick-and-mortar markets, lengthy investigations culminating in cease-and-desist orders and monetary penalties provided effective deterrents.",
          "In digital platform markets characterized by network effects, extreme economies of scale, and zero monetary pricing, markets 'tip' to winner-take-all dynamics within months. By the time the Competition Commission of India (CCI) concludes an investigation, innovative challenger firms have already suffered irreparable foreclosure."
        ]
      },
      {
        id: "ssde-architecture",
        title: "II. The Anatomy of Systemically Significant Digital Enterprises (SSDEs)",
        paragraphs: [
          "The Draft Digital Competition Bill introduces an ex-ante framework that classifies qualifying platforms as Systemically Significant Digital Enterprises (SSDEs) based on quantitative revenue and user thresholds in Core Digital Services.",
          "Once designated, SSDEs are subject to affirmative obligations that apply automatically, obviating the need for the CCI to prove market dominance and anti-competitive effect in every individual dispute."
        ]
      },
      {
        id: "core-obligations",
        title: "III. Deconstructing Core Ex-Ante Obligations: Self-Preferencing and Bundling",
        paragraphs: [
          "The core obligations prohibit gatekeeper platforms from favoring their own private-label products in search rankings, restricting third-party app stores, or imposing anti-steering clauses that prevent business users from offering cheaper prices on independent websites."
        ]
      },
      {
        id: "comparative-dma",
        title: "IV. Comparative Insights: The EU Digital Markets Act (DMA) Experience",
        paragraphs: [
          "Drawing on the enforcement experience of the European Union's Digital Markets Act (DMA), India must navigate the fine line between preventing predatory platform gatekeeping and preserving user experience, platform cybersecurity, and ecosystem interoperability."
        ]
      },
      {
        id: "conclusion-competition",
        title: "V. Institutional Preparedness of the Competition Commission of India (CCI)",
        paragraphs: [
          "For the ex-ante regime to succeed without triggering compliance paralysis, the CCI must significantly expand its specialized digital markets unit, building computational capabilities to audit algorithmic ranking models and programmatic ad-tech flows."
        ]
      }
    ]
  },
  {
    id: "pub-05",
    slug: "esg-disclosure-greenwashing-brsr-core-fiduciary-liability",
    title: "Greenwashing in the Capital Markets: BRSR Core Verification, ESG Rating Provider Accountability, and the Limits of Voluntary Corporate Disclosures",
    subtitle: "A Critical Assessment of Regulatory Oversight and Legal Remedies Under SEBI's Sustainable Finance Architecture",
    publicationType: "Note",
    authors: [
      {
        name: "Meera Krishnan",
        slug: "meera-krishnan",
        affiliation: "Centre for Corporate Law, Governance & Financial Laws",
        role: "Corporate Law Researcher",
        bio: "Specializes in corporate sustainability governance, ESG reporting standards, and green capital market instruments."
      }
    ],
    abstract: "As global and domestic capital flows increasingly align with Environmental, Social, and Governance (ESG) criteria, the integrity of sustainability disclosures has become critical to capital allocation efficiency. This legislative note analyzes SEBI's introduction of the 'BRSR Core' framework, mandatory reasonable assurance requirements for value chains, and the statutory registration regime for ESG Rating Providers (ERPs). We dissect the evidentiary hurdles in prosecuting greenwashing under securities fraud provisions, the expanding scope of board-level sustainability oversight, and the necessity of civil liability mechanisms for inaccurate climate and transition disclosures.",
    keywords: ["ESG", "Greenwashing", "BRSR Core", "Sustainable Finance", "SEBI", "Corporate Governance"],
    researchAreas: ["ESG & Corporate Responsibility", "Securities Regulation", "Corporate Governance"],
    volume: 1,
    issue: 1,
    year: 2026,
    publicationDate: "Inaugural Issue, 2026",
    startPage: 135,
    endPage: 158,
    doi: "10.1000/jcfl.2026.01.05",
    featured: false,
    readingTimeMinutes: 12,
    tableOfContents: [
      { id: "esg-intro", title: "I. The Rise of Sustainable Capital and the Greenwashing Threat" },
      { id: "brsr-core-mechanics", title: "II. The BRSR Core: From Narrative Claims to Auditable Metrics" },
      { id: "rating-providers-liability", title: "III. Regulating the Gatekeepers: ESG Rating Providers (ERPs)" },
      { id: "legal-remedies", title: "IV. Securities Fraud and Fiduciary Remedies Against Greenwashing" },
      { id: "conclusion-esg", title: "V. Concluding Observations" }
    ],
    footnotes: [
      { id: 1, text: "SEBI Master Circular for Issue and Listing of Non-convertible Securities, Securitised Debt Instruments, Security Receipts, Municipal Debt Securities and Commercial Paper (updated 2023)." },
      { id: 2, text: "Business Responsibility and Sustainability Reporting (BRSR) Core Framework, SEBI Circular No. SEBI/HO/CFD/CFD-SEC-2/P/CIR/2023/122 (July 12, 2023)." }
    ],
    sections: [
      {
        id: "esg-intro",
        title: "I. The Rise of Sustainable Capital and the Greenwashing Threat",
        paragraphs: [
          "Sustainable investing has transitioned from a niche ethical movement to an institutional determinant of enterprise valuation. However, the commercial incentive to attract low-cost green capital has spawned pervasive 'greenwashing'—the practice of conveying misleading or unsubstantiated claims regarding an enterprise's environmental sustainability."
        ]
      },
      {
        id: "brsr-core-mechanics",
        title: "II. The BRSR Core: From Narrative Claims to Auditable Metrics",
        paragraphs: [
          "SEBI's mandate of the 'BRSR Core' for top listed entities replaces boilerplate marketing narratives with measurable, quantitative KPIs subject to mandatory reasonable assurance by qualified independent auditors."
        ]
      },
      {
        id: "rating-providers-liability",
        title: "III. Regulating the Gatekeepers: ESG Rating Providers (ERPs)",
        paragraphs: [
          "The regulation of ERPs under SEBI's CRA amendments establishes transparency over rating methodologies, conflict-of-interest firewalls, and separate 'Core ESG Ratings' based strictly on verified third-party assurance."
        ]
      },
      {
        id: "legal-remedies",
        title: "IV. Securities Fraud and Fiduciary Remedies Against Greenwashing",
        paragraphs: [
          "Misleading sustainability claims are actionable under Section 12A of the SEBI Act and the PFUTP (Prohibition of Fraudulent and Unfair Trade Practices) Regulations, establishing that climate disclosures carry the same legal weight as financial statements."
        ]
      },
      {
        id: "conclusion-esg",
        title: "V. Concluding Observations",
        paragraphs: [
          "By instituting verifiable supply-chain assurance and rigorous ERP oversight, the regulatory framework ensures that green finance genuinely funds structural ecological transition rather than public relations campaigns."
        ]
      }
    ]
  },
  {
    id: "pub-06",
    slug: "hostile-takeovers-creeping-acquisitions-sebi-takeover-code",
    title: "Creeping Control, Interlocking Shareholdings, and the Fiduciary Duties of Target Boards Under the SEBI Takeover Code",
    subtitle: "A Re-examination of Mandatory Open Offer Triggers, Poison Pills, and Shareholder Supremacy in Indian M&A",
    publicationType: "Case Comment",
    authors: [
      {
        name: "Devendra Singhania",
        slug: "devendra-singhania",
        affiliation: "Centre for Corporate Law, Governance & Financial Laws",
        role: "Visiting Fellow in Commercial Transactions",
        bio: "Specializes in M&A structuring, control transactions, and commercial dispute resolution."
      }
    ],
    abstract: "The Indian market for corporate control operates within a distinctive legal paradigm dominated by promoter-controlled corporate structures and strict statutory takeover regulations. This case comment examines recent contested control battles before the SAT and the Supreme Court, analyzing the legal boundaries of 'creeping acquisitions', the validity of defensive mechanisms adopted by target boards, and the strict neutrality rule under Regulation 26 of the SEBI (Substantial Acquisition of Shares and Takeovers) Regulations, 2011. We critique whether target directors are unduly constrained in shielding company stakeholders from opportunistic hostile bids compared to their common-law peers under Delaware's Unocal doctrine.",
    keywords: ["M&A", "Hostile Takeovers", "SEBI Takeover Code", "Target Board Duties", "Open Offer", "Corporate Control"],
    researchAreas: ["Mergers & Acquisitions", "Corporate Law", "Securities Regulation"],
    volume: 1,
    issue: 1,
    year: 2026,
    publicationDate: "Inaugural Issue, 2026",
    startPage: 159,
    endPage: 182,
    doi: "10.1000/jcfl.2026.01.06",
    featured: false,
    readingTimeMinutes: 13,
    tableOfContents: [
      { id: "takeover-intro", title: "I. Introduction: Contested Control in Promoter-Dominated Markets" },
      { id: "open-offer-triggers", title: "II. Mandatory Open Offer Triggers and De Facto Control" },
      { id: "defensive-mechanisms", title: "III. The Ban on Defensive Tactics: Target Board Neutrality" },
      { id: "delaware-comparison", title: "IV. Unocal vs. SEBI: Comparing Board Prerogatives" },
      { id: "conclusion-mna", title: "V. Conclusion" }
    ],
    footnotes: [
      { id: 1, text: "SEBI (Substantial Acquisition of Shares and Takeovers) Regulations, 2011, Reg. 3, 4, 26." },
      { id: 2, text: "See Unocal Corp. v. Mesa Petroleum Co., 493 A.2d 946 (Del. 1985) (articulating the two-prong enhanced scrutiny test for defensive board tactics)." }
    ],
    sections: [
      {
        id: "takeover-intro",
        title: "I. Introduction: Contested Control in Promoter-Dominated Markets",
        paragraphs: [
          "Hostile takeovers have historically been rare in India due to dominant promoter shareholding blocks and institutional lender alliances. However, with increasing institutional investor fragmentation, PE buyouts, and promoter share pledges, contested control transactions have resurfaced at the center of commercial litigation."
        ]
      },
      {
        id: "open-offer-triggers",
        title: "II. Mandatory Open Offer Triggers and De Facto Control",
        paragraphs: [
          "Under Regulation 3 and 4 of the 2011 Takeover Code, acquiring 25% of voting rights or obtaining de facto 'control' triggers a mandatory open offer for at least 26% of the target's total voting capital, safeguarding public retail shareholders against control shifts executed at private premiums."
        ]
      },
      {
        id: "defensive-mechanisms",
        title: "III. The Ban on Defensive Tactics: Target Board Neutrality",
        paragraphs: [
          "Unlike Delaware jurisprudence which grants target directors substantial latitude to deploy 'poison pills' and staggered boards to resist unwanted takeovers, Regulation 26 of the SEBI Takeover Code enforces a strict 'Board Neutrality Rule', prohibiting material asset sales or share issuances without prior shareholder approval by special resolution."
        ]
      },
      {
        id: "delaware-comparison",
        title: "IV. Unocal vs. SEBI: Comparing Board Prerogatives",
        paragraphs: [
          "This fundamental philosophical divergence reflects the principle of shareholder primacy in corporate control, ensuring that the ultimate decision to accept or reject an acquisition rests directly with the owners of capital rather than self-interested incumbent management."
        ]
      },
      {
        id: "conclusion-mna",
        title: "V. Conclusion",
        paragraphs: [
          "The Indian Takeover Code's structural balance between facilitating transparent market contestability and protecting minority shareholders stands as an exemplar of investor protection in emerging market economies."
        ]
      }
    ]
  }
];

export const featuredPublications = publications.filter(p => p.featured);

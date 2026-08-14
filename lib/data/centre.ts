export interface CentreData {
  name: string;
  shortName: string;
  institution: string;
  tagline: string;
  vision: string;
  mission: string;
  overview: string;
  pillars: { title: string; description: string; icon: string }[];
  researchClusters: { name: string; focus: string }[];
  initiatives: { title: string; description: string; type: string }[];
  contact: {
    email: string;
    office: string;
    address: string;
    workingHours: string;
  };
}

export const centreData: CentreData = {
  name: "Centre for Corporate Law, Governance & Financial Laws",
  shortName: "CCLGFL",
  institution: "National Law University Delhi (NLU Delhi)",
  tagline: "Research. Dialogue. Institutional Impact.",
  overview: "The Centre for Corporate Law, Governance & Financial Laws at National Law University Delhi (NLU Delhi) serves as a specialized institutional hub dedicated to rigorous empirical and doctrinal legal research, policy analysis, and scholarly dialogue at the confluence of corporate governance, capital markets, insolvency regimes, and financial regulation.",
  vision: "To cultivate a premier national and international institutional platform for legal scholarship that informs corporate jurisprudence, guides financial regulatory reform, and deepens understanding of market governance in emerging and developed economies.",
  mission: "To foster cutting-edge legal research, facilitate constructive discourse between academia, regulatory authorities, and industry practitioners, and mentor the next generation of corporate and financial law scholars at National Law University Delhi.",
  pillars: [
    {
      title: "Scholarly Research",
      description: "Producing peer-reviewed academic papers, working monographs, and specialized treatises on contemporary corporate and financial legal challenges.",
      icon: "BookOpen"
    },
    {
      title: "Policy & Regulatory Engagement",
      description: "Contributing rigorous, evidence-based research memos, consultation responses, and advisory inputs to national and international regulatory bodies.",
      icon: "Scale"
    },
    {
      title: "Academic Conferences & Colloquia",
      description: "Convening national and international symposia bringing together jurists, regulators, corporate general counsels, and leading academic researchers.",
      icon: "Users"
    },
    {
      title: "Student Research Fellowships",
      description: "Mentoring student scholars in advanced statutory analysis, economic analysis of law, and empirical financial law research methodologies.",
      icon: "GraduationCap"
    }
  ],
  researchClusters: [
    {
      name: "Corporate Governance & Board Accountability",
      focus: "Stewardship codes, independent director liability, related-party transaction scrutiny, and stakeholder governance frameworks."
    },
    {
      name: "Capital Markets & Securities Jurisprudence",
      focus: "Primary market disclosures, insider trading enforcement, algorithmic trading regulation, and market manipulation surveillance."
    },
    {
      name: "Banking Law & Financial Restructuring",
      focus: "Prudential capital adequacy, resolution mechanisms for distressed financial institutions, and corporate insolvency jurisprudence."
    },
    {
      name: "Digital Finance & FinTech Governance",
      focus: "Regulatory sandboxes, tokenized assets, decentralized autonomous organizations, and AI governance in credit allocation."
    }
  ],
  initiatives: [
    {
      title: "Journal of Corporate and Financial Laws",
      description: "Flagship institutional academic journal publishing peer-reviewed research across corporate and commercial jurisprudence.",
      type: "Flagship Publication"
    },
    {
      title: "Annual Corporate Law Symposium",
      description: "Annual gathering of legal academics, corporate partners, and regulatory policymakers at NLU Delhi.",
      type: "Annual Conference"
    },
    {
      title: "Corporate Law Working Paper Series",
      description: "Pre-publication working research papers disseminating early-stage scholarly findings for academic feedback.",
      type: "Research Series"
    }
  ],
  contact: {
    email: "submissions.jcfl@institution.ac.in",
    office: "Centre for Corporate Law, Governance & Financial Laws",
    address: "National Law University Delhi, Sector 14, Dwarka, New Delhi – 110078, India",
    workingHours: "Monday – Friday: 09:00 AM – 05:00 PM IST"
  }
};

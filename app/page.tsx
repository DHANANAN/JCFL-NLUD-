import { Hero } from "@/components/home/Hero";
import { InauguralIssueSection } from "@/components/home/InauguralIssueSection";
import { FeaturedScholarship } from "@/components/home/FeaturedScholarship";
import { JournalMandate } from "@/components/home/JournalMandate";
import { ResearchAreaGrid } from "@/components/home/ResearchAreaGrid";
import { AboutCentreSection } from "@/components/home/AboutCentreSection";
import { LatestPublicationsTable } from "@/components/home/LatestPublicationsTable";
import { EditorialDeskNote } from "@/components/home/EditorialDeskNote";
import { SubmissionCallout } from "@/components/home/SubmissionCallout";
import { JournalMetadataStrip } from "@/components/home/JournalMetadataStrip";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 01. Hero & Governance Network */}
      <Hero />

      {/* 02. Inaugural Edition Presentation */}
      <InauguralIssueSection />

      {/* 03. Featured Scholarship */}
      <FeaturedScholarship />

      {/* 04. Journal Mandate (9 Key Disciplines) */}
      <JournalMandate />

      {/* 05. Research Taxonomy Grid */}
      <ResearchAreaGrid />

      {/* 06. About the Centre (CCLGFL Spotlight) */}
      <AboutCentreSection />

      {/* 07. Latest Publications Table */}
      <LatestPublicationsTable />

      {/* 08. From the Editorial Desk */}
      <EditorialDeskNote />

      {/* 09. Submission Callout */}
      <SubmissionCallout />

      {/* 10. Journal Metadata Strip */}
      <JournalMetadataStrip />
    </div>
  );
}

import { Hero } from "@/components/home/Hero";
import { GrandCarousel } from "@/components/home/GrandCarousel";
import { InauguralIssueSection } from "@/components/home/InauguralIssueSection";
import { FeaturedScholarship } from "@/components/home/FeaturedScholarship";
import { CentreMissionInfographic } from "@/components/home/CentreMissionInfographic";
import { JournalMandate } from "@/components/home/JournalMandate";
import { ResearchAreaGrid } from "@/components/home/ResearchAreaGrid";
import { JurisprudenceTimeline } from "@/components/home/JurisprudenceTimeline";
import { AboutCentreSection } from "@/components/home/AboutCentreSection";
import { LatestPublicationsTable } from "@/components/home/LatestPublicationsTable";
import { ExpandableEditorialDesk } from "@/components/home/ExpandableEditorialDesk";
import { SubmissionCallout } from "@/components/home/SubmissionCallout";
import { JournalMetadataStrip } from "@/components/home/JournalMetadataStrip";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Monumental Hero Section */}
      <Hero />

      {/* 2. Swipeable Interactive Grand Carousel */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 w-full">
        <GrandCarousel />
      </div>

      {/* 3. Collectible Inaugural Issue 3D Section */}
      <InauguralIssueSection />

      {/* 4. Curated Featured Scholarship */}
      <FeaturedScholarship />

      {/* 5. Interactive 4-Pillar Mission Infographics */}
      <CentreMissionInfographic />

      {/* 6. Aims, Scope & Academic Mandate */}
      <JournalMandate />

      {/* 7. Thematic Taxonomy Research Grid */}
      <ResearchAreaGrid />

      {/* 8. Parallax Jurisprudence Evolution Timeline */}
      <JurisprudenceTimeline />

      {/* 9. Inaugural Issue Comprehensive Table */}
      <LatestPublicationsTable />

      {/* 10. Expandable Editorial Address */}
      <ExpandableEditorialDesk />

      {/* 11. Institutional Profile of CCLGFL at NLU Delhi */}
      <AboutCentreSection />

      {/* 12. Call for Papers & Submissions */}
      <SubmissionCallout />

      {/* 13. Metadata Strip */}
      <JournalMetadataStrip />
    </div>
  );
}

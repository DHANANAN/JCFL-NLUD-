import { Hero } from "@/components/home/Hero";
import { GrandCarousel } from "@/components/home/GrandCarousel";
import { InauguralIssueSection } from "@/components/home/InauguralIssueSection";
import { FeaturedScholarship } from "@/components/home/FeaturedScholarship";
import { CentreMissionInfographic } from "@/components/home/CentreMissionInfographic";
import { ResearchAreaGrid } from "@/components/home/ResearchAreaGrid";
import { JurisprudenceTimeline } from "@/components/home/JurisprudenceTimeline";
import { AboutCentreSection } from "@/components/home/AboutCentreSection";
import { ExpandableEditorialDesk } from "@/components/home/ExpandableEditorialDesk";
import { SubmissionCallout } from "@/components/home/SubmissionCallout";
import { JournalMetadataStrip } from "@/components/home/JournalMetadataStrip";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* 1. Hero with organic blobs & canvas */}
      <Hero />

      {/* 2. Swipeable Grand Carousel */}
      <div className="bg-[#FAF9F4] py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GrandCarousel />
        </div>
      </div>

      {/* 3. Featured Scholarship — warm background with wave dividers */}
      <FeaturedScholarship />

      {/* 4. Inaugural Issue 3D collectible */}
      <InauguralIssueSection />

      {/* 5. CCLGFL Four Pillars Infographic */}
      <CentreMissionInfographic />

      {/* 6. Research Disciplines with SVG pictographs */}
      <ResearchAreaGrid />

      {/* 7. Jurisprudence Timeline */}
      <JurisprudenceTimeline />

      {/* 8. About the Centre at NLU Delhi */}
      <AboutCentreSection />

      {/* 9. Expandable Editorial Address */}
      <ExpandableEditorialDesk />

      {/* 10. Submission CTA — dark navy with illustration */}
      <SubmissionCallout />

      {/* 11. Metadata Strip */}
      <JournalMetadataStrip />
    </div>
  );
}

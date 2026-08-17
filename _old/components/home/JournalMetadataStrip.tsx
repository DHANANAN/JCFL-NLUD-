"use client";

export function JournalMetadataStrip() {
  const metadataItems = [
    { label: "PUBLICATION VOLUME", value: "Volume 1 (2026)" },
    { label: "CURRENT ISSUE", value: "Issue 1 (Inaugural)" },
    { label: "ISSN NUMBER", value: "[To be confirmed]" },
    { label: "PUBLICATION MODEL", value: "Open Access (No APCs)" },
    { label: "FREQUENCY", value: "Bi-annual [To be confirmed]" },
    { label: "CITATION STANDARD", value: "Bluebook (21st Ed.)" },
  ];

  return (
    <section className="py-8 bg-[#F8F7F2] border-b border-[#16324F]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          {metadataItems.map((item) => (
            <div key={item.label} className="space-y-1">
              <div className="text-[10px] font-mono-meta text-[#697480] uppercase tracking-wider">
                {item.label}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#16324F] font-serif-display">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

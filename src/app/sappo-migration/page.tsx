import type { Metadata } from "next";
import { ContactSection } from "@/components/contact-section";

export const metadata: Metadata = {
  title: "SAP PO Migration to SAP Integration Suite (CPI)",
  description:
    "Migrate from SAP PO to SAP Integration Suite (CPI) before end of support. Free migration cost and effort assessment workshop from EADX.",
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const timelineEntries = [
  {
    year: "2002",
    side: "left" as const,
    dot: "sap-xi" as const,
    version: "v1.0",
    name: "SAP XI 1.0",
    badges: [{ label: "Dual Stack", color: "dual" as const }],
    subtitle: "Initial Release",
    tags: ["Dual Stack", "ABAP + Java"],
    description: "First SAP integration platform.\nPart of NetWeaver suite.",
  },
  {
    year: "2005",
    side: "right" as const,
    dot: "sap-pi" as const,
    version: "v7.0",
    name: "SAP PI 7.0",
    badges: [{ label: "Dual Stack", color: "dual" as const }],
    subtitle: "Initial Release",
    tags: ["Dual Stack", "NetWeaver 7.0"],
    description: "Renamed from SAP XI.\nVersion aligned to NetWeaver.",
  },
  {
    year: "2011",
    side: "left" as const,
    dot: "sap-po" as const,
    version: "v7.31",
    name: "SAP PO 7.31",
    badges: [{ label: "Single Stack", color: "single" as const }],
    subtitle: "Initial Release",
    tags: ["Single Stack", "BPM + BRM"],
    description:
      "PI + BPM + BRM combined.\nJava-only; no ABAP required.",
  },
  {
    year: "2020",
    side: "right" as const,
    dot: "sap-pi" as const,
    version: "v7.4",
    name: "SAP PI 7.4",
    badges: [{ label: "Dual Stack", color: "dual" as const }],
    label: "EOL 2020",
    labelColor: "bg-[#DC2626] text-white",
    accent: "#DC2626",
    subtitle: "End of Life — Dec 31, 2020",
    tags: ["Last Dual Stack", "EOL Dec 2020"],
    description:
      "Last ever dual-stack release.\nMigrate to SAP PO required.",
  },
  {
    year: "2025",
    side: "left" as const,
    dot: "sap-po" as const,
    version: "v7.5 SP28",
    name: "SAP PO 7.5",
    badges: [{ label: "Single Stack", color: "single" as const }],
    label: "CURRENT",
    labelColor: "bg-[#059669] text-white",
    accent: "#059669",
    subtitle: "Current Release — 2025",
    tags: ["Current", "Supported until 2030"],
    description:
      "Final version of SAP PO.\nSupport ends Dec 2030.\nSuccessor: SAP Integration Suite.",
  },
  {
    year: "2027",
    side: "right" as const,
    dot: "sap-po" as const,
    version: "v7.5",
    name: "SAP PO 7.5",
    badges: [{ label: "Single Stack", color: "single" as const }],
    label: "MAINSTREAM EOL",
    labelColor: "bg-[#EA580C] text-white",
    accent: "#EA580C",
    subtitle: "Mainstream Ends — Dec 31, 2027",
    tags: ["Mainstream EOL"],
    description:
      "No more patches or security\nupdates after this date.\nExtended support available.",
  },
  {
    year: "2030",
    side: "left" as const,
    dot: "sap-po" as const,
    version: "v7.5",
    name: "SAP PO 7.5",
    badges: [{ label: "Single Stack", color: "single" as const }],
    label: "FINAL EOL",
    labelColor: "bg-[#DC2626] text-white",
    accent: "#DC2626",
    subtitle: "All Support Ends — Dec 31, 2030",
    tags: ["Final EOL", "Migration Required"],
    description:
      "All SAP PO support ends.\nMigration to SAP Integration\nSuite is mandatory.",
  },
];

const legendItems = [
  { color: "bg-[#4338CA]", label: "SAP XI" },
  { color: "bg-[#0369A1]", label: "SAP PI" },
  { color: "bg-[#B45309]", label: "SAP PO" },
  { color: "bg-[#D97706]", label: "Dual Stack" },
  { color: "bg-[#059669]", label: "Single Stack" },
  { color: "bg-[#059669]", label: "Current" },
  { color: "bg-[#EA580C]", label: "Mainstream EOL" },
  { color: "bg-[#DC2626]", label: "Final EOL" },
];


const licenseComparison = [
  {
    criteria: "Best for",
    consumption: "Customers with established use cases with a planned workloads and usage",
    payAsYouGo: "Early cloud journey; undefined or exploratory use cases",
    subscription: "Customers with a clear requirement of a specific service and known duration",
  },
  {
    criteria: "Commitment",
    consumption: "Upfront purchase of cloud credits",
    payAsYouGo: "No initial commitment",
    subscription: "Fixed commitment for a chosen period",
  },
  {
    criteria: "Cost Structure",
    consumption: "Monthly costs deducted from prepurchased credit balance",
    payAsYouGo: "Pay only for actual monthly usage",
    subscription: "Fixed cost for the selected period, regardless of usage",
  },
  {
    criteria: "Flexibility",
    consumption: "Volume-based discounts possible",
    payAsYouGo: "None mentioned",
    subscription: "None mentioned (fixed price)",
  },
  {
    criteria: "Risk Level",
    consumption: "Medium — upfront spend required",
    payAsYouGo: "Low — no upfront investment",
    subscription: "Medium — unused capacity is still paid for",
  },
];

const migrationToolRows = [
  {
    category: "Standard",
    percent: "70%",
    effort: "Low",
    description: "Migrate automatically with little to no manual work",
  },
  {
    category: "Partial",
    percent: "20%",
    effort: "Medium",
    description:
      "Full automated migration fails; some manual rework required",
  },
  {
    category: "Exotic",
    percent: "10%",
    effort: "High",
    description:
      "Complex or non-standard interfaces requiring substantial manual intervention",
  },
];

/* ------------------------------------------------------------------ */
/*  Dot color helper                                                   */
/* ------------------------------------------------------------------ */

function dotHex(type: string) {
  switch (type) {
    case "sap-xi": return "#4338CA";
    case "sap-pi": return "#0369A1";
    case "sap-po": return "#B45309";
    default: return "#a1a1aa";
  }
}

function dotTextClass(type: string) {
  switch (type) {
    case "sap-xi": return "text-[#4338CA] dark:text-[#818CF8]";
    case "sap-pi": return "text-[#0369A1] dark:text-[#38BDF8]";
    case "sap-po": return "text-[#B45309] dark:text-[#FBBF24]";
    default: return "text-zinc-400";
  }
}

function accentTextClass(accent: string | undefined) {
  switch (accent) {
    case "#DC2626": return "text-[#DC2626] dark:text-[#FCA5A5]";
    case "#059669": return "text-[#059669] dark:text-[#6EE7B7]";
    case "#EA580C": return "text-[#EA580C] dark:text-[#FDBA74]";
    default: return "";
  }
}

function dotLabel(type: string) {
  switch (type) {
    case "sap-xi": return "SAP XI";
    case "sap-pi": return "SAP PI";
    default: return "SAP PO";
  }
}

function badgeColor(color: string) {
  switch (color) {
    case "dual":
      return "text-[#92400E] bg-[#FEF3C7] border border-[#D97706] dark:text-[#FBBF24] dark:bg-[#78350F] dark:border-[#B45309]";
    case "single":
      return "text-[#065F46] bg-[#D1FAE5] border border-[#059669] dark:text-[#6EE7B7] dark:bg-[#064E3B] dark:border-[#059669]";
    default:
      return "text-zinc-600 bg-zinc-100 border border-zinc-300 dark:text-zinc-400 dark:bg-zinc-700 dark:border-zinc-600";
  }
}


/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function SappoMigrationPage() {
  return (
    <main>
      {/* S1 — Hero */}
      <section className="bg-white pt-20 dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-8 pt-12 pb-8 lg:px-12 lg:pt-16 lg:pb-12">
          <h1 className="text-[40px] font-bold leading-[110%] tracking-normal text-zinc-950 dark:text-zinc-50 sm:text-[56px] lg:text-[72px]">
            SAP PO Migration to SAP Integration Suite (CPI)
          </h1>
          <h2 className="mt-8 text-[22px] font-bold leading-[130%] text-zinc-950 dark:text-zinc-50 sm:text-[28px] lg:text-[32px]">
            Resistance is futile &ndash; SAP PO is coming to an end.
            It&rsquo;s time to act
          </h2>
          <p className="mt-6 max-w-5xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            Starting with SAP Exchange Infrastructure (SAP XI) way back in
            2002, the middleware solution from SAP has evolved &amp; matured
            through SAP PI (Dual Stack). SAP PO (Dual Usage and Single Stack)
            and now has come close to its retirement with End of Support on
            31st December 2027 with paid extended support available until 31st
            December 2030.
          </p>
        </div>
      </section>

      {/* S2 — Product Release Timeline */}
      <section className="bg-white dark:bg-zinc-950">
        <div className=" mx-auto max-w-7xl px-8 py-12 pt-0 lg:px-12 lg:py-16 lg:pt-0">
          <div className="rounded-2xl bg-zinc-100 p-8 shadow-sm dark:bg-zinc-800 lg:p-12">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Product Release History: 2002 &ndash; 2030
          </p>
          <h2 className="mt-4 text-center text-[32px] font-bold leading-[110%] text-zinc-950 dark:text-zinc-50 sm:text-[40px] lg:text-[48px]">
            SAP XI &rarr; SAP PI &rarr; SAP PO
          </h2>
          <p className="mt-3 text-center text-sm text-zinc-500 dark:text-zinc-400">
            From the first integration platform to end of life &mdash; click any
            card to expand.
          </p>

          {/* Legend */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {legendItems.map((item) => (
              <div key={item.label} className="flex items-center gap-1.5">
                <span
                  className={`h-3 w-3 rounded-full ${item.color}`}
                />
                <span className="text-xs text-zinc-600 dark:text-zinc-400">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Timeline — CSS grid for compact layout */}
          <div className="mx-auto mt-16 max-w-5xl">
            {/* Mobile: simple stack */}
            <div className="space-y-10 md:hidden">
              {timelineEntries.map((entry, idx) => {
                const color = entry.accent || dotHex(entry.dot);
                return (
                  <div key={entry.year + idx} className="relative rounded-xl border-2 bg-white p-6 dark:bg-zinc-800" style={{ borderColor: color }}>
                    {entry.label && <span className={`absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-3 py-0.5 text-xs font-bold uppercase tracking-wider ${entry.labelColor}`}>{entry.label}</span>}
                    <div className="mb-3"><span className={`inline-block rounded-full px-3 py-1 text-sm font-bold text-white`} style={{ backgroundColor: color }}>{entry.year}</span></div>
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 shrink-0 rounded-full" style={{ backgroundColor: color }} />
                      <span className={`text-xs font-semibold ${dotTextClass(entry.dot)}`}>{dotLabel(entry.dot)}</span>
                      <span className="ml-auto text-xs font-medium text-zinc-700 dark:text-zinc-300">{entry.version}</span>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <h3 className="text-lg font-bold text-zinc-950 dark:text-zinc-50">{entry.name}</h3>
                      <div className="flex gap-2">{entry.badges.map((b) => <span key={b.label} className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${badgeColor(b.color)}`}>{b.label}</span>)}</div>
                    </div>
                    <p className={`mt-1 text-xs italic ${accentTextClass(entry.accent) || dotTextClass(entry.dot)}`}>{entry.subtitle}</p>
                    {entry.tags.length > 0 && <div className="mt-2 flex flex-wrap gap-1.5">{entry.tags.map((t) => <span key={t} className="rounded-full border border-zinc-200 px-2 py-0.5 text-xs text-zinc-500 dark:border-zinc-600 dark:text-zinc-400">{t}</span>)}</div>}
                    <p className="mt-3 whitespace-pre-line text-sm italic leading-relaxed text-zinc-800 dark:text-zinc-300">{entry.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Desktop: two independent columns + center line */}
            <div className="relative hidden md:flex">
              {/* Left column */}
              <div className="flex w-[calc(50%-35px)] flex-col gap-[50px] pr-2">
                {timelineEntries.filter(e => e.side === "left").map((entry, idx) => {
                  const color = entry.accent || dotHex(entry.dot);
                  return (
                    <div key={entry.year + idx} className="relative">
                      <div className="absolute top-1/2 z-10 -translate-y-1/2" style={{ right: -69 }}>
                        <div className="flex h-12 w-12 items-center justify-center rounded-full text-xs font-bold text-white" style={{ backgroundColor: color }}>{entry.year}</div>
                      </div>
                      <div className="absolute top-1/2 -translate-y-1/2 h-0.5" style={{ backgroundColor: color, right: -22, width: 24 }} />
                      <div className="relative rounded-xl border-2 bg-white p-5 dark:bg-zinc-800" style={{ borderColor: color }}>
                        {entry.label && <span className={`absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-3 py-0.5 text-xs font-bold uppercase tracking-wider ${entry.labelColor}`}>{entry.label}</span>}
                        <div className="flex items-center gap-2">
                          <span className="h-3 w-3 shrink-0 rounded-full" style={{ backgroundColor: color }} />
                          <span className={`text-xs font-semibold ${dotTextClass(entry.dot)}`}>{dotLabel(entry.dot)}</span>
                          <span className="ml-auto text-xs font-medium text-zinc-700 dark:text-zinc-300">{entry.version}</span>
                        </div>
                        <div className="mt-2 flex items-center justify-between">
                          <h3 className="text-lg font-bold text-zinc-950 dark:text-zinc-50">{entry.name}</h3>
                          <div className="flex gap-2">{entry.badges.map((b) => <span key={b.label} className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${badgeColor(b.color)}`}>{b.label}</span>)}</div>
                        </div>
                        <p className={`mt-1 text-xs italic ${accentTextClass(entry.accent) || dotTextClass(entry.dot)}`}>{entry.subtitle}</p>
                        {entry.tags.length > 0 && <div className="mt-2 flex flex-wrap gap-1.5">{entry.tags.map((t) => <span key={t} className="rounded-full border border-zinc-200 px-2 py-0.5 text-xs text-zinc-500 dark:border-zinc-600 dark:text-zinc-400">{t}</span>)}</div>}
                        <p className="mt-3 whitespace-pre-line text-sm italic leading-relaxed text-zinc-800 dark:text-zinc-300">{entry.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Center line — gradient colored between circles */}
              <div className="flex w-[70px] justify-center py-[100px]">
                <div
                  className="w-0.5"
                  style={{
                    background: `linear-gradient(to bottom, ${[
                      `${dotHex("sap-xi")} 0%`,
                      `${dotHex("sap-pi")} 8%`,
                      `${dotHex("sap-pi")} 14%`,
                      `${dotHex("sap-po")} 14%`,
                      `${dotHex("sap-po")} 33%`,
                      `#DC2626 33%`,
                      `#DC2626 43%`,
                      `#059669 43%`,
                      `#059669 63%`,
                      `#EA580C 63%`,
                      `#EA580C 75%`,
                      `#DC2626 75%`,
                      `#DC2626 100%`,
                    ].join(", ")})`,
                  }}
                />
              </div>

              {/* Right column — offset down so first right card starts lower */}
              <div className="mt-24 flex w-[calc(50%-35px)] flex-col gap-[50px] pl-2">
                {timelineEntries.filter(e => e.side === "right").map((entry, idx) => {
                  const color = entry.accent || dotHex(entry.dot);
                  return (
                    <div key={entry.year + idx} className="relative">
                      <div className="absolute top-1/2 z-10 -translate-y-1/2" style={{ left: -64 }}>
                        <div className="flex h-12 w-12 items-center justify-center rounded-full text-xs font-bold text-white" style={{ backgroundColor: color }}>{entry.year}</div>
                      </div>
                      <div className="absolute top-1/2 -translate-y-1/2 h-0.5" style={{ backgroundColor: color, left: -22, width: 24 }} />
                      <div className="relative rounded-xl border-2 bg-white p-5 dark:bg-zinc-800" style={{ borderColor: color }}>
                        {entry.label && <span className={`absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-3 py-0.5 text-xs font-bold uppercase tracking-wider ${entry.labelColor}`}>{entry.label}</span>}
                        <div className="flex items-center gap-2">
                          <span className="h-3 w-3 shrink-0 rounded-full" style={{ backgroundColor: color }} />
                          <span className={`text-xs font-semibold ${dotTextClass(entry.dot)}`}>{dotLabel(entry.dot)}</span>
                          <span className="ml-auto text-xs font-medium text-zinc-700 dark:text-zinc-300">{entry.version}</span>
                        </div>
                        <div className="mt-2 flex items-center justify-between">
                          <h3 className="text-lg font-bold text-zinc-950 dark:text-zinc-50">{entry.name}</h3>
                          <div className="flex gap-2">{entry.badges.map((b) => <span key={b.label} className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${badgeColor(b.color)}`}>{b.label}</span>)}</div>
                        </div>
                        <p className={`mt-1 text-xs italic ${accentTextClass(entry.accent) || dotTextClass(entry.dot)}`}>{entry.subtitle}</p>
                        {entry.tags.length > 0 && <div className="mt-2 flex flex-wrap gap-1.5">{entry.tags.map((t) => <span key={t} className="rounded-full border border-zinc-200 px-2 py-0.5 text-xs text-zinc-500 dark:border-zinc-600 dark:text-zinc-400">{t}</span>)}</div>}
                        <p className="mt-3 whitespace-pre-line text-sm italic leading-relaxed text-zinc-800 dark:text-zinc-300">{entry.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <p className="mt-12 text-center text-sm text-zinc-500 dark:text-zinc-400">
            SAP PO 7.5 supported until end of 2030. Official successor: SAP
            Integration Suite (Cloud)
          </p>
          </div>
        </div>
      </section>

      {/* S3 — End of Support */}
      <section>
        {/* White top */}
        <div className="bg-white dark:bg-zinc-950">
          <div className="mx-auto max-w-7xl px-8 pt-24 py-12 lg:px-12 lg:py-16">
            <h2 className="max-w-5xl text-[32px] font-bold leading-[110%] text-zinc-950 dark:text-zinc-50 sm:text-[40px] lg:text-[48px]">
              Coming to an end &ndash; what does this mean exactly?
            </h2>
            <p className="mt-8 max-w-5xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              SAP mainstream support for SAP PO ends on 31st December 2027.
              After this date, no new features, bug fixes, or security patches
              will be delivered, and SAP will no longer provide system support.
              For organisations that need more time, an extended support option
              is available at an additional cost, covering the period through to
              31st December 2030.
            </p>

            {/* Support chart in rounded gray card */}
            <div className="mt-10 rounded-2xl bg-zinc-100 p-8 dark:bg-zinc-800 lg:p-12">
            {/* Extended Support bracket */}
            <div className="mb-4 flex">
              <div className="flex-1" />
              <div className="flex flex-1 flex-col items-center">
                <span className="mb-1 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                  Extended Support
                </span>
                {/* Bracket shape */}
                <div className="flex w-full items-start">
                  <div className="h-3 w-px bg-zinc-400" />
                  <div className="h-px flex-1 bg-zinc-400" />
                  <div className="h-3 w-px bg-zinc-400" />
                </div>
              </div>
            </div>

            {/* Chart rows */}
            <div className="space-y-4">
              {/* Bug Fixes */}
              <div className="relative h-12">
                <div className="absolute inset-0 flex rounded-full border border-[#15803D] bg-white dark:bg-zinc-800">
                  <div className="w-1/2" />
                  <div className="flex flex-1 items-center justify-center text-sm font-semibold text-[#15803D] dark:text-[#4ADE80]">Bug Fixes</div>
                </div>
                <div className="absolute inset-y-0 left-0 flex w-1/2 items-center justify-center rounded-full bg-[#15803D] text-sm font-semibold text-white">
                  Bug Fixes
                </div>
              </div>

              {/* Security Patches */}
              <div className="relative h-12">
                <div className="absolute inset-0 flex rounded-full border border-[#15803D] bg-white dark:bg-zinc-800">
                  <div className="w-1/2" />
                  <div className="flex flex-1 items-center justify-center text-sm font-semibold text-[#15803D] dark:text-[#4ADE80]">Security Patches</div>
                </div>
                <div className="absolute inset-y-0 left-0 flex w-1/2 items-center justify-center rounded-full bg-[#15803D] text-sm font-semibold text-white">
                  Security Patches
                </div>
              </div>

              {/* Features */}
              <div className="flex items-center gap-0">
                <div className="flex h-12 w-1/2 items-center justify-center rounded-full bg-[#15803D] text-sm font-semibold text-white">
                  Features
                </div>
              </div>
            </div>

            {/* Timeline line through dots + labels below */}
            <div className="relative mt-6 flex justify-between">
              {/* Line through dots */}
              <div className="absolute top-[5px] right-0 left-0 h-px bg-zinc-300 dark:bg-zinc-600" />
              {/* Dots + labels */}
              <div className="flex flex-col items-start gap-1.5">
                <span className="relative z-10 h-3 w-3 rounded-full border-2 border-zinc-400 bg-white dark:bg-zinc-800" />
                <span className="text-sm text-zinc-600 dark:text-zinc-400">Today</span>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <span className="relative z-10 h-3 w-3 rounded-full border-2 border-zinc-400 bg-white dark:bg-zinc-800" />
                <span className="text-sm text-zinc-600 dark:text-zinc-400">Dec 2027</span>
              </div>
              <div className="flex flex-col items-end gap-1.5">
                <span className="relative z-10 h-3 w-3 rounded-full border-2 border-zinc-900 bg-white dark:border-zinc-200 dark:bg-zinc-800" />
                <span className="text-sm text-zinc-600 dark:text-zinc-400">Dec 2030</span>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* S4 — Migration Options Table */}
      <section className="bg-white dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl px-8 py-12 lg:px-12 lg:py-16">
          <h2 className="max-w-5xl text-[32px] font-bold leading-[110%] text-zinc-950 dark:text-zinc-50 sm:text-[40px] lg:text-[48px]">
            What are your migration options?
          </h2>
          <p className="mt-6 max-w-5xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            Here are the different options available to decision makers based on
            their cost sensitivity, project priorities, technical acumen and
            political situation:
          </p>

          <div className="mt-12 overflow-x-auto rounded-xl">
            <table className="w-full min-w-[700px] text-left">
              <thead>
                <tr className="border-b border-zinc-200 bg-[#F0FAFD] dark:border-zinc-600 dark:bg-zinc-700">
                  <th className="whitespace-nowrap border-r border-zinc-200 px-4 py-4 text-sm font-bold text-zinc-900 dark:border-zinc-600 dark:text-zinc-100">
                    Options
                  </th>
                  <th className="border-r border-zinc-200 px-4 py-4 text-sm font-bold text-zinc-900 dark:border-zinc-600 dark:text-zinc-100">
                    Timeline
                  </th>
                  <th className="border-r border-zinc-200 px-4 py-4 text-sm font-bold text-zinc-900 dark:border-zinc-600 dark:text-zinc-100">
                    Pros
                  </th>
                  <th className="px-4 py-4 text-sm font-bold text-zinc-900 dark:text-zinc-100">
                    Cons
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <td className="whitespace-nowrap border-r border-zinc-200 px-4 py-5 align-top text-sm font-semibold text-zinc-900 dark:border-zinc-700 dark:text-zinc-100">Option 1</td>
                  <td className="border-r border-zinc-200 px-4 py-5 align-top text-sm text-zinc-700 dark:border-zinc-700 dark:text-zinc-300">Finish migration to SAP Integration Suite <strong>by December 2027</strong></td>
                  <td className="border-r border-zinc-200 px-4 py-5 align-top text-sm text-zinc-700 dark:border-zinc-700 dark:text-zinc-300">
                    <ul className="list-disc space-y-1 pl-4">
                      <li><strong>Cost savings</strong> (no expensive extended support)</li>
                      <li><strong>Reduced</strong> enterprise <strong>risk</strong></li>
                      <li>Company benefits from <strong>modern integration platform</strong> earlier</li>
                    </ul>
                  </td>
                  <td className="px-4 py-5 align-top text-sm text-zinc-700 dark:text-zinc-300">
                    <ul className="list-disc space-y-1 pl-4">
                      <li><strong>Additional Costs</strong> (SAP CPI requires license and maintenance that might exceed todays SAP PO cashout)</li>
                      <li>Migration project needs to <strong>start early 2026</strong>. This might collide with companies IT roadmap</li>
                    </ul>
                  </td>
                </tr>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <td className="whitespace-nowrap border-r border-zinc-200 px-4 py-5 align-top text-sm font-semibold text-zinc-900 dark:border-zinc-700 dark:text-zinc-100">Option 2</td>
                  <td className="border-r border-zinc-200 px-4 py-5 align-top text-sm text-zinc-700 dark:border-zinc-700 dark:text-zinc-300">Finish migration to SAP Integration Suite <strong>by December 2030</strong></td>
                  <td className="border-r border-zinc-200 px-4 py-5 align-top text-sm text-zinc-700 dark:border-zinc-700 dark:text-zinc-300">
                    <ul className="list-disc space-y-1 pl-4">
                      <li>Postpone effort to later point in time and <strong>free up time</strong> needed for other higher priority projects</li>
                    </ul>
                  </td>
                  <td className="px-4 py-5 align-top text-sm text-zinc-700 dark:text-zinc-300">
                    <ul className="list-disc space-y-1 pl-4">
                      <li><strong>High Costs</strong> for both SAP PI extended support and SAP CPI license and maintenance</li>
                    </ul>
                  </td>
                </tr>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <td className="whitespace-nowrap border-r border-zinc-200 px-4 py-5 align-top text-sm font-semibold text-zinc-900 dark:border-zinc-700 dark:text-zinc-100">Option 3</td>
                  <td className="border-r border-zinc-200 px-4 py-5 align-top text-sm text-zinc-700 dark:border-zinc-700 dark:text-zinc-300">Finish migration to 3rd party integration middleware</td>
                  <td className="border-r border-zinc-200 px-4 py-5 align-top text-sm text-zinc-700 dark:border-zinc-700 dark:text-zinc-300">
                    <ul className="list-disc space-y-1 pl-4">
                      <li>Leverage existing integration middleware for <strong>operational excellence</strong></li>
                      <li><strong>No vendor &ndash; lock.</strong> Instead, best of breed</li>
                      <li>Very <strong>substantial cost savings.</strong> High ROI</li>
                    </ul>
                  </td>
                  <td className="px-4 py-5 align-top text-sm text-zinc-700 dark:text-zinc-300">
                    <ul className="list-disc space-y-1 pl-4">
                      <li><strong>High political risk:</strong> SAP PO is part of SAP world, and main decision maker might not be familiar, alienated and opposed to leaving the SAP world, causing discussion on C &ndash; level.</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* S5 — SAP Integration Suite */}
      <section className="bg-white dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-8 py-12 lg:px-12 lg:py-16">
          <h2 className="max-w-5xl text-[32px] font-bold leading-[110%] text-zinc-950 dark:text-zinc-50 sm:text-[40px] lg:text-[48px]">
            The SAP Integration Suite as your migration target platform
          </h2>
          <p className="mt-6 max-w-5xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            Most SAP PO migrations assume that the SAP Integration Suite, also
            known as SAP CPI, is the natural migration target. But is it?
          </p>

          {/* Callout card */}
          <div className="relative mt-12 rounded-xl bg-zinc-100 dark:bg-zinc-800">
            <div className="absolute -top-6 left-8 inline-flex items-center rounded-[16px] border-[6px] border-white bg-zinc-100 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-zinc-700 dark:border-zinc-950 dark:bg-zinc-800 dark:text-zinc-300">
              SAP Integration Suite in a Nutshell
            </div>
            <div className="p-8 pt-12">
              <p className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
                The SAP Integration Suite (aka SAP CPI) is a set of (separately
                licensed) components offered on a SaaS platform and used to
                synchronize data between enterprise application. The
                functionality far exceeds SAP PO.
              </p>
            </div>
          </div>

          <p className="mt-12 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            The answer to your question depends on multiple factors such as your
            general IT strategy, your existing integration architecture, the
            character traits or your IT leadership and the strength of SAP
            within your organization. Generally speaking, SAP Integration Suite
            is a capable successor to handle the processes performed by SAP PO
            both functionality wise as well as performance wise.
          </p>
        </div>
      </section>

      {/* S6 — Don't Upset the CFO I */}
      <section className="bg-white dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-8 pt-12 pb-24 lg:px-12 lg:pt-16 lg:pb-32">
          <h2 className="max-w-5xl text-[32px] font-bold leading-[110%] text-zinc-950 dark:text-zinc-50 sm:text-[40px] lg:text-[48px]">
            Don&rsquo;t upset the CFO &ndash; avoid paying for extended support
          </h2>
          <p className="mt-6 max-w-5xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            Despite the December 2027 deadline appearing distant, interface
            migrations are complex and demand careful planning. Done too late,
            they force you into SAP&rsquo;s extended support &mdash; an
            expensive safety net that exists for emergencies, not as a migration
            strategy. The single most effective risk mitigation available to you
            right now is simply to start early. Major root causes for failure to
            avoid are:
          </p>

          <div className="mt-10 max-w-5xl space-y-8">
            <div>
              <h3 className="text-base text-zinc-950 dark:text-zinc-50">
                Starting too late, because
              </h3>
              <ul className="mt-3 space-y-1 pl-6 text-sm text-zinc-600 dark:text-zinc-400">
                {[
                  "of external causes (change of leadership or organization)",
                  "underestimation of complexity, and therefore effort and duration",
                  "lack of financing",
                ].map((item) => (
                  <li key={item} className="list-disc">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-base text-zinc-950 dark:text-zinc-50">
                Poor execution
              </h3>
              <ul className="mt-3 space-y-1 pl-6 text-sm text-zinc-600 dark:text-zinc-400">
                {[
                  "lack of skills to perform migration",
                  "lack of resources to perform migration (i.e. key resources go missing)",
                  "lack of sponsorship – hard to sell, easy to delay",
                  "inadequate testing – post migration becomes an operational nightmare",
                  "communication",
                ].map((item) => (
                  <li key={item} className="list-disc">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* S7 — Don't Upset the CFO II + License Diagram */}
      <section>
        <div className="bg-zinc-100 dark:bg-zinc-900">
          <div className="mx-auto max-w-7xl px-8 pt-24 pb-12 lg:px-12 lg:pt-32 lg:pb-16">
            <h2 className="max-w-5xl text-[32px] font-bold leading-[110%] text-zinc-950 dark:text-zinc-50 sm:text-[40px] lg:text-[48px]">
              Don&rsquo;t upset the CFO II &ndash; don&rsquo;t underestimate
              total cost of SAP CPI
            </h2>
            <p className="mt-6 max-w-5xl text-base italic leading-relaxed text-zinc-600 dark:text-zinc-400">
              As your CAPEX was made in the past (license was purchased), you are
              currently only paying for maintenance for SAP PO. With the
              migration to SAP Integration Suite, you will encounter a variety of
              new cost factors you need to take into consideration. The license
              cost is one of them:
            </p>
            {/* License tree diagram — white rounded card */}
            <div className="mt-10 rounded-2xl bg-white p-8 dark:bg-zinc-800 lg:p-12">
            {/* Tree diagram — SVG lines + positioned boxes */}
            <div className="relative mx-auto hidden lg:block" style={{ height: 260, maxWidth: 900 }}>
              {/* Root node */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 rounded-xl bg-zinc-800 py-4 text-center text-sm font-bold text-white dark:bg-zinc-700" style={{ width: 125 }}>
                License<br />Model
              </div>

              {/* SVG connecting lines */}
              <svg className="absolute inset-0 h-full w-full" style={{ pointerEvents: "none" }}>
                {/* Root to fork point */}
                <line x1="125" y1="130" x2="185" y2="130" stroke="#d4d4d8" strokeWidth="2" />
                {/* Vertical fork */}
                <line x1="185" y1="65" x2="185" y2="195" stroke="#d4d4d8" strokeWidth="2" />
                {/* Fork to Consumption */}
                <line x1="185" y1="65" x2="240" y2="65" stroke="#d4d4d8" strokeWidth="2" />
                {/* Fork to Subscription */}
                <line x1="185" y1="195" x2="240" y2="195" stroke="#d4d4d8" strokeWidth="2" />
                {/* Consumption to fork2 */}
                <line x1="395" y1="65" x2="520" y2="65" stroke="#d4d4d8" strokeWidth="2" />
                {/* Vertical fork2 — extends down to PAY-AS-YOU-GO */}
                <line x1="520" y1="5" x2="520" y2="125" stroke="#d4d4d8" strokeWidth="2" />
                {/* Fork2 to BTPEA */}
                <line x1="520" y1="5" x2="570" y2="5" stroke="#d4d4d8" strokeWidth="2" />
                {/* Fork2 to CPEA */}
                <line x1="520" y1="65" x2="570" y2="65" stroke="#d4d4d8" strokeWidth="2" />
                {/* Fork2 to PAY-AS-YOU-GO */}
                <line x1="520" y1="125" x2="570" y2="125" stroke="#d4d4d8" strokeWidth="2" />
              </svg>

              {/* Consumption Based */}
              <div className="absolute top-[37px] left-[240px] rounded-xl bg-sky-700 px-6 py-3 text-center text-sm font-bold text-white" style={{ width: 155 }}>
                Consumption<br />Based
              </div>

              {/* Subscription Based */}
              <div className="absolute top-[167px] left-[240px] rounded-xl bg-amber-700 px-6 py-3 text-center text-sm font-bold text-white" style={{ width: 155 }}>
                Subscription<br />Based
              </div>

              {/* BTPEA */}
              <div className="absolute top-[-15px] left-[570px] rounded-xl bg-indigo-500 px-5 py-2.5 text-center text-xs font-bold text-white" style={{ width: 200 }}>
                SAP BTP Enterprise<br />Agreement (BTPEA)
              </div>

              {/* CPEA */}
              <div className="absolute top-[45px] left-[570px] rounded-xl bg-indigo-500 px-5 py-2.5 text-center text-xs font-bold text-white" style={{ width: 200 }}>
                Cloud Platform Enterprise<br />Agreement (CPEA)
              </div>

              {/* PAY-AS-YOU-GO */}
              <div className="absolute top-[110px] left-[570px] rounded-xl bg-indigo-500 px-5 py-2.5 text-center text-xs font-bold text-white" style={{ width: 200 }}>
                PAY &ndash; AS &ndash; YOU &ndash; GO
              </div>
            </div>

            {/* Mobile: stacked version */}
            <div className="flex flex-col gap-6 lg:hidden">
              <div className="rounded-xl bg-zinc-800 px-6 py-4 text-center text-sm font-bold text-white">
                License Model
              </div>
              <div className="ml-8 flex flex-col gap-4">
                <div className="rounded-xl bg-sky-700 px-5 py-3 text-center text-sm font-bold text-white">
                  Consumption Based
                </div>
                <div className="ml-8 flex flex-col gap-2">
                  <div className="rounded-xl bg-indigo-500 px-4 py-2 text-center text-xs font-bold text-white">
                    SAP BTP Enterprise Agreement (BTPEA)
                  </div>
                  <div className="rounded-xl bg-indigo-500 px-4 py-2 text-center text-xs font-bold text-white">
                    Cloud Platform Enterprise Agreement (CPEA)
                  </div>
                  <div className="rounded-xl bg-indigo-500 px-4 py-2 text-center text-xs font-bold text-white">
                    PAY &ndash; AS &ndash; YOU &ndash; GO
                  </div>
                </div>
                <div className="rounded-xl bg-amber-700 px-5 py-3 text-center text-sm font-bold text-white">
                  Subscription Based
                </div>
              </div>
            </div>

            <p className="mt-4 text-center text-xs italic text-zinc-500 dark:text-zinc-400">
              Figure 1. License costs are only one of many cost factors with SAP
              CPI
            </p>
            </div>
          </div>
        </div>
      </section>

      {/* S8 — License Comparison Table + Quote */}
      <section className="bg-zinc-100 dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl px-8 pt-4 pb-24 lg:px-12 lg:pt-6 lg:pb-32">
          <p className="mb-8 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            If you want to use a consumption or subscription based model depends
            on your current situation:
          </p>

          <div className="overflow-x-auto rounded-xl">
            <table className="w-full min-w-[700px] text-left">
              <thead>
                <tr className="border-b-2 border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-800">
                  <th className="border-r border-zinc-200 px-4 py-4 text-sm font-bold text-black dark:border-zinc-700 dark:text-zinc-100">
                    Criteria
                  </th>
                  <th className="border-r border-zinc-200 px-4 py-4 text-sm font-bold text-black dark:border-zinc-700 dark:text-zinc-100">
                    Consumption Model<br />(BTPEA / CPEA)
                  </th>
                  <th className="border-r border-zinc-200 px-4 py-4 text-sm font-bold text-black dark:border-zinc-700 dark:text-zinc-100">
                    Consumption Model<br />(Pay-As-You-Go)
                  </th>
                  <th className="px-4 py-4 text-sm font-bold text-black dark:text-zinc-100">
                    Subscriber Model<br />(Subscription)
                  </th>
                </tr>
              </thead>
              <tbody>
                {licenseComparison.map((row) => (
                  <tr
                    key={row.criteria}
                    className="border-b border-zinc-200 dark:border-zinc-700"
                  >
                    <td className="border-r border-zinc-200 px-4 py-4 text-sm font-semibold text-black dark:border-zinc-700 dark:text-zinc-100">
                      {row.criteria}
                    </td>
                    <td className="border-r border-zinc-200 px-4 py-4 text-sm text-black dark:border-zinc-700 dark:text-zinc-300">
                      {row.consumption}
                    </td>
                    <td className="border-r border-zinc-200 px-4 py-4 text-sm text-black dark:border-zinc-700 dark:text-zinc-300">
                      {row.payAsYouGo}
                    </td>
                    <td className="px-4 py-4 text-sm text-black dark:text-zinc-300">
                      {row.subscription}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 max-w-5xl">
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              The contracts for SAP BTP license are tricky in itself and you
              need to have experience to understand risks and how to avoid
              downsides. Additional, the license cost is only one cost factor.
              You have to include maintenance costs, tenant cost, message
              traffic costs, and additional hyperscaler costs, among others.
            </p>
            <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
              No CFO likes surprises that ruin their financial planning, so
            </p>
            <p className="mt-4 text-center text-base font-semibold italic leading-relaxed text-accent dark:text-accent-light">
              Ensure you perform a rigid cost assessment to understand your
              total future run cost, align with your CFO early and avoid
              unnecessary friction and problems.
            </p>
          </div>
        </div>
      </section>

      {/* S9 — The Migration Approach */}
      <section className="bg-white dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-8 py-24 pb-12 lg:px-12 lg:py-32 lg:pb-16">
          <h2 className="max-w-5xl text-[32px] font-bold leading-[110%] text-zinc-950 dark:text-zinc-50 sm:text-[40px] lg:text-[48px]">
            The Migration Approach
          </h2>
          <p className="mt-6 max-w-5xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            The migration approach is one of the{" "}
            <strong className="font-bold text-zinc-950 dark:text-zinc-50">
              most critical success factors
            </strong>{" "}
            for a SAP PO migration. Describing it in full detail warrants a
            separate article. We will walk you through our approach during the
            kicko meeting and share a detailed project plan along with an
            Excel-based checklist.
          </p>

          <p className="mt-8 text-base text-zinc-600 dark:text-zinc-400">
            A few key things to keep in mind:
          </p>
          <ul className="mt-4 space-y-4 pl-6 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            <li className="list-disc">
              Categorise interfaces by complexity and prioritise accordingly.
              Simple as it sounds, this step is frequently skipped &mdash; yet
              it has a significant impact on how smoothly the project runs.
            </li>
            <li className="list-disc">
              Identify and manage third-party dependencies early. These are easy
              to overlook and can cause costly delays later in the project.
            </li>
          </ul>

          {/* Callout box */}
          <div className="mt-12 rounded-xl bg-white p-8 shadow-[0px_4px_24px_0px_#0000001F] dark:bg-zinc-800">
            <p className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
              <strong className="font-bold text-accent dark:text-accent-light">
                Real World Migration Issue Example #1.
              </strong>{" "}
              At one of our customers, a third-party library running reliably on
              SAP PO could not be migrated to SAP BTP due to the technical
              constraints of the SAP cloud/SaaS environment (jar dependency
              conflict). The resolution was to host the library in a separate
              container &mdash; a workable solution, but one that added time and
              complexity that had not been anticipated.
            </p>
          </div>
        </div>
      </section>

      {/* S10 — Migration Tool Support */}
      <section className="bg-white dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-8 pt-12 pb-24 lg:px-12 lg:pt-16 lg:pb-32">
          <h2 className="max-w-5xl text-[32px] font-bold leading-[110%] text-zinc-950 dark:text-zinc-50 sm:text-[40px] lg:text-[48px]">
            SAP PO Migration Tool Support &ndash; Capabilities &amp; Limitations
          </h2>

          <p className="mt-6 max-w-5xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            SAP Integration Suite includes two built-in tools to support
            migration from SAP Process Orchestration (PO).
          </p>
          <p className="mt-4 max-w-5xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            The Migration Assessment Tool analyses existing on-premise
            integrations and generates an overview report classifying which
            interfaces can be migrated automatically and which require
            modification or redesign. This report serves as the foundation for
            migration project planning, and we use it to provide effort and cost
            estimations for your migration project. However, the data provided
            is not very detailed but provides an indicator where to dig deeper:
          </p>

          <ul className="mt-4 space-y-2 pl-6 text-sm text-zinc-600 dark:text-zinc-400">
            <li className="list-disc">
              The outcome of the assessment tool provides a start, but we will
              require analysis of all interfaces to ensure risks and efforts are
              estimated correctly.
            </li>
          </ul>

          <p className="mt-6 max-w-5xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            The Automated Migration Tool converts SAP PO objects &mdash; which
            run on Java &mdash; into SAP Integration Suite objects. The code
            migration itself works nicely.
          </p>

          {/* Migration tool table */}
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[600px] text-left">
              <thead>
                <tr className="border-b border-zinc-200 bg-[#80D6F21F] text-zinc-900 dark:border-zinc-700 dark:text-zinc-100">
                  <th className="border-r border-zinc-200 px-4 py-4 text-sm font-bold dark:border-zinc-700">Category</th>
                  <th className="border-r border-zinc-200 px-4 py-4 text-sm font-bold dark:border-zinc-700">
                    % of PO flows
                  </th>
                  <th className="border-r border-zinc-200 px-4 py-4 text-sm font-bold dark:border-zinc-700">
                    Degree of manual work required
                  </th>
                  <th className="px-4 py-4 text-sm font-bold">Description</th>
                </tr>
              </thead>
              <tbody>
                {migrationToolRows.map((row) => (
                  <tr
                    key={row.category}
                    className="border-b border-zinc-200 dark:border-zinc-700"
                  >
                    <td className="border-r border-zinc-200 px-4 py-4 text-sm font-semibold text-zinc-900 dark:border-zinc-700 dark:text-zinc-100">
                      {row.category}
                    </td>
                    <td className="border-r border-zinc-200 px-4 py-4 text-sm text-zinc-700 dark:border-zinc-700 dark:text-zinc-300">
                      {row.percent}
                    </td>
                    <td className="border-r border-zinc-200 px-4 py-4 text-sm text-zinc-700 dark:border-zinc-700 dark:text-zinc-300">
                      {row.effort}
                    </td>
                    <td className="px-4 py-4 text-sm text-zinc-700 dark:text-zinc-300">
                      {row.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-10 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            However, the migration entails additional activities that are not
            covered by the migration tool and require manual work:
          </p>
          <ul className="mt-4 space-y-2 pl-6 text-sm text-zinc-600 dark:text-zinc-400">
            {[
              "Password entries",
              "Certificates and Keys exchanges",
              "Network related activities",
              "Connectivity setup (Cloud Connector)",
            ].map((item) => (
              <li key={item} className="list-disc">
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-8 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            A key shortcoming is that neither tool includes regression testing
            capabilities. To address this, SAP has partnered with select vendors
            to offer a free regression testing tool for the duration of the
            migration project, for up to 12 months, ensuring customers can
            validate their migrated interfaces end-to-end.
          </p>
        </div>
      </section>

      {/* S11 — Can AI Make Your SAP PO Migration Faster and Safer? */}
      <section className="bg-zinc-100 dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl px-8 py-24 lg:px-12 lg:py-32">
          <h2 className="max-w-5xl text-[32px] font-bold leading-[110%] text-zinc-950 dark:text-zinc-50 sm:text-[40px] lg:text-[48px]">
            Can AI Make Your SAP PO Migration Faster and Safer?
          </h2>
          <p className="mt-6 max-w-5xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            AI functionality is not used in the SAP migration tool itself, but
            the SAP BTP tooling leverages AI now and helps you with optimization
            and troubleshooting of the migrated code. The potential for using AI
            even further is limited, as most of the manual work is spent on
            solving very specific edge cases.
          </p>

          <h3 className="mt-12 text-2xl font-bold text-zinc-950 dark:text-zinc-50">
            Next steps to take
          </h3>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[600px] text-left">
              <thead>
                <tr className="border-b border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-800">
                  <th className="border-r border-zinc-200 px-4 py-4 text-sm font-bold text-zinc-900 dark:border-zinc-700 dark:text-zinc-100 w-10">#</th>
                  <th className="border-r border-zinc-200 px-4 py-4 text-sm font-bold text-zinc-900 dark:border-zinc-700 dark:text-zinc-100">What</th>
                  <th className="border-r border-zinc-200 px-4 py-4 text-sm font-bold text-zinc-900 dark:border-zinc-700 dark:text-zinc-100">How</th>
                  <th className="px-4 py-4 text-sm font-bold text-zinc-900 dark:text-zinc-100">When</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <td className="border-r border-zinc-200 px-4 py-5 align-top text-sm text-zinc-900 dark:border-zinc-700 dark:text-zinc-100">1</td>
                  <td className="border-r border-zinc-200 px-4 py-5 align-top text-sm text-zinc-700 dark:border-zinc-700 dark:text-zinc-300">Ensure your <strong>migration budget is realistic</strong> and no hidden cost threaten your success</td>
                  <td className="border-r border-zinc-200 px-4 py-5 align-top text-sm text-zinc-700 dark:border-zinc-700 dark:text-zinc-300"><strong>Perform free EADX SAP PO migration assessment</strong> &ndash; receive detailed project plan, cost projection and risk analysis</td>
                  <td rowSpan={3} className="px-4 py-5 align-top text-sm text-zinc-700 dark:text-zinc-300">Now</td>
                </tr>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <td className="border-r border-zinc-200 px-4 py-5 align-top text-sm text-zinc-900 dark:border-zinc-700 dark:text-zinc-100">2</td>
                  <td className="border-r border-zinc-200 px-4 py-5 align-top text-sm text-zinc-700 dark:border-zinc-700 dark:text-zinc-300">Ensure your <strong>project timelines are realistic</strong> and your assets and resources are aligned</td>
                  <td rowSpan={2} className="border-r border-zinc-200 px-4 py-5 align-top text-sm text-zinc-700 dark:border-zinc-700 dark:text-zinc-300"></td>
                </tr>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <td className="border-r border-zinc-200 px-4 py-5 align-top text-sm text-zinc-900 dark:border-zinc-700 dark:text-zinc-100">3</td>
                  <td className="border-r border-zinc-200 px-4 py-5 align-top text-sm text-zinc-700 dark:border-zinc-700 dark:text-zinc-300">Select a migration option</td>
                </tr>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <td className="border-r border-zinc-200 px-4 py-5 align-top text-sm text-zinc-900 dark:border-zinc-700 dark:text-zinc-100">4</td>
                  <td className="border-r border-zinc-200 px-4 py-5 align-top text-sm text-zinc-700 dark:border-zinc-700 dark:text-zinc-300">Perform success migration (C &ndash; Level approval, project management, solution architecture, test plan, migration, target system setup)</td>
                  <td className="border-r border-zinc-200 px-4 py-5 align-top text-sm text-zinc-700 dark:border-zinc-700 dark:text-zinc-300">Perform the SAP PO migration using <strong>EADX methodology, experienced team and tools</strong></td>
                  <td className="px-4 py-5 align-top text-sm text-zinc-700 dark:text-zinc-300">Soon</td>
                </tr>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <td className="border-r border-zinc-200 px-4 py-5 align-top text-sm text-zinc-900 dark:border-zinc-700 dark:text-zinc-100">5</td>
                  <td className="border-r border-zinc-200 px-4 py-5 align-top text-sm text-zinc-700 dark:border-zinc-700 dark:text-zinc-300">Control costs</td>
                  <td className="border-r border-zinc-200 px-4 py-5 align-top text-sm text-zinc-700 dark:border-zinc-700 dark:text-zinc-300">Leverage EADX <strong>fixed price migration</strong> to avoid cost overruns</td>
                  <td className="px-4 py-5 align-top text-sm text-zinc-700 dark:text-zinc-300">Soon</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* S12 — Contact CTA */}
      <section className="bg-white dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-8 pt-24 lg:px-12 lg:pt-32">
          <h2 className="max-w-5xl text-[32px] font-bold leading-[110%] text-zinc-950 dark:text-zinc-50 sm:text-[40px] lg:text-[48px]">
            Schedule free migration cost and effort assessment workshop
          </h2>
          <hr className="mt-8 border-zinc-200 dark:border-zinc-800" />
        </div>
      </section>
      <div className="mb-24 lg:mb-32">
        <ContactSection origin="SAP PO Migration" hideSubtitle />
      </div>
    </main>
  );
}

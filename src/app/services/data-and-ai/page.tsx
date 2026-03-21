import type { Metadata } from "next";
import Image from "next/image";
import { ScrollIndicator } from "@/components/scroll-indicator";
import { ContactSection } from "@/components/contact-section";

export const metadata: Metadata = {
  title: "Data & AI",
  description:
    "Turn your data into a competitive advantage. We help enterprises build the data foundations and AI capabilities they need to move faster, decide smarter, and grow with confidence.",
};

const whyDataPoints = [
  {
    title: "AI needs real-time, reliable data",
    description:
      "Large language models and analytical AI require data that is fresh, consistent, and semantically correct. Stale or conflicting data leads to unreliable outputs \u2014 and erodes trust quickly.",
  },
  {
    title: "Siloed data limits AI value",
    description:
      "AI delivers the most value when it can draw on the full breadth of enterprise knowledge \u2014 ERP, CRM, HR, operational systems. Without integration, AI operates in a tunnel.",
  },
  {
    title: "Governance is non-negotiable",
    description:
      "Regulatory requirements (GDPR, AI Act) and internal risk management demand that you know where your data comes from, who touched it, and how it was used to train or prompt a model.",
  },
  {
    title: "Data quality drives ROI",
    description:
      "Organisations that invest in data quality before AI projects report measurably higher ROI, shorter time-to-value, and significantly lower re-work costs once a model is in production.",
  },
  {
    title: "Scalable platforms enable AI at scale",
    description:
      "Running AI experiments is easy. Running AI in production at enterprise scale requires robust data platforms, optimised pipelines, and cost-conscious architecture \u2014 areas where EADX specialises.",
  },
  {
    title: "Human-centred adoption",
    description:
      "Technology alone does not deliver value. We pair every data and AI engagement with change management support and business metric alignment, so insights are actually used \u2014 and acted upon.",
  },
];

const capabilityStack = [
  {
    tier: "INSIGHT",
    items: [
      {
        title: "AI Agents & Automation",
        subs: ["LLM orchestration", "Agentic workflows", "Process automation"],
      },
      {
        title: "Advanced Analytics",
        subs: ["Predictive models", "NLP", "Computer vision"],
      },
      {
        title: "AI Governance",
        subs: ["Model cards", "Bias monitoring", "EU AI Act readiness"],
      },
    ],
  },
  {
    tier: "CONSUME",
    items: [
      {
        title: "Business Intelligence",
        subs: ["Qlik", "Power BI", "Tableau", "Self-service reporting"],
      },
      {
        title: "Business Requirements & KPIs",
        subs: ["Metric design", "OKR alignment", "Data contracts"],
      },
    ],
  },
  {
    tier: "STORE",
    items: [
      {
        title: "Data Platform",
        subs: ["Snowflake", "Databricks", "Azure"],
      },
      {
        title: "Data Modelling",
        subs: ["Dimensional", "Data Vault", "Lakehouse"],
      },
      {
        title: "Data Quality",
        subs: ["Great Expectations", "dbt tests", "SLA tracking"],
      },
    ],
  },
  {
    tier: "MOVE",
    items: [
      {
        title: "ETL / ELT Pipelines",
        subs: ["dbt", "Apache Spark", "Fivetran", "custom Python"],
      },
      {
        title: "Data Governance",
        subs: ["Cataloguing", "Lineage", "GDPR", "Access control"],
      },
    ],
  },
  {
    tier: "SOURCE",
    items: [
      {
        title: "ERP \u00b7 CRM \u00b7 SaaS APIs",
        subs: ["SAP", "Salesforce", "custom connectors"],
      },
      {
        title: "Operational Databases",
        subs: ["PostgreSQL", "Oracle", "SQL Server"],
      },
      {
        title: "Unstructured Data",
        subs: ["Documents", "PDFs", "Web", "IoT streams"],
      },
    ],
  },
];

const deliverables = [
  {
    title: "Business Requirements & Metrics Design",
    description:
      "Before building anything, we work with your business stakeholders to define what success looks like. We translate business questions into measurable KPIs, data contracts, and OKR frameworks that align IT delivery with strategic outcomes.",
    tags: [
      "KPI frameworks",
      "Data contracts",
      "OKR alignment",
      "Stakeholder workshops",
    ],
  },
  {
    title: "Business Intelligence & Reporting",
    description:
      "We design and implement BI solutions that turn raw data into actionable dashboards and self-service analytics. Our team has deep expertise in leading BI platforms and applies semantic modelling best practices to ensure reports are consistent, fast, and trusted.",
    tags: ["Qlik Sense", "Power BI", "Tableau", "Semantic layer", "Self-service"],
  },
  {
    title: "Data Governance",
    description:
      "We establish the policies, ownership structures, and tooling needed to make your data trustworthy and audit-ready. From data cataloguing and lineage to GDPR compliance and role-based access, we ensure your organisation can govern data as a strategic asset.",
    tags: [
      "DAMA-DMBOK",
      "Data lineage",
      "GDPR / AI Act",
      "Data catalogue",
      "Collibra",
      "Alation",
    ],
  },
  {
    title: "ETL / ELT Pipeline Engineering",
    description:
      "We build robust, testable, and cost-efficient data pipelines that move and transform data reliably. Whether you need real-time streaming or batch processing, we select the right tooling and implement with scalability and observability built in from day one.",
    tags: ["dbt", "Apache Spark", "Fivetran", "Python", "Airflow"],
  },
  {
    title: "Data Platform Engineering",
    description:
      "We architect and implement modern cloud data platforms that balance performance, cost, and governance. Our certified architects have hands-on experience deploying lakehouse architectures and optimising platform spend at scale.",
    tags: [
      "Snowflake",
      "Databricks",
      "Azure Synapse",
      "Data Vault 2.0",
      "Lakehouse",
    ],
  },
  {
    title: "AI Services & Intelligent Agents",
    description:
      "We design, build, and deploy AI solutions grounded in your enterprise data \u2014 from RAG-based document intelligence and LLM-powered workflows to fully autonomous agents that interact with your systems. We ensure AI is governed, explainable, and production-ready.",
    tags: [
      "LLM / RAG",
      "Agentic AI",
      "Embeddings & vector DB",
      "Claude",
      "OpenAI",
      "pgvector",
      "Pinecone",
    ],
  },
];

const expertiseColumns = [
  {
    title: "DATA ENGINEERING",
    skills: [
      "Snowflake architecture & cost optimisation",
      "Databricks & Apache Spark",
      "dbt data transformation",
      "PostgreSQL, Azure SQL, Oracle",
      "Real-time streaming (Kafka, Event Hubs)",
    ],
  },
  {
    title: "BUSINESS INTELLIGENCE",
    skills: [
      "Qlik Sense & QlikView",
      "Power BI semantic modelling",
      "Tableau & Looker",
      "KPI & OKR framework design",
      "Self-service analytics enablement",
    ],
  },
  {
    title: "AI & ML",
    skills: [
      "LLM application development (RAG, agents)",
      "Vector databases & embeddings",
      "ML Ops & model monitoring",
      "EU AI Act compliance advisory",
      "NLP & document intelligence",
    ],
  },
  {
    title: "GOVERNANCE & ARCHITECTURE",
    skills: [
      "TOGAF Enterprise Architecture",
      "DAMA-DMBOK data governance",
      "GDPR & data privacy",
      "AWS & Azure solution architecture",
      "Data quality frameworks",
    ],
  },
];

const clientStories = [
  {
    category: "FINANCIAL SERVICES \u00b7 DATA PLATFORM",
    title: "Modernising a legacy data warehouse for a mid-size Dutch bank",
    description:
      "A regional bank was running a decade-old on-premise data warehouse feeding Power BI dashboards that took hours to refresh. Regulatory reporting required manual intervention every quarter. EADX migrated the platform to Snowflake, re-engineered the ETL layer using dbt, and introduced automated data quality checks. The entire project ran in parallel with live operations to avoid disruption.",
    result:
      "Dashboard refresh time reduced from 4 hours to under 3 minutes. Quarterly regulatory report fully automated.",
  },
  {
    category: "MANUFACTURING \u00b7 AI DOCUMENT INTELLIGENCE",
    title:
      "AI-powered document intelligence for a chemical distributor",
    description:
      "A large European chemical distributor received hundreds of regulatory compliance documents, safety data sheets, and supplier certificates each month. Processing was entirely manual and error-prone. EADX built a RAG-based document intelligence system using Snowflake Cortex Search and a custom LLM pipeline, enabling automated extraction and classification, and equipping sales teams to cross-sell and upsell related products.",
    result:
      "Manual document processing time cut by over 80%. Compliance has become 100%, and sales process has improved by 350%.",
  },
  {
    category: "TELECOMMUNICATIONS \u00b7 DATA GOVERNANCE",
    title: "Data governance and Data quality programme for KPN",
    description:
      "KPN, the largest telecommunications provider in the Netherlands, had no formal enterprise-wide data ownership model, no centralised data catalogue, and was facing increasing data quality issues due to a siloed operational system. EADX designed and implemented a comprehensive data governance framework aligned to DAMA-DMBOK, stood up a data catalogue with full lineage tracking, and ran a series of stakeholder workshops to embed data ownership accountability across business units and operational teams.",
    result:
      "Lost revenue saved due to data quality. The data catalogue is live, with 5,000+ assets catalogued within 6 months.",
  },
];

const concerns = [
  {
    num: "1",
    concern: (
      <>
        Our <strong>data is not ready for AI</strong>. How do we know where we stand and what to fix first?
      </>
    ),
    solution: "EADX Data Readiness Assessment & AI Roadmap",
  },
  {
    num: "2",
    concern: (
      <>
        We are <strong>spending too much</strong> on our data platform and BI tools. Can costs be reduced without losing capability?
      </>
    ),
    solution: "EADX Cost Efficiency Assessment & Optimisation Plan",
  },
  {
    num: "3",
    concern: (
      <>
        We need to <strong>deliver BI and data pipelines faster</strong> and more reliably. Our current team is stretched.
      </>
    ),
    solution: "EADX Data Engineering & BI Development Services",
  },
  {
    num: "4",
    concern: (
      <>
        Our data is ungoverned. We don&rsquo;t know who owns what, and <strong>compliance is becoming a risk</strong>.
      </>
    ),
    solution: "EADX Data Governance Programme & Tooling",
  },
  {
    num: "5",
    concern: (
      <>
        We want to <strong>deploy AI but don&rsquo;t know where to start</strong> or how to make it production-safe.
      </>
    ),
    solution: "EADX AI Proof of Concept & Production Deployment",
  },
];


export default function DataAndAiPage() {
  return (
    <main>
      {/* Section 1 — Hero */}
      <section className="relative flex h-screen items-end overflow-hidden pb-16">
        <Image
          src="/services/data-and-ai.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 w-full max-w-8xl px-8 lg:px-12">
          <h1 className="max-w-8xl text-4xl font-bold leading-[100%] tracking-tight text-white sm:text-5xl lg:text-[72px]">
            Turn your data into a<br /> competitive advantage
          </h1>
          <p className="mt-8 max-w-5xl text-lg font-medium leading-[160%] text-white/80 sm:text-xl lg:text-[28px]">
            We help enterprises build the data foundations and AI capabilities
            they need to move faster, decide smarter, and grow with confidence.
          </p>
        </div>

        <ScrollIndicator target="dai-definition" />
      </section>

      {/* Section 2 — Definition */}
      <section id="dai-definition" className="bg-white dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-8 py-24 lg:px-12 lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="flex items-center justify-center">
              <Image
                src="/eadx-avatar.svg"
                alt="EADX"
                width={280}
                height={280}
                className="h-auto w-full max-w-[280px]"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl lg:text-[48px]">
                Data &amp; AI Services
              </h2>
              <p className="mt-8 text-lg font-medium leading-relaxed text-zinc-700 dark:text-zinc-300 lg:text-[20px]">
                is about making the right information available to the right
                person &mdash; or machine &mdash; at the right moment. With deep
                expertise in data engineering, governance, business intelligence,
                and applied AI, EADX helps you build a trustworthy data estate
                and deploy AI that actually delivers results in production.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Why high-quality data */}
      <section className="bg-zinc-100 dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl px-8 py-24 lg:px-12 lg:py-32">
          <h2 className="max-w-5xl text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl lg:text-[40px] lg:leading-snug">
            Why high-quality data is the prerequisite for successful AI
          </h2>
          <p className="mt-8 max-w-6xl text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            Every AI model is only as good as the data it is trained on and the
            data it operates against. Before investing in AI, organisations must
            be honest about the state of their data estate.
          </p>
          <ul className="mt-10 space-y-6 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            {whyDataPoints.map((point) => (
              <li key={point.title} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent dark:bg-accent-light" />
                <span>
                  <strong className="font-bold text-zinc-950 dark:text-white">
                    {point.title}
                  </strong>{" "}
                  &mdash; {point.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 4 — Capability Stack */}
      <section className="bg-white dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-8 py-24 lg:px-12 lg:py-32">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl lg:text-[40px]">
            Our Data &amp; AI service landscape
          </h2>

          <div className="mt-10 rounded-2xl bg-[#80D6F21F] p-4 dark:bg-zinc-800/50 sm:p-8">
            <p className="mb-6 text-sm font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-300">
              EADX DATA &amp; AI CAPABILITY STACK
            </p>
            <div className="relative hidden sm:block" style={{ paddingLeft: "110px" }}>
              {/* Vertical dashed line from first dot center to last dot center.
                  top/bottom = 10% ≈ half of one row (1/5 = 20%, half = 10%) */}
              <div
                className="absolute border-l border-solid border-accent/40 dark:border-accent-light/40"
                style={{ left: "9px", top: "14%", bottom: "10%" }}
              />

              {/* Arrows between tiers — positioned absolutely on the line */}
              {[1, 2, 3, 4].map((i) => (
                <svg
                  key={i}
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  className="absolute text-accent/40 dark:text-accent-light/40"
                  style={{ left: "3px", top: `${i * 20 + 3}%`, transform: "translateY(-50%)" }}
                >
                  <path d="M6 0L12 8H0L6 0Z" fill="currentColor" />
                </svg>
              ))}

              <div className="flex flex-col gap-3">
                {capabilityStack.map((row) => (
                  <div key={row.tier} className="relative flex items-center gap-[10px]">
                    {/* Dot + label positioned on the line */}
                    <div className="absolute flex items-center gap-2" style={{ left: "-110px" }}>
                      <span className="relative z-10 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-white dark:border-accent-light dark:bg-zinc-950">
                        <span className="h-2.5 w-2.5 rounded-full bg-accent dark:bg-accent-light" />
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-accent dark:text-accent-light sm:whitespace-nowrap">
                        {row.tier}
                      </span>
                    </div>

                    {/* Cards */}
                    <div className="flex flex-1 flex-wrap gap-[10px]">
                      {row.items.map((item) => (
                        <div
                          key={item.title}
                          className="min-w-[180px] flex-1 rounded-xl border-[2px] border-[#008000] bg-white p-5 dark:bg-zinc-800"
                        >
                          <h3 className="text-center text-base font-bold text-zinc-950 dark:text-zinc-50">
                            {item.title}
                          </h3>
                          <div className="mt-3 flex flex-wrap justify-center gap-[10px]">
                            {item.subs.map((sub) => (
                              <span
                                key={sub}
                                className="inline-block rounded-lg border border-[#0000001F] px-4 py-1.5 text-sm text-zinc-600 dark:border-zinc-600 dark:text-zinc-400"
                              >
                                {sub}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile: no timeline */}
            <div className="flex flex-col gap-4 sm:hidden">
              {capabilityStack.map((row) => (
                <div key={row.tier}>
                  <div className="mb-2 flex items-center gap-2">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-accent dark:border-accent-light">
                      <span className="h-2.5 w-2.5 rounded-full bg-accent dark:bg-accent-light" />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-accent dark:text-accent-light">
                      {row.tier}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-[10px]">
                    {row.items.map((item) => (
                      <div
                        key={item.title}
                        className="min-w-[180px] flex-1 rounded-xl border-[2px] border-[#008000] bg-white p-5 dark:bg-zinc-800"
                      >
                        <h3 className="text-center text-base font-bold text-zinc-950 dark:text-zinc-50">
                          {item.title}
                        </h3>
                        <div className="mt-3 flex flex-wrap justify-center gap-[10px]">
                          {item.subs.map((sub) => (
                            <span
                              key={sub}
                              className="inline-block rounded-lg border border-[#0000001F] px-4 py-1.5 text-sm text-zinc-600 dark:border-zinc-600 dark:text-zinc-400"
                            >
                              {sub}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — What We Deliver */}
      <section className="bg-zinc-100 dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl px-8 py-24 lg:px-12 lg:py-32">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl lg:text-[40px]">
            What we deliver
          </h2>
          <p className="mt-6 max-w-6xl text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            Each service is delivered by specialists with real hands-on
            experience &mdash; not by generalists backed by AI-generated
            content. We bring documented track records at enterprise scale.
          </p>
          <ul className="mt-10 space-y-8 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            {deliverables.map((item) => (
              <li key={item.title} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent dark:bg-accent-light" />
                <div>
                  <span>
                    <strong className="font-bold text-zinc-950 dark:text-white">
                      {item.title}
                    </strong>{" "}
                    &mdash; {item.description}
                  </span>
                  <p className="mt-2 text-[14px] font-semibold italic leading-[160%] text-accent dark:text-accent-light">
                    {item.tags.join(" \u00b7 ")}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 6 — Real Expertise */}
      <section className="bg-white dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-8 py-24 lg:px-12 lg:py-32">
          <h2 className="text-[32px] font-bold leading-[110%] tracking-normal text-zinc-950 dark:text-zinc-50 sm:text-[40px]">
            Real expertise. Real experience.
          </h2>
          <p className="mt-8 max-w-6xl text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            At EADX, every Data &amp; AI engagement is staffed by senior
            practitioners with hands-on, enterprise-scale experience. We do not
            pair a &ldquo;talking head&rdquo; with a junior delivery team. Each
            person on your project has directly built, operated, and improved the
            types of systems we are proposing.
          </p>

          <div className="mt-10 grid sm:grid-cols-2">
            {expertiseColumns.map((col) => (
              <div
                key={col.title}
                className="mb-8 border-l-4 border-accent px-6 dark:border-accent-light sm:px-8"
              >
                <h3 className="text-[22px] font-bold uppercase leading-none text-zinc-900 dark:text-zinc-100">
                  {col.title}
                </h3>
                <ul className="mt-3 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                  {col.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-10 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            At EADX, each of our clients is of paramount importance to us, and
            all team members bring years of real-world Data &amp; AI experience
            to the project.
          </p>
        </div>
      </section>

      {/* Section 7 — Client Stories */}
      <section className="bg-zinc-100 dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl px-8 py-24 lg:px-12 lg:py-32">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl lg:text-[40px]">
            Client stories &mdash; What our clients have achieved
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Three anonymised examples from recent engagements &mdash; across
            financial services, manufacturing, and telecommunications.
          </p>

          <div className="mt-10 space-y-16">
            {clientStories.map((story) => (
              <div
                key={story.title}
                className="relative mt-6 rounded-xl bg-white dark:bg-zinc-800"
              >
                <div className="absolute -top-6 left-8 inline-flex items-center rounded-[16px] border-[6px] border-zinc-100 bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-zinc-700 dark:border-zinc-900 dark:bg-zinc-800 dark:text-zinc-300">
                  {story.category}
                </div>
                <div className="p-8 pt-10 pb-0">
                  <h3 className="mt-3 text-xl font-bold text-zinc-950 dark:text-zinc-50">
                    {story.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {story.description}
                  </p>
                </div>
                <hr className="mt-4 border-zinc-200 dark:border-zinc-700" />
                <div className="px-8 py-4">
                  <p className="text-sm font-medium italic text-accent dark:text-accent-light">
                    {story.result}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8 — Solving Concerns Table */}
      <section className="bg-white dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-8 pt-24 pb-0 lg:px-12 lg:pt-32 lg:pb-0">
          <h2 className="mb-10 text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl lg:text-[40px]">
            Solving your top Data &amp; AI concerns
          </h2>
          <div className="overflow-x-auto rounded-xl">
            <table className="w-full min-w-[600px] text-left">
              <thead>
                <tr className="bg-accent text-white">
                  <th className="rounded-tl-xl border-r border-white/20 px-4 py-4 text-lg font-bold w-12">
                    #
                  </th>
                  <th className="border-r border-white/20 px-4 py-4 text-lg font-bold">
                    Main Concern
                  </th>
                  <th className="rounded-tr-xl px-4 py-4 text-lg font-bold">
                    EADX Solution
                  </th>
                </tr>
              </thead>
              <tbody>
                {concerns.map((row, idx) => (
                  <tr
                    key={row.num}
                    className={`border-b border-zinc-200 last:border-b-0 dark:border-zinc-600 ${
                      idx % 2 === 0
                        ? "bg-white dark:bg-zinc-800"
                        : "bg-zinc-50 dark:bg-zinc-700"
                    }`}
                  >
                    <td className="border-r border-zinc-200 px-4 py-5 text-lg font-bold text-zinc-950 dark:border-zinc-600 dark:text-zinc-50 align-middle text-center">
                      {row.num}
                    </td>
                    <td className="border-r border-zinc-200 px-4 py-5 text-base text-zinc-700 dark:border-zinc-600 dark:text-zinc-300">
                      {row.concern}
                    </td>
                    <td className="px-4 py-5 text-base text-zinc-700 dark:text-zinc-300">
                      {row.solution}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <ContactSection origin="Data & AI" hideSubtitle className="!pt-0" />
    </main>
  );
}

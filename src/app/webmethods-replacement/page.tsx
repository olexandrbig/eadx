import type { Metadata } from "next";
import Image from "next/image";
import { ContactSection } from "@/components/contact-section";

export const metadata: Metadata = {
  title: "webMethods Replacement - EADX Viva",
  description:
    "Simplify and modernize your webMethods integration platform with EADX Viva. Reduce costs by up to 80% with AI-powered migration to Java microservices.",
};

const comparisonRows = [
  ["Integration Server", "Spring / Quarkus Server"],
  ["Flow Language", "Java"],
  ["Flow Operations (Loop, Sequence ...)", "Java Commands"],
  ["WmPublic, Wm*", "Java Framework"],
  ["Adapters (JDBC, Flat File, SAP ...)", "Camel Adapter"],
  ["Broker / Universal Messaging", "Kafka"],
  ["Scheduler", "Cron Scheduler"],
  ["Transaction management", "Transaction Management"],
  ["Logging and Monitor", "Viva Monitor (OpenSearch)"],
  ["Versioning", "Github, ..."],
  ["CI / CD", "Argo, GitHub Actions, ..."],
];

const migrationSteps = [
  {
    num: 1,
    title: "WORKSHOP",
    items: [
      "Analyze current situation",
      "Develop target model",
      "Create plan",
      "Estimate efforts",
    ],
    deliverables: ["Est. Savings Report", "Migration Project Plan"],
  },
  {
    num: 2,
    title: "PROOF OF VALUE",
    items: ["Migration sample interface to validate low cost and effort"],
    deliverables: ["Hands-on Experience", "1st migrated Interface"],
  },
  {
    num: 3,
    title: "MIGRATION",
    items: [
      "Migrate all interfaces",
      "Automated migration and testing ensures stability",
    ],
    deliverables: [
      "Drastic cost reduction",
      "Operational Excellence",
      "High Performance",
      "Secure platform",
    ],
  },
];

function FlowArrow() {
  return (
    <>
      {/* Horizontal arrow on desktop */}
      <svg
        width="48"
        height="16"
        viewBox="0 0 48 16"
        fill="none"
        className="hidden shrink-0 lg:block"
      >
        <line x1="0" y1="8" x2="40" y2="8" stroke="#005774" strokeWidth="1.5" />
        <path d="M38 3l7 5-7 5" stroke="#005774" strokeWidth="1.5" fill="none" />
      </svg>
      {/* Vertical arrow on mobile */}
      <svg
        width="16"
        height="48"
        viewBox="0 0 16 48"
        fill="none"
        className="shrink-0 lg:hidden"
      >
        <line x1="8" y1="0" x2="8" y2="40" stroke="#005774" strokeWidth="1.5" />
        <path d="M3 38l5 7 5-7" stroke="#005774" strokeWidth="1.5" fill="none" />
      </svg>
    </>
  );
}

export default function VivaPage() {
  return (
    <main>
      {/* Section 1 — Challenges */}
      <section className="bg-white pt-32 dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-8 py-16 lg:px-12 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-accent dark:text-accent-light">
                Viva
              </p>
              <h1 className="mt-3 text-3xl font-normal leading-tight tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl lg:text-[40px] lg:leading-snug">
                Common challenges of high{" "}
                <strong className="font-bold">cost and operational risk</strong>{" "}
                for webMethods Platform users
              </h1>
              <p className="mt-6 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                Organisations relying on webMethods for enterprise integration
                face a convergence of pressures:
              </p>
              <ul className="mt-3 space-y-3 pl-4 text-sm text-zinc-700 dark:text-zinc-300">
                {[
                  "Significant licence costs",
                  "Significant operations costs (compute, service)",
                  "Overhead from constant upgrades and support",
                  "Growing architectural complexity (ESB, webMethods.io, SaaS, WhIP)",
                  "Lacking new capabilities and innovation",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                Transitioning to a modern, vendor-independent integration
                platform enables enterprises to substantially{" "}
                <strong className="font-semibold text-zinc-950 dark:text-zinc-50">
                  reduce total cost of ownership
                </strong>
                , eliminate vendor dependency / lock-in, and establish a more
                resilient, future-proof and innovative foundation taking
                advantage of growing AI potential in the integration space.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/viva-cogs.svg"
                alt="Integration gears"
                width={400}
                height={400}
                className="h-auto w-full max-w-[400px] dark:brightness-0 dark:invert"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Cost Reduction */}
      <section className="bg-zinc-100 dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl px-8 py-24 lg:px-12 lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Image
              src="/viva-cost-reduction.png"
              alt="Cost Reduction chart: webMethods ~1200K USD vs Modern Alternative ~240K USD — 80% down"
              width={800}
              height={800}
              className="w-full rounded-xl"
            />
            <div>
              <p className="text-xl font-medium leading-relaxed text-zinc-700 dark:text-zinc-300 lg:text-2xl">
                The cost of operating an enterprise integration platform can be
                decreased significantly by removing additional license capacity
                costs (CapEx) and lowering support and operations costs (OpEx).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Viva solution */}
      <section className="bg-white dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-8 py-24 lg:px-12 lg:py-32">
          <h2 className="max-w-5xl text-3xl font-bold leading-tight tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl lg:text-[40px] lg:leading-snug">
            Simplify and modernize your integration platform for{" "}
            <strong className="font-bold">
              lower cost and ease of operations
            </strong>{" "}
            with EADX Viva
          </h2>
          <p className="mt-6 max-w-4xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            <strong className="font-semibold text-zinc-950 dark:text-zinc-50">
              EADX Viva
            </strong>{" "}
            is our AI powered migration solution that autoconverts your
            webMethods Integration Server into a regular Java server, where
            integration flows and adapters are translated to Apache Camel and
            Java based components:
          </p>

          {/* Flow diagram */}
          <div className="mt-16 flex flex-col items-center lg:flex-row lg:items-stretch">
            {/* webMethods box */}
            <div className="flex h-48 w-full items-center justify-center rounded-xl bg-accent p-8 lg:h-56 lg:flex-[1.4]">
              <span className="text-2xl font-bold text-white">webMethods</span>
            </div>
            {/* Arrow */}
            <div className="flex items-center justify-center py-1 lg:py-0">
              <FlowArrow />
            </div>
            {/* Viva box */}
            <div className="flex h-48 w-full flex-col items-center justify-center rounded-xl border-2 border-accent bg-white p-8 dark:border-accent-light dark:bg-zinc-950 lg:h-56 lg:flex-[0.8]">
              <span className="text-2xl font-bold text-accent dark:text-accent-light">
                Viva
              </span>
              <span className="mt-2 text-center text-sm text-accent dark:text-accent-light">
                AI powered
                <br />
                automatic transformation
              </span>
            </div>
            {/* Arrow */}
            <div className="flex items-center justify-center py-1 lg:py-0">
              <FlowArrow />
            </div>
            {/* Java Microservices box */}
            <div className="flex h-48 w-full items-center justify-center rounded-xl bg-accent-light p-8 lg:h-56 lg:flex-[1.4]">
              <span className="text-2xl font-bold text-zinc-950">
                Java Microservices
              </span>
            </div>
          </div>

          <p className="mt-12 max-w-5xl text-lg font-medium leading-relaxed text-zinc-700 dark:text-zinc-300 lg:text-xl">
            The migration includes all components of the webMethods platform
            including messaging. Furthermore, the migration to a modern stack
            allows users to benefit from state of the art testing and CI/CD
            technologies and leverage modern runtime platforms (On-Premise,
            Cloud, Kubernetes, ...)
          </p>
        </div>
      </section>

      {/* Section 4 — Tech comparison table */}
      <section className="bg-zinc-100 dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl px-8 py-24 lg:px-12 lg:py-32">
          <div className="overflow-x-auto rounded-2xl bg-white p-8 dark:bg-zinc-800 lg:p-12">
            <table className="w-full min-w-[500px] text-left">
              <thead>
                <tr>
                  <th className="px-4 pb-10 text-2xl font-bold text-zinc-950 dark:text-zinc-50 lg:text-3xl">
                    webMethods
                  </th>
                  <th className="px-4 pb-10 text-2xl font-bold text-zinc-950 dark:text-zinc-50 lg:text-3xl">
                    Viva Java Microservices
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map(([wm, viva], i) => {
                  const isLast2 = i >= comparisonRows.length - 2;
                  return (
                    <tr
                      key={wm}
                      className={
                        i % 2 === 0
                          ? "bg-sky-50 dark:bg-sky-950/30"
                          : ""
                      }
                    >
                      <td
                        className={`px-4 py-3.5 text-base ${
                          isLast2
                            ? "text-zinc-400 dark:text-zinc-500"
                            : "text-zinc-700 dark:text-zinc-300"
                        }`}
                      >
                        {wm}
                      </td>
                      <td className="px-4 py-3.5 text-base text-zinc-950 dark:text-zinc-50">
                        {viva}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 5 — Performance */}
      <section className="bg-white dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-8 py-24 lg:px-12 lg:py-32">
          <h2 className="max-w-5xl text-3xl font-bold leading-tight tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl lg:text-[40px] lg:leading-snug">
            Benefit from{" "}
            <strong className="font-bold">
              high performance and scalability
            </strong>{" "}
            through use of modern technology
          </h2>
          <p className="mt-6 max-w-5xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            webMethods&apos;s internal architecture (flow execution engine) is
            more than challenged to match the performance requirements of
            today&apos;s AI driven workflows. Use highly optimized Java code to
            ensure your enterprise meets the increasing performance requirements
            while keeping your run costs under control.
          </p>

          <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-xl font-medium leading-relaxed text-zinc-700 dark:text-zinc-300 lg:text-2xl">
                By migration webMethods Integration Server flow code to native
                Java, your integrations experience 8 &ndash; 15 fold increase in
                performance and scalability
              </p>
            </div>
            <Image
              src="/viva-performance.png"
              alt="Performance Improvement chart: webMethods 60s vs Java Microservices 5.5s"
              width={774}
              height={588}
              className="w-full rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* Section 6 — Migration approach */}
      <section className="bg-zinc-100 dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl px-8 py-24 lg:px-12 lg:py-32">
          <h2 className="max-w-5xl text-3xl font-bold leading-tight tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl lg:text-[40px] lg:leading-snug">
            Modernize your integration platform using a risk averse{" "}
            <strong className="font-bold">structured migration approach</strong>
          </h2>
          <p className="mt-6 max-w-5xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            In addition to Viva&apos;s auto conversion AI, EADX&apos;s
            structured migration approach further reduces migration risk by
            leveraging our decades of webMethods team experience to migrate to a
            modern integration platform and substantially save cost with{" "}
            <strong className="font-semibold text-zinc-950 dark:text-zinc-50">
              minimal risk.
            </strong>
          </p>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {migrationSteps.map((step) => (
              <div
                key={step.num}
                className="relative mt-8 flex flex-col rounded-2xl bg-white pt-10 dark:bg-zinc-800"
              >
                {/* Number circle — centered on top edge */}
                <div className="absolute -top-8 left-8 flex h-16 w-16 items-center justify-center rounded-full border-[6px] border-zinc-100 bg-white text-3xl font-light text-zinc-400 dark:border-zinc-900 dark:bg-zinc-800 dark:text-zinc-500">
                  {step.num}
                </div>
                <div className="flex flex-1 flex-col px-8 pb-8">
                  <h3 className="text-xl font-bold tracking-wide text-accent dark:text-accent-light">
                    {step.title}
                  </h3>
                  <ul className="mt-4 flex-1 space-y-2 text-base text-zinc-700 dark:text-zinc-300">
                    {step.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  {/* Deliverables */}
                  <div className="mt-6 space-y-2 rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-600 dark:bg-zinc-700/50">
                    {step.deliverables.map((d) => (
                      <div
                        key={d}
                        className="flex items-center gap-2 text-sm text-accent dark:text-accent-light"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="#16a34a"
                          className="shrink-0"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                        {d}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 — CTA + Contact */}
      <section className="bg-white dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-8 pt-24 lg:px-12 lg:pt-32">
          <h2 className="max-w-4xl text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl lg:text-[40px]">
            Get started with{" "}
            <strong className="font-bold">
              free migration assessment consultation
            </strong>
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            We invite you to take advantage of your free migration assessment
            workshop to jointly discuss and create a dependable plan to move to a
            highly cost efficient modern integration platform.
          </p>
        </div>
      </section>
      <ContactSection origin="Viva" hideSubtitle hideHeading />
    </main>
  );
}

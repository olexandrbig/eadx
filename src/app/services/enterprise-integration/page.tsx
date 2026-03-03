import type { Metadata } from "next";
import Image from "next/image";
import { ScrollIndicator } from "@/components/scroll-indicator";
import { ContactSection } from "@/components/contact-section";

export const metadata: Metadata = {
  title: "Enterprise Integration",
  description:
    "Transform operational efficiency into strategic advantage. We make your Enterprise IT systems work together as one with our leading enterprise integration services.",
};

const concerns = [
  {
    num: "1",
    concern:
      "Is EI implemented cost-efficiently and how can cost be decreased?",
    boldConcern: ["cost", "decreased"],
    solution: "EADX cost efficiency assessment & acceleration plan",
  },
  {
    num: "2",
    concern:
      "Is EI well implemented. Where do we stand and is it ready to enable my AI initiatives?",
    boldConcern: ["enable my AI initiatives"],
    solution: "EADX maturity assessment & acceleration plan",
  },
  {
    num: "3",
    concern:
      "I need to develop and/or operate integrations in a cost-efficient way. How?",
    boldConcern: ["develop and/or operate integrations"],
    solution: "EADX integration development & operation services",
  },
  {
    num: "4",
    concern: "My EI is suffering from complexity and doesn\u2019t scale",
    boldConcern: ["suffering from complexity"],
    solution: "EADX governance and guidance services",
  },
  {
    num: "5",
    concern: "What integration platform shall I choose?",
    boldConcern: ["integration platform"],
    solution: "EADX integration platform selection process",
  },
];

function ConcernText({
  text,
  boldPhrases,
}: {
  text: string;
  boldPhrases: string[];
}) {
  let result = text;
  const parts: (string | { bold: string })[] = [];
  let remaining = result;

  for (const phrase of boldPhrases) {
    const idx = remaining.toLowerCase().indexOf(phrase.toLowerCase());
    if (idx !== -1) {
      if (idx > 0) parts.push(remaining.slice(0, idx));
      parts.push({ bold: remaining.slice(idx, idx + phrase.length) });
      remaining = remaining.slice(idx + phrase.length);
    }
  }
  if (remaining) parts.push(remaining);

  return (
    <>
      {parts.map((p, i) =>
        typeof p === "string" ? (
          <span key={i}>{p}</span>
        ) : (
          <strong key={i} className="font-bold">
            {p.bold}
          </strong>
        ),
      )}
    </>
  );
}

export default function EnterpriseIntegrationPage() {
  return (
    <main>
      {/* Section 1 — Hero */}
      <section className="relative flex h-screen items-end overflow-hidden pb-16">
        <Image
          src="/services/enterprise-integration.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 w-full max-w-8xl px-8 lg:px-12">
          <h1 className="max-w-7xl text-4xl font-bold leading-[100%] tracking-tight text-white sm:text-5xl lg:text-[72px]">
            Transform operational efficiency into strategic advantage
          </h1>
          <p className="mt-8 max-w-4xl text-lg font-medium leading-[160%] text-white/80 sm:text-xl lg:text-[28px]">
            We make your Enterprise IT systems work together as one with our
            leading enterprise integration services
          </p>
        </div>

        <ScrollIndicator target="ei-definition" />
      </section>

      {/* Section 2 — Definition */}
      <section id="ei-definition" className="bg-white dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-8 py-24 lg:px-12 lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="flex items-center justify-center">
              <Image
                src="/v-01-eadx-logo.svg"
                alt="EADX"
                width={312}
                height={371}
                className="h-auto w-full max-w-[312px] dark:hidden"
              />
              <Image
                src="/v-01-eadx-logo-negative.svg"
                alt="EADX"
                width={312}
                height={371}
                className="hidden h-auto w-full max-w-[312px] dark:block"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl lg:text-[48px]">
                Enterprise Integration
              </h2>
              <p className="mt-8 text-lg font-medium leading-relaxed text-zinc-700 dark:text-zinc-300 lg:text-[20px]">
                is the seamless, real-time interaction and exchange of data
                between enterprise applications and one of the key success
                factors for the successful digitalization of corporations. With
                our decades long experience, we help you establish a
                high-performance enterprise integration that empowers your
                business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Bill Gates Quote */}
      <section className="bg-zinc-100 dark:bg-zinc-900">
        <div className="mx-auto max-w-5xl px-8 py-24 lg:px-12 lg:py-32">
          <figure className="text-center">
            <blockquote>
              <p className="text-2xl font-bold leading-snug tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-3xl lg:text-[40px] lg:leading-snug">
                &ldquo; Seamless integration of business processes and systems is
                the foundation of a unified, high-performing enterprise.&rdquo;
              </p>
            </blockquote>
            <figcaption className="relative mt-8 inline-block rounded-lg bg-white px-6 py-3 text-base font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
              <span className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 bg-white dark:bg-zinc-800" />
              Bill Gates, Microsoft
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Section 4 — Business thrive */}
      <section className="bg-white dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-8 py-24 lg:px-12 lg:py-32">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl lg:text-[40px]">
            Enterprise Integration makes business thrive
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Enterprise Integration ensures many use cases such as:
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              "Real-time, organization-wide data empowers leaders to make faster, more informed decisions",
              "Employees gain instant access to the data they need, eliminating manual processes and boosting productivity",
              "Customers enjoy faster, more seamless experiences that drive satisfaction and loyalty",
              "Partners and collaborators benefit from frictionless interactions with your business",
            ].map((text) => (
              <div
                key={text}
                className="rounded-lg border-l-4 border-accent bg-zinc-100 p-6 text-lg text-zinc-700 dark:border-accent-light dark:bg-zinc-900 dark:text-zinc-300"
              >
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Age of AI */}
      <section className="bg-zinc-100 dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl px-8 py-24 lg:px-12 lg:py-32">
          <h2 className="max-w-4xl text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl lg:text-[40px] lg:leading-snug">
            In the age of AI, Enterprise Integration becomes a top priority
            again
          </h2>
          <p className="mt-8 max-w-5xl text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            The success of any AI initiative ultimately depends on one thing
            &mdash; data. Its quality, consistency, and real-time availability
            determine whether AI delivers value or falls short. Enterprise
            Integration is the connective layer that sources, transforms, and
            delivers that data at the speed AI requires. For IT leaders, building
            a modern, real-time integration architecture is no longer optional
            &mdash; it is the strategic foundation upon which every successful AI
            initiative is built.
          </p>
        </div>
      </section>

      {/* Section 6 — Components of EI Strategy */}
      <section className="bg-white dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-8 py-24 lg:px-12 lg:py-32">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl lg:text-[40px]">
            Components of an Enterprise Integration Strategy
          </h2>
          <p className="mt-8 max-w-5xl text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            Enterprise Integration brings together the technologies, processes,
            and teams needed to seamlessly connect data, applications, and
            devices across your entire IT landscape. It encompasses system
            interconnection, electronic data exchange, and distributed computing
            &mdash; creating a unified, well-connected environment that enables
            your organization to operate as one. A mature enterprise integration
            entails architecture, technology, governance processes and
            integration guidance.
          </p>
          <ul className="mt-10 space-y-6 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent dark:bg-accent-light" />
              <span>
                The <strong className="font-bold text-zinc-950 dark:text-white">integration architecture</strong>{" "}
                defines how systems, applications and partners connect and
                communicate with each other to exchange data.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent dark:bg-accent-light" />
              <span>
                The <strong className="font-bold text-zinc-950 dark:text-white">integration technology</strong> aka
                middleware performs the actual tasks of connecting, transporting,
                and transforming the data. Common vendors are Apache Camel, SAP
                CPI, WSO2, Mulesoft and IBM.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent dark:bg-accent-light" />
              <span>
                The <strong className="font-bold text-zinc-950 dark:text-white">integration governance</strong>{" "}
                establishes a set of policies, organizational structure, and
                rules that govern who is responsible for which part of the
                enterprise integration (who develops the architecture, performs
                the business requirement analysis, creates the solution design,
                develops and operates the integrations).
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent dark:bg-accent-light" />
              <span>
                The <strong className="font-bold text-zinc-950 dark:text-white">integration guidance</strong> ensures
                that any enterprise integration stakeholders can rely on a
                documentation that describes the architecture and implementation
                and operation procedures (manuals for architecture, development,
                testing and operations). Guidance is increasingly supported by AI
                tools.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Section 7 — Right skillset & team */}
      <section className="bg-zinc-100 dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl px-8 py-24 lg:px-12 lg:py-32">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl lg:text-[40px]">
            Enterprise Integration with the right skillset and team
          </h2>
          <p className="mt-8 max-w-5xl text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            When bringing in a partner for system integration, make sure they
            bring real experience to the table. More often unfortunately, a team
            is compiled with either a &ldquo;talking head&rdquo; that leaves
            technological details to his team and is leading the client in the
            wrong direction, or the background team is junior and trying to
            replace real expertise with AI. In both cases, disaster is imminent.
          </p>
          <div className="mt-10 rounded-lg border border-zinc-300 px-8 py-8 text-center dark:border-zinc-600">
            <p className="text-lg italic leading-relaxed text-zinc-700 dark:text-zinc-300">
              At EADX, each of our clients is of paramount importance to us,
              <br />
              and all team members bring years of real-world enterprise
              Integration to the project.
            </p>
          </div>
        </div>
      </section>

      {/* Section 8 — Use Cases & Risks */}
      <section className="bg-white dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-8 py-24 lg:px-12 lg:py-32">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl lg:text-[40px]">
            Enterprise Integration Use Cases and Risks
          </h2>
          <div className="mt-8 max-w-5xl space-y-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            <p>
              When it comes to integration, a deep understanding of integration
              to the source or target system is essential for a successful
              integration, especially if we are talking about a large enterprise
              application.
            </p>
            <p>
              Please make sure that the subject matter expert responsible for the
              integration to the respective system has real hands-on integration
              experience, not only application owner or developer experience. A
              lot of deep technical understanding in respect to integration to
              the specific system is necessary to do it successfully.
            </p>
            <p>
              The expert really needs to understand the internal behaviour of the
              system to ensure that the integration scales with the data volume
              and doesn&apos;t overload the systems. That is when understanding
              of very tiny but highly important details is of paramount
              importance of a successful integration. Here are a few examples:
            </p>
          </div>
          <ul className="mt-8 space-y-6 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent dark:bg-accent-light" />
              <span>
                When integrating to{" "}
                <strong className="font-bold text-zinc-950 dark:text-white">SALESFORCE</strong> as
                part of a{" "}
                <strong className="font-bold text-zinc-950 dark:text-white">
                  CRM legacy replacement
                </strong>{" "}
                or new CRM introduction, a deep understanding of the APIs
                &ndash; their pros and cons &ndash; and the working of the
                Salesforce database system is essential. There are various edge
                cases that make integration difficult if not handled properly by
                the integration and can impact operations and/or lead to data
                loss. Ensure your experts have implemented Salesforce integration
                at a large Salesforce implementation at scale.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent dark:bg-accent-light" />
              <span>
                When connecting to{" "}
                <strong className="font-bold text-zinc-950 dark:text-white">SAP S/4HANA</strong> as
                part of a{" "}
                <strong className="font-bold text-zinc-950 dark:text-white">
                  SAP ECC to S/4 migration
                </strong>
                , integration in both ways is usually required. Retrieving data
                from S/4HANA can be achieved in multiple ways but is ideally
                implemented as a real time feed while observing SAP license
                constraints. Furthermore, calling S/4 uses standard protocols and
                is accelerated using our SAP connectivity generator that
                incorporates important concerns such as resilience and
                scalability.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent dark:bg-accent-light" />
              <span>
                <strong className="font-bold text-zinc-950 dark:text-white">SUCCESSFACTORS</strong>{" "}
                integration is in high demand, and sourcing data from
                SuccessFactors as well as modifying data in SuccessFactors can be
                tricky. For instance, the bitemporal model and the huge data sets
                pose constraints while retrieving and querying data and need to
                be mitigated through a set of technical mechanisms, some known,
                some exotic.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Section 9 — IT leaders' concerns table */}
      <section className="bg-zinc-100 dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl px-8 py-24 lg:px-12 lg:py-32">
          <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl lg:text-[40px]">
            How EADX solves IT leaders&apos; top integration concerns
          </h2>
          <div className="overflow-x-auto rounded-xl bg-white dark:bg-zinc-800">
            <table className="w-full min-w-[600px] text-center">
              <thead>
                <tr className="border-b border-zinc-300 dark:border-zinc-600">
                  <th className="border-r border-zinc-200 px-4 py-4 text-lg font-bold text-zinc-950 dark:border-zinc-700 dark:text-zinc-50 w-12">
                    #
                  </th>
                  <th className="border-r border-zinc-200 px-4 py-4 text-lg font-bold text-zinc-950 dark:border-zinc-700 dark:text-zinc-50">
                    Main Concern
                  </th>
                  <th className="px-4 py-4 text-lg font-bold text-zinc-950 dark:text-zinc-50">
                    Solution
                  </th>
                </tr>
              </thead>
              <tbody>
                {concerns.map((row) => (
                  <tr
                    key={row.num}
                    className="border-b border-zinc-200 last:border-b-0 dark:border-zinc-700"
                  >
                    <td className="border-r border-zinc-200 px-4 py-5 text-lg font-bold text-zinc-950 dark:border-zinc-700 dark:text-zinc-50 align-middle">
                      {row.num}
                    </td>
                    <td className="border-r border-zinc-200 px-4 py-5 text-base text-zinc-700 dark:border-zinc-700 dark:text-zinc-300">
                      <ConcernText
                        text={row.concern}
                        boldPhrases={row.boldConcern}
                      />
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

      {/* Section 10 — CTA + Contact */}
      <section className="bg-white dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-8 pt-24 lg:px-12 lg:pt-32">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl lg:text-[40px]">
            Let&apos;s embark on your enterprise integration success journey
          </h2>
          <div className="mt-8 h-px bg-zinc-200 dark:bg-zinc-800" />
        </div>
      </section>
      <ContactSection origin="Enterprise Integration" hideSubtitle />
    </main>
  );
}

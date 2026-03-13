import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { CareerCultureAccordion } from "@/components/career-culture-accordion";

export const metadata: Metadata = {
  title: "Career",
  description:
    "Be part of #TeamEADX. Explore our culture, benefits, team events, and career opportunities.",
};

const cultureItems = [
  {
    title: "Strategic Alignment & Reflection Meetings",
    content:
      "Several times a year, we come together to reflect on our projects, review architectural decisions, and align on company direction. We openly discuss what worked, what didn't, and how we raise the bar - together.",
  },
  {
    title: "Knowledge Sharing & Technical Deep Dives",
    content:
      "We make time for practical exchange across teams so expertise is documented, challenged, and shared instead of staying isolated.",
  },
  {
    title: "Certification & Structured Growth",
    content:
      "We support long-term development through certification paths, learning plans, and clear conversations about how your scope evolves.",
  },
  {
    title: "Team Buildings & Shared Experiences",
    content:
      "Shared time outside delivery matters. We invest in experiences that strengthen trust and make collaboration easier when the work gets hard.",
  },
  {
    title: "Networking & Industry Engagement",
    content:
      "We stay connected to the broader market through partner interactions, community participation, and regular exposure to new ideas.",
  },
  {
    title: "Ownership & Trust",
    content:
      "Responsibility is expected and supported. People are trusted to take initiative, communicate clearly, and follow through.",
  },
  {
    title: "Be a Leader",
    content:
      "Leadership at EADX is not tied to hierarchy alone. We value people who guide others through expertise, reliability, and example.",
  },
];

const offerings = [
  {
    title: "A Place Where Everyone Matters",
    description:
      "We believe great systems are built by people who feel valued. At EADX, you are encouraged to be authentic, supported in your growth, and recognized for the impact you create.",
    icon: "/career/icons/everyone-matters.svg",
  },
  {
    title: "Competitive Salary",
    description:
      "We offer a competitive compensation package aligned with your expertise, responsibility, and market standards. High performance and real impact are recognized accordingly.",
    icon: "/career/icons/competitive-salary.svg",
  },
  {
    title: "Individual Annual Bonuses",
    description:
      "Performance matters. We reward individual contribution and commitment through annual performance-based bonuses.",
    icon: "/career/icons/individual-annual-bonuses.svg",
  },
  {
    title: "Annual Performance Reviews",
    description:
      "Growth should be structured. Through annual performance review sessions, we align on your development path, responsibilities, and salary progression.",
    icon: "/career/icons/annual-performance-reviews.svg",
  },
  {
    title: "Fully Covered Additional Medical Insurance",
    description:
      "Your health matters. We provide fully covered additional medical insurance to ensure you feel secure and supported.",
    icon: "/career/icons/covered-medical-insurance.svg",
  },
  {
    title: "Fully Covered Sports Card",
    description:
      "We encourage an active lifestyle. Your sports card is fully covered so you can stay healthy and energized.",
    icon: "/career/icons/sports-card.svg",
  },
  {
    title: "Food Vouchers",
    description:
      "Everyday support that makes a difference. We provide monthly food vouchers as part of your compensation package.",
    icon: "/career/icons/food-vouchers.svg",
  },
  {
    title: "Employee Discounts",
    description:
      "Through our partner network, you gain access to exclusive employee discounts and preferred offers.",
    icon: "/career/icons/employee-discounts.svg",
  },
  {
    title: "Flexibility & Hybrid Work",
    description:
      "We value responsibility over presence. You have the flexibility to work from home and organize your schedule in alignment with your team and project needs.",
    icon: "/career/icons/flexibility-hybrid-work.svg",
  },
  {
    title: "Social Commitment",
    description:
      "We believe success should be shared. We support social initiatives and encourage participation in charitable and community-driven activities.",
    icon: "/career/icons/social-commitment.svg",
  },
  {
    title: "Further Development",
    description:
      "We invest in long-term growth. In addition to our certification program, we support further professional development and continuous learning opportunities.",
    icon: "/career/icons/further-development.svg",
  },
];

const events = [
  { src: "/career/event-city-view.png", alt: "City view from team event", width: 512, height: 760 },
  { src: "/career/event-team-lunch.png", alt: "Team lunch", width: 760, height: 760 },
  { src: "/career/event-golf-view.png", alt: "Landscape at team event", width: 760, height: 760 },
  { src: "/career/event-hike.png", alt: "Team hiking event", width: 760, height: 760 },
  { src: "/career/event-barbecue.png", alt: "Barbecue at team event", width: 512, height: 760 },
];

export default function CareerPage() {
  return (
    <main className="bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      <section className="relative overflow-hidden bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 lg:h-screen lg:max-h-[960px] lg:min-h-[680px]">
        {/* Desktop hero image grid — absolutely positioned, fixed width */}
        <div className="pointer-events-none absolute right-0 top-20 bottom-0 z-0 hidden w-[560px] xl:block 2xl:right-12">
          {/* Top fade — starts at navbar bottom */}
          <div className="absolute inset-x-0 top-0 z-10 h-20 bg-gradient-to-b from-white via-white/70 to-transparent dark:from-zinc-950 dark:via-zinc-950/70" />
          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-white via-white/70 to-transparent dark:from-zinc-950 dark:via-zinc-950/70" />

          {/* 2-column brick layout with step offset — fills section height */}
          <div className="flex h-full gap-3 pr-4">
            {/* Left column — flex ratios: forest 330, team-greece 820, plane 394 */}
            <div className="flex w-1/2 flex-col gap-3">
              <div className="min-h-0 overflow-hidden rounded-[18px]" style={{ flex: '330 1 0%' }}>
                <Image src="/career/hero-forest.png" alt="Forest during team outing" width={616} height={330} className="h-full w-full object-cover" />
              </div>
              <div className="min-h-0 overflow-hidden rounded-[18px]" style={{ flex: '820 1 0%' }}>
                <Image src="/career/hero-team-greece.png" alt="EADX team in Greece" width={616} height={820} className="h-full w-full object-cover" priority />
              </div>
              <div className="min-h-0 overflow-hidden rounded-[18px]" style={{ flex: '394 1 0%' }}>
                <Image src="/career/hero-plane.png" alt="Traveling for team events" width={616} height={394} className="h-full w-full object-cover" />
              </div>
            </div>
            {/* Right column — offset down for brick effect, flex ratios: dinner 552, office-selfie 820, trees 172 */}
            <div className="flex w-1/2 flex-col gap-3">
              <div className="min-h-0 overflow-hidden rounded-[18px]" style={{ flex: '552 1 0%' }}>
                <Image src="/career/hero-dinner.png" alt="EADX team dinner" width={616} height={552} className="h-full w-full object-cover" />
              </div>
              <div className="min-h-0 overflow-hidden rounded-[18px]" style={{ flex: '820 1 0%' }}>
                <Image src="/career/hero-office-selfie.png" alt="Office collaboration at EADX" width={616} height={820} className="h-full w-full object-cover" priority />
              </div>
              <div className="min-h-0 overflow-hidden rounded-[18px]" style={{ flex: '172 1 0%' }}>
                <Image src="/career/hero-trees.png" alt="Trees during team outing" width={616} height={172} className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-[1728px] px-6 pb-10 pt-24 lg:px-0">
          <div className="flex flex-col justify-center lg:h-[calc(100vh-96px)] lg:max-h-[864px] lg:min-h-[584px] lg:pl-12 xl:mr-[580px]">
            <div className="max-w-4xl">
              <h1 className="text-[48px] font-semibold leading-[0.95] tracking-[-0.04em] text-zinc-900 dark:text-white sm:text-[64px] lg:text-[80px]">
                Be Part of
                <br />
                #TeamEADX
              </h1>
              <p className="mt-6 max-w-2xl text-[17px] leading-[1.45] text-zinc-600 dark:text-white/70 sm:text-[20px] lg:text-[23px]">
                Where integration, data, AI, and cloud expertise meet
                collaboration, trust, and shared ambition. We build high-impact
                systems — and we grow together while doing it.
              </p>
              <a
                href="#career-contact"
                className="mt-8 inline-flex h-[56px] items-center justify-center rounded-lg bg-accent px-10 text-[16px] font-semibold text-white transition-colors hover:bg-[#006d8e]"
              >
                Find Your New Job
              </a>
            </div>
          </div>

          {/* Mobile hero images — horizontal scroll */}
          <div className="mt-8 flex gap-3 overflow-x-auto pb-2 lg:hidden">
            {[
              { src: "/career/hero-team-greece.png", alt: "EADX team in Greece" },
              { src: "/career/hero-dinner.png", alt: "EADX team dinner" },
              { src: "/career/hero-office-selfie.png", alt: "Office collaboration at EADX" },
              { src: "/career/hero-plane.png", alt: "Traveling for team events" },
            ].map((img) => (
              <Image
                key={img.src}
                src={img.src}
                alt={img.alt}
                width={280}
                height={360}
                className="h-[280px] w-[220px] shrink-0 rounded-2xl object-cover sm:h-[340px] sm:w-[260px]"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-100 py-20 dark:bg-zinc-900 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <h2 className="text-4xl font-semibold leading-none tracking-[-0.03em] text-zinc-900 dark:text-zinc-50 sm:text-5xl lg:text-[56px]">
            Our culture
          </h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-12">
            <Image
              src="/career/culture-workshop.png"
              alt="Workshop session at EADX"
              width={760}
              height={760}
              className="h-auto w-full rounded-2xl object-cover"
              priority
            />
            <CareerCultureAccordion
              eyebrow="High Standards. Strong Bonds. Shared Ambition."
              eyebrowContent="Our culture is built around accountability, mutual respect, and a strong sense of shared direction. We invest in an environment where people can challenge ideas openly, support each other consistently, and grow while contributing to meaningful work."
              items={cultureItems}
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-zinc-950 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <h2 className="text-4xl font-semibold leading-none tracking-[-0.03em] text-zinc-900 dark:text-zinc-50 sm:text-5xl lg:text-[56px]">
            We Have a Lot to Offer
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {offerings.map((item) => (
              <article
                key={item.title}
                className="rounded-xl bg-zinc-100 p-6 dark:bg-zinc-800 lg:p-8"
              >
                <Image src={item.icon} alt="" width={48} height={48} className="h-12 w-12 dark:invert" />
                <h3 className="mt-6 text-xl font-bold leading-tight tracking-[-0.02em] text-zinc-900 dark:text-zinc-50 lg:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.5] text-zinc-500 dark:text-zinc-400">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-100 py-20 dark:bg-zinc-900 lg:py-24">
        <div className="mx-auto max-w-[1728px] overflow-hidden">
          <h2 className="px-6 text-center text-4xl font-bold leading-none tracking-[-0.03em] text-zinc-900 dark:text-zinc-50 sm:text-5xl lg:text-[64px]">
            Our Team Events Highlights
          </h2>
          <div className="mt-12 flex gap-4 overflow-x-auto px-6 pb-2 lg:hidden">
            {events.map((event) => (
              <Image
                key={event.src}
                src={event.src}
                alt={event.alt}
                width={event.width}
                height={event.height}
                className="h-[300px] w-[220px] shrink-0 rounded-2xl object-cover sm:h-[380px] sm:w-[280px]"
              />
            ))}
          </div>
          <div className="mt-12 hidden grid-cols-[0.67fr_1fr_1fr_1fr_0.67fr] gap-4 lg:grid xl:px-0">
            {events.map((event) => (
              <Image
                key={event.src}
                src={event.src}
                alt={event.alt}
                width={event.width}
                height={event.height}
                className="h-[480px] w-full rounded-2xl object-cover"
              />
            ))}
          </div>
        </div>
      </section>

      <section
        id="career-contact"
        className="relative overflow-hidden bg-white py-20 dark:bg-zinc-950 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <h2 className="text-4xl font-semibold leading-[0.96] tracking-[-0.03em] text-zinc-900 dark:text-zinc-50 sm:text-5xl lg:text-[56px]">
            Let&apos;s Build the Future — Together.
          </h2>
          <div className="mt-6 space-y-1 text-base leading-[1.6] text-zinc-600 dark:text-zinc-400 sm:text-lg lg:text-[19px]">
            <p>
              We&apos;re growing carefully and looking for people who want to
              grow with us.
            </p>
            <p>
              If you&apos;re driven by ownership, technical depth, and
              long-term ambition, EADX might be your next step.
            </p>
            <p>Send us your CV — and let&apos;s start the conversation.</p>
          </div>

          <div className="relative mt-10 lg:mt-12 lg:grid lg:grid-cols-[0.35fr_1fr]">
            {/* Decorative watermark — bottom-left */}
            <div className="pointer-events-none hidden items-end lg:flex">
              <Image
                src="/eadx-avatar.svg"
                alt=""
                width={300}
                height={300}
                className="mb-[-40px] ml-[-20px] h-auto w-[280px] opacity-100"
                aria-hidden="true"
              />
            </div>

            <ContactForm origin="Career" />
          </div>
        </div>
      </section>
    </main>
  );
}


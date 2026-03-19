import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { CareerCultureAccordion } from "@/components/career-culture-accordion";
import { HighlightsMarquee } from "@/components/highlights-marquee";
import { HeroVerticalMarquee } from "@/components/hero-vertical-marquee";

export const metadata: Metadata = {
  title: "Career",
  description:
    "Be part of #TeamEADX. Explore our culture, benefits, team events, and career opportunities.",
};

const cultureItems = [
  {
    title: "Strategic Alignment & Reflection Meetings",
    content:
      "Several times a year, we come together to reflect on our projects, review architectural decisions, and align on company direction. We openly discuss what worked, what didn't, and how we raise the bar — together.",
    image: "/career/culture/strategic-alignment-reflection-meetings.jpg",
  },
  {
    title: "Knowledge Sharing & Technical Deep Dives",
    content:
      "We regularly host internal sessions where engineers share real-world insights — from integration patterns and data platforms to AI use cases and cloud architectures. Experience is shared. Standards evolve. Everyone grows.",
    image: "/career/culture/knowledge-sharing-technical-deep-dives.jpg",
  },
  {
    title: "Certification & Structured Growth",
    content:
      "We invest in continuous professional development. Every team member has the responsibility to pass at least one certification per year — fully supported with both time and financial coverage. We don't just talk about growth. We enable it.",
    image: "/career/culture/certification-structured-growth.jpg",
  },
  {
    title: "Team Buildings & Shared Experiences",
    content:
      "We regularly organize team-building events and social gatherings to strengthen relationships beyond project work.\n\nThree times per year, we bring the entire team together in different international locations — combining strategic alignment, shared experiences, and genuine human connection.",
    image: "/career/culture/team-building-shared-experiences.jpg",
  },
  {
    title: "Networking & Industry Engagement",
    content:
      "We actively participate in networking events, conferences, and industry meetups — connecting with partners, clients, and even competitors.\n\nWe believe openness and collaboration within the ecosystem make us sharper, more informed, and future-ready.",
    image: "/career/culture/networking-industry-engagement.jpg",
  },
  {
    title: "Ownership & Trust",
    content:
      "We operate in a high-trust environment. Engineers are empowered to take responsibility, influence architectural decisions, and shape outcomes — without unnecessary hierarchy or micromanagement.",
    image: "/career/culture/ownership-and-trust.jpg",
  },
  {
    title: "Be a Leader",
    content:
      "Leadership at EADX means ownership and transparency.\n\nWe identify emerging leaders early and invest in their growth through continuous training, mentoring, and involvement in strategic discussions. Those who demonstrate technical depth, initiative, and responsibility are given space to lead — whether through architecture decisions, client engagement, or team guidance.\n\nOur leadership culture is open and collaborative. Decisions are not made behind closed doors but shaped through dialogue and shared expertise.\n\nWe grow leaders as we grow the company — deliberately, sustainably, and together.",
    image: "/career/culture/be-a-leader.jpg",
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

// Seeded shuffle for stable randomization across renders
function seededShuffle<T>(arr: T[], seed: number): T[] {
  const shuffled = [...arr];
  let s = seed;
  for (let i = shuffled.length - 1; i > 0; i--) {
    s = (s * 16807 + 0) % 2147483647;
    const j = s % (i + 1);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const allHighlights = Array.from({ length: 45 }, (_, i) => ({
  src: `/career/highlights/team-event-${String(i + 1).padStart(2, "0")}.jpg`,
  alt: `EADX team event highlight ${i + 1}`,
}));

const highlights = seededShuffle(allHighlights, 42);

function pinAt<T extends { src: string }>(arr: T[], src: string, index: number): T[] {
  const result = arr.filter((item) => item.src !== src);
  const item = arr.find((item) => item.src === src);
  if (item) result.splice(index, 0, item);
  return result;
}


let heroLeftBase = highlights.filter((_, i) => i % 2 === 0);
let heroRightBase = highlights.filter((_, i) => i % 2 === 1);

// Ensure team-event-45 is in the right group — if it's in left, swap it with team-event-07
const img45 = "/career/highlights/team-event-45.jpg";
const img07 = "/career/highlights/team-event-07.jpg";
if (heroLeftBase.some((img) => img.src === img45)) {
  const item45 = heroLeftBase.find((img) => img.src === img45)!;
  const item07 = heroRightBase.find((img) => img.src === img07)!;
  heroLeftBase = heroLeftBase.map((img) => (img.src === img45 ? item07 : img));
  heroRightBase = heroRightBase.map((img) => (img.src === img07 ? item45 : img));
}

// Pin team-event-43 as 2nd in left (index 1)
const heroLeft = pinAt(heroLeftBase, "/career/highlights/team-event-43.jpg", 1);
// Put team-event-45 where team-event-07 was (the visible 2nd position on right)
const heroRight = heroRightBase;

export default function CareerPage() {
  return (
    <main className="bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      <section className="relative overflow-hidden bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 lg:h-screen lg:max-h-[960px] lg:min-h-[680px]">
        {/* Desktop hero — 2 columns scrolling vertically in opposite directions */}
        <div className="pointer-events-none absolute right-0 top-20 bottom-0 z-0 hidden w-[560px] xl:block 2xl:right-12">
          <div className="absolute inset-x-0 top-0 z-10 h-20 bg-gradient-to-b from-white via-white/70 to-transparent dark:from-zinc-950 dark:via-zinc-950/70" />
          <div className="absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-white via-white/70 to-transparent dark:from-zinc-950 dark:via-zinc-950/70" />
          <HeroVerticalMarquee leftImages={heroLeft} rightImages={heroRight} />
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
            ].map((img, i) => (
              <Image
                key={img.src}
                src={img.src}
                alt={img.alt}
                width={280}
                height={360}
                className="h-[280px] w-[220px] shrink-0 rounded-2xl object-cover sm:h-[340px] sm:w-[260px]"
                priority={i === 0}
                fetchPriority={i === 0 ? "high" : "auto"}
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
            <CareerCultureAccordion
              eyebrow="High Standards. Strong Bonds. Shared Ambition."
              eyebrowContent="At EADX, our culture is shaped by how we collaborate, grow, and connect — internally and across the industry."
              eyebrowImage="/career/culture/high-standards-shared-ambition.jpg"
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
        <div className="mx-auto overflow-hidden">
          <h2 className="px-6 text-center text-4xl font-bold leading-none tracking-[-0.03em] text-zinc-900 dark:text-zinc-50 sm:text-5xl lg:text-[64px]">
            Our Team Events Highlights
          </h2>
          <div className="mt-12">
            <HighlightsMarquee images={highlights} />
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


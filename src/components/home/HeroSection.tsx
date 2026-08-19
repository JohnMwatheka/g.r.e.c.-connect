/* eslint-disable prettier/prettier */
//src/components/home/HeroSection.tsx
import { useEffect, useState } from "react";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Reveal } from "@/components/reveal";

import heroWorship from "@/assets/hero-worship.jpg";
import sanctuary from "@/assets/hero-1.jpg";
import choir from "@/assets/hero-2.jpg";
import baptism from "@/assets/hero-3.jpg";

const slides = [
  {
    src: heroWorship,
    alt: "G.R.E.C. congregation worshipping together with hands raised",
    badge: "The Lord's Fellowship Centre",
    title: "Welcome Home",
    subtitle: "Gospel Revival Evangelistic Church",
    description: "Experience God's love, grow in faith, and serve with purpose.",
  },
  {
    src: sanctuary,
    alt: "Congregation gathered in worship",
    badge: "You Belong Here",
    title: "A Place for You",
    subtitle: "Come as you are",
    description: "Whether it's your first time or you've been away, there is a seat and a family waiting for you.",
  },
  {
    src: choir,
    alt: "People lifting hands in praise",
    badge: "Hope for Every Season",
    title: "Find Strength Again",
    subtitle: "God is still writing your story",
    description: "In every season of life, His presence brings peace, healing, and renewed purpose.",
  },
  {
    src: baptism,
    alt: "Church family celebrating together",
    badge: "Faith • Family • Future",
    title: "Grow With Us",
    subtitle: "Together in Christ",
    description: "Join a community that prays with you, walks with you, and celebrates every step of your journey.",
  },
];

export function HeroSection() {
  const [current, setCurrent] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative isolate flex min-h-svh items-center overflow-hidden">
      {/* ========== MOBILE / SMALL SCREENS — single static image ========== */}
      <img
        src={heroWorship}
        alt={slides[0].alt}
        width={1920}
        height={1088}
        className="absolute inset-0 -z-20 size-full object-cover md:hidden"
      />

      {/* ========== DESKTOP — background carousel ========== */}
      <div className="absolute inset-0 -z-20 hidden md:block">
        {slides.map((s, i) => (
          <img
            key={s.src}
            src={s.src}
            alt={s.alt}
            width={1920}
            height={1088}
            className={`absolute inset-0 size-full object-cover transition-opacity duration-1000 ease-in-out ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* ========== OVERLAY ==========
          Completely hides background on the left → fully transparent on the right.
          On mobile we keep a stronger overall dark overlay for text readability.
      */}
      <div
        className="absolute inset-0 -z-10
          bg-linear-to-r
          from-black from-0%
          via-black/90 via-50%
          to-transparent to-100%
          md:from-black md:from-0%
          md:via-black/85 md:via-50%
          md:to-transparent md:to-100%
          max-md:bg-black/70"
      />

      {/* Content — text changes with the current slide */}
      <div className="shell relative z-10 pt-32 pb-16 text-primary-foreground">
        <Reveal className="max-w-3xl">
          <div
            key={current}
            className="animate-in fade-in duration-700"
          >
            <p className="inline-flex items-center gap-2 rounded-full bg-white text-blue-950 px-4 py-2 text-xs font-semibold tracking-[0.18em] uppercase">
              {slide.badge}
            </p>

            <h1 className="mt-6 font-display text-5xl leading-[1.05] font-bold sm:text-6xl lg:text-7xl">
              {slide.title}
            </h1>

            <p className="mt-4 font-display text-xl font-semibold text-primary-foreground/90 sm:text-2xl">
              {slide.subtitle}
            </p>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
              {slide.description}
            </p>
          </div>

          {/* CTAs stay constant */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#visit"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-destructive px-8 font-semibold text-destructive-foreground transition-transform duration-200 hover:scale-105"
            >
              Plan Your Visit <ArrowRight className="size-4" />
            </a>
            <a
              href="#sermons"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full px-8 font-semibold text-primary-foreground bg-blue-950"
            >
              <PlayCircle className="size-4" /> Watch Sermons
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
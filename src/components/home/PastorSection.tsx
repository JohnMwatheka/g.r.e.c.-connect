/* eslint-disable prettier/prettier */
//src/components/home/PastorSection.tsx
import { ArrowRight, Quote } from "lucide-react";
import { Reveal } from "@/components/reveal";

import pastorPortrait from "@/assets/pastor.jpg";

export function PastorSection() {
  return (
    <section className="section-y bg-surface">
      <div className="shell grid items-center gap-12 lg:grid-cols-[0.85fr_1fr] lg:gap-20">
        {/* ========== DESKTOP IMAGE (hidden on mobile) ========== */}
        <Reveal className="zoom-media hidden overflow-hidden rounded-3xl shadow-(--shadow-card) lg:block">
          <img
            src={pastorPortrait}
            alt="Bishop Regina K. Mohammed, Senior Pastor of G.R.E.C."
            loading="lazy"
            width={1024}
            height={1280}
            className="h-120 w-full object-cover lg:h-155"
          />
        </Reveal>

        {/* ========== CONTENT ========== */}
        <Reveal delay={120}>
          <p className="text-xs font-semibold tracking-[0.2em] text-destructive uppercase">
            Meet Our Bishop
          </p>

          <h2 className="mt-4 font-display text-4xl leading-tight font-bold sm:text-5xl">
            Bishop Regina K. Mohammed
          </h2>

          {/* ========== MOBILE ONLY — small circular image ========== */}
          <div className="mt-6 flex justify-start lg:hidden">
            <img
              src={pastorPortrait}
              alt="Bishop Regina K. Mohammed"
              loading="lazy"
              width={120}
              height={120}
              className="size-28 rounded-full object-cover shadow-md ring-4 ring-background"
            />
          </div>

          <Quote className="mt-8 size-8 text-sky" />

          <p className="mt-4 text-lg leading-relaxed text-muted-foreground italic">
            "Our doors are open and our hearts are wider still. Whatever season you are walking
            through, God has not forgotten you. Come and worship with us — you will find a
            family that prays with you and stands with you."
          </p>

          <p className="mt-6 leading-relaxed text-muted-foreground">
            Bishop Regina has served the Lord's Fellowship Centre for over two decades, leading
            with warmth, sound teaching and a passion for revival across the community.
          </p>

          {/* <a
            href="#contact"
            className="mt-9 inline-flex h-12 items-center gap-2 rounded-full border border-primary px-8 font-semibold text-primary transition-colors hover:bg-accent"
          >
            Read Full Message <ArrowRight className="size-4" />
          </a> */}
        </Reveal>
      </div>
    </section>
  );
}
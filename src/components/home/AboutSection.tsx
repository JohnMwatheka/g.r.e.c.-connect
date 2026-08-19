/* eslint-disable prettier/prettier */
//src/components/home/AboutSection.tsx
import { ArrowRight } from "lucide-react";
import { Reveal, CountUp } from "@/components/reveal";

import sanctuary from "@/assets/sanctuary.jpg";

export function AboutSection() {
  return (
    <section id="about" className="section-y">
      <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Image — only visible on desktop */}
        <Reveal className="zoom-media hidden overflow-hidden rounded-3xl lg:block">
          <img
            src={sanctuary}
            alt="Bright sanctuary interior at G.R.E.C."
            loading="lazy"
            width={1280}
            height={1024}
            className="h-105 w-full object-cover lg:h-140"
          />
        </Reveal>

        {/* Content */}
        <Reveal delay={120}>
          <p className="text-xs font-semibold tracking-[0.2em] text-destructive uppercase">
            About Our Church
          </p>

          <h2 className="mt-4 font-display text-4xl leading-tight font-bold sm:text-5xl">
            A family rooted in Christ, open to everyone
          </h2>

          <p className="mt-6 leading-relaxed text-muted-foreground">
            For years G.R.E.C. has been a home of revival — a congregation that holds firmly to
            traditional biblical values while reaching this generation with fresh hope. Whoever
            you are and wherever you are on your journey, there is a seat for you here.
          </p>

          <dl className="mt-8 space-y-5">
            {[
              {
                t: "Our Mission",
                d: "To preach the Gospel of Jesus Christ and disciple believers into maturity.",
              },
              {
                t: "Our Vision",
                d: "A revived community transformed by the love and power of God.",
              },
              {
                t: "Our Values",
                d: "Christ-centred worship, genuine welcome, family, integrity and service.",
              },
            ].map((v) => (
              <div key={v.t} className="border-l-2 border-destructive pl-5">
                <dt className="font-display font-semibold text-foreground">{v.t}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{v.d}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-9 grid grid-cols-3 gap-4">
            {[
              { n: 1200, s: "+", l: "Members" },
              { n: 8, s: "", l: "Ministries" },
              { n: 25, s: "+", l: "Years of service" },
            ].map((st) => (
              <div key={st.l}>
                <p className="font-display text-3xl font-bold text-primary">
                  <CountUp to={st.n} suffix={st.s} />
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{st.l}</p>
              </div>
            ))}
          </div>

          {/* <a
            href="#visit"
            className="mt-9 inline-flex h-12 items-center gap-2 rounded-full bg-primary px-8 font-semibold text-primary-foreground transition-transform duration-200 hover:scale-105"
          >
            Become Part of Our Family <ArrowRight className="size-4" />
          </a> */}
        </Reveal>
      </div>
    </section>
  );
}
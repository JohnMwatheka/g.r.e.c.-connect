import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  Clock,
  Cross,
  Flame,
  HandHeart,
  Heart,
  Mail,
  MapPin,
  Music,
  Phone,
  PlayCircle,
  Quote,
  Smartphone,
  Sparkles,
  Users,
  Baby,
  Landmark,
} from "lucide-react";

import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Reveal, CountUp } from "@/components/reveal";

import heroWorship from "@/assets/hero-worship.jpg";
import pastorPortrait from "@/assets/pastor.jpg";
import sanctuary from "@/assets/sanctuary.jpg";
import choir from "@/assets/choir.jpg";
import youth from "@/assets/youth.jpg";
import children from "@/assets/children.jpg";
import outreach from "@/assets/outreach.jpg";
import baptism from "@/assets/baptism.jpg";

const title = "G.R.E.C. — Gospel Revival Evangelistic Church | Welcome Home";
const description =
  "Join Gospel Revival Evangelistic Church, The Lord's Fellowship Centre. Sunday services at 7:30 AM & 10:30 AM, youth service 12:30 PM. Sermons, ministries, events and online giving.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const serviceTimes = [
  { day: "Sunday", name: "First Service", time: "7:30 AM" },
  { day: "Sunday", name: "Main Service", time: "10:30 AM" },
  { day: "Sunday", name: "Youth Service", time: "12:30 PM" },
];

const beliefs = [
  { icon: Cross, title: "Christ Alone", text: "Salvation is found in Jesus Christ, crucified and risen for all." },
  { icon: BookOpen, title: "The Word", text: "Scripture is God's inspired truth and the foundation of our life." },
  { icon: Flame, title: "Holy Spirit", text: "We live and serve empowered by the Spirit of God." },
  { icon: Users, title: "Fellowship", text: "We grow together as one welcoming family in Christ." },
  { icon: HandHeart, title: "Service", text: "Faith expressed through love, compassion and outreach." },
  { icon: Sparkles, title: "Revival", text: "We pray for renewal in our city, our nation and the world." },
];

const ministryCards = [
  { title: "Youth Ministry", text: "Teens and young adults growing bold in faith.", image: youth, icon: Flame },
  { title: "Children Ministry", text: "Safe, joyful discipleship for our little ones.", image: children, icon: Baby },
  { title: "Choir & Worship", text: "Leading the congregation into God's presence.", image: choir, icon: Music },
  { title: "Evangelism", text: "Taking the Gospel to homes, streets and nations.", image: outreach, icon: Landmark },
];

const ministryList = ["Women's Ministry", "Men's Ministry", "Prayer Ministry", "Bible Study"];

const events = [
  { date: "AUG 09", title: "Annual Revival Conference", detail: "Three nights of worship, teaching and prayer.", place: "Main Sanctuary · 5:00 PM" },
  { date: "AUG 23", title: "Youth Fire Night", detail: "Worship, testimonies and fellowship for ages 13–30.", place: "Youth Hall · 6:00 PM" },
  { date: "SEP 06", title: "Community Open Air Crusade", detail: "Gospel outreach and free medical camp.", place: "Town Grounds · 9:00 AM" },
  { date: "SEP 20", title: "Church Building Project Harvest", detail: "Celebrating what God is building among us.", place: "Main Sanctuary · 10:30 AM" },
];

const sermons = [
  { title: "Welcome Home: The Father's Heart", date: "20 July 2026", series: "Latest", image: sanctuary },
  { title: "Faith That Moves Mountains", date: "13 July 2026", series: "Popular", image: choir },
  { title: "Living Water for Dry Seasons", date: "6 July 2026", series: "Series", image: baptism },
];

const gallery = [
  { src: choir, alt: "Church choir worshipping", span: "row-span-2" },
  { src: youth, alt: "Youth fellowship outdoors", span: "" },
  { src: baptism, alt: "Baptism service by the river", span: "" },
  { src: outreach, alt: "Community outreach food distribution", span: "row-span-2" },
  { src: children, alt: "Children's ministry class", span: "" },
  { src: sanctuary, alt: "Church sanctuary interior", span: "" },
];

const testimonials = [
  { name: "Grace W.", role: "Member since 2019", quote: "I walked in as a stranger and left as family. G.R.E.C. gave me a place to heal and grow." },
  { name: "Peter O.", role: "Youth leader", quote: "The youth ministry shaped my faith and my future. Here I learned to serve with purpose." },
  { name: "Mercy A.", role: "Women's fellowship", quote: "Every Sunday I leave encouraged. The teaching is sound and the love is genuine." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main id="home">
        {/* HERO */}
        <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
          <img
            src={heroWorship}
            alt="G.R.E.C. congregation worshipping together with hands raised"
            width={1920}
            height={1088}
            className="absolute inset-0 -z-20 size-full scale-105 object-cover"
          />
          <div className="hero-overlay absolute inset-0 -z-10" />

          <div className="shell pt-32 pb-16 text-primary-foreground">
            <Reveal className="max-w-3xl">
              <p className="inline-flex items-center gap-2 rounded-full bg-background/15 px-4 py-2 text-xs font-semibold tracking-[0.18em] uppercase backdrop-blur">
                <Cross className="size-3.5 text-destructive" strokeWidth={3} />
                The Lord's Fellowship Centre
              </p>
              <h1 className="mt-6 font-display text-5xl leading-[1.05] font-bold sm:text-6xl lg:text-7xl">
                Welcome Home
              </h1>
              <p className="mt-4 font-display text-xl font-semibold text-primary-foreground/90 sm:text-2xl">
                Gospel Revival Evangelistic Church
              </p>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
                Experience God's love, grow in faith, and serve with purpose.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#visit"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-destructive px-8 font-semibold text-destructive-foreground transition-transform duration-200 hover:scale-105"
                >
                  Plan Your Visit <ArrowRight className="size-4" />
                </a>
                <a
                  href="#sermons"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-primary-foreground/50 px-8 font-semibold text-primary-foreground backdrop-blur transition-colors hover:bg-background/15"
                >
                  <PlayCircle className="size-4" /> Watch Sermons
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* SERVICE TIMES */}
        <section className="relative z-10 -mt-16 pb-4">
          <div className="shell grid gap-5 sm:grid-cols-3">
            {serviceTimes.map((s, i) => (
              <Reveal key={s.name} delay={i * 100} className="card-soft p-7">
                <Clock className="size-6 text-primary" />
                <p className="mt-5 text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                  {s.day}
                </p>
                <p className="mt-2 font-display text-3xl font-bold text-foreground">{s.time}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.name}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section-y">
          <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal className="zoom-media overflow-hidden rounded-3xl">
              <img
                src={sanctuary}
                alt="Bright sanctuary interior at G.R.E.C."
                loading="lazy"
                width={1280}
                height={1024}
                className="h-[420px] w-full object-cover lg:h-[560px]"
              />
            </Reveal>
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
                  { t: "Our Mission", d: "To preach the Gospel of Jesus Christ and disciple believers into maturity." },
                  { t: "Our Vision", d: "A revived community transformed by the love and power of God." },
                  { t: "Our Values", d: "Christ-centred worship, genuine welcome, family, integrity and service." },
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
              <a
                href="#visit"
                className="mt-9 inline-flex h-12 items-center gap-2 rounded-full bg-primary px-8 font-semibold text-primary-foreground transition-transform duration-200 hover:scale-105"
              >
                Become Part of Our Family <ArrowRight className="size-4" />
              </a>
            </Reveal>
          </div>
        </section>

        {/* PASTOR */}
        <section className="section-y bg-surface">
          <div className="shell grid items-center gap-12 lg:grid-cols-[0.85fr_1fr] lg:gap-20">
            <Reveal className="zoom-media overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
              <img
                src={pastorPortrait}
                alt="Bishop Regina K. Mohammed, Senior Pastor of G.R.E.C."
                loading="lazy"
                width={1024}
                height={1280}
                className="h-[480px] w-full object-cover lg:h-[620px]"
              />
            </Reveal>
            <Reveal delay={120}>
              <p className="text-xs font-semibold tracking-[0.2em] text-destructive uppercase">
                Meet Our Senior Pastor
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight font-bold sm:text-5xl">
                Bishop Regina K. Mohammed
              </h2>
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
              <a
                href="#contact"
                className="mt-9 inline-flex h-12 items-center gap-2 rounded-full border border-primary px-8 font-semibold text-primary transition-colors hover:bg-accent"
              >
                Read Full Message <ArrowRight className="size-4" />
              </a>
            </Reveal>
          </div>
        </section>

        {/* BELIEFS */}
        <section className="section-y">
          <div className="shell">
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold tracking-[0.2em] text-destructive uppercase">
                What We Believe
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight font-bold sm:text-5xl">
                Core beliefs that anchor us
              </h2>
            </Reveal>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {beliefs.map((b, i) => (
                <Reveal key={b.title} delay={i * 80} className="card-soft h-full p-8">
                  <span className="gradient-sky grid size-12 place-items-center rounded-2xl">
                    <b.icon className="size-5 text-primary-foreground" />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold">{b.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* MINISTRIES */}
        <section id="ministries" className="section-y bg-surface">
          <div className="shell">
            <Reveal className="max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.2em] text-destructive uppercase">
                Church Ministries
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight font-bold sm:text-5xl">
                Find your place to belong and serve
              </h2>
            </Reveal>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {ministryCards.map((m, i) => (
                <Reveal key={m.title} delay={i * 80} className="card-soft h-full overflow-hidden">
                  <div className="zoom-media">
                    <img
                      src={m.image}
                      alt={m.title}
                      loading="lazy"
                      width={1024}
                      height={1024}
                      className="h-52 w-full object-cover"
                    />
                  </div>
                  <div className="p-7">
                    <m.icon className="size-5 text-destructive" />
                    <h3 className="mt-4 font-display text-lg font-semibold">{m.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
                    <a
                      href="#contact"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                    >
                      Learn More <ArrowRight className="size-4" />
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {ministryList.map((m, i) => (
                <Reveal
                  key={m}
                  delay={i * 60}
                  className="flex items-center justify-between rounded-2xl border border-border bg-background px-6 py-5"
                >
                  <span className="font-display text-sm font-semibold">{m}</span>
                  <ArrowRight className="size-4 text-primary" />
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-12 text-center">
              <a
                href="#contact"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-destructive px-8 font-semibold text-destructive-foreground transition-transform duration-200 hover:scale-105"
              >
                Join a Ministry <ArrowRight className="size-4" />
              </a>
            </Reveal>
          </div>
        </section>

        {/* EVENTS */}
        <section id="events" className="section-y">
          <div className="shell">
            <Reveal className="max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.2em] text-destructive uppercase">
                Upcoming Events
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight font-bold sm:text-5xl">
                What's happening at G.R.E.C.
              </h2>
            </Reveal>
            <ol className="mt-14 border-l border-border">
              {events.map((e, i) => (
                <Reveal
                  key={e.title}
                  as="li"
                  delay={i * 90}
                  className="relative grid gap-2 pb-12 pl-8 last:pb-0 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-8"
                >
                  <span className="absolute top-2 -left-[7px] size-3.5 rounded-full border-2 border-background bg-destructive" />
                  <span className="font-display text-sm font-bold tracking-[0.14em] text-primary">
                    {e.date}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-xl font-semibold">{e.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{e.detail}</p>
                    <p className="mt-2 inline-flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="size-3.5" /> {e.place}
                    </p>
                    <a
                      href="#contact"
                      className="mt-4 inline-flex h-11 items-center gap-2 rounded-full border border-primary px-6 text-sm font-semibold text-primary transition-colors hover:bg-accent"
                    >
                      Register
                    </a>
                  </div>
                </Reveal>
              ))}
            </ol>
            <Reveal className="mt-4">
              <a href="#events" className="inline-flex items-center gap-2 font-semibold text-primary">
                See All Events <ArrowRight className="size-4" />
              </a>
            </Reveal>
          </div>
        </section>

        {/* SERMONS */}
        <section id="sermons" className="section-y bg-surface">
          <div className="shell">
            <Reveal className="max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.2em] text-destructive uppercase">
                Latest Sermons
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight font-bold sm:text-5xl">
                Be fed by the Word, wherever you are
              </h2>
            </Reveal>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {sermons.map((s, i) => (
                <Reveal key={s.title} delay={i * 90} className="card-soft h-full overflow-hidden">
                  <div className="zoom-media relative">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      width={1024}
                      height={1024}
                      className="h-56 w-full object-cover"
                    />
                    <span className="absolute inset-0 grid place-items-center bg-primary/25">
                      <PlayCircle className="size-14 text-primary-foreground" strokeWidth={1.25} />
                    </span>
                    <span className="absolute top-4 left-4 rounded-full bg-destructive px-3 py-1 text-[11px] font-semibold tracking-wider text-destructive-foreground uppercase">
                      {s.series}
                    </span>
                  </div>
                  <div className="p-7">
                    <p className="text-xs text-muted-foreground">{s.date}</p>
                    <h3 className="mt-2 font-display text-lg font-semibold">{s.title}</h3>
                    <a
                      href="#sermons"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                    >
                      Watch <ArrowRight className="size-4" />
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="section-y">
          <div className="shell">
            <Reveal className="max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.2em] text-destructive uppercase">
                Gallery
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight font-bold sm:text-5xl">
                Moments from our church life
              </h2>
            </Reveal>
            <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[220px] lg:grid-cols-3">
              {gallery.map((g, i) => (
                <Reveal
                  key={g.alt}
                  delay={i * 70}
                  className={`zoom-media rounded-2xl ${g.span}`}
                >
                  <img
                    src={g.src}
                    alt={g.alt}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="size-full object-cover"
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="section-y bg-surface">
          <div className="shell">
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold tracking-[0.2em] text-destructive uppercase">
                Testimonies
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight font-bold sm:text-5xl">
                Lives touched by God's grace
              </h2>
            </Reveal>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {testimonials.map((t, i) => (
                <Reveal key={t.name} delay={i * 90} className="card-soft h-full p-8">
                  <Quote className="size-7 text-sky" />
                  <p className="mt-5 leading-relaxed text-muted-foreground italic">"{t.quote}"</p>
                  <p className="mt-6 font-display font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PRAYER */}
        <section id="prayer" className="section-y">
          <div className="shell grid gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <p className="text-xs font-semibold tracking-[0.2em] text-destructive uppercase">
                Need Prayer?
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight font-bold sm:text-5xl">
                Let us stand with you in prayer
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Share your request with our prayer team. Every request is treated with
                confidentiality and covered in prayer by our intercessors.
              </p>
              <p className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-accent px-6 py-4 text-sm font-medium text-accent-foreground">
                <Heart className="size-4" /> "Cast all your anxiety on Him because He cares for you."
              </p>
            </Reveal>
            <Reveal delay={120} className="card-soft p-8">
              <form className="grid gap-5" onSubmit={(e) => e.preventDefault()}>
                {[
                  { id: "name", label: "Name", type: "text", ph: "Your full name" },
                  { id: "phone", label: "Phone", type: "tel", ph: "+254 700 000 000" },
                  { id: "email", label: "Email", type: "email", ph: "you@email.com" },
                ].map((f) => (
                  <div key={f.id}>
                    <label htmlFor={f.id} className="text-sm font-medium">
                      {f.label}
                    </label>
                    <input
                      id={f.id}
                      type={f.type}
                      required
                      placeholder={f.ph}
                      className="mt-2 h-12 w-full rounded-xl border border-input bg-background px-4 text-sm outline-none focus:border-primary"
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="request" className="text-sm font-medium">
                    Prayer Request
                  </label>
                  <textarea
                    id="request"
                    rows={4}
                    required
                    placeholder="How can we pray for you?"
                    className="mt-2 w-full rounded-xl border border-input bg-background p-4 text-sm outline-none focus:border-primary"
                  />
                </div>
                <button
                  type="submit"
                  className="h-12 rounded-full bg-destructive font-semibold text-destructive-foreground transition-transform duration-200 hover:scale-[1.02]"
                >
                  Submit Prayer
                </button>
              </form>
            </Reveal>
          </div>
        </section>

        {/* GIVING */}
        <section id="give" className="section-y">
          <div className="shell">
            <Reveal className="gradient-sky overflow-hidden rounded-3xl px-8 py-16 text-center text-primary-foreground sm:px-16">
              <HandHeart className="mx-auto size-10" />
              <h2 className="mt-6 font-display text-4xl leading-tight font-bold sm:text-5xl">
                Support the work of God
              </h2>
              <p className="mx-auto mt-5 max-w-xl leading-relaxed text-primary-foreground/85">
                Your generosity fuels the Gospel — outreach, discipleship, missions and caring for
                our community.
              </p>
              <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href="#give"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-destructive px-8 font-semibold text-destructive-foreground transition-transform duration-200 hover:scale-105"
                >
                  <Smartphone className="size-4" /> Give via M-Pesa
                </a>
                <a
                  href="#contact"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-primary-foreground/60 px-8 font-semibold text-primary-foreground transition-colors hover:bg-background/15"
                >
                  <Landmark className="size-4" /> Bank Details
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CONTACT / VISIT */}
        <section id="contact" className="section-y bg-surface">
          <div className="shell grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <span id="visit" className="block scroll-mt-28" />
              <p className="text-xs font-semibold tracking-[0.2em] text-destructive uppercase">
                Plan Your Visit
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight font-bold sm:text-5xl">
                We'd love to meet you this Sunday
              </h2>
              <ul className="mt-10 space-y-6">
                <li className="flex gap-4">
                  <MapPin className="mt-1 size-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-display font-semibold">Address</p>
                    <p className="text-sm text-muted-foreground">
                      The Lord's Fellowship Centre, Nairobi, Kenya
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Phone className="mt-1 size-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-display font-semibold">Phone</p>
                    <p className="text-sm text-muted-foreground">+254 700 000 000</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Mail className="mt-1 size-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-display font-semibold">Email</p>
                    <p className="text-sm text-muted-foreground">hello@grecchurch.org</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Clock className="mt-1 size-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-display font-semibold">Service Times</p>
                    <p className="text-sm text-muted-foreground">
                      Sunday 7:30 AM · 10:30 AM · Youth 12:30 PM
                    </p>
                  </div>
                </li>
              </ul>
            </Reveal>
            <Reveal delay={120} className="card-soft overflow-hidden">
              <iframe
                title="Map to Gospel Revival Evangelistic Church"
                src="https://www.google.com/maps?q=Nairobi,Kenya&output=embed"
                loading="lazy"
                className="h-[420px] w-full border-0 lg:h-full lg:min-h-[520px]"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />

      <a
        href="https://wa.me/254700000000?text=Hello%20G.R.E.C.%2C%20I%20would%20like%20to%20connect"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed right-5 bottom-6 z-50 flex h-14 max-w-[3.5rem] items-center overflow-hidden rounded-full bg-whatsapp text-whatsapp-foreground shadow-[var(--shadow-lift)] transition-all duration-300 ease-out hover:max-w-[12rem] focus-visible:max-w-[12rem] active:max-w-[12rem] hover:[&>span:last-child]:opacity-100 focus-visible:[&>span:last-child]:opacity-100 active:[&>span:last-child]:opacity-100"
      >
        <span className="grid size-14 shrink-0 place-items-center">
          <svg viewBox="0 0 24 24" fill="currentColor" className="size-6" aria-hidden="true">
            <path d="M12.05 0C5.49 0 .157 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413A11.815 11.815 0 0012.05 0zm7.423 18.785a9.87 9.87 0 01-5.031 1.378h-.004a9.86 9.86 0 01-5.26-1.51l-.374-.235-3.648.998.982-3.741-.214-.361A9.86 9.86 0 011.7 11.892c0-5.452 4.434-9.887 9.887-9.887 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm-3.175-5.403c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          </svg>
        </span>
        <span className="whitespace-nowrap pr-5 text-sm font-semibold opacity-0 transition-opacity duration-300">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}

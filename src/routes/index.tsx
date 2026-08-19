/* eslint-disable prettier/prettier */
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
import { WhatsAppButton } from "@/components/home/WhatsAppButton";
import { HeroSection } from "@/components/home/HeroSection";
import { ServiceTimes } from "@/components/home/ServiceTimes";
import { AboutSection } from "@/components/home/AboutSection";
import { BeliefsSection } from "@/components/home/BeliefSection";


import sanctuary from "@/assets/sanctuary.jpg";
import choir from "@/assets/choir.jpg";
import youth from "@/assets/youth.jpg";
import children from "@/assets/children.jpg";
import outreach from "@/assets/outreach.jpg";
import baptism from "@/assets/baptism.jpg";
import { PastorSection } from "@/components/home/PastorSection";
import { GallerySection } from "@/components/home/GallerySection";

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
  {
    icon: Cross,
    title: "Christ Alone",
    text: "Salvation is found in Jesus Christ, crucified and risen for all.",
  },
  {
    icon: BookOpen,
    title: "The Word",
    text: "Scripture is God's inspired truth and the foundation of our life.",
  },
  { icon: Flame, title: "Holy Spirit", text: "We live and serve empowered by the Spirit of God." },
  { icon: Users, title: "Fellowship", text: "We grow together as one welcoming family in Christ." },
  {
    icon: HandHeart,
    title: "Service",
    text: "Faith expressed through love, compassion and outreach.",
  },
  {
    icon: Sparkles,
    title: "Revival",
    text: "We pray for renewal in our city, our nation and the world.",
  },
];

const ministryCards = [
  {
    title: "Youth Ministry",
    text: "Teens and young adults growing bold in faith.",
    image: youth,
    icon: Flame,
  },
  {
    title: "Children Ministry",
    text: "Safe, joyful discipleship for our little ones.",
    image: children,
    icon: Baby,
  },
  {
    title: "Choir & Worship",
    text: "Leading the congregation into God's presence.",
    image: choir,
    icon: Music,
  },
  {
    title: "Evangelism",
    text: "Taking the Gospel to homes, streets and nations.",
    image: outreach,
    icon: Landmark,
  },
];

const ministryList = ["Women's Ministry", "Men's Ministry", "Prayer Ministry", "Bible Study"];

const events = [
  {
    date: "AUG 09",
    title: "Annual Revival Conference",
    detail: "Three nights of worship, teaching and prayer.",
    place: "Main Sanctuary · 5:00 PM",
  },
  {
    date: "AUG 23",
    title: "Youth Fire Night",
    detail: "Worship, testimonies and fellowship for ages 13–30.",
    place: "Youth Hall · 6:00 PM",
  },
  {
    date: "SEP 06",
    title: "Community Open Air Crusade",
    detail: "Gospel outreach and free medical camp.",
    place: "Town Grounds · 9:00 AM",
  },
  {
    date: "SEP 20",
    title: "Church Building Project Harvest",
    detail: "Celebrating what God is building among us.",
    place: "Main Sanctuary · 10:30 AM",
  },
];

const sermons = [
  {
    title: "Welcome Home: The Father's Heart",
    date: "20 July 2026",
    series: "Latest",
    image: sanctuary,
  },
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
  {
    name: "Grace W.",
    role: "Member since 2019",
    quote:
      "I walked in as a stranger and left as family. G.R.E.C. gave me a place to heal and grow.",
  },
  {
    name: "Peter O.",
    role: "Youth leader",
    quote:
      "The youth ministry shaped my faith and my future. Here I learned to serve with purpose.",
  },
  {
    name: "Mercy A.",
    role: "Women's fellowship",
    quote: "Every Sunday I leave encouraged. The teaching is sound and the love is genuine.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main id="home">
        {/* HERO */}
        <HeroSection/>

        {/* SERVICE TIMES */}
        <ServiceTimes/>

        {/* ABOUT */}
        <AboutSection/>

        {/* PASTOR */}
        <PastorSection/>

        {/* BELIEFS */}
        <BeliefsSection/>

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
              <a
                href="#events"
                className="inline-flex items-center gap-2 font-semibold text-primary"
              >
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
        <GallerySection/>

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
                <Heart className="size-4" /> "Cast all your anxiety on Him because He cares for
                you."
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

      <WhatsAppButton />

    </div>
  );
}

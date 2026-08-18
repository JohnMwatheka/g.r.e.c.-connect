import { Facebook, Instagram, Youtube, Mail } from "lucide-react";
import logoAsset from "@/assets/grec-logo.png.asset.json";

const quickLinks = ["About", "Sermons", "Events", "Gallery", "Give", "Contact"];
const ministries = [
  "Youth Ministry",
  "Children Ministry",
  "Choir",
  "Women's Ministry",
  "Men's Ministry",
  "Evangelism",
];

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="shell grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-12 place-items-center overflow-hidden rounded-full bg-background">
              <img
                src={logoAsset.url}
                alt="Gospel Revival Evangelistic Church logo"
                className="size-11 object-contain"
              />
            </span>
            <div>
              <p className="font-display text-lg font-bold">G.R.E.C.</p>
              <p className="text-xs tracking-[0.14em] text-primary-foreground/70 uppercase">
                Est. Nairobi, Kenya
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-primary-foreground/80">
            Gospel Revival Evangelistic Church — The Lord's Fellowship Centre. A Christ-centred
            family growing in faith and serving with purpose.
          </p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#contact"
                aria-label="Social link"
                className="grid size-10 place-items-center rounded-full bg-background/10 transition-colors hover:bg-destructive"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold tracking-[0.14em] uppercase">
            Quick Links
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
            {quickLinks.map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="transition-colors hover:text-background">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold tracking-[0.14em] uppercase">
            Ministries
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
            {ministries.map((m) => (
              <li key={m}>
                <a href="#ministries" className="transition-colors hover:text-background">
                  {m}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold tracking-[0.14em] uppercase">
            Newsletter
          </h3>
          <p className="mt-5 text-sm text-primary-foreground/80">
            Weekly encouragement, service updates and church announcements.
          </p>
          <form className="mt-5 flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <div className="flex items-center gap-2 rounded-full bg-background/10 px-4">
              <Mail className="size-4 shrink-0 text-primary-foreground/70" />
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="you@email.com"
                className="h-12 w-full bg-transparent text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="h-12 rounded-full bg-destructive text-sm font-semibold text-destructive-foreground transition-transform duration-200 hover:scale-[1.02]"
            >
              Subscribe
            </button>
          </form>
          <a
            href="#prayer"
            className="mt-6 inline-block text-sm font-semibold underline underline-offset-4"
          >
            Need Prayer? Submit a Prayer Request
          </a>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="shell flex flex-col gap-2 py-6 text-xs text-primary-foreground/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Gospel Revival Evangelistic Church. All rights reserved.</p>
          <p>Christ-centred · Welcoming · Community-focused</p>
        </div>
      </div>
    </footer>
  );
}

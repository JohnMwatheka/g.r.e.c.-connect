import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  // { label: "Ministries", href: "#ministries" },
  // { label: "Sermons", href: "#sermons" },
  // { label: "Events", href: "#events" },
  // { label: "Youth", href: "#ministries" },
  // { label: "Gallery", href: "#gallery" },
  // { label: "Give", href: "#give" },
  { label: "Contact", href: "#contact" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "bg-background/95 shadow-[0_4px_24px_oklch(0_0_0/0.06)] backdrop-blur"
          : "bg-transparent",
      )}
    >
      <div className="shell grid h-20 grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <a href="#home" className="flex min-w-0 items-center gap-3">
          <span
            className={cn(
              "grid size-12 shrink-0 place-items-center overflow-hidden rounded-full transition-colors",
              scrolled || open ? "bg-background" : "bg-background/90 backdrop-blur",
            )}
          >
            <img
              src="/grec-logo.png"
              alt="Gospel Revival Evangelistic Church logo"
              className="size-11 object-contain"
            />
          </span>
          <span className="min-w-0">
            <span
              className={cn(
                "block truncate font-display text-lg leading-tight font-bold",
                scrolled || open ? "text-primary" : "text-primary-foreground",
              )}
            >
              G.R.E.C.
            </span>
            <span
              className={cn(
                "hidden truncate text-[11px] tracking-[0.16em] uppercase sm:block",
                scrolled || open ? "text-muted-foreground" : "text-primary-foreground/80",
              )}
            >
              The Lord's Fellowship Centre
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 xl:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={cn(
                "text-sm font-medium transition-colors",
                scrolled
                  ? "text-foreground hover:text-primary"
                  : "text-primary-foreground/90 hover:text-primary-foreground",
              )}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#visit"
            className="inline-flex h-12 items-center justify-center rounded-full bg-destructive px-6 text-sm font-semibold text-destructive-foreground transition-transform duration-200 hover:scale-105"
          >
            Plan Your Visit
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "grid size-12 shrink-0 place-items-center rounded-full border xl:hidden",
            scrolled || open
              ? "border-border text-foreground"
              : "border-primary-foreground/30 text-primary-foreground",
          )}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="animate-fade-in border-t border-border bg-background xl:hidden">
          <nav className="shell flex flex-col py-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-4 text-base font-medium text-foreground last:border-0"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#visit"
              onClick={() => setOpen(false)}
              className="mt-5 mb-4 inline-flex h-12 items-center justify-center rounded-full bg-destructive px-6 font-semibold text-destructive-foreground"
            >
              Plan Your Visit
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

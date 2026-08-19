/* eslint-disable prettier/prettier */
//src/components/home/ServiceTimes.tsx
import { Clock } from "lucide-react";
import { Reveal } from "@/components/reveal";

const serviceTimes = [
  {
    day: "Sunday",
    name: "1st Service",
    time: "7:30 AM – 10:00 AM",
  },
  {
    day: "Sunday",
    name: "2nd Service",
    time: "10:30 AM – 12:30 PM",
  },
  {
    day: "Sunday",
    name: "Youth Service",
    time: "12:30 PM – 1:30 PM",
  },
];

const midWeek = [
  { day: "Wednesday", detail: "5:30 PM – 6:30 PM · Bible Study" },
  { day: "Friday", detail: "5:30 PM – 6:30 PM · Intercessory" },
  { day: "Mon · Tue · Thu", detail: "7:00 PM – 8:00 PM · Homecells" },
];

export function ServiceTimes() {
  return (
    <section className="relative z-10 -mt-16 pb-4">
      <div className="shell">
        {/* Main Sunday services – three cards */}
        <div className="grid gap-5 sm:grid-cols-3">
          {serviceTimes.map((s, i) => (
            <Reveal key={s.name} delay={i * 100} className="card-soft p-7">
              <Clock className="size-6 text-primary" />
              <p className="mt-5 text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                {s.day}
              </p>
              <p className="mt-2 font-display text-2xl font-bold text-foreground sm:text-3xl">
                {s.time}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{s.name}</p>
            </Reveal>
          ))}
        </div>

        {/* Mid-week fellowship – compact row */}
        <Reveal delay={350} className="mt-6">
          <div className="card-soft overflow-hidden">
            <div className="border-b border-border bg-accent/40 px-6 py-3">
              <p className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                Mid-Week Fellowship
              </p>
            </div>
            <div className="grid gap-4 p-6 sm:grid-cols-3">
              {midWeek.map((item) => (
                <div key={item.day}>
                  <p className="font-display text-sm font-semibold text-foreground">
                    {item.day}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
/* eslint-disable prettier/prettier */
//src/components/home/ContactSection.tsx
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Reveal } from "@/components/reveal";

export function ContactSection() {
  return (
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
                  GREC CHURCH HQ (Mlolongo)
                  <br />
                  P.O. Box 438 – 00507, Nairobi, Kenya
                </p>
              </div>
            </li>

            <li className="flex gap-4">
              <Phone className="mt-1 size-5 shrink-0 text-primary" />
              <div>
                <p className="font-display font-semibold">Phone</p>
                <p className="text-sm text-muted-foreground">
                  0722 593 817 · 0726 521 019
                </p>
              </div>
            </li>

            <li className="flex gap-4">
              <Mail className="mt-1 size-5 shrink-0 text-primary" />
              <div>
                <p className="font-display font-semibold">Email</p>
                <p className="text-sm text-muted-foreground">
                  hello@grecchurch.org
                </p>
              </div>
            </li>

            <li className="flex gap-4">
              <Clock className="mt-1 size-5 shrink-0 text-primary" />
              <div>
                <p className="font-display font-semibold">Service Times</p>
                <p className="text-sm text-muted-foreground">
                  Sunday 7:30 AM – 10:00 AM · 10:30 AM – 12:30 PM
                  <br />
                  Youth Service 12:30 PM – 1:30 PM
                </p>
              </div>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={120} className="card-soft overflow-hidden">
          <iframe
            title="Map to Gospel Revival Evangelistic Church"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d360.6712471059797!2d36.94322469808482!3d-1.3961477984087725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f0caf8218b693%3A0xfd3b1863005c5b06!2sGospel%20Revival%20Evangelistic%20Church!5e1!3m2!1sen!2ske!4v1787133954804!5m2!1sen!2ske"
            loading="lazy"
            className="h-105 w-full border-0 lg:h-full lg:min-h-130"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </div>
    </section>
  );
}
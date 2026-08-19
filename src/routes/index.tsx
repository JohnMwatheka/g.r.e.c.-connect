/* eslint-disable prettier/prettier */
import { createFileRoute } from "@tanstack/react-router";

import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppButton } from "@/components/home/WhatsAppButton";
import { HeroSection } from "@/components/home/HeroSection";
import { ServiceTimes } from "@/components/home/ServiceTimes";
import { AboutSection } from "@/components/home/AboutSection";
import { PastorSection } from "@/components/home/PastorSection";
import { BeliefsSection } from "@/components/home/BeliefSection";
import { GallerySection } from "@/components/home/GallerySection";
import { ContactSection } from "@/components/home/ContactSection";

const title =
  "G.R.E.C. | Gospel Revival Evangelistic Church – The Lord's Fellowship Centre, Mlolongo Nairobi";
const description =
  "Welcome to Gospel Revival Evangelistic Church (G.R.E.C.), The Lord's Fellowship Centre in Mlolongo, Nairobi. Join our Sunday services at 7:30 AM & 10:30 AM, Youth Service at 12:30 PM. Led by Bishop Regina K. Mohammed. Experience revival, worship, and community.";

const keywords =
  "Gospel Revival Evangelistic Church, GREC, G.R.E.C., The Lord's Fellowship Centre, Mlolongo church, Nairobi church, Sunday service Nairobi, Bishop Regina K. Mohammed, church in Mlolongo, revival church Kenya, Pentecostal church Nairobi, Christian church Mlolongo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: keywords },
      { name: "author", content: "Gospel Revival Evangelistic Church" },
      { name: "robots", content: "index, follow, max-image-preview:large" },

      // Open Graph
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_KE" },
      { property: "og:site_name", content: "Gospel Revival Evangelistic Church" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "https://grecchurch.org/" },
      // Add your real og:image when ready
      // { property: "og:image", content: "https://grecchurch.org/og-image.jpg" },
      // { property: "og:image:width", content: "1200" },
      // { property: "og:image:height", content: "630" },

      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      // { name: "twitter:image", content: "https://grecchurch.org/og-image.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://grecchurch.org/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["Church", "LocalBusiness", "Organization"],
          name: "Gospel Revival Evangelistic Church",
          alternateName: ["G.R.E.C.", "GREC", "The Lord's Fellowship Centre"],
          description:
            "Gospel Revival Evangelistic Church (G.R.E.C.), also known as The Lord's Fellowship Centre, is a vibrant Christian church in Mlolongo, Nairobi, Kenya, led by Bishop Regina K. Mohammed.",
          url: "https://grecchurch.org/",
          telephone: ["+254722593817", "+254726521019"],
          email: "hello@grecchurch.org",
          address: {
            "@type": "PostalAddress",
            streetAddress: "The Lord's Fellowship Centre, Mlolongo",
            addressLocality: "Nairobi",
            postalCode: "00507",
            addressCountry: "KE",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: -1.3961477984087725,
            longitude: 36.94322469808482,
          },
          image: "https://grecchurch.org/og-image.jpg",
          logo: "https://grecchurch.org/logo.png",
          foundingDate: "2000",
          founder: {
            "@type": "Person",
            name: "Bishop Regina K. Mohammed",
            jobTitle: "Senior Pastor",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Sunday",
              opens: "07:30",
              closes: "13:30",
            },
          ],
          sameAs: [
            // Add real social links when available
            // "https://www.facebook.com/grecchurch",
            // "https://www.youtube.com/@grecchurch",
            // "https://www.instagram.com/grecchurch",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main id="home">
        <HeroSection />
        <ServiceTimes />
        <AboutSection />
        <PastorSection />
        <BeliefsSection />
        <GallerySection />
        <ContactSection />
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
/* eslint-disable prettier/prettier */
//src/components/home/GallerySection.tsx
import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import {
  gallery,
  gallerySlide1,
  gallerySlide2,
  gallerySlide3,
} from "@/data/home";

const desktopSlides = [gallerySlide1, gallerySlide2, gallerySlide3];

function DotButton({
  selected,
  onClick,
}: {
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`size-2.5 rounded-full transition-all duration-300 ${
        selected
          ? "w-6 bg-destructive"
          : "bg-muted-foreground/40 hover:bg-muted-foreground/70"
      }`}
      aria-label="Go to slide"
    />
  );
}

export function GallerySection() {
  // ---------- Desktop ----------
  const autoplayDesktop = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })
  );
  const [emblaRefDesktop, emblaApiDesktop] = useEmblaCarousel(
    { loop: true, align: "start" },
    [autoplayDesktop.current]
  );
  const [selectedDesktop, setSelectedDesktop] = useState(0);

  const onSelectDesktop = useCallback(() => {
    if (!emblaApiDesktop) return;
    setSelectedDesktop(emblaApiDesktop.selectedScrollSnap());
  }, [emblaApiDesktop]);

  useEffect(() => {
    if (!emblaApiDesktop) return;
    onSelectDesktop();
    emblaApiDesktop.on("select", onSelectDesktop);
    return () => {
      emblaApiDesktop.off("select", onSelectDesktop);
    };
  }, [emblaApiDesktop, onSelectDesktop]);

  // ---------- Mobile ----------
  const autoplayMobile = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
  );
  const [emblaRefMobile, emblaApiMobile] = useEmblaCarousel(
    { loop: true, align: "start", containScroll: "trimSnaps" },
    [autoplayMobile.current]
  );
  const [selectedMobile, setSelectedMobile] = useState(0);

  const onSelectMobile = useCallback(() => {
    if (!emblaApiMobile) return;
    setSelectedMobile(emblaApiMobile.selectedScrollSnap());
  }, [emblaApiMobile]);

  useEffect(() => {
    if (!emblaApiMobile) return;
    onSelectMobile();
    emblaApiMobile.on("select", onSelectMobile);
    return () => {
      emblaApiMobile.off("select", onSelectMobile);
    };
  }, [emblaApiMobile, onSelectMobile]);

  return (
    <section id="gallery" className="section-y">
      <div className="shell">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold tracking-[0.2em] text-destructive uppercase">
            Gallery
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight font-bold sm:text-5xl">
            Moments from our church life
          </h2>
        </motion.div>

        {/* ========== DESKTOP — 3 slides, each with 6 images ========== */}
        <div className="mt-14 hidden lg:block">
          <div className="overflow-hidden" ref={emblaRefDesktop}>
            <div className="flex">
              {desktopSlides.map((slideImages, slideIndex) => (
                <div
                  key={slideIndex}
                  className="min-w-0 flex-[0_0_100%] px-1"
                >
                  <div className="grid auto-rows-45 grid-cols-2 gap-4 sm:auto-rows-55 lg:grid-cols-3">
                    {slideImages.map((g) => (
                      <div
                        key={`${slideIndex}-${g.alt}`}
                        className={`zoom-media overflow-hidden rounded-2xl ${g.span}`}
                      >
                        <img
                          src={g.src}
                          alt={g.alt}
                          loading="lazy"
                          width={1024}
                          height={1024}
                          className="size-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {desktopSlides.map((_, i) => (
              <DotButton
                key={i}
                selected={i === selectedDesktop}
                onClick={() => emblaApiDesktop?.scrollTo(i)}
              />
            ))}
          </div>
        </div>

        {/* ========== MOBILE — all 18 images in peek carousel ========== */}
        <div className="mt-14 lg:hidden">
          <div className="overflow-hidden" ref={emblaRefMobile}>
            <div className="flex touch-pan-y">
              {gallery.map((g, idx) => (
                <div
                  key={`${g.alt}-${idx}`}
                  className="min-w-0 flex-[0_0_80%] pr-4"
                >
                  <div className="zoom-media aspect-4/3 overflow-hidden rounded-2xl">
                    <img
                      src={g.src}
                      alt={g.alt}
                      loading="lazy"
                      width={1024}
                      height={1024}
                      className="size-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {gallery.map((_, i) => (
              <DotButton
                key={i}
                selected={i === selectedMobile}
                onClick={() => emblaApiMobile?.scrollTo(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
/* eslint-disable prettier/prettier */
//src/components/home/BeliefsSection.tsx
import { motion, type Variants } from "framer-motion";
import { beliefs } from "@/data/home";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
    },
  },
};

export function BeliefsSection() {
  return (
    <section className="section-y">
      <div className="shell">
        {/* Header */}
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-xs font-semibold tracking-[0.2em] text-red-500 uppercase">
            What We Believe
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight font-bold sm:text-5xl text-blue-800">
            Core beliefs that anchor us
          </h2>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {beliefs.map((b) => (
            <motion.div
              key={b.title}
              variants={item}
              whileHover={{
                y: -8,
                scale: 1.03,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className="card-soft h-full p-8 cursor-default text-blue-900"
            >
              <motion.span
                className="gradient-sky grid size-12 place-items-center rounded-2xl"
                whileHover={{ rotate: 8, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <b.icon className="size-5 text-primary-foreground" />
              </motion.span>

              <h3 className="mt-6 font-display text-xl font-semibold">{b.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {b.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
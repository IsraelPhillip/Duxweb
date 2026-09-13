import { motion } from "framer-motion";
import Button from "./Button";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Soft yellow glow, restrained — one accent moment, not a flood */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-dux-yellow/30 blur-[120px]"
      />

      <div className="container-dux relative grid lg:grid-cols-12 gap-10 pt-16 pb-20 md:pt-24 md:pb-28">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="lg:col-span-7"
        >
          <motion.p variants={item} className="text-sm font-medium text-dux-slate mb-6">
            Personal &amp; business banking, built for Nigeria
          </motion.p>

          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl leading-[1.05] font-medium tracking-tight max-w-xl"
          >
            Banking built around your next move.
          </motion.h1>

          <motion.p variants={item} className="mt-6 text-lg text-dux-slate max-w-md leading-relaxed">
            DUX gives individuals and businesses simple, dependable tools to save,
            spend and grow — without the paperwork or the wait.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="/personal#classic" variant="accent">
              Open an Account
            </Button>
            <Button href="/personal" variant="outline" icon={false}>
              Explore Banking
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="lg:col-span-5 flex items-end"
        >
          {/* TODO: replace with a real photo/brand image once provided.
              Swap this div for an <img> or background-image using the
              supplied asset — keep the aspect-[4/5] + rounded-xl2 wrapper
              so it matches the layout. */}
          <div className="w-full aspect-[4/5] rounded-xl2 bg-dux-ink relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-dux-ink via-dux-ink/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-white/60 text-xs uppercase tracking-wide mb-2">
                Image placeholder — awaiting brand photography
              </p>
              <p className="text-white text-xl font-display">
                Move money in seconds, from anywhere.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

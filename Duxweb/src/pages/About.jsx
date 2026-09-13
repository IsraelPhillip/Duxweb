import { motion } from "framer-motion";
import CTASection from "../components/CTASection";
import ImagePlaceholder from "../components/ImagePlaceholder";
import { site } from "../data/site";

export default function About() {
  return (
    <>
      <section className="container-dux pt-16 pb-16 md:pt-24 md:pb-20 grid md:grid-cols-[1fr_auto] gap-10 items-end">
        <motion.div
          id="who-we-are"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="scroll-mt-28 max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl font-display font-medium tracking-tight leading-[1.1]">
            About {site.shortName}
          </h1>
          <p className="mt-6 text-xl text-dux-slate leading-relaxed">
            {site.brandStatement}
          </p>
        </motion.div>
        <ImagePlaceholder
          label="DUX team or customers — warm, everyday banking moment"
          aspect="aspect-[4/3]"
          className="hidden md:flex w-64"
        />
      </section>

      <section id="why" className="scroll-mt-28 bg-neutral-100">
        <div className="container-dux py-16 md:py-20 grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.45 }}
          >
            <h2 className="text-2xl font-display font-medium">Who we serve</h2>
            <p className="mt-3 text-dux-slate leading-relaxed">
              Individuals who want banking that fits real life, and businesses
              that need financial tools built for how they actually operate —
              not how a traditional bank assumes they should.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.45, delay: 0.08 }}
          >
            <h2 className="text-2xl font-display font-medium">Why we exist</h2>
            <p className="mt-3 text-dux-slate leading-relaxed">
              To make banking simpler, more accessible and more useful — for
              people and businesses that traditional banking has made to feel
              like an afterthought.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="careers" className="scroll-mt-28 container-dux py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45 }}
          className="max-w-2xl"
        >
          <h2 className="text-2xl font-display font-medium">Careers</h2>
          <p className="mt-3 text-dux-slate leading-relaxed">
            {/* TODO: link to real careers page/portal, or remove this section if none exists yet */}
            Interested in working with us? Reach out through our contact page and
            we'll point you in the right direction.
          </p>
        </motion.div>
      </section>

      <CTASection
        heading={`Questions about ${site.shortName}?`}
        supporting="Our team is happy to walk you through anything."
        ctaLabel="Contact Us"
        ctaHref="/contact"
      />
    </>
  );
}

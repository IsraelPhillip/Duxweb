import { motion } from "framer-motion";
import Button from "./Button";
import { site } from "../data/site";

export default function CTASection({
  heading = "Ready when you are.",
  supporting = "Open an account in minutes and start banking the way you actually live.",
  ctaLabel = "Open an Account",
  ctaHref = site.onboardingUrl,
  ctaTarget = "_blank",
}) {
  return (
    <section className="bg-dux-yellow">
      <div className="container-dux py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-display font-medium max-w-md">
              {heading}
            </h2>
            <p className="mt-2 text-sm md:text-base text-dux-ink/80 max-w-md">
              {supporting}
            </p>
          </div>
          <Button href={ctaHref} target={ctaTarget} variant="primary" className="shrink-0">
            {ctaLabel}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

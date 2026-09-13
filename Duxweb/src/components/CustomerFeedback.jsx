import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { feedbackUrl } from "../data/socials";
import Button from "./Button";

// No fabricated testimonials — the real feedback channel is the source of
// truth here. Swap in verified quotes only once available.
export default function CustomerFeedback() {
  return (
    <section className="container-dux py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="rounded-xl2 border border-dux-ink/10 bg-white p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
      >
        <div className="flex items-start gap-4 max-w-lg">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-dux-yellow/25">
            <MessageCircle size={20} />
          </span>
          <div>
            <h3 className="text-xl md:text-2xl font-display font-medium">
              Your experience shapes how we build.
            </h3>
            <p className="mt-2 text-sm text-dux-slate leading-relaxed">
              Tell us what's working and what isn't — every piece of feedback goes
              somewhere.
            </p>
          </div>
        </div>

        <Button href={feedbackUrl} target="_blank" variant="accent" className="shrink-0">
          Tell us how we're doing
        </Button>
      </motion.div>
    </section>
  );
}

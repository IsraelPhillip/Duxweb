import { motion } from "framer-motion";
import { ShieldCheck, Smartphone, Users, Building2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { site } from "../data/site";

// No customer counts, transaction volumes, years-in-business or awards here —
// only add stats once they're verified against DUX's official materials.
const pillars = [
  {
    icon: ShieldCheck,
    title: "Regulated & secure",
    body: site.regulatory, // TODO: confirm exact regulatory wording
  },
  {
    icon: Smartphone,
    title: "Digital-first",
    body: "Bank from your phone, without needing to visit a branch for everyday transactions.",
  },
  {
    icon: Users,
    title: "Customer-focused",
    body: "Support that treats your money — and your time — with the seriousness they deserve.",
  },
  {
    icon: Building2,
    title: "Business-friendly",
    body: "Financial tools shaped around how Nigerian SMEs actually operate and grow.",
  },
];

export default function TrustSection() {
  return (
    <section className="bg-dux-ink text-white">
      <div className="container-dux py-20 md:py-28">
        <SectionHeading
          heading={`Why bank with ${site.shortName}.`}
          supporting="Straightforward reasons, not marketing hype."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-dux-yellow mb-5">
                <p.icon size={18} />
              </span>
              <h3 className="text-base font-display font-medium">{p.title}</h3>
              <p className="mt-2 text-sm text-white/65 leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

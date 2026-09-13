import { motion } from "framer-motion";
import { UserPlus, Landmark, Briefcase, PhoneCall, ArrowRight } from "lucide-react";

const actions = [
  { label: "Open an Account", icon: UserPlus, href: "/personal#classic" },
  { label: "Get a Loan", icon: Landmark, href: "/loans" },
  { label: "Business Banking", icon: Briefcase, href: "/business" },
  { label: "Contact Us", icon: PhoneCall, href: "/contact" },
];

export default function QuickActions() {
  return (
    <section className="container-dux -mt-4 md:-mt-8 relative z-10 pb-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {actions.map(({ label, icon: Icon, href }, i) => (
          <motion.a
            key={label}
            href={href}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            whileHover={{ y: -3 }}
            className="group flex items-center justify-between rounded-xl2 border border-dux-ink/10 bg-white p-5 shadow-card transition-colors hover:border-dux-yellow"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-dux-yellow/25 text-dux-ink transition-transform group-hover:scale-105">
                <Icon size={18} />
              </span>
              <span className="text-sm font-medium">{label}</span>
            </div>
            <ArrowRight
              size={16}
              className="text-dux-slate transition-transform group-hover:translate-x-1"
            />
          </motion.a>
        ))}
      </div>
    </section>
  );
}

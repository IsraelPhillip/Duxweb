import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { site } from "../data/site";
import { feedbackUrl } from "../data/socials";
import SocialLinks from "../components/SocialLinks";
import Button from "../components/Button";

const actions = [
  {
    icon: Phone,
    label: "Call",
    value: site.contact.phoneDisplay,
    href: `tel:${site.contact.phone}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: site.contact.email,
    href: `mailto:${site.contact.email}`,
  },
  {
    icon: MapPin,
    label: "Visit",
    value: site.contact.address,
    href: undefined,
  },
  {
    icon: MessageCircle,
    label: "Send Feedback",
    value: "Tell us how we're doing",
    href: feedbackUrl,
  },
];

export default function Contact() {
  return (
    <>
      <section id="reach-us" className="scroll-mt-28 container-dux pt-16 pb-14 md:pt-24 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl font-display font-medium tracking-tight leading-[1.1]">
            We're easy to reach.
          </h1>
          <p className="mt-5 text-lg text-dux-slate leading-relaxed">
            Call, email, visit, or send us feedback — whichever works for you.
          </p>
        </motion.div>
      </section>

      <section id="branch" className="scroll-mt-28 container-dux pb-16">
        <div className="grid sm:grid-cols-2 gap-5">
          {actions.map(({ icon: Icon, label, value, href }, i) => {
            const content = (
              <>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-dux-yellow/25 text-dux-ink">
                  <Icon size={18} />
                </span>
                <div className="mt-4">
                  <p className="text-sm font-medium text-dux-slate">{label}</p>
                  <p className="mt-1 font-display text-lg">{value}</p>
                </div>
              </>
            );

            const className =
              "block rounded-xl2 border border-dux-ink/10 bg-white p-6 shadow-card transition-colors hover:border-dux-yellow";

            return (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                {href ? (
                  <a
                    href={href}
                    target={label === "Send Feedback" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {content}
                  </a>
                ) : (
                  <div className={className}>{content}</div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* NOTE: the email above (info@duxbankmfb) looks like it may be
            missing a domain suffix (.com / .ng) — please confirm the full
            address so the mailto: link actually works. */}
      </section>

      <section id="feedback" className="scroll-mt-28 bg-neutral-100">
        <div className="container-dux py-16 flex flex-col items-start gap-4">
          <h2 className="text-2xl font-display font-medium">Follow along</h2>
          <SocialLinks className="text-dux-ink/70" />
          <Button href={feedbackUrl} target="_blank" variant="outline" icon={false} className="mt-2">
            Customer Feedback Portal
          </Button>
        </div>
      </section>
    </>
  );
}

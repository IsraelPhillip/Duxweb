import { motion } from "framer-motion";
import AccountCard from "../components/AccountCard";
import CTASection from "../components/CTASection";
import ImagePlaceholder from "../components/ImagePlaceholder";
import { accounts } from "../data/accounts";
import { site } from "../data/site";

export default function Personal() {
  const personalAccounts = accounts.filter((a) => a.category === "personal");
  const savingsAccounts = accounts.filter((a) => a.category === "savings");

  return (
    <>
      <section className="container-dux pt-16 pb-14 md:pt-24 md:pb-16 grid md:grid-cols-[1fr_auto] gap-10 items-end">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl font-display font-medium tracking-tight leading-[1.1]">
            Personal banking, without the friction.
          </h1>
          <p className="mt-5 text-lg text-dux-slate leading-relaxed">
            Everyday accounts and savings plans designed around how you
            actually live and spend. Tap "About this" on any account for full
            details and requirements.
          </p>
        </motion.div>
        <ImagePlaceholder
          label="Customer happily using DUX mobile banking on their phone"
          aspect="aspect-[4/3]"
          className="hidden md:flex w-64"
        />
      </section>

      <div className="container-dux pb-16">
        <div className="grid sm:grid-cols-2 gap-5 items-start">
          {personalAccounts.map((a, i) => (
            <AccountCard key={a.id} account={a} index={i} />
          ))}
        </div>
      </div>

      <section id="savings-section" className="scroll-mt-28 bg-neutral-100">
        <div className="container-dux py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-display font-medium">Savings</h2>
          <p className="mt-2 text-dux-slate max-w-lg">
            Build the habit or save toward a specific goal — whichever fits.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-5 items-start">
            {savingsAccounts.map((a, i) => (
              <AccountCard key={a.id} account={a} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to open your account?"
        supporting="Get started on internet banking in minutes."
        ctaLabel="Open an Account"
        ctaHref={site.onboardingUrl}
        ctaTarget="_blank"
      />
    </>
  );
}

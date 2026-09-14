import { motion } from "framer-motion";
import AccountCard from "../components/AccountCard";
import LoanCard from "../components/LoanCard";
import CTASection from "../components/CTASection";
import ImagePlaceholder from "../components/ImagePlaceholder";
import { accounts } from "../data/accounts";
import { posProduct } from "../data/businessProducts";
import { site } from "../data/site";

export default function Business() {
  const businessAccounts = accounts.filter((a) => a.category === "business");

  return (
    <>
      <section className="bg-dux-ink text-white">
        <div className="container-dux pt-16 pb-14 md:pt-24 md:pb-16 grid md:grid-cols-[1fr_auto] gap-10 items-end">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl font-display font-medium tracking-tight leading-[1.1]">
              Give your business room to grow.
            </h1>
            <p className="mt-5 text-lg text-white/70 leading-relaxed">
              A financial home for companies, organizations and registered
              businesses.
            </p>
          </motion.div>
          <ImagePlaceholder
            label="Business owner accepting a payment with a DUX POS terminal"
            aspect="aspect-[4/3]"
            dark
            className="hidden md:flex w-64"
          />
        </div>
      </section>

      <div className="container-dux py-16 md:py-20">
        <div className="grid sm:grid-cols-2 gap-5 items-start max-w-3xl">
          {businessAccounts.map((a, i) => (
            <AccountCard key={a.id} account={a} index={i} />
          ))}
        </div>

        <div className="mt-10 max-w-3xl">
          <h2 className="text-2xl font-display font-medium">POS solutions</h2>
          <p className="mt-2 text-dux-slate max-w-lg">
            Give customers more ways to pay and keep your business moving.
          </p>
          <div className="mt-6 max-w-xl">
            <LoanCard loan={posProduct} />
          </div>
        </div>
      </div>

      <CTASection
        heading="Let's set your business up right."
        supporting="Open a corporate account and get support built for growth."
        ctaLabel="Open an Account"
        ctaHref={site.onboardingUrl}
        ctaTarget="_blank"
      />
    </>
  );
}

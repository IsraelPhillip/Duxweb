import { motion } from "framer-motion";
import LoanCard from "../components/LoanCard";
import CTASection from "../components/CTASection";
import ImagePlaceholder from "../components/ImagePlaceholder";
import { loans } from "../data/loans";

export default function Loans() {
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
            Capital for your next move.
          </h1>
          <p className="mt-5 text-lg text-dux-slate leading-relaxed">
            Financing for salaried workers, travelers, and business owners.
            Tap "About this" for full details, or "Apply Now" to start your
            application and upload documents directly.
          </p>
        </motion.div>
        <ImagePlaceholder
          label="Customer smiling, holding cash after a loan disbursement"
          aspect="aspect-[4/3]"
          className="hidden md:flex w-64"
        />
      </section>

      <div className="container-dux pb-16">
        <div className="grid md:grid-cols-2 gap-5">
          {loans.map((loan, i) => (
            <LoanCard key={loan.id} loan={loan} index={i} />
          ))}
        </div>
      </div>

      <div className="container-dux pb-16">
        <p className="text-xs text-dux-slate max-w-xl">
          {/* TODO: replace with verified eligibility/rate disclosure copy */}
          Loan approval is subject to eligibility and DUX Microfinance Bank's
          lending criteria. Terms, rates and limits are confirmed during
          application.
        </p>
      </div>

      <CTASection
        heading="Not sure which loan fits?"
        supporting="Speak with our team and we'll point you to the right option."
        ctaLabel="Contact Us"
        ctaHref="/contact"
      />
    </>
  );
}

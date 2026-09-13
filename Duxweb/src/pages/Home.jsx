import Hero from "../components/Hero";
import QuickActions from "../components/QuickActions";
import SectionHeading from "../components/SectionHeading";
import AccountCard from "../components/AccountCard";
import LoanCard from "../components/LoanCard";
import TrustSection from "../components/TrustSection";
import CustomerFeedback from "../components/CustomerFeedback";
import CTASection from "../components/CTASection";
import Button from "../components/Button";
import ImagePlaceholder from "../components/ImagePlaceholder";
import { accounts } from "../data/accounts";
import { loans } from "../data/loans";

export default function Home() {
  const personalAccounts = accounts.filter((a) => a.category === "personal");
  const savingsAccounts = accounts.filter((a) => a.category === "savings");
  const businessAccounts = accounts.filter((a) => a.category === "business");

  return (
    <>
      <Hero />
      <QuickActions />

      {/* Personal banking */}
      <section className="container-dux py-20 md:py-28">
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-end">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <SectionHeading
              heading="Money management that moves with you."
              supporting="From everyday banking to saving for what's next, DUX gives you simple financial tools designed around your life."
            />
            <Button href="/personal" variant="outline" icon={false} className="shrink-0">
              View personal banking
            </Button>
          </div>
          <ImagePlaceholder
            label="Happy DUX customer using the mobile app on their phone"
            aspect="aspect-[4/3]"
            className="hidden lg:flex w-56"
          />
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
          {personalAccounts.map((a, i) => (
            <AccountCard key={a.id} account={a} index={i} />
          ))}
        </div>
      </section>

      {/* Savings */}
      <section className="bg-neutral-100">
        <div className="container-dux py-20 md:py-28">
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-end">
            <SectionHeading
              heading="Save with a plan, not just a promise."
              supporting="Whether you're saving daily or working toward a bigger goal, there's a savings plan built for it."
            />
            <ImagePlaceholder
              label="Customer smiling while checking their savings balance on their phone"
              aspect="aspect-[4/3]"
              className="hidden lg:flex w-56"
            />
          </div>

          <div className="mt-12 grid sm:grid-cols-2 gap-5 items-start max-w-3xl">
            {savingsAccounts.map((a, i) => (
              <AccountCard key={a.id} account={a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Business */}
      <section className="container-dux py-20 md:py-28">
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-end">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <SectionHeading
              heading="Give your business room to grow."
              supporting="A financial home for companies, organizations and registered businesses."
            />
            <Button href="/business" variant="outline" icon={false} className="shrink-0">
              Explore Business Banking
            </Button>
          </div>
          <ImagePlaceholder
            label="Business owner using a DUX POS terminal to take a payment"
            aspect="aspect-[4/3]"
            className="hidden lg:flex w-56"
          />
        </div>

        <div className="mt-12 grid sm:grid-cols-2 gap-5 max-w-3xl items-start">
          {businessAccounts.map((a, i) => (
            <AccountCard key={a.id} account={a} index={i} />
          ))}
        </div>
      </section>

      {/* Loans */}
      <section className="bg-neutral-100">
        <div className="container-dux py-20 md:py-28">
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-end">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <SectionHeading
                heading="Capital for your next move."
                supporting="Financing shaped around real needs — for salaried workers, travelers and business owners."
              />
              <Button href="/loans" variant="outline" icon={false} className="shrink-0">
                Explore all financing options
              </Button>
            </div>
            <ImagePlaceholder
              label="Customer smiling, holding cash after a loan disbursement, phone in hand"
              aspect="aspect-[4/3]"
              className="hidden lg:flex w-56"
            />
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-5">
            {loans.map((loan, i) => (
              <LoanCard key={loan.id} loan={loan} index={i} />
            ))}
          </div>
        </div>
      </section>

      <TrustSection />
      <CustomerFeedback />
      <CTASection />
    </>
  );
}

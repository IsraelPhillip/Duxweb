import { useState } from "react";
import { motion } from "framer-motion";
import { iconMap } from "./icons";
import Button from "./Button";
import DetailModal from "./DetailModal";
import LoanApplicationModal from "./LoanApplicationModal";

export default function LoanCard({ loan, index = 0 }) {
  const [open, setOpen] = useState(false);
  const [applyOpen, setApplyOpen] = useState(false);
  const Icon = iconMap[loan.icon];

  return (
    <>
      <motion.div
        id={loan.id}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.45, delay: (index % 4) * 0.08 }}
        className="scroll-mt-28 rounded-xl2 border border-dux-ink/10 bg-dux-ink text-white p-7"
      >
        <div className="flex items-center justify-between">
          {Icon && (
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-dux-yellow/20 text-dux-yellow">
              <Icon size={18} />
            </span>
          )}
          {loan.openingBalance && (
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
              Opens at {loan.openingBalance}
            </span>
          )}
        </div>

        <h3 className="mt-5 text-xl font-display font-bold text-white">{loan.name}</h3>
        <p className="mt-2 text-sm text-white/70 leading-relaxed">{loan.description}</p>

        <dl className="mt-5 space-y-2 border-t border-white/10 pt-4">
          <div className="flex gap-2 text-xs">
            <dt className="text-white/50 shrink-0">Who it's for</dt>
            <dd className="text-white/90">{loan.whoFor}</dd>
          </div>
          <div className="flex gap-2 text-xs">
            <dt className="text-white/50 shrink-0">Key benefit</dt>
            <dd className="text-white/90">{loan.benefit}</dd>
          </div>
        </dl>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-white underline decoration-dux-yellow decoration-2 underline-offset-4"
          >
            About this
          </button>

          <Button onClick={() => setApplyOpen(true)} variant="accent" icon={false} className="ml-auto">
            Apply Now
          </Button>
        </div>
      </motion.div>

      <DetailModal open={open} onClose={() => setOpen(false)} title={loan.name} dark>
        <p className="text-sm text-white/80 leading-relaxed">{loan.description}</p>

        {loan.features?.length > 0 && (
          <div className="mt-5">
            <p className="text-xs font-medium uppercase tracking-wide text-white/50 mb-2">
              Features
            </p>
            <ul className="space-y-1.5 text-sm text-white/90">
              {loan.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-dux-yellow" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        )}

        {loan.requirements?.length > 0 && (
          <div className="mt-5">
            <p className="text-xs font-medium uppercase tracking-wide text-white/50 mb-2">
              Requirements
            </p>
            <ul className="space-y-1.5 text-sm text-white/90">
              {loan.requirements.map((r) => (
                <li key={r} className="flex gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white/40" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        )}

        <Button
          onClick={() => {
            setOpen(false);
            setApplyOpen(true);
          }}
          variant="accent"
          icon={false}
          className="mt-6 w-full justify-center"
        >
          Apply Now
        </Button>
      </DetailModal>

      <LoanApplicationModal loan={loan} open={applyOpen} onClose={() => setApplyOpen(false)} />
    </>
  );
}

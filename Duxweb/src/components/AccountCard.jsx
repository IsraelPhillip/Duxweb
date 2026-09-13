import { useState } from "react";
import { motion } from "framer-motion";
import { iconMap } from "./icons";
import { site } from "../data/site";
import Button from "./Button";
import DetailModal from "./DetailModal";

export default function AccountCard({ account, index = 0 }) {
  const [open, setOpen] = useState(false);
  const Icon = iconMap[account.icon];

  return (
    <>
      <motion.div
        id={account.id}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.45, delay: (index % 4) * 0.06 }}
        className="scroll-mt-28 rounded-xl2 border border-dux-ink/10 bg-white p-6 shadow-card"
      >
        <div className="flex items-start justify-between gap-3">
          {Icon && (
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-dux-yellow/25 text-dux-ink">
              <Icon size={18} />
            </span>
          )}
          {account.openingBalance && (
            <span className="shrink-0 rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-dux-slate">
              Opens at {account.openingBalance}
            </span>
          )}
        </div>

        <h3 className="mt-5 text-lg font-display font-medium">{account.name}</h3>
        {account.tagline && (
          <p className="mt-1 text-sm font-medium text-dux-slate">{account.tagline}</p>
        )}
        {account.audience && (
          <p className="mt-2 text-xs text-dux-slate">{account.audience}</p>
        )}

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-dux-ink underline decoration-dux-yellow decoration-2 underline-offset-4"
          >
            About this
          </button>

          <Button
            href={site.onboardingUrl}
            target="_blank"
            variant="accent"
            icon={false}
            className="ml-auto"
          >
            Open
          </Button>
        </div>
      </motion.div>

      <DetailModal
        open={open}
        onClose={() => setOpen(false)}
        title={account.name}
        tagline={account.tagline}
      >
        {account.description && (
          <p className="text-sm text-dux-slate leading-relaxed">{account.description}</p>
        )}

        {(account.minimumSaving || account.noticePeriod) && (
          <div className="mt-4 flex flex-wrap gap-4 text-xs text-dux-slate">
            {account.minimumSaving && (
              <span>
                <span className="font-medium text-dux-ink">Minimum saving: </span>
                {account.minimumSaving}
              </span>
            )}
            {account.noticePeriod && (
              <span>
                <span className="font-medium text-dux-ink">Withdrawal notice: </span>
                {account.noticePeriod}
              </span>
            )}
          </div>
        )}

        {account.features?.length > 0 && (
          <div className="mt-5">
            <p className="text-xs font-medium uppercase tracking-wide text-dux-slate mb-2">
              Features
            </p>
            <ul className="space-y-1.5 text-sm text-dux-ink">
              {account.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-dux-yellow-dark" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        )}

        {account.requirements?.length > 0 && (
          <div className="mt-5">
            <p className="text-xs font-medium uppercase tracking-wide text-dux-slate mb-2">
              Requirements
            </p>
            <ul className="space-y-1.5 text-sm text-dux-ink">
              {account.requirements.map((r) => (
                <li key={r} className="flex gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-dux-ink/40" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        )}

        <Button
          href={site.onboardingUrl}
          target="_blank"
          variant="accent"
          icon={false}
          className="mt-6 w-full justify-center"
        >
          Open This Account
        </Button>
      </DetailModal>
    </>
  );
}

import { motion } from "framer-motion";
import { Smartphone, Landmark } from "lucide-react";
import { site } from "../data/site";

/**
 * Fixed to the bottom-right corner, scrolls along with the page (position:
 * fixed). "Download App" is intentionally non-functional for now — the app
 * isn't built yet — but stays visible so the affordance exists once it is.
 * Swap the disabled <button> for a real <a href="..."> to the app store
 * links when ready.
 */
export default function StickyActionBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.6 }}
      className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2"
    >
      <button
        type="button"
        disabled
        aria-disabled="true"
        title="Coming soon"
        className="group relative inline-flex items-center gap-2 rounded-full bg-dux-ink/90 pl-4 pr-3 py-3 text-sm font-medium text-white/70 shadow-card cursor-not-allowed"
      >
        <Smartphone size={16} />
        <span className="hidden sm:inline">Download App</span>
        <span className="rounded-full bg-dux-yellow px-2 py-0.5 text-[10px] font-semibold text-dux-ink">
          Soon
        </span>
      </button>

      <a
        href={site.internetBankingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-dux-yellow pl-4 pr-4 py-3 text-sm font-medium text-dux-ink shadow-card hover:bg-dux-yellow-dark transition-colors"
      >
        <Landmark size={16} />
        <span className="hidden sm:inline">Internet Banking</span>
      </a>
    </motion.div>
  );
}

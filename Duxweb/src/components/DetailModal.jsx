import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useLockBodyScroll } from "../hooks/useLockBodyScroll";

/**
 * Generic popup used by both AccountCard and LoanCard for "About this".
 * Backdrop is blurred; clicking it (or the X, or Escape) closes the popup.
 */
export default function DetailModal({ open, onClose, title, tagline, dark = false, children }) {
  useLockBodyScroll(open);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center bg-dux-ink/50 backdrop-blur-sm p-0 sm:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 24, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 24, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="detail-modal-title"
            className={`w-full sm:max-w-lg max-h-[85vh] overflow-y-auto rounded-t-xl2 sm:rounded-xl2 p-6 sm:p-8 ${
              dark ? "bg-dux-ink text-white" : "bg-white text-dux-ink"
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 id="detail-modal-title" className="text-xl font-display font-medium">
                  {title}
                </h3>
                {tagline && (
                  <p className={`mt-1 text-sm ${dark ? "text-white/70" : "text-dux-slate"}`}>
                    {tagline}
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className={`p-1 -m-1 shrink-0 ${dark ? "text-white/60 hover:text-white" : "text-dux-slate hover:text-dux-ink"}`}
              >
                <X size={20} />
              </button>
            </div>

            <div className="mt-6">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

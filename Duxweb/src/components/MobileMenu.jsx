import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { navigation } from "../data/navigation";
import { site } from "../data/site";
import { useLockBodyScroll } from "../hooks/useLockBodyScroll";
import Button from "./Button";
import logo from "../assets/images/logo.png";

export default function MobileMenu({ open, onClose }) {
  useLockBodyScroll(open);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          // fixed + its own scroll container, independent of the page
          // behind it — this, plus the body scroll lock, stops the mobile
          // menu from fighting with page scroll underneath it.
          className="fixed inset-0 z-[60] bg-neutral-50 lg:hidden overflow-y-auto overscroll-contain"
        >
          <div className="container-dux flex h-20 items-center justify-between">
            <img src={logo} alt={site.fullName} className="h-9 w-auto rounded-lg" />
            <button aria-label="Close menu" onClick={onClose} className="p-2">
              <X size={24} />
            </button>
          </div>

          <motion.nav
            initial="closed"
            animate="open"
            variants={{
              open: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
            }}
            className="container-dux flex flex-col gap-1 pb-10"
          >
            {navigation.map((item) => (
              <div key={item.label} className="py-4 border-b border-dux-ink/10">
                <motion.a
                  variants={{
                    closed: { opacity: 0, y: 8 },
                    open: { opacity: 1, y: 0 },
                  }}
                  href={item.href}
                  onClick={onClose}
                  className="text-2xl font-display font-medium"
                >
                  {item.label}
                </motion.a>
                <div className="mt-3 flex flex-col gap-2 pl-1">
                  {item.menu.map((sub) => (
                    <a
                      key={sub.label}
                      href={sub.href}
                      onClick={onClose}
                      className="text-sm text-dux-slate"
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}

            <div className="mt-6">
              <Button
                href={site.onboardingUrl}
                target="_blank"
                variant="accent"
                className="w-full justify-center"
              >
                Open an Account
              </Button>
            </div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

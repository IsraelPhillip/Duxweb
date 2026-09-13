import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";
import { navigation } from "../data/navigation";
import { site } from "../data/site";
import Button from "./Button";
import MobileMenu from "./MobileMenu";
import logo from "../assets/images/logo.png";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-neutral-50/90 backdrop-blur-md border-b border-dux-ink/10" : "bg-transparent"
      }`}
      onMouseLeave={() => setOpenMenu(null)}
    >
      <div className="container-dux flex h-20 items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt={site.fullName} className="h-10 w-auto rounded-lg" />
        </a>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {navigation.map((item) => (
            <div key={item.label} onMouseEnter={() => setOpenMenu(item.label)}>
              <a
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-dux-ink/90 hover:text-dux-ink rounded-full transition-colors"
              >
                {item.label}
              </a>
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button href={site.onboardingUrl} target="_blank" variant="accent">
            Open an Account
          </Button>
        </div>

        <button
          className="lg:hidden p-2"
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mega menu panel */}
      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="hidden lg:block absolute left-0 right-0 border-t border-dux-ink/10 bg-neutral-50 shadow-card"
          >
            <div className="container-dux py-8 grid grid-cols-4 gap-6">
              {navigation
                .find((n) => n.label === openMenu)
                ?.menu.map((sub) => (
                  <a
                    key={sub.label}
                    href={sub.href}
                    className="text-sm font-medium text-dux-slate hover:text-dux-ink transition-colors"
                  >
                    {sub.label}
                  </a>
                ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}

import { useEffect } from "react";

/**
 * Locks page scroll while `active` is true — used by the mobile menu and
 * every modal so the page behind them doesn't scroll along with/underneath
 * the overlay.
 */
export function useLockBodyScroll(active) {
  useEffect(() => {
    if (!active) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [active]);
}

import { ArrowUpRight } from "lucide-react";

const variants = {
  primary: "bg-dux-ink text-white hover:bg-dux-charcoal",
  accent: "bg-dux-yellow text-dux-ink hover:bg-dux-yellow-dark",
  outline: "bg-transparent text-dux-ink border border-dux-ink/20 hover:border-dux-ink",
  ghost: "bg-transparent text-dux-ink hover:bg-dux-ink/5",
};

/**
 * Button used as either <a> (has href), <button> (has onClick), or a submit
 * button inside a form (type="submit").
 */
export default function Button({
  href,
  onClick,
  children,
  variant = "primary",
  icon = true,
  className = "",
  type = "button",
  target,
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-colors duration-200 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={classes}
      >
        {children}
        {icon && <ArrowUpRight size={16} aria-hidden="true" />}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
      {icon && <ArrowUpRight size={16} aria-hidden="true" />}
    </button>
  );
}

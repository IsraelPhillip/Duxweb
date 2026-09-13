// lucide-react v1 removed all trademarked brand icons (Facebook, Instagram,
// LinkedIn, etc.). These are small, dependency-free replacements — plain
// text glyphs instead of SVG <text> (which can silently fail to render
// depending on font availability), so they show up reliably everywhere.

export function FacebookIcon({ size = 16, className = "" }) {
  return (
    <span
      className={`inline-flex items-center justify-center font-bold leading-none ${className}`}
      style={{ width: size, height: size, fontSize: size * 0.9 }}
      aria-hidden="true"
    >
      f
    </span>
  );
}

export function LinkedinIcon({ size = 16, className = "" }) {
  return (
    <span
      className={`inline-flex items-center justify-center font-bold leading-none tracking-tight ${className}`}
      style={{ width: size, height: size, fontSize: size * 0.62 }}
      aria-hidden="true"
    >
      in
    </span>
  );
}

export function InstagramIcon({ size = 16, className = "" }) {
  // Generic camera pictogram — evokes a photo-sharing platform without
  // reproducing any specific brand's logo artwork.
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="6" width="18" height="14" rx="3" />
      <circle cx="12" cy="13" r="3.5" />
      <circle cx="16.5" cy="9.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

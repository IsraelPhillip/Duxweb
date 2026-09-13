import { Image as ImageIcon } from "lucide-react";

/**
 * A styled placeholder for a photo that hasn't been supplied yet. Once you
 * have a real image, replace the whole component instance with a plain
 * <img src="..." className="w-full h-full object-cover rounded-xl2" />
 * inside the same wrapper div (keep the aspect-ratio class so layout
 * doesn't shift).
 *
 * `label` should describe exactly what photo belongs here so it's easy to
 * brief a photographer or pick a licensed stock photo — e.g. "Customer
 * using a DUX POS terminal in a shop".
 */
export default function ImagePlaceholder({ label, aspect = "aspect-[4/3]", dark = false, className = "" }) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl2 flex items-center justify-center text-center p-6 ${aspect} ${
        dark ? "bg-white/5 border border-white/10" : "bg-neutral-100 border border-dux-ink/10"
      } ${className}`}
    >
      <div className={dark ? "text-white/40" : "text-dux-slate/70"}>
        <ImageIcon size={22} className="mx-auto mb-2" />
        <p className="text-xs max-w-[220px] leading-relaxed">{label}</p>
      </div>
    </div>
  );
}

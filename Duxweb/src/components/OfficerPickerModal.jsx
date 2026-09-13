import { Star } from "lucide-react";
import DetailModal from "./DetailModal";
import { officers } from "../data/officers";

export default function OfficerPickerModal({ open, onClose, onSelect }) {
  return (
    <DetailModal
      open={open}
      onClose={onClose}
      title="Choose an account officer"
      tagline="Select who introduced you, or referred you, to DUX."
    >
      <div className="space-y-3">
        {officers.map((officer) => (
          <button
            key={officer.id}
            type="button"
            onClick={() => {
              onSelect(officer.name);
              onClose();
            }}
            className="w-full flex items-center justify-between gap-3 rounded-lg border border-dux-ink/10 p-3 text-left hover:border-dux-yellow transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-dux-yellow/25 text-sm font-semibold text-dux-ink">
                {officer.initials}
              </span>
              <div>
                <p className="text-sm font-medium text-dux-ink">{officer.name}</p>
                <div className="mt-0.5 flex items-center gap-1 text-xs text-dux-slate">
                  <Star size={12} className="fill-dux-yellow-dark text-dux-yellow-dark" />
                  {officer.rating}
                </div>
              </div>
            </div>
            <span className="shrink-0 text-xs font-medium text-dux-ink underline decoration-dux-yellow decoration-2 underline-offset-4">
              Select
            </span>
          </button>
        ))}
      </div>
    </DetailModal>
  );
}

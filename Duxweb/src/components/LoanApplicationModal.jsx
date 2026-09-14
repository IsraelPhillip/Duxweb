import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Paperclip, CheckCircle2, ChevronRight, Loader2 } from "lucide-react";
import Button from "./Button";
import OfficerPickerModal from "./OfficerPickerModal";
import { useLockBodyScroll } from "../hooks/useLockBodyScroll";
import { site } from "../data/site";

/**
 * Renders one file-upload row per requirement string, plus contact fields
 * and an optional "account officer" field.
 *
 * SUBMISSION: this posts to FormSubmit (https://formsubmit.co), a free
 * no-backend form relay that emails the submission — including attached
 * files — to site.contact.email. Two things to know:
 *   1. The FIRST time this is used, FormSubmit sends a confirmation email to
 *      that address that must be clicked to activate delivery.
 *   2. site.contact.email currently looks incomplete (missing a domain
 *      suffix) — this will not work until that's corrected in
 *      src/data/site.js.
 * If you'd rather use a different relay (Formspree, Web3Forms, your own
 * backend) or the destination email changes, this is the file to edit.
 */
export default function LoanApplicationModal({ loan, open, onClose }) {
  const [files, setFiles] = useState({});
  const [officerName, setOfficerName] = useState("");
  const [officerPickerOpen, setOfficerPickerOpen] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  useLockBodyScroll(open);

  if (!loan) return null;

  const handleFileChange = (requirement, fileList) => {
    setFiles((prev) => ({ ...prev, [requirement]: fileList?.[0] || null }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.target);
    formData.append(
      "_subject",
      `New ${loan.applicationType || "Loan"} application`
    );
    formData.append("product", loan.name);
    if (officerName) formData.append("accountOfficer", officerName);
    Object.entries(files).forEach(([requirement, file]) => {
      if (file) formData.append(requirement, file);
    });

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${site.contact.email}`, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const handleClose = () => {
    setStatus("idle");
    setFiles({});
    setOfficerName("");
    onClose();
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center bg-dux-ink/50 backdrop-blur-sm p-0 sm:p-6"
            onClick={handleClose}
          >
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 24, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="loan-modal-title"
              className="w-full sm:max-w-lg max-h-[90vh] overflow-y-auto rounded-t-xl2 sm:rounded-xl2 bg-white p-6 sm:p-8"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-dux-slate">
                    Apply for
                  </p>
                  <h3 id="loan-modal-title" className="text-xl font-display font-medium">
                    {loan.name}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={handleClose}
                  aria-label="Close"
                  className="p-1 -m-1 text-dux-slate hover:text-dux-ink"
                >
                  <X size={20} />
                </button>
              </div>

              {status === "success" ? (
                <div className="mt-8 flex flex-col items-center text-center py-6">
                  <CheckCircle2 size={40} className="text-dux-yellow-dark" />
                  <h4 className="mt-4 text-lg font-display font-medium">
                    Application sent
                  </h4>
                  <p className="mt-2 text-sm text-dux-slate max-w-sm">
                    Your {loan.name} application and documents have been sent
                    to our team. We'll be in touch shortly.
                  </p>
                  <Button variant="outline" icon={false} onClick={handleClose} className="mt-6">
                    Close
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                  <input type="hidden" name="product" value={loan.name} />
                  <input type="text" name="_honey" className="hidden" tabIndex="-1" autoComplete="off" />

                  <div className="grid sm:grid-cols-2 gap-4">
                    <label className="block">
                      <span className="text-xs font-medium text-dux-slate">Full name</span>
                      <input
                        type="text"
                        name="fullName"
                        required
                        className="mt-1 w-full rounded-lg border border-dux-ink/15 px-3 py-2.5 text-sm focus:border-dux-ink outline-none"
                      />
                    </label>
                    <label className="block">
                      <span className="text-xs font-medium text-dux-slate">Phone number</span>
                      <input
                        type="tel"
                        name="phone"
                        required
                        className="mt-1 w-full rounded-lg border border-dux-ink/15 px-3 py-2.5 text-sm focus:border-dux-ink outline-none"
                      />
                    </label>
                    <label className="block sm:col-span-2">
                      <span className="text-xs font-medium text-dux-slate">Email address</span>
                      <input
                        type="email"
                        name="email"
                        required
                        className="mt-1 w-full rounded-lg border border-dux-ink/15 px-3 py-2.5 text-sm focus:border-dux-ink outline-none"
                      />
                    </label>
                    <label className="block sm:col-span-2">
                      <span className="text-xs font-medium text-dux-slate">
                        Account officer / who introduced you{" "}
                        <span className="text-dux-slate/60">(optional)</span>
                      </span>
                      <div className="mt-1 flex gap-2">
                        <input
                          type="text"
                          name="accountOfficer"
                          value={officerName}
                          onChange={(e) => setOfficerName(e.target.value)}
                          placeholder="Type a name, or choose one"
                          className="w-full rounded-lg border border-dux-ink/15 px-3 py-2.5 text-sm focus:border-dux-ink outline-none"
                        />
                        <button
                          type="button"
                          onClick={() => setOfficerPickerOpen(true)}
                          className="shrink-0 inline-flex items-center gap-1 rounded-lg border border-dux-ink/15 px-3 text-xs font-medium text-dux-ink hover:border-dux-ink"
                        >
                          Choose
                          <ChevronRight size={14} />
                        </button>
                      </div>
                    </label>
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-dux-slate mb-3">
                      Required documents
                    </p>
                    <div className="space-y-3">
                      {loan.requirements.map((req) => (
                        <div
                          key={req}
                          className="flex items-center justify-between gap-3 rounded-lg border border-dux-ink/10 px-3 py-2.5"
                        >
                          <span className="text-sm text-dux-ink">{req}</span>
                          <label className="shrink-0 inline-flex items-center gap-1.5 text-xs font-medium text-dux-ink cursor-pointer">
                            <Paperclip size={14} />
                            {files[req] ? "Change" : "Upload"}
                            <input
                              type="file"
                              className="sr-only"
                              onChange={(e) => handleFileChange(req, e.target.files)}
                            />
                          </label>
                        </div>
                      ))}
                    </div>
                    {Object.values(files).some(Boolean) && (
                      <p className="mt-2 text-xs text-dux-slate">
                        {Object.values(files).filter(Boolean).length} of{" "}
                        {loan.requirements.length} file(s) attached.
                      </p>
                    )}
                  </div>

                  {status === "error" && (
                    <p className="text-xs text-red-600">
                      Something went wrong sending your application. Please try
                      again, or contact us directly at {site.contact.phoneDisplay}.
                    </p>
                  )}

                  <Button
                    type="submit"
                    variant="accent"
                    icon={false}
                    className="w-full justify-center"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Submit Application"
                    )}
                  </Button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <OfficerPickerModal
        open={officerPickerOpen}
        onClose={() => setOfficerPickerOpen(false)}
        onSelect={setOfficerName}
      />
    </>
  );
}

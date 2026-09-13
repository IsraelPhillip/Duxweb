// Source of truth: content supplied directly. Wording has been lightly
// cleaned up (capitalization, list formatting) but no facts, figures or
// requirements have been added or removed. Flagged items need your
// confirmation before launch — search for "FLAG:" below.

export const accounts = [
  {
    id: "classic",
    category: "personal",
    icon: "Wallet",
    name: "Dux Classic Account",
    tagline: "Everyday personal checking, made simple.",
    description:
      "Designed as an everyday personal checking or transaction account for day-to-day banking needs — built for the payments, transfers and spending that make up ordinary daily life.",
    openingBalance: "₦1,000",
    features: ["2% interest rate", "Entitled to debit card", "Mobile banking"],
    requirements: [
      "Completed account opening form",
      "Valid ID",
      // FLAG: source text says "one passport photo each for both the trustee
      // and the child" here — that looks copied from the Kiddies Account
      // section below it. Please confirm the correct requirement for this
      // account (likely just "one passport photograph").
      "One passport photo each for both the trustee and the child", // FLAG: confirm — see note above
      "Bank Verification Number (BVN)",
      "Utility bill (NEPA, water or waste) not older than three months",
      "KYC and VR",
    ],
  },
  {
    id: "individual-current",
    category: "personal",
    icon: "ArrowLeftRight",
    name: "Dux Individual Current",
    tagline: "Day-to-day transactions, no interest tie-in.",
    description:
      "A personal account for your day-to-day transactions, giving you a straightforward way to send, receive and manage money without the added weight of an interest-bearing structure.",
    openingBalance: "₦5,000",
    features: [
      "No interest rate",
      "Entitled to cheque booklet",
      "Debit card",
      "Mobile and Internet banking",
    ],
    requirements: [
      "Completed account opening form",
      "Valid ID (National ID only)",
      "One passport photograph",
      "Bank Verification Number (BVN)",
      "Utility bill (NEPA, water or waste) not older than three months",
      "Two references (must hold a Current account elsewhere, in operation for more than 6 months)",
      "KYC and VR",
    ],
  },
  {
    id: "her",
    category: "personal",
    icon: "Heart",
    name: "Dux Her",
    tagline: "Banking designed for ladies.",
    description:
      "Designed to meet the financial needs of ladies only, this account pairs everyday banking with perks tailored specifically to women, from a customized debit card to partner discounts.",
    audience: "For ladies only, ages 18–65",
    openingBalance: "₦2,000",
    features: [
      "For ladies only (18–65 years)",
      "Entitled to customized pink debit card",
      "Customized pink cheque booklet",
      "Discounts at designated SPA stores with the pink debit card (when on promo)",
      "Mobile and Internet Banking",
    ],
    requirements: [
      "Completed account opening form",
      "Valid ID (National ID only)",
      "One passport photograph",
      "Bank Verification Number (BVN)",
      "Utility bill (NEPA, water or waste) not older than three months",
      "KYC and VR",
    ],
  },
  {
    id: "kiddies",
    category: "personal",
    icon: "Baby",
    name: "Dux Kiddies Account",
    tagline: "Start the savings habit early.",
    description:
      "Designed for minors (ages 0–17) for the purpose of saving for children, operated with the help of a trustee (father, mother, or guardian).",
    audience: "Children ages 0–17, operated by a trustee",
    openingBalance: "₦1,000",
    features: [
      "3% interest rate at the end of every month, if no more than 2 withdrawals that month",
      "Entitled to debit card",
      "Mobile banking",
    ],
    requirements: [
      "Completed account opening form",
      "Valid ID of the trustee (National ID only)",
      "One passport photograph each for both the trustee and the child",
      "Bank Verification Number (BVN) of the trustee",
      "Utility bill (NEPA, water or waste) not older than three months",
      "Child's birth certificate",
      "KYC and VR",
    ],
  },
  {
    id: "corporate",
    category: "business",
    icon: "Building2",
    name: "Dux Corporate Account",
    tagline: "A financial home for your business.",
    description:
      "For corporate bodies — one or more shareholders, companies, organizations and registered businesses — giving your organization a dedicated account for operations, payments and day-to-day banking.",
    openingBalance: "₦20,000",
    features: [
      "Entitled to cheque booklet",
      "Mobile banking",
      "Internet banking",
      "Loan access (if eligible)",
    ],
    requirements: [
      "Completed account opening form",
      "Certificate of Incorporation",
      "Memorandum and Articles of Association (MEMART)",
      "Board resolution",
      "SCUML registration (if applicable)",
      "Two references (must be corporate account holders — DUX or another bank — in operation more than 6 months)",
      "Valid ID (National ID only) for all directors and shareholders",
      "One passport photograph for each signatory, where more than one",
      "Bank Verification Number (BVN) for all directors and shareholders",
      "Utility bill (NEPA, water or waste) not older than three months",
      "KYC and VR",
    ],
  },
  {
    id: "daily-save",
    category: "savings",
    icon: "CalendarClock",
    name: "Dux Daily Save",
    tagline: "Build the habit, one day at a time.",
    description:
      "Designed for traders, salary earners, and everyday savers who want to build a habit of setting aside money consistently, with flexible contribution options.",
    audience: "Individuals, traders and salary earners",
    features: [
      "Open to individuals, traders, and salary earners",
      "Daily saving options",
      "Competitive interest rates on contributions",
      "Access to loans based on savings history",
      "Simple account monitoring and transparent records",
      "Encourages financial discipline and growth",
    ],
    requirements: [
      "Account opening form (individual or group)",
      "Valid means of identification",
      "Utility bill or proof of address",
      "Agreed savings contribution schedule",
    ],
  },
  {
    id: "smart-savings",
    category: "savings",
    icon: "Target",
    name: "Dux Smart Savings",
    tagline: "Save toward a goal, on your terms.",
    description:
      "For individuals, groups and cooperatives who want to save for personal goals, family needs or a collective project, with a plan flexible enough to match how you actually save.",
    audience: "Individuals, groups and cooperatives",
    openingBalance: "₦1,000",
    minimumSaving: "₦10,000",
    noticePeriod: "One week's notice required before withdrawal",
    features: [
      "Competitive interest rates on savings",
      "Flexible savings plans tailored to your goals",
      "Access to loans based on savings performance",
      "Transparent records and easy account monitoring",
      "Encourages financial discipline and long-term growth",
    ],
    requirements: [
      "Account opening form (individual or group)",
      "Valid means of identification",
      "Utility bill or proof of address",
      "Agreed savings contribution schedule",
      "For groups/cooperatives: registration documents and authorized signatories",
    ],
  },
];

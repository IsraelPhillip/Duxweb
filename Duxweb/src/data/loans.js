// Source of truth: content supplied directly. Wording lightly cleaned up
// (capitalization, list formatting) — no rates, limits or requirements
// invented or removed.

export const loans = [
  {
    id: "dux-pay",
    icon: "Banknote",
    name: "Dux Pay",
    description:
      "A salary-based loan for salary earners, with a linked account carrying a ₦5,000 opening balance. Borrow up to ₦10 million with fast disbursement.",
    whoFor: "Federal Civil Service personnel & Blue-Chip professionals",
    benefit: "Disbursement in under 24 hours, with structured salary-based repayment",
    openingBalance: "₦5,000",
    features: [
      "Disbursement in less than 24 hours",
      "Obligor limit: ₦10 million",
      "Flexible repayment tenor up to 12 months",
      "Competitive interest rate",
      "Salary-based loan with structured repayment",
      "Eligible: Federal Civil Service Personnel & Blue-Chip Professionals",
    ],
    requirements: [
      "Completed Dux Pay loan form and guarantors form",
      "One recent passport photograph",
      "Valid means of identification (National ID, Voter's Card, or International Passport)",
      "Staff ID card, employment & confirmation letters",
      "Last 3 months' pay slips or 6 months' bank statement",
      "2 guarantors",
    ],
  },
  {
    id: "dux-instant-loan",
    icon: "Zap",
    name: "Dux Instant Loan",
    description:
      "A collateral-based loan using vehicles or gold, for individuals and registered companies in need of funds — giving you fast access to cash without permanently parting with your asset.",
    whoFor: "Individuals and registered businesses",
    benefit: "24-hour turnaround, while you retain ownership of your asset",
    features: [
      "Collateral-based loan using vehicles or gold",
      "24-hour turnaround time from application to disbursement",
      "Borrow against the value of your asset while retaining ownership",
      "Flexible repayment tenor to suit your needs",
      "Open to both individuals and registered businesses",
    ],
    requirements: [
      "Vehicle (in good condition) or gold (with certified purity)",
      "Bank Verification Number (BVN)",
      "Employer or business details",
      "Valuation report of the collateral",
      "Loan amount requested & preferred tenor",
    ],
  },
  {
    id: "dux-travel-loan",
    icon: "Plane",
    name: "Dux Travel Loan",
    description:
      "Also known as Proof of Funds (POF) — DUX funds your account for a period so you have a well-funded statement of account to present to an embassy for a visa application.",
    whoFor: "Travelers needing a funded account statement for visa applications",
    benefit: "Quick processing with a funded statement of account for your embassy submission",
    features: [
      "Proof of Funds (POF) support for visa applications",
      "Flexible repayment periods to suit your income flow",
      "Competitive interest rates and transparent charges",
      "Quick processing and disbursement",
    ],
    requirements: [
      "Completed loan application form",
      "Valid means of identification (International Passport)",
      "Proof of travel purpose (e.g. admission letter, visa application, flight/medical documents)",
      "Statement of account (6 months minimum)",
      "Guarantor(s) as required",
    ],
  },
  {
    id: "dux-trade-business-loan",
    icon: "TrendingUp",
    name: "Dux Trade & Business Loan",
    description:
      "For traders, entrepreneurs and SMEs looking for funds to restock and expand their business, with financing structured around how your business actually earns and spends.",
    whoFor: "Traders, entrepreneurs and SMEs",
    benefit: "Fast approval with no hidden fees, matched to your business cash flow",
    features: [
      "Flexible repayment periods to match business cash flow",
      "Competitive interest rates and minimal charges",
      "Fast approval and disbursement process",
      "No hidden fees",
    ],
    requirements: [
      "DUX Microfinance Bank account holder",
      "Completed loan application form and guarantor form",
      "Valid means of identification (National ID, International Passport, or Driver's License)",
      "Recent utility bill or proof of business address",
      "Business registration document",
      "Statement of account (6 months minimum)",
    ],
  },
];

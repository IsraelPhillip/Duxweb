// Primary nav + mega-menu structure.
// Labels/hrefs are safe to rename; just keep them in sync with routes in App.jsx
// and the `id` fields in data/accounts.js and data/loans.js (anchors use those ids).

export const navigation = [
  {
    label: "Personal",
    href: "/personal",
    menu: [
      { label: "Dux Classic Account", href: "/personal#classic" },
      { label: "Dux Individual Current", href: "/personal#individual-current" },
      { label: "Dux Her", href: "/personal#her" },
      { label: "Dux Kiddies Account", href: "/personal#kiddies" },
    ],
  },
  {
    label: "Savings",
    href: "/personal#savings-section",
    menu: [
      { label: "Dux Daily Save", href: "/personal#daily-save" },
      { label: "Dux Smart Savings", href: "/personal#smart-savings" },
    ],
  },
  {
    label: "Business",
    href: "/business",
    menu: [{ label: "Dux Corporate Account", href: "/business#corporate" }],
  },
  {
    label: "Loans",
    href: "/loans",
    menu: [
      { label: "Dux Pay", href: "/loans#dux-pay" },
      { label: "Dux Instant Loan", href: "/loans#dux-instant-loan" },
      { label: "Dux Travel Loan", href: "/loans#dux-travel-loan" },
      { label: "Dux Trade & Business Loan", href: "/loans#dux-trade-business-loan" },
    ],
  },
  {
    label: "About",
    href: "/about",
    menu: [
      { label: "About DUX", href: "/about#who-we-are" },
      { label: "Why DUX", href: "/about#why" },
      { label: "Careers", href: "/about#careers" },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
    menu: [
      { label: "Contact Us", href: "/contact#reach-us" },
      { label: "Head Office", href: "/contact#branch" },
      { label: "Customer Feedback", href: "/contact#feedback" },
    ],
  },
];

# Duxbank redesign — drop-in guide

This folder mirrors the `src/` structure of a Vite React app. Everything here
is meant to be **copied into your existing project**, not run standalone.

## 1. Copy the files

From this folder into your project root:

```
tailwind.config.js   → overwrite (or merge) your existing one
src/                  → merge into your existing src/
```

If you already have a `tailwind.config.js`, merge the `theme.extend` block
(colors, fontFamily, borderRadius, boxShadow, maxWidth) rather than
overwriting the whole file — you may already have content globs or plugins
configured.

## 2. Install the extra dependencies

Your project already has React, Vite, Tailwind, Framer Motion and Lucide
React per your brief. This build also needs client-side routing:

```bash
npm install react-router-dom
```

Everything else (`framer-motion`, `lucide-react`) is already assumed to be
installed per your setup.

## 3. Fonts

`src/index.css` pulls Fraunces (display serif) and Inter (body sans) from
Google Fonts via `@import`. For production, consider self-hosting these
instead (better performance, no external request) — swap the `@import` for
local `@font-face` rules once you've downloaded the font files.

## 4. Tailwind content paths

Make sure your `tailwind.config.js` `content` array includes `./src/**/*.{js,jsx}`
(already set in the config here) so the new components get scanned.

## 5. What's included

```
src/
  data/
    navigation.js   nav + mega-menu structure
    products.js     personal & business product copy
    loans.js        loan product copy
    socials.js      verified social links + feedback URL
    site.js         brand statement, contact info, regulatory line
  components/
    Navbar, MobileMenu, Footer, Button, SectionHeading, Hero,
    QuickActions, FeatureCard, ProductCard, LoanCard, TrustSection,
    CustomerFeedback, CTASection, SocialLinks, PageTransition, icons.js
  pages/
    Home, Personal, Business, Loans, About, Contact
  App.jsx    router + layout shell
  main.jsx   entry point
  index.css  fonts, base styles, reduced-motion support
```

Routing uses `react-router-dom`. If your project already has a router set
up differently, adapt `App.jsx` to fit rather than nesting two routers.

## 6. ⚠️ Before this goes live — confirm real content

I could not access `duxbankmfb.ng` directly (the site blocks automated
fetching), so per your brief's own rule #29 ("do not invent information"),
every placeholder below is clearly marked in code with `// TODO: confirm`.
Search your codebase for `TODO: confirm` to find them all. In summary:

- **`src/data/site.js`** — phone number, email, office address, and the
  exact regulatory/licensing disclaimer wording. These are placeholders and
  **must not ship as-is**.
- **`src/data/products.js`** — product descriptions are written copy in the
  brief's tone, but rates, eligibility rules and fees are not included
  anywhere (correctly) and need your product team's real terms if you want
  to state them.
- **`src/data/loans.js`** — same: "who it's for" / "key benefit" lines are
  reasonable placeholders, but no rates, tenors or limits are stated
  anywhere — add them only once verified.
- **`src/components/Hero.jsx`** — the right-hand visual panel is a plain
  dark placeholder block; swap in real product/app screenshots or brand
  photography.
- **Careers section (`About.jsx`)** — links nowhere real yet; wire it to an
  actual careers page/portal or remove the section if Duxbank doesn't have
  one.
- **Legal links (`Footer.jsx`)** — `/privacy-policy` and `/terms` are
  placeholder routes; point them at your real policy pages or PDFs.

Everything sourced directly from your brief — the social links, the
customer feedback URL, the navigation structure, the product category
names — is used as given and does **not** need re-confirming.

## 7. What I did not build

Per the brief's "don't overbuild" instruction, this covers the 6 core pages
and the shared shell only — no CMS, no backend, no auth, no forms wired to
a real endpoint. The Contact page's actions are direct `tel:` / `mailto:`
/ feedback-portal links rather than an on-page form, which keeps it simple
and avoids inventing a submission backend that doesn't exist yet. Add a
form there later if you want one, wired to your actual mail/CRM service.

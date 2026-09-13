import { navigation } from "../data/navigation";
import { feedbackUrl } from "../data/socials";
import { site } from "../data/site";
import SocialLinks from "./SocialLinks";
import logo from "../assets/images/logo.png";

export default function Footer() {
  return (
    <footer className="bg-dux-ink text-white/70">
      <div className="container-dux py-16 grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
        <div>
          <img src={logo} alt={site.fullName} className="h-10 w-auto rounded-lg" />
          <p className="mt-4 text-sm leading-relaxed max-w-xs">{site.brandStatement}</p>
          <SocialLinks className="mt-6 text-white/60" />
        </div>

        <div>
          <h4 className="text-sm font-medium text-white mb-4">Banking</h4>
          <ul className="space-y-3 text-sm">
            {navigation
              .filter((n) => ["Personal", "Savings", "Business", "Loans"].includes(n.label))
              .map((n) => (
                <li key={n.label}>
                  <a href={n.href} className="hover:text-white transition-colors">
                    {n.label}
                  </a>
                </li>
              ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-medium text-white mb-4">Company</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="/about" className="hover:text-white transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition-colors">
                Contact
              </a>
            </li>
            <li>
              <a href={feedbackUrl} className="hover:text-white transition-colors">
                Feedback
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-medium text-white mb-4">Legal</h4>
          <ul className="space-y-3 text-sm">
            {/* TODO: link real policy pages/PDFs once available */}
            <li>
              <a href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-white transition-colors">
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-dux py-6 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-xs text-white/50">
          <p>{site.regulatory}</p>
          <p>
            © {new Date().getFullYear()} {site.fullName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

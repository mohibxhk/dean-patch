import { Phone, Mail, MapPin } from "lucide-react";
import { CONTACT } from "../../constants/site";

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="bg-slate-950 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-sky-700 text-white font-extrabold text-lg tracking-tight">
                DP
              </span>
              <span className="leading-tight">
                <span className="block font-bold text-white tracking-tight">Dean Patching</span>
                <span className="block text-xs font-medium uppercase tracking-widest text-slate-500">
                  Local Cleaning
                </span>
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed max-w-xs">
              Reliable residential cleaning built around clear communication and high-quality
              results — a good clean, every single time.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">Services</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                "Regular house cleaning",
                "Deep cleaning",
                "End-of-lease cleaning",
                "Window cleaning",
                "Oven cleaning",
                "One-off cleans",
              ].map((s) => (
                <li key={s}>
                  <a href="#services" className="hover:text-white transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={CONTACT.phoneHref}
                  data-testid="footer-phone-link"
                  className="inline-flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4 text-sky-400" />
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.emailHref}
                  data-testid="footer-email-link"
                  className="inline-flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4 text-sky-400" />
                  {CONTACT.email}
                </a>
              </li>
              <li className="inline-flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-sky-400" />
                {CONTACT.area}
              </li>
            </ul>
            <a
              href="#quote"
              data-testid="footer-quote-link"
              className="mt-6 inline-flex items-center justify-center rounded-md bg-sky-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-sky-600"
            >
              Get a Free Quote
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Dean Patching Local Cleaning. Ballarat, VIC.</p>
          <p>Free quotes · Reliable service · Quality results</p>
        </div>
      </div>
    </footer>
  );
}

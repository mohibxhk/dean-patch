import { Home, Sparkles, KeyRound, AppWindow, Flame, CalendarClock, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const SERVICES = [
  {
    icon: Home,
    title: "Regular House Cleaning",
    text: "Weekly, fortnightly or monthly cleans that keep your home consistently tidy — kitchens, bathrooms, floors and living areas.",
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    text: "A thorough top-to-bottom clean for homes that need more than the usual — skirting boards, inside cupboards, detailed wet areas.",
  },
  {
    icon: KeyRound,
    title: "End-of-Lease Cleaning",
    text: "A full bond-standard clean so the property is handed back the way agents and landlords expect it.",
  },
  {
    icon: AppWindow,
    title: "Window Cleaning",
    text: "Inside and out — glass, tracks and sills left clear and streak-free.",
  },
  {
    icon: Flame,
    title: "Oven Cleaning",
    text: "Built-up grease and grime removed properly, so the oven looks and works the way it should.",
  },
  {
    icon: CalendarClock,
    title: "One-Off Cleans",
    text: "Moving in, moving out, after a party or before guests arrive — a single visit, done properly.",
  },
];

export default function Services() {
  return (
    <section id="services" data-testid="services-section" className="py-16 md:py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-sky-700">What we do</p>
          <div className="mt-3 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 max-w-xl">
              Residential cleaning services
            </h2>
            <p className="text-base text-slate-600 max-w-md">
              Every job starts with a free quote. Tell us what you need and we'll give you a clear, honest price.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 60}>
              <a
                href="#quote"
                data-testid={`service-card-${service.title.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:border-sky-700/40 hover:shadow-md"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-sky-700/10 text-sky-700 transition-colors duration-300 group-hover:bg-sky-700 group-hover:text-white">
                  <service.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 flex-1">{service.text}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-700">
                  Free quote
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Phone, ArrowRight, MapPin, BadgeCheck } from "lucide-react";
import { Button } from "../ui/button";
import { CONTACT, IMAGES } from "../../constants/site";

export default function Hero() {
  return (
    <section id="top" data-testid="hero-section" className="pt-28 md:pt-36 pb-16 md:pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p
              data-testid="hero-eyebrow"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-600"
            >
              <MapPin className="h-3.5 w-3.5 text-sky-700" />
              Ballarat &amp; surrounding areas
            </p>
            <h1
              data-testid="hero-headline"
              className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900"
            >
              A good clean.
              <span className="block text-sky-700">Every single time.</span>
            </h1>
            <p data-testid="hero-subtext" className="mt-6 text-base md:text-lg leading-relaxed text-slate-600 max-w-xl">
              Dean Patching Local Cleaning provides reliable residential cleaning across Ballarat —
              built on clear communication, honest work and a process that produces a quality
              result consistently, not just once.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                size="lg"
                data-testid="hero-quote-button"
                className="bg-sky-700 hover:bg-sky-800 text-white px-7"
              >
                <a href="#quote">
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                data-testid="hero-call-button"
                className="border-slate-300 text-slate-800 hover:bg-slate-50 px-7"
              >
                <a href={CONTACT.phoneHref}>
                  <Phone className="mr-2 h-4 w-4" />
                  Call {CONTACT.phone}
                </a>
              </Button>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2" data-testid="hero-trust-list">
              {["Free, no-obligation quotes", "Reliable & on time", "Quality checked every visit"].map((item) => (
                <li key={item} className="inline-flex items-center gap-2 text-sm font-medium text-slate-600">
                  <BadgeCheck className="h-4 w-4 text-sky-700" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative" data-testid="hero-image-wrapper">
            <div className="absolute -inset-3 rounded-2xl bg-slate-100" aria-hidden="true" />
            <img
              src={IMAGES.hero}
              alt="Freshly cleaned living room with polished timber floors"
              data-testid="hero-image"
              className="relative w-full rounded-xl border border-slate-200 object-cover aspect-[4/3] shadow-lg"
              loading="eager"
            />
            <div className="absolute -bottom-5 left-5 rounded-lg border border-slate-200 bg-white px-5 py-3 shadow-md">
              <p className="text-sm font-semibold text-slate-900">Real work, real results</p>
              <p className="text-xs text-slate-500">Photos from actual client cleans</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

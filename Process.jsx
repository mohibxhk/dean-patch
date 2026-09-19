import { ClipboardCheck, Boxes, MessagesSquare, BadgeCheck, Quote } from "lucide-react";
import Reveal from "./Reveal";

const PHASES = [
  {
    icon: ClipboardCheck,
    title: "Quoting & Inspecting",
    text: "Every job starts with a proper look at the property, so the quote you get is clear, honest and accurate.",
  },
  {
    icon: Boxes,
    title: "Planning & Equipment",
    text: "Labour, time, equipment and supplies are planned before anyone arrives — nothing is left to chance on the day.",
  },
  {
    icon: MessagesSquare,
    title: "Communication & Scheduling",
    text: "You'll always know what's happening and when. Clear communication with every client, every job.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Control & Follow-Up",
    text: "The work is checked against the standard before we leave — and anything that doesn't meet it gets fixed.",
  },
];

export default function Process() {
  return (
    <section id="process" data-testid="process-section" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          <Reveal className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-sky-700">How we work</p>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900">
              Not one-off jobs. A process that delivers, consistently.
            </h2>
            <figure className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-7">
              <Quote className="h-6 w-6 text-sky-700" />
              <blockquote className="mt-4 text-lg font-medium leading-relaxed text-slate-800">
                "The goal isn't just to do a good clean. The goal is to create a process that
                produces a good clean consistently."
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-slate-900">
                Dean Patching
                <span className="block text-xs font-medium text-slate-500">Owner, Dean Patching Local Cleaning</span>
              </figcaption>
            </figure>
            <p className="mt-6 text-base leading-relaxed text-slate-600">
              A cleaning business doesn't just sell cleaning. It sells reliability, trust and a
              result. Behind every job is a system that makes sure the standard is met — on every
              visit, not just the first one.
            </p>
          </Reveal>

          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PHASES.map((phase, i) => (
              <Reveal key={phase.title} delay={i * 60}>
                <div
                  data-testid={`process-card-${phase.title.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                  className="h-full rounded-xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:border-sky-700/40 hover:shadow-md"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-900 text-white">
                    <phase.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-slate-900">{phase.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{phase.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

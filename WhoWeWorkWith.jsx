import { Building2, Home, KeyRound, BedDouble, Store, Users } from "lucide-react";
import Reveal from "./Reveal";

const CLIENTS = [
  { icon: Building2, label: "Property Managers" },
  { icon: KeyRound, label: "Real Estate Agents" },
  { icon: Home, label: "Landlords" },
  { icon: BedDouble, label: "Airbnb Hosts" },
  { icon: Store, label: "Local Business Owners" },
  { icon: Users, label: "Homeowners" },
];

export default function WhoWeWorkWith() {
  return (
    <section data-testid="clients-section" className="py-16 md:py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-sky-400">Who we work with</p>
              <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-white max-w-xl">
                Trusted by the people who look after Ballarat's properties
              </h2>
            </div>
            <p className="text-base text-slate-400 max-w-md">
              Whether it's one home or a whole portfolio, you get the same standard of work and the
              same clear communication.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {CLIENTS.map((client, i) => (
            <Reveal key={client.label} delay={i * 50}>
              <div
                data-testid={`client-tile-${client.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                className="flex flex-col items-center gap-3 rounded-xl border border-slate-700/60 bg-slate-800/50 px-4 py-6 text-center transition-colors duration-300 hover:border-sky-500/50"
              >
                <client.icon className="h-6 w-6 text-sky-400" />
                <span className="text-sm font-semibold text-slate-200">{client.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

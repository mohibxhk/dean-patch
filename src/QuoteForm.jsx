import { useState } from "react";
import { Phone, Mail, MapPin, CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import Reveal from "./Reveal";
import { CONTACT, SERVICES } from "../../constants/site";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const EMPTY_FORM = { name: "", suburb: "", service: "", contact: "", message: "" };

export default function QuoteForm() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const setField = (field) => (e) => {
    const value = e?.target ? e.target.value : e;
    setForm((f) => ({ ...f, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    try {
      const res = await fetch(`${API}/quotes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setSubmitted(true);
      setForm(EMPTY_FORM);
      toast.success("Quote request sent", {
        description: "Thanks — Dean will be in touch with your free quote shortly.",
      });
    } catch (err) {
      toast.error("Something went wrong", {
        description: `Please try again, or call ${CONTACT.phone} directly.`,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="quote" data-testid="quote-section" className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-sky-700">Get a free quote</p>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900">
              Tell us about the job. We'll come back with a clear, honest quote.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 max-w-lg">
              Every clean is different, so we don't list fixed prices. Send through a few details
              and you'll get a free, no-obligation quote for your property — usually the same day.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={CONTACT.phoneHref}
                data-testid="contact-phone-link"
                className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 transition-colors duration-300 hover:border-sky-700/40"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-700/10 text-sky-700">
                  <Phone className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-medium uppercase tracking-wider text-slate-500">Call or text</span>
                  <span className="block text-base font-semibold text-slate-900">{CONTACT.phone}</span>
                </span>
              </a>
              <a
                href={CONTACT.emailHref}
                data-testid="contact-email-link"
                className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 transition-colors duration-300 hover:border-sky-700/40"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-700/10 text-sky-700">
                  <Mail className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-medium uppercase tracking-wider text-slate-500">Email</span>
                  <span className="block text-base font-semibold text-slate-900">{CONTACT.email}</span>
                </span>
              </a>
              <div
                data-testid="contact-area-card"
                className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-700/10 text-sky-700">
                  <MapPin className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-medium uppercase tracking-wider text-slate-500">Service area</span>
                  <span className="block text-base font-semibold text-slate-900">{CONTACT.area}</span>
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-2xl border border-slate-200 bg-white p-7 md:p-9 shadow-sm">
              {submitted ? (
                <div data-testid="quote-success" className="flex flex-col items-center text-center py-10">
                  <CheckCircle2 className="h-14 w-14 text-sky-700" />
                  <h3 className="mt-5 text-xl font-semibold text-slate-900">Request received</h3>
                  <p className="mt-2 text-base text-slate-600 max-w-sm">
                    Thanks for getting in touch. Dean will be back to you shortly with your free
                    quote. Need it sooner? Call {CONTACT.phone}.
                  </p>
                  <Button
                    data-testid="quote-another-button"
                    variant="outline"
                    className="mt-6 border-slate-300"
                    onClick={() => setSubmitted(false)}
                  >
                    Send another request
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} data-testid="quote-form" className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="quote-name">Name</Label>
                      <Input
                        id="quote-name"
                        data-testid="quote-name-input"
                        placeholder="Your name"
                        value={form.name}
                        onChange={setField("name")}
                        required
                        minLength={2}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="quote-suburb">Suburb</Label>
                      <Input
                        id="quote-suburb"
                        data-testid="quote-suburb-input"
                        placeholder="e.g. Ballarat Central"
                        value={form.suburb}
                        onChange={setField("suburb")}
                        required
                        minLength={2}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="quote-service">Service needed</Label>
                    <Select value={form.service} onValueChange={setField("service")} required>
                      <SelectTrigger id="quote-service" data-testid="quote-service-select">
                        <SelectValue placeholder="Choose a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {SERVICES.map((service) => (
                          <SelectItem
                            key={service}
                            value={service}
                            data-testid={`quote-service-option-${service.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                          >
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="quote-contact">Phone or email</Label>
                    <Input
                      id="quote-contact"
                      data-testid="quote-contact-input"
                      placeholder="So we can get back to you"
                      value={form.contact}
                      onChange={setField("contact")}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="quote-message">About the job</Label>
                    <Textarea
                      id="quote-message"
                      data-testid="quote-message-input"
                      placeholder="e.g. 3-bedroom house, end of lease, needed by Friday"
                      rows={4}
                      value={form.message}
                      onChange={setField("message")}
                    />
                  </div>

                  <Button
                    type="submit"
                    data-testid="quote-submit-button"
                    disabled={submitting}
                    className="w-full bg-sky-700 hover:bg-sky-800 text-white h-12 text-base font-semibold"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      "Request Free Quote"
                    )}
                  </Button>
                  <p className="text-center text-xs text-slate-500">
                    Free quotes. No obligation. No pushy follow-ups.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

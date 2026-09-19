import Reveal from "./Reveal";
import { IMAGES } from "../../constants/site";

export default function Gallery() {
  return (
    <section id="gallery" data-testid="gallery-section" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-sky-700">Our work</p>
          <div className="mt-3 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 max-w-xl">
              Photos from real client cleans
            </h2>
            <p className="text-base text-slate-600 max-w-md">
              No stock photos. This is the standard we leave behind — floors, kitchens, windows and
              everything in between.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {IMAGES.gallery.map((image, i) => (
            <Reveal key={image.url} delay={i * 60}>
              <figure
                data-testid={`gallery-item-${i}`}
                className="group overflow-hidden rounded-xl border border-slate-200 bg-slate-50"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <figcaption className="border-t border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800">
                  {image.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

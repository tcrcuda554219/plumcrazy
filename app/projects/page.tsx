import type { Metadata } from "next";
import { Nav, Footer, CallBar, PHONE_DISPLAY, PHONE_TEL } from "@/components/site";

export const metadata: Metadata = {
  title: "Projects — Residential & Commercial | Plumb Crazy Plumbing",
  description:
    "Recent residential and commercial plumbing work across the Las Vegas valley — repipes, water heater installs, sewer line repairs, and commercial drain build-outs.",
};

/* PLACEHOLDER GALLERY — current images are HVAC stand-ins from the prior
   build and MUST be swapped for real plumbing job-site photos before launch.
   See PLACEHOLDERS.md. */

const residential = [
  {
    src: "/projects/res-install.jpg",
    title: "Tankless water heater install",
    blurb: "Endless hot water — sized to the home and code-compliant. (Placeholder image — swap for real job photo.)",
  },
  {
    src: "/projects/res-complete.jpg",
    title: "Whole-home repipe",
    blurb: "Old galvanized out, PEX in — pressure-tested before the walls closed. (Placeholder image — swap for real job photo.)",
  },
];

const commercial = [
  {
    src: "/projects/com-rtu.jpg",
    title: "Commercial sewer line repair",
    blurb: "Camera-located break, trenchless repair, minimal disruption. (Placeholder image — swap for real job photo.)",
  },
  {
    src: "/projects/com-ductwork.jpg",
    title: "Tenant build-out rough-in",
    blurb: "Full supply and drain rough-in for a commercial tenant improvement. (Placeholder image — swap for real job photo.)",
  },
];

export default function Projects() {
  return (
    <>
      <Nav />
      <main>
        <section className="page-hero">
          <div className="wrap">
            <span className="tag brand">
              <span className="deg">OUR WORK</span>
            </span>
            <h1 className="page-title">
              Built, <em className="page-em">then photographed.</em>
            </h1>
            <p className="lede">
              A look at recent installs and build-outs across the valley.
              Sample imagery shown — real project photos coming with launch.
            </p>
          </div>
        </section>

        <section className="gallery-block" id="residential">
          <div className="wrap">
            <span className="tag cool">
              <span className="deg">RESIDENTIAL · WHOLE-HOME</span>
            </span>
            <h2>
              Homes, <span className="ice">handled.</span>
            </h2>
            <div className="gallery-grid">
              {residential.map((p) => (
                <figure className="g-card" key={p.title}>
                  <img src={p.src} alt={p.title} loading="lazy" />
                  <figcaption>
                    <strong>{p.title}</strong>
                    <span>{p.blurb}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <hr className="seam" />

        <section className="gallery-block" id="commercial">
          <div className="wrap">
            <span className="tag warm">
              <span className="deg">COMMERCIAL · BUILT TO SPEC</span>
            </span>
            <h2>
              Buildings, <span className="ember">delivered.</span>
            </h2>
            <div className="gallery-grid">
              {commercial.map((p) => (
                <figure className="g-card" key={p.title}>
                  <img src={p.src} alt={p.title} loading="lazy" />
                  <figcaption>
                    <strong>{p.title}</strong>
                    <span>{p.blurb}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="final">
          <div className="wrap">
            <h2>
              Your project, <em>next.</em>
            </h2>
            <div className="hero-ctas">
              <a className="btn btn-plum" href="/contact">
                Book Service
              </a>
              <a className="btn btn-ghost" href={`tel:${PHONE_TEL}`}>
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CallBar />
    </>
  );
}

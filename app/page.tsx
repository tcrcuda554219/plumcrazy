import {
  Nav,
  Footer,
  CallBar,
  PHONE_DISPLAY,
  PHONE_TEL,
  OFFER_HEADLINE,
  OFFER_FINE,
  FINANCING_LINE,
} from "@/components/site";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Lanes />
        <hr className="seam" />
        <Services />
        <Why />
        <hr className="seam" />
        <Process />
        <Offer />
        <Area />
        <hr className="seam" />
        <Reviews />
        <Faq />
        <Final />
      </main>
      <Footer />
      <CallBar />
    </>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/plum-crazy-hero-poster.jpg"
      >
        <source src="/plum-crazy-hero-web.mp4" type="video/mp4" />
      </video>
      <div className="scrim" />
      <div className="wrap">
        <span className="badge-247">
          <span className="dot" />
          24-Hour Emergency Service · Las Vegas
        </span>
        <h1>
          <span className="heat">Heating.</span>{" "}
          <span className="cool">Cooling.</span>
          <br />
          <span className="plum">Built complete.</span>
        </h1>
        <p className="sub">
          Residential and commercial HVAC for the Las Vegas valley — designed,
          installed, and maintained by one full-service shop. From a single
          repair to a complete ground-up system build. Day or night.
        </p>
        <div className="hero-ctas">
          <a className="btn btn-plum" href="#contact">
            Book Service
          </a>
          <a className="btn btn-ghost" href="#contact">
            Request a Commercial Bid
          </a>
          <a className="hero-phone" href={`tel:${PHONE_TEL}`}>
            or call <strong>{PHONE_DISPLAY}</strong>
          </a>
        </div>
      </div>
    </section>
  );
}

function Lanes() {
  return (
    <section className="lanes">
      <div className="wrap">
        <span className="tag brand">
          <span className="deg">// CHOOSE YOUR LANE</span>
        </span>
        <h2>
          One shop. <em>Every system.</em>
        </h2>
        <div className="lane-grid">
          <div className="lane cool">
            <span className="mono-k">RESIDENTIAL · 68°F</span>
            <h3>Your home, handled</h3>
            <p>
              AC repair and replacement, heating, full system installs, and
              maintenance plans that catch failures before July does. Sized
              right for your house — not guessed.
            </p>
            <a className="go" href="#contact">
              Book home service →
            </a>
          </div>
          <div className="lane warm">
            <span className="mono-k">COMMERCIAL · BUILT TO SPEC</span>
            <h3>Your building, on schedule</h3>
            <p>
              Rooftop units, complete build-outs, retrofits, and service
              contracts for commercial properties across the valley. Bid it
              once, built right.
            </p>
            <a className="go" href="#contact">
              Request a bid →
            </a>
          </div>
          <div className="lane brand">
            <span className="mono-k">EMERGENCY · 24/7/365</span>
            <h3>Dead system at 2 a.m.?</h3>
            <p>
              Our service department runs around the clock — because Vegas heat
              doesn&apos;t keep business hours. Call now and talk to a human.
            </p>
            <a className="go" href={`tel:${PHONE_TEL}`}>
              Call {PHONE_DISPLAY} →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    {
      temp: "cool",
      k: "COOLING",
      t: "AC Repair & Replacement",
      d: "Every brand, every age of system. Honest diagnosis — repair when it makes sense, replace when it saves you money.",
    },
    {
      temp: "warm",
      k: "HEATING",
      t: "Heating & Furnaces",
      d: "Desert nights get cold. Furnace and heat-pump service, repair, and full installs that keep winter outside.",
    },
    {
      temp: "both",
      k: "COMPLETE BUILDS",
      t: "Full System Installation",
      d: "Ground-up HVAC for new construction and gut renovations — residential and commercial. Designed, ducted, and delivered complete.",
    },
    {
      temp: "cool",
      k: "COMMERCIAL",
      t: "Rooftop Units & Build-Outs",
      d: "RTU install and service, tenant improvements, and retrofits — engineered for the building, not the brochure.",
    },
    {
      temp: "warm",
      k: "PREVENTION",
      t: "Maintenance Plans",
      d: "Seasonal tune-ups, priority scheduling, and the small fixes that prevent the big invoices.",
    },
    {
      temp: "both",
      k: "AIR",
      t: "Indoor Air Quality",
      d: "Filtration, purification, and duct sealing — for air you can feel the difference in.",
    },
  ];
  return (
    <section className="services" id="services">
      <div className="wrap">
        <span className="tag cool">
          <span className="deg">SERVICES · FULL STACK</span>
        </span>
        <h2>
          Everything between the <span className="ember">thermostat</span> and
          the <span className="ice">rooftop.</span>
        </h2>
        <div className="svc-grid">
          {items.map((s) => (
            <div className={`svc ${s.temp}`} key={s.t}>
              <div className="t">{s.k}</div>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Why() {
  const items = [
    {
      n: "01",
      t: "24-hour service department",
      d: "Not an answering service — a real dispatch that runs all night, every night.",
    },
    {
      n: "02",
      t: "Residential and commercial",
      d: "One shop that builds homes comfortable and keeps businesses running. Both, completely.",
    },
    {
      n: "03",
      t: "Complete builds, not just fixes",
      d: "We design and install entire systems from scratch — most shops only service what someone else built.",
    },
    {
      n: "04",
      t: "Straight answers",
      d: "Honest diagnosis, written quotes, and no commission-chasing upsells. Vegas runs on reputation.",
    },
  ];
  return (
    <section id="why">
      <div className="wrap">
        <span className="tag warm">
          <span className="deg">WHY PLUMB CRAZY</span>
        </span>
        <h2>
          The shop other shops <em>call.</em>
        </h2>
        <div className="why-grid">
          {items.map((w) => (
            <div className="why" key={w.n}>
              <span className="n">{w.n}</span>
              <h3>{w.t}</h3>
              <p>{w.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    {
      n: "1",
      t: "Call or book",
      d: "Tell us what's happening — dead AC, new build, commercial bid. Real human, day or night.",
    },
    {
      n: "2",
      t: "Diagnose & quote",
      d: "We inspect, measure, and size the actual job. You get a written quote with straight numbers — no mystery line items.",
    },
    {
      n: "3",
      t: "Built complete",
      d: "Our own techs do the work — install, duct, wire, commission. We don't sub out the parts that matter.",
    },
    {
      n: "4",
      t: "Maintained for life",
      d: "Seasonal maintenance keeps the system at spec and the warranty intact. We catch failures before they cost you.",
    },
  ];
  return (
    <section className="process" id="process">
      <div className="wrap">
        <span className="tag brand">
          <span className="deg">HOW IT WORKS</span>
        </span>
        <h2>
          From first call to <em>cold air.</em>
        </h2>
        <div className="steps">
          {steps.map((s) => (
            <div className="step" key={s.n}>
              <span className="n">{s.n}</span>
              <div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Offer() {
  return (
    <section className="offer">
      <div className="offer-in">
        <div className="offer-card">
          <div>
            <span className="tag brand">
              <span className="deg">CURRENT OFFER</span>
            </span>
            <h2>{OFFER_HEADLINE}</h2>
            <p className="fine">{OFFER_FINE}</p>
          </div>
          <div className="offer-side">
            <a className="btn btn-ember" href="#contact">
              Claim the offer
            </a>
            <p className="fin">{FINANCING_LINE}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Area() {
  const areas = [
    "Las Vegas",
    "Henderson",
    "North Las Vegas",
    "Summerlin",
    "Spring Valley",
    "Paradise",
    "Enterprise",
    "Boulder City",
  ];
  return (
    <section id="area">
      <div className="wrap">
        <span className="tag cool">
          <span className="deg">SERVICE AREA · CLARK COUNTY</span>
        </span>
        <h2>
          The whole valley, <span className="ice">covered.</span>
        </h2>
        <p className="lede">
          Residential and commercial service across the Las Vegas metro — and
          24-hour emergency dispatch to all of it.
        </p>
        <ul className="area-list">
          {areas.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Faq() {
  const faqs = [
    {
      q: "Do you really answer at 2 a.m.?",
      a: "Yes. Our service department runs 24/7/365 — Vegas heat doesn't keep business hours and neither do we. Emergency calls get a live response and real dispatch, day or night.",
    },
    {
      q: "Do you handle both residential and commercial work?",
      a: "Both, completely. Home AC and heating on one side; rooftop units, build-outs, and service contracts on the other. Same shop, same standards, two specialized crews.",
    },
    {
      q: "Can you build a complete system from scratch?",
      a: "That's our specialty. New construction, gut renovations, and full replacements — we design, size, duct, install, and commission entire systems rather than just servicing what's already there.",
    },
    {
      q: "How fast can you get someone out?",
      a: "Emergencies get dispatched around the clock. Standard service is typically scheduled within days, not weeks — and maintenance-plan members get priority scheduling.",
    },
    {
      q: "Do you offer financing?",
      a: "Yes — flexible financing is available on qualifying system installs and replacements. Ask when you book and we'll walk you through the options. (Details finalized with your quote.)",
    },
    {
      q: "Which brands do you service?",
      a: "All of them. We repair and maintain every major brand and age of equipment, and we'll give you a straight answer about whether repair or replacement is the smarter spend.",
    },
  ];
  return (
    <section className="faq" id="faq">
      <div className="wrap">
        <span className="tag warm">
          <span className="deg">QUESTIONS · ANSWERED</span>
        </span>
        <h2>
          Asked <em>constantly.</em>
        </h2>
        <div className="faq-list">
          {faqs.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Final() {
  return (
    <section className="final" id="contact">
      <div className="wrap">
        <span className="tag brand">
          <span className="deg">READY WHEN YOU ARE</span>
        </span>
        <h2>
          Heating. Cooling. <em>Built complete.</em>
        </h2>
        <p className="lede">
          Book a service visit, request a commercial bid, or just call and talk
          to a human — 24 hours a day.
        </p>
        <div className="hero-ctas">
          <a className="btn btn-plum" href={`tel:${PHONE_TEL}`}>
            Call {PHONE_DISPLAY}
          </a>
          <a className="btn btn-ghost" href={`tel:${PHONE_TEL}`}>
            Request a Commercial Bid
          </a>
        </div>
        <p className="em-line">
          AFTER HOURS? Same number. <a href={`tel:${PHONE_TEL}`}>The 24-hour line is the line.</a>
        </p>
      </div>
    </section>
  );
}

function Reviews() {
  const reviews = [
    {
      name: "Sample Review — M. R., Henderson",
      text: "Our AC died on a Friday night in July. They answered at 11 p.m. and had a tech out the next morning. Honest about the fix, no upsell. (Sample — replaced with the client's real Google reviews at launch.)",
    },
    {
      name: "Sample Review — D. T., Summerlin",
      text: "Full system replacement, done in a day, house has never been this comfortable. The quote matched the invoice to the penny. (Sample — replaced with the client's real Google reviews at launch.)",
    },
    {
      name: "Sample Review — Facilities Mgr., Las Vegas",
      text: "They handle three of our commercial properties. Scheduled maintenance happens like clockwork and the RTU retrofit came in on budget. (Sample — replaced with the client's real Google reviews at launch.)",
    },
  ];
  return (
    <section className="reviews" id="reviews">
      <div className="wrap">
        <span className="tag brand">
          <span className="deg">GOOGLE REVIEWS</span>
        </span>
        <h2>
          The valley <em>vouches.</em>
        </h2>
        <div className="review-grid">
          {reviews.map((r) => (
            <figure className="review" key={r.name}>
              <div className="stars" aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              <blockquote>{r.text}</blockquote>
              <figcaption>{r.name}</figcaption>
            </figure>
          ))}
        </div>
        <div className="review-cta">
          {/* PLACEHOLDER: link to the client's Google Business Profile reviews */}
          <a className="btn btn-ghost" href="#" aria-disabled="true">
            Read our reviews on Google → (link added at launch)
          </a>
        </div>
      </div>
    </section>
  );
}

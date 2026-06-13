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
import LeakShowcase from "@/components/leak-showcase";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Lanes />
        <hr className="seam" />
        <Services />
        <LeakShowcase />
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
          24-Hour Emergency Plumbing · Las Vegas
        </span>
        <h1>
          <span className="cool">Leaks.</span>{" "}
          <span className="heat">Clogs.</span>
          <br />
          <span className="plum">Handled.</span>
        </h1>
        <p className="sub">
          Residential and commercial plumbing for the Las Vegas valley — drains,
          sewers, water heaters, leaks, and repipes. From a midnight burst pipe
          to a whole-home repipe, one licensed shop does it all. Day or night.
        </p>
        <div className="hero-ctas">
          <a className="btn btn-plum" href="#contact">
            Book a Plumber
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
          One shop. <em>Every pipe.</em>
        </h2>
        <div className="lane-grid">
          <div className="lane cool">
            <span className="mono-k">RESIDENTIAL · WHOLE-HOME</span>
            <h3>Your home, handled</h3>
            <p>
              Drain cleaning, water heaters, leak detection, repipes, fixtures,
              and water treatment — everything from a dripping faucet to a
              whole-home repipe, done by licensed plumbers.
            </p>
            <a className="go" href="#contact">
              Book home service →
            </a>
          </div>
          <div className="lane warm">
            <span className="mono-k">COMMERCIAL · BID TO BACKFLOW</span>
            <h3>Your building, flowing</h3>
            <p>
              Commercial drain and sewer service, grease lines, backflow,
              tenant build-outs, and service contracts for properties across the
              valley. Documented, scheduled, dependable.
            </p>
            <a className="go" href="#contact">
              Request a bid →
            </a>
          </div>
          <div className="lane brand">
            <span className="mono-k">EMERGENCY · 24/7/365</span>
            <h3>Burst pipe at 2 a.m.?</h3>
            <p>
              Water everywhere or sewage backing up doesn&apos;t wait for
              business hours — and neither do we. Our service department runs
              around the clock. Call now and talk to a human.
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
      k: "DRAINS",
      t: "Drain Cleaning & Hydro-Jetting",
      d: "Snaked for the quick clogs, hydro-jetted when the pipe needs scouring back to bare wall. We clear it and confirm it's clear.",
    },
    {
      temp: "warm",
      k: "SEWERS",
      t: "Sewer Repair & Camera Inspection",
      d: "We camera the line so you see the break, then fix it — including trenchless repairs that skip tearing up the yard.",
    },
    {
      temp: "cool",
      k: "WATER HEATERS",
      t: "Tank & Tankless",
      d: "Repair every brand, swap failing tanks the same day, and install tankless systems sized to keep the whole house in hot water.",
    },
    {
      temp: "warm",
      k: "LEAKS",
      t: "Leak Detection & Slab Leaks",
      d: "Electronic location for hidden and under-slab leaks — common in Vegas — pinpointed and repaired with the least demolition possible.",
    },
    {
      temp: "both",
      k: "REPIPING",
      t: "Repiping & Pipe Repair",
      d: "Rusted galvanized or pinhole-leaking copper? Whole-home repipes and spot repairs in PEX or copper — permitted, tested, and clean.",
    },
    {
      temp: "both",
      k: "WATER QUALITY",
      t: "Softeners & Filtration",
      d: "Vegas water is brutally hard. Softeners, whole-home filtration, and RO that protect your fixtures, appliances, skin, and hair.",
    },
  ];
  return (
    <section className="services" id="services">
      <div className="wrap">
        <span className="tag cool">
          <span className="deg">SERVICES · FULL STACK</span>
        </span>
        <h2>
          Everything between the <span className="ice">water main</span> and the{" "}
          <span className="ember">sewer line.</span>
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
      d: "Not an answering service — a real dispatch that runs all night, every night. Burst pipes and backups don't keep business hours.",
    },
    {
      n: "02",
      t: "Up-front, flat-rate pricing",
      d: "You approve the price before we turn a wrench. No hourly meter running, no surprise number at the end of the job.",
    },
    {
      n: "03",
      t: "Residential and commercial",
      d: "One licensed shop that keeps homes dry and businesses open — drains, sewers, heaters, and repipes, both sides of the meter.",
    },
    {
      n: "04",
      t: "Licensed, bonded & insured",
      d: "Real Nevada-licensed plumbers, fully bonded and insured. Honest diagnosis and written quotes. Vegas runs on reputation.",
    },
  ];
  return (
    <section id="why">
      <div className="wrap">
        <span className="tag warm">
          <span className="deg">WHY PLUMB CRAZY</span>
        </span>
        <h2>
          The plumber the valley <em>trusts.</em>
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
      d: "Tell us what's happening — clogged main, dead water heater, burst pipe, commercial bid. Real human, day or night.",
    },
    {
      n: "2",
      t: "Diagnose & quote",
      d: "We camera the line or locate the leak, then hand you a flat-rate written quote before any work starts. No hourly meter, no mystery line items.",
    },
    {
      n: "3",
      t: "Fixed right",
      d: "Our own licensed plumbers do the work — jetted, repiped, installed, and tested. We don't sub out the parts that matter.",
    },
    {
      n: "4",
      t: "Backed & guaranteed",
      d: "Workmanship warranty on the repair, plus maintenance options that catch the next problem early. We stand behind the work.",
    },
  ];
  return (
    <section className="process" id="process">
      <div className="wrap">
        <span className="tag brand">
          <span className="deg">HOW IT WORKS</span>
        </span>
        <h2>
          From first call to <em>clear drain.</em>
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
          Residential and commercial plumbing across the Las Vegas metro — and
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
      a: "Yes. Our service department runs 24/7/365 — a burst pipe or a sewage backup doesn't keep business hours and neither do we. Emergency calls get a live response and real dispatch, day or night.",
    },
    {
      q: "How does your pricing work?",
      a: "Flat-rate, approved up front. We diagnose the job, hand you a written price before any work starts, and that's the price — no hourly meter running while we work and no surprise number at the end.",
    },
    {
      q: "Can you fix a sewer line without digging up my whole yard?",
      a: "Often, yes. We camera and locate the line first, then use trenchless methods — pipe lining or pipe bursting — wherever the line allows, which means minimal digging. When a dig is unavoidable, locating means we open the smallest area possible.",
    },
    {
      q: "Do you handle both residential and commercial work?",
      a: "Both, completely. Homes on one side — drains, water heaters, leaks, repipes; commercial on the other — drain and sewer service, grease lines, backflow, build-outs, and service contracts. Same shop, same standards.",
    },
    {
      q: "My water heater is leaking — repair or replace?",
      a: "We'll give you the straight math, not a sales pitch. If it's a valve or a connection, we repair it. If the tank itself is leaking or it's well past its years, replacement is the smarter spend — and we can usually swap a standard tank the same day.",
    },
    {
      q: "Do you offer financing?",
      a: "Yes — flexible financing is available on bigger jobs like water heaters, repipes, and sewer work. Ask when you book and we'll walk you through the options. (Details finalized with your quote.)",
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
          Leaks. Clogs. <em>Handled.</em>
        </h2>
        <p className="lede">
          Book a plumber, request a commercial bid, or just call and talk to a
          human — 24 hours a day.
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
      text: "Main line backed up on a Sunday — sewage coming up the shower drain. They jetted it that afternoon and put a camera down to show me the root intrusion. Honest, fast, no upsell. (Sample — replaced with the client's real Google reviews at launch.)",
    },
    {
      name: "Sample Review — D. T., Summerlin",
      text: "Tankless water heater install, done in a day, and the quote matched the invoice to the penny. House has endless hot water now. (Sample — replaced with the client's real Google reviews at launch.)",
    },
    {
      name: "Sample Review — Facilities Mgr., Las Vegas",
      text: "They handle the drains and backflow on three of our commercial properties. Scheduled like clockwork, documented every visit, never a surprise. (Sample — replaced with the client's real Google reviews at launch.)",
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

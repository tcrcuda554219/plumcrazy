import type { Metadata } from "next";
import { Nav, Footer, CallBar, PHONE_DISPLAY, PHONE_TEL, LICENSE } from "@/components/site";

export const metadata: Metadata = {
  title: "About Us | Plumb Crazy Plumbing — Las Vegas",
  description:
    "The full-service Las Vegas plumbing shop with a 24-hour service department. Residential and commercial — drains, sewers, water heaters, repipes, honest flat-rate pricing, and a Weimaraner on the badge.",
};

export default function About() {
  return (
    <>
      <Nav />
      <main>
        <section className="page-hero">
          <div className="wrap">
            <span className="tag brand">
              <span className="deg">ABOUT PLUMB CRAZY</span>
            </span>
            <h1 className="page-title">
              Crazy about <em className="page-em">plumbing.</em>
            </h1>
            <p className="lede">
              {/* PLACEHOLDER founding story — replace with the client's real history, founders, years in business */}
              A Las Vegas shop built the old-fashioned way: answer the phone,
              show up, do the work right, and stand behind it. (Founding story,
              team, and years-in-business to be added with the client&apos;s
              details.)
            </p>
          </div>
        </section>

        <section>
          <div className="wrap about-grid">
            <div className="about-card">
              <img
                src="/plumb-crazy-badge.png"
                alt="The Plumb Crazy badge — a proud Weimaraner mascot"
                className="about-badge"
              />
            </div>
            <div>
              <span className="tag warm">
                <span className="deg">THE STORY</span>
              </span>
              <h2>
                One shop. <em>Whole valley.</em>
              </h2>
              <p className="lede">
                Plumb Crazy Plumbing is a full-service plumbing company serving
                the Las Vegas valley — homes on one side of the ledger,
                commercial properties on the other, and a service department
                that never closes in between.
              </p>
              <p className="lede">
                We clear the drains, camera the sewers, swap the water heaters,
                find the slab leaks, and repipe the houses that need it — and we
                tell you the truth about which of those you actually need. Vegas
                runs on reputation; ours rides on every job.
              </p>
              <p className="lede">
                And yes — that&apos;s our dog on the badge. Some things are
                worth being plumb crazy about.
              </p>
            </div>
          </div>
        </section>

        <hr className="seam" />

        <section>
          <div className="wrap">
            <span className="tag cool">
              <span className="deg">WHAT WE STAND ON</span>
            </span>
            <h2>
              The fine print, <span className="ice">out loud.</span>
            </h2>
            <div className="why-grid">
              <div className="why">
                <span className="n">01</span>
                <h3>Licensed &amp; insured</h3>
                <p>{LICENSE} — bonded and insured for residential and commercial work. (License number updated at launch.)</p>
              </div>
              <div className="why">
                <span className="n">02</span>
                <h3>24-hour dispatch</h3>
                <p>A real service department around the clock — not a voicemail that promises a callback Tuesday.</p>
              </div>
              <div className="why">
                <span className="n">03</span>
                <h3>Flat-rate pricing</h3>
                <p>You approve the price before we turn a wrench. No hourly meter, no surprise number at the end.</p>
              </div>
              <div className="why">
                <span className="n">04</span>
                <h3>Our own plumbers</h3>
                <p>The people who quote the job do the job. We don&apos;t sub out the parts that matter.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="final">
          <div className="wrap">
            <h2>
              Meet us on a <em>job.</em>
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

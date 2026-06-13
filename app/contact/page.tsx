import type { Metadata } from "next";
import { Nav, Footer, CallBar, PHONE_DISPLAY, PHONE_TEL } from "@/components/site";

export const metadata: Metadata = {
  title: "Contact Us | Plumb Crazy Plumbing — Las Vegas",
  description:
    "Book a plumber, request a commercial bid, or reach the 24-hour emergency line. Plumb Crazy Plumbing — Las Vegas, NV.",
};

export default function Contact() {
  return (
    <>
      <Nav />
      <main>
        <section className="page-hero">
          <div className="wrap">
            <span className="tag brand">
              <span className="deg">CONTACT · 24/7</span>
            </span>
            <h1 className="page-title">
              Talk to a <em className="page-em">human.</em>
            </h1>
            <p className="lede">
              Day or night — the service department answers. Book below, or
              skip the form and call.
            </p>
          </div>
        </section>

        <section className="contact-block" id="book">
          <div className="wrap contact-grid">
            {/* ── form (UI staged; wires to booking/CRM at launch) ── */}
            <div className="c-form">
              <span className="tag cool">
                <span className="deg">BOOK SERVICE</span>
              </span>
              <h2>Request a visit</h2>
              <form>
                <label>
                  Name
                  <input type="text" name="name" placeholder="Your name" />
                </label>
                <label>
                  Phone
                  <input type="tel" name="phone" placeholder="(702) 555-0000" />
                </label>
                <label>
                  Email
                  <input type="email" name="email" placeholder="you@email.com" />
                </label>
                <label>
                  What do you need?
                  <select name="service" defaultValue="">
                    <option value="" disabled>
                      Choose one…
                    </option>
                    <option>Drain cleaning / clog</option>
                    <option>Sewer line / camera inspection</option>
                    <option>Water heater repair or replacement</option>
                    <option>Leak detection / slab leak</option>
                    <option>Repiping / pipe repair</option>
                    <option>Water treatment / softener</option>
                    <option>Commercial bid</option>
                    <option>Emergency — call instead!</option>
                  </select>
                </label>
                <label>
                  Tell us what&apos;s happening
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Clogged main line, no hot water, leak under the slab, etc."
                  />
                </label>
                {/* PLACEHOLDER: online booking wires to scheduling/CRM at launch */}
                <div className="form-note">
                  Online booking activates at launch — for now, the fastest
                  route is the phone:
                </div>
                <a className="btn btn-plum" href={`tel:${PHONE_TEL}`}>
                  Call {PHONE_DISPLAY}
                </a>
              </form>
            </div>

            {/* ── info + map ── */}
            <div className="c-info">
              <span className="tag warm">
                <span className="deg">FIND US</span>
              </span>
              <h2>The shop</h2>
              <ul className="c-list">
                <li>
                  <strong>Phone (24/7):</strong>{" "}
                  <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
                </li>
                <li>
                  <strong>Address:</strong> Office address placeholder —
                  confirmed with client at launch
                </li>
                <li>
                  <strong>Hours:</strong> Service department 24/7/365 · Office
                  hours added at launch
                </li>
                <li>
                  <strong>Service area:</strong> Las Vegas · Henderson · North
                  Las Vegas · Summerlin · the whole valley
                </li>
              </ul>
              <div className="map-wrap">
                {/* PLACEHOLDER MAP: generic Las Vegas embed until the client's
                    office address is confirmed — then swap to the exact pin /
                    Google Business Profile embed. */}
                <iframe
                  title="Plumb Crazy service area map — Las Vegas, NV"
                  src="https://www.google.com/maps?q=Las+Vegas,+NV&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <p className="map-note">
                Map shows the Las Vegas service area — exact office pin added
                once the address is confirmed.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CallBar />
    </>
  );
}

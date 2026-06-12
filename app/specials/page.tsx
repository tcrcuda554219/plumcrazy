import type { Metadata } from "next";
import {
  Nav,
  Footer,
  CallBar,
  PHONE_DISPLAY,
  PHONE_TEL,
  FINANCING_LINE,
} from "@/components/site";

export const metadata: Metadata = {
  title: "Specials & Coupons | Plumb Crazy Heating & Cooling — Las Vegas",
  description:
    "Current specials, coupons, and seasonal offers on AC repair, heating service, tune-ups, and complete system installs in Las Vegas.",
};

/* PLACEHOLDER COUPONS — final offers, amounts, and terms set by the client.
   These demonstrate the layout for sign-off. */
const coupons = [
  {
    amount: "$500 OFF",
    title: "Complete system install",
    fine: "Placeholder offer — terms and expiration set by Plumb Crazy.",
    temp: "brand",
  },
  {
    amount: "$49",
    title: "Seasonal tune-up special",
    fine: "Placeholder offer — keep the system at spec before the season hits.",
    temp: "cool",
  },
  {
    amount: "FREE",
    title: "Second opinion on any quoted repair",
    fine: "Placeholder offer — bring us the other guy's quote.",
    temp: "warm",
  },
];

export default function Specials() {
  return (
    <>
      <Nav />
      <main>
        <section className="page-hero">
          <div className="wrap">
            <span className="tag brand">
              <span className="deg">SPECIALS · COUPONS</span>
            </span>
            <h1 className="page-title">
              Crazy good <em className="page-em">deals.</em>
            </h1>
            <p className="lede">
              Current offers on service, tune-ups, and complete installs.
              Mention the coupon when you book — that&apos;s the whole trick.
            </p>
          </div>
        </section>

        <section>
          <div className="wrap">
            <div className="coupon-grid">
              {coupons.map((c) => (
                <div className={`coupon ${c.temp}`} key={c.title}>
                  <div className="c-amount">{c.amount}</div>
                  <div className="c-title">{c.title}</div>
                  <div className="c-fine">{c.fine}</div>
                  <div className="c-actions">
                    <a className="btn btn-plum" href="/contact">
                      Claim — Book Now
                    </a>
                    <a className="btn btn-ghost" href={`tel:${PHONE_TEL}`}>
                      Call {PHONE_DISPLAY}
                    </a>
                  </div>
                  <div className="c-edge" aria-hidden="true" />
                </div>
              ))}
            </div>
            <p className="map-note" style={{ marginTop: 26 }}>
              {FINANCING_LINE} Offers shown are layout placeholders — final
              amounts and terms confirmed by Plumb Crazy before launch.
            </p>
          </div>
        </section>

        <section className="final">
          <div className="wrap">
            <h2>
              Don&apos;t see your job? <em>Call anyway.</em>
            </h2>
            <div className="hero-ctas">
              <a className="btn btn-plum" href={`tel:${PHONE_TEL}`}>
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

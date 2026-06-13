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
  title: "Specials & Coupons | Plumb Crazy Plumbing — Las Vegas",
  description:
    "Current plumbing specials and coupons in Las Vegas — drain cleaning, free sewer camera inspection, water heater and repipe savings, plus senior and military discounts.",
};

/* PLACEHOLDER COUPONS — final offers, amounts, and terms set by the client.
   These demonstrate the layout for sign-off. */
const coupons = [
  {
    amount: "$59",
    title: "Drain cleaning — any single drain",
    fine: "Placeholder offer — accessible cleanout required. Terms and expiration set by Plumb Crazy.",
    temp: "cool",
  },
  {
    amount: "FREE",
    title: "Sewer camera inspection with main-line cleaning",
    fine: "Placeholder offer — see the problem before you pay to fix it. With any main-line drain cleaning.",
    temp: "warm",
  },
  {
    amount: "$200 OFF",
    title: "Tankless water heater installation",
    fine: "Placeholder offer — on qualifying tankless installs. Ask about financing.",
    temp: "brand",
  },
  {
    amount: "10% OFF",
    title: "Senior & military discount",
    fine: "Placeholder offer — our thanks. One per household; can't combine with other offers.",
    temp: "cool",
  },
  {
    amount: "$50 OFF",
    title: "Any plumbing repair over $500",
    fine: "Placeholder offer — applied to repairs of $500 or more before tax.",
    temp: "warm",
  },
  {
    amount: "FREE",
    title: "Second opinion on any quoted repair",
    fine: "Placeholder offer — bring us the other plumber's quote.",
    temp: "brand",
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
              Current offers on drain cleaning, sewer work, water heaters, and
              repipes. Mention the coupon when you book — that&apos;s the whole
              trick.
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

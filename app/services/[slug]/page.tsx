import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Nav,
  Footer,
  CallBar,
  PHONE_DISPLAY,
  PHONE_TEL,
} from "@/components/site";
import { services, getService } from "@/lib/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const svc = getService(slug);
  if (!svc) return {};
  return {
    title: `${svc.title} ${svc.titleAccent.replace(".", "")} — Las Vegas | Plumb Crazy Plumbing`,
    description: svc.intro,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const svc = getService(slug);
  if (!svc) notFound();

  const accent =
    svc.temp === "cool" ? "ice" : svc.temp === "warm" ? "ember" : "page-em";

  return (
    <>
      <Nav />
      <main>
        <section className="page-hero">
          <div className="wrap">
            <span className={`tag ${svc.temp === "both" ? "brand" : svc.temp}`}>
              <span className="deg">{svc.tag}</span>
            </span>
            <h1 className="page-title">
              {svc.title}{" "}
              <em className={svc.temp === "both" ? "page-em" : accent}>
                {svc.titleAccent}
              </em>
            </h1>
            <p className="lede">{svc.intro}</p>
            <div className="hero-ctas" style={{ marginTop: 28 }}>
              <a className="btn btn-plum" href="/contact">
                Request an Appointment
              </a>
              <a className="btn btn-ghost" href={`tel:${PHONE_TEL}`}>
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </section>

        <section>
          <div className="wrap svc-detail-grid">
            <div>
              <span className={`tag ${svc.temp === "both" ? "brand" : svc.temp}`}>
                <span className="deg">INCLUDED</span>
              </span>
              <h2>{svc.includesTitle}</h2>
              <ul className="check-list">
                {svc.includes.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
            <div>
              <span className="tag brand">
                <span className="deg">KNOW THE SIGNS</span>
              </span>
              <h2>{svc.signsTitle}</h2>
              <ul className="check-list signs">
                {svc.signs.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="offer">
          <div className="offer-in">
            <div className="offer-card">
              <div>
                <span className="tag brand">
                  <span className="deg">SAVE ON THIS SERVICE</span>
                </span>
                <h2>Current specials apply</h2>
                <p className="fine">
                  Placeholder — live coupons and seasonal specials listed on
                  the Specials page at launch.
                </p>
              </div>
              <div className="offer-side">
                <a className="btn btn-ember" href="/specials">
                  View Specials
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="final">
          <div className="wrap">
            <h2>
              Ready when <em>you are.</em>
            </h2>
            <p className="lede">
              Book online or call the 24-hour line — either way, you get a
              human and a straight answer.
            </p>
            <div className="hero-ctas">
              <a className="btn btn-plum" href="/contact">
                Request an Appointment
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

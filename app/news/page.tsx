import type { Metadata } from "next";
import { Nav, Footer, CallBar } from "@/components/site";

export const metadata: Metadata = {
  title: "News & Tips | Plumb Crazy Heating & Cooling — Las Vegas",
  description:
    "HVAC tips, upgrade guides, and straight answers from a Las Vegas heating and cooling shop — when to repair, when to replace, and what modern systems are worth.",
};

/* PLACEHOLDER ARTICLES — these become the real content engine post-launch.
   Titles are the actual planned articles; bodies written at launch. */
const posts = [
  {
    k: "UPGRADES",
    temp: "cool",
    title: "Is it time to replace your AC? The honest 5-point checklist",
    excerpt:
      "Age, refrigerant, repair frequency, power bills, and the one-third rule — how to know when repair money becomes wasted money.",
  },
  {
    k: "MODERN HVAC",
    temp: "both",
    title: "What modern systems actually get you (and what's just marketing)",
    excerpt:
      "Variable-speed compressors, smart thermostats, heat pumps in the desert — which upgrades pay for themselves in a Vegas climate.",
  },
  {
    k: "WARNING SIGNS",
    temp: "warm",
    title: "5 furnace warning signs you shouldn't sleep on",
    excerpt:
      "Yellow flames, short cycling, mystery smells — the symptoms that mean 'call tonight' versus the ones that can wait until morning.",
  },
  {
    k: "SEASONAL",
    temp: "cool",
    title: "Getting your AC ready for a Vegas summer — the pro checklist",
    excerpt:
      "What we actually do on a tune-up, what you can do yourself, and why May is the month that decides your July.",
  },
];

export default function News() {
  return (
    <>
      <Nav />
      <main>
        <section className="page-hero">
          <div className="wrap">
            <span className="tag brand">
              <span className="deg">NEWS · TIPS · GUIDES</span>
            </span>
            <h1 className="page-title">
              Straight answers, <em className="page-em">written down.</em>
            </h1>
            <p className="lede">
              Upgrade guides, warning signs, and what&apos;s worth your money —
              from the people who fix it all day. Full articles arriving with
              launch.
            </p>
          </div>
        </section>

        <section>
          <div className="wrap">
            <div className="post-grid">
              {posts.map((p) => (
                <article className="post" key={p.title}>
                  <span className={`tag ${p.temp === "both" ? "brand" : p.temp}`}>
                    <span className="deg">{p.k}</span>
                  </span>
                  <h2>{p.title}</h2>
                  <p>{p.excerpt}</p>
                  <span className="post-soon">COMING SOON</span>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CallBar />
    </>
  );
}

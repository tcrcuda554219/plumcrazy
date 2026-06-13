import type { Metadata } from "next";
import { Nav, Footer, CallBar } from "@/components/site";

export const metadata: Metadata = {
  title: "News & Tips | Plumb Crazy Plumbing — Las Vegas",
  description:
    "Plumbing tips, upgrade guides, and straight answers from a Las Vegas plumbing shop — when to repair vs. replace a water heater, why Vegas water is so hard, and how to spot a hidden leak.",
};

/* PLACEHOLDER ARTICLES — these become the real content engine post-launch.
   Titles are the actual planned articles; bodies written at launch. */
const posts = [
  {
    k: "WATER HEATERS",
    temp: "cool",
    title: "Repair or replace your water heater? The honest 5-point checklist",
    excerpt:
      "Age, rust, rumbling, leaks, and the running-out-faster test — how to know when repair money becomes wasted money, and when a tankless upgrade pays off.",
  },
  {
    k: "VEGAS WATER",
    temp: "both",
    title: "Why Las Vegas water destroys your fixtures (and what fixes it)",
    excerpt:
      "Some of the hardest water in the country is scaling your faucets and shortening every appliance's life. Softeners, filtration, and RO — what's worth it and what isn't.",
  },
  {
    k: "WARNING SIGNS",
    temp: "warm",
    title: "5 hidden-leak warning signs you shouldn't sleep on",
    excerpt:
      "A water bill that jumped, the sound of running water with everything off, a warm spot on the floor — the symptoms that mean 'call today' versus the ones that can wait.",
  },
  {
    k: "DRAINS",
    temp: "cool",
    title: "Snaking vs. hydro-jetting: which one your drain actually needs",
    excerpt:
      "Cabling clears the clog; jetting scours the pipe. When a quick snake is enough, when roots and grease demand a jetter, and why the cheap fix keeps coming back.",
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

/* ════════════════════════════════════════════════════════════
   SHARED: brand constants + Nav + Footer (all pages).
   PLACEHOLDERS — replace before production launch.
   See PLACEHOLDERS.md for the full checklist.
   ════════════════════════════════════════════════════════════ */
export const PHONE_DISPLAY = "(702) 600-1814"; // from the client's existing badge — CONFIRM this is the right line
export const PHONE_TEL = "+17026001814"; // tel: target — confirm with client
export const LICENSE = "NV Plumbing License #0000000"; // ← PLACEHOLDER license number
export const OFFER_HEADLINE = "$59 drain cleaning — any single drain"; // ← PLACEHOLDER signature offer
export const OFFER_FINE =
  "Placeholder offer — final promotion, terms, and expiration set by Plumb Crazy. Sample model: a low-cost drain special as the front-door offer, plus a free camera inspection with main-line cleaning."; // ← PLACEHOLDER
export const FINANCING_LINE =
  "Flexible financing on water heaters, repipes, and sewer work."; // ← PLACEHOLDER financing partner

export function Nav() {
  return (
    <header className="nav">
      <div className="nav-in">
        <a className="logo" href="/">
          <img
            src="/plumb-crazy-badge.png"
            alt="Plumb Crazy Plumbing badge — Weimaraner mascot"
            className="logo-badge"
            width={46}
            height={46}
          />
          PLUMB <span className="p">CRAZY</span>
        </a>
        <nav className="nav-links">
          <div className="dd">
            <a href="/#services" className="dd-top">
              Services <span className="dd-caret">▾</span>
            </a>
            <div className="dd-menu">
              <div className="dd-group">
                <span className="dd-h cool-h">Drains &amp; Sewers</span>
                <a href="/services/drain-cleaning">Drain Cleaning</a>
                <a href="/services/sewer-services">Sewer Repair &amp; Camera</a>
              </div>
              <div className="dd-group">
                <span className="dd-h warm-h">Repairs &amp; Heaters</span>
                <a href="/services/water-heaters">Water Heaters</a>
                <a href="/services/leak-detection">Leak Detection</a>
                <a href="/services/repiping">Repiping &amp; Repair</a>
              </div>
              <div className="dd-group">
                <span className="dd-h brand-h">Water Quality</span>
                <a href="/services/water-treatment">Softeners &amp; Filtration</a>
              </div>
            </div>
          </div>
          <a href="/projects">Projects</a>
          <a href="/specials">Specials</a>
          <a href="/news">News</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
        <a className="nav-phone" href={`tel:${PHONE_TEL}`}>
          {PHONE_DISPLAY}
        </a>
        <a className="btn btn-plum" href="/contact">
          Book Service
        </a>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <a className="logo" href="/">
              <img
                src="/plumb-crazy-badge.png"
                alt="Plumb Crazy Plumbing badge"
                className="logo-badge logo-badge-lg"
                width={72}
                height={72}
              />
              PLUMB <span className="p">CRAZY</span>
            </a>
            <p style={{ marginTop: 14, maxWidth: "38ch" }}>
              Full-service plumbing for the Las Vegas valley. Drains, sewers,
              water heaters, leaks, and repipes. Residential. Commercial.
              24-hour emergency service.
            </p>
            <p className="foot-note">{LICENSE}</p>
          </div>
          <div>
            <h4>Services</h4>
            <a href="/services/drain-cleaning">Drain Cleaning</a>
            <a href="/services/sewer-services">Sewer Repair &amp; Camera</a>
            <a href="/services/water-heaters">Water Heaters</a>
            <a href="/services/leak-detection">Leak Detection</a>
            <a href="/services/repiping">Repiping &amp; Repair</a>
            <a href="/services/water-treatment">Water Treatment</a>
          </div>
          <div>
            <h4>Site</h4>
            <a href="/projects">Projects</a>
            <a href="/specials">Specials</a>
            <a href="/news">News &amp; Tips</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </div>
          <div>
            <h4>Contact</h4>
            <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
            <a href="/contact">Book Service</a>
            <a href="/contact">Commercial Bids</a>
          </div>
        </div>
        <p className="foot-note">
          © {new Date().getFullYear()} Plumb Crazy Plumbing · Las Vegas, NV ·
          Address placeholder — confirm with client. · Site by 7LSM
        </p>
      </div>
    </footer>
  );
}

export function CallBar() {
  return (
    <a className="callbar" href={`tel:${PHONE_TEL}`}>
      🚨 24/7 Emergency — Call <span className="mono">{PHONE_DISPLAY}</span>
    </a>
  );
}

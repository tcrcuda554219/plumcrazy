/* ════════════════════════════════════════════════════════════
   SHARED: brand constants + Nav + Footer (all pages).
   PLACEHOLDERS — replace before production launch.
   See PLACEHOLDERS.md for the full checklist.
   ════════════════════════════════════════════════════════════ */
export const PHONE_DISPLAY = "(702) 600-1814"; // from the client's existing badge — CONFIRM this is the HVAC line
export const PHONE_TEL = "+17026001814"; // tel: target — confirm with client
export const LICENSE = "NV License #0000000"; // ← PLACEHOLDER license number
export const OFFER_HEADLINE = "$500 off a complete system install"; // ← PLACEHOLDER signature offer
export const OFFER_FINE =
  "Placeholder offer — final promotion, terms, and expiration set by Plumb Crazy."; // ← PLACEHOLDER
export const FINANCING_LINE =
  "Flexible financing available on qualifying systems."; // ← PLACEHOLDER financing partner

export function Nav() {
  return (
    <header className="nav">
      <div className="nav-in">
        <a className="logo" href="/">
          <img
            src="/plumb-crazy-badge.png"
            alt="Plumb Crazy Heating & Cooling badge — Weimaraner holding a thermostat"
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
                <span className="dd-h cool-h">Air Conditioning</span>
                <a href="/services/ac-installation">Installation</a>
                <a href="/services/ac-repair">Repair</a>
              </div>
              <div className="dd-group">
                <span className="dd-h warm-h">Heating</span>
                <a href="/services/heating-installation">Installation</a>
                <a href="/services/heating-repair">Repair</a>
              </div>
              <div className="dd-group">
                <span className="dd-h brand-h">Air Quality</span>
                <a href="/services/indoor-air-quality">Indoor Air Quality</a>
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
                alt="Plumb Crazy Heating & Cooling badge"
                className="logo-badge logo-badge-lg"
                width={72}
                height={72}
              />
              PLUMB <span className="p">CRAZY</span>
            </a>
            <p style={{ marginTop: 14, maxWidth: "38ch" }}>
              Full-service heating and cooling for the Las Vegas valley.
              Residential. Commercial. 24-hour emergency service.
            </p>
            <p className="foot-note">{LICENSE}</p>
          </div>
          <div>
            <h4>Services</h4>
            <a href="/services/ac-installation">AC Installation</a>
            <a href="/services/ac-repair">AC Repair</a>
            <a href="/services/heating-installation">Heating Installation</a>
            <a href="/services/heating-repair">Heating Repair</a>
            <a href="/services/indoor-air-quality">Indoor Air Quality</a>
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
          © {new Date().getFullYear()} Plumb Crazy Heating &amp; Cooling · Las
          Vegas, NV · Address placeholder — confirm with client. · Site by 7LSM
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

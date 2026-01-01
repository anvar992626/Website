import './App.css'

const behandlingar = [
  { namn: 'Herrklippning', pris: '520 kr', tid: '45 min', beskrivning: 'Klassisk klippning med konsultation, styling och råd.' },
  { namn: 'Skin Fade', pris: '580 kr', tid: '50 min', beskrivning: 'Skulpterad fade med skarpa linjer och maskinfinish.' },
  { namn: 'Skäggtrim & form', pris: '350 kr', tid: '30 min', beskrivning: 'Konturering, trimning och varma handdukar för ett perfekt skägg.' },
  { namn: 'Lyxrakning', pris: '420 kr', tid: '35 min', beskrivning: 'Traditionell rakning med rakkniv, varma handdukar och aftershave.' },
  { namn: 'Studentklippning', pris: '430 kr', tid: '40 min', beskrivning: 'Rabatterad klippning för studenter, legitimation krävs.' },
]

const galleri = [
  {
    alt: 'Klassisk herrklippning med textur',
    url: 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&w=800&q=80',
  },
  {
    alt: 'Fade med skarpa linjer',
    url: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80',
  },
  {
    alt: 'Rakning med varma handdukar',
    url: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
  },
]

function SectionTitle({ label, kicker }) {
  return (
    <div className="section-title">
      {kicker && <span className="kicker">{kicker}</span>}
      <h2>{label}</h2>
    </div>
  )
}

function App() {
  return (
    <div className="page">
      <header className="hero">
        <nav className="topbar" aria-label="Primär navigation">
          <div className="logo">Salong Norr</div>
          <div className="cta-group">
            <a className="ghost" href="tel:+4681234567" aria-label="Ring salongen">Ring oss</a>
            <a className="primary" href="#bokning">Boka tid</a>
          </div>
        </nav>
        <div className="hero-grid">
          <div>
            <p className="kicker">Herrfrisör i Stockholm</p>
            <h1>En mörk, tidlös salong för modern stil.</h1>
            <p className="lede">
              Salong Norr kombinerar klassisk barberarkänsla med skandinavisk precision. Vi fokuserar på
              personliga detaljer, hudnära fades och omsorgsfull grooming.
            </p>
            <div className="cta-row">
              <a className="primary" href="#bokning">Boka tid nu</a>
              <a className="ghost" href="#priser">Se priser</a>
            </div>
            <div className="badges" role="list" aria-label="Kundlöften">
              <span role="listitem">🍂 Vintage lounge</span>
              <span role="listitem">🕯️ Dämpad belysning</span>
              <span role="listitem">💈 Svenskt hantverk</span>
            </div>
          </div>
          <div className="hero-card" aria-label="Öppettider och adress">
            <div className="card-inner">
              <p className="kicker">Öppettider</p>
              <ul className="schedule">
                <li><span>Mån–Fre</span><strong>10:00–19:00</strong></li>
                <li><span>Lördag</span><strong>10:00–16:00</strong></li>
                <li><span>Söndag</span><strong>Stängt</strong></li>
              </ul>
              <div className="divider" role="presentation" />
              <p className="kicker">Adress</p>
              <p className="address">Birger Jarlsgatan 22<br />Stockholm</p>
              <a className="primary full" href="https://maps.google.com/?q=Birger+Jarlsgatan+22" target="_blank" rel="noreferrer">
                Visa på karta
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="panel" id="bokning" aria-labelledby="bokning-title">
          <SectionTitle label="Boka behandling" kicker="Snabb tidsbokning" />
          <div className="booking">
            <div>
              <p className="lede">
                Välj behandling, föredragen barberare och önskad tid. Du får en bekräftelse via SMS och mejl.
                Behöver du omboka? Hör av dig senast 24 timmar innan besöket.
              </p>
              <ul className="benefits" aria-label="Fördelar med att boka online">
                <li>Direktbekräftelse och påminnelse</li>
                <li>Av- och ombokning online</li>
                <li>Drop-in i mån av tid</li>
              </ul>
            </div>
            <form className="booking-form" aria-label="Bokningsformulär">
              <label>
                Behandling
                <select>
                  {behandlingar.map((behandling) => (
                    <option key={behandling.namn}>{behandling.namn}</option>
                  ))}
                </select>
              </label>
              <label>
                Datum
                <input type="date" />
              </label>
              <label>
                Tid
                <input type="time" />
              </label>
              <label>
                Namn
                <input type="text" placeholder="Ditt fullständiga namn" />
              </label>
              <label>
                Telefon
                <input type="tel" placeholder="070-123 45 67" />
              </label>
              <button type="submit" className="primary full">Skicka förfrågan</button>
              <p className="form-note">Vi bekräftar inom 15 minuter under öppettid.</p>
            </form>
          </div>
        </section>

        <section className="panel" id="priser" aria-labelledby="priser-title">
          <SectionTitle label="Priser" kicker="Transparens utan överraskningar" />
          <div className="price-grid">
            {behandlingar.map((behandling) => (
              <article className="price-card" key={behandling.namn}>
                <header>
                  <h3>{behandling.namn}</h3>
                  <p className="time">{behandling.tid}</p>
                </header>
                <p className="description">{behandling.beskrivning}</p>
                <div className="price">{behandling.pris}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="panel" id="galleri" aria-labelledby="galleri-title">
          <SectionTitle label="Galleri" kicker="Resultat från salongen" />
          <div className="gallery">
            {galleri.map((bild) => (
              <figure key={bild.alt}>
                <img src={bild.url} alt={bild.alt} loading="lazy" />
                <figcaption>{bild.alt}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="panel" id="om" aria-labelledby="om-oss-title">
          <SectionTitle label="Om salongen" kicker="Barberare med erfarenhet" />
          <div className="about">
            <div>
              <p className="lede">
                Vi är ett team av frisörer och barberare som brinner för klassiskt hantverk och moderna tekniker.
                Varje kund får en personlig konsultation och produkter anpassade efter hårtyp och livsstil.
              </p>
              <div className="list-columns">
                <ul>
                  <li>Certifierade barberare</li>
                  <li>Hantverk med rakkniv</li>
                  <li>Scandinavian Grooming Products</li>
                </ul>
                <ul>
                  <li>Gratis stylingtips</li>
                  <li>Event &amp; bröllopsgrooming</li>
                  <li>Kortbetalning &amp; Swish</li>
                </ul>
              </div>
            </div>
            <aside className="quote-card" aria-label="Kundcitat">
              <p className="quote">“En salong med själ. Dova toner, vinyl i bakgrunden och barberare som verkligen lyssnar.”</p>
              <p className="quote-name">– Jonas, stamkund</p>
            </aside>
          </div>
        </section>
      </main>

      <footer className="footer" aria-label="Sidfot">
        <div>
          <div className="logo">Salong Norr</div>
          <p className="footer-text">Birger Jarlsgatan 22 · Stockholm · 08-123 45 67</p>
          <p className="footer-text">Följ oss på Instagram @salongnorr</p>
        </div>
        <div className="footer-links">
          <a href="#bokning">Bokning</a>
          <a href="#priser">Priser</a>
          <a href="#galleri">Galleri</a>
          <a href="#om">Om oss</a>
        </div>
      </footer>
    </div>
  )
}

export default App

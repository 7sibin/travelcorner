// components.jsx — Nav, Footer, Icons, PassportForm, Carousel, Instagram
// Shared building blocks for TravelCorner.

// ───────────────────────── Icons ─────────────────────────
const Icon = ({ name, size = 18, stroke = 2 }) => {
  const paths = {
    'map-pin': <><path d="M12 21s-7-7.5-7-12a7 7 0 1 1 14 0c0 4.5-7 12-7 12Z"/><circle cx="12" cy="9" r="2.5"/></>,
    'calendar': <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/></>,
    'plane': <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1L15 22v-1.5L13 19v-5.5L21 16Z"/>,
    'bus': <><path d="M4 16V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10M4 16v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3M16 16v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3M4 11h16"/><circle cx="8" cy="16" r="1.5"/><circle cx="16" cy="16" r="1.5"/></>,
    'car': <><path d="M5 17h14M5 17a2 2 0 0 1-2-2v-3l2-4h14l2 4v3a2 2 0 0 1-2 2M7 11h10"/><circle cx="7.5" cy="17.5" r="1.5"/><circle cx="16.5" cy="17.5" r="1.5"/></>,
    'search': <><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></>,
    'arrow-right': <path d="M5 12h14m-5-6 6 6-6 6"/>,
    'arrow-left': <path d="M19 12H5m6-6-6 6 6 6"/>,
    'heart': <path d="M12 21s-7-4.5-9.5-9.2C.9 8.6 2.6 5 6 5c2 0 3.5 1.2 4.4 2.5C11.3 6.2 12.8 5 14.8 5c3.4 0 5.1 3.6 3.5 6.8C17.2 16.5 12 21 12 21Z"/>,
    'heart-fill': <path d="M12 21s-7-4.5-9.5-9.2C.9 8.6 2.6 5 6 5c2 0 3.5 1.2 4.4 2.5C11.3 6.2 12.8 5 14.8 5c3.4 0 5.1 3.6 3.5 6.8C17.2 16.5 12 21 12 21Z" fill="currentColor"/>,
    'star': <path d="m12 3 2.6 5.3 5.9.9-4.3 4.1 1 5.7L12 16.4 6.8 19l1-5.7-4.3-4.1 5.9-.9L12 3Z"/>,
    'star-fill': <path d="m12 3 2.6 5.3 5.9.9-4.3 4.1 1 5.7L12 16.4 6.8 19l1-5.7-4.3-4.1 5.9-.9L12 3Z" fill="currentColor"/>,
    'moon': <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/>,
    'chevron-left': <path d="m15 6-6 6 6 6"/>,
    'chevron-right': <path d="m9 6 6 6-6 6"/>,
    'phone': <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.4 2.1L8 9.7a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2Z"/>,
    'instagram': <><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></>,
    'facebook': <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2Z"/>,
    'mail': <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    'shield': <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/>,
    'badge': <><circle cx="12" cy="8" r="5"/><path d="m9 12-2 9 5-3 5 3-2-9"/></>,
    'compass': <><circle cx="12" cy="12" r="9"/><path d="m16 8-2 6-6 2 2-6 6-2Z"/></>,
    'menu': <path d="M4 6h16M4 12h16M4 18h16"/>,
    'close': <path d="M18 6 6 18M6 6l12 12"/>,
    'wifi': <path d="M5 12.6a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0M12 19.5h.01"/>,
    'check': <path d="m5 12 5 5 9-11"/>,
    'sparkle': <path d="M12 2v6m0 8v6M2 12h6m8 0h6M5 5l4 4m6 6 4 4M5 19l4-4m6-6 4-4"/>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
};

// ───────────────────────── Nav ─────────────────────────
const Nav = () => {
  const [active, setActive] = React.useState('hero');
  const [menuOpen, setMenuOpen] = React.useState(false);

  const NAV_LINKS = [
    { href: '#hero', id: 'hero', label: 'Početna' },
    { href: '#popular', id: 'popular', label: 'Popularno' },
    { href: '#offers', id: 'offers', label: 'Ponude' },
    { href: '#instagram', id: 'instagram', label: 'Galerija' },
    { href: '#contact', id: 'contact', label: 'Kontakt' },
  ];

  const handleNav = (id) => { setActive(id); setMenuOpen(false); };

  return (
    <nav className="nav" style={{position:'sticky',top:0}}>
      <div className="container nav-inner">
        <a href="#hero" className="nav-logo" onClick={() => handleNav('hero')}>
          <img src="assets/logo.jpg" alt="TravelCorner" />
          <span className="nav-logo-text">
            <span className="brand">Travel Corner</span>
            <span className="tag">Vaš kutak za putovanja</span>
          </span>
        </a>
        <div className="nav-links">
          {NAV_LINKS.map(l => (
            <a key={l.id} href={l.href} className={active === l.id ? 'active' : ''} onClick={() => handleNav(l.id)}>{l.label}</a>
          ))}
        </div>
        <div className="nav-cta">
          <span className="nav-phone"><Icon name="phone" size={15}/> +381 11 555 0123</span>
          <button className="btn btn-primary" style={{padding: '10px 18px', fontSize: 14}}>
            <Icon name="compass" size={16}/> Rezerviši
          </button>
          <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Otvori meni">
            <Icon name={menuOpen ? 'close' : 'menu'} size={22}/>
          </button>
        </div>
      </div>
      <div className={`nav-mobile ${menuOpen ? 'open' : ''}`}>
        <div className="nav-mobile-phone">
          <Icon name="phone" size={15}/> +381 11 555 0123
        </div>
        {NAV_LINKS.map(l => (
          <a key={l.id} href={l.href} className={active === l.id ? 'active' : ''} onClick={() => handleNav(l.id)}>{l.label}</a>
        ))}
        <div className="nav-mobile-cta">
          <button className="btn btn-primary" onClick={() => setMenuOpen(false)}>
            <Icon name="compass" size={16}/> Rezerviši
          </button>
        </div>
      </div>
    </nav>
  );
};

// ───────────────────────── Passport Form ─────────────────────────
const PassportForm = ({ variant = 'compact', defaultTab = 'avion' }) => {
  const [tab, setTab] = React.useState(defaultTab);
  const [dest, setDest] = React.useState('');
  const [date, setDate] = React.useState('');

  const fields = (
    <>
      <div className="passport-fields">
        <div className="passport-field">
          <div className="passport-field-icon"><Icon name="map-pin" size={18}/></div>
          <div className="passport-field-body">
            <div className="passport-field-label">Destinacija</div>
            <input value={dest} onChange={e => setDest(e.target.value)} placeholder="Gde želite da idete?" list="tc-destinations"/>
            <datalist id="tc-destinations">
              <option value="Santorini, Grčka"/>
              <option value="Antalija, Turska"/>
              <option value="Maldivi"/>
              <option value="Pariz, Francuska"/>
              <option value="Dubai, UAE"/>
              <option value="Bansko, Bugarska"/>
              <option value="Rim, Italija"/>
              <option value="Bali, Indonezija"/>
            </datalist>
          </div>
        </div>
        <div className="passport-field">
          <div className="passport-field-icon"><Icon name="calendar" size={18}/></div>
          <div className="passport-field-body">
            <div className="passport-field-label">Datum polaska</div>
            <input type="date" value={date} onChange={e => setDate(e.target.value)} />
          </div>
        </div>
      </div>
      <button className="passport-cta" onClick={() => alert('Tražim ponude za ' + (dest || 'sve destinacije') + '...')}>
        <Icon name="search" size={17}/> Pronađi ponudu
        <Icon name="arrow-right" size={17}/>
      </button>
    </>
  );

  const tabsRow = (
    <div className="passport-tabs">
      <button className={`passport-tab ${tab === 'avion' ? 'active' : ''}`} onClick={() => setTab('avion')}>
        <Icon name="plane" size={14}/> Avion
      </button>
      <button className={`passport-tab ${tab === 'bus' ? 'active' : ''}`} onClick={() => setTab('bus')}>
        <Icon name="bus" size={14}/> Autobus
      </button>
      <button className={`passport-tab ${tab === 'sopstveni' ? 'active' : ''}`} onClick={() => setTab('sopstveni')}>
        <Icon name="car" size={14}/> Sopstveni
      </button>
    </div>
  );

  if (variant === 'open') {
    return (
      <div className="passport v-open">
        <div className="passport-inner">
          <div className="passport-left">
            <div className="crown">Travel<br/>Corner</div>
            <div className="crest"><Icon name="compass" size={26} stroke={1.6}/></div>
            <div className="country">SRBIJA · PASSPORT</div>
            <div className="ornament">✦ ✦ ✦</div>
          </div>
          <div className="passport-right">
            {tabsRow}
            {fields}
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'ticket') {
    return (
      <div className="passport v-ticket">
        <div className="passport-top">
          <div className="route">
            BEG <span className="dash"></span> ???
          </div>
          <div className="seat">Boarding · 1A</div>
        </div>
        <div className="passport-body">
          {tabsRow}
          {fields}
        </div>
      </div>
    );
  }

  // compact (default)
  return (
    <div className="passport v-compact">
      <div className="passport-stamp">
        Travel<br/>Corner
        <small>SINCE 2014</small>
      </div>
      {tabsRow}
      {fields}
    </div>
  );
};

// ───────────────────────── Offer Card ─────────────────────────
const OfferCard = ({ offer, onClick }) => {
  const [fav, setFav] = React.useState(false);
  return (
    <article className="offer-card" onClick={onClick}>
      <div className="offer-img">
        <img src={offer.img} alt={offer.name} loading="lazy" onError={(e) => { e.target.style.background = 'linear-gradient(135deg, #E78A53, #97C9AE)'; e.target.style.opacity = 0; }}/>
        {offer.badge && <span className={`offer-badge ${offer.tag === 'Zima' || offer.tag === 'Gradovi' ? 'mint' : ''}`}>{offer.badge}</span>}
        <button className={`offer-fav ${fav ? 'is-fav' : ''}`} onClick={(e) => { e.stopPropagation(); setFav(!fav); }}>
          <Icon name={fav ? 'heart-fill' : 'heart'} size={16}/>
        </button>
      </div>
      <div className="offer-body">
        <div className="offer-loc">
          <Icon name="map-pin" size={13}/> {offer.country} · {offer.tag}
        </div>
        <h3 className="offer-name">{offer.name}</h3>
        <div className="offer-meta">
          <span><Icon name="moon" size={13}/> {offer.nights} noći</span>
          <span><Icon name="check" size={13}/> {offer.board}</span>
          <span style={{color: 'var(--tc-orange-deep)'}}><Icon name="star-fill" size={13}/> {offer.rating.toFixed(1)}</span>
        </div>
        <div className="offer-foot">
          <div className="offer-price">
            <span className="from">od</span>
            <span className="amount"><em>€{offer.price}</em>{offer.strike && <span className="strike">€{offer.strike}</span>}</span>
          </div>
          <button className="offer-go" onClick={(e) => e.stopPropagation()}><Icon name="arrow-right" size={16}/></button>
        </div>
      </div>
    </article>
  );
};

// ───────────────────────── Carousel ─────────────────────────
const PopularCarousel = () => {
  const trackRef = React.useRef(null);
  const scroll = (dir) => {
    const t = trackRef.current;
    if (!t) return;
    const step = 342; // card width + gap
    t.scrollBy({ left: dir * step, behavior: 'smooth' });
  };
  return (
    <section className="section popular-wrap" id="popular" data-screen-label="Popular offers" style={{background: 'linear-gradient(180deg, var(--tc-cream), var(--tc-orange-tint) 80%, var(--tc-cream))'}}>
      <div className="popular-bg" aria-hidden="true">
        <svg viewBox="0 0 1400 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.2" fill="var(--tc-orange)" opacity="0.18"/>
            </pattern>
          </defs>
          <rect width="1400" height="600" fill="url(#dots)"/>
          <path d="M -50 480 Q 250 380, 500 440 T 1100 380 Q 1300 350, 1480 420" fill="none" stroke="var(--tc-orange)" strokeWidth="2" strokeDasharray="4 8" strokeLinecap="round" opacity="0.35"/>
          <circle cx="-50" cy="480" r="6" fill="var(--tc-orange)"/>
          <circle cx="1480" cy="420" r="6" fill="var(--tc-orange)"/>
          <g transform="translate(720 410) rotate(-12)" fill="var(--tc-orange-deep)" opacity="0.5">
            <path d="M 0 0 L 22 -4 L 26 0 L 22 4 Z M 6 -2 L 0 -8 M 6 2 L 0 8"/>
          </g>
        </svg>
      </div>
      <span className="popular-handwritten">bestseleri</span>
      <div className="container" style={{position:'relative'}}>
        <div className="section-head">
          <div>
            <div className="section-eyebrow">naši favoriti</div>
            <h2 className="section-title">Najpopularnije <em style={{fontFamily: "'Caveat', cursive", color: 'var(--tc-orange)', fontStyle: 'normal'}}>ponude</em></h2>
            <p className="section-sub">Aranžmani koje naši putnici najčešće biraju — provereno dobre cene i smeštaji.</p>
          </div>
          <div className="carousel-nav">
            <button className="carousel-btn" onClick={() => scroll(-1)} aria-label="Prethodno"><Icon name="chevron-left" size={18}/></button>
            <button className="carousel-btn" onClick={() => scroll(1)} aria-label="Sledeće"><Icon name="chevron-right" size={18}/></button>
          </div>
        </div>
        <div className="carousel">
          <div className="carousel-track" ref={trackRef}>
            {window.TC_POPULAR.map((o, i) => (
              <div key={o.id} style={{position:'relative'}}>
                <span className="offer-num">{String(i+1).padStart(2,'0')}</span>
                <OfferCard offer={o} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ───────────────────────── All Offers grid ─────────────────────────
const AllOffers = () => {
  const [cat, setCat] = React.useState('all');
  const [sort, setSort] = React.useState('popular');
  const [pinned, setPinned] = React.useState(null); // destination id selected on map

  const filtered = React.useMemo(() => {
    let arr = window.TC_ALL_OFFERS;
    if (pinned) arr = arr.filter(o => o.id === pinned);
    else if (cat !== 'all') arr = arr.filter(o => o.tag === cat);
    if (sort === 'price-asc') arr = [...arr].sort((a, b) => a.price - b.price);
    else if (sort === 'price-desc') arr = [...arr].sort((a, b) => b.price - a.price);
    else if (sort === 'rating') arr = [...arr].sort((a, b) => b.rating - a.rating);
    return arr;
  }, [cat, sort, pinned]);

  const counts = React.useMemo(() => {
    const c = { all: window.TC_ALL_OFFERS.length };
    window.TC_ALL_OFFERS.forEach(o => { c[o.tag] = (c[o.tag] || 0) + 1; });
    return c;
  }, []);

  const handlePinSelect = (id) => {
    setPinned(id);
    if (id) setCat('all');
  };

  return (
    <section className="section" id="offers" data-screen-label="All offers">
      <div className="container">
        <div className="section-head" style={{justifyContent:'center',textAlign:'center',flexDirection:'column',alignItems:'center',marginBottom: 32}}>
          <div>
            <div className="section-eyebrow">katalog</div>
            <h2 className="section-title">Sve <em style={{fontFamily: "'Caveat', cursive", color: 'var(--tc-mint-deep)', fontStyle: 'normal'}}>ponude</em></h2>
            <p className="section-sub" style={{margin:'10px auto 0'}}>Klikni destinaciju na mapi ili filtriraj po kategoriji.</p>
          </div>
        </div>

        <window.WorldMapFilter offers={window.TC_ALL_OFFERS} selectedId={pinned} onSelect={handlePinSelect} />

        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:24,marginBottom:32,flexWrap:'wrap'}}>
          <div className="chips">
            {window.TC_CATEGORIES.map(c => (
              <button key={c.id} className={`chip ${cat === c.id && !pinned ? 'active' : ''}`} onClick={() => { setCat(c.id); setPinned(null); }}>
                {c.label} <span className="chip-count">{counts[c.id] || 0}</span>
              </button>
            ))}
          </div>
          <div style={{display:'flex',alignItems:'center',gap:10,fontSize:14,color:'var(--tc-ink-soft)'}}>
            <span>Sortiraj:</span>
            <select value={sort} onChange={e => setSort(e.target.value)} style={{padding:'10px 14px',borderRadius:'999px',border:'1.5px solid var(--tc-line)',background:'var(--tc-paper)',fontWeight:600,color:'var(--tc-ink)',cursor:'pointer'}}>
              <option value="popular">Popularnost</option>
              <option value="price-asc">Cena: niža → viša</option>
              <option value="price-desc">Cena: viša → niža</option>
              <option value="rating">Ocena</option>
            </select>
          </div>
        </div>

        <div className={`offers-grid ${cat === 'all' && !pinned ? 'with-featured' : ''}`}>
          {filtered.map(o => <OfferCard key={o.id} offer={o} />)}
        </div>

        {filtered.length === 0 && (
          <div style={{textAlign:'center',padding:'60px 20px',color:'var(--tc-ink-soft)'}}>
            Nema ponuda u ovoj kategoriji.
          </div>
        )}

        <div style={{textAlign:'center',marginTop:48}}>
          <button className="btn btn-ghost">Učitaj više ponuda <Icon name="arrow-right" size={16}/></button>
        </div>
      </div>
    </section>
  );
};

// ───────────────────────── Instagram ─────────────────────────
const Instagram = () => (
  <section className="section" id="instagram" data-screen-label="Instagram" style={{background: 'var(--tc-mint-tint)'}}>
    <div className="container">
      <div className="section-head" style={{justifyContent: 'center', textAlign: 'center', flexDirection: 'column', alignItems: 'center'}}>
        <div>
          <div className="section-eyebrow">@travelcorner.rs</div>
          <h2 className="section-title">Prati nas na <em style={{fontFamily: "'Caveat', cursive", color: 'var(--tc-orange)', fontStyle: 'normal'}}>Instagramu</em></h2>
          <p className="section-sub" style={{margin: '10px auto 0'}}>Pravi trenuci pravih putnika — taguj #travelcorner i tvoja slika može biti sledeća.</p>
        </div>
      </div>
      <div className="ig-mosaic">
        {window.TC_INSTAGRAM.slice(0, 10).map((p, i) => (
          <a key={i} className="ig-tile" href="#" onClick={e => e.preventDefault()}>
            <img src={p.img} alt={p.tag} loading="lazy"/>
            <span className="ig-tile-tag">{p.tag}</span>
          </a>
        ))}
      </div>
      <div style={{textAlign:'center',marginTop:32}}>
        <a href="#" className="btn btn-mint"><Icon name="instagram" size={17}/> Otvori Instagram</a>
      </div>
    </div>
  </section>
);

// ───────────────────────── Footer ─────────────────────────
const Footer = () => (
  <footer className="footer" id="contact" data-screen-label="Footer">
    <div className="container">
      <div className="footer-brand">
        <div className="script">Travel Corner</div>
        <p>Vaš kutak za putovanja od 2014. — pažljivo biramo svaki aranžman, jer znamo da odmor mora da bude jednostavan.</p>
        <div className="footer-social">
          <a href="#"><Icon name="instagram" size={17}/></a>
          <a href="#"><Icon name="facebook" size={17}/></a>
          <a href="#"><Icon name="mail" size={17}/></a>
        </div>
      </div>
      <div>
        <h4>Destinacije</h4>
        <ul>
          <li><a href="#">Letovanja</a></li>
          <li><a href="#">Zimovanja</a></li>
          <li><a href="#">Evropski gradovi</a></li>
          <li><a href="#">Egzotika</a></li>
          <li><a href="#">Krstarenja</a></li>
        </ul>
      </div>
      <div>
        <h4>O nama</h4>
        <ul>
          <li><a href="#">Naša priča</a></li>
          <li><a href="#">Tim</a></li>
          <li><a href="#">Reference</a></li>
          <li><a href="#">Karijera</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </div>
      <div>
        <h4>Kontakt</h4>
        <ul>
          <li><a href="#">+381 11 555 0123</a></li>
          <li><a href="#">hello@travelcorner.rs</a></li>
          <li><a href="#">Kralja Milana 42, Beograd</a></li>
          <li><a href="#">Pon–Pet 09–18h</a></li>
          <li><a href="#">Sub 10–14h</a></li>
        </ul>
      </div>
    </div>
    <div className="container">
      <div className="footer-bottom">
        <span>© 2026 Travel Corner d.o.o. · Licenca OTP 64/2014</span>
        <span>Uslovi korišćenja · Privatnost · YUTA član</span>
      </div>
    </div>
  </footer>
);

Object.assign(window, { Icon, Nav, PassportForm, OfferCard, PopularCarousel, AllOffers, Instagram, Footer });

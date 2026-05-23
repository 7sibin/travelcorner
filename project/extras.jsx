// extras.jsx — Why Us, Testimonials, Newsletter, decorative bits

// ─── Decorative dashed plane route ───
const TravelRoute = () => (
  <svg className="route-svg" viewBox="0 0 1200 80" preserveAspectRatio="none">
    <path d="M 30 50 Q 200 10, 400 40 T 800 30 Q 1000 50, 1170 25"/>
    <circle cx="30" cy="50" r="4"/>
    <circle cx="1170" cy="25" r="4"/>
    <g transform="translate(820 28) rotate(-8)">
      <path d="M-10 0 L8 -2 L10 0 L8 2 Z" fill="var(--tc-orange-deep)"/>
      <path d="M0 0 L8 -2 L10 0 L8 2 Z M3 -1 L0 -4 M3 1 L0 4" stroke="var(--tc-orange-deep)" strokeWidth="1.2" fill="var(--tc-orange-deep)"/>
    </g>
  </svg>
);

// ─── Why Us section ───
const WHY_ITEMS = [
  { num: '01', icon: 'shield', title: 'YUTA licenca i osiguranje', desc: 'Punih 12 godina sa YUTA licencom i polisom osiguranja garancije putovanja — vaš novac je uvek siguran.' },
  { num: '02', icon: 'badge', title: '2.400+ srećnih putnika', desc: 'Ne moramo mi da vam kažemo — oni već jesu. Pročitajte iskustva ljudi koji su putovali sa nama.' },
  { num: '03', icon: 'sparkle', title: 'Bez skrivenih troškova', desc: 'Cena koju vidite je cena koju plaćate. Sve takse, transferi i osiguranje su uračunati.' },
  { num: '04', icon: 'phone', title: 'Podrška 0–24', desc: 'Dok ste na putu, neko sa naše strane je uvek tu — od izgubljenog kofera do promene leta.' },
];

// ─── Open passport spread with stamping animation ───
const PassportSpread = () => {
  const ref = React.useRef(null);
  const [triggered, setTriggered] = React.useState(false);

  React.useEffect(() => {
    if (triggered) return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTriggered(true);
        obs.disconnect();
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [triggered]);

  return (
    <div className="passport-spread-wrap">
      <div ref={ref} className={`passport-spread ${triggered ? 'triggered' : ''}`}>
        {/* Left page — ID */}
        <div className="passport-page pp-left">
          <div className="pp-left-header">
            <div className="crest"><Icon name="compass" size={24} stroke={1.6}/></div>
            <span className="country">REPUBLIKA SRBIJA · PASSPORT</span>
            <span className="pp-script">Travel Corner</span>
          </div>
          <div className="pp-id">
            <div className="pp-photo">
              <Icon name="compass" size={36} stroke={1.3}/>
              <span>vaš kutak</span>
            </div>
            <div className="pp-fields">
              <div className="pp-field"><span className="pp-field-label">Surname / Prezime</span><span className="pp-field-value">PUTNIK</span></div>
              <div className="pp-field"><span className="pp-field-label">Given names / Imena</span><span className="pp-field-value">VI</span></div>
              <div className="pp-field"><span className="pp-field-label">Nationality</span><span className="pp-field-value">SRBIJA</span></div>
              <div className="pp-field"><span className="pp-field-label">Authority</span><span className="pp-field-value">TRAVEL CORNER</span></div>
              <div className="pp-field"><span className="pp-field-label">Date of issue</span><span className="pp-field-value">14 JUN 2014</span></div>
              <div className="pp-field"><span className="pp-field-label">Expiry</span><span className="pp-field-value">∞  NEVER</span></div>
            </div>
          </div>
          <div className="pp-mrz">
            P&lt;SRBPUTNIK&lt;&lt;VI&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;<br/>
            TC20140614SRBM&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;06
          </div>
        </div>

        {/* Right page — visa stamps */}
        <div className="passport-page pp-right">
          <div className="pp-right-corner">~ visa pages ~</div>
          <h3 className="pp-right-title">Zašto baš mi?</h3>
          <div className="pp-right-sub">— pečati koji govore umesto nas —</div>

          <div className="stamp-mark s1">
            <div className="stamp-icon"><Icon name="shield" size={22} stroke={2}/></div>
            <div className="stamp-label">YUTA · LICENSED</div>
            <div className="stamp-date">SRB · 2014</div>
          </div>
          <div className="stamp-mark mint s2">
            <div className="stamp-icon"><Icon name="badge" size={22} stroke={2}/></div>
            <div className="stamp-label">2400+ PUTNIKA</div>
            <div className="stamp-date">TC · APPROVED</div>
          </div>
          <div className="stamp-mark s3">
            <div className="stamp-icon"><Icon name="sparkle" size={20} stroke={2}/></div>
            <div className="stamp-label">ALL · INCLUSIVE</div>
            <div className="stamp-date">0€ · HIDDEN</div>
          </div>
          <div className="stamp-mark mint s4">
            <div className="stamp-icon"><Icon name="phone" size={20} stroke={2}/></div>
            <div className="stamp-label">24 / 7 · SUPPORT</div>
            <div className="stamp-date">BEG · 011</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const WhyUs = () => (
  <section className="section why-section" data-screen-label="Why TravelCorner">
    <div className="container">
      <div className="section-head" style={{justifyContent:'center',textAlign:'center',flexDirection:'column',alignItems:'center'}}>
        <div>
          <div className="section-eyebrow">zašto baš mi</div>
          <h2 className="section-title">Mali kutak, <em style={{fontFamily:"'Caveat', cursive", color:'var(--tc-orange)', fontStyle:'normal'}}>veliko iskustvo</em></h2>
          <p className="section-sub" style={{margin:'10px auto 0'}}>Nismo najveća agencija u gradu — ali smo ona koja vas zove dan pre puta da proveri da li je sve u redu.</p>
        </div>
      </div>
      <PassportSpread />
      <div className="why-grid">
        {WHY_ITEMS.map((w, i) => (
          <div key={i} className="why-card">
            <span className="why-num">{w.num}</span>
            <div className="why-stamp"><Icon name={w.icon} size={30} stroke={1.6}/></div>
            <h3>{w.title}</h3>
            <p>{w.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── Testimonials — postcard cards ───
const TESTIMONIALS = [
  {
    name: 'Marija Kostić',
    trip: 'Santorini · 8 noći',
    place: 'OIA',
    quote: 'Bili smo prvi put kod njih i osetili smo se kao kod prijatelja. Sve sređeno do najmanjeg detalja, hotel sa pogledom je bio iznad očekivanja!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80&auto=format&fit=crop',
    rating: 5,
  },
  {
    name: 'Stefan Jovanović',
    trip: 'Maldivi · honeymoon',
    place: 'MLE',
    quote: 'Ako želite da se ne brinete ni o čemu — ovo je adresa. Vodeni bungalov, transferi, papiri za vizu, sve. Sledeća stanica: Bali sa Travel Corner-om.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&auto=format&fit=crop',
    rating: 5,
  },
  {
    name: 'Ana i Marko Petrović',
    trip: 'Bansko · porodično',
    place: 'BAN',
    quote: 'Klinci su prvi put bili na skijanju i sve je proteklo glatko. Ana iz agencije nam je javila kad je sneg pao i šta da spakujemo. Vraćamo se!',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80&auto=format&fit=crop',
    rating: 5,
  },
];

const Testimonials = () => (
  <section className="section testimonials-section" data-screen-label="Testimonials">
    <div className="container">
      <div className="section-head">
        <div>
          <div className="section-eyebrow">iskustva putnika</div>
          <h2 className="section-title">Razglednice <em style={{fontFamily:"'Caveat', cursive", color:'var(--tc-orange)', fontStyle:'normal'}}>iz prve ruke</em></h2>
          <p className="section-sub">Pravi ljudi, pravi odmori. Ovo nisu plaćeni testimonijali — ovo su stvarne poruke koje smo dobili po povratku.</p>
        </div>
        <a href="#" className="btn btn-ghost">Sve recenzije <Icon name="arrow-right" size={16}/></a>
      </div>
      <div className="testimonials-grid">
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className="postcard">
            <div className="postcard-stamp">
              <Icon name="plane" size={20}/>
              <div className="place">{t.place}</div>
              <div>par avia</div>
            </div>
            <div className="postcard-stars">
              {[...Array(t.rating)].map((_, j) => <Icon key={j} name="star-fill" size={14}/>)}
            </div>
            <p className="postcard-quote">{t.quote}</p>
            <div className="postcard-author">
              <img className="postcard-avatar" src={t.avatar} alt={t.name}/>
              <div>
                <div className="postcard-author-name">{t.name}</div>
                <div className="postcard-author-trip">{t.trip}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── Newsletter — postcard CTA ───
const Newsletter = () => {
  const [email, setEmail] = React.useState('');
  const [sent, setSent] = React.useState(false);
  return (
    <section className="section newsletter-section" data-screen-label="Newsletter">
      <div className="container">
        <div className="newsletter-card">
          <div className="newsletter-left">
            <span className="script">Razglednica iz inboxa</span>
            <p>Jednom mesečno šaljemo email sa najboljim popustima — first-minute akcije, otkazane rezervacije i tihe ponude koje ne idu na sajt.</p>
            <div className="postal-lines"><span></span><span></span></div>
          </div>
          <div className="newsletter-right">
            <div className="newsletter-eyebrow">samo dobre vesti, obećavamo</div>
            <h3>Prijavi se za ponude pre svih.</h3>
            {!sent ? (
              <>
                <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); if (email) setSent(true); }}>
                  <input type="email" placeholder="tvoj@email.rs" value={email} onChange={e => setEmail(e.target.value)} required/>
                  <button type="submit" className="btn btn-primary"><Icon name="mail" size={16}/> Prijavi me</button>
                </form>
                <div className="newsletter-perks">
                  <span><Icon name="check" size={14} stroke={2.5}/> Bez spama</span>
                  <span><Icon name="check" size={14} stroke={2.5}/> Otkaz u 1 kliku</span>
                  <span><Icon name="check" size={14} stroke={2.5}/> 1× mesečno</span>
                </div>
              </>
            ) : (
              <div style={{padding: '20px 22px', background: 'var(--tc-mint-tint)', border: '1.5px solid var(--tc-mint)', borderRadius: 14, display: 'flex', gap: 12, alignItems: 'center'}}>
                <Icon name="check" size={22} stroke={2.5}/>
                <div>
                  <div style={{fontWeight:700}}>Spakovano i poslato! ✈</div>
                  <div style={{fontSize:13,color:'var(--tc-ink-soft)'}}>Proveri inbox za potvrdu — i razglednicu sa popustom.</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// ───────────────────────── Bestsellers + Spinning Globe ─────────────────────────
// Replaces the old carousel with 4 cards in front of an animated rotating Earth.
const WorldMapStrip = () => (
  // Stylized world map, 2:1 viewBox. Drawn twice (this svg is placed twice
  // side-by-side inside .globe-land) for seamless horizontal looping.
  <svg viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <g fill="#D27240">
      {/* North America */}
      <path d="M120,90 Q160,70 210,80 Q260,90 280,130 Q290,170 260,200 Q220,225 180,215 Q140,200 120,170 Q105,130 120,90 Z"/>
      <path d="M200,225 Q230,225 245,250 Q235,275 210,275 Q190,265 200,225 Z"/>
      {/* Central America */}
      <path d="M225,260 Q240,265 250,290 Q255,310 240,310 Q220,295 225,260 Z"/>
      {/* Greenland */}
      <ellipse cx="345" cy="80" rx="28" ry="42"/>
      {/* South America */}
      <path d="M275,320 Q300,310 315,340 Q325,380 320,420 Q300,455 280,440 Q265,400 270,360 Q272,335 275,320 Z"/>
      {/* Europe */}
      <path d="M460,110 Q510,105 530,130 Q525,155 495,160 Q470,158 455,145 Q450,125 460,110 Z"/>
      <ellipse cx="445" cy="105" rx="14" ry="6"/>
      {/* Scandinavia */}
      <path d="M480,75 Q500,70 505,90 Q500,105 488,103 Q478,95 480,75 Z"/>
      {/* Africa */}
      <path d="M485,200 Q535,195 555,240 Q565,290 540,340 Q510,365 485,345 Q465,300 470,250 Q475,220 485,200 Z"/>
      {/* Middle East / Arabia */}
      <path d="M555,200 Q585,200 595,235 Q585,255 565,250 Q545,230 555,200 Z"/>
      {/* Asia (main body) */}
      <path d="M555,100 Q650,85 740,105 Q800,125 815,160 Q805,195 740,210 Q665,215 600,200 Q560,180 555,140 Q550,115 555,100 Z"/>
      {/* India */}
      <path d="M650,210 Q675,210 685,250 Q680,275 660,275 Q638,255 650,210 Z"/>
      {/* SE Asia / China south */}
      <path d="M730,210 Q760,215 770,245 Q760,265 740,260 Q720,235 730,210 Z"/>
      {/* Japan */}
      <ellipse cx="830" cy="170" rx="8" ry="22" transform="rotate(20 830 170)"/>
      {/* Indonesia */}
      <ellipse cx="785" cy="295" rx="28" ry="9"/>
      <ellipse cx="825" cy="305" rx="18" ry="7"/>
      <ellipse cx="745" cy="285" rx="13" ry="6"/>
      {/* Philippines */}
      <ellipse cx="820" cy="265" rx="7" ry="14"/>
      {/* Australia */}
      <path d="M790,350 Q840,340 870,360 Q885,390 860,400 Q815,405 790,390 Q775,370 790,350 Z"/>
      {/* New Zealand */}
      <ellipse cx="910" cy="420" rx="6" ry="14" transform="rotate(30 910 420)"/>
      {/* UK & Ireland */}
      <ellipse cx="445" cy="130" rx="7" ry="11"/>
      {/* Madagascar */}
      <ellipse cx="565" cy="345" rx="6" ry="18" transform="rotate(-10 565 345)"/>
      {/* Iceland */}
      <ellipse cx="405" cy="85" rx="9" ry="6"/>
    </g>
  </svg>
);

const Globe = () => (
  <div className="globe-stage" aria-hidden="true">
    <div className="globe">
      <div className="globe-land">
        <WorldMapStrip />
        <WorldMapStrip />
      </div>
      <div className="globe-grid"></div>
    </div>
    <svg className="globe-orbit" viewBox="0 0 1000 1000">
      <ellipse className="globe-orbit-ring" cx="500" cy="500" rx="480" ry="180" transform="rotate(-18 500 500)"/>
      <g className="globe-orbit-plane">
        <g transform="translate(500 500)">
          <g transform="rotate(-18) translate(480 0) rotate(90)">
            <path d="M -16 0 L 12 -3 L 18 0 L 12 3 Z M -8 -3 L -14 -10 M -8 3 L -14 10" stroke="var(--tc-orange-deep)" strokeWidth="2" fill="var(--tc-orange-deep)" strokeLinejoin="round"/>
          </g>
        </g>
      </g>
    </svg>
  </div>
);

const Bestsellers = () => {
  const top4 = window.TC_POPULAR.slice(0, 4);
  return (
    <section className="section bestsellers-section" id="popular" data-screen-label="Bestsellers">
      <span className="bestsellers-handwritten tl">around</span>
      <span className="bestsellers-handwritten br">the world</span>
      <Globe />
      <div className="container">
        <div className="section-head" style={{justifyContent:'center',textAlign:'center',flexDirection:'column',alignItems:'center',marginBottom: 24}}>
          <div>
            <div className="section-eyebrow">bestseleri sezone</div>
            <h2 className="section-title">Četiri ponude koje <em style={{fontFamily:"'Caveat', cursive", color:'var(--tc-orange)', fontStyle:'normal'}}>obilaze svet</em></h2>
            <p className="section-sub" style={{margin:'10px auto 0'}}>Aranžmani koje su naši putnici najviše birali ove sezone — od peska do snega, na sve strane kompasa.</p>
          </div>
        </div>
        <div className="bestsellers-grid">
          {top4.map((o, i) => (
            <div key={o.id} style={{position:'relative'}}>
              <span className="offer-num">{String(i+1).padStart(2,'0')}</span>
              <OfferCard offer={o} />
            </div>
          ))}
        </div>
        <div style={{textAlign:'center', marginTop: 64, position:'relative', zIndex: 5}}>
          <a href="#offers" className="btn btn-primary">Pogledaj sve ponude <Icon name="arrow-right" size={16}/></a>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { Bestsellers, Globe, WorldMapStrip });

// ───────────────────────── World Map Filter (Leaflet) ─────────────────────────
const WorldMapFilter = ({ offers, selectedId, onSelect }) => {
  const containerRef = React.useRef(null);
  const mapRef = React.useRef(null);
  const markersRef = React.useRef({});

  // Keep latest props in refs so Leaflet handlers never capture stale closures
  const onSelectRef = React.useRef(onSelect);
  const selectedIdRef = React.useRef(selectedId);
  onSelectRef.current = onSelect;
  selectedIdRef.current = selectedId;

  const mapOffers = offers.filter(o => o.lat > 18 && o.lat < 73 && o.lng > -22 && o.lng < 50);

  React.useEffect(() => {
    const L = window.L;
    if (!L || mapRef.current) return;

    const map = L.map(containerRef.current, {
      center: [44, 20],
      zoom: 4,
      scrollWheelZoom: false,
      attributionControl: false,
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      subdomains: 'abcd',
      maxZoom: 19,
    }).addTo(map);

    L.control.attribution({ position: 'bottomright', prefix: false })
      .addAttribution('© <a href="https://www.openstreetmap.org/copyright" target="_blank">OSM</a> © <a href="https://carto.com" target="_blank">CARTO</a>')
      .addTo(map);

    mapRef.current = map;

    mapOffers.forEach(o => {
      const tip = `<div class="lf-tip-inner">
        <img src="${o.img}" alt="${o.name}" onerror="this.style.display='none'"/>
        <div>
          <div class="tip-loc">${o.country} · ${o.tag}</div>
          <div class="tip-name">${o.name}</div>
          <div class="tip-price">od €${o.price}</div>
        </div>
      </div>`;

      const marker = L.circleMarker([o.lat, o.lng], {
        radius: 7,
        fillColor: '#E78A53',
        color: '#fff',
        weight: 2.5,
        opacity: 1,
        fillOpacity: 1,
      }).addTo(map);

      marker.bindTooltip(tip, { direction: 'top', offset: [0, -8], className: 'lf-tip' });

      marker.on('click', () => {
        onSelectRef.current(o.id === selectedIdRef.current ? null : o.id);
      });

      markersRef.current[o.id] = marker;
    });

    return () => { map.remove(); mapRef.current = null; markersRef.current = {}; };
  }, []);

  // Sync marker style whenever selectedId changes
  React.useEffect(() => {
    Object.entries(markersRef.current).forEach(([id, marker]) => {
      const sel = id === selectedId;
      const dim = !!selectedId && !sel;
      marker.setRadius(sel ? 10 : 7);
      marker.setStyle({
        fillColor: dim ? '#b8b8b8' : '#E78A53',
        fillOpacity: dim ? 0.4 : 1,
        color: sel ? '#D27240' : '#fff',
        weight: sel ? 3 : 2.5,
      });
      if (sel) marker.bringToFront();
    });
  }, [selectedId]);

  return (
    <div className="world-map-filter">
      <div className="map-legend">
        <span className="ml-title">Klikni destinaciju</span>
        <span>na mapi za filtriranje</span>
      </div>
      {selectedId && (
        <button className="map-clear" onClick={() => onSelect(null)}>
          <Icon name="arrow-left" size={12}/> Prikaži sve
        </button>
      )}
      <div ref={containerRef} className="lf-map-canvas"/>
    </div>
  );
};

// ───────────────────────── How It Works (Boarding Pass) ─────────────────────────
const HOWTO_STEPS = [
  { num: '01', icon: 'search', title: 'Pretraži destinaciju', desc: 'Unesi gde i kada — sistem ti pokaže sve aktuelne ponude koje odgovaraju.', eta: '1 min' },
  { num: '02', icon: 'heart', title: 'Odaberi aranžman', desc: 'Uporedi hotele, datume i cene. Sačuvaj favorita ili odmah zovi naš tim.', eta: '5 min' },
  { num: '03', icon: 'shield', title: 'Plati sigurno', desc: 'Online karticom, na rate bez kamate, ili u poslovnici. Sva plaćanja su SSL zaštićena.', eta: '2 min' },
  { num: '04', icon: 'plane', title: 'Pakuj se i polazi', desc: 'Šaljemo ti vauchere, listu šta poneti i WhatsApp broj za 24/7 podršku tokom puta.', eta: 'spreman si' },
];

const Barcode = () => {
  const widths = [3,1,2,1,3,2,1,3,1,2,3,1,2,1,3,2,1,1,3,2,1,3,2,1,2,3,1,2,1,3,1,2,3,1,2,1,3,2,1,2];
  return (
    <div className="bp-barcode" aria-hidden="true">
      {widths.map((w, i) => <span key={i} style={{width: w + 'px'}}/>)}
    </div>
  );
};

const HowItWorks = () => (
  <section className="section howto-section" data-screen-label="How it works">
    <div className="container">
      <div className="section-head" style={{justifyContent:'center',textAlign:'center',flexDirection:'column',alignItems:'center'}}>
        <div>
          <div className="section-eyebrow">u 4 koraka do polaska</div>
          <h2 className="section-title">Tvoja <em style={{fontFamily:"'Caveat', cursive", color:'var(--tc-orange)', fontStyle:'normal'}}>boarding karta</em> za odmor</h2>
          <p className="section-sub" style={{margin:'10px auto 0'}}>Bez papirologije i komplikacija — sve se završi za manje od 10 minuta.</p>
        </div>
      </div>
      <div className="boarding-pass">
        <div className="bp-header">
          <div className="bp-logo">
            <Icon name="compass" size={18}/> Travel Corner
          </div>
          <div className="bp-route">
            BEG <span className="dash"></span> ANY
          </div>
          <div className="bp-meta">
            <span>FLIGHT <b>TC · 2026</b></span>
            <span>GATE <b>04</b></span>
            <span>SEAT <b>2A</b></span>
            <span>CLASS <b>SVI</b></span>
          </div>
        </div>
        <div className="bp-body">
          {HOWTO_STEPS.map((s, i) => (
            <div key={i} className="bp-step">
              <div className="bp-step-top">
                <div className="bp-step-num">{s.num}</div>
                <div className="bp-step-icon"><Icon name={s.icon} size={22} stroke={1.8}/></div>
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <span className="bp-step-eta"><Icon name="calendar" size={11} stroke={2.2}/> {s.eta}</span>
            </div>
          ))}
        </div>
        <div className="bp-footer">
          <div className="bp-footer-info">
            <div className="col"><span className="lbl">Passenger</span><span className="val">VI · Putnik</span></div>
            <div className="col"><span className="lbl">From</span><span className="val">Beograd (BEG)</span></div>
            <div className="col"><span className="lbl">To</span><span className="val">Svet (ANY)</span></div>
            <div className="col"><span className="lbl">Boarding</span><span className="val">Kad god želiš</span></div>
          </div>
          <Barcode />
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, { WorldMapFilter, HowItWorks });

// hero.jsx — Three hero variants for TravelCorner
// Each variant: auto-rotating slideshow + asymmetric passport form (right, toward center)

const useSlideshow = (count, ms = 6500) => {
  const [idx, setIdx] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  React.useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setIdx((idx + 1) % count), ms);
    return () => clearTimeout(t);
  }, [idx, paused, count, ms]);
  return [idx, setIdx, setPaused];
};

// ─────────── Variant 1 — Classic full-bleed slideshow ───────────
const HeroV1 = ({ passportVariant }) => {
  const slides = window.TC_HERO_SLIDES;
  const [idx, setIdx, setPaused] = useSlideshow(slides.length);
  const slide = slides[idx];
  return (
    <section className="hero hero-v1" id="hero" data-screen-label="Hero — Classic">
      <div className="container">
        <div
          className="hero-v1-stage"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {slides.map((s, i) => (
            <div
              key={s.id}
              className={`hero-v1-slide ${i === idx ? 'active' : ''}`}
              style={{ backgroundImage: `linear-gradient(135deg, #E78A53 0%, #97C9AE 100%), url(${s.image})`, backgroundSize: 'cover', backgroundBlendMode: 'normal' }}
            >
              <div style={{position: 'absolute', inset: 0, backgroundImage: `url(${s.image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}/>
            </div>
          ))}
          <div className="hero-v1-content">
            <div className="hero-v1-eyebrow">{slide.eyebrow}</div>
            <h1 className="hero-v1-title">
              {slide.title} <em>{slide.titleScript}</em>
            </h1>
            <p className="hero-v1-desc">{slide.desc}</p>
            <div className="hero-v1-price-tag">
              <span className="label">Od</span>
              <span className="amt">{slide.price}</span>
              <span style={{opacity: 0.6, textDecoration: 'line-through', fontSize: 14}}>{slide.strike}</span>
              <span style={{opacity: 0.7, fontSize: 13, paddingLeft: 6, borderLeft: '1px solid rgba(255,255,255,0.3)'}}>{slide.nights} noći · {slide.departure}</span>
            </div>
          </div>
          <div className="hero-v1-dots">
            {slides.map((_, i) => (
              <button key={i} className={`hero-v1-dot ${i === idx ? 'active' : ''}`} onClick={() => setIdx(i)} aria-label={`Slajd ${i+1}`}/>
            ))}
          </div>
        </div>
        <div className="hero-v1-passport-wrap">
          <PassportForm variant={passportVariant} />
        </div>
      </div>
    </section>
  );
};

// ─────────── Variant 2 — Split frame: image + mint accent panel ───────────
const HeroV2 = ({ passportVariant }) => {
  const slides = window.TC_HERO_SLIDES;
  const [idx, setIdx, setPaused] = useSlideshow(slides.length, 7000);
  const slide = slides[idx];
  return (
    <section className="hero hero-v2" id="hero" data-screen-label="Hero — Split">
      <div className="container">
        <div className="hero-v2-grid">
          <div
            className="hero-v2-left"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {slides.map((s, i) => (
              <div key={s.id} className={`hero-v2-slide ${i === idx ? 'active' : ''}`} style={{ backgroundImage: `url(${s.image})` }}/>
            ))}
            <div className="hero-v2-cap">
              <div>
                <div className="hero-v2-cap-name">{slide.name}</div>
                <div className="hero-v2-cap-loc"><Icon name="map-pin" size={13}/> {slide.country} · {slide.nights} noći</div>
              </div>
              <div className="hero-v2-cap-price">od {slide.price}</div>
            </div>
            <div className="hero-v1-dots" style={{position: 'absolute', bottom: 'auto', top: 24, left: 24}}>
              {slides.map((_, i) => (
                <button key={i} className={`hero-v1-dot ${i === idx ? 'active' : ''}`} onClick={() => setIdx(i)}/>
              ))}
            </div>
          </div>
          <div className="hero-v2-right">
            <div>
              <div className="hero-v2-eyebrow">novo u ponudi</div>
              <h1 className="hero-v2-title">Sledeća avantura počinje <em>ovde</em>.</h1>
              <p className="hero-v2-desc">Pažljivo birane destinacije sa proverenim cenama. Unesite gde i kada — pokazaćemo vam najbolje aranžmane u sekundi.</p>
              <div style={{display:'flex',gap:20,fontSize:13,color:'var(--tc-ink-soft)',marginBottom: 8, position: 'relative', zIndex: 2}}>
                <span style={{display:'flex',alignItems:'center',gap:6}}><Icon name="check" size={14} stroke={2.5}/> 2.400+ putnika</span>
                <span style={{display:'flex',alignItems:'center',gap:6}}><Icon name="check" size={14} stroke={2.5}/> 12 godina iskustva</span>
              </div>
            </div>
            <div className="hero-v2-passport-wrap">
              <PassportForm variant={passportVariant} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─────────── Variant 3 — Polaroid magazine layout ───────────
const HeroV3 = ({ passportVariant }) => {
  const slides = window.TC_HERO_SLIDES;
  const [idx, setIdx, setPaused] = useSlideshow(slides.length, 7000);
  // Use 3 photos at offsets from current idx
  const photos = [0, 1, 2].map(o => slides[(idx + o) % slides.length]);

  return (
    <section className="hero hero-v3" id="hero" data-screen-label="Hero — Polaroid"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}>
      <svg style={{position:'absolute',top:60,left:'45%',opacity:0.5,zIndex:0}} width="80" height="40" viewBox="0 0 80 40" fill="none" stroke="var(--tc-mint-deep)" strokeWidth="1.5" strokeDasharray="3 4">
        <path d="M2 30 Q 20 5, 40 20 T 78 12" strokeLinecap="round"/>
      </svg>
      <div className="container">
        <div className="hero-v3-grid">
          <div className="hero-v3-text">
            <div className="hero-v3-eyebrow"><span className="line"></span> putovanja koja se pamte</div>
            <h1 className="hero-v3-title">
              <span className="script">Spakuj kofer,</span>
              <span className="underline">svet te</span> čeka.
            </h1>
            <p className="hero-v3-desc">Od skrivenih grčkih ostrva do dalekog Balija — sve destinacije na jednom mestu, sa proverenim cenama i ljudima koji znaju šta rade.</p>
            <div className="hero-v3-stats">
              <div className="hero-v3-stat">
                <div className="num">2.400+</div>
                <div className="lbl">srećnih putnika</div>
              </div>
              <div className="hero-v3-stat">
                <div className="num">120</div>
                <div className="lbl">destinacija</div>
              </div>
              <div className="hero-v3-stat">
                <div className="num">12 god.</div>
                <div className="lbl">iskustva</div>
              </div>
            </div>
            <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
              <button className="btn btn-primary">Pogledaj sve ponude <Icon name="arrow-right" size={16}/></button>
              <button className="btn btn-ghost"><Icon name="sparkle" size={15}/> Aktuelne akcije</button>
            </div>
          </div>
          <div className="hero-v3-photos">
            {photos.map((p, i) => (
              <div key={`${p.id}-${i}`} className={`polaroid p${i+1}`}>
                <div className="ph-img" style={{backgroundImage:`url(${p.image})`}}/>
                <div className="ph-cap">{p.name}, {p.country}</div>
              </div>
            ))}
            <div className="hero-v3-passport-wrap">
              <PassportForm variant={passportVariant} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { HeroV1, HeroV2, HeroV3 });

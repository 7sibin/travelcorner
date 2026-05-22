import { useState, useMemo } from 'react';
import { TC_ALL_OFFERS, TC_CATEGORIES } from '../data';
import Icon from '../components/Icon';
import OfferCard from '../components/OfferCard';

const toXY = (lat, lng) => ({
  x: ((lng + 180) / 360) * 1000,
  y: ((90 - lat) / 180) * 500,
});

const ContinentPaths = () => (
  <g className="continent">
    <path d="M120,90 Q160,70 210,80 Q260,90 280,130 Q290,170 260,200 Q220,225 180,215 Q140,200 120,170 Q105,130 120,90 Z"/>
    <path d="M200,225 Q230,225 245,250 Q235,275 210,275 Q190,265 200,225 Z"/>
    <path d="M225,260 Q240,265 250,290 Q255,310 240,310 Q220,295 225,260 Z"/>
    <ellipse cx="345" cy="80" rx="28" ry="42"/>
    <path d="M275,320 Q300,310 315,340 Q325,380 320,420 Q300,455 280,440 Q265,400 270,360 Q272,335 275,320 Z"/>
    <path d="M460,110 Q510,105 530,130 Q525,155 495,160 Q470,158 455,145 Q450,125 460,110 Z"/>
    <ellipse cx="445" cy="105" rx="14" ry="6"/>
    <path d="M480,75 Q500,70 505,90 Q500,105 488,103 Q478,95 480,75 Z"/>
    <path d="M485,200 Q535,195 555,240 Q565,290 540,340 Q510,365 485,345 Q465,300 470,250 Q475,220 485,200 Z"/>
    <path d="M555,200 Q585,200 595,235 Q585,255 565,250 Q545,230 555,200 Z"/>
    <path d="M555,100 Q650,85 740,105 Q800,125 815,160 Q805,195 740,210 Q665,215 600,200 Q560,180 555,140 Q550,115 555,100 Z"/>
    <path d="M650,210 Q675,210 685,250 Q680,275 660,275 Q638,255 650,210 Z"/>
    <path d="M730,210 Q760,215 770,245 Q760,265 740,260 Q720,235 730,210 Z"/>
    <ellipse cx="830" cy="170" rx="8" ry="22" transform="rotate(20 830 170)"/>
    <ellipse cx="785" cy="295" rx="28" ry="9"/>
    <ellipse cx="825" cy="305" rx="18" ry="7"/>
    <ellipse cx="745" cy="285" rx="13" ry="6"/>
    <ellipse cx="820" cy="265" rx="7" ry="14"/>
    <path d="M790,350 Q840,340 870,360 Q885,390 860,400 Q815,405 790,390 Q775,370 790,350 Z"/>
    <ellipse cx="910" cy="420" rx="6" ry="14" transform="rotate(30 910 420)"/>
    <ellipse cx="445" cy="130" rx="7" ry="11"/>
    <ellipse cx="565" cy="345" rx="6" ry="18" transform="rotate(-10 565 345)"/>
    <ellipse cx="405" cy="85" rx="9" ry="6"/>
  </g>
);

const WorldMapFilter = ({ offers, selectedId, onSelect }) => {
  const [hoverId, setHoverId] = useState(null);
  const activeId = hoverId || selectedId;
  const activeOffer = activeId ? offers.find(o => o.id === activeId) : null;

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
      <svg viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg">
        <ContinentPaths />
        <g stroke="var(--tc-orange)" strokeWidth="1" strokeDasharray="3 5" fill="none" opacity="0.3">
          <path d="M 280 220 Q 380 180, 480 200"/>
          <path d="M 540 160 Q 640 200, 700 240"/>
        </g>
        {offers.map(o => {
          const { x, y } = toXY(o.lat, o.lng);
          const isSelected = selectedId === o.id;
          const isDim = selectedId && !isSelected;
          return (
            <g
              key={o.id}
              className={`map-pin ${isSelected ? 'selected' : ''} ${isDim ? 'dim' : ''}`}
              onMouseEnter={() => setHoverId(o.id)}
              onMouseLeave={() => setHoverId(null)}
              onClick={() => onSelect(o.id === selectedId ? null : o.id)}
              style={{cursor:'pointer'}}
            >
              <circle className="pin-pulse" cx={x} cy={y} r="6"/>
              <circle className="pin-dot" cx={x} cy={y} r={isSelected ? 8 : 6}/>
            </g>
          );
        })}
      </svg>
      {activeOffer && (() => {
        const { x, y } = toXY(activeOffer.lat, activeOffer.lng);
        return (
        <div
          className="map-tooltip"
          style={{
            left: `calc(18px + ${x / 1000} * (100% - 36px))`,
            top: `calc(18px + ${y / 500} * (100% - 36px))`,
          }}
        >
          <img src={activeOffer.img} alt={activeOffer.name} loading="lazy"/>
          <div>
            <div className="tt-loc">{activeOffer.country} · {activeOffer.tag}</div>
            <div className="tt-name">{activeOffer.name}</div>
            <div className="tt-price">od €{activeOffer.price}</div>
          </div>
        </div>
        );
      })()}
    </div>
  );
};

const AllOffers = () => {
  const [cat, setCat] = useState('all');
  const [sort, setSort] = useState('popular');
  const [pinned, setPinned] = useState(null);

  const filtered = useMemo(() => {
    let arr = TC_ALL_OFFERS;
    if (pinned) arr = arr.filter(o => o.id === pinned);
    else if (cat !== 'all') arr = arr.filter(o => o.tag === cat);
    if (sort === 'price-asc') arr = [...arr].sort((a, b) => a.price - b.price);
    else if (sort === 'price-desc') arr = [...arr].sort((a, b) => b.price - a.price);
    else if (sort === 'rating') arr = [...arr].sort((a, b) => b.rating - a.rating);
    return arr;
  }, [cat, sort, pinned]);

  const counts = useMemo(() => {
    const c = { all: TC_ALL_OFFERS.length };
    TC_ALL_OFFERS.forEach(o => { c[o.tag] = (c[o.tag] || 0) + 1; });
    return c;
  }, []);

  const handlePinSelect = (id) => {
    setPinned(id);
    if (id) setCat('all');
  };

  return (
    <section className="section" id="offers">
      <div className="container">
        <div className="section-head" style={{justifyContent:'center',textAlign:'center',flexDirection:'column',alignItems:'center',marginBottom: 32}}>
          <div>
            <div className="section-eyebrow">katalog</div>
            <h2 className="section-title">Sve <em style={{fontFamily:"'Caveat', cursive", color:'var(--tc-mint-deep)', fontStyle:'normal'}}>ponude</em></h2>
            <p className="section-sub" style={{margin:'10px auto 0'}}>Klikni destinaciju na mapi ili filtriraj po kategoriji.</p>
          </div>
        </div>
        <WorldMapFilter offers={TC_ALL_OFFERS} selectedId={pinned} onSelect={handlePinSelect} />
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:24,marginBottom:32,flexWrap:'wrap'}}>
          <div className="chips">
            {TC_CATEGORIES.map(c => (
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

export default AllOffers;

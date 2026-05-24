import { useState, useMemo, useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { TC_ALL_OFFERS, TC_CATEGORIES } from '../data';
import Icon from '../components/Icon';
import OfferCard from '../components/OfferCard';

const WorldMapFilter = ({ offers, selectedId, onSelect }) => {
  const containerRef = useRef(null);
  const mapRef = useRef(null);
  const markersRef = useRef({});
  const onSelectRef = useRef(onSelect);
  const selectedIdRef = useRef(selectedId);
  onSelectRef.current = onSelect;
  selectedIdRef.current = selectedId;

  const mapOffers = offers.filter(o => o.lat > 18 && o.lat < 73 && o.lng > -22 && o.lng < 50);

  useEffect(() => {
    if (mapRef.current) return;

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

  useEffect(() => {
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

const PAGE_SIZE = 6;

const AllOffers = () => {
  const [cat, setCat] = useState('all');
  const [sort, setSort] = useState('popular');
  const [pinned, setPinned] = useState(null);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

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
    setVisibleCount(PAGE_SIZE);
    if (id) setCat('all');
  };

  const handleCatChange = (id) => {
    setCat(id);
    setPinned(null);
    setVisibleCount(PAGE_SIZE);
  };

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

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
              <button key={c.id} className={`chip ${cat === c.id && !pinned ? 'active' : ''}`} onClick={() => handleCatChange(c.id)}>
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
        <div className="offers-grid">
          {visible.map(o => <OfferCard key={o.id} offer={o} />)}
        </div>
        {filtered.length === 0 && (
          <div style={{textAlign:'center',padding:'60px 20px',color:'var(--tc-ink-soft)'}}>
            Nema ponuda u ovoj kategoriji.
          </div>
        )}
        {hasMore && (
          <div style={{textAlign:'center',marginTop:48}}>
            <button className="btn btn-ghost" onClick={() => setVisibleCount(v => v + PAGE_SIZE)}>
              Učitaj više ponuda <Icon name="arrow-right" size={16}/>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllOffers;

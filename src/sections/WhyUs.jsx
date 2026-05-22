import { useRef, useState, useEffect } from 'react';
import Icon from '../components/Icon';

const WHY_ITEMS = [
  { num: '01', icon: 'shield', title: 'YUTA licenca i osiguranje', desc: 'Punih 12 godina sa YUTA licencom i polisom osiguranja garancije putovanja — vaš novac je uvek siguran.' },
  { num: '02', icon: 'badge', title: '2.400+ srećnih putnika', desc: 'Ne moramo mi da vam kažemo — oni već jesu. Pročitajte iskustva ljudi koji su putovali sa nama.' },
  { num: '03', icon: 'sparkle', title: 'Bez skrivenih troškova', desc: 'Cena koju vidite je cena koju plaćate. Sve takse, transferi i osiguranje su uračunati.' },
  { num: '04', icon: 'phone', title: 'Podrška 0–24', desc: 'Dok ste na putu, neko sa naše strane je uvek tu — od izgubljenog kofera do promene leta.' },
];

const PassportSpread = () => {
  const ref = useRef(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    if (triggered) return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setTriggered(true); obs.disconnect(); }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [triggered]);

  return (
    <div className="passport-spread-wrap">
      <div ref={ref} className={`passport-spread ${triggered ? 'triggered' : ''}`}>
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
            {'P<SRBPUTNIK<<VI<<<<<<<<<<<<<<<<<<<<<<<<<<<'}<br/>
            {'TC20140614SRBM<<<<<<<<<<<<<<<<<<<<<<<<06'}
          </div>
        </div>
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
  <section className="section why-section">
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

export default WhyUs;

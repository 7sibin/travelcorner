import Icon from '../components/Icon';

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
  <section className="section howto-section">
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
          {HOWTO_STEPS.map((s) => (
            <div key={s.num} className="bp-step">
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

export default HowItWorks;

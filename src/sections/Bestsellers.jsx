import { TC_POPULAR } from '../data';
import Icon from '../components/Icon';
import OfferCard from '../components/OfferCard';

const WorldMapStrip = () => (
  <svg viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <g fill="#D27240">
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
  const top4 = TC_POPULAR.slice(0, 4);
  return (
    <section className="section bestsellers-section" id="popular">
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

export default Bestsellers;

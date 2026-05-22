import { TC_INSTAGRAM } from '../data';
import Icon from '../components/Icon';

const Instagram = () => (
  <section className="section" id="instagram" style={{background: 'var(--tc-mint-tint)'}}>
    <div className="container">
      <div className="section-head" style={{justifyContent:'center',textAlign:'center',flexDirection:'column',alignItems:'center'}}>
        <div>
          <div className="section-eyebrow">@travelcorner.rs</div>
          <h2 className="section-title">Prati nas na <em style={{fontFamily:"'Caveat', cursive", color:'var(--tc-orange)', fontStyle:'normal'}}>Instagramu</em></h2>
          <p className="section-sub" style={{margin:'10px auto 0'}}>Pravi trenuci pravih putnika — taguj #travelcorner i tvoja slika može biti sledeća.</p>
        </div>
      </div>
      <div className="ig-mosaic">
        {TC_INSTAGRAM.slice(0, 10).map((p, i) => (
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

export default Instagram;

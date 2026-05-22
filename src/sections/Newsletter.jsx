import { useState } from 'react';
import Icon from '../components/Icon';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  return (
    <section className="section newsletter-section">
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
              <div style={{padding:'20px 22px',background:'var(--tc-mint-tint)',border:'1.5px solid var(--tc-mint)',borderRadius:14,display:'flex',gap:12,alignItems:'center'}}>
                <Icon name="check" size={22} stroke={2.5}/>
                <div>
                  <div style={{fontWeight:700}}>Spakovano i poslato!</div>
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

export default Newsletter;

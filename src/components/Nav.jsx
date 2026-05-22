import { useState } from 'react';
import Icon from './Icon';

const Nav = () => {
  const [active, setActive] = useState('hero');
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="#hero" className="nav-logo" onClick={() => setActive('hero')}>
          <img src="/assets/logo.jpg" alt="TravelCorner" />
          <span className="nav-logo-text">
            <span className="brand">Travel Corner</span>
            <span className="tag">Vaš kutak za putovanja</span>
          </span>
        </a>
        <div className="nav-links">
          <a href="#hero" className={active === 'hero' ? 'active' : ''} onClick={() => setActive('hero')}>Početna</a>
          <a href="#popular" className={active === 'popular' ? 'active' : ''} onClick={() => setActive('popular')}>Popularno</a>
          <a href="#offers" className={active === 'offers' ? 'active' : ''} onClick={() => setActive('offers')}>Ponude</a>
          <a href="#instagram" className={active === 'instagram' ? 'active' : ''} onClick={() => setActive('instagram')}>Galerija</a>
          <a href="#contact" className={active === 'contact' ? 'active' : ''} onClick={() => setActive('contact')}>Kontakt</a>
        </div>
        <div className="nav-cta">
          <span className="nav-phone"><Icon name="phone" size={15}/> +381 11 555 0123</span>
          <button className="btn btn-primary" style={{padding: '10px 18px', fontSize: 14}}>
            <Icon name="compass" size={16}/> Rezerviši
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

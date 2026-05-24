import { useState, useEffect } from 'react';
import Icon from './Icon';

const LINKS = [
  { id: 'hero',      label: 'Početna'  },
  { id: 'popular',   label: 'Popularno' },
  { id: 'offers',    label: 'Ponude'   },
  { id: 'instagram', label: 'Galerija' },
  { id: 'contact',   label: 'Kontakt'  },
];

const Nav = () => {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const update = () => {
      const threshold = window.innerHeight * 0.35;
      let current = LINKS[0].id;
      for (const { id } of LINKS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= threshold) current = id;
      }
      setActive(current);
    };

    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="#hero" className="nav-logo">
          <img src="/assets/logo.jpg" alt="TravelCorner" />
          <span className="nav-logo-text">
            <span className="brand">Travel Corner</span>
            <span className="tag">Vaš kutak za putovanja</span>
          </span>
        </a>
        <div className="nav-links">
          {LINKS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? 'active' : ''}
              onClick={() => setActive(id)}
            >
              {label}
            </a>
          ))}
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

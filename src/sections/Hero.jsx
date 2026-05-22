import { useState, useEffect } from 'react';
import { TC_HERO_SLIDES } from '../data';
import Icon from '../components/Icon';
import PassportForm from '../components/PassportForm';

const useSlideshow = (count, ms = 6500) => {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setIdx(i => (i + 1) % count), ms);
    return () => clearTimeout(t);
  }, [idx, paused, count, ms]);
  return [idx, setIdx, setPaused];
};

const Hero = () => {
  const slides = TC_HERO_SLIDES;
  const [idx, setIdx, setPaused] = useSlideshow(slides.length);
  const slide = slides[idx];
  return (
    <section className="hero hero-v1" id="hero">
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
              style={{ backgroundImage: `url(${s.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
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
          <PassportForm />
        </div>
      </div>
    </section>
  );
};

export default Hero;

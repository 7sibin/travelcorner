import { useState } from 'react';
import Icon from './Icon';

const OfferCard = ({ offer, onClick }) => {
  const [fav, setFav] = useState(false);
  return (
    <article className="offer-card" onClick={onClick}>
      <div className="offer-img">
        <img src={offer.img} alt={offer.name} loading="lazy" onError={(e) => { e.target.style.opacity = 0; }}/>
        {offer.badge && <span className={`offer-badge ${offer.tag === 'Zima' || offer.tag === 'Gradovi' ? 'mint' : ''}`}>{offer.badge}</span>}
        <button className={`offer-fav ${fav ? 'is-fav' : ''}`} onClick={(e) => { e.stopPropagation(); setFav(!fav); }}>
          <Icon name={fav ? 'heart-fill' : 'heart'} size={16}/>
        </button>
      </div>
      <div className="offer-body">
        <div className="offer-loc">
          <Icon name="map-pin" size={13}/> {offer.country} · {offer.tag}
        </div>
        <h3 className="offer-name">{offer.name}</h3>
        <div className="offer-meta">
          <span><Icon name="moon" size={13}/> {offer.nights} noći</span>
          <span><Icon name="check" size={13}/> {offer.board}</span>
          <span style={{color: 'var(--tc-orange-deep)'}}><Icon name="star-fill" size={13}/> {offer.rating.toFixed(1)}</span>
        </div>
        <div className="offer-foot">
          <div className="offer-price">
            <span className="from">od</span>
            <span className="amount"><em>€{offer.price}</em>{offer.strike && <span className="strike">€{offer.strike}</span>}</span>
          </div>
          <button className="offer-go" onClick={(e) => e.stopPropagation()}><Icon name="arrow-right" size={16}/></button>
        </div>
      </div>
    </article>
  );
};

export default OfferCard;

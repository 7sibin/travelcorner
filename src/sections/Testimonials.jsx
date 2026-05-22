import Icon from '../components/Icon';

const TESTIMONIALS = [
  {
    name: 'Marija Kostić', trip: 'Santorini · 8 noći', place: 'OIA',
    quote: 'Bili smo prvi put kod njih i osetili smo se kao kod prijatelja. Sve sređeno do najmanjeg detalja, hotel sa pogledom je bio iznad očekivanja!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80&auto=format&fit=crop',
    rating: 5,
  },
  {
    name: 'Stefan Jovanović', trip: 'Maldivi · honeymoon', place: 'MLE',
    quote: 'Ako želite da se ne brinete ni o čemu — ovo je adresa. Vodeni bungalov, transferi, papiri za vizu, sve. Sledeća stanica: Bali sa Travel Corner-om.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&auto=format&fit=crop',
    rating: 5,
  },
  {
    name: 'Ana i Marko Petrović', trip: 'Bansko · porodično', place: 'BAN',
    quote: 'Klinci su prvi put bili na skijanju i sve je proteklo glatko. Ana iz agencije nam je javila kad je sneg pao i šta da spakujemo. Vraćamo se!',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80&auto=format&fit=crop',
    rating: 5,
  },
];

const Testimonials = () => (
  <section className="section testimonials-section">
    <div className="container">
      <div className="section-head">
        <div>
          <div className="section-eyebrow">iskustva putnika</div>
          <h2 className="section-title">Razglednice <em style={{fontFamily:"'Caveat', cursive", color:'var(--tc-orange)', fontStyle:'normal'}}>iz prve ruke</em></h2>
          <p className="section-sub">Pravi ljudi, pravi odmori. Ovo nisu plaćeni testimonijali — ovo su stvarne poruke koje smo dobili po povratku.</p>
        </div>
        <a href="#" className="btn btn-ghost">Sve recenzije <Icon name="arrow-right" size={16}/></a>
      </div>
      <div className="testimonials-grid">
        {TESTIMONIALS.map((t) => (
          <div key={t.name} className="postcard">
            <div className="postcard-stamp">
              <Icon name="plane" size={20}/>
              <div className="place">{t.place}</div>
              <div>par avia</div>
            </div>
            <div className="postcard-stars">
              {[...Array(t.rating)].map((_, j) => <Icon key={j} name="star-fill" size={14}/>)}
            </div>
            <p className="postcard-quote">{t.quote}</p>
            <div className="postcard-author">
              <img className="postcard-avatar" src={t.avatar} alt={t.name} loading="lazy"/>
              <div>
                <div className="postcard-author-name">{t.name}</div>
                <div className="postcard-author-trip">{t.trip}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;

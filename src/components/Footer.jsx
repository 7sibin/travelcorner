import Icon from './Icon';

const Footer = () => (
  <footer className="footer" id="contact">
    <div className="container">
      <div className="footer-brand">
        <div className="script">Travel Corner</div>
        <p>Vaš kutak za putovanja od 2014. — pažljivo biramo svaki aranžman, jer znamo da odmor mora da bude jednostavan.</p>
        <div className="footer-social">
          <a href="#"><Icon name="instagram" size={17}/></a>
          <a href="#"><Icon name="facebook" size={17}/></a>
          <a href="#"><Icon name="mail" size={17}/></a>
        </div>
      </div>
      <div>
        <h4>Destinacije</h4>
        <ul>
          <li><a href="#">Letovanja</a></li>
          <li><a href="#">Zimovanja</a></li>
          <li><a href="#">Evropski gradovi</a></li>
          <li><a href="#">Egzotika</a></li>
          <li><a href="#">Krstarenja</a></li>
        </ul>
      </div>
      <div>
        <h4>O nama</h4>
        <ul>
          <li><a href="#">Naša priča</a></li>
          <li><a href="#">Tim</a></li>
          <li><a href="#">Reference</a></li>
          <li><a href="#">Karijera</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </div>
      <div>
        <h4>Kontakt</h4>
        <ul>
          <li><a href="#">+381 11 555 0123</a></li>
          <li><a href="#">hello@travelcorner.rs</a></li>
          <li><a href="#">Kralja Milana 42, Beograd</a></li>
          <li><a href="#">Pon–Pet 09–18h</a></li>
          <li><a href="#">Sub 10–14h</a></li>
        </ul>
      </div>
    </div>
    <div className="container">
      <div className="footer-bottom">
        <span>© 2026 Travel Corner d.o.o. · Licenca OTP 64/2014</span>
        <span>Uslovi korišćenja · Privatnost · YUTA član</span>
      </div>
    </div>
  </footer>
);

export default Footer;

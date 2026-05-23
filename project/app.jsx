// app.jsx — Main TravelCorner application
// Composes hero variant + sections, wires Tweaks panel.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroVariant": "v1",
  "passportStyle": "compact"
}/*EDITMODE-END*/;

const HERO_OPTIONS = [
  { value: 'v1', label: 'Klasičan' },
  { value: 'v2', label: 'Split' },
  { value: 'v3', label: 'Polaroid' },
];

const PASSPORT_OPTIONS = [
  { value: 'compact', label: 'Kompakt — kartica + pečat' },
  { value: 'open', label: 'Otvoren — sa koricom' },
  { value: 'ticket', label: 'Boarding pass' },
];

const App = () => {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  const Hero = t.heroVariant === 'v2' ? window.HeroV2
             : t.heroVariant === 'v3' ? window.HeroV3
             : window.HeroV1;

  return (
    <>
      <Nav />
      <Hero passportVariant={t.passportStyle} />
      <Bestsellers />
      <HowItWorks />
      <AllOffers />
      <WhyUs />
      <Testimonials />
      <Instagram />
      <Newsletter />
      <Footer />

      <TweaksPanel>
        <TweakSection label="Hero sekcija" />
        <TweakRadio
          label="Varijanta"
          value={t.heroVariant}
          options={HERO_OPTIONS}
          onChange={v => setTweak('heroVariant', v)}
        />
        <TweakSection label="Pasoš (forma za pretragu)" />
        <TweakRadio
          label="Stil"
          value={t.passportStyle}
          options={PASSPORT_OPTIONS}
          onChange={v => setTweak('passportStyle', v)}
        />
      </TweaksPanel>
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

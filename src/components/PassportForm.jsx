import { useState } from 'react';
import Icon from './Icon';

const PassportForm = () => {
  const [tab, setTab] = useState('avion');
  const [dest, setDest] = useState('');
  const [date, setDate] = useState('');

  const fields = (
    <>
      <div className="passport-fields">
        <div className="passport-field">
          <div className="passport-field-icon"><Icon name="map-pin" size={18}/></div>
          <div className="passport-field-body">
            <div className="passport-field-label">Destinacija</div>
            <input value={dest} onChange={e => setDest(e.target.value)} placeholder="Gde želite da idete?" list="tc-destinations"/>
            <datalist id="tc-destinations">
              <option value="Santorini, Grčka"/>
              <option value="Antalija, Turska"/>
              <option value="Maldivi"/>
              <option value="Pariz, Francuska"/>
              <option value="Dubai, UAE"/>
              <option value="Bansko, Bugarska"/>
              <option value="Rim, Italija"/>
              <option value="Bali, Indonezija"/>
            </datalist>
          </div>
        </div>
        <div className="passport-field">
          <div className="passport-field-icon"><Icon name="calendar" size={18}/></div>
          <div className="passport-field-body">
            <div className="passport-field-label">Datum polaska</div>
            <input type="date" value={date} onChange={e => setDate(e.target.value)} />
          </div>
        </div>
      </div>
      <button className="passport-cta" onClick={() => alert('Tražim ponude za ' + (dest || 'sve destinacije') + '...')}>
        <Icon name="search" size={17}/> Pronađi ponudu
        <Icon name="arrow-right" size={17}/>
      </button>
    </>
  );

  const tabsRow = (
    <div className="passport-tabs">
      <button className={`passport-tab ${tab === 'avion' ? 'active' : ''}`} onClick={() => setTab('avion')}>
        <Icon name="plane" size={14}/> Avion
      </button>
      <button className={`passport-tab ${tab === 'bus' ? 'active' : ''}`} onClick={() => setTab('bus')}>
        <Icon name="bus" size={14}/> Autobus
      </button>
      <button className={`passport-tab ${tab === 'sopstveni' ? 'active' : ''}`} onClick={() => setTab('sopstveni')}>
        <Icon name="car" size={14}/> Sopstveni
      </button>
    </div>
  );

  return (
    <div className="passport v-open">
      <div className="passport-inner">
        <div className="passport-left">
          <div className="crown">Travel<br/>Corner</div>
          <div className="crest"><Icon name="compass" size={26} stroke={1.6}/></div>
          <div className="country">SRBIJA · PASSPORT</div>
          <div className="ornament">✦ ✦ ✦</div>
        </div>
        <div className="passport-right">
          {tabsRow}
          {fields}
        </div>
      </div>
    </div>
  );
};

export default PassportForm;

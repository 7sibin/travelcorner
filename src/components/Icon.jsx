const Icon = ({ name, size = 18, stroke = 2 }) => {
  const paths = {
    'map-pin': <><path d="M12 21s-7-7.5-7-12a7 7 0 1 1 14 0c0 4.5-7 12-7 12Z"/><circle cx="12" cy="9" r="2.5"/></>,
    'calendar': <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/></>,
    'plane': <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1L15 22v-1.5L13 19v-5.5L21 16Z"/>,
    'bus': <><path d="M4 16V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10M4 16v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3M16 16v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3M4 11h16"/><circle cx="8" cy="16" r="1.5"/><circle cx="16" cy="16" r="1.5"/></>,
    'car': <><path d="M5 17h14M5 17a2 2 0 0 1-2-2v-3l2-4h14l2 4v3a2 2 0 0 1-2 2M7 11h10"/><circle cx="7.5" cy="17.5" r="1.5"/><circle cx="16.5" cy="17.5" r="1.5"/></>,
    'search': <><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></>,
    'arrow-right': <path d="M5 12h14m-5-6 6 6-6 6"/>,
    'arrow-left': <path d="M19 12H5m6-6-6 6 6 6"/>,
    'heart': <path d="M12 21s-7-4.5-9.5-9.2C.9 8.6 2.6 5 6 5c2 0 3.5 1.2 4.4 2.5C11.3 6.2 12.8 5 14.8 5c3.4 0 5.1 3.6 3.5 6.8C17.2 16.5 12 21 12 21Z"/>,
    'heart-fill': <path d="M12 21s-7-4.5-9.5-9.2C.9 8.6 2.6 5 6 5c2 0 3.5 1.2 4.4 2.5C11.3 6.2 12.8 5 14.8 5c3.4 0 5.1 3.6 3.5 6.8C17.2 16.5 12 21 12 21Z" fill="currentColor"/>,
    'star': <path d="m12 3 2.6 5.3 5.9.9-4.3 4.1 1 5.7L12 16.4 6.8 19l1-5.7-4.3-4.1 5.9-.9L12 3Z"/>,
    'star-fill': <path d="m12 3 2.6 5.3 5.9.9-4.3 4.1 1 5.7L12 16.4 6.8 19l1-5.7-4.3-4.1 5.9-.9L12 3Z" fill="currentColor"/>,
    'moon': <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/>,
    'chevron-left': <path d="m15 6-6 6 6 6"/>,
    'chevron-right': <path d="m9 6 6 6-6 6"/>,
    'phone': <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.4 2.1L8 9.7a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2Z"/>,
    'instagram': <><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></>,
    'facebook': <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2Z"/>,
    'mail': <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    'shield': <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/>,
    'badge': <><circle cx="12" cy="8" r="5"/><path d="m9 12-2 9 5-3 5 3-2-9"/></>,
    'compass': <><circle cx="12" cy="12" r="9"/><path d="m16 8-2 6-6 2 2-6 6-2Z"/></>,
    'menu': <path d="M4 6h16M4 12h16M4 18h16"/>,
    'wifi': <path d="M5 12.6a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0M12 19.5h.01"/>,
    'check': <path d="m5 12 5 5 9-11"/>,
    'sparkle': <path d="M12 2v6m0 8v6M2 12h6m8 0h6M5 5l4 4m6 6 4 4M5 19l4-4m6-6 4-4"/>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
};

export default Icon;

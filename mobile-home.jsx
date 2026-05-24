// mobile-home.jsx — 日系電商改版：保健食品主軸，柔和色系，跑馬燈 + 動態 Hero

const M = {
  ink:       '#1a1814',
  mute:      '#6b6258',
  paper:     '#f6faf6',
  cream:     '#fdf6f0',
  sage:      '#e6f0e6',
  coral:     '#e8604a',
  green:     '#4a7c59',
  gold:      '#c9a13a',
  dark:      '#1c1814',
  // kept for backward-compat: mobile-pages + mobile-about-brands use these
  accent:     '#c97a48',
  goldAccent: '#c9a13a',
  serifZh:   "'Noto Serif TC',serif",
  serifEn:   "'Cormorant Garamond',serif",
  mono:      "'JetBrains Mono',monospace",
};

// ─── Sticky mobile top bar ───────────────────────────────────────
const MTopBar = ({ lang, setLang, dark, onMenu }) => (
  <div style={{
    position:'sticky', top:0, zIndex:50,
    padding:'11px 18px', display:'flex', alignItems:'center', justifyContent:'space-between',
    background: dark ? 'rgba(28,24,20,0.94)' : 'rgba(246,250,246,0.94)',
    backdropFilter:'blur(18px)',
    borderBottom:`1px solid ${dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)'}`,
    color: dark ? M.paper : M.ink,
  }}>
    <button onClick={onMenu} style={{
      width:36, height:36, border:'none', background:'transparent', padding:0,
      display:'flex', alignItems:'center', justifyContent:'center',
    }}>
      <svg width="20" height="14" viewBox="0 0 20 14">
        <rect y="0" width="20" height="1.6" fill={dark ? M.paper : M.ink}/>
        <rect y="6.2" width="14" height="1.6" fill={dark ? M.paper : M.ink}/>
        <rect y="12.4" width="20" height="1.6" fill={dark ? M.paper : M.ink}/>
      </svg>
    </button>
    <div style={{ display:'flex', alignItems:'center', gap:8 }}>
      <div style={{
        width:28, height:28, borderRadius:7,
        background:`linear-gradient(135deg, ${M.coral}, #c0442c)`,
        color:'#fff', fontFamily: M.serifZh, fontSize:16, fontWeight:700,
        display:'flex', alignItems:'center', justifyContent:'center',
      }}>敏</div>
      <div style={{ fontSize:13, fontWeight:700, letterSpacing:'0.05em' }}>MINLI</div>
    </div>
    <div style={{ display:'flex', alignItems:'center', gap:10 }}>
      <button style={{
        background:'none', border:'none', cursor:'pointer',
        display:'flex', alignItems:'center', gap:4, color: dark ? M.paper : M.ink, padding:'4px',
      }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
          <line x1="3" y1="6" x2="21" y2="6"/>
          <path d="M16 10a4 4 0 01-8 0"/>
        </svg>
        <span style={{ fontSize:11, fontWeight:500 }}>購物車</span>
      </button>
      <LanguageToggle lang={lang} setLang={setLang} dark={dark} />
    </div>
  </div>
);

// ─── Eyebrow label ───────────────────────────────────────────────
const MEyebrow = ({ children, color }) => (
  <div style={{
    fontFamily: M.mono, fontSize:10, letterSpacing:'0.22em',
    textTransform:'uppercase', color: color || M.coral,
  }}>— {children}</div>
);

// ─── Menu drawer ─────────────────────────────────────────────────
const MMenu = ({ open, onClose, lang, setLang }) => {
  if (!open) return null;
  return (
    <div style={{
      position:'absolute', inset:0, zIndex:100,
      background: M.ink, color: M.paper,
      display:'flex', flexDirection:'column',
    }}>
      <div style={{
        padding:'12px 18px', display:'flex', alignItems:'center', justifyContent:'space-between',
        borderBottom:'1px solid rgba(255,255,255,0.08)',
      }}>
        <button onClick={onClose} style={{
          width:36, height:36, border:'none', background:'transparent', color: M.paper, fontSize:22,
        }}>×</button>
        <LanguageToggle lang={lang} setLang={setLang} dark />
      </div>
      <nav style={{ padding:'32px 24px', display:'flex', flexDirection:'column', gap:20, flex:1 }}>
        {COPY[lang].nav.map((n, i) => (
          <a key={i} href="#" style={{
            fontFamily: M.serifZh, fontSize:32, color: M.paper, fontWeight:500,
            display:'flex', justifyContent:'space-between', alignItems:'baseline',
            paddingBottom:14, borderBottom:'1px solid rgba(255,255,255,0.08)',
          }}>
            {n}
            <span style={{ fontFamily: M.mono, fontSize:11, color: M.coral }}>0{i+1}</span>
          </a>
        ))}
        <div style={{ marginTop:'auto', display:'flex', flexDirection:'column', gap:10 }}>
          <div style={{ fontFamily: M.mono, fontSize:11, letterSpacing:'0.16em', color:'rgba(250,248,244,0.5)' }}>
            {lang==='zh' ? '聯絡敏利' : 'CONTACT MINLI'}
          </div>
          <div style={{ fontFamily: M.serifEn, fontStyle:'italic', fontSize:28 }}>0800–000–893</div>
          <div style={{ fontSize:13, color:'rgba(250,248,244,0.7)' }}>service@minli.com.tw</div>
        </div>
      </nav>
    </div>
  );
};

// ─── Mobile Home Page ────────────────────────────────────────────
const MobileHome = () => {
  const [lang, setLang] = React.useState('zh');
  const [menuOpen, setMenuOpen] = React.useState(false);
  const t = COPY[lang];

  const HEALTH_FEATURED = ['lt-nmn','lt-lutein','lt-antrodia','uhome-lemon','lt-calcium','minli-wave']
    .map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);

  const WELLNESS_BRANDS = BRANDS.filter(b => ['little-taiwan','uhome'].includes(b.id));
  const KITCHEN_BRANDS  = BRANDS.filter(b => ['minli','laozeyuan','junda'].includes(b.id));

  return (
    <div style={{
      position:'relative', height:'100%', overflow:'auto',
      background: M.paper, color: M.ink,
      fontFamily:"'Manrope','Noto Sans TC',sans-serif",
    }}>

      {/* MARQUEE BAR */}
      <MMobileMarquee lang={lang} />

      <MTopBar lang={lang} setLang={setLang} onMenu={() => setMenuOpen(true)} />
      <MMenu open={menuOpen} onClose={() => setMenuOpen(false)} lang={lang} setLang={setLang} />

      {/* HERO */}
      <section className="hero-animated-bg" style={{ padding:'44px 20px 52px', position:'relative', overflow:'hidden' }}>
        <MEyebrow>{lang==='zh' ? '台灣製造 · 品質保證' : 'Made in Taiwan · Certified'}</MEyebrow>
        <h1 style={{
          marginTop:16, fontFamily: M.serifZh, fontWeight:500,
          fontSize: lang==='zh' ? 52 : 48, lineHeight:1.05, color: M.ink,
          letterSpacing: lang==='zh' ? '0.01em' : '-0.02em',
        }}>
          {lang==='zh' ? (
            <>
              <span style={{display:'block'}}>台灣優質</span>
              <span style={{display:'block', color: M.coral}}>保健食品</span>
              <span style={{display:'block'}}>送給家人。</span>
            </>
          ) : (
            <>
              <span style={{display:'block'}}>Taiwan's</span>
              <span style={{display:'block', color: M.coral, fontStyle:'italic', fontFamily: M.serifEn}}>Best Wellness</span>
              <span style={{display:'block'}}>for your family.</span>
            </>
          )}
        </h1>
        <p style={{ marginTop:20, fontSize:14, lineHeight:1.7, color: M.mute }}>
          {lang==='zh'
            ? '保健食品、台灣農產品、養生飲品——守護你全家人的日常健康。'
            : 'Supplements, Taiwanese agri-food, wellness brews — for your whole family.'}
        </p>
        <div style={{ marginTop:28, display:'flex', flexDirection:'column', gap:10 }}>
          <button className="btn" style={{ background: M.coral, color:'#fff', justifyContent:'center', padding:'15px 20px' }}>
            {lang==='zh' ? '立即選購' : 'Shop Now'} <span className="btn-arrow">→</span>
          </button>
          <button className="btn" style={{ background:'transparent', color: M.ink, boxShadow:'inset 0 0 0 1px rgba(0,0,0,0.18)', justifyContent:'center', padding:'15px 20px' }}>
            {lang==='zh' ? '探索五大品牌' : 'Meet the brands'} →
          </button>
        </div>

        {/* video placeholder */}
        <div style={{ marginTop:32, borderRadius:18, overflow:'hidden', aspectRatio:'16/9', background: M.sage, position:'relative' }}>
          <div className="hero-animated-bg" style={{ position:'absolute', inset:0, opacity:0.7 }} />
          <div style={{
            position:'absolute', inset:0,
            display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', gap:10,
          }}>
            <div style={{
              width:60, height:60, borderRadius:'50%',
              background:'rgba(255,255,255,0.92)',
              display:'flex', alignItems:'center', justifyContent:'center',
              boxShadow:'0 6px 24px rgba(0,0,0,0.1)',
            }}>
              <span style={{ fontSize:22, marginLeft:4, color: M.coral }}>▶</span>
            </div>
            <div style={{ fontFamily: M.mono, fontSize:10, letterSpacing:'0.14em', color:'rgba(30,24,20,0.5)', textTransform:'uppercase' }}>
              {lang==='zh' ? '品牌故事影片' : 'Brand Story'}
            </div>
          </div>
        </div>

        {/* metrics */}
        <div style={{ marginTop:32, display:'grid', gridTemplateColumns:'1fr 1fr', gap:20, borderTop:'1px solid rgba(0,0,0,0.08)', paddingTop:24 }}>
          {[
            { k:'30+', v:{zh:'年產業經驗',en:'years in food'} },
            { k:'5',   v:{zh:'自有品牌',en:'brand families'} },
            { k:'200+',v:{zh:'熱銷品項',en:'SKUs shipped'} },
            { k:'12',  v:{zh:'出口國家',en:'export markets'} },
          ].map((m, i) => (
            <div key={i}>
              <div style={{ fontFamily: M.serifEn, fontSize:44, fontWeight:500, color: M.ink, lineHeight:1 }}>{m.k}</div>
              <div style={{ marginTop:6, fontSize:11, color: M.mute, letterSpacing:'0.03em' }}>{m.v[lang]}</div>
            </div>
          ))}
        </div>
      </section>

      {/* BRAND CATEGORIES */}
      <section style={{ padding:'52px 20px', background:'#fff' }}>
        <MEyebrow>{lang==='zh' ? '五大品牌 · 各司其職' : 'Five brands, each with a purpose'}</MEyebrow>
        <h2 style={{ marginTop:14, fontFamily: M.serifZh, fontWeight:500,
          fontSize: lang==='zh'?32:36, lineHeight:1.1, color: M.ink, marginBottom:28 }}>
          {lang==='zh' ? '從保健到廚房，我們照顧你全家。' : 'Wellness to kitchen — we care for your whole family.'}
        </h2>

        {/* Tier 1: wellness brands */}
        <div style={{ display:'flex', flexDirection:'column', gap:16, marginBottom:16 }}>
          {WELLNESS_BRANDS.map(b => (
            <MBrandCardWellness key={b.id} b={b} lang={lang} />
          ))}
        </div>

        {/* Tier 2: kitchen brands — 2+1 grid */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12, marginBottom:12 }}>
          {KITCHEN_BRANDS.slice(0,2).map(b => (
            <MBrandCardKitchen key={b.id} b={b} lang={lang} />
          ))}
        </div>
        {KITCHEN_BRANDS.slice(2).map(b => (
          <MBrandCardKitchen key={b.id} b={b} lang={lang} fullWidth />
        ))}
      </section>

      {/* FEATURED PRODUCTS — health first */}
      <section style={{ padding:'52px 20px', background: M.sage }}>
        <MEyebrow color={M.green}>{lang==='zh' ? '本期精選' : 'This season'}</MEyebrow>
        <h2 style={{ marginTop:14, fontFamily: M.serifZh, fontSize:32, fontWeight:500, lineHeight:1.1, color: M.ink, marginBottom:24 }}>
          {lang==='zh' ? '健康好物，每天一起。' : 'For your health, every day.'}
        </h2>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
          {HEALTH_FEATURED.map(p => {
            const brand = BRANDS.find(b => b.id === p.brand);
            const isBlade = ['廚房刀剪','高階刀具'].includes(p.cat.zh);
            return (
              <div key={p.id} style={{ background:'#fff', borderRadius:14, padding:14 }}>
                <a href={`#product-${p.id}`} className="product-img-link" style={{ borderRadius:8 }} data-product-id={p.id} data-route="product">
                  {p.badge && (
                    <div style={{
                      position:'absolute', top:8, left:8, zIndex:3,
                      background: isBlade ? M.gold : M.coral,
                      color:'#fff', padding:'3px 7px', borderRadius:3,
                      fontSize:8, letterSpacing:'0.14em', fontFamily: M.mono,
                    }}>{p.badge[lang]}</div>
                  )}
                  <ProductPH label={p.zh.slice(0,8)} w="100%" h={140}
                    bg={isBlade ? '#1c1814' : '#eef6ee'}
                    fg={isBlade ? '#9a8a74' : '#4a7c59'}
                    style={{ borderRadius:8 }} />
                  <div className="product-img-overlay">
                    <span className="product-img-overlay-badge" style={{ fontSize:9, padding:'5px 12px' }}>
                      {lang==='zh' ? '選購 →' : 'Shop →'}
                    </span>
                  </div>
                </a>
                <div style={{ marginTop:10, fontFamily: M.mono, fontSize:9, color: brand?.accent||M.coral, letterSpacing:'0.12em' }}>
                  {p.cat[lang].toUpperCase()}
                </div>
                <h3 style={{ marginTop:4, fontFamily: M.serifZh, fontSize:13, fontWeight:600, color: M.ink, lineHeight:1.3, minHeight:36 }}>{p[lang]}</h3>
                <div style={{ marginTop:8, display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                  <div style={{ fontFamily: M.serifEn, fontStyle:'italic', fontSize:14, color: M.ink }}>{p.price}</div>
                  <button data-product-id={p.id} style={{
                    background: M.coral, color:'#fff', border:'none', borderRadius:999,
                    padding:'5px 10px', fontSize:10, fontFamily: M.mono, letterSpacing:'0.08em', cursor:'pointer',
                  }}>
                    {lang==='zh' ? '查看 →' : 'View →'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <button className="btn" style={{ marginTop:20, background:'transparent', color: M.ink, boxShadow:'inset 0 0 0 1px rgba(0,0,0,0.18)', justifyContent:'center', width:'100%', padding:'14px 20px' }}>
          {lang==='zh' ? '查看全部 26 件商品' : 'View all 26 products'} →
        </button>
      </section>

      {/* TAIWAN ORIGIN */}
      <section style={{ padding:'52px 20px', background: M.cream }}>
        <MEyebrow color={M.green}>{lang==='zh' ? '台灣驕傲' : 'Proudly Taiwanese'}</MEyebrow>
        <h2 style={{ marginTop:14, fontFamily: M.serifZh, fontWeight:500,
          fontSize:30, lineHeight:1.1, color: M.ink, marginBottom:28 }}>
          {lang==='zh' ? '來自台灣，每一份都值得信任。' : 'From Taiwan — every product worth trusting.'}
        </h2>
        <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
          {[
            { icon:'🌿', title:{zh:'台灣在地食材',en:'Taiwan-Sourced'}, desc:{zh:'牛樟芝、鴕鳥精、葉黃素游離型——選用台灣在地嚴選原料，來源透明。',en:'Antrodia, ostrich essence, free-form lutein — transparent Taiwan sourcing.'} },
            { icon:'🏅', title:{zh:'通過多項認證',en:'Multi-Certified'}, desc:{zh:'ISO 22000、HACCP 雙認證；SGS 每批次第三方檢驗。有憑有據。',en:'ISO 22000 + HACCP + SGS third-party batch tested. Proof, not promises.'} },
            { icon:'🏭', title:{zh:'30年製造經驗',en:'30 Years Experience'}, desc:{zh:'從刀具工廠起家，三十年橫跨器具、保健、養生。一個家族的製造承諾。',en:'From knives to wellness — thirty years of family commitment to quality.'} },
          ].map((item, i) => (
            <div key={i} style={{ background:'#fff', borderRadius:16, padding:'24px 22px', boxShadow:'0 2px 12px rgba(0,0,0,0.04)' }}>
              <div style={{ fontSize:32, marginBottom:12 }}>{item.icon}</div>
              <h3 style={{ fontFamily: M.serifZh, fontSize:20, fontWeight:500, color: M.ink, marginBottom:10 }}>{item.title[lang]}</h3>
              <p style={{ fontSize:13, lineHeight:1.7, color: M.mute }}>{item.desc[lang]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TRUST / CERTS */}
      <section style={{ padding:'52px 20px', background: M.dark, color: M.paper }}>
        <MEyebrow color="#e8b48a">{t.trustEyebrow}</MEyebrow>
        <h2 style={{ marginTop:16, fontFamily: M.serifZh, fontWeight:500, fontSize:28, lineHeight:1.15 }}>{t.trustTitle}</h2>
        <p style={{ marginTop:16, fontSize:13, lineHeight:1.7, color:'rgba(250,248,244,0.65)' }}>{t.trustLead}</p>

        <div style={{ marginTop:24, display:'grid', gridTemplateColumns:'1fr 1fr', gap:10 }}>
          {CERTS.map((c, i) => (
            <div key={i} style={{ padding:16, borderRadius:12,
              background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontFamily: M.serifEn, fontSize:40, fontWeight:500, color:'#e8b48a', lineHeight:1 }}>{c.abbr}</div>
              <div style={{ marginTop:8, fontSize:13, fontWeight:500 }}>{c.full}</div>
              <div style={{ marginTop:4, fontSize:11, color:'rgba(250,248,244,0.5)', lineHeight:1.5 }}>{c.detail[lang]}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop:24, padding:16, borderRadius:8,
          background:'rgba(232,180,138,0.07)', borderLeft:'2px solid #e8b48a' }}>
          <div style={{ fontFamily: M.mono, fontSize:10, letterSpacing:'0.18em', color:'#e8b48a', marginBottom:6 }}>
            ! {lang==='zh' ? '消費者警示' : 'CONSUMER NOTICE'}
          </div>
          <p style={{ fontSize:12, lineHeight:1.65, color:'rgba(250,248,244,0.78)' }}>{t.counterfeit}</p>
        </div>
      </section>

      {/* CONTACT */}
      <section style={{ padding:'52px 20px', background: M.paper }}>
        <MEyebrow>{t.contactEyebrow}</MEyebrow>
        <h2 style={{ marginTop:16, fontFamily: M.serifZh, fontWeight:500,
          fontSize:28, lineHeight:1.1, color: M.ink, marginBottom:16 }}>{t.contactTitle}</h2>
        <p style={{ fontSize:13, lineHeight:1.7, color: M.mute, marginBottom:22 }}>{t.contactLead}</p>

        <div style={{ padding:20, background:'#fff', borderRadius:14, marginBottom:22, boxShadow:'0 2px 12px rgba(0,0,0,0.04)' }}>
          <div style={{ fontFamily: M.mono, fontSize:10, color: M.coral, letterSpacing:'0.16em' }}>{t.hotline.toUpperCase()}</div>
          <div style={{ marginTop:8, fontFamily: M.serifEn, fontStyle:'italic', fontSize:34, fontWeight:500, color: M.ink }}>{t.hotlineNo}</div>
          <div style={{ marginTop:12, paddingTop:12, borderTop:'1px solid rgba(0,0,0,0.07)', fontSize:12, color: M.mute, lineHeight:1.7 }}>
            {lang==='zh' ? '新北市．週一–五  09:00 – 18:00' : 'New Taipei · Mon–Fri  09–18'}<br/>service@minli.com.tw
          </div>
        </div>

        <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
          <MField label={lang==='zh'?'姓名':'Name'} ph={lang==='zh'?'您的姓名':'Your name'} />
          <MField label={lang==='zh'?'信箱':'Email'} ph="you@example.com" />
          <MField label={lang==='zh'?'訊息':'Message'} ph={lang==='zh'?'簡述您的詢問':'Drop a line'} rows={3} />
        </div>
        <button className="btn" style={{ marginTop:16, background: M.coral, color:'#fff', justifyContent:'center', width:'100%', padding:'15px 20px' }}>
          {lang==='zh' ? '送出訊息' : 'Send message'} →
        </button>
      </section>

      {/* FOOTER */}
      <footer style={{ padding:'28px 20px 52px', background:'#fff', borderTop:'1px solid rgba(0,0,0,0.05)' }}>
        <div style={{ fontFamily: M.serifZh, fontSize:22, fontWeight:500, color: M.ink }}>{t.company}</div>
        <div style={{ fontFamily: M.serifEn, fontStyle:'italic', fontSize:13, color: M.mute, marginTop:4 }}>{t.companyEn}</div>
        <p style={{ marginTop:12, fontSize:10, color: M.mute, lineHeight:1.7 }}>{t.foodReg}</p>
        <div style={{ marginTop:20, paddingTop:16, borderTop:'1px solid rgba(0,0,0,0.05)', fontSize:10, color: M.mute }}>
          {t.footerNote}
        </div>
      </footer>
    </div>
  );
};

// ─── Marquee bar (mobile) ─────────────────────────────────────────
const MMobileMarquee = ({ lang }) => {
  const items = lang==='zh'
    ? 'NMN PRO 暢銷中 · 台灣製造 · 品質認證 · 免運費滿額優惠 · 葉黃素熱賣 · 牛樟芝現貨 · 健康生活每一天 · '
    : 'NMN PRO Bestseller · Made in Taiwan · ISO Certified · Free shipping NT$2000+ · Taiwan Lutein · Wellness Every Day · ';
  return (
    <div style={{
      background: M.coral, color:'#fff', height:34, overflow:'hidden',
      display:'flex', alignItems:'center',
      fontFamily: M.mono, fontSize:11, letterSpacing:'0.1em',
    }}>
      <div className="marquee-track">
        <span>{items}{items}</span>
      </div>
    </div>
  );
};

// ─── Brand card: wellness (large, horizontal) ─────────────────────
const MBrandCardWellness = ({ b, lang }) => {
  const hasDark = !!b.fg;
  const textColor = hasDark ? b.fg : M.ink;
  const mutedColor = hasDark ? 'rgba(255,255,255,0.65)' : M.mute;
  return (
    <div style={{ background: b.bg, borderRadius:18, padding:'24px 22px' }}>
      <span style={{
        display:'inline-block', marginBottom:12,
        background: b.accent, color:'#fff', padding:'4px 12px', borderRadius:999,
        fontSize:10, letterSpacing:'0.14em', fontFamily: M.mono,
      }}>{b.tag[lang]}</span>
      <h3 style={{ fontFamily: M.serifZh, fontSize:36, fontWeight:500, color:textColor, lineHeight:1.1, marginBottom:10 }}>
        {lang==='zh' ? b.name : b.nameEn}
      </h3>
      <p style={{ fontSize:13, lineHeight:1.65, color:mutedColor, marginBottom:18 }}>{b.desc[lang]}</p>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
        <span style={{ fontSize:11, color: hasDark?'rgba(255,255,255,0.4)':M.mute, fontFamily: M.mono }}>
          {b.productCount} {lang==='zh'?'款商品':'products'}
        </span>
        <button className="btn" style={{ background: b.accent, color:'#fff', padding:'8px 16px', fontSize:12 }}>
          {lang==='zh' ? `走進 ${b.name}` : `Visit ${b.nameEn}`} <span className="btn-arrow">→</span>
        </button>
      </div>
    </div>
  );
};

// ─── Brand card: kitchen (compact, square) ────────────────────────
const MBrandCardKitchen = ({ b, lang, fullWidth }) => {
  const hasDark = !!b.fg;
  const textColor = hasDark ? b.fg : M.ink;
  const mutedColor = hasDark ? 'rgba(255,255,255,0.6)' : M.mute;
  return (
    <div style={{ background: b.bg, borderRadius:16, padding:'20px 18px', gridColumn: fullWidth ? '1 / -1' : undefined }}>
      <span style={{
        display:'inline-block', marginBottom:10,
        background: b.accent, color:'#fff', padding:'3px 10px', borderRadius:999,
        fontSize:9, letterSpacing:'0.14em', fontFamily: M.mono,
      }}>{b.tag[lang]}</span>
      <h3 style={{ fontFamily: M.serifZh, fontSize:24, fontWeight:500, color:textColor, lineHeight:1.1, marginBottom:8 }}>
        {lang==='zh' ? b.name : b.nameEn}
      </h3>
      <p style={{ fontSize:11, lineHeight:1.6, color:mutedColor, marginBottom:16, minHeight:44 }}>{b.desc[lang]}</p>
      <button className="btn" style={{ background: b.accent, color:'#fff', padding:'7px 14px', fontSize:11, width:'100%', justifyContent:'center' }}>
        {lang==='zh' ? `走進 ${b.name}` : `Visit ${b.nameEn}`} <span className="btn-arrow">→</span>
      </button>
    </div>
  );
};

const MField = ({ label, ph, rows }) => (
  <label style={{ display:'block' }}>
    <div style={{ fontSize:10, color: M.mute, letterSpacing:'0.1em', marginBottom:6, fontFamily: M.mono }}>{label.toUpperCase()}</div>
    {rows
      ? <textarea rows={rows} placeholder={ph} style={mFieldStyle} />
      : <input placeholder={ph} style={mFieldStyle} />}
  </label>
);
const mFieldStyle = {
  width:'100%', padding:'12px 14px',
  fontFamily:"'Manrope','Noto Sans TC',sans-serif", fontSize:14,
  background: M.paper, border:'1px solid rgba(0,0,0,0.09)',
  borderRadius:10, color: M.ink, outline:'none',
  boxSizing:'border-box',
};

Object.assign(window, { MobileHome, MTopBar, MEyebrow, MMenu, MField, M_TOKENS: M });

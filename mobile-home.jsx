// mobile-home.jsx — V1 home page, mobile layout (single column, touch-friendly).
// Shares tokens & data with desktop V1.

const M = {
  ink: '#1a1612', mute: '#6b6258', paper: '#faf8f4', cream: '#f3ede0', accent: '#c97a48',
  dark: '#1c1814', goldAccent: '#c9a13a',
  serifZh: "'Noto Serif TC',serif",
  serifEn: "'Cormorant Garamond',serif",
  mono: "'JetBrains Mono',monospace",
};

// ─── Sticky mobile top bar (used on every page) ──────────────────
const MTopBar = ({ lang, setLang, dark, onMenu }) => (
  <div style={{
    position:'sticky', top:0, zIndex:50,
    padding:'12px 18px', display:'flex', alignItems:'center', justifyContent:'space-between',
    background: dark ? 'rgba(28,24,20,0.92)' : 'rgba(250,248,244,0.92)',
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
        background:`linear-gradient(135deg, ${M.accent}, #a85a30)`,
        color:'#fff', fontFamily: M.serifZh, fontSize:16, fontWeight:700,
        display:'flex', alignItems:'center', justifyContent:'center',
      }}>敏</div>
      <div style={{ fontSize:13, fontWeight:600, letterSpacing:'0.06em' }}>MINLI</div>
    </div>
    <LanguageToggle lang={lang} setLang={setLang} dark={dark} />
  </div>
);

// ─── A small chip used inline ────────────────────────────────────
const MEyebrow = ({ children, color, dark }) => (
  <div style={{
    fontFamily: M.mono, fontSize:10, letterSpacing:'0.22em',
    textTransform:'uppercase',
    color: color || (dark ? M.goldAccent : M.accent),
  }}>— {children}</div>
);

// ─── Mobile menu drawer (overlay) ────────────────────────────────
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
        borderBottom:`1px solid rgba(255,255,255,0.08)`,
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
            paddingBottom:14, borderBottom:`1px solid rgba(255,255,255,0.08)`,
          }}>
            {n}
            <span style={{ fontFamily: M.mono, fontSize:11, color: M.goldAccent }}>0{i+1}</span>
          </a>
        ))}
        <div style={{ marginTop:'auto', display:'flex', flexDirection:'column', gap:12 }}>
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

// ─── The mobile home page ────────────────────────────────────────
const MobileHome = () => {
  const [lang, setLang] = React.useState('zh');
  const [menuOpen, setMenuOpen] = React.useState(false);
  const t = COPY[lang];

  return (
    <div style={{
      position:'relative', height:'100%', overflow:'auto',
      background: M.paper, color: M.ink,
      fontFamily:"'Manrope','Noto Sans TC',sans-serif",
    }}>
      <MTopBar lang={lang} setLang={setLang} onMenu={() => setMenuOpen(true)} />
      <MMenu open={menuOpen} onClose={() => setMenuOpen(false)} lang={lang} setLang={setLang} />

      {/* HERO */}
      <section style={{ padding:'40px 22px 56px' }}>
        <MEyebrow>{t.heroEyebrow}</MEyebrow>
        <h1 style={{
          marginTop:18, fontFamily: M.serifZh, fontWeight: 500,
          fontSize: lang==='zh' ? 48 : 52, lineHeight: 1.05, color: M.ink,
          letterSpacing: lang==='zh' ? '0.01em' : '-0.02em',
        }}>
          {t.heroTitle.map((line, i) => (
            <span key={i} style={{ display:'block',
              fontFamily: (lang==='en' && i===1) ? M.serifEn : M.serifZh,
              fontStyle: (lang==='en' && i===1) ? 'italic' : 'normal',
            }}>{line}</span>
          ))}
        </h1>
        <p style={{ marginTop:24, fontSize:15, lineHeight:1.65, color: M.mute }}>{t.heroLead}</p>
        <div style={{ marginTop:32, display:'flex', flexDirection:'column', gap:10 }}>
          <button className="btn" style={{ background: M.ink, color: M.paper, justifyContent:'center', padding:'15px 20px' }}>
            {t.heroCta} <span className="btn-arrow">→</span>
          </button>
          <button className="btn" style={{ background:'transparent', color: M.ink, boxShadow:'inset 0 0 0 1px rgba(0,0,0,0.18)', justifyContent:'center', padding:'15px 20px' }}>
            ▶  {t.heroSecondary}
          </button>
        </div>

        <div style={{ marginTop:40, display:'grid', gridTemplateColumns:'1fr', gap:12 }}>
          <ImagePH label={"PRODUCT HERO\n敏利旗艦商品"} style={{ height: 280, borderRadius:14 }} />
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
            <ImagePH label={"FACTORY"} style={{ height: 160, borderRadius:14, '--ph-bg':'#e6dccb' }} />
            <ImagePH label={"FARMER"} style={{ height: 160, borderRadius:14, '--ph-bg':'#d8cdb8' }} />
          </div>
        </div>

        {/* metric row */}
        <div style={{ marginTop:36, display:'grid', gridTemplateColumns:'1fr 1fr', gap:24, borderTop:`1px solid rgba(0,0,0,0.1)`, paddingTop:24 }}>
          {[
            { k:'30+', v:{zh:'年產業經驗',en:'years in food'} },
            { k:'5',   v:{zh:'自有品牌',en:'brand families'} },
            { k:'27',  v:{zh:'熱銷品項',en:'SKUs shipped'} },
            { k:'12',  v:{zh:'出口國家',en:'export markets'} },
          ].map((m, i) => (
            <div key={i}>
              <div style={{ fontFamily: M.serifEn, fontSize:44, fontWeight:500, color: M.ink, lineHeight:1 }}>{m.k}</div>
              <div style={{ marginTop:6, fontSize:11, color: M.mute, letterSpacing:'0.03em' }}>{m.v[lang]}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ padding:'56px 22px', background: M.cream }}>
        <MEyebrow>{t.aboutEyebrow}</MEyebrow>
        <h2 style={{ marginTop:18, fontFamily: M.serifZh, fontWeight:500,
          fontSize: lang==='zh' ? 36 : 42, lineHeight:1.1, color: M.ink }}>{t.aboutTitle}</h2>
        <p style={{ marginTop:20, fontSize:15, lineHeight:1.7, color: M.mute }}>{t.aboutLead}</p>
        <div style={{ marginTop:36, display:'flex', flexDirection:'column', gap:24 }}>
          {t.valuePoints.map((vp, i) => (
            <div key={i} style={{ borderTop:`1px solid rgba(0,0,0,0.12)`, paddingTop:18 }}>
              <div style={{ fontFamily: M.mono, fontSize:11, color: M.accent, marginBottom:10 }}>{vp.num}</div>
              <h3 style={{ fontFamily: M.serifZh, fontSize:22, fontWeight:600, color: M.ink, marginBottom:8 }}>{vp.t}</h3>
              <p style={{ fontSize:14, lineHeight:1.65, color: M.mute }}>{vp.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HERITAGE — dark, full-bleed */}
      <section style={{ padding:'56px 22px', background: M.dark, color: M.paper, position:'relative', overflow:'hidden' }}>
        <MEyebrow color={M.goldAccent}>{lang==='zh' ? '專利傳承' : 'Heritage'}</MEyebrow>
        <h2 style={{ marginTop:18, fontFamily: M.serifZh, fontWeight:500,
          fontSize: lang==='zh' ? 36 : 40, lineHeight:1.1 }}>
          {lang==='zh' ? <>一把刀，<br/>來自一座島嶼的記憶。</> : <>A blade,<br/>forged from an island\u2019s memory.</>}
        </h2>
        <p style={{ marginTop:20, fontSize:14, lineHeight:1.75, color:'rgba(246,239,227,0.7)' }}>
          {lang==='zh'
            ? '金門鋼刀的傳奇源自冷戰時期數十萬發砲彈。匠人撿回鋼材，一塊鋼能打三十把刀。敏利與老澤源延續這項台灣獨有的工藝。'
            : 'Jinmen-steel knives began with shells from the Cold War. Smiths gathered the steel — thirty blades from each shell. Minli and Lao Ze Yuan continue this craft today.'}
        </p>
        <div style={{ marginTop:28, position:'relative' }}>
          <div style={{
            position:'absolute', top:14, right:14, zIndex:2,
            background: M.goldAccent, color: M.dark, padding:'5px 9px',
            fontFamily: M.mono, fontSize:9, letterSpacing:'0.18em',
          }}>{lang==='zh' ? '專利 · I-XXXX' : 'PATENT · I-XXXX'}</div>
          <ImagePH label={"JINMEN STEEL\n金門鋼刀 · 主廚刀"}
            style={{ height: 280, borderRadius:6, '--ph-bg':'#241d17', '--ph-fg':'#8a7a64' }} />
        </div>
        <div style={{ marginTop:24, display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:6 }}>
          {['冷凍','主廚','砍骨'].map((k, i) => (
            <div key={i} style={{
              padding:'10px 6px', background:'rgba(246,239,227,0.04)',
              fontFamily: M.mono, fontSize:10, color:'rgba(246,239,227,0.7)',
              letterSpacing:'0.08em', textAlign:'center',
            }}>0{i+1} · {k}</div>
          ))}
        </div>
        <button className="btn" style={{ marginTop:28, background: M.goldAccent, color: M.dark, justifyContent:'center', padding:'14px 20px', width:'100%' }}>
          {lang==='zh' ? '走進老澤源' : 'Visit Lao Ze Yuan'} <span className="btn-arrow">→</span>
        </button>
      </section>

      {/* BRAND SHOWCASE — stacked */}
      <section style={{ padding:'56px 22px' }}>
        <MEyebrow>{t.brandsEyebrow}</MEyebrow>
        <h2 style={{ marginTop:18, fontFamily: M.serifZh, fontWeight:500,
          fontSize: lang==='zh' ? 32 : 38, lineHeight:1.1, color: M.ink, marginBottom: 32 }}>{t.brandsTitle}</h2>

        <div style={{ display:'flex', flexDirection:'column', gap:18 }}>
          {BRANDS.map((b, idx) => {
            const isDark = !!b.fg;
            return (
              <article key={b.id} style={{
                background: b.bg, color: isDark ? b.fg : M.ink,
                borderRadius:16, padding:24, position:'relative', overflow:'hidden',
              }}>
                <div style={{
                  position:'absolute', top:-12, right:14,
                  fontFamily: M.serifEn, fontStyle:'italic', fontSize:110, fontWeight:500,
                  color: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)', lineHeight:1, pointerEvents:'none',
                }}>0{idx+1}</div>

                <div style={{ fontFamily: M.mono, fontSize:10, color: b.accent, letterSpacing:'0.16em', marginBottom:12 }}>
                  0{idx+1} / {b.tag[lang].toUpperCase()}
                </div>
                <h3 style={{
                  fontFamily: M.serifZh, fontSize: lang==='zh' ? 44 : 40, fontWeight: 500, lineHeight:1,
                  marginBottom: 16, color: isDark ? b.fg : M.ink,
                }}>{lang==='zh' ? b.name : b.nameEn}</h3>
                <p style={{ fontSize:14, lineHeight:1.7,
                  color: isDark ? 'rgba(255,255,255,0.75)' : M.mute, marginBottom:18 }}>{b.desc[lang]}</p>

                <div style={{ display:'flex', flexWrap:'wrap', gap:6, marginBottom:20 }}>
                  {(lang==='zh' ? b.products : b.productsEn).slice(0,3).map((p, i) => (
                    <span key={i} style={{
                      padding:'6px 10px', borderRadius:999, fontSize:11,
                      background: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)',
                      color: isDark ? 'rgba(255,255,255,0.85)' : M.ink,
                    }}>{p}</span>
                  ))}
                </div>

                <button className="btn" style={{
                  background: b.accent, color:'#fff', justifyContent:'center', width:'100%', padding:'12px 18px', fontSize:13,
                }}>
                  {lang==='zh' ? `走進 ${b.name}` : `Visit ${b.nameEn}`} <span className="btn-arrow">→</span>
                </button>
              </article>
            );
          })}
        </div>
      </section>

      {/* FEATURED PRODUCTS — 2 col grid */}
      <section style={{ padding:'56px 22px', background: M.cream }}>
        <div style={{ marginBottom:28 }}>
          <MEyebrow>{t.productsEyebrow}</MEyebrow>
          <h2 style={{ marginTop:14, fontFamily: M.serifZh, fontSize:34, fontWeight:500, lineHeight:1.1, color: M.ink }}>{t.productsTitle}</h2>
          <p style={{ marginTop:14, fontSize:14, lineHeight:1.7, color: M.mute }}>{t.productsLead}</p>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
          {FEATURED_PRODUCTS.map((p, i) => (
            <div key={p.id} style={{ background: M.paper, borderRadius:12, padding:14, position:'relative' }}>
              {p.badge && (
                <div style={{
                  position:'absolute', top:22, left:22, zIndex:2,
                  background: M.accent, color:'#fff', padding:'3px 7px', borderRadius:3,
                  fontSize:8, letterSpacing:'0.14em', fontFamily: M.mono,
                }}>{p.badge[lang]}</div>
              )}
              <ProductPH label={p.zh.slice(0,8)} w="100%" h={140} bg="#e6dccb" fg="#7a6c58" style={{ borderRadius:8 }} />
              <div style={{ marginTop:10, fontFamily: M.mono, fontSize:9, color: M.accent, letterSpacing:'0.14em' }}>{p.tag[lang].toUpperCase()}</div>
              <h3 style={{ marginTop:4, fontFamily: M.serifZh, fontSize:13, fontWeight:600, color: M.ink, lineHeight:1.3, minHeight:34 }}>{p[lang]}</h3>
              <div style={{ marginTop:8, fontFamily: M.serifEn, fontStyle:'italic', fontSize:14, color: M.ink }}>{p.price}</div>
            </div>
          ))}
        </div>
        <button className="btn" style={{ marginTop:24, background:'transparent', color: M.ink, boxShadow:'inset 0 0 0 1px rgba(0,0,0,0.18)', justifyContent:'center', width:'100%', padding:'14px 20px' }}>
          {lang==='zh' ? '查看全部 26 件商品' : `View all ${PRODUCTS.length} products`} →
        </button>
      </section>

      {/* TRUST */}
      <section style={{ padding:'56px 22px', background: M.dark, color: M.paper }}>
        <MEyebrow color="#e8b48a">{t.trustEyebrow}</MEyebrow>
        <h2 style={{ marginTop:18, fontFamily: M.serifZh, fontWeight:500,
          fontSize:32, lineHeight:1.15 }}>{t.trustTitle}</h2>
        <p style={{ marginTop:18, fontSize:14, lineHeight:1.7, color:'rgba(250,248,244,0.7)' }}>{t.trustLead}</p>

        <div style={{ marginTop:28, display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
          {CERTS.map((c, i) => (
            <div key={i} style={{ padding:18, borderRadius:10,
              background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontFamily: M.serifEn, fontSize:42, fontWeight:500, color:'#e8b48a', lineHeight:1 }}>{c.abbr}</div>
              <div style={{ marginTop:8, fontSize:14, fontWeight:500 }}>{c.full}</div>
              <div style={{ marginTop:4, fontSize:11, color:'rgba(250,248,244,0.55)', lineHeight:1.5 }}>{c.detail[lang]}</div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop:28, padding:18, borderRadius:8,
          background:'rgba(232,180,138,0.08)', borderLeft:'2px solid #e8b48a',
        }}>
          <div style={{ fontFamily: M.mono, fontSize:10, letterSpacing:'0.18em', color:'#e8b48a', marginBottom:8 }}>
            ! {lang==='zh' ? '消費者警示' : 'CONSUMER NOTICE'}
          </div>
          <p style={{ fontSize:12, lineHeight:1.65, color:'rgba(250,248,244,0.82)' }}>{t.counterfeit}</p>
        </div>
      </section>

      {/* CONTACT */}
      <section style={{ padding:'56px 22px', background: M.cream }}>
        <MEyebrow>{t.contactEyebrow}</MEyebrow>
        <h2 style={{ marginTop:18, fontFamily: M.serifZh, fontWeight:500,
          fontSize:32, lineHeight:1.1, color: M.ink, marginBottom: 18 }}>{t.contactTitle}</h2>
        <p style={{ fontSize:14, lineHeight:1.7, color: M.mute, marginBottom:24 }}>{t.contactLead}</p>

        <div style={{ padding:22, background: M.paper, borderRadius:14, marginBottom:24 }}>
          <div style={{ fontFamily: M.mono, fontSize:10, color: M.accent, letterSpacing:'0.16em' }}>{t.hotline.toUpperCase()}</div>
          <div style={{ marginTop:8, fontFamily: M.serifEn, fontStyle:'italic', fontSize:36, fontWeight:500, color: M.ink }}>{t.hotlineNo}</div>
          <div style={{ marginTop:14, paddingTop:14, borderTop:`1px solid rgba(0,0,0,0.08)`, fontSize:12, color: M.mute, lineHeight:1.7 }}>
            {lang==='zh' ? '新北市．週一–五  09:00 – 18:00' : 'New Taipei · Mon–Fri  09–18'}<br/>service@minli.com.tw
          </div>
        </div>

        <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
          <MField label={lang==='zh'?'姓名':'Name'} ph={lang==='zh'?'您的姓名':'Your name'} />
          <MField label={lang==='zh'?'信箱':'Email'} ph="you@example.com" />
          <MField label={lang==='zh'?'訊息':'Message'} ph={lang==='zh'?'簡述您的詢問':'Drop a line'} rows={3} />
        </div>
        <button className="btn" style={{ marginTop:18, background: M.ink, color: M.paper, justifyContent:'center', width:'100%', padding:'15px 20px' }}>
          {lang==='zh' ? '送出訊息' : 'Send message'} →
        </button>
      </section>

      {/* FOOTER */}
      <footer style={{ padding:'32px 22px 56px', background: M.paper, borderTop:`1px solid rgba(0,0,0,0.06)` }}>
        <div style={{ fontFamily: M.serifZh, fontSize:24, fontWeight:500, color: M.ink }}>{t.company}</div>
        <div style={{ fontFamily: M.serifEn, fontStyle:'italic', fontSize:14, color: M.mute, marginTop:4 }}>{t.companyEn}</div>
        <p style={{ marginTop:14, fontSize:11, color: M.mute, lineHeight:1.7 }}>{t.foodReg}</p>
        <div style={{ marginTop:24, paddingTop:18, borderTop:`1px solid rgba(0,0,0,0.06)`, fontSize:10, color: M.mute }}>
          {t.footerNote}
        </div>
      </footer>
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
  width:'100%', padding:'12px 14px', fontFamily:"'Manrope','Noto Sans TC',sans-serif", fontSize:14,
  background: M.paper, border:`1px solid rgba(0,0,0,0.1)`, borderRadius:10, color: M.ink, outline:'none',
  boxSizing:'border-box',
};

Object.assign(window, { MobileHome, MTopBar, MEyebrow, MMenu, MField, M_TOKENS: M });

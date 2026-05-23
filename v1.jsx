// v1.jsx — 靜雅 Quiet Modern. Apple-inspired, warm-neutral palette.
// Sticky-scroll-style brand showcase (laid out as sequential full-height panels)
// massive serif type, generous whitespace, terracotta accent.

const V1 = () => {
  const [lang, setLang] = React.useState('zh');
  const t = COPY[lang];

  const ink = '#1a1612';
  const mute = '#6b6258';
  const paper = '#faf8f4';
  const accent = '#c97a48'; // warm terracotta

  return (
    <div className="variant-root" style={{ '--ink': ink, '--paper': paper, fontFamily:"'Manrope','Noto Sans TC',system-ui,sans-serif" }}>
      {/* NAV */}
      <V1Nav lang={lang} setLang={setLang} ink={ink} accent={accent} />

      {/* HERO */}
      <section style={{ padding:'140px 96px 120px', position:'relative' }}>
        <div style={{
          fontFamily:"'JetBrains Mono',monospace", fontSize:12, letterSpacing:'0.18em',
          textTransform:'uppercase', color: accent, marginBottom: 36,
        }}>— {t.heroEyebrow}</div>

        <div style={{ display:'grid', gridTemplateColumns:'1.4fr 1fr', gap:80, alignItems:'end' }}>
          <h1 style={{
            fontFamily: lang === 'zh' ? "'Noto Serif TC',serif" : "'Cormorant Garamond',serif",
            fontWeight: lang === 'zh' ? 500 : 500,
            fontSize: lang === 'zh' ? 120 : 132,
            lineHeight: 1.02,
            letterSpacing: lang === 'zh' ? '0.01em' : '-0.02em',
            color: ink,
          }}>
            {t.heroTitle.map((line, i) => (
              <span key={i} style={{ display:'block', fontStyle: (lang==='en' && i===1) ? 'italic' : 'normal' }}>{line}</span>
            ))}
          </h1>

          <div>
            <p style={{ fontSize:18, lineHeight:1.55, color: mute, marginBottom:32, maxWidth:380 }}>{t.heroLead}</p>
            <div style={{ display:'flex', gap:16, flexWrap:'wrap' }}>
              <button className="btn" style={{ background: ink, color: paper }}>
                {t.heroCta} <span className="btn-arrow">→</span>
              </button>
              <button className="btn" style={{ background:'transparent', color: ink, boxShadow:'inset 0 0 0 1px rgba(0,0,0,0.18)' }}>
                ▶  {t.heroSecondary}
              </button>
            </div>
          </div>
        </div>

        {/* hero image strip */}
        <div style={{ marginTop: 100, display:'grid', gridTemplateColumns:'2fr 1fr 1fr', gap:24, height:520 }}>
          <ImagePH label={"PRODUCT HERO\n敏利旗艦商品\n1600 × 1040"} style={{ borderRadius:18 }} />
          <ImagePH label={"FACTORY STILL\n工廠空景\n800 × 1040"}     style={{ borderRadius:18, '--ph-bg':'#e6dccb' }} />
          <ImagePH label={"FARMER PORTRAIT\n農家肖像\n800 × 1040"}    style={{ borderRadius:18, '--ph-bg':'#d8cdb8' }} />
        </div>

        {/* metric row */}
        <div style={{ marginTop:80, display:'flex', justifyContent:'space-between', gap:48, borderTop:`1px solid rgba(26,22,18,0.1)`, paddingTop:36 }}>
          {[
            { k:'30+', v:{ zh:'年產業經驗', en:'years in food' } },
            { k:'5',   v:{ zh:'自有品牌',   en:'brand families' } },
            { k:'200+',v:{ zh:'熱銷品項',   en:'SKUs shipped'   } },
            { k:'12',  v:{ zh:'出口國家',   en:'export markets' } },
          ].map((m, i) => (
            <div key={i}>
              <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:64, fontWeight:500, color:ink, lineHeight:1 }}>{m.k}</div>
              <div style={{ marginTop:8, fontSize:13, color:mute, letterSpacing:'0.03em' }}>{m.v[lang]}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT + VALUES */}
      <section style={{ padding:'140px 96px', background:'#f3ede0' }}>
        <Eyebrow color={accent}>{t.aboutEyebrow}</Eyebrow>
        <h2 style={{
          fontFamily: lang==='zh' ? "'Noto Serif TC',serif" : "'Cormorant Garamond',serif",
          fontWeight: 500, fontSize: lang==='zh' ? 72 : 80, lineHeight:1.1, color: ink, marginTop:28, marginBottom:48,
          maxWidth: 1000,
        }}>{t.aboutTitle}</h2>
        <p style={{ fontSize: 22, lineHeight:1.55, color: mute, maxWidth: 720, marginBottom: 96 }}>{t.aboutLead}</p>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:48, borderTop:`1px solid rgba(26,22,18,0.12)`, paddingTop:48 }}>
          {t.valuePoints.map((vp, i) => (
            <div key={i}>
              <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:13, color: accent, marginBottom:16 }}>{vp.num}</div>
              <h3 style={{ fontFamily: lang==='zh' ? "'Noto Serif TC',serif" : "'Cormorant Garamond',serif",
                fontSize: 32, fontWeight: 500, color: ink, marginBottom:14 }}>{vp.t}</h3>
              <p style={{ fontSize: 16, lineHeight:1.6, color: mute }}>{vp.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* JINMEN STEEL HERITAGE MOMENT */}
      <V1HeritageMoment lang={lang} ink={ink} mute={mute} paper={paper} accent={accent} />

      {/* BRAND STICKY-SCROLL SHOWCASE */}
      <V1BrandShowcase lang={lang} t={t} ink={ink} mute={mute} paper={paper} accent={accent} />

      {/* FEATURED PRODUCTS */}
      <section style={{ padding:'140px 96px', background: paper }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:64 }}>
          <div>
            <Eyebrow color={accent}>{t.productsEyebrow}</Eyebrow>
            <h2 style={{ fontFamily: lang==='zh' ? "'Noto Serif TC',serif" : "'Cormorant Garamond',serif",
              fontWeight:500, fontSize: 72, lineHeight:1.1, color: ink, marginTop:24 }}>{t.productsTitle}</h2>
          </div>
          <p style={{ fontSize:16, color:mute, maxWidth:380, lineHeight:1.6 }}>{t.productsLead}</p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24 }}>
          {FEATURED_PRODUCTS.map((p, i) => (
            <div key={p.id} style={{
              background:'#f3ede0', borderRadius:18, padding:24, transition:'transform .25s ease', position:'relative',
            }}>
              {p.badge && (
                <div style={{
                  position:'absolute', top:36, left:36, zIndex:2,
                  background: accent, color:'#fff', padding:'4px 10px', borderRadius:4,
                  fontSize:10, letterSpacing:'0.16em',
                  fontFamily:"'JetBrains Mono',monospace",
                }}>{p.badge[lang]}</div>
              )}
              <ProductPH label={`${p.zh}\n— product shot`} w="100%" h={320}
                bg="#e6dccb" fg="#7a6c58" style={{ borderRadius:10 }} />
              <div style={{ marginTop:24, display:'flex', justifyContent:'space-between', alignItems:'baseline' }}>
                <div style={{ fontSize:11, color: accent, letterSpacing:'0.14em', fontFamily:"'JetBrains Mono',monospace" }}>{p.tag[lang].toUpperCase()}</div>
                <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:13, color: mute }}>{p.price}</div>
              </div>
              <h3 style={{ marginTop:8, fontFamily: lang==='zh' ? "'Noto Serif TC',serif" : "'Cormorant Garamond',serif",
                fontSize: lang==='zh' ? 22 : 24, fontWeight:500, color: ink, lineHeight:1.25, minHeight: 60 }}>{p[lang]}</h3>
            </div>
          ))}
        </div>

        <div style={{ marginTop:48, textAlign:'center' }}>
          <button className="btn" style={{ background:'transparent', color:ink, boxShadow:'inset 0 0 0 1px rgba(0,0,0,0.18)' }}>
            {lang==='zh' ? '查看完整產品線' : 'View all products'} <span className="btn-arrow">→</span>
          </button>
        </div>
      </section>

      {/* TRUST / CERTS */}
      <section style={{ padding:'140px 96px', background:'#1a1612', color: paper }}>
        <Eyebrow color="#e8b48a">{t.trustEyebrow}</Eyebrow>
        <h2 style={{ fontFamily: lang==='zh' ? "'Noto Serif TC',serif" : "'Cormorant Garamond',serif",
          fontWeight:500, fontSize: lang==='zh' ? 64 : 72, lineHeight:1.15, marginTop:24, maxWidth:1000 }}>{t.trustTitle}</h2>
        <p style={{ fontSize:20, lineHeight:1.55, color:'rgba(250,248,244,0.7)', marginTop:32, maxWidth: 680 }}>{t.trustLead}</p>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:24, marginTop: 96 }}>
          {CERTS.map((c, i) => (
            <div key={i} style={{
              padding:32, borderRadius:14,
              background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)',
            }}>
              <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:84, fontWeight:500, color:'#e8b48a', lineHeight:1 }}>{c.abbr}</div>
              <div style={{ marginTop:14, fontSize:18, color: paper, fontWeight:500 }}>{c.full}</div>
              <div style={{ marginTop:8, fontSize:13, color:'rgba(250,248,244,0.55)', lineHeight:1.5 }}>{c.detail[lang]}</div>
            </div>
          ))}
        </div>

        {/* counterfeit notice */}
        <div style={{
          marginTop: 96, padding: '36px 40px', borderRadius:12,
          background:'rgba(232,180,138,0.08)', borderLeft:'2px solid #e8b48a',
          display:'flex', alignItems:'flex-start', gap:24,
        }}>
          <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:12, letterSpacing:'0.18em', color:'#e8b48a', whiteSpace:'nowrap', marginTop:4 }}>
            !  {lang==='zh' ? '消費者警示' : 'CONSUMER NOTICE'}
          </div>
          <p style={{ fontSize:15, lineHeight:1.65, color:'rgba(250,248,244,0.82)' }}>{t.counterfeit}</p>
        </div>
      </section>

      {/* CONTACT */}
      <section style={{ padding:'140px 96px', background:'#f3ede0' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1.2fr 1fr', gap:80 }}>
          <div>
            <Eyebrow color={accent}>{t.contactEyebrow}</Eyebrow>
            <h2 style={{ fontFamily: lang==='zh' ? "'Noto Serif TC',serif" : "'Cormorant Garamond',serif",
              fontWeight:500, fontSize:64, lineHeight:1.1, color: ink, marginTop:24, marginBottom: 28 }}>{t.contactTitle}</h2>
            <p style={{ fontSize:18, lineHeight:1.6, color: mute, maxWidth: 480, marginBottom:48 }}>{t.contactLead}</p>

            <div style={{ display:'flex', flexDirection:'column', gap:24 }}>
              <V1Field label={lang==='zh'?'姓名':'Name'} ph={lang==='zh'?'請輸入您的姓名':'Your name'} />
              <V1Field label={lang==='zh'?'公司／單位':'Company'} ph={lang==='zh'?'選填':'Optional'} />
              <V1Field label={lang==='zh'?'電子郵件':'Email'} ph="you@example.com" />
              <V1Field label={lang==='zh'?'訊息':'Message'} ph={lang==='zh'?'簡述您的合作或詢問':'Tell us about your enquiry'} rows={4} />
            </div>
            <button className="btn" style={{ marginTop:32, background: ink, color: paper }}>
              {lang==='zh' ? '送出訊息' : 'Send message'} <span className="btn-arrow">→</span>
            </button>
          </div>

          <div>
            <div style={{ padding:36, background: paper, borderRadius:18 }}>
              <div style={{ fontSize:12, letterSpacing:'0.16em', color: accent, fontFamily:"'JetBrains Mono',monospace" }}>{t.hotline.toUpperCase()}</div>
              <div style={{ marginTop:14, fontFamily:"'Cormorant Garamond',serif", fontSize:54, fontWeight:500, color: ink, letterSpacing:'-0.01em' }}>{t.hotlineNo}</div>
              <div style={{ marginTop:24, paddingTop:24, borderTop:`1px solid rgba(0,0,0,0.08)`, fontSize:14, color: mute, lineHeight:1.7 }}>
                {lang==='zh'
                  ? <>新北市．敏利國際貿易<br/>週一–週五  09:00 – 18:00<br/>service@minli.com.tw</>
                  : <>New Taipei, Taiwan · Min International<br/>Mon–Fri  09:00 – 18:00<br/>service@minli.com.tw</>}
              </div>
            </div>

            <div style={{ marginTop:24, height:340, borderRadius:18, overflow:'hidden' }}>
              <ImagePH label={"FACTORY MAP\n新北市．工廠位置\n— 建議放 google map / illustration"} />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding:'72px 96px 48px', background: paper, borderTop:`1px solid rgba(26,22,18,0.08)` }}>
        <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr 1fr 1fr', gap:48, marginBottom:48 }}>
          <div>
            <div style={{ fontFamily: lang==='zh' ? "'Noto Serif TC',serif" : "'Cormorant Garamond',serif",
              fontSize:36, fontWeight:500, color: ink }}>{t.company}</div>
            <div style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:'italic', fontSize:18, color: mute, marginTop:4 }}>{t.companyEn}</div>
            <p style={{ marginTop:20, fontSize:13, color: mute, lineHeight:1.6, maxWidth:360 }}>{t.foodReg}</p>
          </div>
          {[
            { h: lang==='zh'?'品牌':'Brands',  items: BRANDS.map(b => lang==='zh' ? b.name : b.nameEn) },
            { h: lang==='zh'?'探索':'Explore', items: t.nav },
            { h: lang==='zh'?'聯絡':'Contact', items: ['0800-000-893','service@minli.com.tw',lang==='zh'?'新北市':'New Taipei'] },
          ].map((col, i) => (
            <div key={i}>
              <div style={{ fontSize:11, letterSpacing:'0.18em', textTransform:'uppercase', color: accent, marginBottom:18, fontFamily:"'JetBrains Mono',monospace" }}>{col.h}</div>
              <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:10 }}>
                {col.items.map((x, j) => <li key={j} style={{ fontSize:14, color: mute }}>{x}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ paddingTop:24, borderTop:`1px solid rgba(26,22,18,0.08)`, display:'flex', justifyContent:'space-between', fontSize:12, color: mute }}>
          <span>{t.footerNote}</span>
          <span style={{ fontFamily:"'JetBrains Mono',monospace" }}>v.01 · 靜雅 Quiet Modern</span>
        </div>
      </footer>
    </div>
  );
};

// ---- subcomponents ----

const V1Nav = ({ lang, setLang, ink, accent }) => (
  <nav style={{
    position:'sticky', top:0, zIndex:50,
    padding:'18px 96px', display:'flex', alignItems:'center', justifyContent:'space-between',
    background:'rgba(250,248,244,0.82)', backdropFilter:'blur(20px)',
    borderBottom:`1px solid rgba(0,0,0,0.04)`,
  }}>
    <div style={{ display:'flex', alignItems:'center', gap:14 }}>
      <div style={{
        width:38, height:38, borderRadius:10, background:`linear-gradient(135deg, ${accent}, #a85a30)`,
        color:'#fff', fontFamily:"'Noto Serif TC',serif", fontSize:22, fontWeight:700,
        display:'flex', alignItems:'center', justifyContent:'center',
      }}>敏</div>
      <div>
        <div style={{ fontSize:15, fontWeight:600, color: ink, letterSpacing:'0.04em' }}>MINLI</div>
        <div style={{ fontSize:10, color:'#8c8275', letterSpacing:'0.18em', fontFamily:"'JetBrains Mono',monospace" }}>MIN INT&rsquo;L TRADING</div>
      </div>
    </div>
    <div className="nav-row">
      {COPY[lang].nav.map((n, i) => (
        <a key={i} href="#" style={{
          fontSize:14, color: i===0 ? ink : '#5a5247', fontWeight: i===0 ? 600 : 400,
          padding:'8px 4px', borderBottom: i===0 ? `1px solid ${accent}` : '1px solid transparent',
        }}>{n}</a>
      ))}
    </div>
    <div style={{ display:'flex', alignItems:'center', gap:16 }}>
      <LanguageToggle lang={lang} setLang={setLang} />
      <button className="btn" style={{
        background:'transparent', color: ink, padding:'8px 16px',
        boxShadow:'inset 0 0 0 1px rgba(0,0,0,0.15)', fontSize:13,
      }}>{lang==='zh'?'經銷洽詢':'Become a Partner'}</button>
    </div>
  </nav>
);

const Eyebrow = ({ children, color }) => (
  <div style={{
    fontFamily:"'JetBrains Mono',monospace", fontSize:12, letterSpacing:'0.18em',
    textTransform:'uppercase', color,
  }}>— {children}</div>
);

const V1Field = ({ label, ph, rows }) => (
  <label style={{ display:'block' }}>
    <div style={{ fontSize:12, color:'#6b6258', letterSpacing:'0.06em', marginBottom:8, fontFamily:"'JetBrains Mono',monospace" }}>{label.toUpperCase()}</div>
    {rows
      ? <textarea rows={rows} placeholder={ph} style={fieldStyle} />
      : <input placeholder={ph} style={fieldStyle} />}
  </label>
);
const fieldStyle = {
  width:'100%', padding:'14px 16px', fontFamily:"'Manrope','Noto Sans TC',sans-serif", fontSize:15,
  background:'#faf8f4', border:'1px solid rgba(0,0,0,0.1)', borderRadius:10, color:'#1a1612', outline:'none',
};

// ----- Sticky-scroll brand showcase: 5 panels stacked, alternating layouts -----
const V1BrandShowcase = ({ lang, t, ink, mute, paper, accent }) => (
  <section style={{ background: paper }}>
    {/* intro */}
    <div style={{ padding:'140px 96px 80px', maxWidth:1400 }}>
      <Eyebrow color={accent}>{t.brandsEyebrow}</Eyebrow>
      <h2 style={{ fontFamily: lang==='zh' ? "'Noto Serif TC',serif" : "'Cormorant Garamond',serif",
        fontWeight:500, fontSize: lang==='zh' ? 64 : 80, lineHeight:1.15, color: ink, marginTop:24, maxWidth: 1100 }}>{t.brandsTitle}</h2>
    </div>

    {BRANDS.map((b, idx) => {
      const isReverse = idx % 2 === 1;
      const isDark = !!b.fg;
      const bg = b.bg;
      const fg = b.fg || ink;
      const muted = b.fg ? 'rgba(255,255,255,0.7)' : mute;
      return (
        <div key={b.id} style={{
          minHeight: 720, background: bg, color: fg, padding:'96px',
          display:'grid', gridTemplateColumns: isReverse ? '1fr 1.2fr' : '1.2fr 1fr',
          gap:80, alignItems:'center', position:'relative', overflow:'hidden',
        }}>
          {/* huge index numeral, decorative */}
          <div style={{
            position:'absolute', top: 24, right: 96, fontFamily:"'Cormorant Garamond',serif",
            fontSize: 240, fontWeight: 500, lineHeight: 1,
            color: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)',
            pointerEvents:'none', userSelect:'none',
          }}>0{idx+1}</div>

          <div style={{ order: isReverse ? 2 : 1 }}>
            <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:12, color: b.accent,
              letterSpacing:'0.16em', marginBottom:24 }}>
              0{idx+1}  /  {b.tag[lang].toUpperCase()}
            </div>
            <h3 style={{
              fontFamily: lang==='zh' ? "'Noto Serif TC',serif" : "'Cormorant Garamond',serif",
              fontSize: lang==='zh' ? 96 : 108, fontWeight: 500, lineHeight: 1, color: fg, marginBottom: 32,
              letterSpacing: lang==='zh' ? '0.02em' : '-0.02em',
            }}>{lang==='zh' ? b.name : b.nameEn}</h3>
            <p style={{ fontSize:20, lineHeight:1.55, color: muted, maxWidth: 520, marginBottom: 40 }}>{b.desc[lang]}</p>

            <div style={{ display:'flex', flexWrap:'wrap', gap:10, marginBottom: 40 }}>
              {(lang==='zh' ? b.products : b.productsEn).map((p, i) => (
                <span key={i} style={{
                  padding:'8px 14px', borderRadius:999, fontSize:13,
                  background: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.04)',
                  color: isDark ? 'rgba(255,255,255,0.85)' : ink,
                }}>{p}</span>
              ))}
            </div>

            <button className="btn" style={{
              background: b.accent, color:'#fff',
            }}>
              {lang==='zh' ? `走進 ${b.name}` : `Visit ${b.nameEn}`} <span className="btn-arrow">→</span>
            </button>
          </div>

          <div style={{ order: isReverse ? 1 : 2, height: 560, borderRadius:18, overflow:'hidden' }}>
            <ImagePH label={`${b.nameEn.toUpperCase()}\nBRAND IMAGERY\n— place key product or lifestyle shot`}
              style={{ '--ph-bg': isDark ? '#231914' : '#e6dccb', '--ph-fg': isDark ? '#a09084' : '#7a6c58' }} />
          </div>
        </div>
      );
    })}
  </section>
);

// ----- Jinmen steel heritage editorial moment -----
const V1HeritageMoment = ({ lang, ink, mute, paper, accent }) => (
  <section style={{
    padding:'160px 96px', background:'#1c1814', color: paper, position:'relative', overflow:'hidden',
  }}>
    {/* decorative blade silhouette */}
    <svg viewBox="0 0 600 80" style={{
      position:'absolute', top:'40%', right: -100, width: 900, height: 120, opacity: 0.06,
    }}>
      <path d="M0,40 Q40,20 80,40 Q120,60 160,40 Q200,20 240,40 Q280,60 320,40 Q360,20 400,40 L520,40 L560,30 L560,50 L520,40 Z"
        fill="none" stroke={accent} strokeWidth="1.5" />
    </svg>

    <div style={{ display:'grid', gridTemplateColumns:'1fr 1.4fr', gap:96, alignItems:'center', position:'relative' }}>
      <div>
        <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:12, letterSpacing:'0.22em',
          color: accent, marginBottom:28, textTransform:'uppercase' }}>
          — {lang==='zh' ? '專利傳承' : 'Heritage'}
        </div>
        <h2 style={{
          fontFamily: lang==='zh' ? "'Noto Serif TC',serif" : "'Cormorant Garamond',serif",
          fontWeight: 500, fontSize: lang==='zh' ? 76 : 88, lineHeight: 1.05, marginBottom: 36,
          letterSpacing: lang==='zh' ? '0.01em' : '-0.02em',
        }}>
          {lang==='zh'
            ? <>一把刀，<br/>來自一座島嶼的記憶。</>
            : <>A blade,<br/>forged from an island\u2019s memory.</>}
        </h2>
        <p style={{ fontSize:18, lineHeight:1.75, color:'rgba(246,239,227,0.7)', maxWidth: 520 }}>
          {lang==='zh'
            ? '金門鋼刀的傳奇，源自冷戰時期落在島上的數十萬發砲彈。當砲火停止，工匠把砲彈鋼撿回，以一塊鋼可打三十把刀的密度，化作家家戶戶的廚刀。敏利與老澤源延續這項台灣獨有的工藝——以歷史鋼，鍛今日的刀。'
            : 'The legend of Jinmen-steel knives began in the Cold War, with the hundreds of thousands of artillery shells that fell on the island. When the firing stopped, smiths gathered the steel — and from each shell, thirty kitchen knives. Minli and Lao Ze Yuan continue this uniquely Taiwanese craft today.'}
        </p>
        <div style={{ marginTop:40, display:'flex', gap: 14 }}>
          <button className="btn" style={{ background: accent, color:'#1c1814' }}>
            {lang==='zh' ? '走進老澤源' : 'Visit Lao Ze Yuan'} <span className="btn-arrow">→</span>
          </button>
          <button className="btn" style={{ background:'transparent', color: paper, boxShadow:'inset 0 0 0 1px rgba(246,239,227,0.3)' }}>
            {lang==='zh' ? '觀看工藝紀錄' : 'Watch the craft'} →
          </button>
        </div>
      </div>

      <div style={{ position:'relative' }}>
        <div style={{
          position:'absolute', top:24, right:24, zIndex:2,
          background: accent, color:'#1c1814', padding:'8px 14px',
          fontFamily:"'JetBrains Mono',monospace", fontSize:11, letterSpacing:'0.18em',
        }}>
          {lang==='zh' ? '專利編號 · I-XXXX' : 'PATENT · I-XXXX'}
        </div>
        <ImagePH label={"JINMEN STEEL KNIFE\n金門鋼刀 · 主廚刀\n— hero shot on dark linen\n— 1200 × 820"}
          style={{ height: 520, borderRadius:6, '--ph-bg':'#241d17', '--ph-fg':'#8a7a64' }} />
        <div style={{ marginTop:18, display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:8 }}>
          {['冷凍刀 / Frozen','主廚刀 / Chef','砍骨刀 / Cleaver'].map((label, i) => (
            <div key={i} style={{
              padding:'14px 12px', background:'rgba(246,239,227,0.04)',
              fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:'rgba(246,239,227,0.7)',
              letterSpacing:'0.08em', textAlign:'center',
            }}>0{i+1}  ·  {label}</div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

window.V1 = V1;

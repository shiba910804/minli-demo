// v1.jsx — 日系電商改版：保健食品主軸，柔和色系，跑馬燈 + 動態 Hero

// Homepage-only brand color overrides — keeps shared.jsx untouched
const V1_BRAND_OVERRIDES = {
  'little-taiwan': { bg: '#f2faf5', accent: '#3c9e6a' },
  'uhome':         { bg: '#eef7ec', accent: '#5a9045' },
  'minli':         { bg: '#f9f4ef', fg: null },
  'laozeyuan':     { bg: '#f9f4ef', fg: null, accent: '#c9a13a' },
  'junda':         { bg: '#f9f4ef', accent: '#c9a13a' },
};

const V1 = () => {
  const [lang, setLang] = React.useState('zh');
  const t = COPY[lang];

  const ink   = '#1a1814';
  const mute  = '#6b6258';
  const fresh = '#f6faf6';
  const sage  = '#e6f0e6';
  const coral = '#e8604a';
  const green = '#4a7c59';
  const gold  = '#c9a13a';
  const cream = '#fdf6f0';

  const HEALTH_FEATURED = ['lt-nmn','lt-lutein','lt-antrodia','uhome-lemon','lt-calcium','minli-wave']
    .map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);


  return (
    <div className="variant-root" style={{
      '--ink': ink, '--paper': fresh,
      background: fresh,
      fontFamily: "'Manrope','Noto Sans TC',system-ui,sans-serif",
      overflow: 'visible',
    }}>

      {/* MARQUEE BAR */}
      <V1Marquee lang={lang} coral={coral} />

      {/* NAV */}
      <V1Nav lang={lang} setLang={setLang} ink={ink} coral={coral} />

      {/* HERO */}
      <V1HeroPhoto lang={lang} coral={coral} ink={ink} mute={mute} />

      {/* METRICS STRIP */}
      <div style={{
        padding:'28px 96px', background:'#fff',
        display:'flex', justifyContent:'space-around', alignItems:'center',
        borderBottom:'1px solid rgba(26,22,18,0.06)',
      }}>
        {[
          { k:'30+', v:{ zh:'年產業經驗', en:'years in food' } },
          { k:'5',   v:{ zh:'自有品牌',   en:'brand families' } },
          { k:'200+',v:{ zh:'熱銷品項',   en:'SKUs shipped'   } },
          { k:'12',  v:{ zh:'出口國家',   en:'export markets' } },
        ].map((m, i) => (
          <div key={i} style={{ textAlign:'center' }}>
            <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:52, fontWeight:500, color:ink, lineHeight:1 }}>{m.k}</div>
            <div style={{ marginTop:6, fontSize:12, color:mute, letterSpacing:'0.03em' }}>{m.v[lang]}</div>
          </div>
        ))}
      </div>

      {/* BRAND ROWS */}
      <section>
        <div style={{ padding: '80px 96px 48px', background: '#fff' }}>
          <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, letterSpacing:'0.2em', textTransform:'uppercase', color: coral, marginBottom: 16 }}>
            — {lang==='zh' ? '五大品牌 · 各司其職' : 'Five brands, each with a purpose'}
          </div>
          <h2 style={{
            fontFamily: lang==='zh' ? "'Noto Serif TC',serif" : "'Cormorant Garamond',serif",
            fontWeight: 500, fontSize: lang==='zh' ? 64 : 72, lineHeight: 1.1, color: ink,
          }}>
            {lang==='zh' ? '從保健到廚房，我們照顧你全家。' : 'From wellness to kitchen — we care for your whole family.'}
          </h2>
        </div>
        {BRANDS.map((b, i) => (
          <V1BrandRow key={b.id} b={b} lang={lang} index={i} ink={ink} mute={mute} />
        ))}
      </section>

      {/* FEATURED PRODUCTS — health first */}
      <section style={{ padding: '120px 96px', background: sage }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64 }}>
          <div>
            <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, letterSpacing:'0.2em', textTransform:'uppercase', color: green, marginBottom: 16 }}>
              — {lang==='zh' ? '本期精選' : 'This season'}
            </div>
            <h2 style={{
              fontFamily: lang==='zh' ? "'Noto Serif TC',serif" : "'Cormorant Garamond',serif",
              fontWeight: 500, fontSize: lang==='zh' ? 64 : 72, lineHeight: 1.1, color: ink,
            }}>{lang==='zh' ? '健康好物，每天一起。' : 'For your health, every day.'}</h2>
          </div>
          <button className="btn" style={{ background: 'transparent', color: ink, boxShadow: 'inset 0 0 0 1.5px rgba(0,0,0,0.18)', whiteSpace:'nowrap' }}>
            {lang==='zh' ? '查看完整產品線' : 'View all products'} <span className="btn-arrow">→</span>
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
          {HEALTH_FEATURED.map(p => {
            const brand = BRANDS.find(b => b.id === p.brand);
            const isBlade = ['廚房刀剪','高階刀具'].includes(p.cat.zh);
            return (
              <div key={p.id} style={{
                background: '#fff', borderRadius: 20, padding: 24,
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                transition: 'transform .2s, box-shadow .2s',
              }}
                onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-4px)';e.currentTarget.style.boxShadow='0 10px 32px rgba(0,0,0,0.1)';}}
                onMouseLeave={e=>{e.currentTarget.style.transform='';e.currentTarget.style.boxShadow='0 2px 12px rgba(0,0,0,0.06)';}}
              >
                {p.badge && (
                  <div style={{
                    display:'inline-block', marginBottom:12,
                    background: isBlade ? gold : coral,
                    color:'#fff', padding:'4px 10px', borderRadius:4,
                    fontSize:10, letterSpacing:'0.14em',
                    fontFamily:"'JetBrains Mono',monospace",
                  }}>{p.badge[lang]}</div>
                )}
                <a href={`#product-${p.id}`} className="product-img-link" style={{ borderRadius:12 }} data-product-id={p.id} data-route="product">
                  <ProductPH label={p.zh} w="100%" h={260}
                    bg={isBlade ? '#1c1814' : '#eef6ee'}
                    fg={isBlade ? '#9a8a74' : '#4a7c59'}
                    style={{ borderRadius:12 }} />
                  <div className="product-img-overlay">
                    <span className="product-img-overlay-badge">{lang==='zh' ? '立即選購 →' : 'Shop Now →'}</span>
                  </div>
                </a>
                <div style={{ marginTop:20 }}>
                  <div style={{ fontSize:10, color: brand?.accent || coral, letterSpacing:'0.14em', fontFamily:"'JetBrains Mono',monospace", marginBottom:6, textTransform:'uppercase' }}>
                    {(lang==='zh' ? brand?.name : brand?.nameEn)||''} · {p.cat[lang]}
                  </div>
                  <h3 style={{
                    fontFamily: lang==='zh' ? "'Noto Serif TC',serif" : "'Cormorant Garamond',serif",
                    fontSize: lang==='zh'?20:22, fontWeight:500, color:ink, lineHeight:1.3, marginBottom:14, minHeight:52,
                  }}>{p[lang]}</h3>
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                    <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:15, color:ink, fontWeight:600 }}>{p.price}</div>
                    <button data-product-id={p.id} className="btn" style={{ background: coral, color:'#fff', padding:'8px 16px', fontSize:12 }}>
                      {lang==='zh' ? '查看 →' : 'View →'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* TAIWAN ORIGIN */}
      <section style={{ padding: '100px 96px', background: cream }}>
        <div style={{ textAlign:'center', marginBottom:72 }}>
          <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, letterSpacing:'0.2em', textTransform:'uppercase', color: green, marginBottom:16 }}>
            — {lang==='zh' ? '台灣驕傲' : 'Proudly Taiwanese'}
          </div>
          <h2 style={{
            fontFamily: lang==='zh' ? "'Noto Serif TC',serif" : "'Cormorant Garamond',serif",
            fontWeight:500, fontSize: lang==='zh'?60:68, lineHeight:1.1, color:ink,
          }}>
            {lang==='zh' ? '來自台灣，每一份都值得信任。' : 'From Taiwan — every product worth trusting.'}
          </h2>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:36 }}>
          {[
            {
              icon: '🌿',
              title: { zh:'台灣在地食材', en:'Taiwan-Sourced Ingredients' },
              desc:  { zh:'牛樟芝、鴕鳥精、葉黃素游離型——選用台灣在地嚴選原料，從土地到瓶身，來源透明。', en:'Antrodia, ostrich essence, free-form lutein — local Taiwan ingredients, transparent sourcing from field to bottle.' },
            },
            {
              icon: '🏅',
              title: { zh:'通過多項認證', en:'Multi-Certified Quality' },
              desc:  { zh:'ISO 22000、HACCP 雙國際認證；SGS 每批次第三方檢驗。你吃的每一顆，都有憑有據。', en:'ISO 22000 + HACCP dual certified; SGS third-party batch tested. Every capsule you take has the paperwork to prove it.' },
            },
            {
              icon: '🏭',
              title: { zh:'30年製造經驗', en:'30 Years of Manufacturing' },
              desc:  { zh:'從刀具工廠起家，三十年積累橫跨器具、保健、養生。一個家族，一個承諾。', en:'From a knife works in the 1990s to a multi-category group — thirty years of family commitment to making things right.' },
            },
          ].map((item, i) => (
            <div key={i} style={{ background:'#fff', borderRadius:20, padding:'36px 32px', boxShadow:'0 2px 16px rgba(0,0,0,0.05)' }}>
              <div style={{ fontSize:40, marginBottom:20 }}>{item.icon}</div>
              <h3 style={{
                fontFamily: lang==='zh' ? "'Noto Serif TC',serif" : "'Cormorant Garamond',serif",
                fontSize:26, fontWeight:500, color:ink, marginBottom:14,
              }}>{item.title[lang]}</h3>
              <p style={{ fontSize:15, lineHeight:1.7, color:mute }}>{item.desc[lang]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TRUST / CERTS */}
      <section style={{ padding:'120px 96px', background:'#1a1814', color: fresh }}>
        <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, letterSpacing:'0.2em', textTransform:'uppercase', color:'#e8b48a', marginBottom:16 }}>
          — {t.trustEyebrow}
        </div>
        <h2 style={{
          fontFamily: lang==='zh' ? "'Noto Serif TC',serif" : "'Cormorant Garamond',serif",
          fontWeight:500, fontSize: lang==='zh'?60:68, lineHeight:1.15, marginBottom:24, maxWidth:1000,
        }}>{t.trustTitle}</h2>
        <p style={{ fontSize:18, lineHeight:1.6, color:'rgba(246,250,246,0.62)', maxWidth: 640, marginBottom:80 }}>{t.trustLead}</p>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:20 }}>
          {CERTS.map((c, i) => (
            <div key={i} style={{
              padding:28, borderRadius:16,
              background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.08)',
            }}>
              <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:72, fontWeight:500, color:'#e8b48a', lineHeight:1 }}>{c.abbr}</div>
              <div style={{ marginTop:12, fontSize:16, color: fresh, fontWeight:500 }}>{c.full}</div>
              <div style={{ marginTop:6, fontSize:13, color:'rgba(246,250,246,0.48)', lineHeight:1.5 }}>{c.detail[lang]}</div>
            </div>
          ))}
        </div>
        <div style={{
          marginTop:68, padding:'26px 34px', borderRadius:12,
          background:'rgba(232,180,138,0.07)', borderLeft:'2px solid #e8b48a',
          display:'flex', alignItems:'flex-start', gap:20,
        }}>
          <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, letterSpacing:'0.18em', color:'#e8b48a', whiteSpace:'nowrap', marginTop:3 }}>
            !  {lang==='zh' ? '消費者警示' : 'CONSUMER NOTICE'}
          </div>
          <p style={{ fontSize:14, lineHeight:1.65, color:'rgba(246,250,246,0.76)' }}>{t.counterfeit}</p>
        </div>
      </section>

      {/* CONTACT */}
      <section style={{ padding:'120px 96px', background: fresh }}>
        <div style={{ display:'grid', gridTemplateColumns:'1.2fr 1fr', gap:80 }}>
          <div>
            <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, letterSpacing:'0.2em', textTransform:'uppercase', color: coral, marginBottom:16 }}>
              — {t.contactEyebrow}
            </div>
            <h2 style={{
              fontFamily: lang==='zh' ? "'Noto Serif TC',serif" : "'Cormorant Garamond',serif",
              fontWeight:500, fontSize:60, lineHeight:1.1, color:ink, marginBottom:24,
            }}>{t.contactTitle}</h2>
            <p style={{ fontSize:17, lineHeight:1.6, color:mute, maxWidth:480, marginBottom:44 }}>{t.contactLead}</p>
            <div style={{ display:'flex', flexDirection:'column', gap:22 }}>
              <V1Field label={lang==='zh'?'姓名':'Name'}        ph={lang==='zh'?'請輸入您的姓名':'Your name'} />
              <V1Field label={lang==='zh'?'公司／單位':'Company'} ph={lang==='zh'?'選填':'Optional'} />
              <V1Field label={lang==='zh'?'電子郵件':'Email'}    ph="you@example.com" />
              <V1Field label={lang==='zh'?'訊息':'Message'}      ph={lang==='zh'?'簡述您的合作或詢問':'Tell us about your enquiry'} rows={4} />
            </div>
            <button className="btn" style={{ marginTop:28, background: coral, color:'#fff' }}>
              {lang==='zh' ? '送出訊息' : 'Send message'} <span className="btn-arrow">→</span>
            </button>
          </div>

          <div>
            <div style={{ padding:32, background:'#fff', borderRadius:18, boxShadow:'0 2px 20px rgba(0,0,0,0.06)' }}>
              <div style={{ fontSize:11, letterSpacing:'0.18em', color:coral, fontFamily:"'JetBrains Mono',monospace" }}>{t.hotline.toUpperCase()}</div>
              <div style={{ marginTop:12, fontFamily:"'Cormorant Garamond',serif", fontSize:50, fontWeight:500, color:ink, letterSpacing:'-0.01em' }}>{t.hotlineNo}</div>
              <div style={{ marginTop:22, paddingTop:22, borderTop:'1px solid rgba(0,0,0,0.07)', fontSize:14, color:mute, lineHeight:1.7 }}>
                {lang==='zh'
                  ? <>新北市．敏利國際貿易<br/>週一–週五  09:00 – 18:00<br/>service@minli.com.tw</>
                  : <>New Taipei, Taiwan · Min International<br/>Mon–Fri  09:00 – 18:00<br/>service@minli.com.tw</>}
              </div>
            </div>
            <div style={{ marginTop:20, height:300, borderRadius:18, overflow:'hidden' }}>
              <ImagePH label={"FACTORY MAP\n新北市．工廠位置\n— Google Map 或插圖"}
                style={{ '--ph-bg':'#e6f0e6', '--ph-fg':'#4a7c59' }} />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding:'64px 96px 44px', background:'#fff', borderTop:'1px solid rgba(26,22,18,0.06)' }}>
        <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr 1fr 1fr', gap:48, marginBottom:44 }}>
          <div>
            <div style={{ fontFamily: lang==='zh' ? "'Noto Serif TC',serif" : "'Cormorant Garamond',serif",
              fontSize:32, fontWeight:500, color:ink }}>{t.company}</div>
            <div style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:'italic', fontSize:16, color:mute, marginTop:4 }}>{t.companyEn}</div>
            <p style={{ marginTop:18, fontSize:12, color:mute, lineHeight:1.65, maxWidth:340 }}>{t.foodReg}</p>
          </div>
          {[
            { h: lang==='zh'?'品牌':'Brands',  items: BRANDS.map(b => lang==='zh' ? b.name : b.nameEn) },
            { h: lang==='zh'?'探索':'Explore', items: t.nav },
            { h: lang==='zh'?'聯絡':'Contact', items: ['0800-000-893','service@minli.com.tw',lang==='zh'?'新北市':'New Taipei'] },
          ].map((col, i) => (
            <div key={i}>
              <div style={{ fontSize:10, letterSpacing:'0.2em', textTransform:'uppercase', color:coral, marginBottom:16, fontFamily:"'JetBrains Mono',monospace" }}>{col.h}</div>
              <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:9 }}>
                {col.items.map((x, j) => <li key={j} style={{ fontSize:13, color:mute }}>{x}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ paddingTop:20, borderTop:'1px solid rgba(26,22,18,0.06)', display:'flex', justifyContent:'space-between', fontSize:11, color:mute }}>
          <span>{t.footerNote}</span>
          <span style={{ fontFamily:"'JetBrains Mono',monospace" }}>MINLI · 保健 × 台灣農產 × 廚房</span>
        </div>
      </footer>
    </div>
  );
};

// ---- Subcomponents ----

const V1Marquee = ({ lang, coral }) => {
  const items = lang==='zh'
    ? '台灣製造 · 品質認證 · NMN PRO 暢銷中 · 購物滿 $2000 免運費 · 敏利官方旗艦 · 葉黃素游離型熱賣中 · 牛樟芝現貨供應 · 健康生活每一天 · '
    : 'Made in Taiwan · ISO Certified · NMN PRO Bestseller · Free shipping over NT$2000 · Official Minli Store · Taiwan Lutein In Stock · Antrodia Available Now · Wellness Every Day · ';
  return (
    <div style={{
      background: coral, color:'#fff', height:38, overflow:'hidden',
      display:'flex', alignItems:'center',
      fontFamily:"'JetBrains Mono',monospace", fontSize:12, letterSpacing:'0.1em',
    }}>
      <div className="marquee-track">
        <span>{items}{items}</span>
      </div>
    </div>
  );
};

const V1Nav = ({ lang, setLang, ink, coral }) => (
  <nav style={{
    position:'sticky', top:0, zIndex:50,
    padding:'16px 96px', display:'flex', alignItems:'center', justifyContent:'space-between',
    background:'#fff',
    borderBottom:'1px solid rgba(0,0,0,0.08)',
  }}>
    <div style={{ display:'flex', alignItems:'center', gap:12 }}>
      <div style={{
        width:36, height:36, borderRadius:10,
        background:`linear-gradient(135deg, ${coral}, #c0442c)`,
        color:'#fff', fontFamily:"'Noto Serif TC',serif", fontSize:20, fontWeight:700,
        display:'flex', alignItems:'center', justifyContent:'center',
      }}>敏</div>
      <div>
        <div style={{ fontSize:15, fontWeight:700, color:ink, letterSpacing:'0.05em' }}>MINLI</div>
        <div style={{ fontSize:9, color:'#8c8275', letterSpacing:'0.18em', fontFamily:"'JetBrains Mono',monospace" }}>MIN INT&rsquo;L TRADING</div>
      </div>
    </div>

    <div className="nav-row">
      {COPY[lang].nav.map((n, i) => (
        <a key={i} href="#" style={{
          fontSize:14, color: i===0 ? ink : '#5a5247', fontWeight: i===0 ? 600 : 400,
          padding:'8px 4px', borderBottom: i===0 ? `2px solid ${coral}` : '2px solid transparent',
        }}>{n}</a>
      ))}
    </div>

    <div style={{ display:'flex', alignItems:'center', gap:12 }}>
      <LanguageToggle lang={lang} setLang={setLang} />
      <button style={{
        background:'none', border:'none', cursor:'pointer',
        display:'flex', alignItems:'center', gap:5, color:ink, padding:'8px',
      }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
          <line x1="3" y1="6" x2="21" y2="6"/>
          <path d="M16 10a4 4 0 01-8 0"/>
        </svg>
        <span style={{ fontSize:13, fontWeight:500 }}>購物車</span>
      </button>
      <button className="btn" style={{
        background:'transparent', color:ink, padding:'8px 16px',
        boxShadow:'inset 0 0 0 1px rgba(0,0,0,0.15)', fontSize:13,
      }}>{lang==='zh'?'經銷洽詢':'Become a Partner'}</button>
    </div>
  </nav>
);

const V1ProductSlider = ({ products, lang, accent, dark, ink }) => {
  const [offset, setOffset] = React.useState(0);
  const visible = products.slice(offset, offset + 3);
  const canPrev = offset > 0;
  const canNext = offset + 3 < products.length;
  const totalPages = Math.ceil(products.length / 3);
  const currentPage = Math.floor(offset / 3) + 1;

  const numColor = dark ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.4)';
  const lineColor = dark ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.18)';

  return (
    <div style={{ display:'flex', flexDirection:'column', gap:24, width:'100%' }}>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:16 }}>
        {visible.map(p => (
          <div key={p.id} style={{
            background: dark ? 'rgba(255,255,255,0.07)' : '#fff',
            borderRadius:18, overflow:'hidden',
            border: dark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.07)',
          }}>
            <a href={`#product-${p.id}`} className="product-img-link" data-product-id={p.id} data-route="product">
              <ProductPH label={lang==='zh' ? p.zh : p.en} w="100%" h={280}
                bg={dark ? '#2a2018' : '#f0eae0'} fg={dark ? '#a09070' : '#8a7a68'} />
              <div className="product-img-overlay">
                <span className="product-img-overlay-badge">{lang==='zh' ? '立即選購 →' : 'Shop Now →'}</span>
              </div>
            </a>
            <div style={{ padding:'16px 18px' }}>
              <div style={{ fontSize:10, color:accent, letterSpacing:'0.12em',
                fontFamily:"'JetBrains Mono',monospace", marginBottom:6, height:16, overflow:'hidden' }}>
                {p.badge?.[lang] || ''}
              </div>
              <div style={{ fontSize:15, color: dark?'#f0e8d8':ink, lineHeight:1.45, marginBottom:9 }}>
                {lang==='zh' ? p.zh : p.en}
              </div>
              <div style={{ fontSize:15, color:accent, fontFamily:"'JetBrains Mono',monospace", fontWeight:600 }}>
                {p.price}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 頁碼 + 箭頭（置中，永遠顯示） */}
      <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:20 }}>
        <button onClick={() => canPrev && setOffset(o => o - 3)}
          style={{
            width:40, height:40, borderRadius:'50%', border:`1.5px solid ${canPrev ? accent : lineColor}`,
            background:'transparent', color: canPrev ? accent : (dark ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.22)'),
            fontSize:16, cursor: canPrev ? 'pointer' : 'default',
            display:'flex', alignItems:'center', justifyContent:'center',
          }}>←</button>

        <div style={{ display:'flex', alignItems:'center', gap:12,
          fontFamily:"'JetBrains Mono',monospace", fontSize:13, color:numColor, letterSpacing:'0.08em' }}>
          <span>{String(currentPage).padStart(2,'0')}</span>
          <span style={{ display:'block', width:32, height:1, background:lineColor }} />
          <span>{String(totalPages).padStart(2,'0')}</span>
        </div>

        <button onClick={() => canNext && setOffset(o => o + 3)}
          style={{
            width:40, height:40, borderRadius:'50%', border:`1.5px solid ${canNext ? accent : lineColor}`,
            background:'transparent', color: canNext ? accent : (dark ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.22)'),
            fontSize:16, cursor: canNext ? 'pointer' : 'default',
            display:'flex', alignItems:'center', justifyContent:'center',
          }}>→</button>
      </div>
    </div>
  );
};

const V1BrandRow = ({ b, lang, index, ink, mute }) => {
  const ovr = V1_BRAND_OVERRIDES[b.id] || {};
  const brand = { ...b, ...ovr };
  const dark = !!brand.fg;
  const textColor = dark ? brand.fg : ink;
  const mutedColor = dark ? 'rgba(255,255,255,0.65)' : mute;
  const brandProducts = PRODUCTS.filter(p => p.brand === brand.id);
  const isReverse = index % 2 !== 0;

  const textSide = (
    <div style={{
      display:'flex', flexDirection:'column', justifyContent:'space-between',
      padding:'144px 80px 208px', flex:'0 0 42%',
    }}>
      {/* Top group — aligns with product image top */}
      <div>
        <span style={{
          display:'inline-block', marginBottom:24,
          background:brand.accent, color:'#fff', padding:'7px 18px', borderRadius:999,
          fontSize:13, letterSpacing:'0.14em', fontFamily:"'JetBrains Mono',monospace",
        }}>{brand.tag[lang]}</span>
        <h3 style={{
          fontFamily: lang==='zh' ? "'Noto Serif TC',serif" : "'Cormorant Garamond',serif",
          fontSize: lang==='zh'?76:84, fontWeight:500, color:textColor, lineHeight:1.05, marginBottom:22,
        }}>{lang==='zh' ? brand.name : brand.nameEn}</h3>
        <p style={{ fontSize:17, lineHeight:1.75, color:mutedColor, maxWidth:400 }}>
          {brand.desc[lang]}
        </p>
      </div>
      {/* Bottom group — stays at bottom of content area */}
      <div style={{ display:'flex', alignItems:'center', gap:24 }}>
        <span style={{ fontSize:13, color: dark?'rgba(255,255,255,0.4)':mute, fontFamily:"'JetBrains Mono',monospace" }}>
          {brand.productCount} {lang==='zh'?'款商品':'products'}
        </span>
        <button data-route={`brand-${brand.id}`} className="btn"
          style={{ background:brand.accent, color:'#fff', padding:'12px 24px', fontSize:14 }}>
          {lang==='zh' ? `走進 ${brand.name}` : `Visit ${brand.nameEn}`} <span className="btn-arrow">→</span>
        </button>
      </div>
    </div>
  );

  const productSide = (
    <div style={{ flex:1, padding:'0 72px', display:'flex', flexDirection:'column', justifyContent:'center' }}>
      <V1ProductSlider products={brandProducts} lang={lang} accent={brand.accent} dark={dark} ink={ink} />
    </div>
  );

  return (
    <div style={{
      background:brand.bg,
      display:'flex', height:752,
      flexDirection: isReverse ? 'row-reverse' : 'row',
    }}>
      {textSide}
      {productSide}
    </div>
  );
};

const V1Field = ({ label, ph, rows }) => (
  <label style={{ display:'block' }}>
    <div style={{ fontSize:11, color:'#6b6258', letterSpacing:'0.06em', marginBottom:7, fontFamily:"'JetBrains Mono',monospace" }}>{label.toUpperCase()}</div>
    {rows
      ? <textarea rows={rows} placeholder={ph} style={fieldStyle} />
      : <input placeholder={ph} style={fieldStyle} />}
  </label>
);
const fieldStyle = {
  width:'100%', padding:'13px 16px',
  fontFamily:"'Manrope','Noto Sans TC',sans-serif", fontSize:15,
  background:'#f6faf6', border:'1px solid rgba(0,0,0,0.09)',
  borderRadius:10, color:'#1a1612', outline:'none',
};

const V1HeroPhoto = ({ lang, coral, ink, mute }) => {
  const heroBg = '#f9f4ef';

  return (
    <section style={{
      position: 'relative',
      minHeight: '82vh',
      overflow: 'hidden',
      background: heroBg,
    }}>
      {/* Full-bleed background photo */}
      <img
        src="./hero-product.png"
        alt={lang==='zh' ? '專利植萃褐藻素食膠囊' : 'Patent Liposome Kelp Extract'}
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'contain',
          objectPosition: 'right center',
        }}
      />

      {/* Left-to-right gradient: cream → transparent */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `linear-gradient(to right,
          ${heroBg} 0%,
          ${heroBg} 32%,
          ${heroBg}f0 44%,
          ${heroBg}99 54%,
          ${heroBg}33 65%,
          transparent 76%)`,
        pointerEvents: 'none',
      }} />

      {/* Text content (above overlay) */}
      <div style={{
        position: 'relative', zIndex: 1,
        padding: '0 64px 0 96px',
        minHeight: '82vh',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        maxWidth: 560,
      }}>
        <div style={{
          fontFamily:"'JetBrains Mono',monospace", fontSize:12, letterSpacing:'0.12em',
          color: coral, marginBottom: 18,
        }}>
          {lang==='zh' ? '老澤源 · 專利植萃褐藻' : 'Laozeyuan · Patent Kelp Extract'}
        </div>

        <h1 style={{
          fontFamily: lang==='zh' ? "'Noto Serif TC',serif" : "'Cormorant Garamond',serif",
          fontSize: lang==='zh' ? 64 : 70,
          fontWeight: lang==='zh' ? 700 : 500,
          lineHeight: 1.18,
          letterSpacing: lang==='zh' ? '0.02em' : '-0.015em',
          color: ink,
          marginBottom: 22,
        }}>
          {lang==='zh' ? (
            <>
              天然植萃，<br />
              科學驗證，<br />
              <span style={{ color: coral }}>守護每一天。</span>
            </>
          ) : (
            <>
              Natural extracts,<br />
              Science-backed,<br />
              <span style={{ color: coral, fontStyle:'italic' }}>every day.</span>
            </>
          )}
        </h1>

        <p style={{ fontSize:16, lineHeight:1.75, color: mute, marginBottom:36, maxWidth:380 }}>
          {lang==='zh'
            ? '專利植萃褐藻素食膠囊，通過 ISO 22000、HACCP 認證，SGS 逐批檢驗，天然安心食用。'
            : 'Patent Liposome Kelp Extract capsules — ISO 22000 & HACCP certified, SGS batch-tested, vegetarian.'}
        </p>

        <div style={{ display:'flex', gap:14, flexWrap:'wrap', marginBottom:32 }}>
          <button className="btn" style={{
            background: coral, color:'#fff', fontSize:14,
            boxShadow: '0 4px 16px rgba(232,96,74,0.32)',
          }}>
            {lang==='zh' ? '立即選購' : 'Shop Now'} <span className="btn-arrow">→</span>
          </button>
          <button className="btn" style={{
            background:'rgba(255,255,255,0.7)', color:ink, fontSize:14,
            boxShadow:'inset 0 0 0 1.5px rgba(0,0,0,0.16)',
            backdropFilter:'blur(4px)',
          }}>
            {lang==='zh' ? '查看商品一覽' : 'View all products'} <span className="btn-arrow">→</span>
          </button>
        </div>

        <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
          {['ISO 22000','HACCP','SGS','素食認證'].map(b => (
            <span key={b} style={{
              display:'inline-block', padding:'4px 12px',
              background:'rgba(255,255,255,0.72)', backdropFilter:'blur(4px)',
              border:'1px solid rgba(0,0,0,0.1)', borderRadius:999,
              fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:mute, letterSpacing:'0.06em',
            }}>{b}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

// ---- (kept for reference, no longer used by default) ----
const V1HeroCarousel_unused = ({ lang, coral }) => {
  const [current, setCurrent] = React.useState(0);

  const SLIDES = [
    {
      bg: 'linear-gradient(135deg, #0b2818 0%, #183d25 50%, #0e3020 100%)',
      accent: '#5ebb7a',
      eyebrow: { zh: 'NO.1 保健旗艦', en: '#1 Wellness Brand' },
      h: { zh: ['NMN PRO', '細胞逆齡', '由內而外。'], en: ['NMN PRO', 'Cellular', 'Renewal.'] },
      sub: { zh: 'NMN 500mg 高濃度 · 游離型葉黃素 · 每日守護', en: 'NMN 500mg · Free-form Lutein · Daily protection' },
      cta: { zh: '立即選購', en: 'Shop Now' },
      chip1: { zh: '台灣製造', en: 'Made in Taiwan' },
      chip2: { zh: '暢銷榜 No.1', en: 'Bestseller #1' },
      label: 'NMN PRO\n500mg / 30粒',
    },
    {
      bg: 'linear-gradient(135deg, #2c1808 0%, #4a2c14 50%, #3a2010 100%)',
      accent: '#e8a84e',
      eyebrow: { zh: '台灣農產直送', en: 'Taiwan Farm to Table' },
      h: { zh: ['台灣農場', '嚴選食材', '直送到家。'], en: ['Taiwan Farm', 'Premium', 'Direct.'] },
      sub: { zh: '小台灣 Store 嚴選 · 台灣在地農場合作 · 每週新鮮到貨', en: 'Little Taiwan Store · Local farm partners · Fresh weekly arrivals' },
      cta: { zh: '逛小台灣', en: 'Shop Taiwan' },
      chip1: { zh: '小農直送', en: 'Farm Direct' },
      chip2: { zh: '嚴選原料', en: 'Premium' },
      label: 'Little Taiwan\nStore',
    },
    {
      bg: 'linear-gradient(135deg, #182433 0%, #1c3848 50%, #141e2e 100%)',
      accent: '#60b2d2',
      eyebrow: { zh: '養生沖泡品牌', en: 'Wellness Beverages' },
      h: { zh: ['Uhome', '每一杯', '都是關懷。'], en: ['Uhome', 'Every sip', 'with care.'] },
      sub: { zh: '凍檸檬蜂蜜 · 即溶養生系列 · 忙碌生活中的健康時刻', en: 'Frozen lemon honey · Instant wellness series · Healthy moments in your busy day' },
      cta: { zh: '探索 Uhome', en: 'Explore Uhome' },
      chip1: { zh: '凍乾技術', en: 'Freeze-Dried' },
      chip2: { zh: '天然配方', en: 'Natural' },
      label: 'Uhome\n養生沖泡',
    },
    {
      bg: 'linear-gradient(135deg, #1c0b2c 0%, #2c1040 50%, #160824 100%)',
      accent: '#c9a13a',
      eyebrow: { zh: '精品廚房系列', en: 'Premium Kitchen' },
      h: { zh: ['敏利刀具', '30年淬鍊', '廚房之魂。'], en: ['Minli Knives', '30 Years', 'Crafted.'] },
      sub: { zh: '金門高粱鋼原料 · 德製工藝驗收 · 家傳主廚刀首選', en: "Kinmen sorghum steel · German-certified · Chef's knife of choice" },
      cta: { zh: '查看刀具', en: 'View Knives' },
      chip1: { zh: '金門鋼', en: 'Kinmen Steel' },
      chip2: { zh: '精品工藝', en: 'Craftsman' },
      label: 'Minli Knives\n精品刀剪',
    },
  ];

  React.useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % SLIDES.length), 5000);
    return () => clearInterval(t);
  }, []);

  const goPrev = () => setCurrent(c => (c - 1 + SLIDES.length) % SLIDES.length);
  const goNext = () => setCurrent(c => (c + 1) % SLIDES.length);

  return (
    <section style={{ position:'relative', height:'91vh', minHeight:560, overflow:'hidden', background:'#0b2818' }}>

      {/* Slide backgrounds */}
      {SLIDES.map((s, i) => (
        <div key={i} style={{
          position:'absolute', inset:0,
          background: s.bg,
          opacity: i === current ? 1 : 0,
          transition: 'opacity 1.1s ease',
        }} />
      ))}

      {/* Slide content */}
      {SLIDES.map((s, i) => (
        <div key={i} style={{
          position:'absolute', inset:0,
          padding:'0 96px',
          display:'grid', gridTemplateColumns:'1fr 1fr', gap:72, alignItems:'center',
          opacity: i === current ? 1 : 0,
          transform: i === current ? 'translateY(0)' : 'translateY(18px)',
          transition: 'opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s',
          pointerEvents: i === current ? 'auto' : 'none',
        }}>
          {/* Left: text + CTA */}
          <div>
            <div style={{
              fontFamily:"'JetBrains Mono',monospace", fontSize:11, letterSpacing:'0.22em',
              textTransform:'uppercase', color:s.accent, marginBottom:24, opacity:0.9,
            }}>— {s.eyebrow[lang]}</div>
            <h2 style={{
              fontFamily: lang==='zh' ? "'Noto Serif TC',serif" : "'Cormorant Garamond',serif",
              fontWeight: lang==='zh' ? 500 : 400,
              fontSize: lang==='zh' ? 88 : 96,
              lineHeight: 1.03,
              letterSpacing: lang==='zh' ? '0.01em' : '-0.025em',
              color:'#fff', marginBottom:28,
            }}>
              {s.h[lang].map((line, li) => (
                <span key={li} style={{ display:'block', ...(li===1 ? {color:s.accent} : {}) }}>{line}</span>
              ))}
            </h2>
            <p style={{ fontSize:15, lineHeight:1.7, color:'rgba(255,255,255,0.58)', marginBottom:36, maxWidth:440 }}>
              {s.sub[lang]}
            </p>
            <button className="btn" style={{ background:s.accent, color:'#fff', fontSize:14 }}>
              {s.cta[lang]} <span className="btn-arrow">→</span>
            </button>
          </div>

          {/* Right: visual placeholder */}
          <div style={{ display:'flex', justifyContent:'center' }}>
            <div style={{
              position:'relative', width:'100%', maxWidth:500, aspectRatio:'4/3',
              borderRadius:24, overflow:'hidden',
              background:'rgba(255,255,255,0.05)',
              border:'1px solid rgba(255,255,255,0.1)',
              boxShadow:`0 40px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.07)`,
            }}>
              <div style={{
                position:'absolute', inset:0,
                background:`repeating-linear-gradient(135deg, ${s.accent}0c 0 1px, transparent 1px 28px)`,
              }} />
              <div style={{
                position:'absolute', inset:0,
                display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', gap:14,
              }}>
                <div style={{
                  width:72, height:72, borderRadius:20,
                  background:`${s.accent}1a`, border:`1.5px solid ${s.accent}44`,
                  display:'flex', alignItems:'center', justifyContent:'center',
                }}>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={s.accent} strokeWidth="1.5" opacity="0.85">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <path d="M21 15l-5-5L5 21"/>
                  </svg>
                </div>
                <div style={{
                  fontFamily:"'JetBrains Mono',monospace", fontSize:12, letterSpacing:'0.08em',
                  color:`${s.accent}bb`, textAlign:'center', whiteSpace:'pre-line',
                }}>{s.label}</div>
              </div>
              {/* chips */}
              <div style={{
                position:'absolute', top:18, left:18,
                background:'rgba(255,255,255,0.1)', backdropFilter:'blur(8px)',
                border:'1px solid rgba(255,255,255,0.15)', borderRadius:999, padding:'6px 14px',
                fontFamily:"'JetBrains Mono',monospace", fontSize:11, letterSpacing:'0.08em',
                color:'rgba(255,255,255,0.88)', fontWeight:600,
              }}>{s.chip1[lang]}</div>
              <div style={{
                position:'absolute', bottom:18, right:18,
                background:`${s.accent}cc`, borderRadius:999, padding:'6px 14px',
                fontFamily:"'JetBrains Mono',monospace", fontSize:11, letterSpacing:'0.08em',
                color:'#fff', fontWeight:600,
              }}>{s.chip2[lang]}</div>
            </div>
          </div>
        </div>
      ))}

      {/* Prev / Next arrows */}
      {[{ dir:'left', fn:goPrev, icon:'‹' }, { dir:'right', fn:goNext, icon:'›' }].map(btn => (
        <button key={btn.dir} onClick={btn.fn} style={{
          position:'absolute', top:'50%', [btn.dir]:28, transform:'translateY(-50%)',
          width:48, height:48, borderRadius:'50%',
          background:'rgba(255,255,255,0.1)', backdropFilter:'blur(8px)',
          border:'1px solid rgba(255,255,255,0.18)',
          color:'#fff', fontSize:22, cursor:'pointer',
          display:'flex', alignItems:'center', justifyContent:'center',
          zIndex:10, transition:'background .2s',
        }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.22)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
        >{btn.icon}</button>
      ))}

      {/* Dot indicators */}
      <div style={{
        position:'absolute', bottom:32, left:'50%', transform:'translateX(-50%)',
        display:'flex', gap:8, alignItems:'center', zIndex:10,
      }}>
        {SLIDES.map((s, i) => (
          <button key={i} onClick={() => setCurrent(i)} style={{
            width: i===current ? 28 : 8, height:8, borderRadius:999,
            background: i===current ? SLIDES[current].accent : 'rgba(255,255,255,0.3)',
            border:'none', cursor:'pointer', padding:0,
            transition:'all 0.35s ease',
          }} />
        ))}
      </div>

      {/* Slide counter (vertical, right side) */}
      <div style={{
        position:'absolute', right:20, top:'50%', transform:'translateY(-50%)',
        fontFamily:"'JetBrains Mono',monospace", fontSize:10,
        letterSpacing:'0.2em', color:'rgba(255,255,255,0.35)',
        writingMode:'vertical-rl', textOrientation:'mixed',
        zIndex:10,
      }}>
        {String(current+1).padStart(2,'0')} — {String(SLIDES.length).padStart(2,'0')}
      </div>

      {/* Bottom progress bar */}
      <div style={{ position:'absolute', bottom:0, left:0, right:0, height:2, background:'rgba(255,255,255,0.08)', zIndex:10 }}>
        <div key={current} style={{
          height:'100%',
          background: SLIDES[current].accent,
          width:'100%',
          transformOrigin:'left',
          animation:'carouselBar 5s linear forwards',
        }} />
      </div>
    </section>
  );
};

window.V1 = V1;

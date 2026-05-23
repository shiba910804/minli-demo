// mobile-about-brands.jsx — mobile versions of the About page + four brand pages.
// Reuses M_TOKENS, MTopBar, MMenu, MEyebrow, MobileFooter from mobile-home/mobile-pages.

const MB = window.M_TOKENS;

// ============= MOBILE ABOUT =============
const MobileAbout = () => {
  const [lang, setLang] = React.useState('zh');
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [patentTab, setPatentTab] = React.useState('tw');
  const totalPatents = PATENTS.tw.length + PATENTS.jp.length + PATENTS.de.length;

  return (
    <div style={{
      position:'relative', height:'100%', overflow:'auto', background: MB.paper,
      fontFamily:"'Manrope','Noto Sans TC',sans-serif",
    }}>
      <MTopBar lang={lang} setLang={setLang} onMenu={() => setMenuOpen(true)} />
      <MMenu open={menuOpen} onClose={() => setMenuOpen(false)} lang={lang} setLang={setLang} />

      <div style={{ padding:'10px 22px', fontSize:11, color: MB.mute, borderBottom:`1px solid rgba(0,0,0,0.05)`, fontFamily: MB.mono, letterSpacing:'0.04em' }}>
        {lang==='zh' ? '首頁 /' : 'Home /'} <span style={{ color: MB.ink }}>{lang==='zh' ? '公司簡介' : 'About'}</span>
      </div>

      {/* HERO */}
      <section style={{ padding:'36px 22px 48px' }}>
        <MEyebrow>{lang==='zh' ? '公司簡介 · ABOUT' : 'ABOUT MINLI'}</MEyebrow>
        <h1 style={{ marginTop:16, fontFamily: MB.serifZh, fontSize: lang==='zh' ? 56 : 60, fontWeight:500, lineHeight:1.0, color: MB.ink }}>
          {lang==='zh' ? <>健康、美味、<br/><span style={{ color: MB.accent }}>實用。</span></> : <>Healthy.<br/>Delicious.<br/><span style={{ fontFamily: MB.serifEn, fontStyle:'italic', color: MB.accent }}>Useful.</span></>}
        </h1>
        <p style={{ marginTop:24, fontSize:15, lineHeight:1.7, color: MB.mute }}>
          {lang==='zh'
            ? '敏利國際秉持「健康、美味、實用」三大核心價值——三十年來，從一把刀，到一杯茶，把台灣家庭餐桌的每一個環節都做到最好。'
            : 'Built on three values — healthy, delicious, useful. For three decades, from a blade to a teacup, we have cared for every link of the Taiwanese table.'}
        </p>
      </section>

      {/* Company plate */}
      <section style={{ padding:'0 22px 48px' }}>
        <div style={{ background: MB.cream, padding:24, borderRadius:14, borderLeft:`3px solid ${MB.accent}` }}>
          <div style={{ fontFamily: MB.mono, fontSize:10, letterSpacing:'0.2em', color: MB.accent, marginBottom:14 }}>
            {lang==='zh' ? '公司資料' : 'CORPORATE FILING'}
          </div>
          <div style={{ fontFamily: MB.serifZh, fontSize:20, fontWeight:600, color: MB.ink, lineHeight:1.2 }}>
            {COMPANY.registeredZh}
          </div>
          <div style={{ fontFamily: MB.serifEn, fontStyle:'italic', fontSize:13, color: MB.mute, marginTop:4 }}>
            {COMPANY.registeredEn}
          </div>
          <div style={{ marginTop:18, display:'flex', flexDirection:'column', gap:10 }}>
            {[
              { l:{zh:'總部',en:'HQ'},       v: COMPANY.hq[lang] },
              { l:{zh:'業務範圍',en:'Markets'}, v: COMPANY.markets[lang] },
              { l:{zh:'諮詢專線',en:'Hotline'}, v: COMPANY.hotline },
              { l:{zh:'食品登錄',en:'Food reg'}, v: 'F-278965031-00000-3' },
            ].map((r, i) => (
              <div key={i} style={{ paddingBottom:8, borderBottom:`1px dotted rgba(0,0,0,0.1)`, display:'flex', justifyContent:'space-between', gap:14 }}>
                <span style={{ fontFamily: MB.mono, fontSize:9, color: MB.mute, letterSpacing:'0.14em' }}>{r.l[lang].toUpperCase()}</span>
                <span style={{ fontSize:12, color: MB.ink, fontFamily: MB.serifZh, fontWeight:500, textAlign:'right' }}>{r.v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HQ image */}
      <section style={{ padding:'0 22px 56px' }}>
        <ImagePH label={"HEADQUARTERS\n敏利總部 · 桃園"}
          style={{ height: 220, borderRadius:14, '--ph-bg':'#d8cdb8', '--ph-fg':'#6b6258' }} />
      </section>

      {/* VALUES */}
      <section style={{ padding:'0 22px 48px' }}>
        <MEyebrow>{lang==='zh' ? '理念 · 產品線 · 國際' : 'PHILOSOPHY · LINES · MARKETS'}</MEyebrow>
        <h2 style={{ marginTop:16, fontFamily: MB.serifZh, fontSize:30, fontWeight:500, color: MB.ink, lineHeight:1.15, marginBottom:32 }}>
          {lang==='zh' ? '美好的生活，從優質產品開始。' : 'A better life begins with a better product.'}
        </h2>

        <div style={{ display:'flex', flexDirection:'column', gap:24 }}>
          {[
            { n:'I.', t:{zh:'公司理念',en:'Philosophy'},
              d:{zh:'秉持「健康、美味、實用」核心價值，致力於設計與生產符合現代消費者需求的高品質產品。',
                  en:'Built on three values — healthy, delicious, useful. We design for the modern consumer.'} },
            { n:'II.', t:{zh:'主要產品線',en:'Product Lines'},
              d:{zh:'天然食品、機能保健、家居用品，並提供 OEM/ODM 客製化開發。',
                  en:'Natural food, functional supplements, home goods, and OEM/ODM development.'} },
            { n:'III.', t:{zh:'國際布局',en:'Global Reach'},
              d:{zh:'產品行銷至亞洲、美洲、歐洲及中東等多國市場。',
                  en:'Products reach Asia, the Americas, Europe and the Middle East.'} },
          ].map((v, i) => (
            <div key={i} style={{ borderTop:`1px solid rgba(0,0,0,0.12)`, paddingTop:16 }}>
              <div style={{ fontFamily: MB.serifEn, fontStyle:'italic', fontSize:36, color: MB.accent, lineHeight:1, fontWeight:500 }}>{v.n}</div>
              <h3 style={{ marginTop:10, fontFamily: MB.serifZh, fontSize:22, fontWeight:600, color: MB.ink, marginBottom:8 }}>{v.t[lang]}</h3>
              <p style={{ fontSize:13, lineHeight:1.7, color: MB.mute }}>{v.d[lang]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section style={{ padding:'48px 22px', background: MB.cream }}>
        <MEyebrow>{lang==='zh' ? '品質認證' : 'CERTIFICATIONS'}</MEyebrow>
        <h2 style={{ marginTop:16, fontFamily: MB.serifZh, fontSize:30, fontWeight:500, color: MB.ink, lineHeight:1.15, marginBottom: 28 }}>
          {lang==='zh' ? '一張一張，把信任公開。' : 'We publish our trust.'}
        </h2>
        <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
          {CERTS_FULL.map((c, i) => (
            <div key={i} style={{ background: MB.paper, borderRadius:12, padding:18 }}>
              <div style={{ display:'grid', gridTemplateColumns:'80px 1fr', gap:14, alignItems:'center' }}>
                <ImagePH label={c.code.split(' ')[0]} style={{ height: 80, borderRadius:6, '--ph-bg':'#e6dccb', '--ph-fg':'#7a6c58' }} />
                <div>
                  <div style={{ fontFamily: MB.mono, fontSize:9, color: MB.accent, letterSpacing:'0.16em' }}>CERT {String(i+1).padStart(2,'0')}</div>
                  <h3 style={{ fontFamily: MB.serifZh, fontSize:16, fontWeight:600, color: MB.ink, marginTop:4, lineHeight:1.2 }}>{c.code}</h3>
                  <p style={{ fontSize:11, color: MB.mute, marginTop:4, lineHeight:1.4 }}>{c.scope[lang] || c.scope.zh}</p>
                </div>
              </div>
              {c.no && (
                <div style={{ marginTop:14, paddingTop:10, borderTop:`1px solid rgba(0,0,0,0.06)`, display:'flex', justifyContent:'space-between', fontSize:10, fontFamily: MB.mono, color: MB.mute }}>
                  <span>№ {c.no}</span>
                  {c.valid && <span>VALID {c.valid}</span>}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* PATENTS */}
      <section style={{ padding:'48px 22px', background: MB.dark, color: MB.paper }}>
        <MEyebrow color={MB.goldAccent} dark>{lang==='zh' ? '智慧財產' : 'PATENTS'}</MEyebrow>
        <h2 style={{ marginTop:16, fontFamily: MB.serifZh, fontSize:30, fontWeight:500, lineHeight:1.1, marginBottom:18 }}>
          {lang==='zh' ? <>專利，<br/>是我們對品質的證據。</> : <>Patents.<br/>Our quietest argument.</>}
        </h2>
        <p style={{ fontSize:13, lineHeight:1.7, color:'rgba(250,248,244,0.7)', marginBottom: 24 }}>
          {lang==='zh'
            ? `敏利持有 ${totalPatents} 項台灣、日本、德國新型專利，橫跨刀具結構工法與石墨烯機能材料兩個技術線。`
            : `Minli holds ${totalPatents} utility-model patents across Taiwan, Japan and Germany — in blade engineering and graphene functional materials.`}
        </p>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:8, marginBottom:24 }}>
          {[
            { k:'TW', n: PATENTS.tw.length },
            { k:'JP', n: PATENTS.jp.length },
            { k:'DE', n: PATENTS.de.length },
          ].map((m, i) => (
            <div key={i} style={{ padding:'14px 10px', background:'rgba(255,255,255,0.04)', borderRadius:8 }}>
              <div style={{ fontFamily: MB.serifEn, fontStyle:'italic', fontSize:36, color: MB.goldAccent, lineHeight:1, fontWeight:500 }}>{m.n}</div>
              <div style={{ fontFamily: MB.mono, fontSize:10, color:'rgba(250,248,244,0.7)', letterSpacing:'0.14em', marginTop:4 }}>{m.k}</div>
            </div>
          ))}
        </div>

        {/* tabs */}
        <div style={{ display:'flex', gap:0, borderBottom:`1px solid rgba(250,248,244,0.2)`, marginBottom:14 }}>
          {[
            { id:'tw', label: lang==='zh' ? '台灣' : 'TW' },
            { id:'jp', label: lang==='zh' ? '日本' : 'JP' },
            { id:'de', label: lang==='zh' ? '德國' : 'DE' },
          ].map(tab => (
            <button key={tab.id} onClick={() => setPatentTab(tab.id)} style={{
              flex:1, padding:'10px 0', border:'none', background:'transparent',
              fontFamily: MB.serifZh, fontSize:14, fontWeight: patentTab===tab.id ? 600 : 400,
              color: patentTab===tab.id ? MB.goldAccent : 'rgba(250,248,244,0.5)',
              borderBottom: patentTab===tab.id ? `2px solid ${MB.goldAccent}` : '2px solid transparent',
              marginBottom: -1,
            }}>
              {tab.label} <span style={{ fontFamily: MB.mono, fontSize:10 }}>· {PATENTS[tab.id].length}</span>
            </button>
          ))}
        </div>

        <div style={{ display:'flex', flexDirection:'column' }}>
          {PATENTS[patentTab].map(p => (
            <div key={p.no} style={{ padding:'14px 0', borderBottom:`1px solid rgba(250,248,244,0.12)` }}>
              <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:5 }}>
                <span style={{
                  padding:'2px 7px', fontFamily: MB.mono, fontSize:9, letterSpacing:'0.12em',
                  background: p.cat === 'blade' ? 'rgba(201,161,58,0.18)' : 'rgba(232,180,138,0.18)',
                  color: p.cat === 'blade' ? MB.goldAccent : '#e8b48a', borderRadius:3,
                }}>{p.cat === 'blade' ? (lang==='zh' ? '刀具' : 'BLADE') : (lang==='zh' ? '機能' : 'WELLNESS')}</span>
                <span style={{ fontFamily: MB.mono, fontSize:10, color: MB.goldAccent, letterSpacing:'0.1em' }}>
                  {patentTab === 'tw' ? '新型' : patentTab === 'jp' ? '登録' : 'Nr.'} {p.no}
                </span>
              </div>
              <div style={{ fontFamily: MB.serifZh, fontSize:13, color: MB.paper, lineHeight:1.4 }}>{p[lang] || p.zh}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TRADEMARKS */}
      <section style={{ padding:'48px 22px' }}>
        <MEyebrow>{lang==='zh' ? '註冊商標' : 'TRADEMARKS'}</MEyebrow>
        <h2 style={{ marginTop:16, fontFamily: MB.serifZh, fontSize:30, fontWeight:500, color: MB.ink, lineHeight:1.1, marginBottom: 18 }}>
          {lang==='zh' ? '名字，也是資產。' : <>A name<br/><span style={{ fontFamily: MB.serifEn, fontStyle:'italic' }}>is an asset.</span></>}
        </h2>
        <p style={{ fontSize:13, lineHeight:1.7, color: MB.mute, marginBottom: 24 }}>
          {lang==='zh'
            ? `敏利、小台灣、老澤源三個品牌共完成 ${TRADEMARKS.length} 件商標註冊。`
            : `${TRADEMARKS.length} trademark registrations across Minli, Little Taiwan Store and Lao Ze Yuan.`}
        </p>

        <div style={{ display:'flex', flexDirection:'column', gap: 14 }}>
          {['minli','little-taiwan','laozeyuan'].map(brandId => {
            const b = BRANDS.find(x => x.id === brandId);
            const marks = TRADEMARKS.filter(m => m.brand === brandId);
            return (
              <div key={brandId} style={{ background: MB.cream, borderRadius:12, padding:18 }}>
                <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom: 14 }}>
                  <div style={{ width:5, height:24, background: b.accent }} />
                  <div>
                    <div style={{ fontFamily: MB.serifZh, fontSize:17, fontWeight:600, color: MB.ink, lineHeight:1 }}>
                      {lang==='zh' ? b.name : b.nameEn}
                    </div>
                    <div style={{ fontFamily: MB.mono, fontSize:9, color: MB.mute, letterSpacing:'0.14em', marginTop:3 }}>
                      {marks.length} {lang==='zh' ? '件' : 'marks'}
                    </div>
                  </div>
                </div>
                <div style={{ display:'flex', flexDirection:'column' }}>
                  {marks.map((m, i) => (
                    <div key={m.no} style={{ padding:'8px 0', borderTop: i === 0 ? `1px solid rgba(0,0,0,0.08)` : 'none', borderBottom:`1px solid rgba(0,0,0,0.08)`, display:'grid', gridTemplateColumns:'34px 1fr 40px', gap:10, alignItems:'center' }}>
                      <span style={{ fontFamily: MB.mono, fontSize:9, color: b.accent, letterSpacing:'0.14em' }}>
                        {m.country.zh === '台灣' ? 'TW' : 'SG'}
                      </span>
                      <span style={{ fontFamily: MB.mono, fontSize:10, color: MB.ink }}>№ {m.no}</span>
                      <span style={{ fontSize:10, color: MB.mute, textAlign:'right' }}>{m.year}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* MISSION */}
      <section style={{ padding:'56px 22px', background: MB.cream }}>
        <MEyebrow>{lang==='zh' ? '企業使命' : 'OUR MISSION'}</MEyebrow>
        <h2 style={{ marginTop:16, fontFamily: MB.serifZh, fontSize: lang==='zh' ? 38 : 42, fontWeight:500, color: MB.ink, lineHeight:1.05 }}>
          {lang==='zh'
            ? <>讓世界變得<br/><span style={{ color: MB.accent }}>更健康，更便利，也更美味。</span></>
            : <>To make the world<br/><span style={{ color: MB.accent, fontStyle:'italic', fontFamily: MB.serifEn }}>healthier. simpler. more delicious.</span></>}
        </h2>
        <p style={{ marginTop:18, fontSize:14, lineHeight:1.75, color: MB.mute, fontFamily: lang==='zh' ? MB.serifZh : MB.serifEn, fontStyle: lang==='en' ? 'italic' : 'normal' }}>
          {lang==='zh'
            ? '敏利不僅是貿易商，更是健康生活的推動者——我們希望讓每一個家庭，都能輕鬆享受優質產品所帶來的美好。'
            : 'Not just a trader; a quiet partner in the everyday well-being of families around the world.'}
        </p>
      </section>

      <MobileFooter lang={lang} />
    </div>
  );
};

// ============= Shared mobile brand hero block =============
const MobileBrandHero = ({ b, lang, idx, chapter, motto, mottoEn, ink }) => (
  <section style={{
    padding:'40px 22px 48px',
    background: b.bg, color: ink || (b.fg || MB.ink), position:'relative', overflow:'hidden',
  }}>
    <div style={{ position:'absolute', top:24, right:-10, opacity:0.15,
      fontFamily: MB.serifEn, fontStyle:'italic', fontSize:160, color: b.accent, lineHeight:0.85, pointerEvents:'none' }}>
      {String(idx).padStart(2,'0')}
    </div>

    <div style={{ position:'relative' }}>
      <MEyebrow color={b.accent} dark={!!b.fg}>{chapter}</MEyebrow>
      <h1 style={{
        marginTop:18,
        fontFamily: MB.serifZh, fontWeight:600,
        fontSize: lang==='zh' ? 80 : 64, lineHeight:0.95, color: ink || (b.fg || MB.ink),
        letterSpacing: lang==='zh' ? '0.02em' : '-0.02em',
      }}>{lang==='zh' ? b.name : b.nameEn}</h1>
      <p style={{ marginTop:18, fontSize: 16, lineHeight:1.55,
        color: b.fg ? 'rgba(255,255,255,0.78)' : MB.mute,
        fontFamily: lang==='zh' ? MB.serifZh : MB.serifEn,
        fontStyle: lang==='en' ? 'italic' : 'normal',
      }}>
        {lang==='zh' ? `「${motto}」` : `"${mottoEn}"`}
      </p>
    </div>
  </section>
);

// ============= Shared mobile product list =============
const MobileBrandProductList = ({ b, products, title, lang }) => (
  <section style={{ padding:'48px 22px', background: MB.paper }}>
    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom: 22 }}>
      <h2 style={{ fontFamily: MB.serifZh, fontSize:26, fontWeight:500, color: MB.ink }}>{title}</h2>
      <span style={{ fontSize:11, color: MB.mute, fontFamily: MB.mono }}>{products.length} {lang==='zh' ? '件' : 'items'}</span>
    </div>
    <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
      {products.map((p, i) => (
        <article key={p.id} style={{ background: MB.cream, borderRadius:12, padding:14, position:'relative' }}>
          {p.badge && (
            <div style={{ position:'absolute', top:22, left:22, zIndex:2, background: b.accent, color:'#fff', padding:'2px 6px', borderRadius:3, fontSize:8, letterSpacing:'0.12em', fontFamily: MB.mono }}>{p.badge[lang]}</div>
          )}
          <ProductPH label={p.zh.slice(0,6)} w="100%" h={140} bg="#e6dccb" fg="#7a6c58" style={{ borderRadius:8 }} />
          <div style={{ marginTop:10, fontFamily: MB.mono, fontSize:9, color: b.accent, letterSpacing:'0.14em' }}>
            NO.{String(i+1).padStart(2,'0')}
          </div>
          <h3 style={{ marginTop:4, fontFamily: MB.serifZh, fontSize:13, fontWeight:600, color: MB.ink, lineHeight:1.25, minHeight:34 }}>{p[lang]}</h3>
          <div style={{ marginTop:8, paddingTop:8, borderTop:`1px solid rgba(0,0,0,0.06)` }}>
            <span style={{ fontFamily: MB.serifEn, fontStyle:'italic', fontSize:14, color: MB.ink }}>{p.price}</span>
          </div>
        </article>
      ))}
    </div>
  </section>
);

// ============= MOBILE 敏利 =============
const MobileMinli = () => {
  const [lang, setLang] = React.useState('zh');
  const [menuOpen, setMenuOpen] = React.useState(false);
  const b = BRANDS.find(x => x.id === 'minli');
  const products = PRODUCTS.filter(p => p.brand === 'minli');

  return (
    <div style={{ position:'relative', height:'100%', overflow:'auto', background: MB.paper, fontFamily:"'Manrope','Noto Sans TC',sans-serif" }}>
      <MTopBar lang={lang} setLang={setLang} onMenu={() => setMenuOpen(true)} dark />
      <MMenu open={menuOpen} onClose={() => setMenuOpen(false)} lang={lang} setLang={setLang} />

      <div style={{ padding:'10px 22px', fontSize:11, color: 'rgba(246,239,227,0.6)', background: b.bg, fontFamily: MB.mono, letterSpacing:'0.04em' }}>
        {lang==='zh' ? '首頁 / 品牌 /' : 'Home / Brands /'} <span style={{ color: b.fg }}>{lang==='zh' ? b.name : b.nameEn}</span>
      </div>

      <MobileBrandHero b={b} lang={lang} idx={1}
        chapter={lang==='zh' ? '品牌列傳 · 第一章' : 'CH.I'}
        motto="我們的母品牌——刀剪起家，三十年磨一件事。"
        mottoEn="Our flagship — from a blade. One thing, refined for thirty years."
      />

      {/* hero product image */}
      <section style={{ padding:'0 22px 0', background: b.bg }}>
        <ImagePH label={"BRAND HERO\n刀具家族 + OEM"} style={{ height: 320, borderRadius:14, '--ph-bg':'#241d17', '--ph-fg':'#8a7a64' }} />
      </section>

      {/* stats strip */}
      <section style={{ padding:'24px 22px 36px', background: b.bg, color: b.fg }}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:14 }}>
          {[
            { k:'8',  v:{zh:'台灣專利',en:'TW patents'} },
            { k:'5',  v:{zh:'海外專利',en:'overseas'} },
            { k:'9',  v:{zh:'註冊商標',en:'trademarks'} },
          ].map((m, i) => (
            <div key={i} style={{ paddingTop:14, borderTop:`1px solid rgba(246,239,227,0.2)` }}>
              <div style={{ fontFamily: MB.serifEn, fontStyle:'italic', fontWeight:500, fontSize:30, color: MB.goldAccent, lineHeight:1 }}>{m.k}</div>
              <div style={{ marginTop:4, fontSize:10, color:'rgba(246,239,227,0.65)' }}>{m.v[lang]}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TWO PILLARS */}
      <section style={{ padding:'48px 22px', background: MB.cream }}>
        <MEyebrow>{lang==='zh' ? '兩條技術線' : 'TWO STACKS'}</MEyebrow>
        <h2 style={{ marginTop:16, fontFamily: MB.serifZh, fontSize:30, fontWeight:500, color: MB.ink, lineHeight:1.15, marginBottom: 28 }}>
          {lang==='zh' ? '從一把刀，到一塊機能貼布。' : 'From a blade to a patch.'}
        </h2>

        {[
          { i:'01', title:{zh:'刀具結構工法',en:'Blade engineering'},
            desc:{zh:'四項台灣專利、三項日本、一項德國——專利波浪刃、鉋鑽式、削槽式刀具結構。',
                  en:'4 TW, 3 JP, 1 DE patents — wave-edge, drill-rasp, groove blade structures.'},
            tags: PATENTS.tw.filter(p => p.cat==='blade').slice(0,4).map(p => `TW ${p.no}`) },
          { i:'02', title:{zh:'石墨烯 · 量子機能',en:'Graphene · Quantum'},
            desc:{zh:'四項台灣專利、一項日本、一項德國——石墨烯、量子太赫茲、負離子、磁力微電流。',
                  en:'4 TW, 1 JP, 1 DE patents — graphene, terahertz, ions, micro-current.'},
            tags: PATENTS.tw.filter(p => p.cat==='wellness').slice(0,4).map(p => `TW ${p.no}`) },
        ].map(stack => (
          <div key={stack.i} style={{ background: MB.paper, borderRadius:14, padding:20, marginBottom:14 }}>
            <div style={{ fontFamily: MB.mono, fontSize:10, letterSpacing:'0.2em', color: b.accent }}>{stack.i}</div>
            <h3 style={{ marginTop:6, fontFamily: MB.serifZh, fontSize:22, fontWeight:600, color: MB.ink, marginBottom:10 }}>{stack.title[lang]}</h3>
            <p style={{ fontSize:13, lineHeight:1.65, color: MB.mute, marginBottom:14 }}>{stack.desc[lang]}</p>
            <div style={{ display:'flex', flexWrap:'wrap', gap:5 }}>
              {stack.tags.map((t, i) => <span key={i} style={{ padding:'4px 8px', borderRadius:999, fontSize:10, background: MB.cream, color: MB.ink, fontFamily: MB.mono }}>{t}</span>)}
            </div>
          </div>
        ))}
      </section>

      <MobileBrandProductList b={b} products={products} title={lang==='zh' ? '敏利精選' : 'Minli essentials'} lang={lang} />

      {/* OEM */}
      <section style={{ padding:'48px 22px', background: MB.dark, color: MB.paper }}>
        <MEyebrow color={MB.goldAccent} dark>{lang==='zh' ? '客製化服務' : 'OEM / ODM'}</MEyebrow>
        <h2 style={{ marginTop:16, fontFamily: MB.serifZh, fontSize:30, fontWeight:500, lineHeight:1.1, marginBottom: 18 }}>
          {lang==='zh' ? <>OEM / ODM<br/>產品開發。</> : <>OEM / ODM<br/>development.</>}
        </h2>
        <p style={{ fontSize:13, lineHeight:1.75, color:'rgba(250,248,244,0.7)', marginBottom: 22 }}>
          {lang==='zh' ? '從配方到包裝、首樣到量產。雙國際認證工廠。' : 'Formulation to packaging, prototype to volume. Dual-certified facility.'}
        </p>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10 }}>
          {['配方研發 / Formulation','生產製造 / Manufacturing','包裝設計 / Packaging','國際物流 / Logistics'].map((c, i) => (
            <div key={i} style={{ padding:14, background:'rgba(255,255,255,0.04)', borderRadius:8, border:'1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontFamily: MB.serifEn, fontStyle:'italic', fontSize:24, color: MB.goldAccent, fontWeight:500, lineHeight:1 }}>0{i+1}</div>
              <div style={{ marginTop:8, fontFamily: MB.serifZh, fontSize:13, fontWeight:600 }}>{c.split(' / ')[lang === 'zh' ? 0 : 1]}</div>
            </div>
          ))}
        </div>
        <button className="btn" style={{ marginTop:22, background: MB.goldAccent, color: MB.dark, justifyContent:'center', width:'100%', padding:'14px 18px' }}>
          {lang==='zh' ? '洽詢代工服務' : 'Discuss OEM/ODM'} →
        </button>
      </section>

      <MobileFooter lang={lang} />
    </div>
  );
};

// ============= MOBILE Little Taiwan =============
const MobileLittleTaiwan = () => {
  const [lang, setLang] = React.useState('zh');
  const [menuOpen, setMenuOpen] = React.useState(false);
  const b = BRANDS.find(x => x.id === 'little-taiwan');
  const products = PRODUCTS.filter(p => p.brand === 'little-taiwan');

  const categories = [
    { key:'energy',   zh:'活力．代謝',   en:'Energy', ids:['lt-nmn','lt-turmeric','lt-roselle','lt-enzyme'] },
    { key:'beauty',   zh:'美麗．保養',   en:'Beauty',   ids:['lt-manuka','lt-propolis','lt-pumpkin'] },
    { key:'strength', zh:'底子．強健',   en:'Strength', ids:['lt-antrodia','lt-ostrich','lt-calcium','lt-lutein','lt-inca'] },
  ];

  return (
    <div style={{ position:'relative', height:'100%', overflow:'auto', background: MB.paper, fontFamily:"'Manrope','Noto Sans TC',sans-serif" }}>
      <MTopBar lang={lang} setLang={setLang} onMenu={() => setMenuOpen(true)} />
      <MMenu open={menuOpen} onClose={() => setMenuOpen(false)} lang={lang} setLang={setLang} />

      <div style={{ padding:'10px 22px', fontSize:11, color: MB.mute, borderBottom:`1px solid rgba(0,0,0,0.05)`, fontFamily: MB.mono, letterSpacing:'0.04em' }}>
        {lang==='zh' ? '首頁 / 品牌 /' : 'Home / Brands /'} <span style={{ color: MB.ink }}>{lang==='zh' ? b.name : b.nameEn}</span>
      </div>

      <MobileBrandHero b={b} lang={lang} idx={2}
        chapter={lang==='zh' ? '品牌列傳 · 第二章' : 'CH.II'}
        motto="把一座島嶼的養分，裝進日常裡。"
        mottoEn="The nourishment of an island — packed for the everyday."
      />

      <section style={{ padding:'0 22px 0', background: b.bg }}>
        <ImagePH label={"INGREDIENTS\n台灣原料拼貼"} style={{ height: 220, borderRadius:14, '--ph-bg':'#f7e8d6', '--ph-fg':'#a07852' }} />
      </section>

      <section style={{ padding:'24px 22px 40px', background: b.bg }}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:14 }}>
          {[
            { k: `${products.length}`, v:{zh:'品項',en:'SKUs'} },
            { k:'7', v:{zh:'類別',en:'categories'} },
            { k:'100%', v:{zh:'台灣製',en:'Taiwan'} },
          ].map((m, i) => (
            <div key={i} style={{ paddingTop:14, borderTop:`1px solid rgba(0,0,0,0.15)` }}>
              <div style={{ fontFamily: MB.serifEn, fontStyle:'italic', fontWeight:500, fontSize:28, color: b.accent, lineHeight:1 }}>{m.k}</div>
              <div style={{ marginTop:4, fontSize:10, color: MB.mute }}>{m.v[lang]}</div>
            </div>
          ))}
        </div>
      </section>

      {/* THREE CATEGORIES */}
      <section style={{ padding:'48px 22px', background: MB.paper }}>
        <MEyebrow>{lang==='zh' ? '三種日常的營養' : 'THREE PATHS'}</MEyebrow>
        <h2 style={{ marginTop:16, fontFamily: MB.serifZh, fontSize:30, fontWeight:500, color: MB.ink, lineHeight:1.15, marginBottom:24 }}>
          {lang==='zh' ? '你的身體，需要什麼？' : 'What does your body ask for?'}
        </h2>
        <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
          {categories.map((cat, i) => {
            const catProducts = products.filter(p => cat.ids.includes(p.id));
            return (
              <div key={cat.key} style={{ background: MB.cream, borderRadius:14, padding:20 }}>
                <div style={{ display:'flex', alignItems:'baseline', gap:14, marginBottom:14 }}>
                  <div style={{ fontFamily: MB.serifEn, fontStyle:'italic', fontSize:32, color: b.accent, lineHeight:1, fontWeight:500 }}>0{i+1}</div>
                  <h3 style={{ fontFamily: MB.serifZh, fontSize:20, fontWeight:600, color: MB.ink }}>{cat[lang]}</h3>
                </div>
                <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:0, borderTop:`1px solid rgba(0,0,0,0.1)` }}>
                  {catProducts.map(p => (
                    <li key={p.id} style={{ padding:'10px 0', borderBottom:`1px solid rgba(0,0,0,0.1)`, display:'flex', justifyContent:'space-between' }}>
                      <span style={{ fontFamily: MB.serifZh, fontSize:12, color: MB.ink }}>{p[lang]}</span>
                      <span style={{ fontFamily: MB.mono, fontSize:10, color: MB.mute }}>{p.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <MobileBrandProductList b={b} products={products} title={lang==='zh' ? '全部商品' : 'All products'} lang={lang} />

      <MobileFooter lang={lang} />
    </div>
  );
};

// ============= MOBILE Junda =============
const MobileJunda = () => {
  const [lang, setLang] = React.useState('zh');
  const [menuOpen, setMenuOpen] = React.useState(false);
  const b = BRANDS.find(x => x.id === 'junda');
  const products = PRODUCTS.filter(p => p.brand === 'junda');

  return (
    <div style={{ position:'relative', height:'100%', overflow:'auto', background: MB.paper, fontFamily:"'Manrope','Noto Sans TC',sans-serif" }}>
      <MTopBar lang={lang} setLang={setLang} onMenu={() => setMenuOpen(true)} />
      <MMenu open={menuOpen} onClose={() => setMenuOpen(false)} lang={lang} setLang={setLang} />

      <div style={{ padding:'10px 22px', fontSize:11, color: MB.mute, borderBottom:`1px solid rgba(0,0,0,0.05)`, fontFamily: MB.mono, letterSpacing:'0.04em' }}>
        {lang==='zh' ? '首頁 / 品牌 /' : 'Home / Brands /'} <span style={{ color: MB.ink }}>{lang==='zh' ? b.name : b.nameEn}</span>
      </div>

      <MobileBrandHero b={b} lang={lang} idx={3}
        chapter={lang==='zh' ? '品牌列傳 · 第三章' : 'CH.III'}
        motto="為台灣家庭設計的鍋具，與敏利的刀，是同一張餐桌的兩面。"
        mottoEn="Cookware made for Taiwan. Two sides of the same table."
      />

      <section style={{ padding:'0 22px 36px', background: b.bg }}>
        <ImagePH label={"PAN HERO\n平底鍋特寫"} style={{ height: 360, borderRadius:14, '--ph-bg':'#fce8e3', '--ph-fg':'#a85248' }} />
      </section>

      {/* PAIRING */}
      <section style={{ padding:'48px 22px', background: MB.cream }}>
        <MEyebrow>{lang==='zh' ? '完美搭配' : 'BETTER TOGETHER'}</MEyebrow>
        <h2 style={{ marginTop:16, fontFamily: MB.serifZh, fontSize:30, fontWeight:500, color: MB.ink, lineHeight:1.15, marginBottom: 18 }}>
          {lang==='zh' ? <>一只 Junda 平底鍋，<br/>一把敏利主廚刀。</> : <>One Junda pan,<br/>one Minli knife.</>}
        </h2>
        <p style={{ fontSize:14, lineHeight:1.7, color: MB.mute, marginBottom: 22 }}>
          {lang==='zh'
            ? '台灣家庭最基本的兩件廚具。Junda 鍋具系列維持與敏利刀剪相同的品管標準。'
            : 'The two essentials of a Taiwanese kitchen. Same standard as our blades.'}
        </p>
        <ImagePH label={"PAIRING\n鍋具 + 刀具情境"} style={{ height: 240, borderRadius:14, '--ph-bg':'#f4e1dc', '--ph-fg':'#a85248' }} />
        <button className="btn" style={{ marginTop:22, background: b.accent, color:'#fff', justifyContent:'center', width:'100%', padding:'14px 18px' }}>
          {lang==='zh' ? '搭配優惠' : 'See the bundle'} →
        </button>
      </section>

      <MobileBrandProductList b={b} products={products} title={lang==='zh' ? 'Junda 系列' : 'Junda collection'} lang={lang} />

      <MobileFooter lang={lang} />
    </div>
  );
};

// ============= MOBILE Uhome =============
const MobileUhome = () => {
  const [lang, setLang] = React.useState('zh');
  const [menuOpen, setMenuOpen] = React.useState(false);
  const b = BRANDS.find(x => x.id === 'uhome');
  const products = PRODUCTS.filter(p => p.brand === 'uhome');

  const moments = [
    { p: products[0], when:{zh:'早晨醒來',en:'Just woken up'},  why:{zh:'空腹一杯 · 醒胃',en:'Empty stomach · awaken'} },
    { p: products[1], when:{zh:'下午三點',en:'Three p.m.'},      why:{zh:'嘴饞 · 撐到晚餐',en:'Craving · until dinner'} },
    { p: products[2], when:{zh:'解膩飯後',en:'After a meal'},   why:{zh:'去油 · 清爽',en:'Refresh'} },
    { p: products[3], when:{zh:'生理日前',en:'Before period'},   why:{zh:'四物 · 溫暖',en:'Si-Wu · warming'} },
  ];

  return (
    <div style={{ position:'relative', height:'100%', overflow:'auto', background: MB.paper, fontFamily:"'Manrope','Noto Sans TC',sans-serif" }}>
      <MTopBar lang={lang} setLang={setLang} onMenu={() => setMenuOpen(true)} />
      <MMenu open={menuOpen} onClose={() => setMenuOpen(false)} lang={lang} setLang={setLang} />

      <div style={{ padding:'10px 22px', fontSize:11, color: MB.mute, borderBottom:`1px solid rgba(0,0,0,0.05)`, fontFamily: MB.mono, letterSpacing:'0.04em' }}>
        {lang==='zh' ? '首頁 / 品牌 /' : 'Home / Brands /'} <span style={{ color: MB.ink }}>{lang==='zh' ? b.name : b.nameEn}</span>
      </div>

      <MobileBrandHero b={b} lang={lang} idx={4}
        chapter={lang==='zh' ? '品牌列傳 · 第四章' : 'CH.IV'}
        motto="忙日子裡的一杯，溫柔到自己。"
        mottoEn="A cup in a busy day. Kindness, to yourself."
      />

      <section style={{ padding:'0 22px 36px', background: b.bg }}>
        <ImagePH label={"HERO BREW\n凍檸檬蜂蜜 情境"}
          style={{ height: 320, borderRadius:14, transform:'rotate(1deg)', boxShadow:'0 12px 30px rgba(0,0,0,0.12)', '--ph-bg':'#e9d2b1', '--ph-fg':'#8b6f3a' }} />
      </section>

      {/* FOUR MOMENTS */}
      <section style={{ padding:'48px 22px', background: MB.paper }}>
        <MEyebrow>{lang==='zh' ? '四個時刻' : 'FOUR MOMENTS'}</MEyebrow>
        <h2 style={{ marginTop:16, fontFamily: MB.serifZh, fontSize:28, fontWeight:500, color: MB.ink, lineHeight:1.15, marginBottom:24 }}>
          {lang==='zh' ? '你需要被照顧的，那些時刻。' : 'Moments that ask to be looked after.'}
        </h2>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
          {moments.map((m, i) => (
            <div key={i} style={{ background: MB.cream, borderRadius:12, padding:14, transform: i % 2 ? 'translateY(14px)' : 'none' }}>
              <ProductPH label={m.p.zh.slice(0,4)} w="100%" h={140} bg="#f0dcc0" fg="#8b6f3a" style={{ borderRadius:8 }} />
              <div style={{ marginTop:12, fontFamily: MB.serifEn, fontStyle:'italic', fontSize:16, color: b.accent }}>
                0{i+1} · {m.when[lang]}
              </div>
              <h3 style={{ marginTop:4, fontFamily: MB.serifZh, fontSize:12, fontWeight:600, color: MB.ink, lineHeight:1.3, minHeight:32 }}>{m.p[lang]}</h3>
              <p style={{ marginTop:4, fontSize:10, color: MB.mute, lineHeight:1.5 }}>{m.why[lang]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RITUAL */}
      <section style={{ padding:'48px 22px', background:'#2b1c10', color: MB.paper }}>
        <MEyebrow color="#e2b07c" dark>{lang==='zh' ? '溫柔的儀式' : 'A TENDER RITUAL'}</MEyebrow>
        <h2 style={{ marginTop:16, fontFamily: MB.serifZh, fontSize:30, fontWeight:500, lineHeight:1.1, marginBottom: 18 }}>
          {lang==='zh' ? <>把照顧自己<br/>變成日常。</> : <>Self-care,<br/>everyday.</>}
        </h2>
        <p style={{ fontSize:14, lineHeight:1.75, color:'rgba(250,248,244,0.7)' }}>
          {lang==='zh'
            ? 'Uhome 每一個沖泡品都是玻璃瓶裝、單份分裝、無人工色素。打開、加水、喝下——三秒鐘的儀式。'
            : 'Each Uhome brew comes in glass, in single servings, free of artificial colour. Three seconds of kindness.'}
        </p>
      </section>

      <MobileBrandProductList b={b} products={products} title={lang==='zh' ? '全部 Uhome' : 'The Uhome series'} lang={lang} />

      <MobileFooter lang={lang} />
    </div>
  );
};

Object.assign(window, { MobileAbout, MobileMinli, MobileLittleTaiwan, MobileJunda, MobileUhome });

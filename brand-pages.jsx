// brand-pages.jsx — the four brand pages besides 老澤源.
// 敏利 (knives + OEM + wellness patents), 小台灣 (supplements), Junda (cookware), Uhome (wellness brews)

const BP = window.M_TOKENS || {
  ink:'#1a1612', mute:'#6b6258', paper:'#faf8f4', cream:'#f3ede0', accent:'#c97a48',
  dark:'#1c1814', goldAccent:'#c9a13a',
  serifZh:"'Noto Serif TC',serif", serifEn:"'Cormorant Garamond',serif", mono:"'JetBrains Mono',monospace",
};

// =============================================================
// 敏利 Minli — the core. Knives, peelers, OEM, plus the wellness patent line.
// =============================================================
const MinliBrandPage = () => {
  const [lang, setLang] = React.useState('zh');
  const b = BRANDS.find(x => x.id === 'minli');
  const products = PRODUCTS.filter(p => p.brand === 'minli');

  return (
    <div className="variant-root" style={{ background: BP.paper, fontFamily:"'Manrope','Noto Sans TC',sans-serif" }}>
      <SubNav lang={lang} setLang={setLang}
        crumb={lang==='zh' ? ['品牌', '敏利'] : ['Brands', 'Minli']} />

      {/* HERO — split layout, light */}
      <section style={{ padding:'120px 96px 96px', position:'relative' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1.2fr 1fr', gap:96, alignItems:'center' }}>
          <div>
            <div style={{ fontFamily: BP.mono, fontSize:12, letterSpacing:'0.22em', color: b.accent, marginBottom: 28 }}>
              — {lang==='zh' ? '品牌列傳 · 第一章' : 'Brand chronicle · CHAPTER I'}
            </div>
            <h1 style={{
              fontFamily: BP.serifZh, fontWeight:600,
              fontSize: lang==='zh' ? 200 : 180, lineHeight: 0.9, color: BP.ink,
              letterSpacing: lang==='zh' ? '0.02em' : '-0.03em',
            }}>{lang==='zh' ? b.name : b.nameEn}</h1>
            <p style={{ marginTop: 36, fontSize: 22, lineHeight:1.6, color: BP.mute, maxWidth: 540,
              fontFamily: lang==='zh' ? BP.serifZh : BP.serifEn,
              fontStyle: lang==='en' ? 'italic' : 'normal',
            }}>
              {lang==='zh'
                ? '「我們的母品牌——刀剪起家，三十年磨一件事。」'
                : '"Our flagship — from a blade. One thing, refined for thirty years."'}
            </p>

            <div style={{ marginTop:40, display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24 }}>
              {[
                { k:'8',  v:{zh:'台灣專利',en:'TW patents'} },
                { k:'5',  v:{zh:'海外專利',en:'overseas patents'} },
                { k:'9',  v:{zh:'註冊商標',en:'trademarks'} },
              ].map((m, i) => (
                <div key={i}>
                  <div style={{ fontFamily: BP.serifEn, fontStyle:'italic', fontWeight:500, fontSize:54, color: b.accent, lineHeight:1 }}>{m.k}</div>
                  <div style={{ marginTop:6, fontSize:12, color: BP.mute, letterSpacing:'0.04em' }}>{m.v[lang]}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ position:'relative' }}>
            <ImagePH label={"BRAND HERO\n敏利旗艦商品群\n— 刀具家族 + OEM 印象\n— 1100 × 1300"}
              style={{ height: 680, borderRadius:18, '--ph-bg':'#e0d5be', '--ph-fg':'#6b6258' }} />
            <div style={{
              position:'absolute', bottom:24, left:24, padding:'10px 16px',
              background:'rgba(28,24,20,0.92)', color: BP.paper, borderRadius:8,
              fontFamily: BP.mono, fontSize:11, letterSpacing:'0.16em',
            }}>EST. 1990s · TAIWAN</div>
          </div>
        </div>
      </section>

      {/* TWO PILLARS — blade tech & wellness tech */}
      <section style={{ padding:'120px 96px', background: BP.cream }}>
        <div style={{ fontFamily: BP.mono, fontSize:12, letterSpacing:'0.22em', color: b.accent, marginBottom:20 }}>
          — {lang==='zh' ? '兩條技術線' : 'TWO TECHNOLOGY STACKS'}
        </div>
        <h2 style={{ fontFamily: BP.serifZh, fontSize:60, fontWeight:500, color: BP.ink, lineHeight:1.1, marginBottom: 64, maxWidth: 1000 }}>
          {lang==='zh' ? '從一把刀，到一塊機能貼布。' : 'From a single blade, to a functional patch.'}
        </h2>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:32 }}>
          {/* Blade stack */}
          <div style={{ background: BP.paper, borderRadius:18, padding:40, position:'relative', overflow:'hidden' }}>
            <div style={{ fontFamily: BP.serifEn, fontStyle:'italic', fontSize:90, fontWeight:500, color: 'rgba(0,0,0,0.05)', lineHeight:1, position:'absolute', top:18, right:24, pointerEvents:'none' }}>01.</div>
            <div style={{ fontFamily: BP.mono, fontSize:11, letterSpacing:'0.22em', color: b.accent, marginBottom:14 }}>BLADE ENGINEERING</div>
            <h3 style={{ fontFamily: BP.serifZh, fontSize:36, fontWeight:600, color: BP.ink, marginBottom:18, lineHeight:1.15 }}>
              {lang==='zh' ? '刀具結構工法' : 'Blade structure engineering'}
            </h3>
            <p style={{ fontSize:15, lineHeight:1.7, color: BP.mute, marginBottom:28 }}>
              {lang==='zh'
                ? '四項台灣專利、三項日本、一項德國——專利波浪刃、鉋鑽式、削槽式刀具結構，目標只有一個：降低切削阻力、避免食材沾黏。'
                : 'Four Taiwan patents, three Japan and one Germany — wave-edge, drill-rasp and groove blade structures. One purpose: reduce friction, prevent food sticking.'}
            </p>
            <ImagePH label={"PATENTED BLADE\n專利波浪刃近拍\n— 1000 × 600"} style={{ height: 240, borderRadius:10, '--ph-bg':'#e6dccb', '--ph-fg':'#7a6c58' }} />
            <div style={{ marginTop:20, display:'flex', flexWrap:'wrap', gap:6 }}>
              {PATENTS.tw.filter(p => p.cat==='blade').slice(0,4).map((p, i) => (
                <span key={i} style={{ padding:'6px 10px', borderRadius:999, fontSize:11, background: BP.cream, color: BP.ink, fontFamily: BP.mono }}>
                  TW {p.no}
                </span>
              ))}
            </div>
          </div>

          {/* Wellness stack */}
          <div style={{ background: BP.paper, borderRadius:18, padding:40, position:'relative', overflow:'hidden' }}>
            <div style={{ fontFamily: BP.serifEn, fontStyle:'italic', fontSize:90, fontWeight:500, color: 'rgba(0,0,0,0.05)', lineHeight:1, position:'absolute', top:18, right:24, pointerEvents:'none' }}>02.</div>
            <div style={{ fontFamily: BP.mono, fontSize:11, letterSpacing:'0.22em', color: b.accent, marginBottom:14 }}>WELLNESS MATERIALS</div>
            <h3 style={{ fontFamily: BP.serifZh, fontSize:36, fontWeight:600, color: BP.ink, marginBottom:18, lineHeight:1.15 }}>
              {lang==='zh' ? '石墨烯 · 量子機能' : 'Graphene · Quantum functional'}
            </h3>
            <p style={{ fontSize:15, lineHeight:1.7, color: BP.mute, marginBottom:28 }}>
              {lang==='zh'
                ? '四項台灣專利、一項日本、一項德國——石墨烯、量子太赫茲、負離子、磁力微電流，應用於鞋墊、腰帶、塑身褲與機能貼布。'
                : 'Four Taiwan patents, one Japan and one Germany — graphene, quantum terahertz, negative ions and micro-current. Applied to insoles, belts, garments and patches.'}
            </p>
            <ImagePH label={"FUNCTIONAL TEXTILE\n機能材料示意\n— 1000 × 600"} style={{ height: 240, borderRadius:10, '--ph-bg':'#dfe4e5', '--ph-fg':'#5e6c70' }} />
            <div style={{ marginTop:20, display:'flex', flexWrap:'wrap', gap:6 }}>
              {PATENTS.tw.filter(p => p.cat==='wellness').slice(0,4).map((p, i) => (
                <span key={i} style={{ padding:'6px 10px', borderRadius:999, fontSize:11, background: BP.cream, color: BP.ink, fontFamily: BP.mono }}>
                  TW {p.no}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <BrandProductGrid lang={lang} b={b} products={products}
        title={lang==='zh' ? '敏利精選' : 'Minli essentials'} A={BP} />

      {/* OEM / ODM SERVICE */}
      <section style={{ padding:'120px 96px', background: BP.dark, color: BP.paper }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1.4fr', gap:80, alignItems:'center' }}>
          <div>
            <div style={{ fontFamily: BP.mono, fontSize:12, letterSpacing:'0.22em', color: BP.goldAccent, marginBottom:18 }}>
              — {lang==='zh' ? '客製化服務' : 'CUSTOM DEVELOPMENT'}
            </div>
            <h2 style={{ fontFamily: BP.serifZh, fontSize:54, fontWeight:500, lineHeight:1.1, marginBottom: 24 }}>
              {lang==='zh' ? <>OEM / ODM<br/>產品開發。</> : <>OEM / ODM<br/>development.</>}
            </h2>
            <p style={{ fontSize:16, lineHeight:1.75, color:'rgba(250,248,244,0.7)', marginBottom:32 }}>
              {lang==='zh'
                ? '從配方到包裝、從首樣到量產——敏利為品牌、代理商與通路提供完整的代工開發鏈。已通過 ISO 22000、HACCP 雙國際認證。'
                : 'From formulation to packaging, prototype to volume — Minli offers a full OEM/ODM development chain to brands, agents and channels. ISO 22000 & HACCP certified.'}
            </p>
            <button className="btn" style={{ background: BP.goldAccent, color: BP.dark, padding:'14px 22px' }}>
              {lang==='zh' ? '洽詢代工服務' : 'Discuss OEM/ODM'} <span className="btn-arrow">→</span>
            </button>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap: 16 }}>
            {[
              { t:{zh:'配方研發',en:'Formulation'},     d:{zh:'食品 / 機能 / 材料三軌並行', en:'Food, functional, material — parallel R&D'} },
              { t:{zh:'生產製造',en:'Manufacturing'},   d:{zh:'雙認證工廠 · 桃園基地',         en:'Dual-cert facility · Taoyuan base'} },
              { t:{zh:'包裝設計',en:'Packaging'},       d:{zh:'盒裝 / 瓶裝 / 包裝設計支援',     en:'Box, bottle, full design support'} },
              { t:{zh:'國際物流',en:'Logistics'},       d:{zh:'十二國以上輸出經驗',            en:'Shipping experience across 12+ markets'} },
            ].map((c, i) => (
              <div key={i} style={{ padding:24, background:'rgba(255,255,255,0.04)', borderRadius:12, border:'1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ fontFamily: BP.serifEn, fontStyle:'italic', fontSize:32, color: BP.goldAccent, fontWeight:500, lineHeight:1 }}>0{i+1}</div>
                <h3 style={{ fontFamily: BP.serifZh, fontSize:20, fontWeight:600, color: BP.paper, marginTop:14, marginBottom:8 }}>{c.t[lang]}</h3>
                <p style={{ fontSize:13, color:'rgba(250,248,244,0.6)', lineHeight:1.6 }}>{c.d[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SubFooter lang={lang} />
    </div>
  );
};

// =============================================================
// Little Taiwan Store — supplements & nutrition
// =============================================================
const LittleTaiwanBrandPage = () => {
  const [lang, setLang] = React.useState('zh');
  const b = BRANDS.find(x => x.id === 'little-taiwan');
  const products = PRODUCTS.filter(p => p.brand === 'little-taiwan');

  // Group by category
  const categories = [
    { key:'energy',   zh:'活力．代謝',   en:'Energy & Metabolism', ids:['lt-nmn','lt-turmeric','lt-roselle','lt-enzyme'] },
    { key:'beauty',   zh:'美麗．保養',   en:'Beauty & Wellness',   ids:['lt-manuka','lt-propolis','lt-roselle','lt-pumpkin'] },
    { key:'strength', zh:'底子．強健',   en:'Foundation & Strength', ids:['lt-antrodia','lt-ostrich','lt-calcium','lt-lutein','lt-inca'] },
  ];

  return (
    <div className="variant-root" style={{ background: BP.paper, fontFamily:"'Manrope','Noto Sans TC',sans-serif" }}>
      <SubNav lang={lang} setLang={setLang}
        crumb={lang==='zh' ? ['品牌', '小台灣 Store'] : ['Brands', 'Little Taiwan Store']} />

      {/* HERO — bright, cream */}
      <section style={{ background: b.bg, padding:'120px 96px 96px', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', top:60, right:96, opacity:0.5, fontFamily: BP.serifEn, fontStyle:'italic', fontSize: 300, color: b.accent, lineHeight:0.85, pointerEvents:'none' }}>
          02
        </div>
        <div style={{ position:'relative', maxWidth: 1200 }}>
          <div style={{ fontFamily: BP.mono, fontSize:12, letterSpacing:'0.22em', color: b.accent, marginBottom: 28 }}>
            — {lang==='zh' ? '品牌列傳 · 第二章' : 'Brand chronicle · CHAPTER II'}
          </div>
          <h1 style={{
            fontFamily: BP.serifZh, fontWeight:600,
            fontSize: lang==='zh' ? 144 : 124, lineHeight: 0.95, color: BP.ink,
            letterSpacing: lang==='zh' ? '0.02em' : '-0.02em',
          }}>{lang==='zh' ? b.name : b.nameEn}</h1>
          <p style={{ marginTop:36, fontSize: 24, lineHeight:1.5, color: BP.ink, maxWidth: 720,
            fontFamily: lang==='zh' ? BP.serifZh : BP.serifEn,
            fontStyle: lang==='en' ? 'italic' : 'normal',
            opacity:0.78,
          }}>
            {lang==='zh'
              ? '「把一座島嶼的養分，裝進日常裡。」'
              : '"The nourishment of an island — packed for the everyday."'}
          </p>

          <div style={{ marginTop: 56, display:'flex', gap:60 }}>
            {[
              { k: `${products.length}`, v:{zh:'品項',en:'SKUs'} },
              { k:'7', v:{zh:'類別',en:'categories'} },
              { k:'100%', v:{zh:'台灣製',en:'made in Taiwan'} },
            ].map((m, i) => (
              <div key={i}>
                <div style={{ fontFamily: BP.serifEn, fontStyle:'italic', fontSize:54, color: b.accent, lineHeight:1, fontWeight:500 }}>{m.k}</div>
                <div style={{ marginTop:6, fontSize:12, color: BP.mute, letterSpacing:'0.04em' }}>{m.v[lang]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero strip image */}
      <section style={{ padding:'0 96px', marginTop: -40, position:'relative', zIndex:2 }}>
        <ImagePH label={"FLATLAY · INGREDIENTS\n台灣原料拼貼\n— 牛樟芝、鴕鳥精、印加果、葉黃素膠囊\n— 2400 × 800"}
          style={{ height: 380, borderRadius:18, '--ph-bg':'#f7e8d6', '--ph-fg':'#a07852' }} />
      </section>

      {/* CATEGORIES — three-column with grouped products */}
      <section style={{ padding:'120px 96px' }}>
        <div style={{ fontFamily: BP.mono, fontSize:12, letterSpacing:'0.22em', color: b.accent, marginBottom: 20 }}>
          — {lang==='zh' ? '三種日常的營養' : 'THREE NUTRITION PATHS'}
        </div>
        <h2 style={{ fontFamily: BP.serifZh, fontSize:56, fontWeight:500, color: BP.ink, lineHeight:1.1, marginBottom:64, maxWidth: 1000 }}>
          {lang==='zh' ? '你的身體，需要什麼？' : 'What does your body ask for today?'}
        </h2>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24 }}>
          {categories.map((cat, i) => {
            const catProducts = products.filter(p => cat.ids.includes(p.id));
            return (
              <div key={cat.key} style={{ background: BP.cream, borderRadius:18, padding:32 }}>
                <div style={{ fontFamily: BP.serifEn, fontStyle:'italic', fontSize:44, color: b.accent, lineHeight:1, fontWeight:500 }}>0{i+1}</div>
                <h3 style={{ fontFamily: BP.serifZh, fontSize:30, fontWeight:600, color: BP.ink, marginTop:14, marginBottom: 24 }}>{cat[lang]}</h3>
                <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:0, borderTop:`1px solid rgba(0,0,0,0.1)` }}>
                  {catProducts.map(p => (
                    <li key={p.id} style={{ padding:'12px 0', borderBottom:`1px solid rgba(0,0,0,0.1)`, display:'flex', justifyContent:'space-between', alignItems:'baseline' }}>
                      <span style={{ fontFamily: BP.serifZh, fontSize:14, color: BP.ink }}>{p[lang]}</span>
                      <span style={{ fontFamily: BP.mono, fontSize:11, color: BP.mute }}>{p.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* PRODUCTS — full grid */}
      <BrandProductGrid lang={lang} b={b} products={products}
        title={lang==='zh' ? '全部商品' : 'All products'} A={BP} />

      <SubFooter lang={lang} />
    </div>
  );
};

// =============================================================
// Junda — cookware
// =============================================================
const JundaBrandPage = () => {
  const [lang, setLang] = React.useState('zh');
  const b = BRANDS.find(x => x.id === 'junda');
  const products = PRODUCTS.filter(p => p.brand === 'junda');

  return (
    <div className="variant-root" style={{ background: BP.paper, fontFamily:"'Manrope','Noto Sans TC',sans-serif" }}>
      <SubNav lang={lang} setLang={setLang}
        crumb={lang==='zh' ? ['品牌','Junda'] : ['Brands','Junda']} />

      {/* HERO — minimal, product-led */}
      <section style={{ padding:'120px 96px 96px', position:'relative' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1.2fr', gap: 96, alignItems:'center' }}>
          <div>
            <div style={{ fontFamily: BP.mono, fontSize:12, letterSpacing:'0.22em', color: b.accent, marginBottom: 28 }}>
              — {lang==='zh' ? '品牌列傳 · 第三章' : 'Brand chronicle · CHAPTER III'}
            </div>
            <h1 style={{
              fontFamily: BP.serifZh, fontWeight:600,
              fontSize: lang==='zh' ? 200 : 192, lineHeight: 0.9, color: BP.ink,
              letterSpacing: lang==='zh' ? '0.01em' : '-0.04em',
            }}>{lang==='zh' ? b.name : b.nameEn}</h1>
            <p style={{ marginTop: 40, fontSize: 22, lineHeight:1.6, color: BP.mute, maxWidth: 500,
              fontFamily: lang==='zh' ? BP.serifZh : BP.serifEn,
              fontStyle: lang==='en' ? 'italic' : 'normal',
            }}>
              {lang==='zh'
                ? '「為台灣家庭設計的鍋具，與敏利的刀，是同一張餐桌的兩面。」'
                : '"Cookware made for Taiwan. Two sides of the same table — paired with Minli\u2019s blades."'}
            </p>
          </div>

          <div style={{ position:'relative' }}>
            <ImagePH label={"HERO PAN\n平底鍋特寫 · 鏡面拋光\n— 1100 × 1400"}
              style={{ height: 700, borderRadius:18, '--ph-bg':'#fce8e3', '--ph-fg':'#a85248' }} />
          </div>
        </div>
      </section>

      {/* PAIRING — Junda pan × Minli knife */}
      <section style={{ padding:'120px 96px', background: BP.cream }}>
        <div style={{ display:'grid', gridTemplateColumns:'2fr 3fr', gap:80, alignItems:'center' }}>
          <div>
            <div style={{ fontFamily: BP.mono, fontSize:12, letterSpacing:'0.22em', color: b.accent, marginBottom:18 }}>
              — {lang==='zh' ? '完美搭配' : 'BETTER TOGETHER'}
            </div>
            <h2 style={{ fontFamily: BP.serifZh, fontSize:54, fontWeight:500, color: BP.ink, lineHeight:1.1, marginBottom: 24 }}>
              {lang==='zh' ? <>一只 Junda 平底鍋，<br/>一把敏利主廚刀。</> : <>One Junda pan.<br/>One Minli chef knife.</>}
            </h2>
            <p style={{ fontSize:17, lineHeight:1.75, color: BP.mute, marginBottom:32 }}>
              {lang==='zh'
                ? '這是台灣家庭最基本的兩件廚具。Junda 鍋具系列維持與敏利刀剪相同的品管標準——三十年的家用堅持，只說一次。'
                : 'The two essentials of a Taiwanese kitchen. Junda matches the same standard as our blades — three decades of household discipline, once spoken.'}
            </p>
            <button className="btn" style={{ background: b.accent, color:'#fff' }}>
              {lang==='zh' ? '搭配優惠' : 'See the bundle'} <span className="btn-arrow">→</span>
            </button>
          </div>
          <ImagePH label={"PAIRING\n鍋具 + 刀具情境圖\n— 1400 × 900"} style={{ height: 540, borderRadius:18, '--ph-bg':'#f4e1dc', '--ph-fg':'#a85248' }} />
        </div>
      </section>

      <BrandProductGrid lang={lang} b={b} products={products}
        title={lang==='zh' ? 'Junda 系列' : 'Junda collection'} A={BP} />

      <SubFooter lang={lang} />
    </div>
  );
};

// =============================================================
// Uhome — wellness brews. Soft, warm, feminine tilt.
// =============================================================
const UhomeBrandPage = () => {
  const [lang, setLang] = React.useState('zh');
  const b = BRANDS.find(x => x.id === 'uhome');
  const products = PRODUCTS.filter(p => p.brand === 'uhome');

  return (
    <div className="variant-root" style={{ background: BP.paper, fontFamily:"'Manrope','Noto Sans TC',sans-serif" }}>
      <SubNav lang={lang} setLang={setLang}
        crumb={lang==='zh' ? ['品牌','Uhome'] : ['Brands','Uhome']} />

      {/* HERO — warm, hand-written */}
      <section style={{ background: b.bg, padding:'120px 96px 96px', position:'relative', overflow:'hidden' }}>
        {/* hand-drawn squiggle decoration */}
        <svg width="220" height="80" viewBox="0 0 220 80" style={{ position:'absolute', top:80, right:120, opacity:0.4 }}>
          <path d="M0,40 Q20,10 40,40 T80,40 T120,40 T160,40 T200,40 L220,40" fill="none" stroke={b.accent} strokeWidth="1.5" strokeLinecap="round"/>
        </svg>

        <div style={{ position:'relative', display:'grid', gridTemplateColumns:'1.2fr 1fr', gap:80, alignItems:'flex-end' }}>
          <div>
            <div style={{ fontFamily: BP.mono, fontSize:12, letterSpacing:'0.22em', color: b.accent, marginBottom: 28 }}>
              — {lang==='zh' ? '品牌列傳 · 第四章' : 'Brand chronicle · CHAPTER IV'}
            </div>
            <h1 style={{
              fontFamily: BP.serifZh, fontWeight:600,
              fontSize: lang==='zh' ? 200 : 184, lineHeight: 0.92, color: BP.ink,
              letterSpacing: lang==='zh' ? '0.01em' : '-0.03em',
            }}>{lang==='zh' ? b.name : b.nameEn}</h1>
            <p style={{ marginTop:36, fontSize: 24, lineHeight:1.55, color: BP.ink, maxWidth: 540, opacity:0.82,
              fontFamily: lang==='zh' ? BP.serifZh : BP.serifEn,
              fontStyle: lang==='en' ? 'italic' : 'normal',
            }}>
              {lang==='zh'
                ? '「忙日子裡的一杯，溫柔到自己。」'
                : '"A cup in a busy day. Kindness, to yourself."'}
            </p>
          </div>
          <ImagePH label={"HERO BREW\n凍檸檬蜂蜜 · 桌面情境\n— 1000 × 1100"}
            style={{ height: 580, borderRadius:18, transform:'rotate(1.2deg)', boxShadow:'0 12px 36px rgba(0,0,0,0.12)', '--ph-bg':'#e9d2b1', '--ph-fg':'#8b6f3a' }} />
        </div>
      </section>

      {/* MOMENTS — when to drink */}
      <section style={{ padding:'120px 96px' }}>
        <div style={{ fontFamily: BP.mono, fontSize:12, letterSpacing:'0.22em', color: b.accent, marginBottom:20 }}>
          — {lang==='zh' ? '四個時刻' : 'FOUR MOMENTS'}
        </div>
        <h2 style={{ fontFamily: BP.serifZh, fontSize:56, fontWeight:500, color: BP.ink, lineHeight:1.1, marginBottom: 64, maxWidth: 900 }}>
          {lang==='zh' ? '你需要被照顧的，那些時刻。' : 'The moments that ask to be looked after.'}
        </h2>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:24 }}>
          {[
            { p: products[0], when:{zh:'早晨醒來',en:'Just woken up'},  why:{zh:'空腹一杯 · 醒胃',en:'Empty stomach · awaken'} },
            { p: products[1], when:{zh:'下午三點',en:'Three p.m.'},      why:{zh:'嘴饞 · 撐到晚餐',en:'Snack craving · until dinner'} },
            { p: products[2], when:{zh:'解膩飯後',en:'After a meal'},   why:{zh:'去油 · 清爽',en:'De-grease · refresh'} },
            { p: products[3], when:{zh:'生理日前',en:'Before period'},   why:{zh:'四物 · 溫暖',en:'Si-Wu · warming'} },
          ].map((m, i) => (
            <div key={i} style={{ background: BP.cream, borderRadius:16, padding:24, transform: i % 2 ? 'translateY(20px)' : 'none' }}>
              <ProductPH label={m.p.zh} w="100%" h={200} bg="#f0dcc0" fg="#8b6f3a" style={{ borderRadius:10 }} />
              <div style={{ marginTop:18, fontFamily: BP.serifEn, fontStyle:'italic', fontSize:24, color: b.accent }}>
                0{i+1} · {m.when[lang]}
              </div>
              <h3 style={{ marginTop:8, fontFamily: BP.serifZh, fontSize:18, fontWeight:600, color: BP.ink, lineHeight:1.3 }}>{m.p[lang]}</h3>
              <p style={{ marginTop:8, fontSize:12, color: BP.mute, lineHeight:1.6 }}>{m.why[lang]}</p>
              <div style={{ marginTop:14, fontFamily: BP.mono, fontSize:11, color: b.accent }}>{m.p.price}</div>
            </div>
          ))}
        </div>
      </section>

      {/* RITUAL */}
      <section style={{ padding:'120px 96px', background:'#2b1c10', color: BP.paper, position:'relative' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1.4fr', gap:80, alignItems:'center' }}>
          <div>
            <div style={{ fontFamily: BP.mono, fontSize:12, letterSpacing:'0.22em', color:'#e2b07c', marginBottom:18 }}>
              — {lang==='zh' ? '溫柔的儀式' : 'A TENDER RITUAL'}
            </div>
            <h2 style={{ fontFamily: BP.serifZh, fontSize:54, fontWeight:500, lineHeight:1.1, marginBottom: 24 }}>
              {lang==='zh' ? <>把照顧自己<br/>變成日常。</> : <>Turn self-care<br/>into routine.</>}
            </h2>
            <p style={{ fontSize:17, lineHeight:1.75, color:'rgba(250,248,244,0.7)' }}>
              {lang==='zh'
                ? 'Uhome 的每一個沖泡品都選擇玻璃瓶裝、單份分裝、無人工色素。打開、加水、喝下——三秒鐘的儀式，就是給自己的一份溫柔。'
                : 'Every Uhome brew comes in glass, in single servings, free of artificial colour. Open, pour, drink — a three-second ritual of kindness to yourself.'}
            </p>
          </div>
          <ImagePH label={"RITUAL\n泡飲過程 · 玻璃瓶與光\n— 1400 × 900"}
            style={{ height: 540, borderRadius:18, '--ph-bg':'#3a261a', '--ph-fg':'#7a5b3a' }} />
        </div>
      </section>

      <BrandProductGrid lang={lang} b={b} products={products}
        title={lang==='zh' ? '全部 Uhome 系列' : 'The full Uhome series'} A={BP} />

      <SubFooter lang={lang} />
    </div>
  );
};

// ===== Shared brand product grid =====
const BrandProductGrid = ({ lang, b, products, title, A }) => (
  <section style={{ padding:'120px 96px', background: A.paper }}>
    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom: 48 }}>
      <h2 style={{ fontFamily: A.serifZh, fontSize: 48, fontWeight:500, color: A.ink, lineHeight:1.1 }}>{title}</h2>
      <span style={{ fontSize:13, color: A.mute, fontFamily: A.mono }}>{products.length} {lang==='zh' ? '件商品' : 'items'}</span>
    </div>

    <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24 }}>
      {products.map((p, i) => (
        <article key={p.id} style={{ background: A.cream, borderRadius:16, padding:24, position:'relative' }}>
          {p.badge && (
            <div style={{
              position:'absolute', top:36, left:36, zIndex:2,
              background: b.accent, color:'#fff', padding:'3px 9px', borderRadius:3,
              fontSize:10, letterSpacing:'0.16em', fontFamily: A.mono,
            }}>{p.badge[lang]}</div>
          )}
          <ProductPH label={p.zh} w="100%" h={280} bg="#e6dccb" fg="#7a6c58" style={{ borderRadius:10 }} />
          <div style={{ marginTop:18, fontFamily: A.mono, fontSize:10, letterSpacing:'0.16em', color: b.accent }}>
            NO. {String(i+1).padStart(2,'0')}  ·  {p.cat[lang].toUpperCase()}
          </div>
          <h3 style={{ marginTop:6, fontFamily: A.serifZh, fontSize:20, fontWeight:600, color: A.ink, lineHeight:1.25, minHeight:50 }}>{p[lang]}</h3>
          <div style={{ marginTop:14, display:'flex', justifyContent:'space-between', alignItems:'baseline', borderTop:`1px solid rgba(0,0,0,0.08)`, paddingTop:12 }}>
            <span style={{ fontFamily: A.serifEn, fontSize:20, fontStyle:'italic', color: A.ink }}>{p.price}</span>
            <span style={{ fontSize:11, color: b.accent, fontFamily: A.mono, letterSpacing:'0.12em' }}>{lang==='zh' ? '查看 →' : 'DETAIL →'}</span>
          </div>
        </article>
      ))}
    </div>
  </section>
);

Object.assign(window, { MinliBrandPage, LittleTaiwanBrandPage, JundaBrandPage, UhomeBrandPage });

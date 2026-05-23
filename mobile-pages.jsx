// mobile-pages.jsx — mobile versions of brand detail, PDP, products index.
// Reuses M_TOKENS, MTopBar, MEyebrow, MMenu from mobile-home.jsx.

// ===== Mobile Brand Detail: 老澤源 =====
const MobileBrandDetail = () => {
  const [lang, setLang] = React.useState('zh');
  const [menuOpen, setMenuOpen] = React.useState(false);
  const M = window.M_TOKENS;
  const b = BRANDS.find(x => x.id === 'laozeyuan');
  const products = PRODUCTS.filter(p => p.brand === 'laozeyuan');

  return (
    <div style={{
      position:'relative', height:'100%', overflow:'auto', background: M.paper,
      fontFamily:"'Manrope','Noto Sans TC',sans-serif",
    }}>
      <MTopBar lang={lang} setLang={setLang} onMenu={() => setMenuOpen(true)} />
      <MMenu open={menuOpen} onClose={() => setMenuOpen(false)} lang={lang} setLang={setLang} />

      {/* breadcrumb */}
      <div style={{
        padding:'10px 22px', fontSize:11, color: M.mute,
        borderBottom:`1px solid rgba(0,0,0,0.05)`, fontFamily: M.mono, letterSpacing:'0.04em',
      }}>
        {lang==='zh' ? '首頁 / 品牌 /' : 'Home / Brands /'} <span style={{ color: M.ink }}>{lang==='zh' ? b.name : b.nameEn}</span>
      </div>

      {/* HERO — dark, full-bleed */}
      <section style={{ padding:'40px 22px 48px', background: b.bg, color: b.fg, position:'relative', overflow:'hidden' }}>
        <svg viewBox="0 0 100 140" style={{ position:'absolute', right:-20, top:24, width:200, height:280, opacity:0.14 }}>
          <ellipse cx="50" cy="70" rx="42" ry="62" fill="none" stroke={b.accent} strokeWidth="2"/>
          <text x="50" y="78" textAnchor="middle" fontSize="48" fontFamily="'Noto Serif TC',serif" fontWeight="700" fill={b.accent}>源</text>
        </svg>

        <MEyebrow color={b.accent} dark>{lang==='zh' ? '品牌列傳 · 第五章' : 'Brand chronicle · CH.V'}</MEyebrow>
        <h1 style={{
          marginTop:18, fontFamily: M.serifZh, fontWeight:700,
          fontSize: lang==='zh' ? 88 : 70, lineHeight:0.92,
          letterSpacing: lang==='zh' ? '0.01em' : '-0.02em',
        }}>{lang==='zh' ? b.name : b.nameEn}</h1>

        <p style={{ marginTop:24, fontSize:15, lineHeight:1.7, color:'rgba(242,229,207,0.85)',
          fontFamily: lang==='zh' ? M.serifZh : M.serifEn,
          fontStyle: lang==='en' ? 'italic' : 'normal' }}>
          {lang==='zh'
            ? '「我們不做廉價的刀。三代人只做一件事——把砲彈鋼，鍛成廚房最好的工具。」'
            : '"We do not make cheap knives. Three generations of one family, doing one thing — turning shell steel into the kitchen\u2019s finest tool."'}
        </p>

        <div style={{ marginTop:28, display:'grid', gridTemplateColumns:'1fr 1fr', gap:18 }}>
          {[
            { k:'1958', v:{zh:'砲擊起源',en:'Shelling origin'} },
            { k:'3',    v:{zh:'代相傳',en:'generations'} },
            { k:'30',   v:{zh:'刀／砲彈',en:'knives/shell'} },
            { k:'58HRC',v:{zh:'刀刃硬度',en:'Hardness'} },
          ].map((m, i) => (
            <div key={i}>
              <div style={{ fontFamily: M.serifEn, fontSize:30, color: b.accent, lineHeight:1, fontWeight:500 }}>{m.k}</div>
              <div style={{ marginTop:5, fontSize:11, color:'rgba(242,229,207,0.6)' }}>{m.v[lang]}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop:32, display:'flex', flexDirection:'column', gap:10 }}>
          <button className="btn" style={{ background: b.accent, color: b.fg, justifyContent:'center', padding:'14px 18px' }}>
            {lang==='zh' ? '購買老澤源' : 'Shop Lao Ze Yuan'} <span className="btn-arrow">→</span>
          </button>
          <button className="btn" style={{ background:'transparent', color: b.fg, boxShadow:`inset 0 0 0 1px rgba(242,229,207,0.3)`, justifyContent:'center', padding:'14px 18px' }}>
            {lang==='zh' ? '工藝紀錄影片 ▶' : 'Craft documentary ▶'}
          </button>
        </div>
      </section>

      {/* STORY — stacked timeline */}
      <section style={{ padding:'48px 22px' }}>
        <MEyebrow>{lang==='zh' ? '一只紅印的故事' : 'STORY BEHIND THE SEAL'}</MEyebrow>
        <h2 style={{ marginTop:14, fontFamily: M.serifZh, fontWeight:500,
          fontSize: 30, lineHeight:1.15, color: M.ink, marginBottom: 28 }}>
          {lang==='zh' ? '從砲火到爐火。' : <>From shellfire,<br/>to stovetop.</>}
        </h2>
        <div style={{ display:'flex', flexDirection:'column', gap:22 }}>
          {[
            { y:'1958', t:{zh:'砲擊金門',en:'The shelling'},
              d:{zh:'超過四十七萬發砲彈落在金門，島上鋼材意外充裕。',en:'Over 470,000 shells fell on Jinmen, leaving the island awash in steel.'} },
            { y:'197X', t:{zh:'第一代制刀',en:'The first generation'},
              d:{zh:'初代師傅將砲彈鋼運用於廚刀，一塊鋼可打三十把。',en:'The first master forged shell-steel into kitchen blades — 30 from each shell.'} },
            { y:'199X', t:{zh:'敏利接手代工',en:'Minli partners'},
              d:{zh:'敏利國際引入專利波浪鍛工技術——保留古法手感，加入今日強度。',en:'Minli partners and introduces the patented wave-edge process.'} },
            { y:'今日', t:{zh:'金門三件',en:'The three blades'},
              d:{zh:'冷凍刀、主廚刀、砍骨刀，每一把皆由同一位師傅完成。',en:'Frozen, chef, cleaver — each forged by the same hand.'} },
          ].map((r, i) => (
            <div key={i} style={{ borderTop:`1px solid rgba(0,0,0,0.1)`, paddingTop:14 }}>
              <div style={{ fontFamily: M.serifEn, fontStyle:'italic', fontSize:22, color: M.accent }}>{r.y}</div>
              <h3 style={{ marginTop:6, fontFamily: M.serifZh, fontSize:20, fontWeight:600, color: M.ink, marginBottom:8 }}>{r.t[lang]}</h3>
              <p style={{ fontSize:13, lineHeight:1.7, color: M.mute }}>{r.d[lang]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS — 2x2 */}
      <section style={{ padding:'48px 22px', background: M.cream }}>
        <MEyebrow>{lang==='zh' ? '工序' : 'THE PROCESS'}</MEyebrow>
        <h2 style={{ marginTop:14, fontFamily: M.serifZh, fontSize:28, fontWeight:500, color: M.ink, lineHeight:1.15, marginBottom: 28 }}>
          {lang==='zh' ? '一把刀，六十四道工序。' : '64 steps, one blade.'}
        </h2>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:0, borderTop:`1px solid rgba(0,0,0,0.15)` }}>
          {[
            { n:'01', t:{zh:'選鋼',en:'Steel'},     d:{zh:'砲彈鋼回收熔煉。',en:'Shells reclaimed.'} },
            { n:'02', t:{zh:'鍛打',en:'Forging'},   d:{zh:'1200°C 反覆鍛打。',en:'1200°C cycles.'} },
            { n:'03', t:{zh:'波浪',en:'Wave edge'}, d:{zh:'專利波浪刃口鏨刻。',en:'Patented wave stamp.'} },
            { n:'04', t:{zh:'開鋒',en:'Sharpen'},   d:{zh:'手工開鋒、拋光。',en:'Hand sharpen, polish.'} },
          ].map((step, i) => (
            <div key={i} style={{
              padding:'22px 16px', borderRight: i % 2 === 0 ? `1px solid rgba(0,0,0,0.15)` : 'none',
              borderBottom:`1px solid rgba(0,0,0,0.15)`,
            }}>
              <div style={{ fontFamily: M.serifEn, fontStyle:'italic', fontSize:42, color: M.accent, lineHeight:1 }}>{step.n}</div>
              <h3 style={{ fontFamily: M.serifZh, fontSize:16, fontWeight:600, color: M.ink, marginTop:10 }}>{step.t[lang]}</h3>
              <p style={{ fontSize:11, color: M.mute, marginTop:4, lineHeight:1.6 }}>{step.d[lang]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS — three blades */}
      <section style={{ padding:'48px 22px' }}>
        <MEyebrow>{lang==='zh' ? '金門三件' : 'THE JINMEN THREE'}</MEyebrow>
        <h2 style={{ marginTop:14, fontFamily: M.serifZh, fontSize:30, fontWeight:500, color: M.ink, lineHeight:1.1, marginBottom: 24 }}>
          {lang==='zh' ? '三把刀，整個廚房。' : 'Three blades. One kitchen.'}
        </h2>
        <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
          {products.map((p, i) => (
            <article key={p.id} style={{ background: M.cream, borderRadius:14, padding:18, position:'relative' }}>
              {p.badge && (
                <div style={{
                  position:'absolute', top:26, left:26, zIndex:2,
                  background: b.accent, color:'#fff', padding:'3px 8px', borderRadius:3,
                  fontSize:9, letterSpacing:'0.14em', fontFamily: M.mono,
                }}>{p.badge[lang]}</div>
              )}
              <ProductPH label={p.zh} w="100%" h={200} bg="#e6dccb" fg="#7a6c58" style={{ borderRadius:10 }} />
              <div style={{ marginTop:14, fontFamily: M.mono, fontSize:10, letterSpacing:'0.16em', color: b.accent }}>
                NO.0{i+1} · {lang==='zh' ? '金門鋼' : 'JINMEN STEEL'}
              </div>
              <h3 style={{ marginTop:6, fontFamily: M.serifZh, fontSize:18, fontWeight:600, color: M.ink, lineHeight:1.3 }}>{p[lang]}</h3>
              <div style={{ marginTop:12, display:'flex', justifyContent:'space-between', alignItems:'baseline', borderTop:`1px solid rgba(0,0,0,0.08)`, paddingTop:10 }}>
                <span style={{ fontFamily: M.serifEn, fontSize:18, fontStyle:'italic', color: M.ink }}>{p.price}</span>
                <button data-product-id={p.id} style={{ background:'none', border:'none', fontFamily: M.mono, fontSize:11, color: b.accent, letterSpacing:'0.12em', cursor:'pointer' }}>
                  {lang==='zh' ? '查看 →' : 'DETAIL →'}
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CARE */}
      <section style={{ padding:'48px 22px', background: M.cream }}>
        <MEyebrow>{lang==='zh' ? '終身保固' : 'LIFETIME WARRANTY'}</MEyebrow>
        <h2 style={{ marginTop:14, fontFamily: M.serifZh, fontSize:30, fontWeight:500, color: M.ink, lineHeight:1.15, marginBottom: 18 }}>
          {lang==='zh' ? '一把刀，能用三代。' : 'A knife for three generations.'}
        </h2>
        <p style={{ fontSize:14, lineHeight:1.7, color: M.mute }}>
          {lang==='zh'
            ? '老澤源提供終身免費磨刀。寄回原廠，師傅親手重新開鋒——一把刀，陪你從新婚走到孩子的成家。'
            : 'Every Lao Ze Yuan blade comes with lifetime sharpening. The same hands that forged it will sharpen it.'}
        </p>
      </section>

      <MobileFooter lang={lang} />
    </div>
  );
};

// ===== Mobile Product Detail =====
const MobileProductDetail = ({ productId }) => {
  const [lang, setLang] = React.useState('zh');
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [activeImg, setActiveImg] = React.useState(0);
  const [size, setSize] = React.useState('8寸');
  const [engrave, setEngrave] = React.useState('');
  const [justAdded, setJustAdded] = React.useState(false);
  const M = window.M_TOKENS;

  const pid = productId || window.__selectedProduct || 'lzy-chef';
  const p = PRODUCTS.find(x => x.id === pid) || PRODUCTS.find(x => x.id === 'lzy-chef');
  const b = BRANDS.find(x => x.id === p.brand);
  const isBlade = p.cat.zh === '廚房刀剪' || p.cat.zh === '高階刀具';
  const galleryBg = isBlade ? M.dark : '#e8e2d8';
  const galleryFg = isBlade ? '#5e5240' : '#8a7e6a';
  const sizes = isBlade ? (lang==='zh' ? ['6寸','8寸','10寸'] : ['6"','8"','10"']) : [];

  React.useEffect(() => {
    setSize(isBlade ? (lang==='zh' ? '8寸' : '8"') : '');
    setActiveImg(0);
    setEngrave('');
  }, [pid, isBlade]);

  const getDesc = () => {
    if (isBlade) return lang==='zh'
      ? '老澤源「金門三件」系列之一。專利金門砲彈鋼精鍛，歷經 64 道工序，鋒利耐用。'
      : 'Part of the Lao Ze Yuan Jinmen Series. Forged from patented Jinmen artillery steel through 64 precision steps.';
    if (p.cat.zh === '機能食品' || p.cat.zh === '保健食品') return lang==='zh'
      ? '小台灣嚴選保健配方，採用台灣在地優質原料，通過 SGS 認證。'
      : "Carefully formulated supplement from Little Taiwan Store, SGS-certified for your family's wellbeing.";
    if (p.cat.zh === '鍋具') return lang==='zh'
      ? 'Junda 精工鑄造鍋具，導熱均勻，輕量耐用，是現代廚房的必備夥伴。'
      : 'Junda precision-cast cookware — even heat distribution and everyday durability.';
    return lang==='zh'
      ? '敏利嚴選品項，以優質原料與嚴格品管，帶給您最純粹的生活體驗。'
      : 'A Min International select — quality ingredients, rigorous standards.';
  };

  const getSpecs = () => {
    if (isBlade) return [
      { l:{zh:'刀身材質',en:'Blade'},    v:{zh:'金門砲彈鋼（再煉）',en:'Jinmen artillery steel'} },
      { l:{zh:'刀刃硬度',en:'Hardness'}, v:{zh:'HRC 58–60',en:'HRC 58–60'} },
      { l:{zh:'刀身長度',en:'Length'},   v:{zh:'8 寸 / 203 mm',en:'8 in / 203 mm'} },
      { l:{zh:'總重',    en:'Weight'},   v:{zh:'225 g',en:'225 g'} },
      { l:{zh:'手柄',    en:'Handle'},   v:{zh:'紫檀木 · 三鉚釘',en:'Rosewood · 3-rivet'} },
      { l:{zh:'產地',    en:'Origin'},   v:{zh:'台灣 · 金門',en:'Jinmen, Taiwan'} },
    ];
    if (p.cat.zh === '機能食品' || p.cat.zh === '保健食品') return [
      { l:{zh:'品牌',    en:'Brand'},    v:{zh:b.name,en:b.nameEn} },
      { l:{zh:'劑型',    en:'Form'},     v:{zh:'膠囊 / 錠劑',en:'Capsule / Tablet'} },
      { l:{zh:'每日份量',en:'Serving'},  v:{zh:'1–2 粒',en:'1–2 per day'} },
      { l:{zh:'認證',    en:'Cert'},     v:{zh:'SGS 通過',en:'SGS Certified'} },
      { l:{zh:'保存',    en:'Storage'},  v:{zh:'常溫避光',en:'Cool, dry place'} },
      { l:{zh:'產地',    en:'Origin'},   v:{zh:'台灣製造',en:'Made in Taiwan'} },
    ];
    if (p.cat.zh === '鍋具') return [
      { l:{zh:'材質',    en:'Material'}, v:{zh:'鋁合金不沾',en:'Non-stick alloy'} },
      { l:{zh:'尺寸',    en:'Size'},     v:{zh:'28 cm',en:'28 cm'} },
      { l:{zh:'重量',    en:'Weight'},   v:{zh:'880 g',en:'880 g'} },
      { l:{zh:'適用爐',  en:'Stove'},    v:{zh:'電 / 瓦斯 / IH',en:'Gas / IH / Electric'} },
      { l:{zh:'認證',    en:'Cert'},     v:{zh:'SGS 安全通過',en:'SGS Certified'} },
      { l:{zh:'產地',    en:'Origin'},   v:{zh:'台灣',en:'Taiwan'} },
    ];
    return [
      { l:{zh:'品牌',    en:'Brand'},    v:{zh:b.name,en:b.nameEn} },
      { l:{zh:'規格',    en:'Size'},     v:{zh:'標準裝',en:'Standard'} },
      { l:{zh:'成分',    en:'Ingredients'},v:{zh:'天然原料',en:'Natural ingredients'} },
      { l:{zh:'保存',    en:'Storage'},  v:{zh:'常溫保存',en:'Room temperature'} },
      { l:{zh:'認證',    en:'Cert'},     v:{zh:'SGS 通過',en:'SGS Certified'} },
      { l:{zh:'產地',    en:'Origin'},   v:{zh:'台灣製造',en:'Made in Taiwan'} },
    ];
  };

  const related = PRODUCTS.filter(x => x.brand === p.brand && x.id !== p.id).slice(0, 3);

  return (
    <div style={{
      position:'relative', height:'100%', overflow:'auto', background: M.paper,
      fontFamily:"'Manrope','Noto Sans TC',sans-serif",
    }}>
      <MTopBar lang={lang} setLang={setLang} onMenu={() => setMenuOpen(true)} />
      <MMenu open={menuOpen} onClose={() => setMenuOpen(false)} lang={lang} setLang={setLang} />

      <div style={{
        padding:'10px 22px', fontSize:11, color: M.mute, borderBottom:`1px solid rgba(0,0,0,0.05)`,
        fontFamily: M.mono, letterSpacing:'0.04em',
      }}>
        {lang==='zh' ? `首頁 / 品牌 / ${b.name} /` : `Home / Brands / ${b.nameEn} /`} <span style={{ color: M.ink }}>{lang==='zh' ? p.zh : p.en}</span>
      </div>

      {/* GALLERY */}
      <div style={{ position:'relative', background: galleryBg }}>
        {isBlade && (
          <div style={{
            position:'absolute', top:14, left:14, zIndex:3,
            background: M.goldAccent, color: M.dark, padding:'5px 9px',
            fontFamily: M.mono, fontSize:9, letterSpacing:'0.18em',
          }}>{lang==='zh' ? '專利 · I-0000XX' : 'PATENT · I-0000XX'}</div>
        )}
        <ImagePH label={`${p.zh}\n主視角`}
          style={{ height:360, '--ph-bg':galleryBg, '--ph-fg':galleryFg, borderRadius:0 }} />
        <div style={{ position:'absolute', bottom:14, left:0, right:0, display:'flex', justifyContent:'center', gap:6 }}>
          {[0,1,2,3].map(i => (
            <button key={i} onClick={() => setActiveImg(i)} style={{
              width:8, height:8, borderRadius:'50%', border:'none', cursor:'pointer',
              background: i === activeImg ? (isBlade ? M.goldAccent : M.accent) : 'rgba(255,255,255,0.3)',
            }} />
          ))}
        </div>
      </div>

      {/* INFO */}
      <section style={{ padding:'24px 22px 32px' }}>
        <div style={{ display:'inline-flex', alignItems:'center', gap:8, marginBottom:14 }}>
          <span style={{ width:6, height:6, borderRadius:'50%', background: b.accent }} />
          <span style={{ fontSize:10, fontFamily: M.mono, letterSpacing:'0.18em', color: b.accent }}>
            {(lang==='zh' ? b.name : b.nameEn).toUpperCase()}
          </span>
        </div>
        <h1 style={{
          fontFamily: M.serifZh, fontWeight:600,
          fontSize: lang==='zh' ? 30 : 26, lineHeight:1.1, color: M.ink, marginBottom:18,
          letterSpacing: lang==='zh' ? '0.01em' : '-0.02em',
        }}>{lang==='zh' ? p.zh : p.en}</h1>

        <p style={{ fontSize:14, lineHeight:1.7, color: M.mute, marginBottom:24,
          fontFamily: lang==='zh' ? M.serifZh : M.serifEn,
          fontStyle: lang==='en' ? 'italic' : 'normal' }}>
          {getDesc()}
        </p>

        <div style={{ paddingTop:18, borderTop:`1px solid rgba(0,0,0,0.1)`, marginBottom:24 }}>
          <span style={{ fontFamily: M.serifEn, fontStyle:'italic', fontSize:42, color: M.ink }}>{p.price}</span>
          <div style={{ fontSize:11, color: M.accent, marginTop:6, fontFamily: M.mono, letterSpacing:'0.14em' }}>
            {lang==='zh' ? '免運 · 現貨' : 'FREE SHIP · IN STOCK'}
          </div>
        </div>

        {isBlade && (
          <div style={{ marginBottom:20 }}>
            <div style={{ fontSize:11, color: M.mute, fontFamily: M.mono, letterSpacing:'0.14em', marginBottom:10 }}>
              {lang==='zh' ? '尺寸' : 'SIZE'}
            </div>
            <div style={{ display:'flex', gap:8 }}>
              {sizes.map(s => (
                <button key={s} onClick={() => setSize(s)} style={{
                  flex:1, padding:'12px 0',
                  border: size===s ? `2px solid ${M.ink}` : `1px solid rgba(0,0,0,0.15)`,
                  background: size===s ? M.ink : 'transparent',
                  color: size===s ? M.paper : M.ink,
                  fontSize:13, borderRadius:10, fontFamily: M.serifZh, fontWeight:500, cursor:'pointer',
                }}>{s}</button>
              ))}
            </div>
          </div>
        )}

        {isBlade && (
          <div style={{ marginBottom:24 }}>
            <div style={{ fontSize:11, color: M.mute, fontFamily: M.mono, letterSpacing:'0.14em', marginBottom:10 }}>
              {lang==='zh' ? '刀身雷雕 (選配)' : 'ENGRAVING (OPTIONAL)'}
            </div>
            <input value={engrave} onChange={e => setEngrave(e.target.value)}
              placeholder={lang==='zh' ? '至多 6 個中文字' : 'Up to 12 chars'} style={{
              width:'100%', padding:'12px 14px', border:`1px solid rgba(0,0,0,0.15)`, borderRadius:10,
              fontFamily: M.serifZh, fontSize:14, background:'#fbfaf6', outline:'none', boxSizing:'border-box',
            }} />
          </div>
        )}

        <button data-no-route="1" onClick={() => {
          if (window.MinliCart) {
            const opts = {};
            if (isBlade && size) opts.size = size;
            if (isBlade && engrave.trim()) opts.engrave = engrave.trim();
            window.MinliCart.add(p.id, opts);
            setJustAdded(true);
            setTimeout(() => setJustAdded(false), 1800);
          }
        }} className="btn" style={{
          background: justAdded ? M.accent : M.ink, color: M.paper,
          justifyContent:'center', width:'100%', padding:'16px 20px', fontSize:14,
          transition:'background .2s', cursor:'pointer',
        }}>
          {justAdded
            ? (lang==='zh' ? '✓ 已加入購物車' : '✓ Added')
            : (lang==='zh' ? '加入購物車' : 'Add to bag')}
        </button>

        <div style={{ marginTop:18, padding:14, background: M.cream, borderRadius:10,
          display:'flex', flexDirection:'column', gap:6, fontSize:11, color: M.mute }}>
          {isBlade ? (
            <>
              <span>✓ {lang==='zh' ? '終身免費磨刀' : 'Lifetime sharpening'}</span>
              <span>✓ {lang==='zh' ? '7 天鑑賞 · SGS 鋼材檢驗' : '7-day returns · SGS verified'}</span>
            </>
          ) : (
            <>
              <span>✓ {lang==='zh' ? '台灣製造' : 'Made in Taiwan'}</span>
              <span>✓ {lang==='zh' ? '7 天鑑賞 · SGS 認證' : '7-day returns · SGS Certified'}</span>
            </>
          )}
        </div>
      </section>

      {/* SPECS */}
      <section style={{ padding:'40px 22px', background: M.cream }}>
        <MEyebrow>{lang==='zh' ? '規格' : 'SPECIFICATION'}</MEyebrow>
        <div style={{ marginTop:20 }}>
          {getSpecs().map((r, i) => (
            <div key={i} style={{
              padding:'12px 0', borderTop:`1px solid rgba(0,0,0,0.08)`,
              display:'flex', justifyContent:'space-between', gap:14,
            }}>
              <span style={{ fontSize:11, color: M.mute, fontFamily: M.mono, letterSpacing:'0.06em' }}>{r.l[lang]}</span>
              <span style={{ fontSize:13, color: M.ink, fontFamily: M.serifZh, fontWeight:500, textAlign:'right' }}>{r.v[lang]}</span>
            </div>
          ))}
        </div>
      </section>

      {isBlade && (
        <section style={{ padding:'40px 22px' }}>
          <MEyebrow>{lang==='zh' ? '主廚怎麼使用' : "CHEF'S USE"}</MEyebrow>
          <h2 style={{ marginTop:14, fontFamily: M.serifZh, fontSize:24, fontWeight:500, color: M.ink, lineHeight:1.2, marginBottom:20 }}>
            {lang==='zh' ? '五種日常切法。' : 'Five everyday cuts.'}
          </h2>
          <div style={{ display:'flex', gap:12, overflowX:'auto', margin:'0 -22px', padding:'0 22px', scrollbarWidth:'none' }}>
            {[
              { t:{zh:'切',en:'Slice'},    c:'#c97a48' },
              { t:{zh:'剁',en:'Chop'},     c:'#a85a30' },
              { t:{zh:'劈',en:'Cleave'},   c:'#8a4520' },
              { t:{zh:'削',en:'Pare'},     c:'#c47744' },
              { t:{zh:'去骨',en:'De-bone'},c:'#a1342a' },
            ].map((u, i) => (
              <div key={i} style={{ flex:'0 0 140px', background: M.cream, borderRadius:12, padding:14 }}>
                <ImagePH label={`USE ${i+1}`} style={{ height:110, borderRadius:8, '--ph-bg':'#e0d5be', '--ph-fg':'#7a6c58', marginBottom:12 }} />
                <div style={{ fontFamily: M.serifEn, fontSize:22, color: u.c, fontStyle:'italic', fontWeight:500 }}>0{i+1}</div>
                <h3 style={{ fontFamily: M.serifZh, fontSize:14, fontWeight:600, color: M.ink, marginTop:2 }}>{u.t[lang]}</h3>
              </div>
            ))}
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section style={{ padding:'40px 22px', background: M.paper }}>
          <MEyebrow>{lang==='zh' ? '同品牌其他商品' : 'MORE FROM THIS BRAND'}</MEyebrow>
          <div style={{ marginTop:18, display:'flex', flexDirection:'column', gap:12 }}>
            {related.map(rp => (
              <article key={rp.id} style={{ background: M.cream, borderRadius:12, padding:14, display:'flex', gap:14, alignItems:'center' }}>
                <ProductPH label={rp.zh.slice(0,4)} w={80} h={80} bg="#e6dccb" fg="#7a6c58" style={{ borderRadius:8, flexShrink:0 }} />
                <div style={{ flex:1, minWidth:0 }}>
                  <div style={{ fontSize:9, color: b.accent, fontFamily: M.mono, letterSpacing:'0.14em' }}>
                    {(lang==='zh' ? b.name : b.nameEn).toUpperCase()}
                  </div>
                  <h3 style={{ fontFamily: M.serifZh, fontSize:14, fontWeight:600, color: M.ink, lineHeight:1.3, marginTop:2 }}>{rp[lang]}</h3>
                  <div style={{ marginTop:6, display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                    <span style={{ fontFamily: M.serifEn, fontStyle:'italic', fontSize:16, color: M.ink }}>{rp.price}</span>
                    <button data-product-id={rp.id} style={{ background:'none', border:'none', fontFamily: M.mono, fontSize:10, color: M.accent, letterSpacing:'0.12em', cursor:'pointer', padding:0 }}>
                      {lang==='zh' ? '查看 →' : 'View →'}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      <MobileFooter lang={lang} />
    </div>
  );
};

// ===== Mobile Products Index =====
const MobileProductsIndex = () => {
  const [lang, setLang] = React.useState('zh');
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [brand, setBrand] = React.useState('all');
  const M = window.M_TOKENS;

  const list = brand === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.brand === brand);

  return (
    <div style={{
      position:'relative', height:'100%', overflow:'auto', background: M.paper,
      fontFamily:"'Manrope','Noto Sans TC',sans-serif",
    }}>
      <MTopBar lang={lang} setLang={setLang} onMenu={() => setMenuOpen(true)} />
      <MMenu open={menuOpen} onClose={() => setMenuOpen(false)} lang={lang} setLang={setLang} />

      <section style={{ padding:'32px 22px 18px' }}>
        <MEyebrow>{lang==='zh' ? `全產品 · ${PRODUCTS.length} 件` : `ALL · ${PRODUCTS.length} ITEMS`}</MEyebrow>
        <h1 style={{ marginTop:14, fontFamily: M.serifZh, fontSize: 44, fontWeight:500, color: M.ink, lineHeight:1.0 }}>
          {lang==='zh' ? '一整個廚房。' : <>The whole<br/>kitchen.</>}
        </h1>
        <p style={{ marginTop:14, fontSize:14, lineHeight:1.65, color: M.mute }}>
          {lang==='zh'
            ? `敏利國際五品牌共 ${PRODUCTS.length} 件商品——刀具、鍋具、保健、養生沖泡。`
            : `${PRODUCTS.length} items across five brands — knives, pans, supplements & brews.`}
        </p>
      </section>

      {/* sticky filter bar */}
      <div style={{
        position:'sticky', top:57, zIndex:30, background:'rgba(250,248,244,0.94)', backdropFilter:'blur(18px)',
        padding:'12px 0', borderTop:`1px solid rgba(0,0,0,0.06)`, borderBottom:`1px solid rgba(0,0,0,0.06)`,
      }}>
        <div style={{ display:'flex', gap:6, overflowX:'auto', padding:'0 22px', scrollbarWidth:'none' }}>
          <button onClick={() => setBrand('all')} style={mPill(brand==='all', null, M)}>
            {lang==='zh' ? `全部 ${PRODUCTS.length}` : `All · ${PRODUCTS.length}`}
          </button>
          {BRANDS.map(b => (
            <button key={b.id} onClick={() => setBrand(b.id)} style={mPill(brand===b.id, b.accent, M)}>
              <span style={{ width:5, height:5, borderRadius:'50%', background: brand===b.id ? '#fff' : b.accent, marginRight:6 }} />
              {lang==='zh' ? b.name : b.nameEn}
              <span style={{ marginLeft:6, fontSize:10, opacity:0.7 }}>{PRODUCTS.filter(p => p.brand===b.id).length}</span>
            </button>
          ))}
        </div>
      </div>

      {/* grid */}
      <section style={{ padding:'22px' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
          {list.map(p => {
            const b = BRANDS.find(x => x.id === p.brand);
            return (
              <article key={p.id} style={{ background:'#fbfaf6', borderRadius:12, padding:12, position:'relative' }}>
                {p.badge && (
                  <div style={{ position:'absolute', top:20, left:20, zIndex:2,
                    background: b.accent, color:'#fff', padding:'2px 6px', borderRadius:3,
                    fontSize:8, letterSpacing:'0.12em', fontFamily: M.mono }}>{p.badge[lang]}</div>
                )}
                <ProductPH label={p.zh.slice(0,6)} w="100%" h={130} bg="#e6dccb" fg="#7a6c58" style={{ borderRadius:8 }} />
                <div style={{ marginTop:10, display:'flex', alignItems:'center', gap:5 }}>
                  <span style={{ width:5, height:5, borderRadius:'50%', background: b.accent }} />
                  <span style={{ fontFamily: M.mono, fontSize:8, color: b.accent, letterSpacing:'0.14em' }}>
                    {(lang==='zh' ? b.name : b.nameEn).toUpperCase()}
                  </span>
                </div>
                <h3 style={{ marginTop:3, fontFamily: M.serifZh, fontSize:12, fontWeight:600, color: M.ink, lineHeight:1.25, minHeight:32 }}>{p[lang]}</h3>
                <div style={{ marginTop:8, paddingTop:8, borderTop:`1px solid rgba(0,0,0,0.06)`, display:'flex', justifyContent:'space-between', alignItems:'baseline' }}>
                  <span style={{ fontFamily: M.serifEn, fontStyle:'italic', fontSize:14, color: M.ink }}>{p.price}</span>
                  <button data-product-id={p.id} style={{ background:'none', border:'none', fontFamily: M.mono, fontSize:9, color: M.accent, letterSpacing:'0.1em', cursor:'pointer', padding:0 }}>
                    {lang==='zh' ? '查看 →' : 'View →'}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <MobileFooter lang={lang} />
    </div>
  );
};

const mPill = (active, accent, M) => ({
  display:'inline-flex', alignItems:'center', whiteSpace:'nowrap',
  padding:'7px 12px', border:'none', borderRadius:999,
  background: active ? (accent || M.ink) : 'rgba(0,0,0,0.04)',
  color: active ? '#fff' : M.ink,
  fontSize:12, fontWeight:500, fontFamily:"'Manrope','Noto Sans TC',sans-serif",
  cursor:'pointer', flexShrink:0,
});

const MobileFooter = ({ lang }) => {
  const M = window.M_TOKENS;
  const t = COPY[lang];
  return (
    <footer style={{ padding:'28px 22px 40px', background: M.paper, borderTop:`1px solid rgba(0,0,0,0.06)` }}>
      <div style={{ fontFamily: M.serifZh, fontSize:20, fontWeight:500, color: M.ink }}>{t.company}</div>
      <div style={{ fontFamily: M.serifEn, fontStyle:'italic', fontSize:13, color: M.mute, marginTop:2 }}>{t.companyEn}</div>
      <p style={{ marginTop:12, fontSize:10, color: M.mute, lineHeight:1.7 }}>{t.foodReg}</p>
      <div style={{ marginTop:20, paddingTop:14, borderTop:`1px solid rgba(0,0,0,0.06)`, fontSize:9, color: M.mute, fontFamily: M.mono, letterSpacing:'0.06em' }}>
        {t.footerNote}
      </div>
    </footer>
  );
};

Object.assign(window, { MobileBrandDetail, MobileProductDetail, MobileProductsIndex });

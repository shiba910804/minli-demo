// pages.jsx — three sub-pages of V1 that the user can navigate to in real life.
// Brand detail (老澤源), Product detail (a Jinmen knife), and Products index.
// Same design language as V1: warm white, terracotta accent, serif headlines.

const TOKENS = {
  ink: '#1a1612', mute: '#6b6258', paper: '#faf8f4', cream: '#f3ede0', accent: '#c97a48',
  dark: '#1c1814', goldAccent: '#c9a13a',
  serifZh: "'Noto Serif TC',serif",
  serifEn: "'Cormorant Garamond',serif",
  mono: "'JetBrains Mono',monospace",
};

// ===== Shared compact nav for sub-pages =====
const SubNav = ({ lang, setLang, crumb }) => (
  <nav style={{
    position:'sticky', top:0, zIndex:50,
    padding:'18px 96px', display:'flex', alignItems:'center', justifyContent:'space-between',
    background:'rgba(250,248,244,0.88)', backdropFilter:'blur(20px)',
    borderBottom:`1px solid rgba(0,0,0,0.05)`,
  }}>
    <div style={{ display:'flex', alignItems:'center', gap:14 }}>
      <div style={{ width:38, height:38, borderRadius:10,
        background:`linear-gradient(135deg, ${TOKENS.accent}, #a85a30)`, color:'#fff',
        fontFamily: TOKENS.serifZh, fontSize:22, fontWeight:700,
        display:'flex', alignItems:'center', justifyContent:'center' }}>敏</div>
      <div>
        <div style={{ fontSize:15, fontWeight:600, color: TOKENS.ink, letterSpacing:'0.04em' }}>MINLI</div>
        <div style={{ fontSize:10, color:'#8c8275', letterSpacing:'0.18em', fontFamily: TOKENS.mono }}>MIN INT&rsquo;L TRADING</div>
      </div>
    </div>
    <div style={{ display:'flex', alignItems:'center', gap:8, fontSize:13, color: TOKENS.mute }}>
      <a href="#" style={{ color: TOKENS.mute }}>{lang==='zh' ? '首頁' : 'Home'}</a>
      <span>/</span>
      {crumb.slice(0, -1).map((c, i) => (
        <React.Fragment key={i}>
          <a href="#" style={{ color: TOKENS.mute }}>{c}</a>
          <span>/</span>
        </React.Fragment>
      ))}
      <span style={{ color: TOKENS.ink, fontWeight:500 }}>{crumb[crumb.length-1]}</span>
    </div>
    <div style={{ display:'flex', alignItems:'center', gap:16 }}>
      <LanguageToggle lang={lang} setLang={setLang} />
      <button className="btn" style={{ background:'transparent', color: TOKENS.ink,
        padding:'8px 16px', boxShadow:'inset 0 0 0 1px rgba(0,0,0,0.15)', fontSize:13 }}>
        {lang==='zh'?'經銷洽詢':'Become a Partner'}
      </button>
    </div>
  </nav>
);

// ===== Shared footer =====
const SubFooter = ({ lang }) => {
  const t = COPY[lang];
  return (
    <footer style={{ padding:'56px 96px 32px', background: TOKENS.paper, borderTop:`1px solid rgba(0,0,0,0.06)` }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', flexWrap:'wrap', gap:24 }}>
        <div>
          <div style={{ fontFamily: lang==='zh' ? TOKENS.serifZh : TOKENS.serifEn, fontSize:28, fontWeight:500, color: TOKENS.ink }}>{t.company}</div>
          <div style={{ fontSize:12, color: TOKENS.mute, marginTop:8, fontFamily: TOKENS.mono, letterSpacing:'0.06em' }}>{t.foodReg}</div>
        </div>
        <div style={{ display:'flex', gap:32, fontSize:13, color: TOKENS.mute }}>
          {BRANDS.map(b => <a key={b.id} href="#" style={{ color: TOKENS.mute }}>{lang==='zh' ? b.name : b.nameEn}</a>)}
        </div>
      </div>
      <div style={{ marginTop:24, paddingTop:24, borderTop:`1px solid rgba(0,0,0,0.06)`,
        display:'flex', justifyContent:'space-between', fontSize:11, color: TOKENS.mute, fontFamily: TOKENS.mono }}>
        <span>{t.footerNote}</span>
        <span>0800-000-893 · service@minli.com.tw</span>
      </div>
    </footer>
  );
};

// =============================================================
// BRAND DETAIL — 老澤源 (Lao Ze Yuan)
// =============================================================
const BrandDetailPage = () => {
  const [lang, setLang] = React.useState('zh');
  const b = BRANDS.find(x => x.id === 'laozeyuan');
  const products = PRODUCTS.filter(p => p.brand === 'laozeyuan');

  return (
    <div className="variant-root" style={{ background: TOKENS.paper, fontFamily:"'Manrope','Noto Sans TC',sans-serif" }}>
      <SubNav lang={lang} setLang={setLang}
        crumb={lang==='zh' ? ['品牌', '老澤源'] : ['Brands', 'Lao Ze Yuan']} />

      {/* HERO — full bleed dark */}
      <section style={{
        background: b.bg, color: b.fg, padding:'120px 96px 96px', position:'relative', overflow:'hidden',
      }}>
        {/* big seal silhouette */}
        <svg viewBox="0 0 100 140" style={{
          position:'absolute', right: 96, top: 80, width: 380, height: 540,
          opacity: 0.12,
        }}>
          <ellipse cx="50" cy="70" rx="42" ry="62" fill="none" stroke={b.accent} strokeWidth="2"/>
          <text x="50" y="78" textAnchor="middle" fontSize="48" fontFamily="'Noto Serif TC',serif" fontWeight="700" fill={b.accent}>源</text>
        </svg>

        <div style={{ maxWidth:1100, position:'relative' }}>
          <div style={{ fontFamily: TOKENS.mono, fontSize:12, letterSpacing:'0.22em',
            color: b.accent, marginBottom: 36 }}>
            — {lang==='zh' ? '品牌列傳 · 第五章' : 'Brand chronicle · Chapter V'}
          </div>

          <h1 style={{
            fontFamily: TOKENS.serifZh, fontWeight: 700,
            fontSize: lang==='zh' ? 220 : 180, lineHeight: 0.88, letterSpacing: lang==='zh' ? '0.02em' : '-0.03em',
            marginBottom: 56,
          }}>
            {lang==='zh' ? b.name : b.nameEn}
          </h1>

          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap: 80, marginBottom: 80, alignItems:'flex-end' }}>
            <p style={{ fontSize: 22, lineHeight: 1.6, color:'rgba(242,229,207,0.85)',
              fontFamily: lang==='zh' ? TOKENS.serifZh : TOKENS.serifEn,
              fontStyle: lang==='en' ? 'italic' : 'normal',
            }}>
              {lang==='zh'
                ? '「我們不做廉價的刀。三代人只做一件事——把砲彈鋼，鍛成廚房最好的工具。」'
                : '"We do not make cheap knives. Three generations of one family, doing one thing — turning shell steel into the kitchen\u2019s finest tool."'}
            </p>
            <div>
              <div style={{ fontFamily: TOKENS.mono, fontSize:11, color: b.accent, letterSpacing:'0.18em', marginBottom: 14 }}>
                {lang==='zh' ? '在數字裡' : 'BY THE NUMBERS'}
              </div>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:24 }}>
                {[
                  { k:'1958', v: { zh:'砲擊起源', en:'Shelling origin' } },
                  { k:'3',    v: { zh:'代相傳',   en:'generations' } },
                  { k:'30',   v: { zh:'刀／砲彈', en:'knives/shell' } },
                  { k:'58HRC',v: { zh:'刀刃硬度', en:'Blade Rockwell' } },
                ].map((m, i) => (
                  <div key={i}>
                    <div style={{ fontFamily: TOKENS.serifEn, fontSize: 44, color: b.accent, lineHeight:1, fontWeight:500 }}>{m.k}</div>
                    <div style={{ fontSize:12, color:'rgba(242,229,207,0.6)', marginTop:6 }}>{m.v[lang]}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ display:'flex', gap:14 }}>
            <button className="btn" style={{ background: b.accent, color: b.fg }}>
              {lang==='zh' ? '購買老澤源' : 'Shop Lao Ze Yuan'} <span className="btn-arrow">→</span>
            </button>
            <button className="btn" style={{ background:'transparent', color: b.fg, boxShadow:`inset 0 0 0 1px rgba(242,229,207,0.3)` }}>
              {lang==='zh' ? '工藝紀錄影片' : 'Craft documentary'} ▶
            </button>
          </div>
        </div>
      </section>

      {/* STORY — editorial two-column */}
      <section style={{ padding:'160px 96px', background: TOKENS.paper }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1.4fr', gap:96 }}>
          <div style={{ position:'sticky', top:120, alignSelf:'start' }}>
            <div style={{ fontFamily: TOKENS.mono, fontSize:12, letterSpacing:'0.22em', color: TOKENS.accent }}>
              {lang==='zh' ? '一只紅印的故事' : 'THE STORY BEHIND THE SEAL'}
            </div>
            <h2 style={{ fontFamily: TOKENS.serifZh, fontWeight:500, fontSize: 56, lineHeight:1.1, color: TOKENS.ink, marginTop: 24 }}>
              {lang==='zh' ? '從砲火到爐火。' : <>From shellfire,<br/>to stovetop.</>}
            </h2>
          </div>

          <div style={{ display:'flex', flexDirection:'column', gap:36 }}>
            {[
              { y:'1958', t:{zh:'砲擊金門', en:'The shelling of Jinmen'},
                d:{ zh:'冷戰時期，超過四十七萬發砲彈落在金門，島上鋼材意外充裕。當砲火停止，匠人開始將砲彈鋼撿回鍛造農具。',
                    en:'During the Cold War over 470,000 shells fell on Jinmen — leaving the island awash in steel. When the firing stopped, smiths began forging the metal into farming tools.' } },
              { y:'197X', t:{zh:'第一代制刀', en:'The first generation'},
                d:{ zh:'老澤源初代師傅將砲彈鋼運用於廚刀，一塊鋼可打三十把。從金門帶到台灣，從工地走進廚房。',
                    en:'The first master of Lao Ze Yuan brought shell-steel into the kitchen. One shell yielded thirty blades — from foundry to home.' } },
              { y:'199X', t:{zh:'敏利接手代工', en:'Minli takes the helm'},
                d:{ zh:'敏利國際與老澤源達成合作，將工法現代化，並引入專利波浪鍛工技術——保留古法手感，加入今日強度。',
                    en:'Minli International partners with Lao Ze Yuan, modernising the process and introducing the patented wave-edge forging — heritage in feel, modern in strength.' } },
              { y:'今日 / Today', t:{zh:'三件神器', en:'The three blades'},
                d:{ zh:'冷凍刀、主廚刀、砍骨刀——共組老澤源「金門三件」。每一把皆由同一位師傅完成，刀身鏨有專屬編號。',
                    en:'Frozen knife, chef\u2019s knife, bone cleaver — together the Lao Ze Yuan "Jinmen three". Each forged by the same hand, stamped with a unique serial.' } },
            ].map((row, i) => (
              <div key={i} style={{ display:'grid', gridTemplateColumns:'120px 1fr', gap:32, borderTop:`1px solid rgba(0,0,0,0.1)`, paddingTop:28 }}>
                <div style={{ fontFamily: TOKENS.serifEn, fontStyle:'italic', fontSize:32, color: TOKENS.accent, lineHeight:1 }}>{row.y}</div>
                <div>
                  <h3 style={{ fontFamily: TOKENS.serifZh, fontSize:26, fontWeight:600, color: TOKENS.ink, marginBottom:10 }}>{row.t[lang]}</h3>
                  <p style={{ fontSize:16, lineHeight:1.75, color: TOKENS.mute, maxWidth: 620 }}>{row.d[lang]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CRAFT — 4-step process strip */}
      <section style={{ padding:'120px 96px', background: TOKENS.cream }}>
        <div style={{ fontFamily: TOKENS.mono, fontSize:12, letterSpacing:'0.22em', color: TOKENS.accent, marginBottom:16 }}>
          — {lang==='zh' ? '工序' : 'THE PROCESS'}
        </div>
        <h2 style={{ fontFamily: TOKENS.serifZh, fontSize: 60, fontWeight:500, color: TOKENS.ink, lineHeight:1.1, marginBottom: 64, maxWidth: 900 }}>
          {lang==='zh' ? '一把刀，要經過六十四道工序。' : 'A blade passes through sixty-four steps.'}
        </h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:0, borderTop:`1px solid rgba(0,0,0,0.15)` }}>
          {[
            { n:'01', t:{zh:'選鋼',en:'Steel selection'}, d:{zh:'砲彈鋼回收熔煉，去除雜質。',en:'Shell steel reclaimed and refined.'} },
            { n:'02', t:{zh:'鍛打',en:'Forging'},       d:{zh:'1200°C 高溫反覆鍛打十二回。',en:'Twelve cycles at 1200°C.'} },
            { n:'03', t:{zh:'波浪',en:'Wave edge'},     d:{zh:'專利波浪刃口鏨刻成形。',en:'Patented wave edge stamped in.'} },
            { n:'04', t:{zh:'開鋒',en:'Sharpening'},    d:{zh:'手工開鋒、拋光、上柄。',en:'Hand sharpening, polish, handle.'} },
          ].map((step, i) => (
            <div key={i} style={{ padding:'40px 28px 32px', borderRight: i < 3 ? `1px solid rgba(0,0,0,0.15)` : 'none', borderBottom:`1px solid rgba(0,0,0,0.15)` }}>
              <div style={{ fontFamily: TOKENS.serifEn, fontStyle:'italic', fontSize:64, color: TOKENS.accent, lineHeight:1 }}>{step.n}</div>
              <h3 style={{ fontFamily: TOKENS.serifZh, fontSize:24, fontWeight:600, color: TOKENS.ink, marginTop:18 }}>{step.t[lang]}</h3>
              <p style={{ fontSize:13, color: TOKENS.mute, marginTop:8, lineHeight:1.6 }}>{step.d[lang]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS — the three blades */}
      <section style={{ padding:'140px 96px', background: TOKENS.paper }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom: 56 }}>
          <div>
            <div style={{ fontFamily: TOKENS.mono, fontSize:12, letterSpacing:'0.22em', color: TOKENS.accent }}>
              — {lang==='zh' ? '老澤源．金門三件' : 'THE JINMEN THREE'}
            </div>
            <h2 style={{ fontFamily: TOKENS.serifZh, fontSize: 64, fontWeight:500, color: TOKENS.ink, lineHeight:1.1, marginTop:18 }}>
              {lang==='zh' ? '三把刀，照顧整個廚房。' : 'Three blades, one whole kitchen.'}
            </h2>
          </div>
          <div style={{ fontSize:13, color: TOKENS.mute }}>{products.length} {lang==='zh' ? '件商品' : 'items'}</div>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:32 }}>
          {products.map((p, i) => (
            <article key={p.id} style={{ background: TOKENS.cream, borderRadius:18, padding:28, position:'relative' }}>
              {p.badge && (
                <div style={{
                  position:'absolute', top:40, left:40, zIndex:2,
                  background: b.accent, color:'#fff', padding:'4px 10px', borderRadius:4,
                  fontSize:10, letterSpacing:'0.16em', fontFamily: TOKENS.mono,
                }}>{p.badge[lang]}</div>
              )}
              <ProductPH label={`${p.zh}\n— knife on linen, top-down`} w="100%" h={380} bg="#e6dccb" fg="#7a6c58" style={{ borderRadius:12 }} />
              <div style={{ marginTop:24, fontFamily: TOKENS.mono, fontSize:11, letterSpacing:'0.18em', color: b.accent }}>
                NO.0{i+1}  ·  {lang==='zh' ? '金門鋼' : 'JINMEN STEEL'}
              </div>
              <h3 style={{ marginTop:10, fontFamily: TOKENS.serifZh, fontSize:26, fontWeight:600, color: TOKENS.ink, lineHeight:1.25, minHeight:64 }}>{p[lang]}</h3>
              <div style={{ marginTop:18, display:'flex', justifyContent:'space-between', alignItems:'baseline', borderTop:`1px solid rgba(0,0,0,0.1)`, paddingTop:16 }}>
                <span style={{ fontFamily: TOKENS.serifEn, fontSize:24, fontStyle:'italic', color: TOKENS.ink }}>{p.price}</span>
                <button data-product-id={p.id} style={{ background:'none', border:'none', fontFamily: TOKENS.mono, fontSize:12, color: b.accent, letterSpacing:'0.12em', cursor:'pointer' }}>
                  {lang==='zh' ? '查看 →' : 'DETAIL →'}
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CARE — quiet ending */}
      <section style={{ padding:'120px 96px', background: TOKENS.cream }}>
        <div style={{ display:'grid', gridTemplateColumns:'1.4fr 1fr', gap:80, alignItems:'center' }}>
          <div>
            <div style={{ fontFamily: TOKENS.mono, fontSize:12, letterSpacing:'0.22em', color: TOKENS.accent }}>
              — {lang==='zh' ? '保養與終身保固' : 'CARE & LIFETIME WARRANTY'}
            </div>
            <h2 style={{ fontFamily: TOKENS.serifZh, fontSize:48, fontWeight:500, color: TOKENS.ink, lineHeight:1.15, marginTop:18, marginBottom: 24 }}>
              {lang==='zh' ? '一把刀，能用三代。' : 'A knife for three generations.'}
            </h2>
            <p style={{ fontSize:17, lineHeight:1.75, color: TOKENS.mute, maxWidth:540 }}>
              {lang==='zh'
                ? '老澤源所有刀具提供終身免費磨刀服務。寄回原廠，師傅親手重新開鋒，連柄一同檢修——一把刀，陪你從新婚走到孩子的成家。'
                : 'Every Lao Ze Yuan blade comes with lifetime sharpening. Send it home — the same hands that forged it will sharpen it. A knife to walk with you from one wedding to the next.'}
            </p>
          </div>
          <ImagePH label={"BLADE CARE\n— hands on stone wheel\n— 800 × 600"}
            style={{ height: 360, borderRadius:14, '--ph-bg':'#e0d5be', '--ph-fg':'#7a6c58' }} />
        </div>
      </section>

      <SubFooter lang={lang} />
    </div>
  );
};

// =============================================================
// PRODUCT DETAIL — dynamic, reads productId prop
// =============================================================
const ProductDetailPage = ({ productId }) => {
  const pid = productId || window.__selectedProduct || 'lzy-chef';
  const p = PRODUCTS.find(x => x.id === pid) || PRODUCTS.find(x => x.id === 'lzy-chef');
  const b = BRANDS.find(x => x.id === p.brand);

  const [lang, setLang] = React.useState('zh');
  const [activeImg, setActiveImg] = React.useState(0);
  const [size, setSize] = React.useState('8寸');
  const [engrave, setEngrave] = React.useState('');
  const [justAdded, setJustAdded] = React.useState(false);

  const isBlade = p.cat.zh === '廚房刀剪' || p.cat.zh === '高階刀具';
  const galleryBg = isBlade ? '#1c1814' : '#e8e2d8';
  const galleryFg = isBlade ? '#5e5240' : '#8a7e6a';
  const sizes = isBlade ? (lang==='zh' ? ['6寸','8寸','10寸'] : ['6"','8"','10"']) : [];

  React.useEffect(() => {
    setSize(isBlade ? (lang==='zh' ? '8寸' : '8"') : '');
    setActiveImg(0);
    setEngrave('');
  }, [pid, isBlade]);

  const getDesc = () => {
    if (isBlade) return lang==='zh'
      ? '老澤源「金門三件」系列之一。專利金門砲彈鋼精鍛而成，歷經 64 道工序，鋒利耐用，為台灣頂級手工刀具代表。'
      : 'Part of the Lao Ze Yuan Jinmen Series. Forged from patented Jinmen artillery steel through 64 precision steps — a benchmark of Taiwanese handcraft.';
    if (p.cat.zh === '機能食品' || p.cat.zh === '保健食品') return lang==='zh'
      ? '小台灣嚴選保健配方，採用台灣在地優質原料，通過 SGS 認證，是守護全家健康的最佳選擇。'
      : 'Carefully formulated supplement from Little Taiwan Store, sourced from premium Taiwanese ingredients and SGS-certified for your family\'s wellbeing.';
    if (p.cat.zh === '鍋具') return lang==='zh'
      ? 'Junda 精工鑄造鍋具，採用優質鋁合金材料，導熱均勻，輕量耐用，是現代廚房的必備夥伴。'
      : 'Junda precision-cast cookware — premium alloy construction, even heat distribution, and everyday durability.';
    return lang==='zh'
      ? '敏利嚴選品項，以優質原料與嚴格品管，帶給您最純粹的生活體驗。'
      : 'A Min International select — quality ingredients, rigorous standards, everyday life elevated.';
  };

  const getSpecs = () => {
    if (isBlade) return [
      { l:{zh:'刀身材質',en:'Blade'},    v:{zh:'金門砲彈鋼（再煉）',en:'Jinmen artillery steel'} },
      { l:{zh:'刀刃硬度',en:'Hardness'}, v:{zh:'HRC 58–60',         en:'HRC 58–60'} },
      { l:{zh:'刀身長度',en:'Length'},   v:{zh:'8 寸 / 203 mm',     en:'8 in / 203 mm'} },
      { l:{zh:'總重',    en:'Weight'},   v:{zh:'225 g',             en:'225 g'} },
      { l:{zh:'手柄',    en:'Handle'},   v:{zh:'紫檀木 · 三鉚釘',    en:'Rosewood · 3-rivet'} },
      { l:{zh:'產地',    en:'Origin'},   v:{zh:'台灣 · 金門',        en:'Jinmen, Taiwan'} },
    ];
    if (p.cat.zh === '機能食品' || p.cat.zh === '保健食品') return [
      { l:{zh:'品牌',    en:'Brand'},    v:{zh:b.name,              en:b.nameEn} },
      { l:{zh:'劑型',    en:'Form'},     v:{zh:'膠囊 / 錠劑',        en:'Capsule / Tablet'} },
      { l:{zh:'每日份量',en:'Serving'},  v:{zh:'1–2 粒',             en:'1–2 per day'} },
      { l:{zh:'認證',    en:'Cert'},     v:{zh:'SGS 通過',           en:'SGS Certified'} },
      { l:{zh:'保存',    en:'Storage'},  v:{zh:'常溫避光',            en:'Cool, dry place'} },
      { l:{zh:'產地',    en:'Origin'},   v:{zh:'台灣製造',            en:'Made in Taiwan'} },
    ];
    if (p.cat.zh === '鍋具') return [
      { l:{zh:'材質',    en:'Material'}, v:{zh:'鋁合金不沾',          en:'Non-stick alloy'} },
      { l:{zh:'尺寸',    en:'Size'},     v:{zh:'28 cm',             en:'28 cm'} },
      { l:{zh:'重量',    en:'Weight'},   v:{zh:'880 g',             en:'880 g'} },
      { l:{zh:'適用爐',  en:'Stove'},    v:{zh:'電 / 瓦斯 / IH',     en:'Gas / IH / Electric'} },
      { l:{zh:'認證',    en:'Cert'},     v:{zh:'SGS 安全通過',        en:'SGS Certified'} },
      { l:{zh:'產地',    en:'Origin'},   v:{zh:'台灣',               en:'Taiwan'} },
    ];
    return [
      { l:{zh:'品牌',    en:'Brand'},    v:{zh:b.name,              en:b.nameEn} },
      { l:{zh:'規格',    en:'Size'},     v:{zh:'標準裝',              en:'Standard'} },
      { l:{zh:'成分',    en:'Ingredients'},v:{zh:'天然原料',          en:'Natural ingredients'} },
      { l:{zh:'保存',    en:'Storage'},  v:{zh:'常溫保存',            en:'Room temperature'} },
      { l:{zh:'認證',    en:'Cert'},     v:{zh:'SGS 通過',           en:'SGS Certified'} },
      { l:{zh:'產地',    en:'Origin'},   v:{zh:'台灣製造',            en:'Made in Taiwan'} },
    ];
  };

  const related = PRODUCTS.filter(x => x.brand === p.brand && x.id !== p.id).slice(0, 3);
  const crumb = lang==='zh' ? ['品牌', b.name, p.zh] : ['Brands', b.nameEn, p.en];

  return (
    <div className="variant-root" style={{ background:TOKENS.paper, fontFamily:"'Manrope','Noto Sans TC',sans-serif" }}>
      <SubNav lang={lang} setLang={setLang} crumb={crumb} />

      {/* PDP */}
      <section style={{ padding:'56px 96px 96px', display:'grid', gridTemplateColumns:'1.3fr 1fr', gap:80 }}>
        {/* Gallery */}
        <div>
          <div style={{ position:'relative', background:galleryBg, borderRadius:18, overflow:'hidden', marginBottom:14 }}>
            {isBlade && (
              <div style={{
                position:'absolute', top:24, left:24, zIndex:3,
                background:TOKENS.goldAccent, color:'#1c1814', padding:'8px 14px',
                fontFamily:TOKENS.mono, fontSize:11, letterSpacing:'0.18em',
              }}>{lang==='zh' ? '專利編號 · I-0000XX' : 'PATENT · I-0000XX'}</div>
            )}
            <ImagePH label={`${p.zh}\n主視角\n— 1400 × 1000`}
              style={{ height:700, '--ph-bg':galleryBg, '--ph-fg':galleryFg, borderRadius:0 }} />
          </div>
          <div data-no-route="1" style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:14 }}>
            {[0,1,2,3].map(i => (
              <button key={i} onClick={() => setActiveImg(i)} style={{
                padding:0, border:i===activeImg ? `2px solid ${TOKENS.accent}` : `1px solid rgba(0,0,0,0.12)`,
                borderRadius:10, overflow:'hidden', background:galleryBg, cursor:'pointer',
              }}>
                <ImagePH label={`${i+1}`} style={{ height:100, '--ph-bg':galleryBg, '--ph-fg':galleryFg }} />
              </button>
            ))}
          </div>

          {/* Spec card */}
          <div style={{ marginTop:48 }}>
            <div style={{ fontFamily:TOKENS.mono, fontSize:11, letterSpacing:'0.22em', color:TOKENS.accent }}>
              — {lang==='zh' ? '規格' : 'SPECIFICATION'}
            </div>
            <div style={{ marginTop:20, display:'grid', gridTemplateColumns:'1fr 1fr', gap:0 }}>
              {getSpecs().map((r, i) => (
                <div key={i} style={{
                  padding:'14px 0', borderTop:`1px solid rgba(0,0,0,0.08)`,
                  display:'flex', justifyContent:'space-between', gap:14,
                  borderRight: i%2===0 ? `1px solid rgba(0,0,0,0.08)` : 'none',
                  paddingRight: i%2===0 ? 24 : 0,
                  paddingLeft:  i%2===1 ? 24 : 0,
                }}>
                  <span style={{ fontSize:12, color:TOKENS.mute, fontFamily:TOKENS.mono, letterSpacing:'0.08em' }}>{r.l[lang]}</span>
                  <span style={{ fontSize:13, color:TOKENS.ink, fontFamily:TOKENS.serifZh, fontWeight:500, textAlign:'right' }}>{r.v[lang]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Info column */}
        <div style={{ position:'sticky', top:96, alignSelf:'start' }}>
          <div style={{ display:'inline-flex', alignItems:'center', gap:10, marginBottom:22 }}>
            <span style={{ width:8, height:8, borderRadius:'50%', background:b.accent }} />
            <span style={{ fontSize:12, fontFamily:TOKENS.mono, letterSpacing:'0.18em', color:b.accent }}>
              {lang==='zh' ? b.name : b.nameEn}
            </span>
          </div>

          <h1 style={{
            fontFamily:TOKENS.serifZh, fontWeight:600,
            fontSize: lang==='zh' ? 56 : 42, lineHeight:1.05, color:TOKENS.ink, marginBottom:24,
            letterSpacing: lang==='zh' ? '0.01em' : '-0.02em',
          }}>{lang==='zh' ? p.zh : p.en}</h1>

          <p style={{ fontSize:17, lineHeight:1.7, color:TOKENS.mute, marginBottom:36,
            fontFamily: lang==='zh' ? TOKENS.serifZh : TOKENS.serifEn,
            fontStyle: lang==='en' ? 'italic' : 'normal' }}>
            {getDesc()}
          </p>

          {/* Price */}
          <div style={{ paddingTop:24, borderTop:`1px solid rgba(0,0,0,0.1)`, marginBottom:28 }}>
            <div style={{ display:'flex', alignItems:'baseline', gap:14 }}>
              <span style={{ fontFamily:TOKENS.serifEn, fontStyle:'italic', fontSize:54, color:TOKENS.ink }}>{p.price}</span>
              <span style={{ fontSize:11, color:TOKENS.accent, fontFamily:TOKENS.mono, letterSpacing:'0.16em', marginLeft:'auto' }}>
                {lang==='zh' ? '免運 · 現貨' : 'FREE SHIP · IN STOCK'}
              </span>
            </div>
          </div>

          {/* Size picker — blades only */}
          {isBlade && (
            <div style={{ marginBottom:24 }}>
              <div style={{ fontSize:12, color:TOKENS.mute, fontFamily:TOKENS.mono, letterSpacing:'0.14em', marginBottom:10 }}>
                {lang==='zh' ? '尺寸' : 'SIZE'}
              </div>
              <div data-no-route="1" style={{ display:'flex', gap:10 }}>
                {sizes.map(s => (
                  <button key={s} onClick={() => setSize(s)} style={{
                    padding:'12px 22px',
                    border: size===s ? `2px solid ${TOKENS.ink}` : `1px solid rgba(0,0,0,0.15)`,
                    background: size===s ? TOKENS.ink : 'transparent',
                    color: size===s ? TOKENS.paper : TOKENS.ink,
                    fontSize:14, borderRadius:10, fontFamily:TOKENS.serifZh, fontWeight:500, cursor:'pointer',
                  }}>{s}</button>
                ))}
              </div>
            </div>
          )}

          {/* Engraving — blades only */}
          {isBlade && (
            <div style={{ marginBottom:28 }}>
              <div style={{ fontSize:12, color:TOKENS.mute, fontFamily:TOKENS.mono, letterSpacing:'0.14em', marginBottom:10 }}>
                {lang==='zh' ? '刀身雷雕（選配）' : 'BLADE ENGRAVING (OPTIONAL)'}
              </div>
              <input value={engrave} onChange={e => setEngrave(e.target.value)}
                placeholder={lang==='zh' ? '至多 6 個中文字／12 個英數' : 'Up to 12 characters'}
                style={{
                  width:'100%', padding:'14px 16px', border:`1px solid rgba(0,0,0,0.15)`,
                  borderRadius:10, fontFamily:TOKENS.serifZh, fontSize:15,
                  background:'#fbfaf6', outline:'none', boxSizing:'border-box',
                }} />
            </div>
          )}

          {/* CTAs */}
          <div style={{ display:'flex', gap:12 }} data-no-route="1">
            <button className="btn" onClick={() => {
              if (window.MinliCart) {
                const opts = {};
                if (isBlade && size) opts.size = size;
                if (isBlade && engrave.trim()) opts.engrave = engrave.trim();
                window.MinliCart.add(p.id, opts);
                setJustAdded(true);
                setTimeout(() => setJustAdded(false), 1800);
              }
            }} style={{
              background: justAdded ? TOKENS.accent : TOKENS.ink,
              color:TOKENS.paper, flex:1, justifyContent:'center',
              padding:'18px 24px', fontSize:15, transition:'background .2s', cursor:'pointer',
            }}>
              {justAdded
                ? (lang==='zh' ? '✓ 已加入購物車' : '✓ Added to bag')
                : (lang==='zh' ? '加入購物車' : 'Add to bag')}
            </button>
            <button className="btn" style={{ background:'transparent', color:TOKENS.ink, boxShadow:`inset 0 0 0 1px ${TOKENS.ink}`, padding:'18px 22px', cursor:'pointer' }}>♡</button>
          </div>

          {/* Trust strip */}
          <div style={{ marginTop:32, padding:20, background:TOKENS.cream, borderRadius:12, display:'flex', gap:24, fontSize:12, color:TOKENS.mute }}>
            {isBlade ? (
              <>
                <span>✓ {lang==='zh' ? '終身免費磨刀' : 'Lifetime sharpening'}</span>
                <span>✓ {lang==='zh' ? '7 天鑑賞' : '7-day returns'}</span>
                <span>✓ {lang==='zh' ? 'SGS 鋼材檢驗' : 'SGS verified'}</span>
              </>
            ) : (
              <>
                <span>✓ {lang==='zh' ? '台灣製造' : 'Made in Taiwan'}</span>
                <span>✓ {lang==='zh' ? '7 天鑑賞' : '7-day returns'}</span>
                <span>✓ {lang==='zh' ? 'SGS 認證' : 'SGS Certified'}</span>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Chef's Use — blades only */}
      {isBlade && (
        <section style={{ padding:'120px 96px', background:TOKENS.cream }}>
          <div style={{ fontFamily:TOKENS.mono, fontSize:12, letterSpacing:'0.22em', color:TOKENS.accent, marginBottom:16 }}>
            — {lang==='zh' ? '主廚怎麼使用' : "CHEF'S USE"}
          </div>
          <h2 style={{ fontFamily:TOKENS.serifZh, fontSize:54, fontWeight:500, color:TOKENS.ink, lineHeight:1.1, marginBottom:64, maxWidth:900 }}>
            {lang==='zh' ? '一把主廚刀，五種日常切法。' : 'One chef knife, five everyday cuts.'}
          </h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:18 }}>
            {[
              { t:{zh:'切',en:'Slice'},     c:'#c97a48' },
              { t:{zh:'剁',en:'Chop'},      c:'#a85a30' },
              { t:{zh:'劈',en:'Cleave'},    c:'#8a4520' },
              { t:{zh:'削',en:'Pare'},      c:'#c47744' },
              { t:{zh:'去骨',en:'De-bone'}, c:'#a1342a' },
            ].map((u, i) => (
              <div key={i} style={{ background:TOKENS.paper, borderRadius:14, padding:24 }}>
                <ImagePH label={`USE ${i+1}
— action shot`} style={{ height:200, borderRadius:10, '--ph-bg':'#e0d5be', '--ph-fg':'#7a6c58', marginBottom:18 }} />
                <div style={{ fontFamily:TOKENS.serifEn, fontSize:36, color:u.c, fontStyle:'italic', fontWeight:500 }}>0{i+1}</div>
                <h3 style={{ fontFamily:TOKENS.serifZh, fontSize:22, fontWeight:600, color:TOKENS.ink, marginTop:4 }}>{u.t[lang]}</h3>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Related products */}
      {related.length > 0 && (
        <section style={{ padding:'120px 96px', background:TOKENS.paper }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:40 }}>
            <h2 style={{ fontFamily:TOKENS.serifZh, fontSize:44, fontWeight:500, color:TOKENS.ink }}>
              {lang==='zh' ? '同品牌其他商品。' : 'More from this brand.'}
            </h2>
            <a href="#products" style={{ fontSize:13, color:TOKENS.accent, fontFamily:TOKENS.mono, letterSpacing:'0.12em' }}>
              {lang==='zh' ? '查看全部 →' : 'VIEW ALL →'}
            </a>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:`repeat(${Math.min(related.length,3)},1fr)`, gap:24 }}>
            {related.map(rp => (
              <article key={rp.id} style={{ background:TOKENS.cream, borderRadius:14, padding:22 }}>
                <ProductPH label={rp.zh} w="100%" h={260} bg="#e6dccb" fg="#7a6c58" style={{ borderRadius:10 }} />
                <div style={{ marginTop:18, fontSize:11, color:TOKENS.accent, fontFamily:TOKENS.mono, letterSpacing:'0.14em' }}>
                  {(lang==='zh' ? b.name : b.nameEn).toUpperCase()}
                </div>
                <h3 style={{ marginTop:6, fontFamily:TOKENS.serifZh, fontSize:18, fontWeight:600, color:TOKENS.ink, lineHeight:1.3 }}>{rp[lang]}</h3>
                <div style={{ marginTop:14, display:'flex', justifyContent:'space-between', alignItems:'baseline' }}>
                  <span style={{ fontFamily:TOKENS.serifEn, fontStyle:'italic', fontSize:20, color:TOKENS.ink }}>{rp.price}</span>
                  <button data-product-id={rp.id} style={{ background:'none', border:'none', fontFamily:TOKENS.mono, fontSize:12, color:TOKENS.accent, letterSpacing:'0.12em', cursor:'pointer', padding:0 }}>
                    {lang==='zh' ? '查看 →' : 'View →'}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      <SubFooter lang={lang} />
    </div>
  );
};

// =============================================================
// PRODUCTS INDEX — filterable grid of every product
// =============================================================
const ProductsIndexPage = () => {
  const [lang, setLang] = React.useState('zh');
  const [brand, setBrand] = React.useState('all');
  const [sort, setSort] = React.useState('default');
  const [view, setView] = React.useState('grid'); // grid | list

  const list = React.useMemo(() => {
    let out = brand === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.brand === brand);
    if (sort === 'price-asc')  out = [...out].sort((a,b) => parseInt(a.price.replace(/\D/g,'')) - parseInt(b.price.replace(/\D/g,'')));
    if (sort === 'price-desc') out = [...out].sort((a,b) => parseInt(b.price.replace(/\D/g,'')) - parseInt(a.price.replace(/\D/g,'')));
    return out;
  }, [brand, sort]);

  return (
    <div className="variant-root" style={{ background: TOKENS.paper, fontFamily:"'Manrope','Noto Sans TC',sans-serif" }}>
      <SubNav lang={lang} setLang={setLang}
        crumb={lang==='zh' ? ['產品'] : ['Products']} />

      {/* hero */}
      <section style={{ padding:'96px 96px 56px' }}>
        <div style={{ fontFamily: TOKENS.mono, fontSize:12, letterSpacing:'0.22em', color: TOKENS.accent, marginBottom:20 }}>
          — {lang==='zh' ? `全產品 · ${PRODUCTS.length} 件商品` : `ALL PRODUCTS · ${PRODUCTS.length} ITEMS`}
        </div>
        <h1 style={{ fontFamily: TOKENS.serifZh, fontSize: lang==='zh' ? 96 : 108, fontWeight:500, color: TOKENS.ink, lineHeight:1.0, marginBottom: 24 }}>
          {lang==='zh' ? '一整個廚房。' : <>The whole<br/>kitchen.</>}
        </h1>
        <p style={{ fontSize:18, lineHeight:1.7, color: TOKENS.mute, maxWidth: 640 }}>
          {lang==='zh'
            ? `敏利國際旗下五品牌共 ${PRODUCTS.length} 件商品——從金門鋼刀、鍋具，到保健食品與養生沖泡，全部在這裡。`
            : `All ${PRODUCTS.length} items across Min International\u2019s five brands — knives, pans, supplements and wellness brews — in one place.`}
        </p>
      </section>

      {/* filter bar */}
      <div style={{
        position:'sticky', top: 81, zIndex: 40,
        padding:'20px 96px', background:'rgba(250,248,244,0.92)', backdropFilter:'blur(20px)',
        borderTop:`1px solid rgba(0,0,0,0.06)`, borderBottom:`1px solid rgba(0,0,0,0.06)`,
        display:'flex', alignItems:'center', justifyContent:'space-between', gap:24, flexWrap:'wrap',
      }}>
        <div style={{ display:'flex', alignItems:'center', gap:6, flexWrap:'wrap' }}>
          <button onClick={() => setBrand('all')} style={pillStyle(brand === 'all')}>
            {lang==='zh' ? `全部 · ${PRODUCTS.length}` : `All · ${PRODUCTS.length}`}
          </button>
          {BRANDS.map(b => (
            <button key={b.id} onClick={() => setBrand(b.id)} style={pillStyle(brand === b.id, b.accent)}>
              <span style={{ width:6, height:6, borderRadius:'50%', background: b.accent, marginRight:8 }} />
              {lang==='zh' ? b.name : b.nameEn}
              <span style={{ marginLeft:8, color: brand===b.id ? 'rgba(255,255,255,0.6)' : TOKENS.mute, fontSize:11 }}>
                · {PRODUCTS.filter(p => p.brand===b.id).length}
              </span>
            </button>
          ))}
        </div>

        <div style={{ display:'flex', alignItems:'center', gap:12 }}>
          <select value={sort} onChange={e => setSort(e.target.value)} style={{
            padding:'8px 32px 8px 14px', border:`1px solid rgba(0,0,0,0.15)`, borderRadius:999,
            background:'#fbfaf6', fontFamily:"'Manrope',sans-serif", fontSize:13, color: TOKENS.ink,
            appearance:'none', backgroundImage:'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 8\'><path d=\'M1 1l5 5 5-5\' stroke=\'%23666\' fill=\'none\'/></svg>")',
            backgroundRepeat:'no-repeat', backgroundPosition:'right 12px center', backgroundSize:'10px',
          }}>
            <option value="default">{lang==='zh' ? '推薦排序' : 'Featured'}</option>
            <option value="price-asc">{lang==='zh' ? '價格低 → 高' : 'Price low → high'}</option>
            <option value="price-desc">{lang==='zh' ? '價格高 → 低' : 'Price high → low'}</option>
          </select>
          <div style={{ display:'flex', borderRadius:999, background:'rgba(0,0,0,0.04)', padding:3 }}>
            {['grid','list'].map(v => (
              <button key={v} onClick={() => setView(v)} style={{
                padding:'6px 12px', border:'none', borderRadius:999, background: view===v ? TOKENS.ink : 'transparent',
                color: view===v ? TOKENS.paper : TOKENS.mute, fontSize:11, letterSpacing:'0.12em', fontFamily: TOKENS.mono,
              }}>{v.toUpperCase()}</button>
            ))}
          </div>
        </div>
      </div>

      {/* product grid / list */}
      <section style={{ padding:'56px 96px 120px' }}>
        {view === 'grid' ? (
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:20 }}>
            {list.map(p => {
              const b = BRANDS.find(x => x.id === p.brand);
              return (
                <article key={p.id} style={{ background:'#fbfaf6', borderRadius:14, padding:18, position:'relative', transition:'transform .2s' }}>
                  {p.badge && (
                    <div style={{ position:'absolute', top:30, left:30, zIndex:2,
                      background: b.accent, color:'#fff', padding:'3px 8px', borderRadius:3,
                      fontSize:9, letterSpacing:'0.14em', fontFamily: TOKENS.mono }}>{p.badge[lang]}</div>
                  )}
                  <ProductPH label={p.zh} w="100%" h={220} bg="#e6dccb" fg="#7a6c58" style={{ borderRadius:10 }} />
                  <div style={{ marginTop:14, display:'flex', alignItems:'center', gap:6 }}>
                    <span style={{ width:6, height:6, borderRadius:'50%', background: b.accent }} />
                    <span style={{ fontFamily: TOKENS.mono, fontSize:10, color: b.accent, letterSpacing:'0.16em' }}>
                      {(lang==='zh' ? b.name : b.nameEn).toUpperCase()}
                    </span>
                  </div>
                  <h3 style={{ marginTop:4, fontFamily: TOKENS.serifZh, fontSize:16, fontWeight:600, color: TOKENS.ink, lineHeight:1.3, minHeight:42 }}>{p[lang]}</h3>
                  <div style={{ marginTop:12, display:'flex', justifyContent:'space-between', alignItems:'baseline', borderTop:`1px solid rgba(0,0,0,0.06)`, paddingTop:10 }}>
                    <span style={{ fontFamily: TOKENS.serifEn, fontStyle:'italic', fontSize:17, color: TOKENS.ink }}>{p.price}</span>
                    <button data-product-id={p.id} style={{ background:'none', border:'none', fontFamily: TOKENS.mono, fontSize:11, color: b.accent, letterSpacing:'0.12em', cursor:'pointer', padding:0 }}>
                      {lang==='zh' ? '查看 →' : 'View →'}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div style={{ borderTop:`2px solid ${TOKENS.ink}` }}>
            {list.map((p, i) => {
              const b = BRANDS.find(x => x.id === p.brand);
              return (
                <div key={p.id} style={{
                  display:'grid', gridTemplateColumns:'60px 140px 1fr 1fr 140px 100px',
                  alignItems:'center', gap:24,
                  padding:'18px 0', borderBottom:`1px solid rgba(0,0,0,0.1)`,
                }}>
                  <span style={{ fontFamily: TOKENS.mono, fontSize:11, color: TOKENS.mute, letterSpacing:'0.1em' }}>NO. {String(i+1).padStart(3,'0')}</span>
                  <ProductPH label={p.zh.slice(0,4)} w="100%" h={100} bg="#e6dccb" fg="#7a6c58" style={{ borderRadius:8 }} />
                  <div>
                    <div style={{ display:'flex', alignItems:'center', gap:6, marginBottom:4 }}>
                      <span style={{ width:6, height:6, borderRadius:'50%', background: b.accent }} />
                      <span style={{ fontFamily: TOKENS.mono, fontSize:10, color: b.accent, letterSpacing:'0.14em' }}>{(lang==='zh' ? b.name : b.nameEn).toUpperCase()}</span>
                      {p.badge && <span style={{ fontSize:9, color: b.accent, fontFamily: TOKENS.mono, letterSpacing:'0.12em' }}>· {p.badge[lang]}</span>}
                    </div>
                    <h3 style={{ fontFamily: TOKENS.serifZh, fontSize:20, fontWeight:600, color: TOKENS.ink }}>{p[lang]}</h3>
                  </div>
                  <span style={{ fontSize:13, color: TOKENS.mute, fontFamily: TOKENS.serifZh }}>{p.cat[lang]}</span>
                  <span style={{ fontFamily: TOKENS.serifEn, fontStyle:'italic', fontSize:22, color: TOKENS.ink, textAlign:'right' }}>{p.price}</span>
                  <button data-product-id={p.id} className="btn" style={{ background: TOKENS.ink, color: TOKENS.paper, padding:'10px 16px', fontSize:12, justifyContent:'center' }}>
                    {lang==='zh' ? '查看' : 'View'} →
                  </button>
                </div>
              );
            })}
          </div>
        )}

        {list.length === 0 && (
          <div style={{ padding:'80px 0', textAlign:'center', color: TOKENS.mute }}>
            {lang==='zh' ? '此分類目前無商品。' : 'No products in this category.'}
          </div>
        )}
      </section>

      <SubFooter lang={lang} />
    </div>
  );
};

const pillStyle = (active, accent) => ({
  display:'inline-flex', alignItems:'center',
  padding:'7px 14px', border:'none', borderRadius:999,
  background: active ? (accent || TOKENS.ink) : 'rgba(0,0,0,0.04)',
  color: active ? '#fff' : TOKENS.ink,
  fontSize:13, fontWeight: 500, letterSpacing:'0.02em',
  fontFamily:"'Manrope','Noto Sans TC',sans-serif",
  cursor:'pointer', transition:'all .15s',
});

Object.assign(window, { BrandDetailPage, ProductDetailPage, ProductsIndexPage, SubNav, SubFooter, TOKENS });

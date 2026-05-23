// about.jsx — 公司簡介. Integrates company intro + values + certs + patents + trademarks.

const A_TOKENS = window.M_TOKENS || {
  ink: '#1a1612', mute: '#6b6258', paper: '#faf8f4', cream: '#f3ede0', accent: '#c97a48',
  dark: '#1c1814', goldAccent: '#c9a13a',
  serifZh: "'Noto Serif TC',serif",
  serifEn: "'Cormorant Garamond',serif",
  mono: "'JetBrains Mono',monospace",
};

const AboutPage = () => {
  const [lang, setLang] = React.useState('zh');
  const [patentTab, setPatentTab] = React.useState('tw');
  const A = A_TOKENS;
  const t = COPY[lang];

  const totalPatents = PATENTS.tw.length + PATENTS.jp.length + PATENTS.de.length;

  return (
    <div className="variant-root" style={{ background: A.paper, fontFamily:"'Manrope','Noto Sans TC',sans-serif" }}>
      {/* shared sub-nav (uses SubNav from pages.jsx if loaded; inline minimal version otherwise) */}
      <nav style={{
        position:'sticky', top:0, zIndex:50,
        padding:'18px 96px', display:'flex', alignItems:'center', justifyContent:'space-between',
        background:'rgba(250,248,244,0.88)', backdropFilter:'blur(20px)',
        borderBottom:`1px solid rgba(0,0,0,0.05)`,
      }}>
        <div style={{ display:'flex', alignItems:'center', gap:14 }}>
          <div style={{ width:38, height:38, borderRadius:10,
            background:`linear-gradient(135deg, ${A.accent}, #a85a30)`, color:'#fff',
            fontFamily: A.serifZh, fontSize:22, fontWeight:700,
            display:'flex', alignItems:'center', justifyContent:'center' }}>敏</div>
          <div>
            <div style={{ fontSize:15, fontWeight:600, color: A.ink, letterSpacing:'0.04em' }}>MINLI</div>
            <div style={{ fontSize:10, color:'#8c8275', letterSpacing:'0.18em', fontFamily: A.mono }}>MIN INT&rsquo;L TRADING</div>
          </div>
        </div>
        <div style={{ fontSize:13, color: A.mute, display:'flex', gap:8 }}>
          <a href="#" style={{ color: A.mute }}>{lang==='zh' ? '首頁' : 'Home'}</a>
          <span>/</span>
          <span style={{ color: A.ink, fontWeight:500 }}>{lang==='zh' ? '公司簡介' : 'About'}</span>
        </div>
        <div style={{ display:'flex', alignItems:'center', gap:16 }}>
          <LanguageToggle lang={lang} setLang={setLang} />
          <button className="btn" style={{ background:'transparent', color: A.ink,
            padding:'8px 16px', boxShadow:'inset 0 0 0 1px rgba(0,0,0,0.15)', fontSize:13 }}>
            {lang==='zh'?'經銷洽詢':'Become a Partner'}
          </button>
        </div>
      </nav>

      {/* HERO — masthead style with company plate */}
      <section style={{ padding:'120px 96px 80px', position:'relative' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, alignItems:'flex-end' }}>
          <div>
            <div style={{ fontFamily: A.mono, fontSize:12, letterSpacing:'0.22em', color: A.accent, marginBottom:32 }}>
              — {lang==='zh' ? '公司簡介 · ABOUT MINLI' : 'ABOUT MINLI'}
            </div>
            <h1 style={{ fontFamily: A.serifZh, fontSize: lang==='zh' ? 96 : 100, fontWeight:500,
              lineHeight: 1.0, color: A.ink, letterSpacing: lang==='zh' ? '0.01em' : '-0.02em' }}>
              {lang==='zh'
                ? <>健康、美味、<br/><span style={{ color: A.accent, fontStyle:'normal' }}>實用。</span></>
                : <>Healthy.<br/>Delicious.<br/><span style={{ fontFamily: A.serifEn, fontStyle:'italic', color: A.accent }}>Useful.</span></>}
            </h1>
            <p style={{ marginTop:36, fontSize:19, lineHeight:1.7, color: A.mute, maxWidth: 500 }}>
              {lang==='zh'
                ? '敏利國際秉持「健康、美味、實用」三大核心價值，致力於設計與生產符合現代消費者需求的高品質產品。三十年來，把台灣家庭餐桌上的每一個環節都做到最好——從一把刀，到一杯茶。'
                : 'Min International is built on three values: healthy, delicious, useful. For three decades we have designed and made high-quality products for the modern consumer — caring for every link of the Taiwanese table, from a blade to a teacup.'}
            </p>
          </div>

          {/* Company plate — official details */}
          <div style={{ background: A.cream, padding: 40, borderRadius:18, borderLeft:`4px solid ${A.accent}` }}>
            <div style={{ fontFamily: A.mono, fontSize:11, letterSpacing:'0.2em', color: A.accent, marginBottom: 18 }}>
              {lang==='zh' ? '公司資料 · CORPORATE FILING' : 'CORPORATE FILING'}
            </div>
            <div style={{ fontFamily: A.serifZh, fontSize:28, fontWeight:600, color: A.ink, lineHeight:1.2 }}>
              {COMPANY.registeredZh}
            </div>
            <div style={{ fontFamily: A.serifEn, fontStyle:'italic', fontSize:17, color: A.mute, marginTop:4 }}>
              {COMPANY.registeredEn}
            </div>
            <div style={{ marginTop:28, display:'grid', gridTemplateColumns:'1fr 1fr', gap:'18px 24px' }}>
              {[
                { l:{zh:'總部地點',en:'Headquarters'}, v: lang==='zh' ? COMPANY.addressZh : COMPANY.addressEn },
                { l:{zh:'業務範圍',en:'Markets'},       v: COMPANY.markets[lang] },
                { l:{zh:'諮詢專線',en:'Hotline'},       v: COMPANY.hotline },
                { l:{zh:'電子郵件',en:'Email'},         v: COMPANY.email },
                { l:{zh:'食品登錄',en:'Food reg.'},      v: 'F-278965031-00000-3' },
                { l:{zh:'責任險',  en:'Insurance'},      v: lang==='zh' ? '已投保產品責任險' : 'Product liability insured' },
              ].map((r, i) => (
                <div key={i} style={{ paddingBottom: 10, borderBottom: i < 4 ? `1px solid rgba(0,0,0,0.06)` : 'none' }}>
                  <div style={{ fontFamily: A.mono, fontSize:10, color: A.mute, letterSpacing:'0.14em', marginBottom:4, textTransform:'uppercase' }}>{r.l[lang]}</div>
                  <div style={{ fontSize:13, color: A.ink, fontFamily: A.serifZh, fontWeight:500, lineHeight:1.4 }}>{r.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HQ image */}
      <section style={{ padding:'0 96px' }}>
        <div style={{ position:'relative', borderRadius:24, overflow:'hidden' }}>
          <ImagePH label={"HEADQUARTERS\n敏利總部 · 桃園\n— 大景空拍 / 玻璃帷幕大樓\n— 2400 × 1100"}
            style={{ height: 540, '--ph-bg':'#d8cdb8', '--ph-fg':'#6b6258', borderRadius:24 }} />
          <div style={{
            position:'absolute', bottom: 32, left: 32, padding:'14px 22px',
            background:'rgba(255,255,255,0.94)', backdropFilter:'blur(10px)', borderRadius:10,
            fontFamily: A.mono, fontSize:11, letterSpacing:'0.16em', color: A.ink,
          }}>
            HQ · TAOYUAN, TAIWAN  ·  {COMPANY.markets[lang].toUpperCase()}
          </div>
        </div>
      </section>

      {/* VALUES — 3 column */}
      <section style={{ padding:'140px 96px' }}>
        <div style={{ fontFamily: A.mono, fontSize:12, letterSpacing:'0.22em', color: A.accent, marginBottom: 24 }}>
          — {lang==='zh' ? '公司理念 · 主要產品線 · 國際布局' : 'PHILOSOPHY · LINES · MARKETS'}
        </div>
        <h2 style={{ fontFamily: A.serifZh, fontSize: lang==='zh' ? 60 : 72, fontWeight:500, color: A.ink, lineHeight:1.1, maxWidth: 1000, marginBottom: 80 }}>
          {lang==='zh' ? '美好的生活，從優質產品開始。' : 'A better life begins with better products.'}
        </h2>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:48, borderTop:`2px solid ${A.ink}`, paddingTop:48 }}>
          <div>
            <div style={{ fontFamily: A.serifEn, fontStyle:'italic', fontSize:54, color: A.accent, lineHeight:1, fontWeight:500 }}>I.</div>
            <h3 style={{ fontFamily: A.serifZh, fontSize:28, fontWeight:600, color: A.ink, marginTop:18, marginBottom: 18 }}>
              {lang==='zh' ? '公司理念' : 'Philosophy'}
            </h3>
            <p style={{ fontSize:15, lineHeight:1.75, color: A.mute }}>
              {lang==='zh'
                ? '秉持「健康、美味、實用」核心價值，致力於設計與生產符合現代消費者需求的高品質產品。我們相信，美好的生活從優質產品開始，堅持為全球消費者提供兼具功能性與營養價值的創新選擇。'
                : 'Built on three values — healthy, delicious, useful. We design and make high-quality products for the modern consumer, believing that a better life begins with a better product.'}
            </p>
          </div>

          <div>
            <div style={{ fontFamily: A.serifEn, fontStyle:'italic', fontSize:54, color: A.accent, lineHeight:1, fontWeight:500 }}>II.</div>
            <h3 style={{ fontFamily: A.serifZh, fontSize:28, fontWeight:600, color: A.ink, marginTop:18, marginBottom: 18 }}>
              {lang==='zh' ? '主要產品線' : 'Product Lines'}
            </h3>
            <p style={{ fontSize:15, lineHeight:1.7, color: A.mute, marginBottom: 18 }}>
              {lang==='zh'
                ? '我們專注於開發一系列符合國際健康標準的食品與生活用品，包括但不限於：'
                : 'We focus on developing food and lifestyle products that meet international health standards, including:'}
            </p>
            <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:10 }}>
              {COMPANY.productLines.map((l, i) => (
                <li key={i} style={{ display:'flex', gap:12, alignItems:'baseline', fontSize:14, color: A.ink, fontFamily: A.serifZh, paddingBottom:8, borderBottom:`1px solid rgba(0,0,0,0.08)` }}>
                  <span style={{ fontFamily: A.mono, fontSize:11, color: A.accent }}>0{i+1}</span>
                  {l[lang]}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div style={{ fontFamily: A.serifEn, fontStyle:'italic', fontSize:54, color: A.accent, lineHeight:1, fontWeight:500 }}>III.</div>
            <h3 style={{ fontFamily: A.serifZh, fontSize:28, fontWeight:600, color: A.ink, marginTop:18, marginBottom: 18 }}>
              {lang==='zh' ? '國際布局' : 'Global Reach'}
            </h3>
            <p style={{ fontSize:15, lineHeight:1.75, color: A.mute, marginBottom: 24 }}>
              {lang==='zh'
                ? '敏利產品行銷至亞洲、美洲、歐洲及中東等多國市場，建立穩固的國際分銷網路。與多國代理商長期合作，把台灣的好食器送進全球消費者的生活。'
                : 'Minli products reach Asia, the Americas, Europe and the Middle East — a stable global network built with long-term distribution partners.'}
            </p>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:12 }}>
              {[
                { k: lang==='zh'?'亞洲':'ASIA',     n:'12+' },
                { k: lang==='zh'?'美洲':'AMERICAS', n:'4+'  },
                { k: lang==='zh'?'歐洲':'EUROPE',   n:'6+'  },
                { k: lang==='zh'?'中東':'M.EAST',   n:'3+'  },
              ].map((r, i) => (
                <div key={i} style={{ padding:'14px 16px', background: A.cream, borderRadius:8 }}>
                  <div style={{ fontFamily: A.serifEn, fontStyle:'italic', fontSize:28, fontWeight:500, color: A.ink, lineHeight:1 }}>{r.n}</div>
                  <div style={{ marginTop:4, fontFamily: A.mono, fontSize:10, letterSpacing:'0.16em', color: A.accent }}>{r.k}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS — full detail */}
      <section style={{ padding:'140px 96px', background: A.cream }}>
        <div style={{ fontFamily: A.mono, fontSize:12, letterSpacing:'0.22em', color: A.accent, marginBottom:24 }}>
          — {lang==='zh' ? '品質認證 · QUALITY CERTIFICATIONS' : 'QUALITY CERTIFICATIONS'}
        </div>
        <h2 style={{ fontFamily: A.serifZh, fontSize:64, fontWeight:500, color: A.ink, lineHeight:1.1, marginBottom: 56, maxWidth: 1000 }}>
          {lang==='zh' ? '我們把信任，一張一張公開。' : 'We publish our trust, one certificate at a time.'}
        </h2>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:24 }}>
          {CERTS_FULL.map((c, i) => (
            <div key={i} style={{ background: A.paper, borderRadius:16, padding:36, display:'grid', gridTemplateColumns:'1fr 1fr', gap:24 }}>
              <ImagePH
                label={`CERTIFICATE\n${c.code}`}
                style={{ height: 220, '--ph-bg':'#e6dccb', '--ph-fg':'#7a6c58', borderRadius:8 }} />
              <div>
                <div style={{ fontFamily: A.mono, fontSize:10, letterSpacing:'0.18em', color: A.accent }}>
                  CERT NO. {String(i+1).padStart(2,'0')}
                </div>
                <h3 style={{ fontFamily: A.serifZh, fontSize:24, fontWeight:600, color: A.ink, marginTop:8, marginBottom:14, lineHeight:1.2 }}>{c.code}</h3>
                <p style={{ fontSize:13, color: A.mute, marginBottom:18, lineHeight:1.6 }}>{(c.scope[lang] || c.scope.zh)}</p>

                <div style={{ borderTop:`1px solid rgba(0,0,0,0.08)`, paddingTop:14 }}>
                  {c.body && (
                    <Row label={lang==='zh' ? '驗證單位' : 'BODY'} val={typeof c.body === 'string' ? c.body : c.body[lang]} A={A} />
                  )}
                  {c.no && <Row label={lang==='zh' ? '證書編號' : 'NO.'} val={c.no} A={A} />}
                  {c.issued && <Row label={lang==='zh' ? '核發' : 'ISSUED'} val={c.issued} A={A} />}
                  {c.valid && <Row label={lang==='zh' ? '有效期至' : 'VALID'} val={c.valid} A={A} />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PATENTS — proof wall */}
      <section style={{ padding:'140px 96px', background: A.dark, color: A.paper }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 2fr', gap:80, marginBottom: 64 }}>
          <div>
            <div style={{ fontFamily: A.mono, fontSize:12, letterSpacing:'0.22em', color: A.goldAccent, marginBottom:20 }}>
              — {lang==='zh' ? '智慧財產 · PATENT PORTFOLIO' : 'PATENT PORTFOLIO'}
            </div>
            <h2 style={{ fontFamily: A.serifZh, fontSize: lang==='zh' ? 60 : 72, fontWeight:500, color: A.paper, lineHeight:1.05 }}>
              {lang==='zh' ? <>專利．是我們<br/>對品質的證據。</> : <>Patents.<br/>Our quietest<br/>argument.</>}
            </h2>
          </div>
          <div style={{ display:'flex', flexDirection:'column', justifyContent:'flex-end' }}>
            <p style={{ fontSize:17, lineHeight:1.75, color:'rgba(250,248,244,0.7)', marginBottom:32 }}>
              {lang==='zh'
                ? `敏利在台灣、日本、德國共持有 ${totalPatents} 項新型專利，橫跨兩條技術線：刀具結構工法、與石墨烯／量子機能材料應用。每一項都是我們對「實用」二字的兌現。`
                : `Minli holds ${totalPatents} utility-model patents in Taiwan, Japan and Germany — across two technology stacks: blade structure engineering and graphene/quantum functional materials.`}
            </p>
            <div style={{ display:'flex', gap:24 }}>
              {[
                { k:'TW', n: PATENTS.tw.length, l: lang==='zh' ? '台灣專利' : 'Taiwan' },
                { k:'JP', n: PATENTS.jp.length, l: lang==='zh' ? '日本實用新案' : 'Japan' },
                { k:'DE', n: PATENTS.de.length, l: lang==='zh' ? '德國 Gebrauchsmuster' : 'Germany' },
              ].map((m, i) => (
                <div key={i} style={{ flex:1, padding:'20px 0', borderTop:`1px solid rgba(250,248,244,0.2)` }}>
                  <div style={{ fontFamily: A.serifEn, fontStyle:'italic', fontSize:54, color: A.goldAccent, lineHeight:1, fontWeight:500 }}>{m.n}</div>
                  <div style={{ marginTop:6, fontFamily: A.mono, fontSize:11, color: 'rgba(250,248,244,0.7)', letterSpacing:'0.14em' }}>{m.k} · {m.l.toUpperCase()}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* tab switcher */}
        <div style={{ display:'flex', gap:0, borderBottom:`1px solid rgba(250,248,244,0.2)`, marginBottom:36 }}>
          {[
            { id:'tw', label: lang==='zh' ? '台灣 · Taiwan' : 'Taiwan' },
            { id:'jp', label: lang==='zh' ? '日本 · Japan'   : 'Japan' },
            { id:'de', label: lang==='zh' ? '德國 · Germany' : 'Germany' },
          ].map(tab => (
            <button key={tab.id} onClick={() => setPatentTab(tab.id)} style={{
              padding:'14px 28px', border:'none', background:'transparent',
              fontFamily: A.serifZh, fontSize:18, fontWeight: patentTab===tab.id ? 600 : 400,
              color: patentTab===tab.id ? A.goldAccent : 'rgba(250,248,244,0.5)',
              borderBottom: patentTab===tab.id ? `2px solid ${A.goldAccent}` : '2px solid transparent',
              marginBottom: -1, cursor:'pointer',
            }}>
              {tab.label}  <span style={{ fontFamily: A.mono, fontSize:11 }}>· {PATENTS[tab.id].length}</span>
            </button>
          ))}
        </div>

        {/* patent grid */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:0, borderTop:`1px solid rgba(250,248,244,0.15)` }}>
          {PATENTS[patentTab].map((p, i) => (
            <div key={p.no} style={{
              padding:'24px 28px', display:'grid', gridTemplateColumns:'auto 1fr auto', gap:24, alignItems:'center',
              borderBottom:`1px solid rgba(250,248,244,0.15)`,
              borderRight: i % 2 === 0 ? `1px solid rgba(250,248,244,0.15)` : 'none',
            }}>
              <span style={{
                padding:'4px 8px', fontFamily: A.mono, fontSize:10, letterSpacing:'0.14em',
                background: p.cat === 'blade' ? 'rgba(201,161,58,0.18)' : 'rgba(201,122,72,0.18)',
                color: p.cat === 'blade' ? A.goldAccent : '#e8b48a',
                borderRadius: 3,
              }}>{p.cat === 'blade' ? (lang==='zh' ? '刀具' : 'BLADE') : (lang==='zh' ? '機能' : 'WELLNESS')}</span>
              <div>
                <div style={{ fontFamily: A.mono, fontSize:11, color: A.goldAccent, letterSpacing:'0.12em', marginBottom:6 }}>
                  {patentTab === 'tw' ? '新型第' : patentTab === 'jp' ? '登録第' : 'Nr.'} {p.no}
                </div>
                <div style={{ fontFamily: A.serifZh, fontSize:15, color: A.paper, lineHeight:1.4 }}>{p[lang] || p.zh}</div>
              </div>
              <span style={{ fontFamily: A.mono, fontSize:11, color:'rgba(250,248,244,0.4)', letterSpacing:'0.08em' }}>{patentTab.toUpperCase()}</span>
            </div>
          ))}
        </div>
      </section>

      {/* TRADEMARKS — global registration map */}
      <section style={{ padding:'140px 96px' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:64, alignItems:'flex-end', marginBottom: 64 }}>
          <div>
            <div style={{ fontFamily: A.mono, fontSize:12, letterSpacing:'0.22em', color: A.accent, marginBottom:20 }}>
              — {lang==='zh' ? '註冊商標 · GLOBAL TRADEMARKS' : 'GLOBAL TRADEMARKS'}
            </div>
            <h2 style={{ fontFamily: A.serifZh, fontSize: lang==='zh' ? 60 : 72, fontWeight:500, color: A.ink, lineHeight:1.05 }}>
              {lang==='zh' ? <>名字，<br/>也是資產。</> : <>A name<br/><span style={{ fontStyle:'italic', fontFamily: A.serifEn }}>is an asset.</span></>}
            </h2>
          </div>
          <p style={{ fontSize:17, lineHeight:1.75, color: A.mute, maxWidth: 540 }}>
            {lang==='zh'
              ? `敏利、小台灣、老澤源三個品牌在台灣與新加坡完成 ${TRADEMARKS.length} 件商標註冊，為跨國經銷與授權打下法律基礎。`
              : `Across our flagship brands — Minli, Little Taiwan Store and Lao Ze Yuan — we hold ${TRADEMARKS.length} trademark registrations in Taiwan and Singapore, the legal bedrock for international distribution and licensing.`}
          </p>
        </div>

        {/* brand groups */}
        <div style={{ display:'flex', flexDirection:'column', gap: 32 }}>
          {['minli','little-taiwan','laozeyuan'].map(brandId => {
            const b = BRANDS.find(x => x.id === brandId);
            const marks = TRADEMARKS.filter(m => m.brand === brandId);
            return (
              <div key={brandId} style={{ background: A.cream, borderRadius:16, padding: 36 }}>
                <div style={{ display:'flex', alignItems:'center', gap: 14, marginBottom: 24 }}>
                  <div style={{ width: 8, height: 32, background: b.accent }} />
                  <div>
                    <div style={{ fontFamily: A.serifZh, fontSize:26, fontWeight:600, color: A.ink, lineHeight:1 }}>
                      {lang==='zh' ? b.name : b.nameEn}
                    </div>
                    <div style={{ fontFamily: A.mono, fontSize:11, letterSpacing:'0.16em', color: A.mute, marginTop:4 }}>
                      {marks.length} {lang==='zh' ? '件註冊商標' : 'registrations'}
                    </div>
                  </div>
                </div>

                <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap: 0 }}>
                  {marks.map((m, i) => (
                    <div key={m.no} style={{
                      padding:'14px 18px', display:'grid', gridTemplateColumns:'auto 1fr auto', gap:14, alignItems:'center',
                      borderBottom: i < marks.length - (marks.length % 3 || 3) ? `1px solid rgba(0,0,0,0.08)` : 'none',
                      borderRight: (i + 1) % 3 !== 0 ? `1px solid rgba(0,0,0,0.08)` : 'none',
                    }}>
                      <span style={{ fontFamily: A.mono, fontSize:10, color: b.accent, letterSpacing:'0.14em' }}>
                        {m.country.zh === '台灣' ? 'TW' : m.country.zh === '新加坡' ? 'SG' : m.country.zh.slice(0,2).toUpperCase()}
                      </span>
                      <div style={{ fontFamily: A.mono, fontSize:11, color: A.ink, letterSpacing:'0.04em' }}>
                        № {m.no}
                      </div>
                      <span style={{ fontSize:11, color: A.mute }}>{m.year}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* MISSION */}
      <section style={{ padding:'140px 96px', background: A.cream, position:'relative' }}>
        <div style={{ maxWidth: 1100 }}>
          <div style={{ fontFamily: A.mono, fontSize:12, letterSpacing:'0.22em', color: A.accent, marginBottom: 24 }}>
            — {lang==='zh' ? '企業使命 · OUR MISSION' : 'OUR MISSION'}
          </div>
          <h2 style={{ fontFamily: A.serifZh, fontSize: lang==='zh' ? 76 : 92, fontWeight:500, color: A.ink, lineHeight:1.05, marginBottom: 36, letterSpacing: lang==='zh' ? '0.01em' : '-0.02em' }}>
            {lang==='zh'
              ? <>讓世界變得<br/><span style={{ color: A.accent }}>更健康，更便利，也更美味。</span></>
              : <>To make the world<br/><span style={{ color: A.accent, fontStyle:'italic', fontFamily: A.serifEn }}>healthier, simpler, more delicious.</span></>}
          </h2>
          <p style={{ fontSize:20, lineHeight:1.7, color: A.ink, opacity:0.78, maxWidth: 800,
            fontFamily: lang==='zh' ? A.serifZh : A.serifEn,
            fontStyle: lang==='en' ? 'italic' : 'normal',
          }}>
            {lang==='zh'
              ? '我們的使命，是透過產品讓世界變得更健康、更便利，也更美味。敏利不僅是貿易商，更是健康生活的推動者——我們希望讓每一個家庭，都能輕鬆享受優質產品所帶來的美好。'
              : 'Our mission is to make the world healthier, simpler and more delicious — through our products. Minli is not just a trading company; we are a quiet partner in the everyday well-being of families around the world.'}
          </p>
        </div>
      </section>

      <SubFooter lang={lang} />
    </div>
  );
};

const Row = ({ label, val, A }) => (
  <div style={{ display:'flex', justifyContent:'space-between', gap:14, padding:'7px 0', borderBottom:`1px dotted rgba(0,0,0,0.08)` }}>
    <span style={{ fontFamily: A.mono, fontSize:10, color: A.mute, letterSpacing:'0.12em' }}>{label}</span>
    <span style={{ fontFamily: A.mono, fontSize:11, color: A.ink, textAlign:'right' }}>{val}</span>
  </div>
);

window.AboutPage = AboutPage;

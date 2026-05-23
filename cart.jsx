// cart.jsx — minimal shopping cart with localStorage persistence.

const CART_TOKENS = window.M_TOKENS || {
  ink: '#1a1612', mute: '#6b6258', paper: '#faf8f4', cream: '#f3ede0', accent: '#c97a48',
  dark: '#1c1814', goldAccent: '#c9a13a',
  serifZh: "'Noto Serif TC',serif",
  serifEn: "'Cormorant Garamond',serif",
  mono: "'JetBrains Mono',monospace",
};

// ============ Store ============
const CART_KEY = 'minli-cart-v1';

const readCart = () => {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch { return []; }
};
const writeCart = (items) => {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
  window.dispatchEvent(new CustomEvent('cart:update', { detail: items }));
};

const MinliCart = {
  get() { return readCart(); },
  count() { return readCart().reduce((s, i) => s + i.qty, 0); },
  total() { return readCart().reduce((s, i) => s + (priceOf(i) * i.qty), 0); },
  add(productId, opts = {}) {
    const items = readCart();
    const key = `${productId}|${opts.size || ''}|${opts.engrave || ''}`;
    const existing = items.find(i => i.key === key);
    if (existing) existing.qty += (opts.qty || 1);
    else items.push({ key, productId, qty: opts.qty || 1, size: opts.size, engrave: opts.engrave });
    writeCart(items);
  },
  setQty(key, qty) {
    const items = readCart().map(i => i.key === key ? { ...i, qty: Math.max(1, qty) } : i);
    writeCart(items);
  },
  remove(key) { writeCart(readCart().filter(i => i.key !== key)); },
  clear() { writeCart([]); },
};

const priceOf = (item) => {
  const p = PRODUCTS.find(x => x.id === item.productId);
  if (!p) return 0;
  return parseInt(p.price.replace(/\D/g, '')) || 0;
};
const formatNT = (n) => 'NT$ ' + n.toLocaleString();

// ============ Hook ============
const useCart = () => {
  const [items, setItems] = React.useState(readCart());
  React.useEffect(() => {
    const handler = (e) => setItems(e.detail);
    window.addEventListener('cart:update', handler);
    return () => window.removeEventListener('cart:update', handler);
  }, []);
  return items;
};

// ============ Floating cart button ============
const FloatingCart = ({ onOpen }) => {
  const items = useCart();
  const count = items.reduce((s, i) => s + i.qty, 0);
  const [pulse, setPulse] = React.useState(false);
  const lastCount = React.useRef(count);
  React.useEffect(() => {
    if (count > lastCount.current) {
      setPulse(true);
      setTimeout(() => setPulse(false), 600);
    }
    lastCount.current = count;
  }, [count]);

  return (
    <button onClick={onOpen} data-no-route="1" aria-label="購物車" style={{
      position:'fixed', right: 24, bottom: 24, zIndex: 200,
      width: 60, height: 60, borderRadius:'50%', border:'none',
      background: CART_TOKENS.ink, color: CART_TOKENS.paper,
      boxShadow:'0 10px 30px rgba(0,0,0,0.25)',
      display:'flex', alignItems:'center', justifyContent:'center',
      cursor:'pointer', transition:'transform .2s ease',
      transform: pulse ? 'scale(1.18)' : 'scale(1)',
    }}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 01-8 0"/>
      </svg>
      {count > 0 && (
        <span style={{
          position:'absolute', top: 4, right: 4,
          minWidth: 22, height: 22, borderRadius: 11, padding:'0 6px',
          background: CART_TOKENS.accent, color:'#fff',
          fontSize:11, fontWeight: 700, fontFamily: CART_TOKENS.mono,
          display:'flex', alignItems:'center', justifyContent:'center',
          boxShadow:'0 0 0 2px ' + CART_TOKENS.ink,
        }}>{count}</span>
      )}
    </button>
  );
};

// ============ Desktop Cart Page ============
const CartPage = () => {
  const [lang, setLang] = React.useState('zh');
  const [step, setStep] = React.useState('cart'); // cart | info | done
  const items = useCart();
  const total = items.reduce((s, i) => s + (priceOf(i) * i.qty), 0);
  const shipping = total > 0 && total < 1500 ? 80 : 0;
  const free = total >= 1500;
  const A = CART_TOKENS;

  return (
    <div className="variant-root" style={{ background: A.paper, fontFamily:"'Manrope','Noto Sans TC',sans-serif" }}>
      {SubNav && <SubNav lang={lang} setLang={setLang}
        crumb={lang==='zh' ? ['購物車'] : ['Cart']} />}

      <section style={{ padding:'56px 96px 96px' }}>
        <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', marginBottom:32 }}>
          <div>
            <div style={{ fontFamily: A.mono, fontSize:12, letterSpacing:'0.22em', color: A.accent }}>
              — {lang==='zh' ? '購物車' : 'YOUR CART'}
            </div>
            <h1 style={{ marginTop:14, fontFamily: A.serifZh, fontSize: lang==='zh' ? 84 : 92, fontWeight:500, lineHeight:1, color: A.ink }}>
              {lang==='zh' ? '結帳。' : <span style={{ fontStyle:'italic', fontFamily: A.serifEn }}>Checkout.</span>}
            </h1>
          </div>
          <CartSteps step={step} lang={lang} A={A} />
        </div>

        {step === 'done' ? (
          <CartDoneView lang={lang} A={A} reset={() => { MinliCart.clear(); setStep('cart'); }} />
        ) : (
          <div style={{ display:'grid', gridTemplateColumns:'1.6fr 1fr', gap:48, alignItems:'flex-start' }}>
            <div>
              {items.length === 0 && step === 'cart' && <EmptyCart lang={lang} A={A} />}

              {step === 'cart' && items.length > 0 && (
                <div data-no-route="1" style={{ background:'#fff', borderRadius:16, padding: 28 }}>
                  {/* header */}
                  <div style={{ display:'grid', gridTemplateColumns:'90px 1fr 130px 100px 60px', gap:24, padding:'12px 0', borderBottom:`2px solid ${A.ink}`, fontFamily: A.mono, fontSize:10, color: A.mute, letterSpacing:'0.16em' }}>
                    <span></span>
                    <span>{lang==='zh' ? '商品' : 'ITEM'}</span>
                    <span>{lang==='zh' ? '數量' : 'QTY'}</span>
                    <span style={{ textAlign:'right' }}>{lang==='zh' ? '小計' : 'SUBTOTAL'}</span>
                    <span></span>
                  </div>
                  {items.map(it => <CartRow key={it.key} item={it} lang={lang} A={A} />)}
                </div>
              )}

              {step === 'info' && (
                <CheckoutForm lang={lang} A={A} onBack={() => setStep('cart')} onSubmit={() => setStep('done')} />
              )}
            </div>

            <CartSummary
              lang={lang} A={A} total={total} shipping={shipping} free={free}
              items={items}
              step={step}
              onCheckout={() => setStep(step === 'cart' ? 'info' : 'done')}
              onBack={() => setStep('cart')}
            />
          </div>
        )}
      </section>

      {SubFooter && <SubFooter lang={lang} />}
    </div>
  );
};

const CartSteps = ({ step, lang, A }) => {
  const steps = [
    { id:'cart', l:{zh:'購物車',en:'Cart'} },
    { id:'info', l:{zh:'物流．付款',en:'Shipping'} },
    { id:'done', l:{zh:'完成',en:'Done'} },
  ];
  const idx = steps.findIndex(s => s.id === step);
  return (
    <div style={{ display:'flex', gap:24, alignItems:'center' }}>
      {steps.map((s, i) => (
        <React.Fragment key={s.id}>
          <div style={{ display:'flex', alignItems:'center', gap:10 }}>
            <span style={{
              width: 26, height: 26, borderRadius:'50%',
              background: i <= idx ? A.ink : 'transparent',
              border: `1px solid ${i <= idx ? A.ink : 'rgba(0,0,0,0.2)'}`,
              color: i <= idx ? A.paper : A.mute,
              display:'flex', alignItems:'center', justifyContent:'center',
              fontFamily: A.mono, fontSize:11,
            }}>{i+1}</span>
            <span style={{ fontFamily: A.serifZh, fontSize:14, color: i <= idx ? A.ink : A.mute, fontWeight: i === idx ? 600 : 400 }}>
              {s.l[lang]}
            </span>
          </div>
          {i < steps.length - 1 && <span style={{ width:32, height:1, background:'rgba(0,0,0,0.15)' }}/>}
        </React.Fragment>
      ))}
    </div>
  );
};

const CartRow = ({ item, lang, A }) => {
  const p = PRODUCTS.find(x => x.id === item.productId);
  if (!p) return null;
  const b = BRANDS.find(x => x.id === p.brand);
  return (
    <div style={{ display:'grid', gridTemplateColumns:'90px 1fr 130px 100px 60px', gap:24, padding:'24px 0', borderBottom:`1px solid rgba(0,0,0,0.08)`, alignItems:'center' }}>
      <ProductPH label={p.zh.slice(0,4)} w={90} h={90} bg="#e6dccb" fg="#7a6c58" style={{ borderRadius:8 }} />
      <div>
        <div style={{ display:'inline-flex', alignItems:'center', gap:6, marginBottom: 4 }}>
          <span style={{ width:5, height:5, borderRadius:'50%', background: b.accent }} />
          <span style={{ fontFamily: A.mono, fontSize:10, color: b.accent, letterSpacing:'0.16em' }}>
            {(lang==='zh' ? b.name : b.nameEn).toUpperCase()}
          </span>
        </div>
        <div style={{ fontFamily: A.serifZh, fontSize:18, fontWeight:600, color: A.ink, lineHeight:1.3 }}>{p[lang]}</div>
        {item.size && <div style={{ fontSize:12, color: A.mute, marginTop:4 }}>{lang==='zh' ? '尺寸' : 'Size'}: {item.size}</div>}
        {item.engrave && <div style={{ fontSize:12, color: A.mute, marginTop:2 }}>{lang==='zh' ? '雷雕' : 'Engraving'}: 「{item.engrave}」</div>}
      </div>
      <QtyControl item={item} A={A} />
      <div style={{ fontFamily: A.serifEn, fontStyle:'italic', fontSize:20, color: A.ink, textAlign:'right' }}>
        {formatNT(priceOf(item) * item.qty)}
      </div>
      <button onClick={() => MinliCart.remove(item.key)} style={{
        background:'transparent', border:'none', color: A.mute, fontSize: 18, padding:6, cursor:'pointer'
      }}>×</button>
    </div>
  );
};

const QtyControl = ({ item, A }) => (
  <div style={{ display:'inline-flex', alignItems:'center', border:`1px solid rgba(0,0,0,0.15)`, borderRadius: 999 }}>
    <button onClick={() => MinliCart.setQty(item.key, item.qty - 1)} style={qtyBtn(A)}>−</button>
    <span style={{ minWidth: 28, textAlign:'center', fontFamily: A.mono, fontSize: 13 }}>{item.qty}</span>
    <button onClick={() => MinliCart.setQty(item.key, item.qty + 1)} style={qtyBtn(A)}>+</button>
  </div>
);
const qtyBtn = (A) => ({
  width: 28, height: 28, border:'none', background:'transparent', color: A.ink,
  cursor:'pointer', fontSize:14, padding:0,
});

const CartSummary = ({ lang, A, total, shipping, free, items, step, onCheckout, onBack }) => (
  <aside data-no-route="1" style={{
    position:'sticky', top: 110, background: A.cream, borderRadius:16, padding: 32,
  }}>
    <div style={{ fontFamily: A.mono, fontSize:11, letterSpacing:'0.22em', color: A.accent, marginBottom:18 }}>
      — {lang==='zh' ? '訂單摘要' : 'ORDER SUMMARY'}
    </div>
    <div style={{ display:'flex', justifyContent:'space-between', padding:'10px 0', borderBottom:`1px solid rgba(0,0,0,0.08)` }}>
      <span style={{ fontSize:14, color: A.mute }}>{lang==='zh' ? '商品小計' : 'Subtotal'}</span>
      <span style={{ fontFamily: A.serifEn, fontSize:17, color: A.ink }}>{formatNT(total)}</span>
    </div>
    <div style={{ display:'flex', justifyContent:'space-between', padding:'10px 0', borderBottom:`1px solid rgba(0,0,0,0.08)` }}>
      <span style={{ fontSize:14, color: A.mute }}>{lang==='zh' ? '運費' : 'Shipping'}</span>
      <span style={{ fontFamily: A.serifEn, fontSize:17, color: A.ink }}>
        {free
          ? <span style={{ color: A.accent }}>{lang==='zh' ? '免運' : 'Free'}</span>
          : shipping > 0 ? formatNT(shipping) : '—'}
      </span>
    </div>
    {!free && total > 0 && total < 1500 && (
      <div style={{ marginTop:14, padding: 14, background: A.paper, borderRadius:10, fontSize:12, color: A.mute, lineHeight:1.5 }}>
        {lang==='zh'
          ? `再加購 ${formatNT(1500 - total)} 即享免運。`
          : `Spend ${formatNT(1500 - total)} more to ship free.`}
      </div>
    )}
    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', padding:'18px 0 8px', marginTop:14, borderTop:`2px solid ${A.ink}` }}>
      <span style={{ fontFamily: A.serifZh, fontSize:17, fontWeight:600, color: A.ink }}>
        {lang==='zh' ? '應付總計' : 'Total'}
      </span>
      <span style={{ fontFamily: A.serifEn, fontStyle:'italic', fontSize:32, color: A.ink }}>
        {formatNT(total + shipping)}
      </span>
    </div>

    {step === 'cart' && (
      <button onClick={items.length === 0 ? null : onCheckout} disabled={items.length === 0} className="btn" style={{
        marginTop: 22, background: items.length === 0 ? '#ccc' : A.ink, color: A.paper,
        width:'100%', justifyContent:'center', padding:'16px 20px', fontSize:15,
        cursor: items.length === 0 ? 'not-allowed' : 'pointer',
      }}>
        {lang==='zh' ? '前往結帳' : 'Proceed to checkout'} →
      </button>
    )}
    {step === 'info' && (
      <>
        <button onClick={onCheckout} className="btn" style={{
          marginTop: 22, background: A.ink, color: A.paper,
          width:'100%', justifyContent:'center', padding:'16px 20px', fontSize:15,
        }}>
          {lang==='zh' ? '確認下單' : 'Place order'} →
        </button>
        <button onClick={onBack} style={{
          marginTop:10, width:'100%', padding:'12px', background:'transparent', border:'none',
          fontSize:12, color: A.mute,
        }}>← {lang==='zh' ? '返回購物車' : 'Back to cart'}</button>
      </>
    )}

    <div style={{ marginTop:22, paddingTop: 18, borderTop:`1px solid rgba(0,0,0,0.08)`, fontSize: 11, color: A.mute, lineHeight: 1.8 }}>
      <div>✓ {lang==='zh' ? '7 天鑑賞期．刀具終身免費磨刀' : '7-day returns · Lifetime sharpening on blades'}</div>
      <div>✓ {lang==='zh' ? 'SGS 鋼材檢驗．ISO 22000 / HACCP' : 'SGS · ISO 22000 / HACCP'}</div>
      <div>✓ {lang==='zh' ? '台灣本島宅配 24–48 小時' : '24–48 hr delivery in Taiwan'}</div>
    </div>
  </aside>
);

const EmptyCart = ({ lang, A }) => (
  <div data-no-route="1" style={{ background:'#fff', borderRadius:16, padding:'80px 40px', textAlign:'center' }}>
    <div style={{ fontFamily: A.serifEn, fontStyle:'italic', fontSize:80, color: A.mute, lineHeight:1 }}>—</div>
    <h2 style={{ marginTop: 24, fontFamily: A.serifZh, fontSize:32, fontWeight:500, color: A.ink }}>
      {lang==='zh' ? '購物車是空的。' : 'Your cart is empty.'}
    </h2>
    <p style={{ marginTop: 14, fontSize: 14, color: A.mute }}>
      {lang==='zh'
        ? '從首頁、品牌頁、或全產品開始選購。'
        : 'Start from home, a brand page, or the full product index.'}
    </p>
    <a href="#products" className="btn" style={{
      marginTop: 24, display:'inline-flex', background: A.ink, color: A.paper, padding:'14px 22px', fontSize: 14,
    }}>{lang==='zh' ? '瀏覽全部商品' : 'Browse products'} →</a>
  </div>
);

const CheckoutForm = ({ lang, A, onBack, onSubmit }) => (
  <form data-no-route="1" onSubmit={(e) => { e.preventDefault(); onSubmit(); }}
    style={{ background:'#fff', borderRadius:16, padding: 36, display:'flex', flexDirection:'column', gap: 32 }}>
    <FormSection title={lang==='zh' ? '收件資訊' : 'Shipping'} A={A}>
      <Row2>
        <Field label={lang==='zh'?'姓名':'Full name'} required A={A} />
        <Field label={lang==='zh'?'手機':'Phone'} required A={A} />
      </Row2>
      <Field label={lang==='zh'?'電子郵件':'Email'} type="email" required A={A} />
      <Field label={lang==='zh'?'收件地址':'Address'} required A={A} />
    </FormSection>

    <FormSection title={lang==='zh' ? '物流方式' : 'Shipping method'} A={A}>
      {[
        { v:'home', t:{zh:'宅配到府 (24–48 hr)',en:'Home delivery (24–48 hr)'}, f:'NT$ 80' },
        { v:'7-11', t:{zh:'7-11 超商取貨',en:'7-Eleven pickup'}, f:'NT$ 60' },
        { v:'family', t:{zh:'全家超商取貨',en:'FamilyMart pickup'}, f:'NT$ 60' },
      ].map((opt, i) => (
        <label key={i} style={{
          display:'flex', alignItems:'center', justifyContent:'space-between',
          padding:'14px 18px', border:`1px solid rgba(0,0,0,0.12)`, borderRadius:10, cursor:'pointer',
        }}>
          <div style={{ display:'flex', alignItems:'center', gap:12 }}>
            <input type="radio" name="ship" value={opt.v} defaultChecked={i===0} />
            <span style={{ fontFamily: A.serifZh, fontSize:15, color: A.ink }}>{opt.t[lang]}</span>
          </div>
          <span style={{ fontFamily: A.mono, fontSize:12, color: A.mute }}>{opt.f}</span>
        </label>
      ))}
    </FormSection>

    <FormSection title={lang==='zh' ? '付款方式' : 'Payment'} A={A}>
      {[
        { v:'credit',  t:{zh:'信用卡 一次付清', en:'Credit card'} },
        { v:'atm',     t:{zh:'ATM 轉帳',          en:'ATM transfer'} },
        { v:'cod',     t:{zh:'貨到付款',          en:'Cash on delivery'} },
        { v:'linepay', t:{zh:'LINE Pay',          en:'LINE Pay'} },
      ].map((opt, i) => (
        <label key={i} style={{
          display:'flex', alignItems:'center', gap:12,
          padding:'14px 18px', border:`1px solid rgba(0,0,0,0.12)`, borderRadius:10, cursor:'pointer',
        }}>
          <input type="radio" name="pay" value={opt.v} defaultChecked={i===0} />
          <span style={{ fontFamily: A.serifZh, fontSize:15, color: A.ink }}>{opt.t[lang]}</span>
        </label>
      ))}
    </FormSection>

    <Field label={lang==='zh'?'備註 (選填)':'Order note (optional)'} rows={3} A={A} />
  </form>
);

const FormSection = ({ title, A, children }) => (
  <div>
    <div style={{ fontFamily: A.mono, fontSize:11, letterSpacing:'0.22em', color: A.accent, marginBottom: 14 }}>— {title.toUpperCase()}</div>
    <div style={{ display:'flex', flexDirection:'column', gap:12 }}>{children}</div>
  </div>
);
const Row2 = ({ children }) => <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap: 12 }}>{children}</div>;
const Field = ({ label, type='text', rows, required, A }) => (
  <label style={{ display:'block' }}>
    <div style={{ fontSize:11, color: A.mute, letterSpacing:'0.12em', marginBottom:6, fontFamily: A.mono, textTransform:'uppercase' }}>
      {label}{required && <span style={{ color: A.accent }}> *</span>}
    </div>
    {rows
      ? <textarea rows={rows} required={required} style={fieldS(A)}/>
      : <input type={type} required={required} style={fieldS(A)}/>}
  </label>
);
const fieldS = (A) => ({
  width:'100%', padding:'12px 14px', fontFamily:"'Manrope','Noto Sans TC',sans-serif", fontSize:14,
  background:'#fbfaf6', border:`1px solid rgba(0,0,0,0.12)`, borderRadius:10, color: A.ink, outline:'none', boxSizing:'border-box',
});

const CartDoneView = ({ lang, A, reset }) => (
  <div data-no-route="1" style={{ background:'#fff', borderRadius:18, padding:'96px 64px', textAlign:'center', maxWidth: 720, margin:'0 auto' }}>
    <div style={{
      width:80, height:80, borderRadius:'50%', background: A.accent, color:'#fff', margin:'0 auto',
      display:'flex', alignItems:'center', justifyContent:'center', fontSize: 36,
    }}>✓</div>
    <h2 style={{ marginTop:32, fontFamily: A.serifZh, fontSize:48, fontWeight:500, color: A.ink, lineHeight:1.1 }}>
      {lang==='zh' ? '訂單已成立。' : <span style={{ fontStyle:'italic', fontFamily: A.serifEn }}>Order placed.</span>}
    </h2>
    <p style={{ marginTop: 16, fontSize:16, lineHeight:1.7, color: A.mute }}>
      {lang==='zh'
        ? '謝謝你選擇敏利。訂單編號 #MIN-' + Math.floor(Math.random() * 900000 + 100000) + ' 已寄送至您的電子信箱。'
        : 'Thank you. Order #MIN-' + Math.floor(Math.random() * 900000 + 100000) + ' has been emailed to you.'}
    </p>
    <div style={{ marginTop: 36, display:'flex', gap:12, justifyContent:'center' }}>
      <a href="#home" className="btn" style={{ background:'transparent', color: A.ink, boxShadow:`inset 0 0 0 1px ${A.ink}`, padding:'14px 22px' }}>
        {lang==='zh' ? '回到首頁' : 'Back home'}
      </a>
      <a href="#products" onClick={reset} className="btn" style={{ background: A.ink, color: A.paper, padding:'14px 22px' }}>
        {lang==='zh' ? '繼續購物' : 'Keep shopping'} →
      </a>
    </div>
  </div>
);

// ============ Mobile Cart Page ============
const MobileCartPage = () => {
  const [lang, setLang] = React.useState('zh');
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [step, setStep] = React.useState('cart');
  const items = useCart();
  const A = CART_TOKENS;
  const total = items.reduce((s, i) => s + (priceOf(i) * i.qty), 0);
  const shipping = total > 0 && total < 1500 ? 80 : 0;

  return (
    <div style={{ position:'relative', height:'100%', overflow:'auto', background: A.paper, fontFamily:"'Manrope','Noto Sans TC',sans-serif" }}>
      <MTopBar lang={lang} setLang={setLang} onMenu={() => setMenuOpen(true)} />
      <MMenu open={menuOpen} onClose={() => setMenuOpen(false)} lang={lang} setLang={setLang} />

      <section style={{ padding:'32px 22px 24px' }}>
        <div style={{ fontFamily: A.mono, fontSize:10, letterSpacing:'0.22em', color: A.accent }}>
          — {lang==='zh' ? '購物車' : 'YOUR CART'}
        </div>
        <h1 style={{ marginTop:14, fontFamily: A.serifZh, fontSize: 48, fontWeight:500, color: A.ink, lineHeight:1 }}>
          {lang==='zh' ? '結帳。' : <span style={{ fontStyle:'italic', fontFamily: A.serifEn }}>Checkout.</span>}
        </h1>
      </section>

      {step === 'done' ? (
        <section style={{ padding:'0 22px 80px' }}>
          <CartDoneView lang={lang} A={A} reset={() => { MinliCart.clear(); setStep('cart'); }} />
        </section>
      ) : items.length === 0 && step === 'cart' ? (
        <section style={{ padding:'24px 22px 80px' }}>
          <EmptyCart lang={lang} A={A} />
        </section>
      ) : (
        <>
          <section style={{ padding:'24px 22px 12px' }} data-no-route="1">
            {step === 'cart' && (
              <div style={{ background:'#fff', borderRadius:14, padding:14 }}>
                {items.map(it => <MobileCartRow key={it.key} item={it} lang={lang} A={A} />)}
              </div>
            )}
            {step === 'info' && <CheckoutForm lang={lang} A={A} onBack={() => setStep('cart')} onSubmit={() => setStep('done')} />}
          </section>

          {/* sticky checkout bar */}
          <div data-no-route="1" style={{
            position:'sticky', bottom:0, left:0, right:0, padding: 18, background: A.cream,
            borderTop:`1px solid rgba(0,0,0,0.1)`,
          }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom: 10 }}>
              <span style={{ fontSize:11, color: A.mute, fontFamily: A.mono, letterSpacing:'0.14em' }}>
                {lang==='zh' ? '應付總計' : 'TOTAL'}
              </span>
              <span style={{ fontFamily: A.serifEn, fontStyle:'italic', fontSize: 26, color: A.ink }}>
                {formatNT(total + shipping)}
              </span>
            </div>
            <button onClick={() => step === 'cart' ? setStep('info') : setStep('done')} className="btn" style={{
              background: A.ink, color: A.paper, width:'100%', justifyContent:'center', padding:'14px 18px',
            }}>
              {step === 'cart'
                ? (lang==='zh' ? '前往結帳' : 'Proceed to checkout')
                : (lang==='zh' ? '確認下單' : 'Place order')
              } →
            </button>
          </div>
        </>
      )}
    </div>
  );
};

const MobileCartRow = ({ item, lang, A }) => {
  const p = PRODUCTS.find(x => x.id === item.productId);
  if (!p) return null;
  const b = BRANDS.find(x => x.id === p.brand);
  return (
    <div style={{ display:'grid', gridTemplateColumns:'72px 1fr auto', gap:14, padding:'12px 0', borderBottom:`1px solid rgba(0,0,0,0.08)`, alignItems:'center' }}>
      <ProductPH label={p.zh.slice(0,3)} w={72} h={72} bg="#e6dccb" fg="#7a6c58" style={{ borderRadius:8 }} />
      <div>
        <div style={{ fontFamily: A.mono, fontSize:9, color: b.accent, letterSpacing:'0.14em' }}>
          {(lang==='zh' ? b.name : b.nameEn).toUpperCase()}
        </div>
        <h3 style={{ marginTop:3, fontFamily: A.serifZh, fontSize:14, fontWeight:600, color: A.ink, lineHeight:1.3 }}>{p[lang]}</h3>
        {item.size && <div style={{ fontSize:10, color: A.mute, marginTop:2 }}>{item.size}</div>}
        <div style={{ marginTop:6, display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <QtyControl item={item} A={A} />
          <span style={{ fontFamily: A.serifEn, fontStyle:'italic', fontSize:16, color: A.ink }}>{formatNT(priceOf(item) * item.qty)}</span>
        </div>
      </div>
      <button onClick={() => MinliCart.remove(item.key)} style={{ background:'transparent', border:'none', color: A.mute, fontSize: 18, padding:4 }}>×</button>
    </div>
  );
};

Object.assign(window, {
  MinliCart, useCart, FloatingCart, CartPage, MobileCartPage, formatNT, priceOf,
});

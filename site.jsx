// site.jsx — real navigable website. Maps clicks on nav/brand links to page switches.

const PAGES_DESKTOP = {
  home:                  V1,
  about:                 AboutPage,
  'brand-minli':         MinliBrandPage,
  'brand-little-taiwan': LittleTaiwanBrandPage,
  'brand-junda':         JundaBrandPage,
  'brand-uhome':         UhomeBrandPage,
  'brand-laozeyuan':     BrandDetailPage,
  products:              ProductsIndexPage,
  product:               ProductDetailPage,
  cart:                  CartPage,
};

const PAGES_MOBILE = {
  home:                  MobileHome,
  about:                 MobileAbout,
  'brand-minli':         MobileMinli,
  'brand-little-taiwan': MobileLittleTaiwan,
  'brand-junda':         MobileJunda,
  'brand-uhome':         MobileUhome,
  'brand-laozeyuan':     MobileBrandDetail,
  products:              MobileProductsIndex,
  product:               MobileProductDetail,
  cart:                  MobileCartPage,
};

// Map link text to page ids
const TEXT_TO_ROUTE = {
  // nav
  '首頁':'home', 'home':'home',
  '品牌':'brand-minli', 'brands':'brand-minli',
  '產品':'products', 'products':'products',
  '品質':'about', 'quality':'about',
  '聯絡':'about#contact', 'contact':'about#contact',
  '公司簡介':'about', 'about':'about',

  // brand names — zh + en variants
  '敏利':'brand-minli', 'minli':'brand-minli',
  '小台灣':'brand-little-taiwan',
  '小台灣store':'brand-little-taiwan',
  '小台灣 store':'brand-little-taiwan',
  'littletaiwanstore':'brand-little-taiwan',
  'little taiwan store':'brand-little-taiwan',
  'junda':'brand-junda',
  'uhome':'brand-uhome',
  '老澤源':'brand-laozeyuan',
  '老澤 源':'brand-laozeyuan',
  'laozeyuan':'brand-laozeyuan',
  'lao ze yuan':'brand-laozeyuan',

  // CTAs that go somewhere
  '探索五大品牌':'brand-minli',
  '探索我們的品牌':'brand-minli',
  'meet the five brands':'brand-minli',
  'explore our brands':'brand-minli',

  '走進老澤源':'brand-laozeyuan',
  'visit lao ze yuan':'brand-laozeyuan',
  '購買老澤源':'brand-laozeyuan',
  'shop lao ze yuan':'brand-laozeyuan',
  '走進 敏利':'brand-minli',
  '走進 小台灣 store':'brand-little-taiwan',
  '走進 junda':'brand-junda',
  '走進 uhome':'brand-uhome',
  '走進 老澤源':'brand-laozeyuan',
  'visit minli':'brand-minli',
  'visit little taiwan store':'brand-little-taiwan',
  'visit junda':'brand-junda',
  'visit uhome':'brand-uhome',

  '查看全部 26 件商品':'products',
  '查看完整產品線':'products',
  'view all products':'products',
  'view all 26 products':'products',

  '購物車':'cart', 'cart':'cart',
  '繼續購物':'products', 'keep shopping':'products',
  '回到首頁':'home', 'back home':'home',
  '瀏覽全部商品':'products', 'browse products':'products',

  '查看 →':'product', '查看':'product', 'detail →':'product', 'detail':'product', 'view':'product',
};

const normalize = (s) => (s || '')
  .replace(/[→←▶◐▎—–·!]/g, ' ')
  .replace(/\s+/g, ' ')
  .trim()
  .toLowerCase();

const Site = () => {
  const [page, setPage] = React.useState('home');
  const [selectedProduct, setSelectedProduct] = React.useState('lzy-chef');
  const [mobile, setMobile] = React.useState(typeof window !== 'undefined' && window.innerWidth < 768);

  // Sync from hash
  React.useEffect(() => {
    const fromHash = () => {
      const h = window.location.hash.replace('#','').replace('/','');
      if (h && PAGES_DESKTOP[h]) setPage(h);
    };
    fromHash();
    window.addEventListener('hashchange', fromHash);
    return () => window.removeEventListener('hashchange', fromHash);
  }, []);

  // Resize watcher
  React.useEffect(() => {
    const onResize = () => setMobile(window.innerWidth < 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Global click interceptor — intercept any <a> or <button> whose visible text matches a known route.
  React.useEffect(() => {
    const handler = (e) => {
      const el = e.target.closest('a, button');
      if (!el) return;

      // Skip anything inside [data-no-route] subtree
      if (el.closest('[data-no-route]')) return;

      // Skip buttons that are clearly form-internal
      if (el.tagName === 'BUTTON' && el.closest('[data-no-route], select')) return;

      const key = normalize(el.textContent);
      const target = el.dataset.route || TEXT_TO_ROUTE[key];
      if (!target) return;

      // Capture product id from data-product-id attribute when navigating to a product page
      const productId = el.dataset.productId || (el.closest('[data-product-id]') || {}).dataset?.productId;

      e.preventDefault();
      const [p, anchor] = target.split('#');
      if (p === 'product' && productId) {
        setSelectedProduct(productId);
        window.__selectedProduct = productId;
      }
      setPage(p);
      window.location.hash = p;
      // After page change, scroll to top or anchor
      setTimeout(() => {
        if (anchor) {
          const a = document.querySelector(`#${anchor}`);
          if (a) a.scrollIntoView({ behavior:'smooth' }); else window.scrollTo(0, 0);
        } else {
          window.scrollTo(0, 0);
        }
      }, 50);
    };
    document.addEventListener('click', handler, true);
    return () => document.removeEventListener('click', handler, true);
  }, []);

  const map = mobile ? PAGES_MOBILE : PAGES_DESKTOP;
  const Page = map[page] || map.home;

  const navigate = (id) => { setPage(id); window.location.hash = id; window.scrollTo(0, 0); };

  return (
    <div style={{
      width:'100%', minHeight:'100vh', position:'relative',
      height: mobile ? '100vh' : 'auto',
      overflow: mobile ? 'hidden' : 'visible',
    }}>
      {page === 'product'
        ? <Page key={selectedProduct} productId={selectedProduct} />
        : <Page />
      }
      <FloatingCart onOpen={() => navigate('cart')} />
    </div>
  );
};

window.Site = Site;

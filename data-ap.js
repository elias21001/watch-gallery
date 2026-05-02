// ============================================================
// THE WATCH GALLERY — AUDEMARS PIGUET CATALOG
// Pricing: Chrono24, WatchCharts, WatchGuys, Ermitage Apr 2026
// Status: "current" | "discontinued" | "vintage" | "limited"
// ============================================================

const AP_P = (fs, fp, fb, wo) => ({
  "Full Set":        { low: fs[0], avg: fs[1], high: fs[2] },
  "Watch + Papers":  { low: fp[0], avg: fp[1], high: fp[2] },
  "Watch + Box":     { low: fb[0], avg: fb[1], high: fb[2] },
  "Watch Only":      { low: wo[0], avg: wo[1], high: wo[2] }
});

const AP_CM_STD  = { Unworn:1.12, Mint:1.06, Excellent:1.00, "Very Good":.91, Good:.79, Fair:.64 };
const AP_CM_GOLD = { Unworn:1.09, Mint:1.04, Excellent:1.00, "Very Good":.92, Good:.81, Fair:.66 };
const AP_CM_RARE = { Unworn:1.25, Mint:1.12, Excellent:1.00, "Very Good":.87, Good:.73, Fair:.55 };
const AP_CM_VTG  = { Unworn:1.35, Mint:1.18, Excellent:1.00, "Very Good":.82, Good:.65, Fair:.45 };

const AP_EM_RO   = { "Pre-1960":2.0, "1960s":2.5, "1970s":2.2, "1980s":1.5, "1990s":1.1, "2000s":.95, "2010s":.92, "2020s":1.0 };
const AP_EM_OFF  = { "Pre-1960":1.5, "1960s":1.5, "1970s":1.5, "1980s":1.3, "1990s":1.1, "2000s":1.0, "2010s":.95, "2020s":1.0 };
const AP_EM_STD  = { "Pre-1960":1.5, "1960s":1.3, "1970s":1.1, "1980s":1.0, "1990s":.90, "2000s":.85, "2010s":.88, "2020s":1.0 };

const AP_SRC_MAIN = ["Chrono24","WatchGuys","Ermitage 2026"];
const AP_SRC_C24  = ["Chrono24","WatchCharts"];
const AP_SRC_VTG  = ["Phillips","Christie's","Sotheby's"];

window.AP_WATCHES = [

  // ── ROYAL OAK 37MM (15450) ──────────────────────────────────────────────────
  { id:"ro-15450-blu", fid:"ap-ro37", brand:"Audemars Piguet", family:"Royal Oak 37mm",
    name:"Royal Oak", nick:null, ref:"15450ST",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"Blue", brace:"Integrated SS", size:"37mm",
    status:"current", era:"2018–Present",
    desc:"The 37mm Royal Oak — the sweet spot between the Jumbo and 41mm. Blue 'Grande Tapisserie' dial, Caliber 4302. Extremely strong demand.",
    pricing:AP_P([28000,34000,42000],[25000,31000,38000],[22000,28000,35000],[20000,25000,32000]),
    cM:AP_CM_STD, eM:AP_EM_RO, src:AP_SRC_MAIN },

  { id:"ro-15450-sil", fid:"ap-ro37", brand:"Audemars Piguet", family:"Royal Oak 37mm",
    name:"Royal Oak", nick:null, ref:"15450ST",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"Silver", brace:"Integrated SS", size:"37mm",
    status:"current", era:"2018–Present",
    desc:"Silver dial 37mm Royal Oak in steel. Clean, versatile, and consistently in demand.",
    pricing:AP_P([27000,33000,41000],[24000,30000,37000],[21000,27000,34000],[19000,24000,31000]),
    cM:AP_CM_STD, eM:AP_EM_RO, src:AP_SRC_MAIN },

  { id:"ro-15450-blk", fid:"ap-ro37", brand:"Audemars Piguet", family:"Royal Oak 37mm",
    name:"Royal Oak", nick:null, ref:"15450ST",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"Black", brace:"Integrated SS", size:"37mm",
    status:"current", era:"2018–Present",
    desc:"Black dial 37mm Royal Oak. Stealthy and sophisticated.",
    pricing:AP_P([27000,33000,41000],[24000,30000,37000],[21000,27000,34000],[19000,24000,31000]),
    cM:AP_CM_STD, eM:AP_EM_RO, src:AP_SRC_MAIN },

  { id:"ro-15451-wg-wht", fid:"ap-ro37", brand:"Audemars Piguet", family:"Royal Oak 37mm",
    name:"Royal Oak", nick:"White Gold White", ref:"15451BC",
    mat:"18k White Gold", bezel:"Integrated WG", dial:"White", brace:"Integrated WG", size:"37mm",
    status:"current", era:"2018–Present",
    desc:"White gold 37mm Royal Oak. Elegant, cool-toned, and rare relative to steel.",
    pricing:AP_P([55000,68000,85000],[50000,62000,78000],[45000,57000,72000],[41000,52000,66000]),
    cM:AP_CM_GOLD, eM:AP_EM_RO, src:AP_SRC_C24 },

  { id:"ro-15451-yg-cham", fid:"ap-ro37", brand:"Audemars Piguet", family:"Royal Oak 37mm",
    name:"Royal Oak", nick:"Yellow Gold Champagne", ref:"15451BA",
    mat:"18k Yellow Gold", bezel:"Integrated YG", dial:"Champagne", brace:"Integrated YG", size:"37mm",
    status:"current", era:"2018–Present",
    desc:"Yellow gold 37mm with champagne dial. A classic warm precious metal expression.",
    pricing:AP_P([58000,72000,90000],[53000,66000,83000],[48000,61000,77000],[44000,56000,71000]),
    cM:AP_CM_GOLD, eM:AP_EM_RO, src:AP_SRC_C24 },

  { id:"ro-15451-rg-pink", fid:"ap-ro37", brand:"Audemars Piguet", family:"Royal Oak 37mm",
    name:"Royal Oak", nick:"Rose Gold Pink", ref:"15451OR",
    mat:"18k Rose Gold", bezel:"Integrated RG", dial:"Pink", brace:"Integrated RG", size:"37mm",
    status:"current", era:"2018–Present",
    desc:"Rose gold with pink dial — one of the most sought-after 37mm configurations.",
    pricing:AP_P([60000,75000,95000],[55000,69000,88000],[50000,63000,81000],[46000,58000,75000]),
    cM:AP_CM_GOLD, eM:AP_EM_RO, src:AP_SRC_C24 },

  { id:"ro-15451-tt-blu", fid:"ap-ro37", brand:"Audemars Piguet", family:"Royal Oak 37mm",
    name:"Royal Oak", nick:"Two-Tone Blue", ref:"15451SR",
    mat:"Steel & Rose Gold", bezel:"Integrated Steel/RG", dial:"Blue", brace:"Integrated Steel/RG", size:"37mm",
    status:"current", era:"2020–Present",
    desc:"Two-tone steel and rose gold 37mm. Warm and versatile combination.",
    pricing:AP_P([38000,47000,60000],[35000,43000,55000],[32000,40000,51000],[29000,37000,47000]),
    cM:AP_CM_GOLD, eM:AP_EM_RO, src:AP_SRC_C24 },

  { id:"ro-15551-dia", fid:"ap-ro37", brand:"Audemars Piguet", family:"Royal Oak 37mm",
    name:"Royal Oak", nick:"Diamond Set", ref:"15551ST",
    mat:"Stainless Steel", bezel:"Diamond-Set", dial:"Blue", brace:"Integrated SS", size:"37mm",
    status:"current", era:"2022–Present",
    desc:"Diamond-set bezel Royal Oak 37mm. Factory diamonds on the iconic octagonal bezel.",
    pricing:AP_P([55000,70000,90000],[50000,64000,83000],[46000,59000,77000],[42000,54000,71000]),
    cM:AP_CM_GOLD, eM:AP_EM_RO, src:AP_SRC_C24 },

  // ── ROYAL OAK 41MM (15500 / 15510) ─────────────────────────────────────────
  { id:"ro-15500-blu", fid:"ap-ro41", brand:"Audemars Piguet", family:"Royal Oak 41mm",
    name:"Royal Oak", nick:"Blue 41mm", ref:"15500ST",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"Blue", brace:"Integrated SS", size:"41mm",
    status:"current", era:"2019–Present",
    desc:"The modern 41mm Royal Oak. Caliber 4302, 70hr power reserve. Blue Grande Tapisserie dial is the benchmark.",
    pricing:AP_P([32000,40000,52000],[29000,37000,48000],[26000,34000,44000],[24000,31000,40000]),
    cM:AP_CM_STD, eM:AP_EM_RO, src:AP_SRC_MAIN },

  { id:"ro-15500-sil", fid:"ap-ro41", brand:"Audemars Piguet", family:"Royal Oak 41mm",
    name:"Royal Oak", nick:"Silver 41mm", ref:"15500ST",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"Silver", brace:"Integrated SS", size:"41mm",
    status:"current", era:"2019–Present",
    desc:"Silver dial 41mm Royal Oak. Clean, understated, and highly wearable.",
    pricing:AP_P([31000,39000,51000],[28000,36000,47000],[25000,33000,43000],[23000,30000,39000]),
    cM:AP_CM_STD, eM:AP_EM_RO, src:AP_SRC_MAIN },

  { id:"ro-15500-blk", fid:"ap-ro41", brand:"Audemars Piguet", family:"Royal Oak 41mm",
    name:"Royal Oak", nick:"Black 41mm", ref:"15500ST",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"Black", brace:"Integrated SS", size:"41mm",
    status:"current", era:"2019–Present",
    desc:"Black dial 41mm Royal Oak. Stealthy, bold, and commanding.",
    pricing:AP_P([31000,39000,51000],[28000,36000,47000],[25000,33000,43000],[23000,30000,39000]),
    cM:AP_CM_STD, eM:AP_EM_RO, src:AP_SRC_MAIN },

  { id:"ro-15510-wg-wht", fid:"ap-ro41", brand:"Audemars Piguet", family:"Royal Oak 41mm",
    name:"Royal Oak", nick:"White Gold 41mm", ref:"15510BC",
    mat:"18k White Gold", bezel:"Integrated WG", dial:"White", brace:"Integrated WG", size:"41mm",
    status:"current", era:"2019–Present",
    desc:"White gold 41mm Royal Oak with white dial. Refined and exclusive.",
    pricing:AP_P([65000,82000,105000],[60000,76000,97000],[55000,70000,90000],[50000,64000,83000]),
    cM:AP_CM_GOLD, eM:AP_EM_RO, src:AP_SRC_C24 },

  { id:"ro-15510-yg-cham", fid:"ap-ro41", brand:"Audemars Piguet", family:"Royal Oak 41mm",
    name:"Royal Oak", nick:"Yellow Gold 41mm", ref:"15510BA",
    mat:"18k Yellow Gold", bezel:"Integrated YG", dial:"Champagne", brace:"Integrated YG", size:"41mm",
    status:"current", era:"2019–Present",
    desc:"Yellow gold 41mm with champagne dial. The warmest, most distinguished Royal Oak.",
    pricing:AP_P([70000,88000,112000],[65000,82000,105000],[60000,76000,97000],[55000,70000,90000]),
    cM:AP_CM_GOLD, eM:AP_EM_RO, src:AP_SRC_C24 },

  { id:"ro-15510-rg-cham", fid:"ap-ro41", brand:"Audemars Piguet", family:"Royal Oak 41mm",
    name:"Royal Oak", nick:"Rose Gold 41mm", ref:"15510OR",
    mat:"18k Rose Gold", bezel:"Integrated RG", dial:"Chocolate", brace:"Integrated RG", size:"41mm",
    status:"current", era:"2019–Present",
    desc:"Rose gold 41mm with chocolate dial. Rich, warm, and exceptionally distinctive.",
    pricing:AP_P([72000,90000,115000],[67000,84000,108000],[62000,78000,100000],[57000,72000,93000]),
    cM:AP_CM_GOLD, eM:AP_EM_RO, src:AP_SRC_C24 },

  { id:"ro-15510-tt-blu", fid:"ap-ro41", brand:"Audemars Piguet", family:"Royal Oak 41mm",
    name:"Royal Oak", nick:"Two-Tone 41mm", ref:"15510SR",
    mat:"Steel & Rose Gold", bezel:"Integrated Steel/RG", dial:"Blue", brace:"Integrated Steel/RG", size:"41mm",
    status:"current", era:"2020–Present",
    desc:"Two-tone 41mm Royal Oak in steel and rose gold.",
    pricing:AP_P([45000,57000,72000],[41000,53000,67000],[37000,49000,62000],[34000,45000,57000]),
    cM:AP_CM_GOLD, eM:AP_EM_RO, src:AP_SRC_C24 },

  { id:"ro-15500-green", fid:"ap-ro41", brand:"Audemars Piguet", family:"Royal Oak 41mm",
    name:"Royal Oak", nick:"Green 41mm", ref:"15500ST",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"Green", brace:"Integrated SS", size:"41mm",
    status:"current", era:"2021–Present",
    desc:"Green dial 41mm Royal Oak — one of the most sought-after current AP configurations. Commands premium.",
    pricing:AP_P([45000,58000,75000],[41000,53000,69000],[38000,49000,64000],[35000,45000,59000]),
    cM:{ Unworn:1.18, Mint:1.09, Excellent:1.0, "Very Good":.90, Good:.77, Fair:.62 },
    eM:AP_EM_RO, src:AP_SRC_C24 },

  { id:"ro-15500-slate", fid:"ap-ro41", brand:"Audemars Piguet", family:"Royal Oak 41mm",
    name:"Royal Oak", nick:"Slate Grey 41mm", ref:"15500ST",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"Slate Grey", brace:"Integrated SS", size:"41mm",
    status:"current", era:"2022–Present",
    desc:"Slate grey dial — contemporary, understated, increasingly collectible.",
    pricing:AP_P([33000,42000,54000],[30000,39000,50000],[27000,36000,46000],[25000,33000,42000]),
    cM:AP_CM_STD, eM:AP_EM_RO, src:AP_SRC_C24 },

  // ── ROYAL OAK JUMBO 39MM (16202) ────────────────────────────────────────────
  { id:"ro-16202-blu", fid:"ap-ro-jumbo", brand:"Audemars Piguet", family:"Royal Oak Jumbo 39mm",
    name:"Royal Oak 'Extra-Thin'", nick:"Jumbo Blue", ref:"16202ST",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"Blue", brace:"Integrated SS", size:"39mm",
    status:"current", era:"2021–Present",
    desc:"The reissue of Gerald Genta's original 1972 design. Caliber 7121, 2.45mm thin. The most important Royal Oak. Blue dial is the grail.",
    pricing:AP_P([95000,130000,180000],[87000,120000,165000],[79000,110000,152000],[72000,100000,140000]),
    cM:{ Unworn:1.25, Mint:1.12, Excellent:1.0, "Very Good":.88, Good:.74, Fair:.58 },
    eM:AP_EM_RO, src:["Chrono24","Phillips","WatchCharts"] },

  { id:"ro-16202-sil", fid:"ap-ro-jumbo", brand:"Audemars Piguet", family:"Royal Oak Jumbo 39mm",
    name:"Royal Oak 'Extra-Thin'", nick:"Jumbo Silver", ref:"16202ST",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"Silver", brace:"Integrated SS", size:"39mm",
    status:"current", era:"2021–Present",
    desc:"Silver dial Jumbo — clean and classic. Every bit as historically significant as the blue.",
    pricing:AP_P([90000,122000,170000],[83000,113000,157000],[76000,104000,145000],[69000,95000,133000]),
    cM:{ Unworn:1.22, Mint:1.11, Excellent:1.0, "Very Good":.88, Good:.74, Fair:.58 },
    eM:AP_EM_RO, src:["Chrono24","Phillips","WatchCharts"] },

  { id:"ro-16202-yg-cham", fid:"ap-ro-jumbo", brand:"Audemars Piguet", family:"Royal Oak Jumbo 39mm",
    name:"Royal Oak 'Extra-Thin'", nick:"Jumbo Yellow Gold", ref:"16202BA",
    mat:"18k Yellow Gold", bezel:"Integrated YG", dial:"Champagne", brace:"Integrated YG", size:"39mm",
    status:"current", era:"2021–Present",
    desc:"Yellow gold Jumbo. Exceptionally rare — commanding six-figure premiums.",
    pricing:AP_P([180000,240000,320000],[165000,222000,298000],[150000,205000,278000],[138000,190000,258000]),
    cM:AP_CM_GOLD, eM:AP_EM_RO, src:["Phillips","Christie's","Chrono24"] },

  { id:"ro-16202-wg-wht", fid:"ap-ro-jumbo", brand:"Audemars Piguet", family:"Royal Oak Jumbo 39mm",
    name:"Royal Oak 'Extra-Thin'", nick:"Jumbo White Gold", ref:"16202BC",
    mat:"18k White Gold", bezel:"Integrated WG", dial:"White", brace:"Integrated WG", size:"39mm",
    status:"current", era:"2021–Present",
    desc:"White gold Jumbo — the most refined precious metal Jumbo expression.",
    pricing:AP_P([160000,215000,290000],[148000,200000,270000],[136000,185000,252000],[125000,172000,235000]),
    cM:AP_CM_GOLD, eM:AP_EM_RO, src:["Phillips","Christie's","Chrono24"] },

  { id:"ro-5402-vintage", fid:"ap-ro-jumbo", brand:"Audemars Piguet", family:"Royal Oak Jumbo 39mm",
    name:"Royal Oak", nick:"A-Series / Original Jumbo", ref:"5402ST",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"Blue", brace:"Integrated SS", size:"39mm",
    status:"vintage", era:"1972–1985",
    desc:"The original Royal Oak by Gerald Genta. A-Series (1972) are the holy grail. Launched at Baselworld 1972 for the price of a gold watch in steel.",
    pricing:AP_P([80000,160000,400000],[70000,140000,360000],[60000,120000,320000],[50000,100000,280000]),
    cM:AP_CM_VTG, eM:AP_EM_RO, src:AP_SRC_VTG },

  // ── ROYAL OAK OFFSHORE 42MM ─────────────────────────────────────────────────
  { id:"roo-26400-blk", fid:"ap-roo42", brand:"Audemars Piguet", family:"Royal Oak Offshore 42mm",
    name:"Royal Oak Offshore", nick:"Black 42mm", ref:"26400IO",
    mat:"Forged Carbon", bezel:"Ceramic", dial:"Black", brace:"Rubber", size:"42mm",
    status:"current", era:"2012–Present",
    desc:"Forged carbon Offshore — the most rugged, sporty AP. Unique texture and dramatic presence.",
    pricing:AP_P([28000,35000,45000],[25000,32000,41000],[22000,29000,38000],[20000,27000,35000]),
    cM:AP_CM_STD, eM:AP_EM_OFF, src:AP_SRC_MAIN },

  { id:"roo-26420-blu", fid:"ap-roo42", brand:"Audemars Piguet", family:"Royal Oak Offshore 42mm",
    name:"Royal Oak Offshore", nick:"Blue 42mm", ref:"26420TI",
    mat:"Titanium", bezel:"Ceramic", dial:"Blue", brace:"Rubber", size:"42mm",
    status:"current", era:"2022–Present",
    desc:"Current titanium Offshore in blue. Lightweight, bold, and distinctly contemporary.",
    pricing:AP_P([30000,38000,49000],[27000,35000,45000],[24000,32000,42000],[22000,29000,38000]),
    cM:AP_CM_STD, eM:AP_EM_OFF, src:AP_SRC_MAIN },

  { id:"roo-26420-org", fid:"ap-roo42", brand:"Audemars Piguet", family:"Royal Oak Offshore 42mm",
    name:"Royal Oak Offshore", nick:"Orange 42mm", ref:"26420RO",
    mat:"18k Rose Gold", bezel:"Ceramic", dial:"Orange", brace:"Rubber", size:"42mm",
    status:"current", era:"2022–Present",
    desc:"Rose gold Offshore with orange dial. Vibrant, bold, and unmistakably luxurious.",
    pricing:AP_P([55000,68000,86000],[50000,63000,80000],[46000,58000,74000],[42000,53000,68000]),
    cM:AP_CM_GOLD, eM:AP_EM_OFF, src:AP_SRC_C24 },

  { id:"roo-26420-grn", fid:"ap-roo42", brand:"Audemars Piguet", family:"Royal Oak Offshore 42mm",
    name:"Royal Oak Offshore", nick:"Green 42mm", ref:"26420CE",
    mat:"Ceramic", bezel:"Ceramic", dial:"Green", brace:"Rubber", size:"42mm",
    status:"current", era:"2022–Present",
    desc:"Full ceramic Offshore in green. Technically impressive and visually striking.",
    pricing:AP_P([32000,42000,55000],[29000,39000,51000],[26000,36000,47000],[24000,33000,43000]),
    cM:AP_CM_STD, eM:AP_EM_OFF, src:AP_SRC_C24 },

  { id:"roo-25721-og", fid:"ap-roo42", brand:"Audemars Piguet", family:"Royal Oak Offshore 42mm",
    name:"Royal Oak Offshore", nick:"Original Offshore", ref:"25721ST",
    mat:"Stainless Steel", bezel:"Steel", dial:"Black", brace:"Rubber", size:"42mm",
    status:"discontinued", era:"1993–2004",
    desc:"The original 'Beast' Offshore — Emmanuel Gueit's controversial 1993 design. Now a cult classic. First generation highly collectible.",
    pricing:AP_P([20000,30000,50000],[18000,27000,46000],[16000,24000,42000],[14000,21000,38000]),
    cM:{ Unworn:1.22, Mint:1.11, Excellent:1.0, "Very Good":.87, Good:.72, Fair:.55 },
    eM:AP_EM_OFF, src:AP_SRC_VTG },

  { id:"roo-26237-panda", fid:"ap-roo42", brand:"Audemars Piguet", family:"Royal Oak Offshore 42mm",
    name:"Royal Oak Offshore Chrono", nick:"Panda", ref:"26237ST",
    mat:"Stainless Steel", bezel:"Steel", dial:"White/Black", brace:"Rubber", size:"42mm",
    status:"discontinued", era:"2012–2022",
    desc:"'Panda' chronograph Offshore — white dial with black counters. Discontinued and commanding premium.",
    pricing:AP_P([22000,28000,37000],[20000,25500,34000],[18000,23000,31000],[16500,21000,28500]),
    cM:AP_CM_STD, eM:AP_EM_OFF, src:AP_SRC_C24 },

  // ── ROYAL OAK OFFSHORE CHRONOGRAPH 44MM ─────────────────────────────────────
  { id:"roo-26480-blk", fid:"ap-roo-chrono", brand:"Audemars Piguet", family:"Royal Oak Offshore Chronograph",
    name:"Royal Oak Offshore Chronograph", nick:"Black 44mm", ref:"26480TN",
    mat:"Tantalum", bezel:"Tantalum", dial:"Black", brace:"Rubber", size:"44mm",
    status:"current", era:"2021–Present",
    desc:"44mm Offshore Chronograph in tantalum — rare, dense, dark metal. Automatic flyback chronograph.",
    pricing:AP_P([42000,55000,72000],[38000,50000,66000],[34000,46000,61000],[31000,43000,57000]),
    cM:AP_CM_STD, eM:AP_EM_OFF, src:AP_SRC_C24 },

  { id:"roo-26400-ss-blk", fid:"ap-roo-chrono", brand:"Audemars Piguet", family:"Royal Oak Offshore Chronograph",
    name:"Royal Oak Offshore Chronograph", nick:"Steel Black 44mm", ref:"26400SO",
    mat:"Stainless Steel", bezel:"Rubber", dial:"Black", brace:"Rubber", size:"44mm",
    status:"discontinued", era:"2012–2021",
    desc:"Steel 44mm Offshore Chronograph. The classic Offshore Chrono configuration.",
    pricing:AP_P([22000,28000,37000],[20000,25500,34000],[18000,23000,31000],[16500,21000,28500]),
    cM:AP_CM_STD, eM:AP_EM_OFF, src:AP_SRC_MAIN },

  { id:"roo-26550-rg-org", fid:"ap-roo-chrono", brand:"Audemars Piguet", family:"Royal Oak Offshore Chronograph",
    name:"Royal Oak Offshore Chronograph", nick:"Rose Gold Orange 44mm", ref:"26550OR",
    mat:"18k Rose Gold", bezel:"Ceramic", dial:"Orange", brace:"Rubber", size:"44mm",
    status:"current", era:"2022–Present",
    desc:"Rose gold 44mm Offshore Chrono with orange dial. Bold, luxurious, unmistakable.",
    pricing:AP_P([68000,88000,115000],[62000,81000,106000],[57000,75000,98000],[52000,70000,92000]),
    cM:AP_CM_GOLD, eM:AP_EM_OFF, src:AP_SRC_C24 },

  // ── ROYAL OAK CHRONOGRAPH 41MM ──────────────────────────────────────────────
  { id:"ro-26240-blu", fid:"ap-ro-chrono41", brand:"Audemars Piguet", family:"Royal Oak Chronograph 41mm",
    name:"Royal Oak Chronograph", nick:"Blue 41mm", ref:"26240ST",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"Blue", brace:"Integrated SS", size:"41mm",
    status:"current", era:"2021–Present",
    desc:"The 41mm Royal Oak Chronograph. Caliber 4401, in-house flyback. Slim profile despite the complication.",
    pricing:AP_P([38000,48000,62000],[35000,44000,57000],[32000,40000,53000],[29000,37000,49000]),
    cM:AP_CM_STD, eM:AP_EM_RO, src:AP_SRC_MAIN },

  { id:"ro-26240-sil", fid:"ap-ro-chrono41", brand:"Audemars Piguet", family:"Royal Oak Chronograph 41mm",
    name:"Royal Oak Chronograph", nick:"Silver 41mm", ref:"26240ST",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"Silver", brace:"Integrated SS", size:"41mm",
    status:"current", era:"2021–Present",
    desc:"Silver dial Royal Oak Chronograph 41mm.",
    pricing:AP_P([37000,47000,61000],[34000,43000,56000],[31000,39000,52000],[28000,36000,48000]),
    cM:AP_CM_STD, eM:AP_EM_RO, src:AP_SRC_MAIN },

  { id:"ro-26240-grn", fid:"ap-ro-chrono41", brand:"Audemars Piguet", family:"Royal Oak Chronograph 41mm",
    name:"Royal Oak Chronograph", nick:"Green 41mm", ref:"26240ST",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"Green", brace:"Integrated SS", size:"41mm",
    status:"current", era:"2022–Present",
    desc:"Green dial Royal Oak Chronograph — highly desirable, hard to source.",
    pricing:AP_P([50000,65000,85000],[46000,60000,79000],[42000,55000,73000],[38000,51000,67000]),
    cM:{ Unworn:1.18, Mint:1.09, Excellent:1.0, "Very Good":.90, Good:.77, Fair:.62 },
    eM:AP_EM_RO, src:AP_SRC_C24 },

  { id:"ro-26241-yg-cham", fid:"ap-ro-chrono41", brand:"Audemars Piguet", family:"Royal Oak Chronograph 41mm",
    name:"Royal Oak Chronograph", nick:"Yellow Gold 41mm", ref:"26241BA",
    mat:"18k Yellow Gold", bezel:"Integrated YG", dial:"Champagne", brace:"Integrated YG", size:"41mm",
    status:"current", era:"2021–Present",
    desc:"Yellow gold 41mm Royal Oak Chronograph. The apex expression of the sport chronograph.",
    pricing:AP_P([90000,118000,155000],[83000,109000,144000],[76000,101000,134000],[70000,93000,124000]),
    cM:AP_CM_GOLD, eM:AP_EM_RO, src:AP_SRC_C24 },

  { id:"ro-26241-rg-cham", fid:"ap-ro-chrono41", brand:"Audemars Piguet", family:"Royal Oak Chronograph 41mm",
    name:"Royal Oak Chronograph", nick:"Rose Gold 41mm", ref:"26241OR",
    mat:"18k Rose Gold", bezel:"Integrated RG", dial:"Chocolate", brace:"Integrated RG", size:"41mm",
    status:"current", era:"2021–Present",
    desc:"Rose gold Royal Oak Chronograph with chocolate dial.",
    pricing:AP_P([92000,122000,160000],[85000,113000,149000],[78000,105000,138000],[72000,97000,128000]),
    cM:AP_CM_GOLD, eM:AP_EM_RO, src:AP_SRC_C24 },

  // ── ROYAL OAK PERPETUAL CALENDAR ────────────────────────────────────────────
  { id:"ro-26574-blu", fid:"ap-ro-pc", brand:"Audemars Piguet", family:"Royal Oak Perpetual Calendar",
    name:"Royal Oak Perpetual Calendar", nick:"Blue Steel", ref:"26574ST",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"Blue", brace:"Integrated SS", size:"41mm",
    status:"current", era:"2021–Present",
    desc:"Royal Oak Perpetual Calendar in steel — one of the most complex Royal Oaks. Caliber 5134 with full perpetual calendar.",
    pricing:AP_P([75000,95000,125000],[69000,88000,116000],[63000,81000,108000],[58000,75000,100000]),
    cM:AP_CM_STD, eM:AP_EM_RO, src:AP_SRC_C24 },

  { id:"ro-26574-sil", fid:"ap-ro-pc", brand:"Audemars Piguet", family:"Royal Oak Perpetual Calendar",
    name:"Royal Oak Perpetual Calendar", nick:"Silver Steel", ref:"26574ST",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"Silver", brace:"Integrated SS", size:"41mm",
    status:"current", era:"2021–Present",
    desc:"Silver dial steel Royal Oak Perpetual Calendar.",
    pricing:AP_P([73000,93000,122000],[67000,86000,113000],[61000,79000,105000],[56000,73000,97000]),
    cM:AP_CM_STD, eM:AP_EM_RO, src:AP_SRC_C24 },

  { id:"ro-26577-yg", fid:"ap-ro-pc", brand:"Audemars Piguet", family:"Royal Oak Perpetual Calendar",
    name:"Royal Oak Perpetual Calendar", nick:"Yellow Gold Champagne", ref:"26577BA",
    mat:"18k Yellow Gold", bezel:"Integrated YG", dial:"Champagne", brace:"Integrated YG", size:"41mm",
    status:"current", era:"2021–Present",
    desc:"Yellow gold Royal Oak Perpetual Calendar. The pinnacle of AP complication watchmaking in the Royal Oak form.",
    pricing:AP_P([180000,240000,320000],[166000,222000,298000],[152000,206000,278000],[140000,192000,260000]),
    cM:AP_CM_GOLD, eM:AP_EM_RO, src:["Phillips","Christie's","Chrono24"] },

  { id:"ro-26579-rg-ultra", fid:"ap-ro-pc", brand:"Audemars Piguet", family:"Royal Oak Perpetual Calendar",
    name:"Royal Oak Perpetual Calendar Ultra-Thin", nick:"Ultra-Thin Blue", ref:"26579ST",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"Blue", brace:"Integrated SS", size:"41mm",
    status:"current", era:"2018–Present",
    desc:"Ultra-thin perpetual calendar — Caliber 5133, 2.89mm movement. An astonishing technical achievement.",
    pricing:AP_P([95000,125000,165000],[88000,116000,153000],[81000,107000,142000],[75000,99000,132000]),
    cM:AP_CM_STD, eM:AP_EM_RO, src:["Chrono24","Phillips"] },

  // ── ROYAL OAK TOURBILLON ────────────────────────────────────────────────────
  { id:"ro-26522-tourbillon", fid:"ap-ro-tourbillon", brand:"Audemars Piguet", family:"Royal Oak Tourbillon",
    name:"Royal Oak Tourbillon Extra-Thin", nick:"Tourbillon Steel Blue", ref:"26522ST",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"Blue", brace:"Integrated SS", size:"41mm",
    status:"current", era:"2021–Present",
    desc:"Royal Oak Tourbillon Extra-Thin in steel. Caliber 2924, 6.8mm thick movement with flying tourbillon at 6 o'clock.",
    pricing:AP_P([180000,240000,320000],[166000,222000,298000],[152000,206000,278000],[140000,192000,260000]),
    cM:AP_CM_RARE, eM:AP_EM_RO, src:["Phillips","Christie's","Chrono24"] },

  { id:"ro-26516-tourbillon-yg", fid:"ap-ro-tourbillon", brand:"Audemars Piguet", family:"Royal Oak Tourbillon",
    name:"Royal Oak Tourbillon Extra-Thin", nick:"Tourbillon Yellow Gold", ref:"26516BA",
    mat:"18k Yellow Gold", bezel:"Integrated YG", dial:"Champagne", brace:"Integrated YG", size:"41mm",
    status:"current", era:"2021–Present",
    desc:"Yellow gold Royal Oak Tourbillon. Among the most exclusive and expensive Royal Oaks in production.",
    pricing:AP_P([320000,420000,580000],[296000,390000,540000],[274000,362000,502000],[254000,336000,466000]),
    cM:AP_CM_RARE, eM:AP_EM_RO, src:["Phillips","Christie's"] },

  // ── ROYAL OAK CONCEPT ───────────────────────────────────────────────────────
  { id:"ro-26630-concept-black", fid:"ap-ro-concept", brand:"Audemars Piguet", family:"Royal Oak Concept",
    name:"Royal Oak Concept", nick:"Frosted Gold", ref:"26630BC",
    mat:"18k White Gold Frosted", bezel:"Frosted WG", dial:"Black Skeleton", brace:"Rubber", size:"44mm",
    status:"limited", era:"2021–Present",
    desc:"Royal Oak Concept with Charlotte Chesnais frosted gold finish. Skeletonized flying tourbillon. Avant-garde luxury.",
    pricing:AP_P([280000,380000,520000],[258000,352000,482000],[238000,326000,446000],[220000,302000,412000]),
    cM:AP_CM_RARE, eM:AP_EM_STD, src:["Phillips","Christie's"] },

  { id:"ro-26620-concept-ti", fid:"ap-ro-concept", brand:"Audemars Piguet", family:"Royal Oak Concept",
    name:"Royal Oak Concept", nick:"Titanium Black", ref:"26620IO",
    mat:"Titanium & Ceramic", bezel:"Ceramic", dial:"Black Skeleton", brace:"Rubber", size:"44mm",
    status:"current", era:"2022–Present",
    desc:"Titanium and ceramic Royal Oak Concept with skeletonized movement. Cutting-edge haute horlogerie.",
    pricing:AP_P([220000,295000,400000],[203000,273000,370000],[188000,253000,342000],[174000,235000,316000]),
    cM:AP_CM_RARE, eM:AP_EM_STD, src:["Phillips","Christie's","Chrono24"] },

  // ── CODE 11.59 ──────────────────────────────────────────────────────────────
  { id:"c1159-15210-blu", fid:"ap-code1159", brand:"Audemars Piguet", family:"Code 11.59",
    name:"Code 11.59", nick:"Automatic Blue", ref:"15210ST",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"Blue", brace:"Integrated SS", size:"41mm",
    status:"current", era:"2019–Present",
    desc:"AP's modern round case collection. In-house caliber 4302. The Code 11.59 is a polarizing design that has found a strong secondary market.",
    pricing:AP_P([18000,23000,30000],[16500,21000,27500],[15000,19200,25000],[13800,17800,23000]),
    cM:AP_CM_STD, eM:AP_EM_STD, src:AP_SRC_MAIN },

  { id:"c1159-15210-sil", fid:"ap-code1159", brand:"Audemars Piguet", family:"Code 11.59",
    name:"Code 11.59", nick:"Automatic Silver", ref:"15210ST",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"Silver", brace:"Integrated SS", size:"41mm",
    status:"current", era:"2019–Present",
    desc:"Silver dial Code 11.59 in steel.",
    pricing:AP_P([17500,22500,29500],[16000,20500,27000],[14500,18700,24500],[13300,17300,22500]),
    cM:AP_CM_STD, eM:AP_EM_STD, src:AP_SRC_MAIN },

  { id:"c1159-15210-blk", fid:"ap-code1159", brand:"Audemars Piguet", family:"Code 11.59",
    name:"Code 11.59", nick:"Automatic Black", ref:"15210ST",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"Black", brace:"Integrated SS", size:"41mm",
    status:"current", era:"2019–Present",
    desc:"Black dial Code 11.59. Bold and stealthy.",
    pricing:AP_P([17500,22500,29500],[16000,20500,27000],[14500,18700,24500],[13300,17300,22500]),
    cM:AP_CM_STD, eM:AP_EM_STD, src:AP_SRC_MAIN },

  { id:"c1159-15510-chrono-blu", fid:"ap-code1159", brand:"Audemars Piguet", family:"Code 11.59",
    name:"Code 11.59 Chronograph", nick:"Chrono Blue", ref:"26393ST",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"Blue", brace:"Integrated SS", size:"41mm",
    status:"current", era:"2019–Present",
    desc:"Code 11.59 Chronograph in steel — in-house flyback Caliber 4401.",
    pricing:AP_P([28000,36000,47000],[25500,33000,43000],[23000,30000,39500],[21000,27500,36500]),
    cM:AP_CM_STD, eM:AP_EM_STD, src:AP_SRC_C24 },

  { id:"c1159-15510-pc-blu", fid:"ap-code1159", brand:"Audemars Piguet", family:"Code 11.59",
    name:"Code 11.59 Perpetual Calendar", nick:"Perpetual Calendar Blue", ref:"26394ST",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"Blue", brace:"Integrated SS", size:"41mm",
    status:"current", era:"2019–Present",
    desc:"Code 11.59 Perpetual Calendar — maximum complication in the modern AP round case.",
    pricing:AP_P([55000,72000,95000],[51000,67000,88000],[47000,62000,82000],[43000,57000,76000]),
    cM:AP_CM_STD, eM:AP_EM_STD, src:AP_SRC_C24 },

  { id:"c1159-yg-skel", fid:"ap-code1159", brand:"Audemars Piguet", family:"Code 11.59",
    name:"Code 11.59 Tourbillon", nick:"Skeleton Yellow Gold", ref:"26396BA",
    mat:"18k Yellow Gold", bezel:"Integrated YG", dial:"Skeleton", brace:"Integrated YG", size:"41mm",
    status:"current", era:"2019–Present",
    desc:"Yellow gold skeletonized tourbillon Code 11.59. The pinnacle of the collection.",
    pricing:AP_P([320000,420000,560000],[296000,390000,520000],[274000,362000,484000],[254000,336000,450000]),
    cM:AP_CM_RARE, eM:AP_EM_STD, src:["Phillips","Christie's"] },

  // ── MILLENARY ───────────────────────────────────────────────────────────────
  { id:"mill-77303-rg", fid:"ap-millenary", brand:"Audemars Piguet", family:"Millenary",
    name:"Millenary", nick:"Rose Gold Skeleton", ref:"77303OR",
    mat:"18k Rose Gold", bezel:"Rose Gold", dial:"Skeleton", brace:"Leather", size:"39.5mm",
    status:"current", era:"2018–Present",
    desc:"Oval case Millenary with off-centre skeleton dial. Caliber 5201 with balance wheel at 12 o'clock. Feminine and technically impressive.",
    pricing:AP_P([45000,58000,76000],[41000,54000,71000],[37000,50000,66000],[34000,46000,61000]),
    cM:AP_CM_GOLD, eM:AP_EM_STD, src:AP_SRC_C24 },

  { id:"mill-15350-rg", fid:"ap-millenary", brand:"Audemars Piguet", family:"Millenary",
    name:"Millenary", nick:"Rose Gold Men's", ref:"15350OR",
    mat:"18k Rose Gold", bezel:"Rose Gold", dial:"Champagne", brace:"Leather", size:"47mm",
    status:"discontinued", era:"2015–2022",
    desc:"Men's Millenary 47mm in rose gold. Distinctive oval case and off-centre dial.",
    pricing:AP_P([35000,46000,62000],[32000,42000,57000],[29000,39000,53000],[26000,36000,49000]),
    cM:AP_CM_GOLD, eM:AP_EM_STD, src:AP_SRC_C24 },

  // ── ROYAL OAK SELFWINDING (DISCONTINUED KEY REFS) ───────────────────────────
  { id:"ro-15300-blu", fid:"ap-ro-disc", brand:"Audemars Piguet", family:"Royal Oak Classic (Discontinued)",
    name:"Royal Oak", nick:"15300 Blue", ref:"15300ST",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"Blue", brace:"Integrated SS", size:"39mm",
    status:"discontinued", era:"2005–2019",
    desc:"The 15300 — the 39mm Royal Oak that bridged the gap before the 15500. Much loved, now discontinued.",
    pricing:AP_P([22000,28000,37000],[20000,25500,34000],[18000,23000,31000],[16500,21000,28500]),
    cM:AP_CM_STD, eM:AP_EM_RO, src:AP_SRC_C24 },

  { id:"ro-15400-blu", fid:"ap-ro-disc", brand:"Audemars Piguet", family:"Royal Oak Classic (Discontinued)",
    name:"Royal Oak", nick:"15400 Blue 41mm", ref:"15400ST",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"Blue", brace:"Integrated SS", size:"41mm",
    status:"discontinued", era:"2012–2019",
    desc:"The 15400 — the first 41mm Royal Oak selfwinding. Predecessor to the 15500.",
    pricing:AP_P([25000,32000,42000],[23000,29500,39000],[21000,27000,36000],[19000,25000,33000]),
    cM:AP_CM_STD, eM:AP_EM_RO, src:AP_SRC_C24 },

  { id:"ro-15400-sil", fid:"ap-ro-disc", brand:"Audemars Piguet", family:"Royal Oak Classic (Discontinued)",
    name:"Royal Oak", nick:"15400 Silver 41mm", ref:"15400ST",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"Silver", brace:"Integrated SS", size:"41mm",
    status:"discontinued", era:"2012–2019",
    desc:"Silver dial 15400. A well-loved generation of the Royal Oak.",
    pricing:AP_P([24000,31000,41000],[22000,28500,38000],[20000,26000,35000],[18000,24000,32000]),
    cM:AP_CM_STD, eM:AP_EM_RO, src:AP_SRC_C24 },

];

// ── FAMILY INDEX ──────────────────────────────────────────────────────────────
window.AP_FAMILIES = {};
window.AP_WATCHES.forEach(w => {
  if (!window.AP_FAMILIES[w.fid]) {
    window.AP_FAMILIES[w.fid] = { fid: w.fid, family: w.family, brand: w.brand, ids: [] };
  }
  window.AP_FAMILIES[w.fid].ids.push(w.id);
});

console.log(`✅ AP catalog loaded: ${window.AP_WATCHES.length} configurations across ${Object.keys(window.AP_FAMILIES).length} families`);

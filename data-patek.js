// ============================================================
// THE WATCH GALLERY — PATEK PHILIPPE CATALOG
// Pricing: Chrono24, WatchCharts, WatchGuys, Ermitage Apr 2026
// Status: "current" | "discontinued" | "vintage" | "limited"
// ============================================================

const PP_P = (fs, fp, fb, wo) => ({
  "Full Set":        { low: fs[0], avg: fs[1], high: fs[2] },
  "Watch + Papers":  { low: fp[0], avg: fp[1], high: fp[2] },
  "Watch + Box":     { low: fb[0], avg: fb[1], high: fb[2] },
  "Watch Only":      { low: wo[0], avg: wo[1], high: wo[2] }
});

const PP_CM_STD  = { Unworn:1.12, Mint:1.06, Excellent:1.00, "Very Good":.91, Good:.79, Fair:.64 };
const PP_CM_GOLD = { Unworn:1.09, Mint:1.04, Excellent:1.00, "Very Good":.92, Good:.81, Fair:.66 };
const PP_CM_RARE = { Unworn:1.25, Mint:1.12, Excellent:1.00, "Very Good":.87, Good:.73, Fair:.55 };
const PP_CM_VTG  = { Unworn:1.35, Mint:1.18, Excellent:1.00, "Very Good":.82, Good:.65, Fair:.45 };

const PP_EM_NAUT  = { "Pre-1960":2.0, "1960s":2.0, "1970s":2.5, "1980s":1.8, "1990s":1.3, "2000s":1.1, "2010s":.95, "2020s":1.0 };
const PP_EM_CAL   = { "Pre-1960":2.5, "1960s":2.0, "1970s":1.5, "1980s":1.2, "1990s":1.0, "2000s":.92, "2010s":.90, "2020s":1.0 };
const PP_EM_COMP  = { "Pre-1960":3.0, "1960s":2.5, "1970s":1.8, "1980s":1.4, "1990s":1.1, "2000s":1.0, "2010s":.95, "2020s":1.0 };
const PP_EM_STD   = { "Pre-1960":1.5, "1960s":1.3, "1970s":1.1, "1980s":1.0, "1990s":.90, "2000s":.85, "2010s":.88, "2020s":1.0 };

const PP_SRC_MAIN = ["Chrono24","WatchGuys","Ermitage 2026"];
const PP_SRC_C24  = ["Chrono24","WatchCharts"];
const PP_SRC_VTG  = ["Phillips","Christie's","Sotheby's"];
const PP_SRC_TOP  = ["Phillips","Christie's","Sotheby's","Chrono24"];

window.PP_WATCHES = [

  // ── NAUTILUS 5711 (DISCONTINUED) ────────────────────────────────────────────
  { id:"naut-5711-blu", fid:"pp-nautilus", brand:"Patek Philippe", family:"Nautilus 5711",
    name:"Nautilus", nick:"5711 Blue", ref:"5711/1A-010",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"Blue", brace:"Integrated SS", size:"40mm",
    status:"discontinued", era:"2006–2021",
    desc:"The most important discontinued watch of the modern era. Discontinued January 2021. Caused a global frenzy — retail was ~$35K, immediately traded at $150K+. The blue dial is the definitive Nautilus.",
    pricing:PP_P([130000,165000,220000],[120000,152000,203000],[110000,140000,188000],[100000,130000,174000]),
    cM:{ Unworn:1.30, Mint:1.15, Excellent:1.0, "Very Good":.88, Good:.75, Fair:.60 },
    eM:PP_EM_NAUT, src:PP_SRC_TOP },

  { id:"naut-5711-olive", fid:"pp-nautilus", brand:"Patek Philippe", family:"Nautilus 5711",
    name:"Nautilus", nick:"5711 Olive Green", ref:"5711/1A-014",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"Olive Green", brace:"Integrated SS", size:"40mm",
    status:"discontinued", era:"2021",
    desc:"The final 5711 — olive green dial released as a farewell edition. Produced in extremely limited numbers for 2021 only. Immediately traded at $300K+. The most valuable standard steel sports watch ever made.",
    pricing:PP_P([280000,360000,500000],[260000,335000,465000],[240000,312000,432000],[220000,290000,400000]),
    cM:{ Unworn:1.40, Mint:1.20, Excellent:1.0, "Very Good":.85, Good:.70, Fair:.55 },
    eM:PP_EM_NAUT, src:PP_SRC_TOP },

  { id:"naut-5711-white", fid:"pp-nautilus", brand:"Patek Philippe", family:"Nautilus 5711",
    name:"Nautilus", nick:"5711 White Dial", ref:"5711/1A-011",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"White", brace:"Integrated SS", size:"40mm",
    status:"discontinued", era:"2009–2021",
    desc:"White dial 5711 — produced in smaller numbers than blue, commands significant premium.",
    pricing:PP_P([155000,200000,270000],[143000,185000,250000],[132000,172000,232000],[122000,160000,215000]),
    cM:{ Unworn:1.28, Mint:1.13, Excellent:1.0, "Very Good":.88, Good:.74, Fair:.60 },
    eM:PP_EM_NAUT, src:PP_SRC_TOP },

  { id:"naut-5711-tiffany", fid:"pp-nautilus", brand:"Patek Philippe", family:"Nautilus 5711",
    name:"Nautilus", nick:"5711 Tiffany Blue", ref:"5711/1A-018",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"Tiffany Blue", brace:"Integrated SS", size:"40mm",
    status:"limited", era:"2021",
    desc:"The Tiffany & Co. 170th anniversary collaboration — 170 pieces. Sold at Phillips for $6.5M. The most valuable wristwatch ever sold at auction at time of sale. Unicorn.",
    pricing:PP_P([5000000,7000000,12000000],[0,0,0],[0,0,0],[4000000,6000000,10000000]),
    cM:PP_CM_RARE, eM:PP_EM_NAUT, src:["Phillips","Christie's"] },

  { id:"naut-5711-yg", fid:"pp-nautilus", brand:"Patek Philippe", family:"Nautilus 5711",
    name:"Nautilus", nick:"5711 Yellow Gold", ref:"5711/1R-001",
    mat:"18k Rose Gold", bezel:"Integrated RG", dial:"Brown", brace:"Integrated RG", size:"40mm",
    status:"discontinued", era:"2006–2021",
    desc:"Rose gold 5711 with brown dial. Discontinued alongside steel. Rare and commanding premium.",
    pricing:PP_P([85000,115000,160000],[78000,106000,148000],[72000,98000,137000],[67000,91000,127000]),
    cM:PP_CM_GOLD, eM:PP_EM_NAUT, src:PP_SRC_TOP },

  // ── NAUTILUS 5726 ANNUAL CALENDAR ───────────────────────────────────────────
  { id:"naut-5726-blu", fid:"pp-naut5726", brand:"Patek Philippe", family:"Nautilus 5726",
    name:"Nautilus Annual Calendar", nick:"5726 Blue", ref:"5726/1A-014",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"Blue", brace:"Integrated SS", size:"40.5mm",
    status:"discontinued", era:"2011–2021",
    desc:"Annual calendar Nautilus in steel — discontinued 2021 alongside the 5711. Combines Patek's annual calendar with the iconic Nautilus form.",
    pricing:PP_P([75000,100000,140000],[69000,93000,130000],[63000,86000,121000],[58000,80000,113000]),
    cM:{ Unworn:1.22, Mint:1.11, Excellent:1.0, "Very Good":.88, Good:.74, Fair:.58 },
    eM:PP_EM_NAUT, src:PP_SRC_TOP },

  { id:"naut-5726-wht", fid:"pp-naut5726", brand:"Patek Philippe", family:"Nautilus 5726",
    name:"Nautilus Annual Calendar", nick:"5726 White/Blue Moon", ref:"5726/1A-010",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"Silver/Blue Moon", brace:"Integrated SS", size:"40.5mm",
    status:"discontinued", era:"2006–2021",
    desc:"The 5726A with moonphase and annual calendar. Extremely rare in steel. Discontinued 2021.",
    pricing:PP_P([80000,108000,150000],[74000,100000,139000],[68000,93000,129000],[63000,87000,120000]),
    cM:{ Unworn:1.22, Mint:1.11, Excellent:1.0, "Very Good":.88, Good:.74, Fair:.58 },
    eM:PP_EM_NAUT, src:PP_SRC_TOP },

  { id:"naut-5726-rg", fid:"pp-naut5726", brand:"Patek Philippe", family:"Nautilus 5726",
    name:"Nautilus Annual Calendar", nick:"5726 Rose Gold", ref:"5726/1R-014",
    mat:"18k Rose Gold", bezel:"Integrated RG", dial:"Chocolate", brace:"Integrated RG", size:"40.5mm",
    status:"discontinued", era:"2011–2021",
    desc:"Rose gold annual calendar Nautilus with chocolate dial. Discontinued and highly sought.",
    pricing:PP_P([95000,130000,180000],[88000,121000,167000],[81000,113000,155000],[75000,105000,144000]),
    cM:PP_CM_GOLD, eM:PP_EM_NAUT, src:PP_SRC_TOP },

  // ── NAUTILUS 5811 (CURRENT) ──────────────────────────────────────────────────
  { id:"naut-5811-blu", fid:"pp-naut5811", brand:"Patek Philippe", family:"Nautilus 5811",
    name:"Nautilus", nick:"5811 Blue", ref:"5811/1G-001",
    mat:"18k White Gold", bezel:"Integrated WG", dial:"Blue", brace:"Integrated WG", size:"41mm",
    status:"current", era:"2021–Present",
    desc:"The successor to the 5711 — white gold body with new horizontal embossed dial. Launched 2021. The current flagship Nautilus. Retail ~$65K, trades at significant premium.",
    pricing:PP_P([140000,185000,250000],[129000,171000,231000],[119000,158000,214000],[110000,147000,199000]),
    cM:{ Unworn:1.25, Mint:1.12, Excellent:1.0, "Very Good":.88, Good:.74, Fair:.58 },
    eM:PP_EM_NAUT, src:PP_SRC_TOP },

  { id:"naut-5811-grn", fid:"pp-naut5811", brand:"Patek Philippe", family:"Nautilus 5811",
    name:"Nautilus", nick:"5811 Green", ref:"5811/1G-001",
    mat:"18k White Gold", bezel:"Integrated WG", dial:"Green", brace:"Integrated WG", size:"41mm",
    status:"limited", era:"2022",
    desc:"Green dial 5811 — one of the most sought-after current Patek configurations. Boutique limited release.",
    pricing:PP_P([200000,270000,380000],[185000,250000,352000],[171000,232000,326000],[158000,216000,302000]),
    cM:PP_CM_RARE, eM:PP_EM_NAUT, src:PP_SRC_TOP },

  // ── NAUTILUS 5980 CHRONOGRAPH ────────────────────────────────────────────────
  { id:"naut-5980-blu", fid:"pp-naut5980", brand:"Patek Philippe", family:"Nautilus 5980 Chronograph",
    name:"Nautilus Chronograph", nick:"5980 Blue", ref:"5980/1A-001",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"Blue", brace:"Integrated SS", size:"40.5mm",
    status:"discontinued", era:"2006–2021",
    desc:"Nautilus Chronograph in steel — discontinued 2021. The most complicated Nautilus in a sport package. Extremely rare.",
    pricing:PP_P([130000,175000,240000],[120000,162000,222000],[111000,150000,206000],[103000,140000,192000]),
    cM:{ Unworn:1.25, Mint:1.12, Excellent:1.0, "Very Good":.87, Good:.73, Fair:.57 },
    eM:PP_EM_NAUT, src:PP_SRC_TOP },

  { id:"naut-5980-wht", fid:"pp-naut5980", brand:"Patek Philippe", family:"Nautilus 5980 Chronograph",
    name:"Nautilus Chronograph", nick:"5980 White", ref:"5980/1A-014",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"White", brace:"Integrated SS", size:"40.5mm",
    status:"discontinued", era:"2014–2021",
    desc:"White dial Nautilus Chronograph — produced in very limited numbers. Extraordinary rarity.",
    pricing:PP_P([160000,215000,295000],[148000,199000,273000],[137000,185000,253000],[127000,172000,235000]),
    cM:PP_CM_RARE, eM:PP_EM_NAUT, src:PP_SRC_TOP },

  { id:"naut-5980-rg", fid:"pp-naut5980", brand:"Patek Philippe", family:"Nautilus 5980 Chronograph",
    name:"Nautilus Chronograph", nick:"5980 Rose Gold", ref:"5980/1R-001",
    mat:"18k Rose Gold", bezel:"Integrated RG", dial:"Brown", brace:"Integrated RG", size:"40.5mm",
    status:"discontinued", era:"2008–2021",
    desc:"Rose gold Nautilus Chronograph. Discontinued 2021. Museum-quality rarity.",
    pricing:PP_P([175000,235000,320000],[162000,218000,297000],[150000,203000,276000],[140000,189000,257000]),
    cM:PP_CM_RARE, eM:PP_EM_NAUT, src:PP_SRC_TOP },

  // ── NAUTILUS 5990 TRAVEL TIME CHRONOGRAPH ───────────────────────────────────
  { id:"naut-5990-blu", fid:"pp-naut5990", brand:"Patek Philippe", family:"Nautilus 5990 Travel Time",
    name:"Nautilus Travel Time Chronograph", nick:"5990 Blue", ref:"5990/1A-001",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"Blue", brace:"Integrated SS", size:"40.5mm",
    status:"discontinued", era:"2014–2021",
    desc:"Nautilus Travel Time Chronograph — dual time zone and chronograph in Nautilus form. Discontinued 2021.",
    pricing:PP_P([110000,150000,205000],[102000,139000,190000],[94000,129000,177000],[87000,120000,165000]),
    cM:{ Unworn:1.22, Mint:1.11, Excellent:1.0, "Very Good":.87, Good:.73, Fair:.57 },
    eM:PP_EM_NAUT, src:PP_SRC_TOP },

  // ── NAUTILUS 7118 LADIES ─────────────────────────────────────────────────────
  { id:"naut-7118-blu", fid:"pp-naut7118", brand:"Patek Philippe", family:"Nautilus 7118 Ladies",
    name:"Nautilus Ladies", nick:"7118 Blue", ref:"7118/1A-001",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"Blue", brace:"Integrated SS", size:"35mm",
    status:"discontinued", era:"2018–2021",
    desc:"Ladies 35mm Nautilus in steel — discontinued 2021 alongside 5711. Commands extraordinary premium.",
    pricing:PP_P([75000,100000,140000],[69000,93000,130000],[63000,86000,121000],[58000,80000,113000]),
    cM:{ Unworn:1.25, Mint:1.12, Excellent:1.0, "Very Good":.87, Good:.73, Fair:.57 },
    eM:PP_EM_NAUT, src:PP_SRC_TOP },

  { id:"naut-7118-olive", fid:"pp-naut7118", brand:"Patek Philippe", family:"Nautilus 7118 Ladies",
    name:"Nautilus Ladies", nick:"7118 Olive Green", ref:"7118/1A-014",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"Olive Green", brace:"Integrated SS", size:"35mm",
    status:"discontinued", era:"2021",
    desc:"Olive green ladies 7118 — released as a farewell alongside the 5711 olive. Exceptionally rare.",
    pricing:PP_P([130000,175000,240000],[120000,162000,222000],[111000,150000,206000],[103000,140000,192000]),
    cM:PP_CM_RARE, eM:PP_EM_NAUT, src:PP_SRC_TOP },

  { id:"naut-7118-rg-pink", fid:"pp-naut7118", brand:"Patek Philippe", family:"Nautilus 7118 Ladies",
    name:"Nautilus Ladies", nick:"7118 Rose Gold Pink", ref:"7118/1R-010",
    mat:"18k Rose Gold", bezel:"Integrated RG", dial:"Pink", brace:"Integrated RG", size:"35mm",
    status:"current", era:"2018–Present",
    desc:"Rose gold ladies Nautilus with pink dial — currently produced. The only steel-equivalent Nautilus still in production for ladies.",
    pricing:PP_P([52000,68000,90000],[48000,63000,84000],[44000,58000,78000],[40000,54000,72000]),
    cM:PP_CM_GOLD, eM:PP_EM_NAUT, src:PP_SRC_C24 },

  { id:"naut-7118-wg-dia", fid:"pp-naut7118", brand:"Patek Philippe", family:"Nautilus 7118 Ladies",
    name:"Nautilus Ladies", nick:"7118 White Gold Diamond", ref:"7118/1200G-010",
    mat:"18k White Gold", bezel:"Diamond-Set", dial:"Blue Diamond", brace:"Integrated WG", size:"35mm",
    status:"current", era:"2022–Present",
    desc:"Diamond-set ladies Nautilus in white gold. Factory diamond bezel and dial.",
    pricing:PP_P([95000,130000,180000],[88000,121000,167000],[81000,113000,155000],[75000,105000,144000]),
    cM:PP_CM_GOLD, eM:PP_EM_NAUT, src:PP_SRC_C24 },

  // ── AQUANAUT 5167 ────────────────────────────────────────────────────────────
  { id:"aq-5167-blk", fid:"pp-aquanaut", brand:"Patek Philippe", family:"Aquanaut 5167",
    name:"Aquanaut", nick:"5167 Black", ref:"5167A-001",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"Black", brace:"Rubber Composite", size:"40mm",
    status:"current", era:"2010–Present",
    desc:"The sportier, more casual Patek. Black embossed dial, rubber composite bracelet. Caliber 324 S C. Trades well above retail.",
    pricing:PP_P([32000,42000,57000],[29000,39000,53000],[26000,36000,49000],[24000,33000,45000]),
    cM:PP_CM_STD, eM:PP_EM_NAUT, src:PP_SRC_MAIN },

  { id:"aq-5167-kha", fid:"pp-aquanaut", brand:"Patek Philippe", family:"Aquanaut 5167",
    name:"Aquanaut", nick:"5167 Khaki", ref:"5167A-002",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"Khaki Green", brace:"Rubber Composite", size:"40mm",
    status:"current", era:"2010–Present",
    desc:"Khaki green dial Aquanaut — uniquely casual and outdoorsy for Patek. Commands premium over black.",
    pricing:PP_P([38000,50000,68000],[35000,46000,63000],[32000,43000,58000],[29000,40000,54000]),
    cM:PP_CM_STD, eM:PP_EM_NAUT, src:PP_SRC_MAIN },

  { id:"aq-5168-grn", fid:"pp-aquanaut", brand:"Patek Philippe", family:"Aquanaut 5167",
    name:"Aquanaut", nick:"5168 Green", ref:"5168G-010",
    mat:"18k White Gold", bezel:"Integrated WG", dial:"Green", brace:"Rubber Composite", size:"42mm",
    status:"discontinued", era:"2019–2022",
    desc:"Green dial Aquanaut 5168 in white gold — discontinued 2022. One of the most sought-after Aquanaut configurations.",
    pricing:PP_P([95000,130000,180000],[88000,121000,167000],[81000,113000,155000],[75000,105000,144000]),
    cM:PP_CM_RARE, eM:PP_EM_NAUT, src:PP_SRC_TOP },

  { id:"aq-5164-tt", fid:"pp-aquanaut", brand:"Patek Philippe", family:"Aquanaut 5167",
    name:"Aquanaut Travel Time", nick:"5164 Travel Time", ref:"5164A-001",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"Black", brace:"Rubber Composite", size:"40.8mm",
    status:"discontinued", era:"2014–2021",
    desc:"Aquanaut Travel Time — dual time zone with day/night indicators. Discontinued.",
    pricing:PP_P([45000,60000,80000],[41000,55000,74000],[38000,51000,69000],[35000,47000,64000]),
    cM:PP_CM_STD, eM:PP_EM_NAUT, src:PP_SRC_C24 },

  // ── CALATRAVA ────────────────────────────────────────────────────────────────
  { id:"cal-6119-wg", fid:"pp-calatrava", brand:"Patek Philippe", family:"Calatrava",
    name:"Calatrava", nick:"6119 White Gold", ref:"6119G-010",
    mat:"18k White Gold", bezel:"White Gold", dial:"White", brace:"Leather", size:"39mm",
    status:"current", era:"2019–Present",
    desc:"The modern Calatrava — Patek's purist dress watch. Caliber 30-255. Slim, elegant, timeless.",
    pricing:PP_P([28000,36000,48000],[25500,33000,44000],[23000,30000,40000],[21000,27500,37000]),
    cM:PP_CM_GOLD, eM:PP_EM_STD, src:PP_SRC_C24 },

  { id:"cal-6119-yg", fid:"pp-calatrava", brand:"Patek Philippe", family:"Calatrava",
    name:"Calatrava", nick:"6119 Yellow Gold", ref:"6119J-010",
    mat:"18k Yellow Gold", bezel:"Yellow Gold", dial:"Cream", brace:"Leather", size:"39mm",
    status:"current", era:"2019–Present",
    desc:"Yellow gold Calatrava with cream dial. Classic warm Patek elegance.",
    pricing:PP_P([32000,42000,56000],[29000,38000,51000],[26000,35000,47000],[24000,32000,43000]),
    cM:PP_CM_GOLD, eM:PP_EM_STD, src:PP_SRC_C24 },

  { id:"cal-6119-rg", fid:"pp-calatrava", brand:"Patek Philippe", family:"Calatrava",
    name:"Calatrava", nick:"6119 Rose Gold", ref:"6119R-010",
    mat:"18k Rose Gold", bezel:"Rose Gold", dial:"Brown", brace:"Leather", size:"39mm",
    status:"current", era:"2019–Present",
    desc:"Rose gold Calatrava with brown dial. Warm and modern.",
    pricing:PP_P([33000,43000,58000],[30000,39000,53000],[27000,36000,49000],[25000,33000,45000]),
    cM:PP_CM_GOLD, eM:PP_EM_STD, src:PP_SRC_C24 },

  { id:"cal-96-vintage", fid:"pp-calatrava", brand:"Patek Philippe", family:"Calatrava",
    name:"Calatrava", nick:"Ref. 96 — First Calatrava", ref:"96",
    mat:"18k Yellow Gold", bezel:"Yellow Gold", dial:"Champagne", brace:"Leather", size:"31mm",
    status:"vintage", era:"1932–1970",
    desc:"The original 1932 Calatrava — the watch that defined Patek Philippe's identity. The most important dress watch in horological history.",
    pricing:PP_P([30000,65000,200000],[0,0,0],[0,0,0],[22000,50000,160000]),
    cM:PP_CM_VTG, eM:{ "Pre-1960":1.6,"1960s":1.3,"1970s":1.1,"1980s":1.0,"1990s":1.0,"2000s":1.0,"2010s":1.0,"2020s":1.0 },
    src:PP_SRC_VTG },

  // ── ANNUAL CALENDAR 5396 / 5205 ─────────────────────────────────────────────
  { id:"ac-5396-wg", fid:"pp-annual", brand:"Patek Philippe", family:"Annual Calendar",
    name:"Annual Calendar", nick:"5396 White Gold", ref:"5396G-010",
    mat:"18k White Gold", bezel:"White Gold", dial:"Silver", brace:"Leather", size:"38.5mm",
    status:"current", era:"2006–Present",
    desc:"The dress annual calendar — Patek's own complication requiring only one date correction per year. Caliber 324 S QA LU 24H. The reference for annual calendars.",
    pricing:PP_P([52000,68000,90000],[48000,63000,84000],[44000,58000,78000],[40000,54000,72000]),
    cM:PP_CM_GOLD, eM:PP_EM_CAL, src:PP_SRC_C24 },

  { id:"ac-5396-yg", fid:"pp-annual", brand:"Patek Philippe", family:"Annual Calendar",
    name:"Annual Calendar", nick:"5396 Yellow Gold", ref:"5396J-010",
    mat:"18k Yellow Gold", bezel:"Yellow Gold", dial:"Cream", brace:"Leather", size:"38.5mm",
    status:"current", era:"2006–Present",
    desc:"Yellow gold annual calendar — classic and warm. One of Patek's most elegant complications.",
    pricing:PP_P([55000,72000,95000],[51000,67000,88000],[47000,62000,82000],[43000,57000,76000]),
    cM:PP_CM_GOLD, eM:PP_EM_CAL, src:PP_SRC_C24 },

  { id:"ac-5205-wg", fid:"pp-annual", brand:"Patek Philippe", family:"Annual Calendar",
    name:"Annual Calendar", nick:"5205 White Gold Moon", ref:"5205G-010",
    mat:"18k White Gold", bezel:"White Gold", dial:"Silver/Blue Moon", brace:"Leather", size:"40mm",
    status:"current", era:"2010–Present",
    desc:"Annual calendar with moonphase display. More contemporary case than the 5396.",
    pricing:PP_P([60000,78000,103000],[55000,72000,96000],[51000,67000,89000],[47000,62000,83000]),
    cM:PP_CM_GOLD, eM:PP_EM_CAL, src:PP_SRC_C24 },

  // ── PERPETUAL CALENDAR 5140 / 5327 ──────────────────────────────────────────
  { id:"pc-5140-wg", fid:"pp-perpetual", brand:"Patek Philippe", family:"Perpetual Calendar",
    name:"Perpetual Calendar", nick:"5140 White Gold", ref:"5140G-010",
    mat:"18k White Gold", bezel:"White Gold", dial:"Silver", brace:"Leather", size:"37.2mm",
    status:"discontinued", era:"2000–2021",
    desc:"The classic perpetual calendar in white gold. Discontinued 2021. Caliber 240 Q.",
    pricing:PP_P([65000,88000,120000],[60000,82000,111000],[55000,76000,103000],[51000,70000,96000]),
    cM:PP_CM_GOLD, eM:PP_EM_CAL, src:PP_SRC_C24 },

  { id:"pc-5327-wg", fid:"pp-perpetual", brand:"Patek Philippe", family:"Perpetual Calendar",
    name:"Perpetual Calendar", nick:"5327 White Gold", ref:"5327G-001",
    mat:"18k White Gold", bezel:"White Gold", dial:"Silver", brace:"Leather", size:"38mm",
    status:"current", era:"2012–Present",
    desc:"Current perpetual calendar with clous-de-Paris guilloché dial. Caliber 324 S Q.",
    pricing:PP_P([75000,100000,135000],[69000,93000,125000],[64000,86000,116000],[59000,80000,108000]),
    cM:PP_CM_GOLD, eM:PP_EM_CAL, src:PP_SRC_C24 },

  { id:"pc-5327-yg", fid:"pp-perpetual", brand:"Patek Philippe", family:"Perpetual Calendar",
    name:"Perpetual Calendar", nick:"5327 Yellow Gold", ref:"5327J-001",
    mat:"18k Yellow Gold", bezel:"Yellow Gold", dial:"Cream", brace:"Leather", size:"38mm",
    status:"current", era:"2012–Present",
    desc:"Yellow gold perpetual calendar — warm, classic, and deeply distinguished.",
    pricing:PP_P([80000,106000,143000],[74000,98000,133000],[68000,91000,123000],[63000,85000,114000]),
    cM:PP_CM_GOLD, eM:PP_EM_CAL, src:PP_SRC_C24 },

  { id:"pc-5327-rg", fid:"pp-perpetual", brand:"Patek Philippe", family:"Perpetual Calendar",
    name:"Perpetual Calendar", nick:"5327 Rose Gold", ref:"5327R-001",
    mat:"18k Rose Gold", bezel:"Rose Gold", dial:"Brown", brace:"Leather", size:"38mm",
    status:"current", era:"2012–Present",
    desc:"Rose gold perpetual calendar with brown dial.",
    pricing:PP_P([82000,108000,146000],[76000,100000,135000],[70000,93000,125000],[65000,87000,116000]),
    cM:PP_CM_GOLD, eM:PP_EM_CAL, src:PP_SRC_C24 },

  // ── GRAND COMPLICATIONS ──────────────────────────────────────────────────────
  { id:"gc-5370-mono", fid:"pp-grandcomp", brand:"Patek Philippe", family:"Grand Complications",
    name:"Split-Seconds Chronograph", nick:"5370 Steel", ref:"5370P-011",
    mat:"Platinum", bezel:"Platinum", dial:"Black", brace:"Leather", size:"41mm",
    status:"current", era:"2015–Present",
    desc:"Split-seconds chronograph in platinum — Patek's most complex manually-wound complication. Caliber CH 29-535 PS. Extremely limited production.",
    pricing:PP_P([250000,340000,480000],[231000,315000,445000],[214000,292000,413000],[198000,271000,383000]),
    cM:PP_CM_RARE, eM:PP_EM_COMP, src:PP_SRC_TOP },

  { id:"gc-5207-wg", fid:"pp-grandcomp", brand:"Patek Philippe", family:"Grand Complications",
    name:"Grand Complication", nick:"5207 Triple Complication", ref:"5207G-010",
    mat:"18k White Gold", bezel:"White Gold", dial:"Silver", brace:"Leather", size:"41mm",
    status:"limited", era:"2012–Present",
    desc:"Triple complication: minute repeater, instantaneous perpetual calendar, tourbillon. One of the most complex wristwatches ever made.",
    pricing:PP_P([1200000,1800000,3000000],[0,0,0],[0,0,0],[1000000,1500000,2600000]),
    cM:PP_CM_RARE, eM:PP_EM_COMP, src:["Phillips","Christie's"] },

  { id:"gc-5216-tourbillon", fid:"pp-grandcomp", brand:"Patek Philippe", family:"Grand Complications",
    name:"Tourbillon", nick:"5216R Tourbillon", ref:"5216R-001",
    mat:"18k Rose Gold", bezel:"Rose Gold", dial:"Silver", brace:"Leather", size:"42mm",
    status:"current", era:"2022–Present",
    desc:"Rose gold tourbillon with new ultra-thin 30-255 PS T movement. Patek's most accessible tourbillon.",
    pricing:PP_P([280000,380000,520000],[259000,352000,482000],[240000,326000,446000],[222000,302000,413000]),
    cM:PP_CM_RARE, eM:PP_EM_COMP, src:PP_SRC_TOP },

  { id:"gc-5074-min-repeater", fid:"pp-grandcomp", brand:"Patek Philippe", family:"Grand Complications",
    name:"Minute Repeater Perpetual Calendar", nick:"5074 Platinum", ref:"5074P-010",
    mat:"Platinum", bezel:"Platinum", dial:"Black", brace:"Leather", size:"42.8mm",
    status:"discontinued", era:"2002–2019",
    desc:"Minute repeater with perpetual calendar in platinum. Discontinued. Pinnacle of traditional Patek horology.",
    pricing:PP_P([500000,750000,1200000],[0,0,0],[0,0,0],[420000,650000,1050000]),
    cM:PP_CM_RARE, eM:PP_EM_COMP, src:["Phillips","Christie's","Sotheby's"] },

  // ── SKY MOON TOURBILLON ──────────────────────────────────────────────────────
  { id:"gc-6002-skymoon", fid:"pp-skymoon", brand:"Patek Philippe", family:"Sky Moon Tourbillon",
    name:"Sky Moon Tourbillon", nick:"6002G", ref:"6002G-010",
    mat:"18k White Gold", bezel:"White Gold", dial:"Blue/Enamel", brace:"Leather", size:"44mm",
    status:"limited", era:"2018–Present",
    desc:"The most complicated Patek Philippe wristwatch currently produced. Double-sided dial, 12 complications including minute repeater, tourbillon, and sidereal sky chart. Under 10 pieces per year.",
    pricing:PP_P([2500000,3800000,6000000],[0,0,0],[0,0,0],[2000000,3200000,5200000]),
    cM:PP_CM_RARE, eM:PP_EM_COMP, src:["Phillips","Christie's"] },

  // ── WORLD TIME 5230 / 5131 ───────────────────────────────────────────────────
  { id:"wt-5230-wg", fid:"pp-worldtime", brand:"Patek Philippe", family:"World Time",
    name:"World Time", nick:"5230 White Gold Blue", ref:"5230G-010",
    mat:"18k White Gold", bezel:"White Gold", dial:"Blue", brace:"Leather", size:"38.5mm",
    status:"current", era:"2016–Present",
    desc:"World Time in white gold — simultaneous display of all 24 time zones. Caliber 240 HU. Patek's most universally appealing complication.",
    pricing:PP_P([58000,76000,100000],[54000,71000,93000],[50000,66000,87000],[46000,61000,81000]),
    cM:PP_CM_GOLD, eM:PP_EM_STD, src:PP_SRC_C24 },

  { id:"wt-5231-wg-enamel", fid:"pp-worldtime", brand:"Patek Philippe", family:"World Time",
    name:"World Time", nick:"5231 Enamel Map", ref:"5231G-010",
    mat:"18k White Gold", bezel:"White Gold", dial:"Cloisonné Enamel", brace:"Leather", size:"38.5mm",
    status:"limited", era:"2017–Present",
    desc:"World Time with cloisonné enamel dial — hand-painted world map. Each piece unique. The intersection of watchmaking and miniature painting. Extremely limited.",
    pricing:PP_P([200000,280000,400000],[185000,260000,371000],[171000,241000,344000],[158000,224000,319000]),
    cM:PP_CM_RARE, eM:PP_EM_STD, src:PP_SRC_TOP },

  // ── CHRONOGRAPH 5172 / 5170 ──────────────────────────────────────────────────
  { id:"chron-5172-wg", fid:"pp-chronograph", brand:"Patek Philippe", family:"Chronograph",
    name:"Chronograph", nick:"5172 White Gold", ref:"5172G-010",
    mat:"18k White Gold", bezel:"White Gold", dial:"Silver", brace:"Leather", size:"41mm",
    status:"current", era:"2019–Present",
    desc:"Manual-wind chronograph in white gold. Caliber CHR 29-535 PS. Classic column-wheel movement visible through caseback.",
    pricing:PP_P([95000,128000,172000],[88000,119000,160000],[81000,110000,149000],[75000,102000,138000]),
    cM:PP_CM_GOLD, eM:PP_EM_COMP, src:PP_SRC_C24 },

  { id:"chron-5170-yg", fid:"pp-chronograph", brand:"Patek Philippe", family:"Chronograph",
    name:"Chronograph", nick:"5170 Yellow Gold", ref:"5170J-010",
    mat:"18k Yellow Gold", bezel:"Yellow Gold", dial:"Cream", brace:"Leather", size:"39mm",
    status:"discontinued", era:"2011–2020",
    desc:"Previous-generation manual chronograph in yellow gold. Discontinued. The purist's Patek chronograph.",
    pricing:PP_P([100000,138000,185000],[92000,128000,172000],[85000,119000,160000],[79000,111000,149000]),
    cM:PP_CM_GOLD, eM:PP_EM_COMP, src:PP_SRC_C24 },

  { id:"chron-5004-split", fid:"pp-chronograph", brand:"Patek Philippe", family:"Chronograph",
    name:"Split-Seconds Rattrapante", nick:"5004 Steel", ref:"5004A-011",
    mat:"Stainless Steel", bezel:"Steel", dial:"Black", brace:"Leather", size:"36.8mm",
    status:"discontinued", era:"1994–2011",
    desc:"One of only ~10 steel examples of the 5004 ever made. Possibly the most valuable steel watch per piece outside of the Nautilus family. Museum-quality rarity.",
    pricing:PP_P([500000,900000,2000000],[0,0,0],[0,0,0],[420000,780000,1700000]),
    cM:PP_CM_RARE, eM:PP_EM_COMP, src:["Phillips","Christie's","Sotheby's"] },

  // ── VINTAGE REFERENCES ───────────────────────────────────────────────────────
  { id:"vtg-2499-yg", fid:"pp-vintage", brand:"Patek Philippe", family:"Vintage Grand Complications",
    name:"Perpetual Calendar Chronograph", nick:"Ref. 2499 — The Holy Grail", ref:"2499",
    mat:"18k Yellow Gold", bezel:"Yellow Gold", dial:"Cream", brace:"Leather", size:"38mm",
    status:"vintage", era:"1950–1985",
    desc:"The most important vintage chronograph ever made. Four series produced. Steel examples essentially priceless. Yellow gold regularly achieves $2M–$5M+ at Phillips, Christie's, and Sotheby's.",
    pricing:PP_P([1500000,3000000,6000000],[0,0,0],[0,0,0],[1200000,2500000,5000000]),
    cM:PP_CM_VTG, eM:{ "Pre-1960":1.4,"1960s":1.3,"1970s":1.1,"1980s":1.0,"1990s":1.0,"2000s":1.0,"2010s":1.0,"2020s":1.0 },
    src:["Phillips","Christie's","Sotheby's"] },

  { id:"vtg-1518-yg", fid:"pp-vintage", brand:"Patek Philippe", family:"Vintage Grand Complications",
    name:"Perpetual Calendar Chronograph", nick:"Ref. 1518 — First Series", ref:"1518",
    mat:"18k Yellow Gold", bezel:"Yellow Gold", dial:"Silver", brace:"Leather", size:"35mm",
    status:"vintage", era:"1941–1954",
    desc:"The world's first serially-produced perpetual calendar chronograph wristwatch. 281 examples. Steel examples: 4 known. Among the most historically important watches ever made.",
    pricing:PP_P([800000,1800000,5000000],[0,0,0],[0,0,0],[700000,1500000,4000000]),
    cM:PP_CM_VTG, eM:{ "Pre-1960":1.5,"1960s":1.3,"1970s":1.1,"1980s":1.0,"1990s":1.0,"2000s":1.0,"2010s":1.0,"2020s":1.0 },
    src:["Phillips","Christie's","Sotheby's"] },

  { id:"vtg-130-chronograph", fid:"pp-vintage", brand:"Patek Philippe", family:"Vintage Grand Complications",
    name:"Chronograph", nick:"Ref. 130 — First Patek Chrono", ref:"130",
    mat:"18k Yellow Gold", bezel:"Yellow Gold", dial:"Silver", brace:"Leather", size:"33mm",
    status:"vintage", era:"1934–1960",
    desc:"Patek's first wristwatch chronograph. Highly collectible. Condition and dial quality drive dramatic price swings.",
    pricing:PP_P([80000,180000,450000],[0,0,0],[0,0,0],[60000,140000,360000]),
    cM:PP_CM_VTG, eM:{ "Pre-1960":1.5,"1960s":1.2,"1970s":1.0,"1980s":1.0,"1990s":1.0,"2000s":1.0,"2010s":1.0,"2020s":1.0 },
    src:PP_SRC_VTG },

];

// ── FAMILY INDEX ──────────────────────────────────────────────────────────────
window.PP_FAMILIES = {};
window.PP_WATCHES.forEach(w => {
  if (!window.PP_FAMILIES[w.fid]) {
    window.PP_FAMILIES[w.fid] = { fid: w.fid, family: w.family, brand: w.brand, ids: [] };
  }
  window.PP_FAMILIES[w.fid].ids.push(w.id);
});

console.log(`✅ Patek Philippe catalog loaded: ${window.PP_WATCHES.length} configurations across ${Object.keys(window.PP_FAMILIES).length} families`);

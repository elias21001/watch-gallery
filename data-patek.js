// ============================================================
// THE WATCH GALLERY — PATEK PHILIPPE CATALOG
// Updated: Year-specific production ranges (startYear/endYear)
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
const PP_CM_RARE = { Unworn:1.30, Mint:1.15, Excellent:1.00, "Very Good":.85, Good:.70, Fair:.52 };
const PP_CM_VTG  = { Unworn:1.38, Mint:1.20, Excellent:1.00, "Very Good":.80, Good:.62, Fair:.43 };

// Year-based multiplier curves
const PP_YM_5711 = {
  1997:1.60, 2000:1.35, 2005:1.15, 2010:1.05, 2015:1.0,
  2019:1.05, 2020:1.30, 2021:2.80, 2022:2.20, 2023:1.80,
  2024:1.60, 2026:1.50
};
const PP_YM_5811 = {
  2021:1.40, 2022:1.60, 2023:1.45, 2024:1.30, 2026:1.25
};
const PP_YM_AQ = {
  1997:1.5, 2000:1.3, 2005:1.15, 2010:1.05, 2015:1.0,
  2019:1.0, 2021:1.45, 2022:1.30, 2023:1.15, 2024:1.08, 2026:1.05
};
const PP_YM_COMP = {
  1940:4.5, 1950:3.8, 1960:3.0, 1970:2.3, 1980:1.7,
  1990:1.3, 2000:1.1, 2010:1.0, 2020:1.0, 2026:1.0
};
const PP_YM_CALATRAVA = {
  1932:5.0, 1940:4.2, 1950:3.5, 1960:2.8, 1970:2.0,
  1980:1.5, 1990:1.2, 2000:1.05, 2010:1.0, 2020:1.0, 2026:1.0
};
const PP_YM_STD = {
  1950:2.5, 1960:2.0, 1970:1.6, 1980:1.3, 1990:1.1,
  2000:1.0, 2010:0.97, 2020:1.0, 2026:1.0
};
const PP_YM_WORLD_TIME = {
  1940:5.0, 1950:4.2, 1960:3.4, 1970:2.6, 1980:1.9,
  1990:1.4, 2000:1.1, 2010:1.0, 2020:1.0, 2026:1.0
};

const PP_SRC_MAIN = ["Chrono24","WatchGuys","Ermitage 2026"];
const PP_SRC_C24  = ["Chrono24","WatchCharts"];
const PP_SRC_VTG  = ["Phillips","Christie's","Sotheby's"];
const PP_SRC_AUC  = ["Phillips","Sotheby's","Christie's","Antiquorum"];

const PP_VN_5711  = "The Nautilus 5711 in steel (particularly the Blue 5711/1A) is considered the watch that defined the 2020–2022 watch bubble. Production ended January 2021. 2020 and early 2021 examples — the last off the line — command the highest premiums. A factory-sealed unworn example with original stickers can trade at 3x the price of a well-worn example.";
const PP_VN_COMP  = "Patek Philippe grand complications from the mid-20th century are among the most valuable wristwatches ever made. Condition is paramount — original dials, untampered movements, and full documentation can increase value by multiples. Any example with auction provenance at a major house is worth significantly more.";
const PP_VN_CAL   = "The Calatrava represents the purest expression of dress watchmaking. Early references from the 1930s–1960s are the most coveted. The 96 (1932) and 570 (1944) are icons. Dial originality — no refinishing, no reluming — is the single most important value factor for vintage Calatrava.";
const PP_VN_GEN   = "Earlier Patek Philippe references command premiums based on rarity, dial condition, and collector demand. Original dials are sacrosanct — a refinished dial can reduce value by 50–80%. Full documentation dramatically increases value. Any auction provenance adds meaningful premium.";
const PP_VN_WT    = "Patek World Time references from the Czapek era (ref 515, 1939) are among the most historically significant watches ever made. Louis Cottier's world time mechanism in a round case is the definitive achievement. Even heavily worn examples are museum-quality.";

window.PATEK_WATCHES = [

  // ── NAUTILUS 5711 (STEEL, DISCONTINUED) ─────────────────────────────────────
  { id:"pp-5711-blue", fid:"pp-nautilus-5711", family:"Nautilus 5711",
    name:"Nautilus", nick:"5711 Blue — The Icon", ref:"5711/1A-010",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"Blue", brace:"Integrated SS", size:"40mm",
    status:"discontinued", startYear:2006, endYear:2021,
    desc:"The most iconic watch of the 21st century. Discontinued January 2021. The blue dial 5711/1A is the watch that defined a generation of collectors. 2019–2021 examples command the highest premiums.",
    vintageNote: PP_VN_5711,
    pricing:PP_P([150000,200000,280000],[135000,182000,255000],[120000,165000,232000],[108000,150000,210000]),
    cM:PP_CM_RARE, yM:PP_YM_5711, src:PP_SRC_MAIN },

  { id:"pp-5711-black", fid:"pp-nautilus-5711", family:"Nautilus 5711",
    name:"Nautilus", nick:"5711 Black", ref:"5711/1A-011",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"Black", brace:"Integrated SS", size:"40mm",
    status:"discontinued", startYear:2012, endYear:2021,
    desc:"Black dial 5711 — rarer than blue, slightly lower demand but deeply collectible.",
    vintageNote: PP_VN_5711,
    pricing:PP_P([130000,175000,240000],[118000,159000,219000],[107000,144000,199000],[97000,131000,181000]),
    cM:PP_CM_RARE, yM:PP_YM_5711, src:PP_SRC_MAIN },

  { id:"pp-5711-silver", fid:"pp-nautilus-5711", family:"Nautilus 5711",
    name:"Nautilus", nick:"5711 Silver", ref:"5711/1A-001",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"Silver", brace:"Integrated SS", size:"40mm",
    status:"discontinued", startYear:1998, endYear:2021,
    desc:"Silver dial 5711 — the original configuration. Earlier examples from the late 1990s and 2000s have particular collector appeal.",
    vintageNote: PP_VN_5711,
    pricing:PP_P([120000,165000,225000],[109000,150000,205000],[99000,136000,186000],[90000,124000,169000]),
    cM:PP_CM_RARE, yM:PP_YM_5711, src:PP_SRC_MAIN },

  { id:"pp-5711-olive", fid:"pp-nautilus-5711", family:"Nautilus 5711",
    name:"Nautilus", nick:"5711 Olive Green — Final Edition", ref:"5711/1A-014",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"Olive Green", brace:"Integrated SS", size:"40mm",
    status:"limited", startYear:2021, endYear:2021,
    desc:"The final 5711 — released as a farewell. Tiffany blue also exists but olive green is the public final edition. Instant icon, extraordinary premiums.",
    vintageNote: PP_VN_5711,
    pricing:PP_P([320000,450000,700000],[290000,410000,640000],[262000,373000,582000],[238000,340000,530000]),
    cM:PP_CM_RARE, yM:{2021:1.0,2026:1.0}, src:["Chrono24","Phillips","WatchCharts"] },

  // ── NAUTILUS 5811 (CURRENT) ──────────────────────────────────────────────────
  { id:"pp-5811-blue", fid:"pp-nautilus-5811", family:"Nautilus 5811",
    name:"Nautilus", nick:"5811 Blue", ref:"5811/1G-001",
    mat:"18k White Gold", bezel:"Integrated WG", dial:"Blue", brace:"Integrated WG", size:"41mm",
    status:"current", startYear:2021, endYear:2026,
    desc:"The 5711's successor — white gold only, 41mm. Caliber 26-330 S C. More precious than its predecessor but still highly sought.",
    pricing:PP_P([120000,160000,220000],[109000,146000,201000],[99000,133000,183000],[90000,121000,167000]),
    cM:PP_CM_GOLD, yM:PP_YM_5811, src:PP_SRC_MAIN },

  { id:"pp-5811-brown", fid:"pp-nautilus-5811", family:"Nautilus 5811",
    name:"Nautilus", nick:"5811 Brown", ref:"5811/1G-010",
    mat:"18k White Gold", bezel:"Integrated WG", dial:"Brown", brace:"Integrated WG", size:"41mm",
    status:"current", startYear:2023, endYear:2026,
    desc:"Brown (chocolate) dial 5811. Introduced 2023, rapidly gaining collector traction.",
    pricing:PP_P([110000,148000,205000],[100000,135000,187000],[91000,123000,170000],[83000,112000,155000]),
    cM:PP_CM_GOLD, yM:PP_YM_5811, src:PP_SRC_MAIN },

  { id:"pp-5811-green", fid:"pp-nautilus-5811", family:"Nautilus 5811",
    name:"Nautilus", nick:"5811 Green", ref:"5811/1G-013",
    mat:"18k White Gold", bezel:"Integrated WG", dial:"Green", brace:"Integrated WG", size:"41mm",
    status:"current", startYear:2023, endYear:2026,
    desc:"Green dial 5811 in white gold. Introduced 2023.",
    pricing:PP_P([115000,155000,215000],[105000,141000,196000],[95000,128000,179000],[87000,117000,163000]),
    cM:PP_CM_GOLD, yM:PP_YM_5811, src:PP_SRC_MAIN },

  // ── AQUANAUT 5168 (CURRENT) ──────────────────────────────────────────────────
  { id:"pp-5168-khaki", fid:"pp-aquanaut", family:"Aquanaut",
    name:"Aquanaut", nick:"5168 Khaki Green", ref:"5168G-010",
    mat:"18k White Gold", bezel:"Integrated WG", dial:"Khaki Green", brace:"Rubber", size:"42mm",
    status:"current", startYear:2021, endYear:2026,
    desc:"The Aquanaut in white gold with khaki rubber strap. 5168G in khaki is the most desirable Aquanaut configuration.",
    pricing:PP_P([95000,130000,180000],[86000,118000,164000],[78000,107000,149000],[71000,97000,136000]),
    cM:PP_CM_GOLD, yM:PP_YM_AQ, src:PP_SRC_MAIN },

  { id:"pp-5168-blue", fid:"pp-aquanaut", family:"Aquanaut",
    name:"Aquanaut", nick:"5168 Blue", ref:"5168G-001",
    mat:"18k White Gold", bezel:"Integrated WG", dial:"Blue", brace:"Rubber", size:"42mm",
    status:"current", startYear:2019, endYear:2026,
    desc:"Blue dial Aquanaut in white gold. The second most popular Aquanaut configuration.",
    pricing:PP_P([90000,122000,168000],[82000,111000,153000],[74000,101000,139000],[68000,92000,127000]),
    cM:PP_CM_GOLD, yM:PP_YM_AQ, src:PP_SRC_MAIN },

  { id:"pp-5168-orange", fid:"pp-aquanaut", family:"Aquanaut",
    name:"Aquanaut", nick:"5168 Orange", ref:"5168G-010",
    mat:"18k White Gold", bezel:"Integrated WG", dial:"Orange", brace:"Rubber", size:"42mm",
    status:"current", startYear:2022, endYear:2026,
    desc:"Orange dial Aquanaut — vibrant and sporty. Introduced 2022, building a strong following.",
    pricing:PP_P([85000,115000,158000],[77000,105000,144000],[70000,95000,131000],[64000,87000,120000]),
    cM:PP_CM_GOLD, yM:PP_YM_AQ, src:PP_SRC_MAIN },

  // ── AQUANAUT 5065 (DISCONTINUED) ─────────────────────────────────────────────
  { id:"pp-5065-blk", fid:"pp-aquanaut", family:"Aquanaut",
    name:"Aquanaut", nick:"5065 First Generation", ref:"5065A",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"Black", brace:"Rubber", size:"38mm",
    status:"discontinued", startYear:1997, endYear:2007,
    desc:"The original Aquanaut in steel — 38mm, first generation. Neo-vintage appeal, more affordable entry to the family.",
    pricing:PP_P([28000,38000,52000],[25000,34000,47000],[22000,31000,43000],[20000,28000,39000]),
    cM:PP_CM_STD, yM:PP_YM_AQ, src:PP_SRC_MAIN },

  // ── CALATRAVA (CURRENT) ───────────────────────────────────────────────────────
  { id:"pp-6119-blk", fid:"pp-calatrava", family:"Calatrava",
    name:"Calatrava", nick:"6119 Rose Gold Black", ref:"6119R-010",
    mat:"18k Rose Gold", bezel:"Fluted", dial:"Black", brace:"Leather", size:"40mm",
    status:"current", startYear:2021, endYear:2026,
    desc:"The modern Calatrava. Caliber 30-255 PS. Rose gold with black dial — understated horological perfection.",
    pricing:PP_P([32000,42000,56000],[29000,38000,51000],[26000,35000,47000],[24000,32000,43000]),
    cM:PP_CM_GOLD, yM:PP_YM_STD, src:PP_SRC_C24 },

  { id:"pp-6119-slv", fid:"pp-calatrava", family:"Calatrava",
    name:"Calatrava", nick:"6119 Rose Gold Silver", ref:"6119R-001",
    mat:"18k Rose Gold", bezel:"Fluted", dial:"Silver", brace:"Leather", size:"40mm",
    status:"current", startYear:2021, endYear:2026,
    desc:"Silver dial Calatrava in rose gold. The classic and most restrained presentation.",
    pricing:PP_P([30000,40000,54000],[27000,36000,49000],[25000,33000,45000],[22000,30000,41000]),
    cM:PP_CM_GOLD, yM:PP_YM_STD, src:PP_SRC_C24 },

  { id:"pp-6119-wg-slv", fid:"pp-calatrava", family:"Calatrava",
    name:"Calatrava", nick:"6119 White Gold Silver", ref:"6119G-001",
    mat:"18k White Gold", bezel:"Fluted", dial:"Silver", brace:"Leather", size:"40mm",
    status:"current", startYear:2021, endYear:2026,
    desc:"White gold Calatrava with silver dial. Cool-toned and refined.",
    pricing:PP_P([31000,41000,55000],[28000,37000,50000],[26000,34000,46000],[23000,31000,42000]),
    cM:PP_CM_GOLD, yM:PP_YM_STD, src:PP_SRC_C24 },

  { id:"pp-5196-yg", fid:"pp-calatrava", family:"Calatrava",
    name:"Calatrava", nick:"5196 Yellow Gold", ref:"5196J-001",
    mat:"18k Yellow Gold", bezel:"Smooth", dial:"Silver", brace:"Leather", size:"37mm",
    status:"discontinued", startYear:2004, endYear:2021,
    desc:"The 37mm Calatrava — smaller, more delicate. Yellow gold with hobnail bezel. Discontinued.",
    pricing:PP_P([24000,32000,44000],[22000,29000,40000],[20000,26000,37000],[18000,24000,34000]),
    cM:PP_CM_GOLD, yM:PP_YM_STD, src:PP_SRC_C24 },

  // ── CALATRAVA VINTAGE ─────────────────────────────────────────────────────────
  { id:"pp-cal-96", fid:"pp-calatrava", family:"Calatrava",
    name:"Calatrava", nick:"Ref 96 — Original Calatrava", ref:"96",
    mat:"18k Yellow Gold", bezel:"Smooth", dial:"Silver", brace:"Leather", size:"31mm",
    status:"vintage", startYear:1932, endYear:1969,
    desc:"The original Calatrava — created in 1932, the first year of Patek Philippe's independence. The most historically significant round dress watch ever made.",
    vintageNote: PP_VN_CAL,
    pricing:PP_P([55000,95000,220000],[50000,86000,200000],[0,0,0],[40000,70000,170000]),
    cM:PP_CM_VTG, yM:PP_YM_CALATRAVA, src:PP_SRC_VTG },

  { id:"pp-cal-570", fid:"pp-calatrava", family:"Calatrava",
    name:"Calatrava", nick:"Ref 570 — Classic Era", ref:"570",
    mat:"18k Yellow Gold", bezel:"Smooth", dial:"Silver", brace:"Leather", size:"35mm",
    status:"vintage", startYear:1944, endYear:1968,
    desc:"The 570 — most desirable post-war Calatrava. Sector and stepped dials command the highest premiums.",
    vintageNote: PP_VN_CAL,
    pricing:PP_P([30000,55000,130000],[27000,50000,118000],[0,0,0],[22000,40000,98000]),
    cM:PP_CM_VTG, yM:PP_YM_CALATRAVA, src:PP_SRC_VTG },

  { id:"pp-cal-2526", fid:"pp-calatrava", family:"Calatrava",
    name:"Calatrava", nick:"Ref 2526 — First Automatic", ref:"2526",
    mat:"18k Yellow Gold", bezel:"Smooth", dial:"Enamel", brace:"Leather", size:"36mm",
    status:"vintage", startYear:1953, endYear:1966,
    desc:"Patek's first automatic — ref 2526. Enamel dial examples are extraordinarily rare. Milestone reference.",
    vintageNote: PP_VN_CAL,
    pricing:PP_P([45000,80000,200000],[40000,72000,182000],[0,0,0],[32000,58000,150000]),
    cM:PP_CM_VTG, yM:PP_YM_CALATRAVA, src:PP_SRC_VTG },

  // ── GRAND COMPLICATIONS ───────────────────────────────────────────────────────
  { id:"pp-5270-blk", fid:"pp-grand-comp", family:"Grand Complications",
    name:"Grand Complications", nick:"5270 Perpetual Chrono — Black", ref:"5270G-014",
    mat:"18k White Gold", bezel:"Fluted", dial:"Black", brace:"Leather", size:"41mm",
    status:"current", startYear:2020, endYear:2026,
    desc:"The 5270 perpetual calendar chronograph — the pinnacle of traditional watchmaking. Caliber CH 29-535 PS Q. A life's watch.",
    pricing:PP_P([180000,240000,320000],[164000,219000,292000],[149000,199000,266000],[136000,182000,243000]),
    cM:PP_CM_GOLD, yM:PP_YM_STD, src:PP_SRC_C24 },

  { id:"pp-5270-blue", fid:"pp-grand-comp", family:"Grand Complications",
    name:"Grand Complications", nick:"5270 Perpetual Chrono — Blue", ref:"5270G-018",
    mat:"18k White Gold", bezel:"Fluted", dial:"Blue", brace:"Leather", size:"41mm",
    status:"current", startYear:2022, endYear:2026,
    desc:"Blue dial 5270 — introduced 2022. The most desirable current configuration.",
    pricing:PP_P([200000,270000,360000],[182000,246000,328000],[166000,224000,299000],[151000,204000,273000]),
    cM:PP_CM_GOLD, yM:PP_YM_STD, src:PP_SRC_C24 },

  { id:"pp-5178-enamel", fid:"pp-grand-comp", family:"Grand Complications",
    name:"Grand Complications", nick:"5178 World Time — Enamel", ref:"5178G-001",
    mat:"18k White Gold", bezel:"Fluted", dial:"Enamel", brace:"Leather", size:"38.5mm",
    status:"current", startYear:2012, endYear:2026,
    desc:"World Time with enamel cloisonné dial. Each dial hand-painted, unique. Among the most artisan pieces Patek makes.",
    pricing:PP_P([140000,185000,250000],[127000,169000,228000],[116000,154000,208000],[105000,140000,189000]),
    cM:PP_CM_GOLD, yM:PP_YM_STD, src:PP_SRC_C24 },

  { id:"pp-5208-minute-rep", fid:"pp-grand-comp", family:"Grand Complications",
    name:"Grand Complications", nick:"5208 Minute Repeater Perp Chrono", ref:"5208P-001",
    mat:"Platinum", bezel:"Smooth", dial:"Black", brace:"Leather", size:"42mm",
    status:"current", startYear:2011, endYear:2026,
    desc:"The 5208 — the most complex Patek available to order. Minute repeater, perpetual calendar, instantaneous chronograph. Ultra-rare.",
    pricing:PP_P([1200000,1600000,2400000],[0,0,0],[0,0,0],[900000,1200000,1800000]),
    cM:PP_CM_RARE, yM:PP_YM_STD, src:PP_SRC_AUC },

  { id:"pp-5216-minute-rep", fid:"pp-grand-comp", family:"Grand Complications",
    name:"Grand Complications", nick:"5216 Minute Repeater Tourbillon", ref:"5216R-001",
    mat:"18k Rose Gold", bezel:"Smooth", dial:"Silver", brace:"Leather", size:"41mm",
    status:"current", startYear:2019, endYear:2026,
    desc:"Minute repeater with tourbillon in rose gold. Caliber R TO 27 PS QI. Extraordinary mechanical achievement.",
    pricing:PP_P([900000,1200000,1800000],[0,0,0],[0,0,0],[700000,950000,1500000]),
    cM:PP_CM_RARE, yM:PP_YM_STD, src:PP_SRC_AUC },

  // ── GRAND COMPLICATIONS VINTAGE ───────────────────────────────────────────────
  { id:"pp-1527-comp", fid:"pp-grand-comp", family:"Grand Complications",
    name:"Grand Complications", nick:"Ref 1527 — Split Seconds Perp", ref:"1527",
    mat:"18k Yellow Gold", bezel:"Smooth", dial:"Silver", brace:"Leather", size:"37mm",
    status:"vintage", startYear:1943, endYear:1955,
    desc:"The reference 1527 — split-seconds perpetual calendar with moon phase. One of the most important vintage Pateks ever made.",
    vintageNote: PP_VN_COMP,
    pricing:PP_P([4000000,7000000,15000000],[0,0,0],[0,0,0],[3000000,5500000,12000000]),
    cM:{Unworn:1.5,Mint:1.3,Excellent:1.0,"Very Good":.80,Good:.60,Fair:.40},
    yM:PP_YM_COMP, src:PP_SRC_AUC },

  { id:"pp-2499-chrono", fid:"pp-grand-comp", family:"Grand Complications",
    name:"Grand Complications", nick:"Ref 2499 — Perp Calendar Chrono", ref:"2499",
    mat:"18k Yellow Gold", bezel:"Smooth", dial:"Silver", brace:"Leather", size:"38mm",
    status:"vintage", startYear:1951, endYear:1985,
    desc:"The reference 2499 — perpetual calendar chronograph produced across 4 series. Each series commands different premiums. First series most valuable.",
    vintageNote: PP_VN_COMP,
    pricing:PP_P([800000,1500000,4000000],[0,0,0],[0,0,0],[600000,1200000,3200000]),
    cM:{Unworn:1.5,Mint:1.28,Excellent:1.0,"Very Good":.80,Good:.60,Fair:.40},
    yM:PP_YM_COMP, src:PP_SRC_AUC },

  // ── WORLD TIME ────────────────────────────────────────────────────────────────
  { id:"pp-5230-blue", fid:"pp-world-time", family:"World Time",
    name:"World Time", nick:"5230 Blue Enamel", ref:"5230G-010",
    mat:"18k White Gold", bezel:"Smooth", dial:"Blue Enamel", brace:"Leather", size:"38.5mm",
    status:"current", startYear:2016, endYear:2026,
    desc:"The modern World Time with enamel dial. The Cottier mechanism displays all 24 time zones simultaneously.",
    pricing:PP_P([85000,115000,155000],[77000,105000,141000],[70000,95000,129000],[64000,87000,118000]),
    cM:PP_CM_GOLD, yM:PP_YM_STD, src:PP_SRC_C24 },

  { id:"pp-5231-enamel", fid:"pp-world-time", family:"World Time",
    name:"World Time", nick:"5231 Cloisonné", ref:"5231J-001",
    mat:"18k Yellow Gold", bezel:"Smooth", dial:"Cloisonné Enamel", brace:"Leather", size:"38.5mm",
    status:"current", startYear:2016, endYear:2026,
    desc:"Cloisonné enamel World Time — different artisan map motif each year. Extremely collectible, each reference unique.",
    pricing:PP_P([250000,350000,500000],[228000,319000,456000],[207000,291000,415000],[189000,265000,378000]),
    cM:PP_CM_RARE, yM:PP_YM_STD, src:PP_SRC_AUC },

  { id:"pp-515-worldtime", fid:"pp-world-time", family:"World Time",
    name:"World Time", nick:"Ref 515 — Czapek Era", ref:"515",
    mat:"18k Yellow Gold", bezel:"Smooth", dial:"Silver", brace:"Leather", size:"32mm",
    status:"vintage", startYear:1939, endYear:1944,
    desc:"The original Patek World Time — Louis Cottier's mechanism in a round case. Historical masterpiece. Only a handful known.",
    vintageNote: PP_VN_WT,
    pricing:PP_P([2500000,5000000,12000000],[0,0,0],[0,0,0],[2000000,4000000,9500000]),
    cM:{Unworn:1.5,Mint:1.3,Excellent:1.0,"Very Good":.78,Good:.58,Fair:.38},
    yM:PP_YM_WORLD_TIME, src:PP_SRC_AUC },

  // ── ANNUAL CALENDAR ───────────────────────────────────────────────────────────
  { id:"pp-5396-blk", fid:"pp-annual-cal", family:"Annual Calendar",
    name:"Annual Calendar", nick:"5396 Rose Gold Black", ref:"5396R-014",
    mat:"18k Rose Gold", bezel:"Fluted", dial:"Black", brace:"Leather", size:"38mm",
    status:"current", startYear:2016, endYear:2026,
    desc:"Patek's signature complication — the annual calendar needs just one manual correction per year. Caliber 324 S QA LU 24H/303.",
    pricing:PP_P([55000,72000,96000],[50000,66000,88000],[46000,60000,80000],[42000,55000,73000]),
    cM:PP_CM_GOLD, yM:PP_YM_STD, src:PP_SRC_C24 },

  { id:"pp-5396-blue", fid:"pp-annual-cal", family:"Annual Calendar",
    name:"Annual Calendar", nick:"5396 White Gold Blue", ref:"5396G-011",
    mat:"18k White Gold", bezel:"Fluted", dial:"Blue", brace:"Leather", size:"38mm",
    status:"current", startYear:2019, endYear:2026,
    desc:"Blue dial annual calendar in white gold. The most in-demand current configuration.",
    pricing:PP_P([62000,82000,108000],[56000,75000,99000],[51000,68000,90000],[47000,62000,82000]),
    cM:PP_CM_GOLD, yM:PP_YM_STD, src:PP_SRC_C24 },

  { id:"pp-5726-blk", fid:"pp-annual-cal", family:"Annual Calendar",
    name:"Annual Calendar with Moon Phase", nick:"5726 Steel — 'Jumbo Cal'", ref:"5726A-001",
    mat:"Stainless Steel", bezel:"Fluted", dial:"Black", brace:"Leather", size:"39mm",
    status:"discontinued", startYear:2011, endYear:2022,
    desc:"Annual calendar with moon phase in steel — the rare affordable-entry annual calendar. Discontinued, now commands strong premium.",
    pricing:PP_P([65000,88000,120000],[59000,80000,109000],[54000,73000,99000],[49000,67000,91000]),
    cM:PP_CM_STD, yM:PP_YM_STD, src:PP_SRC_MAIN },

  // ── MOON PHASE ────────────────────────────────────────────────────────────────
  { id:"pp-5719-wg", fid:"pp-moon-phase", family:"Moon Phase",
    name:"Complications", nick:"5719 White Gold Moon Phase", ref:"5719G-010",
    mat:"18k White Gold", bezel:"Fluted", dial:"Blue", brace:"Leather", size:"37mm",
    status:"current", startYear:2019, endYear:2026,
    desc:"Moon phase in white gold. Small seconds, date. The ideal Patek for those who want a complication without the grand complications price.",
    pricing:PP_P([70000,92000,124000],[64000,84000,113000],[58000,77000,103000],[53000,70000,94000]),
    cM:PP_CM_GOLD, yM:PP_YM_STD, src:PP_SRC_C24 },

  { id:"pp-6119r-moonphase", fid:"pp-moon-phase", family:"Moon Phase",
    name:"Complications", nick:"6102 Officer — Moon Phase", ref:"6102R-001",
    mat:"18k Rose Gold", bezel:"Smooth", dial:"Silver", brace:"Leather", size:"42mm",
    status:"discontinued", startYear:2017, endYear:2023,
    desc:"Officer-case moon phase in rose gold. Hinged case reveals the movement engraving. Elegant and unusual.",
    pricing:PP_P([45000,60000,82000],[41000,55000,75000],[37000,50000,68000],[34000,46000,62000]),
    cM:PP_CM_GOLD, yM:PP_YM_STD, src:PP_SRC_C24 },

  // ── CHRONOGRAPH ───────────────────────────────────────────────────────────────
  { id:"pp-5172-blk", fid:"pp-chrono", family:"Chronograph",
    name:"Chronograph", nick:"5172 Rose Gold — Black", ref:"5172R-010",
    mat:"18k Rose Gold", bezel:"Smooth", dial:"Black", brace:"Leather", size:"41mm",
    status:"current", startYear:2019, endYear:2026,
    desc:"Manual-wind column wheel chronograph — Caliber CH 29-535 PS. The purist's chronograph in rose gold.",
    pricing:PP_P([75000,98000,132000],[68000,89000,120000],[62000,81000,109000],[57000,74000,100000]),
    cM:PP_CM_GOLD, yM:PP_YM_STD, src:PP_SRC_C24 },

  { id:"pp-5172-slv", fid:"pp-chrono", family:"Chronograph",
    name:"Chronograph", nick:"5172 Rose Gold — Silver", ref:"5172R-001",
    mat:"18k Rose Gold", bezel:"Smooth", dial:"Silver", brace:"Leather", size:"41mm",
    status:"current", startYear:2019, endYear:2026,
    desc:"Silver dial 5172 — the classic presentation of the manual chronograph.",
    pricing:PP_P([72000,95000,128000],[66000,87000,117000],[60000,79000,106000],[54000,72000,97000]),
    cM:PP_CM_GOLD, yM:PP_YM_STD, src:PP_SRC_C24 },

  { id:"pp-1463-chrono", fid:"pp-chrono", family:"Chronograph",
    name:"Chronograph", nick:"Ref 1463 — Teardrop Lugs", ref:"1463",
    mat:"18k Yellow Gold", bezel:"Smooth", dial:"Silver", brace:"Leather", size:"35mm",
    status:"vintage", startYear:1944, endYear:1970,
    desc:"The reference 1463 — teardrop lugs, column wheel, horizontal clutch. The most beautiful Patek chronograph ever made. A true grail piece.",
    vintageNote: PP_VN_GEN,
    pricing:PP_P([350000,600000,1500000],[0,0,0],[0,0,0],[250000,470000,1200000]),
    cM:{Unworn:1.5,Mint:1.25,Excellent:1.0,"Very Good":.80,Good:.62,Fair:.42},
    yM:PP_YM_COMP, src:PP_SRC_AUC },

  // ── GONDOLO ───────────────────────────────────────────────────────────────────
  { id:"pp-5098-yg", fid:"pp-gondolo", family:"Gondolo",
    name:"Gondolo", nick:"5098 Yellow Gold", ref:"5098J-001",
    mat:"18k Yellow Gold", bezel:"Art Deco", dial:"Silver", brace:"Leather", size:"34×42mm",
    status:"discontinued", startYear:1993, endYear:2019,
    desc:"The modern Gondolo — rectangular Art Deco case. Discontinued. Elegant and uncommon.",
    pricing:PP_P([18000,25000,36000],[16000,22000,33000],[14000,20000,30000],[12500,18000,27000]),
    cM:PP_CM_GOLD, yM:PP_YM_STD, src:PP_SRC_C24 },

  // ── TWENTY-4 ──────────────────────────────────────────────────────────────────
  { id:"pp-7300-blk", fid:"pp-twenty4", family:"Twenty-4",
    name:"Twenty~4", nick:"7300 Automatic — Black", ref:"7300/1451R-010",
    mat:"18k Rose Gold", bezel:"Integrated RG", dial:"Black", brace:"Integrated RG", size:"36mm",
    status:"current", startYear:2021, endYear:2026,
    desc:"The modern automatic Twenty~4 in rose gold. The most wearable Patek for everyday.",
    pricing:PP_P([45000,60000,80000],[41000,55000,73000],[37000,50000,67000],[34000,46000,61000]),
    cM:PP_CM_GOLD, yM:PP_YM_STD, src:PP_SRC_C24 },

  { id:"pp-7300-blue", fid:"pp-twenty4", family:"Twenty-4",
    name:"Twenty~4", nick:"7300 Automatic — Blue", ref:"7300/1451G-010",
    mat:"18k White Gold", bezel:"Integrated WG", dial:"Blue", brace:"Integrated WG", size:"36mm",
    status:"current", startYear:2021, endYear:2026,
    desc:"Blue dial automatic Twenty~4 in white gold. The most popular Twenty~4 configuration.",
    pricing:PP_P([48000,64000,85000],[44000,58000,78000],[40000,53000,71000],[36000,48000,65000]),
    cM:PP_CM_GOLD, yM:PP_YM_STD, src:PP_SRC_C24 },

];

// ── FAMILY INDEX ──────────────────────────────────────────────────────────────
window.PATEK_FAMILIES = {};
window.PATEK_WATCHES.forEach(w => {
  if (!window.PATEK_FAMILIES[w.fid]) window.PATEK_FAMILIES[w.fid] = { fid:w.fid, family:w.family, ids:[] };
  window.PATEK_FAMILIES[w.fid].ids.push(w.id);
});

// ── YEAR INTERPOLATION ENGINE (shared) ───────────────────────────────────────
if (!window.getYearMultiplier) {
  window.getYearMultiplier = function(yM, year) {
    if (!yM || !year) return 1.0;
    const keys = Object.keys(yM).map(Number).sort((a,b)=>a-b);
    if (year <= keys[0]) return yM[keys[0]];
    if (year >= keys[keys.length-1]) return yM[keys[keys.length-1]];
    for (let i=0;i<keys.length-1;i++) {
      if (year>=keys[i] && year<=keys[i+1]) {
        const t = (year-keys[i])/(keys[i+1]-keys[i]);
        return yM[keys[i]] + t*(yM[keys[i+1]]-yM[keys[i]]);
      }
    }
    return 1.0;
  };
}

window.calcPatekPrice = function(watch, set, condition, year) {
  const base = watch.pricing[set] || watch.pricing["Full Set"];
  if (!base||!base.avg) return {low:0,avg:0,high:0};
  const cM = watch.cM[condition] || 1.0;
  const yMult = window.getYearMultiplier(watch.yM, year);
  return {
    low:  Math.round(base.low  * cM * yMult),
    avg:  Math.round(base.avg  * cM * yMult),
    high: Math.round(base.high * cM * yMult)
  };
};

window.getPatekProductionYears = function(watch) {
  const years=[];
  for (let y=watch.startYear;y<=watch.endYear;y++) years.push(y);
  return years;
};

console.log(`✅ Patek loaded: ${window.PATEK_WATCHES.length} refs · ${Object.keys(window.PATEK_FAMILIES).length} families · year-specific pricing active`);

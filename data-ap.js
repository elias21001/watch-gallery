// ============================================================
// THE WATCH GALLERY — AUDEMARS PIGUET CATALOG
// Updated: Year-specific production ranges (startYear/endYear)
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
const AP_CM_RARE = { Unworn:1.28, Mint:1.14, Excellent:1.00, "Very Good":.86, Good:.72, Fair:.54 };
const AP_CM_VTG  = { Unworn:1.35, Mint:1.18, Excellent:1.00, "Very Good":.82, Good:.65, Fair:.45 };

// Year-based multiplier curves — interpolated between defined anchor points
const AP_YM_RO = {
  1972:4.5, 1975:3.8, 1978:3.0, 1982:2.2, 1986:1.7, 1990:1.35,
  1995:1.15, 2000:1.05, 2005:1.0, 2010:0.97, 2015:0.95,
  2019:1.0, 2021:1.40, 2022:1.35, 2023:1.20, 2024:1.10, 2026:1.05
};
const AP_YM_RO_OFF = {
  1993:1.8, 1997:1.4, 2000:1.2, 2005:1.05, 2010:1.0,
  2015:0.97, 2019:1.0, 2021:1.25, 2022:1.20, 2023:1.10, 2024:1.05, 2026:1.02
};
const AP_YM_CODE = {
  2018:1.0, 2019:1.0, 2020:0.98, 2021:1.05, 2022:1.08,
  2023:1.06, 2024:1.04, 2026:1.02
};
const AP_YM_STD = {
  1970:2.5, 1975:2.0, 1980:1.6, 1985:1.3, 1990:1.15,
  1995:1.05, 2000:1.0, 2005:0.97, 2010:0.95,
  2015:0.96, 2020:1.0, 2026:1.0
};
const AP_YM_5711_ERA = {
  2021:1.60, 2022:1.45, 2023:1.25, 2024:1.15, 2026:1.10
};

const AP_SRC_MAIN = ["Chrono24","WatchGuys","Ermitage 2026"];
const AP_SRC_C24  = ["Chrono24","WatchCharts"];
const AP_SRC_VTG  = ["Phillips","Christie's","Sotheby's"];

const AP_VN_RO   = "Early Royal Oak references (5402 and A-series) are the holy grail of AP collecting. The original Gerald Genta design from 1972 established integrated steel sport watches as a category. Pre-1980 examples with original dials, unpolished cases, and matching bracelets can trade at many multiples of later production. Any example with auction provenance commands further premium.";
const AP_VN_GEN  = "Earlier production years command significant premiums due to rarity, original dial condition, and collector demand. Case sharpness, bracelet integrity, and dial originality are the primary value drivers for vintage AP references.";
const AP_VN_OFF  = "Early Offshore references from the 1990s and early 2000s are increasingly collectible as 'neo-vintage.' The original Arnold Schwarzenegger ref 25721 and early Chronograph refs are the most sought. Condition of the rubber inserts and case finishing are critical for these pieces.";

window.AP_WATCHES = [

  // ── ROYAL OAK 41MM (15500) ──────────────────────────────────────────────────
  { id:"ro-15500-blk", fid:"ap-ro41", family:"Royal Oak 41mm",
    name:"Royal Oak", nick:"Selfwinding — Black", ref:"15500ST.OO.1220ST.01",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"Black", brace:"Integrated SS", size:"41mm",
    status:"current", startYear:2019, endYear:2026,
    desc:"The definitive modern Royal Oak. 41mm, Caliber 4302, 70hr power reserve. Black 'Grande Tapisserie' dial.",
    pricing:AP_P([55000,68000,88000],[50000,62000,80000],[45000,57000,73000],[40000,52000,67000]),
    cM:AP_CM_STD, yM:AP_YM_RO, src:AP_SRC_MAIN },

  { id:"ro-15500-slv", fid:"ap-ro41", family:"Royal Oak 41mm",
    name:"Royal Oak", nick:"Selfwinding — Silver", ref:"15500ST.OO.1220ST.03",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"Silver", brace:"Integrated SS", size:"41mm",
    status:"current", startYear:2019, endYear:2026,
    desc:"Silver 'Grande Tapisserie' dial RO41. Slightly rarer than black, commands modest premium.",
    pricing:AP_P([57000,70000,92000],[52000,65000,84000],[47000,59000,77000],[43000,54000,71000]),
    cM:AP_CM_STD, yM:AP_YM_RO, src:AP_SRC_MAIN },

  { id:"ro-15500-blue", fid:"ap-ro41", family:"Royal Oak 41mm",
    name:"Royal Oak", nick:"Selfwinding — Blue", ref:"15500ST.OO.1220ST.04",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"Blue", brace:"Integrated SS", size:"41mm",
    status:"current", startYear:2022, endYear:2026,
    desc:"Blue dial RO41. Commands meaningful premium — blue is consistently the most in-demand color.",
    pricing:AP_P([65000,82000,108000],[60000,76000,100000],[54000,70000,92000],[49000,64000,85000]),
    cM:AP_CM_STD, yM:AP_YM_RO, src:AP_SRC_MAIN },

  { id:"ro-15500-green", fid:"ap-ro41", family:"Royal Oak 41mm",
    name:"Royal Oak", nick:"Selfwinding — Green", ref:"15500ST.OO.1220ST.06",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"Olive Green", brace:"Integrated SS", size:"41mm",
    status:"current", startYear:2022, endYear:2026,
    desc:"Olive green dial — introduced 2022. Increasingly popular, strong secondary market.",
    pricing:AP_P([60000,76000,100000],[55000,70000,92000],[50000,64000,85000],[45000,58000,78000]),
    cM:AP_CM_STD, yM:AP_YM_RO, src:AP_SRC_MAIN },

  { id:"ro-15510-blk", fid:"ap-ro41", family:"Royal Oak 41mm",
    name:"Royal Oak", nick:"Jumbo — Black (15510)", ref:"15510ST.OO.1320ST.02",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"Black", brace:"Integrated SS", size:"41mm",
    status:"current", startYear:2021, endYear:2026,
    desc:"15510 'Extra-Thin' — thinner case than 15500, Caliber 7121. The modern evolution of the original Jumbo.",
    pricing:AP_P([58000,72000,95000],[53000,66000,87000],[48000,61000,80000],[44000,56000,74000]),
    cM:AP_CM_STD, yM:AP_YM_RO, src:AP_SRC_MAIN },

  { id:"ro-15510-slv", fid:"ap-ro41", family:"Royal Oak 41mm",
    name:"Royal Oak", nick:"Jumbo — Silver (15510)", ref:"15510ST.OO.1320ST.01",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"Silver", brace:"Integrated SS", size:"41mm",
    status:"current", startYear:2021, endYear:2026,
    desc:"Silver dial 15510 Jumbo. Classic and elegant thin-case Royal Oak.",
    pricing:AP_P([56000,70000,92000],[51000,64000,84000],[46000,59000,77000],[42000,54000,71000]),
    cM:AP_CM_STD, yM:AP_YM_RO, src:AP_SRC_MAIN },

  // ── ROYAL OAK JUMBO 39MM (5402 / A-SERIES) ─────────────────────────────────
  { id:"ro-5402-blk", fid:"ap-ro-jumbo", family:"Royal Oak Jumbo 39mm",
    name:"Royal Oak", nick:"Original Jumbo — Black", ref:"5402ST",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"Black", brace:"Integrated SS", size:"39mm",
    status:"vintage", startYear:1972, endYear:1985,
    desc:"The original Gerald Genta design. Reference 5402 is the foundation of all modern luxury sport watches. A museum piece.",
    vintageNote: AP_VN_RO,
    pricing:AP_P([120000,200000,450000],[100000,175000,400000],[0,0,0],[80000,140000,320000]),
    cM:AP_CM_VTG, yM:AP_YM_RO, src:AP_SRC_VTG },

  { id:"ro-15202-blk", fid:"ap-ro-jumbo", family:"Royal Oak Jumbo 39mm",
    name:"Royal Oak", nick:"Jumbo 39mm — Black (15202)", ref:"15202ST.OO.1240ST.01",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"Black", brace:"Integrated SS", size:"39mm",
    status:"discontinued", startYear:2012, endYear:2021,
    desc:"Modern 39mm Jumbo — Extra-Thin, Caliber 2121. Discontinued. Beloved for closest dimensions to the original.",
    pricing:AP_P([95000,130000,180000],[85000,118000,165000],[75000,107000,150000],[65000,96000,135000]),
    cM:AP_CM_STD, yM:AP_YM_RO, src:AP_SRC_MAIN },

  { id:"ro-15202-slv", fid:"ap-ro-jumbo", family:"Royal Oak Jumbo 39mm",
    name:"Royal Oak", nick:"Jumbo 39mm — Silver (15202)", ref:"15202ST.OO.1240ST.02",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"Silver", brace:"Integrated SS", size:"39mm",
    status:"discontinued", startYear:2012, endYear:2021,
    desc:"Silver dial 15202 — slightly rarer than black, equally desirable.",
    pricing:AP_P([98000,135000,185000],[88000,122000,170000],[78000,110000,155000],[68000,99000,140000]),
    cM:AP_CM_STD, yM:AP_YM_RO, src:AP_SRC_MAIN },

  // ── ROYAL OAK CHRONOGRAPH 41MM ───────────────────────────────────────────────
  { id:"ro-26240-blk", fid:"ap-ro-chrono", family:"Royal Oak Chronograph 41mm",
    name:"Royal Oak Chronograph", nick:"Black Tapisserie", ref:"26240ST.OO.1320ST.02",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"Black", brace:"Integrated SS", size:"41mm",
    status:"current", startYear:2021, endYear:2026,
    desc:"Current-gen RO Chrono. 41mm, Caliber 4401, flyback, 70hr power reserve. The sport chrono benchmark.",
    pricing:AP_P([48000,60000,78000],[44000,55000,72000],[40000,50000,66000],[36000,46000,60000]),
    cM:AP_CM_STD, yM:AP_YM_RO, src:AP_SRC_MAIN },

  { id:"ro-26240-slv", fid:"ap-ro-chrono", family:"Royal Oak Chronograph 41mm",
    name:"Royal Oak Chronograph", nick:"Silver Tapisserie", ref:"26240ST.OO.1320ST.01",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"Silver", brace:"Integrated SS", size:"41mm",
    status:"current", startYear:2021, endYear:2026,
    desc:"Silver dial RO Chrono. Strong market demand across all configurations.",
    pricing:AP_P([46000,58000,76000],[42000,53000,70000],[38000,48000,64000],[34000,44000,58000]),
    cM:AP_CM_STD, yM:AP_YM_RO, src:AP_SRC_MAIN },

  { id:"ro-26240-blue", fid:"ap-ro-chrono", family:"Royal Oak Chronograph 41mm",
    name:"Royal Oak Chronograph", nick:"Blue Tapisserie", ref:"26240ST.OO.1320ST.03",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"Blue", brace:"Integrated SS", size:"41mm",
    status:"current", startYear:2022, endYear:2026,
    desc:"Blue dial RO Chrono — commands the strongest premium in the Chronograph family.",
    pricing:AP_P([55000,70000,92000],[50000,64000,85000],[46000,59000,78000],[42000,54000,72000]),
    cM:AP_CM_STD, yM:AP_YM_RO, src:AP_SRC_MAIN },

  { id:"ro-26240-yg", fid:"ap-ro-chrono", family:"Royal Oak Chronograph 41mm",
    name:"Royal Oak Chronograph", nick:"Yellow Gold Black", ref:"26240BA.OO.1320BA.01",
    mat:"18k Yellow Gold", bezel:"Integrated YG", dial:"Black", brace:"Integrated YG", size:"41mm",
    status:"current", startYear:2021, endYear:2026,
    desc:"Yellow gold RO Chrono. The precious metal expression of the sport chronograph.",
    pricing:AP_P([120000,155000,200000],[110000,142000,185000],[100000,130000,170000],[90000,118000,155000]),
    cM:AP_CM_GOLD, yM:AP_YM_RO, src:AP_SRC_C24 },

  { id:"ro-26320-blk", fid:"ap-ro-chrono", family:"Royal Oak Chronograph 41mm",
    name:"Royal Oak Chronograph", nick:"Previous Gen — Black", ref:"26320ST.OO.1220ST.02",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"Black", brace:"Integrated SS", size:"41mm",
    status:"discontinued", startYear:2012, endYear:2021,
    desc:"Previous gen RO Chrono. Discontinued. Caliber 2385. Strong collector demand for earlier examples.",
    pricing:AP_P([38000,48000,65000],[35000,44000,60000],[32000,40000,55000],[29000,36000,50000]),
    cM:AP_CM_STD, yM:AP_YM_RO, src:AP_SRC_MAIN },

  // ── ROYAL OAK OFFSHORE 44MM ──────────────────────────────────────────────────
  { id:"roo-blk-42", fid:"ap-roo", family:"Royal Oak Offshore",
    name:"Royal Oak Offshore", nick:"Black on Black 42mm", ref:"26400IO.OO.A002CA.01",
    mat:"Forged Carbon / Ceramic", bezel:"Ceramic", dial:"Black", brace:"Rubber", size:"42mm",
    status:"current", startYear:2019, endYear:2026,
    desc:"Current carbon/ceramic Offshore. Bold 42mm, ultra-lightweight, Caliber 3126.",
    pricing:AP_P([38000,48000,63000],[35000,44000,58000],[32000,40000,53000],[29000,36000,48000]),
    cM:AP_CM_STD, yM:AP_YM_RO_OFF, src:AP_SRC_MAIN },

  { id:"roo-blue-44", fid:"ap-roo", family:"Royal Oak Offshore",
    name:"Royal Oak Offshore", nick:"Blue Tapisserie 44mm", ref:"26405CE.OO.A035CA.01",
    mat:"Ceramic", bezel:"Ceramic", dial:"Blue", brace:"Rubber", size:"44mm",
    status:"current", startYear:2019, endYear:2026,
    desc:"Full ceramic Offshore in blue. Statement piece, extremely durable material.",
    pricing:AP_P([42000,53000,70000],[38000,49000,65000],[35000,45000,60000],[32000,41000,55000]),
    cM:AP_CM_STD, yM:AP_YM_RO_OFF, src:AP_SRC_MAIN },

  { id:"roo-chrono-blk", fid:"ap-roo", family:"Royal Oak Offshore",
    name:"Royal Oak Offshore Chronograph", nick:"Black Chrono 44mm", ref:"26480TI.OO.A002CA.01",
    mat:"Titanium", bezel:"Ceramic", dial:"Black", brace:"Rubber", size:"44mm",
    status:"current", startYear:2021, endYear:2026,
    desc:"Titanium Offshore Chrono. Caliber 4401, flyback, lightweight. The ultimate sports chronograph.",
    pricing:AP_P([45000,58000,76000],[41000,53000,70000],[37000,48000,64000],[34000,44000,58000]),
    cM:AP_CM_STD, yM:AP_YM_RO_OFF, src:AP_SRC_MAIN },

  { id:"roo-chrono-orange", fid:"ap-roo", family:"Royal Oak Offshore",
    name:"Royal Oak Offshore Chronograph", nick:"Orange Volcano", ref:"26470SO.OO.A002CA.01",
    mat:"Stainless Steel", bezel:"Ceramic", dial:"Orange", brace:"Rubber", size:"44mm",
    status:"current", startYear:2019, endYear:2026,
    desc:"The iconic Orange Offshore Chrono — the most recognizable Offshore color. High demand.",
    pricing:AP_P([48000,62000,82000],[44000,57000,76000],[40000,52000,70000],[36000,48000,64000]),
    cM:AP_CM_STD, yM:AP_YM_RO_OFF, src:AP_SRC_MAIN },

  { id:"roo-25721-orig", fid:"ap-roo", family:"Royal Oak Offshore",
    name:"Royal Oak Offshore", nick:"Arnold / Original Beast", ref:"25721ST",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"Black", brace:"Integrated SS", size:"42mm",
    status:"vintage", startYear:1993, endYear:1997,
    desc:"The original Offshore — ref 25721, created by Emmanuel Gueit. Known as 'The Beast.' The foundation of the Offshore lineage.",
    vintageNote: AP_VN_OFF,
    pricing:AP_P([45000,80000,160000],[40000,70000,140000],[0,0,0],[28000,55000,110000]),
    cM:AP_CM_VTG, yM:AP_YM_RO_OFF, src:AP_SRC_VTG },

  { id:"roo-chrono-25721", fid:"ap-roo", family:"Royal Oak Offshore",
    name:"Royal Oak Offshore Chronograph", nick:"Original Chrono Offshore", ref:"25721ST",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"Black", brace:"Rubber", size:"44mm",
    status:"vintage", startYear:1997, endYear:2004,
    desc:"First-gen chrono Offshore. Neo-vintage, rising rapidly in collector interest.",
    vintageNote: AP_VN_OFF,
    pricing:AP_P([30000,50000,100000],[25000,44000,90000],[20000,38000,80000],[15000,30000,65000]),
    cM:AP_CM_VTG, yM:AP_YM_RO_OFF, src:AP_SRC_VTG },

  { id:"roo-diver-42", fid:"ap-roo", family:"Royal Oak Offshore",
    name:"Royal Oak Offshore Diver", nick:"Blue Diver", ref:"15720ST.OO.A027CA.01",
    mat:"Stainless Steel", bezel:"Ceramic", dial:"Blue", brace:"Rubber", size:"42mm",
    status:"current", startYear:2022, endYear:2026,
    desc:"Offshore Diver — 300m water resistance. Ceramic rotating bezel. Growing collector appeal.",
    pricing:AP_P([32000,41000,55000],[29000,37000,50000],[26000,34000,46000],[24000,31000,42000]),
    cM:AP_CM_STD, yM:AP_YM_RO_OFF, src:AP_SRC_MAIN },

  // ── CODE 11.59 ───────────────────────────────────────────────────────────────
  { id:"c1159-blk-ss", fid:"ap-code", family:"Code 11.59",
    name:"Code 11.59", nick:"Steel Black 41mm", ref:"15210ST.OO.A002CR.01",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"Black", brace:"Integrated SS", size:"41mm",
    status:"current", startYear:2019, endYear:2026,
    desc:"AP's modern round sport watch. Controversial on release, now gaining critical appreciation. Caliber 4302.",
    pricing:AP_P([32000,40000,52000],[29000,36000,47000],[26000,33000,43000],[23000,30000,39000]),
    cM:AP_CM_STD, yM:AP_YM_CODE, src:AP_SRC_MAIN },

  { id:"c1159-blue-ss", fid:"ap-code", family:"Code 11.59",
    name:"Code 11.59", nick:"Steel Blue 41mm", ref:"15210ST.OO.A068CR.01",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"Blue", brace:"Integrated SS", size:"41mm",
    status:"current", startYear:2022, endYear:2026,
    desc:"Blue dial Code 11.59 — the most visually striking steel configuration.",
    pricing:AP_P([34000,43000,56000],[31000,39000,51000],[28000,35000,46000],[25000,32000,42000]),
    cM:AP_CM_STD, yM:AP_YM_CODE, src:AP_SRC_MAIN },

  { id:"c1159-skele-ss", fid:"ap-code", family:"Code 11.59",
    name:"Code 11.59", nick:"Skeleton Steel", ref:"15202ST.OO.A002CR.01",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"Skeleton", brace:"Integrated SS", size:"41mm",
    status:"current", startYear:2021, endYear:2026,
    desc:"Skeleton Code 11.59 — open-worked movement, Caliber 4409. The most technically impressive Code.",
    pricing:AP_P([55000,70000,92000],[50000,64000,85000],[46000,59000,78000],[42000,54000,72000]),
    cM:AP_CM_STD, yM:AP_YM_CODE, src:AP_SRC_MAIN },

  { id:"c1159-chrono-ss", fid:"ap-code", family:"Code 11.59",
    name:"Code 11.59 Chronograph", nick:"Chrono Steel Black", ref:"26393ST.OO.A002CR.01",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"Black", brace:"Integrated SS", size:"41mm",
    status:"current", startYear:2019, endYear:2026,
    desc:"Code 11.59 Chronograph. Caliber 4401 flyback. Sporty and technically accomplished.",
    pricing:AP_P([38000,48000,63000],[35000,44000,58000],[32000,40000,53000],[29000,36000,48000]),
    cM:AP_CM_STD, yM:AP_YM_CODE, src:AP_SRC_MAIN },

  { id:"c1159-yg-blk", fid:"ap-code", family:"Code 11.59",
    name:"Code 11.59", nick:"Yellow Gold Black", ref:"15210BA.OO.A002CR.01",
    mat:"18k Yellow Gold", bezel:"Integrated YG", dial:"Black", brace:"Integrated YG", size:"41mm",
    status:"current", startYear:2019, endYear:2026,
    desc:"Yellow gold Code 11.59. The most luxurious Code configuration.",
    pricing:AP_P([65000,85000,112000],[59000,78000,103000],[54000,72000,95000],[49000,66000,88000]),
    cM:AP_CM_GOLD, yM:AP_YM_CODE, src:AP_SRC_C24 },

  { id:"c1159-rg-blk", fid:"ap-code", family:"Code 11.59",
    name:"Code 11.59", nick:"Rose Gold Black", ref:"15210OR.OO.A002CR.01",
    mat:"18k Rose Gold", bezel:"Integrated RG", dial:"Black", brace:"Integrated RG", size:"41mm",
    status:"current", startYear:2019, endYear:2026,
    desc:"Rose gold Code 11.59. Warm and distinguished.",
    pricing:AP_P([65000,85000,112000],[59000,78000,103000],[54000,72000,95000],[49000,66000,88000]),
    cM:AP_CM_GOLD, yM:AP_YM_CODE, src:AP_SRC_C24 },

  // ── ROYAL OAK PERPETUAL CALENDAR ─────────────────────────────────────────────
  { id:"ro-26574-blk", fid:"ap-ro-perp", family:"Royal Oak Perpetual Calendar",
    name:"Royal Oak Perpetual Calendar", nick:"Steel Black 41mm", ref:"26574ST.OO.1220ST.01",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"Black", brace:"Integrated SS", size:"41mm",
    status:"current", startYear:2021, endYear:2026,
    desc:"Perpetual calendar in the Royal Oak. Caliber 5134, perpetual calendar displays through 2100. Exceptional complication.",
    pricing:AP_P([95000,125000,165000],[87000,115000,152000],[79000,105000,140000],[72000,96000,128000]),
    cM:AP_CM_STD, yM:AP_YM_RO, src:AP_SRC_C24 },

  { id:"ro-26574-blue", fid:"ap-ro-perp", family:"Royal Oak Perpetual Calendar",
    name:"Royal Oak Perpetual Calendar", nick:"Steel Blue 41mm", ref:"26574ST.OO.1220ST.04",
    mat:"Stainless Steel", bezel:"Integrated SS", dial:"Blue", brace:"Integrated SS", size:"41mm",
    status:"current", startYear:2022, endYear:2026,
    desc:"Blue dial RO Perpetual Calendar. Most in-demand configuration of the complication.",
    pricing:AP_P([110000,145000,190000],[100000,133000,175000],[91000,122000,161000],[83000,112000,148000]),
    cM:AP_CM_STD, yM:AP_YM_RO, src:AP_SRC_C24 },

  { id:"ro-26574-yg", fid:"ap-ro-perp", family:"Royal Oak Perpetual Calendar",
    name:"Royal Oak Perpetual Calendar", nick:"Yellow Gold Black 41mm", ref:"26574BA.OO.1220BA.01",
    mat:"18k Yellow Gold", bezel:"Integrated YG", dial:"Black", brace:"Integrated YG", size:"41mm",
    status:"current", startYear:2021, endYear:2026,
    desc:"Yellow gold RO Perpetual Calendar. The apex of the Royal Oak complication family.",
    pricing:AP_P([195000,250000,330000],[178000,230000,305000],[162000,210000,280000],[148000,192000,255000]),
    cM:AP_CM_GOLD, yM:AP_YM_RO, src:AP_SRC_C24 },

  // ── ROYAL OAK TOURBILLON ──────────────────────────────────────────────────────
  { id:"ro-26518-ti", fid:"ap-ro-tourb", family:"Royal Oak Tourbillon",
    name:"Royal Oak Tourbillon", nick:"Titanium Openworked", ref:"26518TI.OO.1220TI.01",
    mat:"Titanium", bezel:"Integrated Ti", dial:"Skeleton", brace:"Integrated Ti", size:"41mm",
    status:"current", startYear:2021, endYear:2026,
    desc:"Flying tourbillon in open-worked Royal Oak. Caliber 2954, titanium construction. Exceptional rarity.",
    pricing:AP_P([280000,360000,480000],[255000,330000,440000],[232000,302000,403000],[210000,275000,368000]),
    cM:AP_CM_RARE, yM:AP_YM_RO, src:AP_SRC_C24 },

  { id:"ro-26530-yg", fid:"ap-ro-tourb", family:"Royal Oak Tourbillon",
    name:"Royal Oak Tourbillon", nick:"Yellow Gold Blue", ref:"26530BA.OO.1220BA.01",
    mat:"18k Yellow Gold", bezel:"Integrated YG", dial:"Blue", brace:"Integrated YG", size:"41mm",
    status:"current", startYear:2022, endYear:2026,
    desc:"Yellow gold flying tourbillon with blue dial. Among the most exclusive AP configurations available.",
    pricing:AP_P([380000,490000,650000],[345000,448000,595000],[314000,408000,543000],[286000,372000,495000]),
    cM:AP_CM_GOLD, yM:AP_YM_RO, src:AP_SRC_C24 },

  // ── MILLENARY ─────────────────────────────────────────────────────────────────
  { id:"mill-4101-bl", fid:"ap-millenary", family:"Millenary",
    name:"Millenary", nick:"Openworked — Blue", ref:"4101BC.OO.A002CR.01",
    mat:"18k White Gold", bezel:"White Gold", dial:"Skeleton Blue", brace:"Leather", size:"47mm",
    status:"discontinued", startYear:2011, endYear:2022,
    desc:"Oval Millenary with open-worked movement. Off-centered dial unique to this case shape.",
    pricing:AP_P([42000,55000,75000],[38000,50000,69000],[34000,46000,63000],[30000,42000,57000]),
    cM:AP_CM_GOLD, yM:AP_YM_STD, src:AP_SRC_C24 },

  { id:"mill-4101-blk", fid:"ap-millenary", family:"Millenary",
    name:"Millenary", nick:"Openworked — Black", ref:"4101BC.OO.A002CR.02",
    mat:"18k White Gold", bezel:"White Gold", dial:"Skeleton Black", brace:"Leather", size:"47mm",
    status:"discontinued", startYear:2011, endYear:2022,
    desc:"Black version of the open-worked Millenary. Equally rare and desirable.",
    pricing:AP_P([40000,52000,72000],[36000,47000,66000],[32000,43000,60000],[28000,39000,55000]),
    cM:AP_CM_GOLD, yM:AP_YM_STD, src:AP_SRC_C24 },

  // ── ROYAL OAK CONCEPT ─────────────────────────────────────────────────────────
  { id:"roc-26221-ti", fid:"ap-roc", family:"Royal Oak Concept",
    name:"Royal Oak Concept", nick:"Flying Tourbillon Titanium", ref:"26221TI.OO.D002CA.01",
    mat:"Titanium", bezel:"Ceramic", dial:"Skeleton", brace:"Rubber", size:"44mm",
    status:"discontinued", startYear:2013, endYear:2022,
    desc:"Concept Flying Tourbillon — the most technically radical Royal Oak. Titanium with forged carbon.",
    pricing:AP_P([195000,260000,360000],[175000,236000,328000],[158000,215000,299000],[143000,196000,272000]),
    cM:AP_CM_RARE, yM:AP_YM_RO, src:AP_SRC_C24 },

  { id:"roc-26228-blk", fid:"ap-roc", family:"Royal Oak Concept",
    name:"Royal Oak Concept", nick:"GMT Tourbillon Black Ceramic", ref:"26228IO.OO.D002CA.01",
    mat:"Ceramic", bezel:"Ceramic", dial:"Skeleton", brace:"Rubber", size:"44mm",
    status:"discontinued", startYear:2019, endYear:2023,
    desc:"GMT Tourbillon Concept in ceramic. One of the most complex AP watches ever made.",
    pricing:AP_P([320000,420000,580000],[290000,383000,529000],[263000,349000,482000],[240000,318000,439000]),
    cM:AP_CM_RARE, yM:AP_YM_RO, src:AP_SRC_C24 },

  // ── ROYAL OAK OFFSHORE DIVER CHRONOGRAPH ─────────────────────────────────────
  { id:"roo-chrono-diver", fid:"ap-roo-diverchrono", family:"Royal Oak Offshore Diver Chrono",
    name:"Royal Oak Offshore Diver Chronograph", nick:"Blue 44mm", ref:"26703ST.OO.A027CA.01",
    mat:"Stainless Steel", bezel:"Ceramic", dial:"Blue", brace:"Rubber", size:"44mm",
    status:"current", startYear:2022, endYear:2026,
    desc:"Diver Chronograph Offshore — combines 300m water resistance with flyback chronograph. Caliber 4401.",
    pricing:AP_P([55000,70000,92000],[50000,64000,85000],[46000,59000,78000],[42000,54000,72000]),
    cM:AP_CM_STD, yM:AP_YM_RO_OFF, src:AP_SRC_MAIN },

];

// ── FAMILY INDEX ──────────────────────────────────────────────────────────────
window.AP_FAMILIES = {};
window.AP_WATCHES.forEach(w => {
  if (!window.AP_FAMILIES[w.fid]) window.AP_FAMILIES[w.fid] = { fid:w.fid, family:w.family, ids:[] };
  window.AP_FAMILIES[w.fid].ids.push(w.id);
});

// ── YEAR INTERPOLATION ENGINE (shared with Rolex) ─────────────────────────────
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

window.calcAPPrice = function(watch, set, condition, year) {
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

window.getAPProductionYears = function(watch) {
  const years=[];
  for (let y=watch.startYear;y<=watch.endYear;y++) years.push(y);
  return years;
};

console.log(`✅ AP loaded: ${window.AP_WATCHES.length} refs · ${Object.keys(window.AP_FAMILIES).length} families · year-specific pricing active`);

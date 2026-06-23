// Illustrations vectorielles Wikinoo — générées en SVG, fiables et cohérentes.
// Chaque illustration est une scène thématique avec la palette du site.
const PAL={ink:'#1B3A5B',ink2:'#274C72',ocre:'#E8A33D',ocre2:'#D4882A',paper:'#F2EEE3',cream:'#FBFAF6',green:'#2E7D52',sky:'#9CC4E4',rose:'#E8B4A0',line:'#C9BFA8'};

function svgWrap(inner,bg){return `<svg viewBox="0 0 800 360" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;display:block">
<defs><linearGradient id="bgg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${bg||PAL.paper}"/><stop offset="1" stop-color="#EDE7D8"/></linearGradient>
<linearGradient id="ocg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${PAL.ocre}"/><stop offset="1" stop-color="${PAL.ocre2}"/></linearGradient></defs>
<rect width="800" height="360" fill="url(#bgg)"/>${inner}</svg>`;}

// éléments réutilisables
const ILLUS={
  // Taches / linge
  taches:()=>svgWrap(`
    <circle cx="650" cy="70" r="120" fill="${PAL.ocre}" opacity="0.08"/>
    <rect x="220" y="90" width="360" height="240" rx="18" fill="#fff" stroke="${PAL.line}" stroke-width="2"/>
    <path d="M260 130 h280 M260 165 h220 M260 200 h250" stroke="${PAL.line}" stroke-width="6" stroke-linecap="round"/>
    <circle cx="470" cy="250" r="34" fill="${PAL.rose}" opacity="0.85"/>
    <circle cx="500" cy="270" r="20" fill="${PAL.ocre}" opacity="0.7"/>
    <path d="M300 250 q20 -30 40 0 q20 30 40 0" stroke="${PAL.ink2}" stroke-width="5" fill="none" stroke-linecap="round"/>
    <circle cx="180" cy="280" r="46" fill="url(#ocg)"/><path d="M165 280 l12 12 l24 -26" stroke="#fff" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`),
  // Ménage / produits
  menage:()=>svgWrap(`
    <circle cx="120" cy="80" r="100" fill="${PAL.green}" opacity="0.08"/>
    <rect x="300" y="120" width="80" height="170" rx="14" fill="${PAL.ink}"/><rect x="318" y="90" width="44" height="40" rx="8" fill="${PAL.ink2}"/><rect x="312" y="160" width="56" height="70" rx="6" fill="#fff" opacity="0.9"/>
    <rect x="430" y="150" width="74" height="140" rx="12" fill="${PAL.green}"/><rect x="446" y="120" width="42" height="36" rx="8" fill="${PAL.ink2}"/>
    <ellipse cx="560" cy="300" rx="120" ry="20" fill="${PAL.ocre}" opacity="0.15"/>
    <path d="M540 180 q40 -50 80 -10 q30 30 -10 60" fill="none" stroke="url(#ocg)" stroke-width="10" stroke-linecap="round"/>
    <circle cx="600" cy="120" r="10" fill="${PAL.sky}"/><circle cx="630" cy="150" r="7" fill="${PAL.sky}"/><circle cx="580" cy="150" r="6" fill="${PAL.sky}"/>`),
  // Odeurs / air
  odeurs:()=>svgWrap(`
    <circle cx="660" cy="80" r="110" fill="${PAL.sky}" opacity="0.12"/>
    <rect x="250" y="160" width="120" height="150" rx="14" fill="#fff" stroke="${PAL.line}" stroke-width="2"/>
    <rect x="270" y="185" width="80" height="14" rx="7" fill="${PAL.ocre}" opacity="0.7"/>
    <path d="M420 250 q-20 -40 10 -70 q30 -30 5 -70" stroke="${PAL.ink2}" stroke-width="7" fill="none" stroke-linecap="round" opacity="0.6"/>
    <path d="M470 260 q-20 -40 10 -70 q30 -30 5 -70" stroke="${PAL.green}" stroke-width="7" fill="none" stroke-linecap="round" opacity="0.5"/>
    <path d="M520 250 q-20 -40 10 -70 q30 -30 5 -70" stroke="${PAL.ocre}" stroke-width="7" fill="none" stroke-linecap="round" opacity="0.6"/>`),
  // Eau / plomberie
  eau:()=>svgWrap(`
    <circle cx="150" cy="90" r="100" fill="${PAL.sky}" opacity="0.14"/>
    <rect x="330" y="120" width="140" height="50" rx="12" fill="${PAL.ink}"/><rect x="390" y="160" width="24" height="60" fill="${PAL.ink2}"/>
    <ellipse cx="402" cy="250" rx="70" ry="22" fill="${PAL.sky}" opacity="0.35"/><ellipse cx="402" cy="250" rx="44" ry="13" fill="${PAL.sky}" opacity="0.5"/>
    <path d="M402 220 q-8 14 0 22 q8 -8 0 -22" fill="${PAL.sky}"/>
    <circle cx="360" cy="240" r="5" fill="${PAL.sky}"/><circle cx="445" cy="245" r="4" fill="${PAL.sky}"/>`),
  // Argent / notaire
  argent:()=>svgWrap(`
    <circle cx="640" cy="90" r="120" fill="${PAL.ocre}" opacity="0.10"/>
    <circle cx="300" cy="200" r="70" fill="url(#ocg)"/><text x="300" y="232" font-size="74" text-anchor="middle" fill="#fff" font-family="Georgia,serif">€</text>
    <circle cx="430" cy="240" r="48" fill="${PAL.ocre}" opacity="0.85"/><text x="430" y="262" font-size="50" text-anchor="middle" fill="#fff" font-family="Georgia,serif">€</text>
    <circle cx="520" cy="270" r="32" fill="${PAL.ocre2}"/><text x="520" y="284" font-size="34" text-anchor="middle" fill="#fff" font-family="Georgia,serif">€</text>
    <rect x="170" y="280" width="280" height="16" rx="8" fill="${PAL.ink}" opacity="0.1"/>`),
  // Maison / clé / emprunt
  maison:()=>svgWrap(`
    <circle cx="160" cy="90" r="100" fill="${PAL.ink2}" opacity="0.08"/>
    <path d="M400 110 l150 110 v110 h-300 v-110 z" fill="#fff" stroke="${PAL.line}" stroke-width="2"/>
    <path d="M380 124 l170 124" stroke="none"/><path d="M390 118 l160 118 h-20 l-140 -104 z" fill="${PAL.ink}"/><path d="M390 118 l-160 118 h20 l140 -104 z" fill="${PAL.ink2}"/>
    <rect x="360" y="250" width="50" height="80" fill="${PAL.ocre}"/><rect x="440" y="240" width="50" height="50" fill="${PAL.sky}" opacity="0.6"/>
    <circle cx="620" cy="250" r="34" fill="none" stroke="url(#ocg)" stroke-width="12"/><rect x="615" y="280" width="12" height="60" fill="${PAL.ocre}"/><rect x="615" y="320" width="28" height="10" fill="${PAL.ocre}"/>`),
  // Énergie
  energie:()=>svgWrap(`
    <circle cx="640" cy="100" r="120" fill="${PAL.ocre}" opacity="0.12"/>
    <path d="M420 90 l-90 150 h70 l-30 130 l140 -180 h-70 z" fill="url(#ocg)"/>
    <circle cx="200" cy="250" r="60" fill="none" stroke="${PAL.ink2}" stroke-width="8" opacity="0.4"/>
    <path d="M200 210 v40 l28 20" stroke="${PAL.ink2}" stroke-width="8" fill="none" stroke-linecap="round" opacity="0.5"/>`),
  // Document / paie
  document:()=>svgWrap(`
    <circle cx="650" cy="280" r="110" fill="${PAL.ink2}" opacity="0.07"/>
    <rect x="290" y="80" width="220" height="250" rx="12" fill="#fff" stroke="${PAL.line}" stroke-width="2"/>
    <rect x="320" y="115" width="120" height="16" rx="8" fill="${PAL.ink}"/>
    <path d="M320 160 h160 M320 190 h160 M320 220 h120 M320 250 h160" stroke="${PAL.line}" stroke-width="7" stroke-linecap="round"/>
    <rect x="320" y="280" width="90" height="24" rx="6" fill="url(#ocg)"/>`),
  // Résiliation / stop
  stop:()=>svgWrap(`
    <circle cx="160" cy="280" r="100" fill="${PAL.ocre}" opacity="0.10"/>
    <circle cx="400" cy="200" r="100" fill="none" stroke="url(#ocg)" stroke-width="16"/>
    <rect x="350" y="186" width="100" height="28" rx="6" fill="${PAL.ocre2}"/>
    <rect x="540" y="120" width="120" height="160" rx="10" fill="#fff" stroke="${PAL.line}" stroke-width="2"/><path d="M560 160 h80 M560 190 h60 M560 220 h80" stroke="${PAL.line}" stroke-width="6" stroke-linecap="round"/>`),
  // Aliments / frigo
  aliments:()=>svgWrap(`
    <circle cx="640" cy="90" r="110" fill="${PAL.green}" opacity="0.10"/>
    <rect x="300" y="90" width="130" height="240" rx="16" fill="#fff" stroke="${PAL.line}" stroke-width="2"/><line x1="300" y1="200" x2="430" y2="200" stroke="${PAL.line}" stroke-width="2"/>
    <rect x="345" y="120" width="12" height="50" rx="6" fill="${PAL.ink2}"/><rect x="345" y="225" width="12" height="50" rx="6" fill="${PAL.ink2}"/>
    <circle cx="500" cy="250" r="40" fill="${PAL.green}"/><circle cx="560" cy="265" r="30" fill="${PAL.ocre}"/><path d="M500 210 q10 -20 20 0" stroke="${PAL.green}" stroke-width="6" fill="none"/>
    <ellipse cx="540" cy="300" rx="120" ry="16" fill="${PAL.green}" opacity="0.12"/>`),
  // Plat / casserole
  plat:()=>svgWrap(`
    <circle cx="160" cy="100" r="100" fill="${PAL.ocre}" opacity="0.10"/>
    <ellipse cx="400" cy="240" rx="150" ry="40" fill="${PAL.ink}"/><path d="M250 240 q150 90 300 0" fill="${PAL.ink2}"/>
    <rect x="250" y="230" width="300" height="20" rx="8" fill="${PAL.ink}"/>
    <rect x="180" y="226" width="80" height="14" rx="7" fill="${PAL.ink2}"/><rect x="540" y="226" width="80" height="14" rx="7" fill="${PAL.ink2}"/>
    <path d="M340 200 q-15 -30 8 -50 M400 195 q-15 -35 8 -55 M460 200 q-15 -30 8 -50" stroke="${PAL.ocre}" stroke-width="6" fill="none" stroke-linecap="round" opacity="0.7"/>`),
  // Œufs
  oeufs:()=>svgWrap(`
    <circle cx="650" cy="100" r="110" fill="${PAL.ocre}" opacity="0.10"/>
    <ellipse cx="320" cy="220" rx="70" ry="90" fill="#fff" stroke="${PAL.line}" stroke-width="2"/><circle cx="320" cy="240" r="42" fill="url(#ocg)"/>
    <ellipse cx="470" cy="250" rx="55" ry="70" fill="#fff" stroke="${PAL.line}" stroke-width="2"/><circle cx="470" cy="265" r="32" fill="${PAL.ocre}"/>
    <ellipse cx="400" cy="320" rx="180" ry="22" fill="${PAL.ocre}" opacity="0.10"/>`),
  // Épices
  epices:()=>svgWrap(`
    <circle cx="150" cy="100" r="100" fill="${PAL.green}" opacity="0.10"/>
    <rect x="300" y="170" width="60" height="120" rx="10" fill="${PAL.ocre}" opacity="0.85"/><rect x="305" y="150" width="50" height="24" rx="6" fill="${PAL.ink}"/>
    <rect x="380" y="190" width="60" height="100" rx="10" fill="${PAL.ocre2}"/><rect x="385" y="170" width="50" height="24" rx="6" fill="${PAL.ink}"/>
    <rect x="460" y="160" width="60" height="130" rx="10" fill="${PAL.green}" opacity="0.8"/><rect x="465" y="140" width="50" height="24" rx="6" fill="${PAL.ink}"/>
    <path d="M560 250 q20 -50 0 -90 q-20 40 0 90" fill="${PAL.green}"/>`),
  // Féculents / pâtes
  feculents:()=>svgWrap(`
    <circle cx="640" cy="260" r="110" fill="${PAL.ocre}" opacity="0.10"/>
    <ellipse cx="380" cy="240" rx="130" ry="50" fill="#fff" stroke="${PAL.line}" stroke-width="2"/><ellipse cx="380" cy="232" rx="110" ry="38" fill="${PAL.ocre}" opacity="0.25"/>
    <path d="M310 230 q20 -40 50 -10 M350 225 q25 -45 55 -8 M395 228 q22 -42 52 -6" stroke="url(#ocg)" stroke-width="7" fill="none" stroke-linecap="round"/>
    <circle cx="380" cy="232" r="14" fill="${PAL.rose}"/>`),
  // Générique recherche
  search:()=>svgWrap(`<circle cx="400" cy="180" r="60" fill="none" stroke="url(#ocg)" stroke-width="14"/><rect x="445" y="220" width="60" height="16" rx="8" transform="rotate(45 445 220)" fill="${PAL.ocre2}"/>`),

  // ===== Bricolage =====
  bricolage:()=>svgWrap(`
    <circle cx="150" cy="90" r="100" fill="${PAL.ink2}" opacity="0.08"/>
    <rect x="300" y="150" width="200" height="34" rx="8" transform="rotate(-28 400 167)" fill="${PAL.ink}"/>
    <rect x="455" y="120" width="60" height="46" rx="8" transform="rotate(-28 485 143)" fill="url(#ocg)"/>
    <path d="M250 300 l120 -120 l28 28 l-120 120 z" fill="${PAL.ocre2}"/><rect x="232" y="290" width="40" height="26" rx="6" transform="rotate(45 252 303)" fill="${PAL.ink2}"/>
    <circle cx="600" cy="250" r="40" fill="none" stroke="${PAL.ink2}" stroke-width="10" opacity="0.5"/><path d="M600 250 l26 -26 M600 250 l0 -36" stroke="${PAL.ink2}" stroke-width="8" stroke-linecap="round" opacity="0.5"/>`),
  // Outils / clous
  outils:()=>svgWrap(`
    <circle cx="640" cy="90" r="110" fill="${PAL.ocre}" opacity="0.10"/>
    <rect x="290" y="120" width="34" height="200" rx="10" fill="${PAL.ink}"/><path d="M280 120 q27 -40 54 0 z" fill="${PAL.ocre}"/>
    <rect x="430" y="200" width="180" height="28" rx="8" transform="rotate(40 520 214)" fill="${PAL.ink2}"/>
    <rect x="200" y="280" width="420" height="14" rx="7" fill="${PAL.ink}" opacity="0.10"/>
    <circle cx="500" cy="140" r="10" fill="${PAL.ocre2}"/><circle cx="540" cy="160" r="8" fill="${PAL.ocre2}"/>`),
  // Peinture
  peinture:()=>svgWrap(`
    <circle cx="160" cy="280" r="100" fill="${PAL.sky}" opacity="0.12"/>
    <rect x="300" y="180" width="150" height="120" rx="12" fill="#fff" stroke="${PAL.line}" stroke-width="2"/><ellipse cx="375" cy="180" rx="75" ry="18" fill="${PAL.sky}" opacity="0.6"/>
    <rect x="470" y="90" width="22" height="170" rx="6" fill="${PAL.ink2}"/><rect x="452" y="60" width="58" height="44" rx="10" fill="url(#ocg)"/>
    <path d="M481 260 q-6 20 0 36 q6 -16 0 -36" fill="${PAL.sky}"/>`),

  // ===== Jardin =====
  jardin:()=>svgWrap(`
    <circle cx="650" cy="90" r="120" fill="${PAL.green}" opacity="0.12"/>
    <path d="M400 320 q-10 -120 0 -180" stroke="${PAL.green}" stroke-width="10" fill="none" stroke-linecap="round"/>
    <path d="M400 200 q-60 -20 -90 -70 q70 -10 90 70" fill="${PAL.green}" opacity="0.85"/>
    <path d="M400 230 q60 -20 90 -70 q-70 -10 -90 70" fill="${PAL.green}"/>
    <ellipse cx="400" cy="320" rx="170" ry="22" fill="${PAL.green}" opacity="0.12"/>
    <circle cx="230" cy="120" r="46" fill="url(#ocg)"/><path d="M230 120 l0 -30 M230 120 l24 -18 M230 120 l-24 -18 M230 120 l24 18 M230 120 l-24 18" stroke="#fff" stroke-width="5" stroke-linecap="round"/>`),
  // Plante / pot
  plante:()=>svgWrap(`
    <circle cx="160" cy="100" r="100" fill="${PAL.green}" opacity="0.10"/>
    <path d="M340 280 h120 l-16 -90 h-88 z" fill="${PAL.ocre2}"/><rect x="330" y="265" width="140" height="20" rx="6" fill="${PAL.ocre}"/>
    <path d="M400 190 q-50 -30 -70 -90 q60 0 70 90" fill="${PAL.green}" opacity="0.8"/>
    <path d="M400 190 q50 -30 70 -90 q-60 0 -70 90" fill="${PAL.green}"/>
    <path d="M400 200 v-110" stroke="${PAL.green}" stroke-width="8" stroke-linecap="round"/>
    <circle cx="600" cy="120" r="34" fill="url(#ocg)" opacity="0.85"/>`),
  // Arrosoir / eau jardin
  arrosoir:()=>svgWrap(`
    <circle cx="640" cy="100" r="110" fill="${PAL.sky}" opacity="0.12"/>
    <path d="M300 200 h120 v90 q0 20 -20 20 h-80 q-20 0 -20 -20 z" fill="${PAL.green}"/>
    <path d="M420 220 l90 -40" stroke="${PAL.green}" stroke-width="14" stroke-linecap="round"/>
    <rect x="500" y="170" width="30" height="16" rx="6" fill="${PAL.green}"/>
    <path d="M300 200 q-30 -10 -40 -40" stroke="${PAL.green}" stroke-width="12" fill="none" stroke-linecap="round"/>
    <path d="M520 195 l-4 30 M535 195 l-2 30 M508 198 l-4 28" stroke="${PAL.sky}" stroke-width="5" stroke-linecap="round"/>`),

  // ===== Numérique =====
  numerique:()=>svgWrap(`
    <circle cx="150" cy="90" r="100" fill="${PAL.ink2}" opacity="0.08"/>
    <rect x="280" y="120" width="240" height="160" rx="14" fill="${PAL.ink}"/><rect x="298" y="138" width="204" height="118" rx="6" fill="${PAL.sky}" opacity="0.5"/>
    <rect x="360" y="288" width="80" height="14" rx="6" fill="${PAL.ink2}"/>
    <rect x="560" y="170" width="70" height="130" rx="12" fill="${PAL.ink2}"/><rect x="570" y="184" width="50" height="92" rx="4" fill="${PAL.sky}" opacity="0.5"/>
    <circle cx="595" cy="288" r="6" fill="#fff"/>
    <path d="M330 180 l30 30 l60 -60" stroke="${PAL.ocre}" stroke-width="9" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`),
  // Sécurité / cadenas
  securite:()=>svgWrap(`
    <circle cx="640" cy="90" r="110" fill="${PAL.ocre}" opacity="0.10"/>
    <rect x="320" y="190" width="160" height="130" rx="16" fill="url(#ocg)"/>
    <path d="M340 190 v-30 a60 60 0 0 1 120 0 v30" fill="none" stroke="${PAL.ink}" stroke-width="16"/>
    <circle cx="400" cy="245" r="18" fill="#fff"/><rect x="392" y="255" width="16" height="36" rx="6" fill="#fff"/>`),
  // Smartphone / temps
  smartphone:()=>svgWrap(`
    <circle cx="160" cy="100" r="100" fill="${PAL.green}" opacity="0.08"/>
    <rect x="320" y="80" width="160" height="240" rx="22" fill="${PAL.ink}"/><rect x="334" y="104" width="132" height="180" rx="6" fill="${PAL.sky}" opacity="0.45"/>
    <circle cx="400" cy="300" r="10" fill="${PAL.ink2}"/>
    <rect x="352" y="124" width="68" height="14" rx="6" fill="#fff" opacity="0.8"/><rect x="352" y="150" width="96" height="10" rx="5" fill="#fff" opacity="0.5"/><rect x="352" y="172" width="80" height="10" rx="5" fill="#fff" opacity="0.5"/>
    <circle cx="560" cy="180" r="46" fill="none" stroke="url(#ocg)" stroke-width="10"/><path d="M560 150 v30 l22 14" stroke="${PAL.ocre2}" stroke-width="8" fill="none" stroke-linecap="round"/>`),

  // ===== Auto =====
  auto:()=>svgWrap(`
    <circle cx="650" cy="100" r="110" fill="${PAL.ink2}" opacity="0.08"/>
    <path d="M230 250 q20 -70 60 -80 h220 q40 10 60 80 z" fill="url(#ocg)"/>
    <path d="M300 178 h180 l30 50 h-240 z" fill="${PAL.sky}" opacity="0.55"/>
    <rect x="210" y="250" width="380" height="34" rx="12" fill="${PAL.ink}"/>
    <circle cx="300" cy="290" r="34" fill="${PAL.ink}"/><circle cx="300" cy="290" r="14" fill="${PAL.line}"/>
    <circle cx="500" cy="290" r="34" fill="${PAL.ink}"/><circle cx="500" cy="290" r="14" fill="${PAL.line}"/>`),
  // Pneu / entretien
  pneu:()=>svgWrap(`
    <circle cx="160" cy="100" r="100" fill="${PAL.ocre}" opacity="0.08"/>
    <circle cx="400" cy="210" r="110" fill="${PAL.ink}"/><circle cx="400" cy="210" r="64" fill="${PAL.line}"/><circle cx="400" cy="210" r="34" fill="${PAL.ink2}"/>
    <path d="M400 100 v22 M400 298 v22 M290 210 h22 M488 210 h22 M322 132 l16 16 M462 272 l16 16 M462 148 l16 -16 M322 288 l16 -16" stroke="${PAL.ink}" stroke-width="8" stroke-linecap="round"/>
    <rect x="540" y="160" width="22" height="120" rx="8" fill="${PAL.ocre2}"/><rect x="520" y="150" width="62" height="22" rx="6" fill="${PAL.ink}"/>`),
  // Pompe / carburant
  carburant:()=>svgWrap(`
    <circle cx="640" cy="280" r="100" fill="${PAL.green}" opacity="0.10"/>
    <rect x="300" y="120" width="140" height="200" rx="14" fill="${PAL.ink}"/><rect x="318" y="140" width="104" height="70" rx="6" fill="${PAL.sky}" opacity="0.5"/>
    <path d="M440 170 h40 q14 0 14 14 v80 q0 16 16 16 t16 -16 v-40" fill="none" stroke="${PAL.ink2}" stroke-width="10" stroke-linecap="round"/>
    <text x="370" y="290" font-size="44" text-anchor="middle" fill="url(#ocg)" font-family="Georgia,serif">€</text>`),

  // ===== Santé / bien-être =====
  sante:()=>svgWrap(`
    <circle cx="640" cy="90" r="120" fill="${PAL.green}" opacity="0.12"/>
    <path d="M400 310 c-130 -80 -180 -150 -120 -210 c40 -40 90 -20 120 30 c30 -50 80 -70 120 -30 c60 60 10 130 -120 210 z" fill="${PAL.rose}" opacity="0.85"/>
    <path d="M260 200 h70 l24 -44 l40 90 l30 -60 h120" fill="none" stroke="#fff" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>`),
  // Sommeil / lune
  sommeil:()=>svgWrap(`
    <rect width="800" height="360" fill="${PAL.ink}"/>
    <path d="M520 90 a90 90 0 1 0 0 180 a70 70 0 0 1 0 -180 z" fill="url(#ocg)"/>
    <circle cx="250" cy="120" r="3" fill="#fff"/><circle cx="320" cy="80" r="2.5" fill="#fff"/><circle cx="200" cy="200" r="2.5" fill="#fff"/><circle cx="350" cy="180" r="2" fill="#fff"/><circle cx="160" cy="120" r="2" fill="#fff"/>
    <text x="600" y="140" font-size="40" fill="#fff" opacity="0.7" font-family="Georgia,serif">Z</text><text x="640" y="110" font-size="28" fill="#fff" opacity="0.5" font-family="Georgia,serif">z</text>`),
  // Eau / hydratation / verre
  bienetre:()=>svgWrap(`
    <circle cx="160" cy="100" r="100" fill="${PAL.sky}" opacity="0.12"/>
    <path d="M340 130 h120 l-16 190 h-88 z" fill="#fff" stroke="${PAL.line}" stroke-width="2"/>
    <path d="M348 230 h104 l-10 90 h-84 z" fill="${PAL.sky}" opacity="0.55"/>
    <path d="M560 160 q40 50 0 90 q-40 -40 0 -90 z" fill="${PAL.sky}" opacity="0.7"/>
    <ellipse cx="400" cy="330" rx="120" ry="16" fill="${PAL.sky}" opacity="0.12"/>`),

  // ===== Transports & Paris =====
  transport:()=>svgWrap(`
    <circle cx="650" cy="90" r="120" fill="${PAL.sky}" opacity="0.12"/>
    <rect x="250" y="120" width="300" height="150" rx="24" fill="${PAL.ink}"/>
    <rect x="270" y="140" width="120" height="70" rx="8" fill="${PAL.sky}" opacity="0.5"/><rect x="410" y="140" width="120" height="70" rx="8" fill="${PAL.sky}" opacity="0.5"/>
    <circle cx="300" cy="285" r="26" fill="${PAL.ink2}"/><circle cx="300" cy="285" r="10" fill="${PAL.line}"/>
    <circle cx="500" cy="285" r="26" fill="${PAL.ink2}"/><circle cx="500" cy="285" r="10" fill="${PAL.line}"/>
    <rect x="250" y="232" width="300" height="14" fill="${PAL.ocre}"/>
    <path d="M180 300 h440" stroke="${PAL.ink}" stroke-width="6" stroke-linecap="round" opacity="0.25"/>`),
  // Métro / M
  metro:()=>svgWrap(`
    <circle cx="160" cy="100" r="100" fill="${PAL.ink2}" opacity="0.08"/>
    <circle cx="400" cy="190" r="100" fill="url(#ocg)"/>
    <text x="400" y="232" font-size="120" text-anchor="middle" fill="#fff" font-family="Georgia,serif" font-weight="700">M</text>
    <rect x="250" y="310" width="300" height="14" rx="7" fill="${PAL.ink}" opacity="0.12"/>
    <circle cx="610" cy="120" r="14" fill="${PAL.ocre}" opacity="0.6"/><circle cx="650" cy="150" r="9" fill="${PAL.ocre}" opacity="0.4"/>`),
  // Bus
  bus:()=>svgWrap(`
    <circle cx="650" cy="280" r="110" fill="${PAL.green}" opacity="0.10"/>
    <rect x="220" y="120" width="360" height="150" rx="20" fill="${PAL.ocre2}"/>
    <rect x="240" y="140" width="80" height="60" rx="6" fill="${PAL.sky}" opacity="0.6"/><rect x="330" y="140" width="80" height="60" rx="6" fill="${PAL.sky}" opacity="0.6"/><rect x="420" y="140" width="80" height="60" rx="6" fill="${PAL.sky}" opacity="0.6"/>
    <rect x="510" y="140" width="55" height="110" rx="6" fill="${PAL.ink}" opacity="0.3"/>
    <circle cx="300" cy="285" r="28" fill="${PAL.ink}"/><circle cx="300" cy="285" r="11" fill="${PAL.line}"/>
    <circle cx="500" cy="285" r="28" fill="${PAL.ink}"/><circle cx="500" cy="285" r="11" fill="${PAL.line}"/>
    <rect x="220" y="232" width="360" height="12" fill="${PAL.ink}"/>`),
  // Aéroport / avion
  aeroport:()=>svgWrap(`
    <circle cx="160" cy="100" r="100" fill="${PAL.sky}" opacity="0.14"/>
    <path d="M250 280 l300 -90 q40 -12 50 8 q8 18 -28 30 l-300 92 z" fill="url(#ocg)"/>
    <path d="M330 256 l-40 -70 h34 l66 56 z" fill="${PAL.ink}"/>
    <path d="M470 214 l-30 -110 h30 l66 96 z" fill="${PAL.ink2}"/>
    <path d="M250 280 l-50 6 l30 -28 z" fill="${PAL.ink}"/>
    <path d="M180 320 h300" stroke="${PAL.sky}" stroke-width="6" stroke-dasharray="18 14" stroke-linecap="round" opacity="0.5"/>`),
  // Paris / carte / monuments (tour Eiffel stylisée + repères)
  paris:()=>svgWrap(`
    <circle cx="640" cy="100" r="120" fill="${PAL.ocre}" opacity="0.10"/>
    <path d="M400 80 l34 200 h-68 z" fill="none" stroke="${PAL.ink}" stroke-width="9"/>
    <path d="M381 190 h38 M372 250 h56" stroke="${PAL.ink}" stroke-width="9"/>
    <path d="M366 280 l34 -200 l34 200" fill="none" stroke="${PAL.ink}" stroke-width="9" stroke-linejoin="round"/>
    <path d="M400 60 v20" stroke="${PAL.ocre2}" stroke-width="8" stroke-linecap="round"/>
    <path d="M210 230 a26 26 0 1 1 0 0.1 z" fill="url(#ocg)"/><circle cx="210" cy="228" r="22" fill="url(#ocg)"/><circle cx="210" cy="222" r="8" fill="#fff"/><path d="M210 250 l-12 24 h24 z" fill="${PAL.ocre2}"/>
    <circle cx="600" cy="250" r="22" fill="${PAL.sky}"/><circle cx="600" cy="244" r="8" fill="#fff"/><path d="M600 272 l-12 24 h24 z" fill="${PAL.ink2}"/>
    <ellipse cx="400" cy="320" rx="200" ry="18" fill="${PAL.ink}" opacity="0.08"/>`)
};

// Applique les illustrations : remplace les .art-hero-img[data-illus] et .art-top[data-illus]
function applyIllus(){
  document.querySelectorAll('[data-illus]').forEach(el=>{
    const key=el.getAttribute('data-illus');
    if(ILLUS[key]){el.innerHTML=ILLUS[key]();el.classList.add('has-illus');}
  });
}
if(document.readyState!=='loading')applyIllus();else document.addEventListener('DOMContentLoaded',applyIllus);

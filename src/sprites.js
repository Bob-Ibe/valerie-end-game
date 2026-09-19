/* ============================================================
   PIXEL SPRITE ENGINE
   Elk personage is opgebouwd uit losse onderdelen (hoofd, romp,
   armen, benen) zodat ze los kunnen bewegen.
   ============================================================ */

const PAL_HER = {
  D: '#33200f', // haar donker (uitgroei)
  d: '#4d3018', // haar mid
  l: '#7f4c24', // haar caramel punten
  h: '#ffffff', // ooglicht
  S: '#f3c69f', // huid
  s: '#d9a175', // huid schaduw
  o: '#4a2f1c', // wenkbrauw
  E: '#2a1a12', // oog
  b: '#eb9a97', // blos
  m: '#c8455c', // lippen
  W: '#f7f1e4', // crème blazer
  w: '#dccfb7', // crème schaduw
  F: '#fffaf0', // ballerina's
  K: '#f4ead6', // tas
  G: '#cbbb9e', // hengsel
  OUT: '#2b1a11'
};

const PAL_HIM = {
  D: '#1e150e', // haar
  d: '#35251a', // haar krul-hooglicht
  S: '#c08a5f', // huid
  s: '#9c6a43', // huid schaduw
  L: '#d9a67f', // huid hooglicht (wangen, onderlip)
  o: '#4a3020', // wenkbrauw
  E: '#17100a', // oog
  a: '#f4f6f8', // airpod
  m: '#7a4b2c', // mond
  B: '#5b3d2c', // bruin overhemd
  b: '#412b1e', // overhemd schaduw
  n: '#dfe4ea', // ketting
  P: '#e2d4bd', // beige broek
  p: '#c6b59a', // broek schaduw
  F: '#fdfdfb', // sneaker
  X: '#16090f', // kruisjes bij knock-out
  OUT: '#1a120b'
};

/* ---------- ZIJ ---------- */
const HER = {
  pal: PAL_HER,
  hairBack: [
    '.......DDDDDDDD.......',
    '.....DDDDDDDDDDDD.....',
    '....DDDDDDDDDDDDDD....',
    '...DDDDDDDDDDDDDDDD...',
    '..DDDDDDDDDDDDDDDDDD..',
    '..DDDDDDDDDDDDDDDDDD..',
    '.DDDDDDDDDDDDDDDDDDDD.',
    '.DDDDDDDDDDDDDDDDDDDD.',
    '.DDDDDDDDDDDDDDDDDDDD.',
    'DDDDDDDDDDDDDDDDDDDDDD',
    'DDDDDDDDDDDDDDDDDDDDDD',
    'DDDDDDDDDDDDDDDDDDDDDD',
    'DDDDDDDDDDDDDDDDDDDDDD',
    '.DDDDD..........DDDDD.',
    '.DDDDD..........DDDDD.',
    '.DDDDd..........dDDDD.',
    '.DDDDD..........DDDDD.',
    '..DDDD..........DDDD..',
    '..DDDd..........dDDD..',
    '..DDDD..........DDDD..',
    '..DDDD..........DDDD..',
    '...DDD..........DDD...',
    '...DDd..........dDD...',
    '...DDD..........DDD...',
    '...Ddl..........ldD...',
    '....dl..........ld....',
    '....ll..........ll....',
    '....l............l....'
  ],
  hairSide: [
    '.DDD..............DDD.',
    '.DDD..............DDD.',
    '.DDDD............DDDD.',
    '.DDDD............DDDD.',
    '.DDd..............dDD.',
    '..DDD............DDD..',
    '..DDD............DDD..',
    '..DDDD..........DDDD..',
    '..dDD............DDd..',
    '...DD............DD...',
    '...dl............ld...',
    '...ll............ll...',
    '....l............l....'
  ],
  head: [
    '.....DDDDDDDD.....',
    '...DDDDDDDDDDDD...',
    '..DDDDDDddDDDDDD..',
    '.DDDDDDDddDDDDDDD.',
    '.DDllSSSSSSSSllDD.',
    '.DDSSSSSSSSSSSSDD.',
    '.DDSSSSSSSSSSSSDD.',
    '.DDSooSSSSSSooSDD.',
    '.DDSSSSSSSSSSSSDD.',
    '.DDShEESSSSEEhSDD.',
    '.DDSEEESSSSEEESDD.',
    '.DSSSSSSSSSSSSSSD.',
    '.DbSSSSSSSSSSSSbD.',
    '.DSSSSSmSSmSSSSSD.',
    '..DSSSSSmmSSSSSD..',
    '..DSSSSSSSSSSSSD..',
    '...DSSSSSSSSSSD...',
    '......sSSSSs......'
  ],
  torso: [
    '..WWWWWWWWWWWW..',
    '.WWWwSSSSSSwWWW.',
    '.WWWWwSSSSwWWWW.',
    '.WWWWWwSSwWWWWW.',
    '.WWWWWWwwWWWWWW.',
    '.WWWWWWWwWWWWWW.',
    '.WWWWWWwWWWWWWW.',
    '.WWWWWWwWWWWWWW.',
    '.WWWWWWwWWWWWWW.',
    '.WWWWWWwWWWWWWW.',
    '.WWWWWWwWWWWWWW.',
    '..WWWWWwWWWWWW..',
    '..WWWWWWWWWWWW..',
    '..wwwwwwwwwwww..'
  ],
  arm: [
    'WWWW','WWWW','WWWW','WWWW','WWWW','WWWW','WWWW','WWWW',
    '.ww.','.SS.','SSSS','.SS.'
  ],
  leg: [
    '.SS.','.SS.','.SS.','.SS.','.SS.','.SS.','.SS.','.SS.','.SS.','.SS.',
    '.ss.','FFFF','FFFF'
  ],
  bag: [
    '.G..G.',
    '.G..G.',
    'KKKKKK',
    'KKKKKK',
    'KKKKKK',
    '.KKKK.'
  ]
};

/* ---------- HIJ ---------- */
const HIM = {
  pal: PAL_HIM,
  headOff: { x: -2, y: -4 },
  headKo: [
    '.......DDDDDDDD.......',
    '.....DDdDDDDdDDDD.....',
    '....DdDDDdDDDdDDdD....',
    '...DDdDDdDDDdDDDdDD...',
    '..DDdDDDdDDDDdDDdDDD..',
    '..DdDDdDDDdDDDdDDDdD..',
    '..DDDDDDDDDDDDDDDDDD..',
    '..DDDSSSSSSSSSSSSDDD..',
    '..DDSSSSSSSSSSSSSSDD..',
    '..DDSSSSSSSSSSSSSSDD..',
    '..DDSXSSSXSSXSSSXSDD..',
    '..DSSSXSXSSSSXSXSSSD..',
    '..sSSSSXSSSSSSXSSSSs..',
    '..sSSSXSXSSSSXSXSSSs..',
    '..sSSXSSSXSSXSSSXSSs..',
    '...DSSSSSSssSSSSSSD...',
    '...DSSSSSSSSSSSSSSD...',
    '....SSSSSSmmSSSSSS....',
    '....SSSSSSSSSSSSSS....',
    '.....sSSSSSSSSSSs.....',
    '.......sSSSSSSs.......',
    '........sSSSSs........'
  ],
  head: [
    '.......DDDDDDDD.......',
    '.....DDdDDDDdDDDD.....',
    '....DdDDDdDDDdDDdD....',
    '...DDdDDdDDDdDDDdDD...',
    '..DDdDDDdDDDDdDDdDDD..',
    '..DdDDdDDDdDDDdDDDdD..',
    '..DDDDDDDDDDDDDDDDDD..',
    '..DDDSSSSSSSSSSSSDDD..',
    '..DDSSSSSSSSSSSSSSDD..',
    '..DDSSSSSSSSSSSSSSDD..',
    '..DDSSoooSSSSoooSSDD..',
    '..DSSSSSSSSSSSSSSSSD..',
    '..sSSSEEESSSSEEESSSs..',
    '..sSSSEEESSSSEEESSSs..',
    '..sSSSSSSSSSSSSSSSSs..',
    '...DSSSSSSssSSSSSSD...',
    '...DSSSmSSSSSSmSSSD...',
    '....SSSSmmmmmmSSSS....',
    '....SSSSSSSSSSSSSS....',
    '.....sSSSSSSSSSSs.....',
    '.......sSSSSSSs.......',
    '........sSSSSs........'
  ],
  torso: [
    '..BBBBBBBBBBBB..',
    '.BBBnSSSSSSnBBB.',
    '.BBBBnSSSSnBBBB.',
    '.BBBBBnSSnBBBBB.',
    '.BBBBBBnnBBBBBB.',
    '.BBBBBBBbBBBBBB.',
    '.BBBBBBBbBBBBBB.',
    '.BBBBBBBbBBBBBB.',
    '.BBBBBBBbBBBBBB.',
    '.BBBBBBBbBBBBBB.',
    '.BBBBBBBbBBBBBB.',
    '..BBBBBBbBBBBB..',
    '..BBBBBBBBBBBB..',
    '..PPPPPPPPPPPP..'
  ],
  arm: [
    'BBBB','BBBB','BBBB','BBBB','bbbb',
    '.SS.','.SS.','.SS.','.SS.','.SS.','SSSS','.SS.'
  ],
  leg: [
    'PPPp','PPPp','PPPp','PPPp','PPPp','PPPp','PPPp','PPPp','PPPp','PPPp',
    'pppp','FFFF','FFFF'
  ]
};

/* ---------- Props ---------- */
const PAL_PROP = { G:'#e9f1f3', R:'#8e1f3d', g:'#bcccd0', OUT:'#243036' };
const GLASS = [
  'GGGGG',
  'GRRRG',
  'GRRRG',
  'GRRRG',
  '.GRG.',
  '..G..',
  '..G..',
  '.GGG.',
  'GGGGG'
];

const PAL_ROCKET = { B:'#55604f', b:'#3a4437', M:'#26262a', H:'#2f2f33', OUT:'#141a13' };
const BAZOOKA = [
  '..BBBBBBBBBB....',
  '.BBBBBBBBBBBBB..',
  'BBBBBBBBBBBBBBMM',
  'BBBBBBBBBBBBBBMM',
  '.BBBBBBBBBBBBB..',
  '..BBBBHHBBBB....',
  '......HH........'
];

/* ============================================================
   RENDERER
   ============================================================ */
function px(x, y, w, h, fill, cls) {
  return '<rect' + (cls ? ' class="' + cls + '"' : '') +
    ' x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + fill + '"/>';
}

/* welke paletsleutels een class meekrijgen (voor losse effecten) */
const PX_CLASS = { E: 'px-eye', o: 'px-brow', m: 'px-mouth' };

function buildPart(map, pal, withOutline, ox, oy) {
  ox = ox || 0; oy = oy || 0;
  const h = map.length, w = map[0].length;
  const at = (x, y) => (y < 0 || y >= h || x < 0 || x >= w) ? '.' : map[y][x];
  let out = '';

  if (withOutline && pal.OUT) {
    for (let y = -1; y <= h; y++) {
      let run = null;
      for (let x = -1; x <= w + 1; x++) {
        let edge = false;
        if (at(x, y) === '.') {
          for (let dy = -1; dy <= 1 && !edge; dy++) {
            for (let dx = -1; dx <= 1; dx++) {
              if (dx === 0 && dy === 0) continue;
              if (at(x + dx, y + dy) !== '.') { edge = true; break; }
            }
          }
        }
        if (edge && run === null) run = x;
        if (!edge && run !== null) { out += px(ox + run, oy + y, x - run, 1, pal.OUT); run = null; }
      }
    }
  }

  for (let y = 0; y < h; y++) {
    let x = 0;
    while (x < w) {
      const c = map[y][x];
      if (c === '.') { x++; continue; }
      let x2 = x;
      while (x2 < w && map[y][x2] === c) x2++;
      out += px(ox + x, oy + y, x2 - x, 1, pal[c] || '#ff00ff', PX_CLASS[c]);
      x = x2;
    }
  }
  return out;
}

function checkMap(name, map) {
  const w = map[0].length;
  map.forEach((row, i) => {
    if (row.length !== w) console.error('MAP MISMATCH', name, 'rij', i, 'is', row.length, 'moet', w);
  });
}

/* ------------------------------------------------------------
   Layout. Elk onderdeel wordt met absolute coordinaten getekend
   (geen transform-attribuut) zodat CSS-transforms de positie
   niet overschrijven. MARGIN houdt ruimte voor de outline.
   ------------------------------------------------------------ */
const MARGIN_X = 9;
const MARGIN_Y = 5;
const LAYOUT = {
  hairBack: { x: 5,  y: 0  },
  legB:     { x: 11, y: 30 },
  legF:     { x: 17, y: 30 },
  armB:     { x: 5,  y: 18 },
  torso:    { x: 8,  y: 17 },
  head:     { x: 7,  y: 0  },
  armF:     { x: 23, y: 18 }
};

function part(cls, map, pal, pos, dx, dy) {
  return '<g class="' + cls + '">' +
    buildPart(map, pal, true, MARGIN_X + pos.x + (dx || 0), MARGIN_Y + pos.y + (dy || 0)) +
    '</g>';
}

function renderChar(def, opts) {
  opts = opts || {};
  const p = def.pal;

  ['leg','arm','torso','head'].forEach(k => checkMap(k, def[k]));

  let svg = '<ellipse class="shadow" cx="24.5" cy="48.4" rx="9" ry="1.7"/>';

  if (def.hairBack) {
    checkMap('hairBack', def.hairBack);
    svg += part('p-hairback', def.hairBack, p, LAYOUT.hairBack);
  }

  let inner = '';
  inner += part('p-leg p-legb', def.leg,   p, LAYOUT.legB);
  inner += part('p-leg p-legf', def.leg,   p, LAYOUT.legF);
  inner += part('p-arm p-armb', def.arm,   p, LAYOUT.armB);
  inner += part('p-torso',      def.torso, p, LAYOUT.torso);
  const headMap = (opts.ko && def.headKo) ? def.headKo : def.head;
  inner += part('p-head',       headMap,  p, LAYOUT.head, (def.headOff||{}).x, (def.headOff||{}).y);

  let front = buildPart(def.arm, p, true, MARGIN_X + LAYOUT.armF.x, MARGIN_Y + LAYOUT.armF.y);
  if (opts.bag && def.bag) {
    checkMap('bag', def.bag);
    front += '<g class="p-bag">' + buildPart(def.bag, p, true, MARGIN_X + LAYOUT.armF.x - 1, MARGIN_Y + LAYOUT.armF.y + 11) + '</g>';
  }
  if (opts.bazooka) {
    front += '<g class="p-bazooka">' + buildPart(BAZOOKA, PAL_ROCKET, true, MARGIN_X + LAYOUT.armF.x + 1, MARGIN_Y + LAYOUT.armF.y + 7) + '</g>';
  }
  if (opts.glass) {
    front += '<g class="p-glass">' + buildPart(GLASS, PAL_PROP, true, MARGIN_X + LAYOUT.armF.x, MARGIN_Y + LAYOUT.armF.y + 4) + '</g>';
  }
  inner += '<g class="p-arm p-armf">' + front + '</g>';

  if (def.hairSide) {
    checkMap('hairSide', def.hairSide);
    inner += part('p-hairside', def.hairSide, p, { x: LAYOUT.hairBack.x, y: 15 });
  }

  svg += '<g class="p-body">' + inner + '</g>';
  return '<svg class="sprite" viewBox="0 0 53 52" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg">' + svg + '</svg>';
}

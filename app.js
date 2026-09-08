/* ============================================================
   壽司地圖集 — 前端應用
   純靜態 SPA：hash 路由 + 記憶體狀態（無 localStorage）
   ============================================================ */

/* ---------- Icons ---------- */
const I = {
  gamepad:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 12h4M8 10v4M15 11h.01M18 13h.01"/><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.124-.01.216l-.002 6.758a3 3 0 0 0 4.77 2.42l1.9-1.42a2 2 0 0 1 1.24-.43h4.34a2 2 0 0 1 1.24.43l1.9 1.42a3 3 0 0 0 4.77-2.42V8.81c0-.092-.004-.164-.01-.216A4 4 0 0 0 17.32 5Z"/></svg>',
  users:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  cube:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.27 6.96 12 12.01l8.73-5.05"/><path d="M12 22.08V12"/></svg>',
  music:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>',
  download:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
  play:
    '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11-6.86a1 1 0 0 0 0-1.72l-11-6.86a1 1 0 0 0-1.5.86Z"/></svg>',
  imageMissing:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h.01M3 15l4-4 6 6M14 13l2-2 5 5"/></svg>',
  arrowRight:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  arrowLeft:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5M11 18l-6-6 6-6"/></svg>',
  alert:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"/><path d="M12 9v4M12 17h.01"/></svg>',
  info:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>',
  check:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>',
  sparkle:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/></svg>',
  musicNote:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 18V6l8-1.5v11"/><circle cx="6" cy="18" r="3"/><circle cx="19" cy="15.5" r="2.5"/></svg>',
  calendar:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
  heart:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
  external:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6M10 14 21 3"/></svg>',
};

/* ---------- Data ---------- */
const CHANNEL_URL = 'https://youtube.com/@sushi0830';
const yt = (id) => `https://youtu.be/${id}`;
const ytThumb = (id, size) =>
  size === 'max' ? `https://i.ytimg.com/vi/${id}/maxresdefault.jpg` : `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

/* Videos confirmed to have a maxresdefault thumbnail */
const MAXRES_OK = new Set(['DM1ol-3L7VY', 'WN65IErmg9M', 'fXhdGWyCMT4', 'bdlKq8-igpo', 'HJ7IDVlMhEY', 'yvZXj2GkZRo', 'pKb-0tTHiRM', 'OmGuQxyuhxE']);

const MAPS = [
  {
    id: 'the-puppet',
    name: 'The Puppet 木偶',
    types: ['恐怖', '解謎'],
    coverVideo: 'mfGRSfnnWzY',
    trailerVideo: 'mfGRSfnnWzY',
    shotVideos: [],
    players: null,
    version: 'Minecraft 基岩版（Bedrock）',
    versionNote: '不需安裝額外模組或材質包',
    date: '2025-11-15',
    release: '2025-11-15',
    releaseLabel: '系列第一代',
    short:
      '被不明力量操控的木偶、逐漸扭曲的房間——你的選擇會決定劇情走向，但決定不一定錯。不用安裝任何模組或材質包，下載後直接開玩。',
    brief: '選擇將決定劇情走向的恐怖解謎地圖。',
    restrictions: [
      '限基岩版（Bedrock 版）遊玩',
      '不需安裝額外模組或材質包',
      '音樂含版權，為網路公開音樂，如有冒犯會進行下架，製作遊戲影片需小心',
      '你的選擇會決定劇情走向，但決定不一定錯',
    ],
    downloads: [
      { label: '下載 The Puppet', hint: 'Google 雲端硬碟', url: 'https://drive.google.com/drive/folders/1OeOssdtKK0-IDFu0ZrmPijYaQ7cLgBRy' },
    ],
    youtubers: [
      { name: '菜雞的金金', videos: [{ url: yt('gwoLYsBA2yk') }] },
      { name: 'FirmanGameplay', videos: [{ url: yt('HJ7IDVlMhEY') }] },
      { name: 'Caveman8', videos: [{ url: yt('zb_2qLQZ-6s') }] },
      { name: 'MATTHEU GAMING', videos: [{ url: yt('yvZXj2GkZRo') }] },
      { name: 'CaibelTheStrategist', videos: [{ url: yt('kc6NFEusiBE') }] },
      { name: 'andiplays', videos: [{ url: yt('pKb-0tTHiRM') }] },
    ],
    pages: [
      { name: 'MCPEDL 地圖頁', url: 'https://mcpedl.com/the-puppet/' },
    ],
  },
  {
    id: 'the-puppet-2',
    name: 'The Puppet 2 木偶 2',
    types: ['恐怖', '解謎', '冒險'],
    coverVideo: 'DM1ol-3L7VY',
    trailerVideo: 'DM1ol-3L7VY',
    shotVideos: ['WN65IErmg9M', 'fXhdGWyCMT4'],
    players: null,
    version: 'Minecraft 基岩版（Bedrock）',
    versionNote: '需自行安裝模組與材質包，詳見下載前限制',
    date: '2026-05-20',
    release: '2026-05-20',
    releaseLabel: '最新作品',
    short:
      '木偶故事的新章節。延續前作的選擇機制，氣氛更壓迫、機關更刁鑽。提供中文版與英文版兩種下載，需要的模組與材質包可於 CurseForge 地圖頁面取得。',
    brief: '木偶續作：更壓迫的恐怖解謎冒險，中英雙版本。',
    restrictions: [
      '限基岩版（Bedrock 版）遊玩',
      '需要自行安裝模組與材質包（可於 CurseForge 地圖頁面取得）',
      '音樂含版權，且為線上公開音樂，如有任何違規行為將會被下架，製作遊戲影片時要小心',
      '你的選擇將決定劇情的走向，但這個決定不一定是錯誤的',
    ],
    dlWarning: '一定要下載另外三個重要的材質／資源包，地圖才能正常運作（材質包同樣收錄於 Google 雲端硬碟，兩邊都拿得到）',
    downloads: [
      { label: '下載中文版', hint: 'Google 雲端硬碟', url: 'https://drive.google.com/drive/folders/1GtEvc5Ser_s6KGm1ohbwH794YinBdsTy' },
      { label: '下載英文版', hint: 'Google 雲端硬碟', url: 'https://drive.google.com/drive/folders/1xjM_NUtJ4tfGRP2TLAeyHk260HJhwTkn' },
    ],
    youtubers: [
      { name: 'CaibelTheStrategist', videos: [{ url: yt('WN65IErmg9M') }, { url: yt('fXhdGWyCMT4') }, { url: yt('OmGuQxyuhxE') }] },
      { name: 'andiplays', videos: [{ url: yt('bdlKq8-igpo') }] },
    ],
    pages: [
      { name: 'CurseForge', url: 'https://www.curseforge.com/minecraft-bedrock/maps/the-puppet-2' },
    ],
  },
  {
    id: 'wu-yuan',
    name: '無怨',
    types: ['恐怖', '冒險'],
    coverVideo: null,
    trailerVideo: null,
    shotVideos: [],
    players: null,
    version: null,
    versionNote: null,
    date: null,
    release: null,
    releaseLabel: '製作中',
    wip: true,
    short: '全新製作中的恐怖冒險地圖。題材與玩法還在規劃階段，完成後會在這裡公開預告與下載資訊。',
    brief: '製作中的全新恐怖冒險地圖，敬請期待。',
    restrictions: [],
    downloads: [],
    youtubers: [],
    pages: [],
  },
];

const ALL_TYPES = ['恐怖', '冒險', '解謎', '跑酷', '生存'];

/* ---------- State (in-memory; 不依賴 localStorage) ---------- */
const state = {
  favs: new Set(),
};

const getMap = (id) => MAPS.find((m) => m.id === id);
const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

/* YouTube image with graceful maxres -> hq fallback (inline onerror avoids listener race) */
function ytImg(id, alt, lazy = true) {
  const src = MAXRES_OK.has(id) ? ytThumb(id, 'max') : ytThumb(id, 'hq');
  return `<img src="${src}" data-fallback="${ytThumb(id, 'hq')}" onerror="if(this.dataset.fallback&&this.src!==this.dataset.fallback)this.src=this.dataset.fallback" alt="${esc(alt)}"${lazy ? ' loading="lazy"' : ''} />`;
}

/* Letter avatar for YouTubers (deterministic color) */
function avatarHue(name) {
  let h = 0;
  for (const ch of name) h = (h * 31 + ch.codePointAt(0)) % 360;
  return h;
}
function ytrAvatar(name) {
  const initial = esc(name.trim().charAt(0).toUpperCase());
  const hue = avatarHue(name);
  return `<div class="ytr-avatar" aria-hidden="true"><div class="ph" style="background:linear-gradient(135deg,hsl(${hue} 62% 46%),hsl(${(hue + 40) % 360} 62% 32%))">${initial}</div></div>`;
}

/* ---------- Shared partials ---------- */
function tagChips(map) {
  const typeTag = (t) => {
    const cls = t === '恐怖' ? 'tag-t-horror' : t === '冒險' ? 'tag-t-adventure' : 'tag-t-puzzle';
    return `<span class="tag ${cls}">${I.gamepad}${esc(t)}</span>`;
  };
  return map.types.map(typeTag).join('') + `<span class="tag tag-bedrock">${I.cube}基岩版</span>`;
}

function noCoverHtml(label = '尚未提供圖片') {
  return `
    <div class="no-cover" role="img" aria-label="${esc(label)}">
      <div class="icon">${I.imageMissing}</div>
      <div class="text">${esc(label)}</div>
    </div>`;
}

/* ---------- Home: hero ---------- */
function heroHtml() {
  return `
  <section class="hero">
    <div class="hero-media">
      <img src="./assets/hero.png" alt="昏暗木偶劇院中的方塊世界場景" />
    </div>
    <div class="hero-content">
      <div class="container">
        <span class="hero-kicker">${I.sparkle} 壽司的自製地圖集</span>
        <h1 class="hero-title">在恐懼與謎團之間，找到你的下一張地圖</h1>
        <p class="hero-desc">基岩版恐怖・冒險・解謎自製地圖。看玩法、看版本、看限制，也看實況主怎麼玩——下載前一次判斷清楚。</p>
      </div>
    </div>
  </section>`;
}

/* ---------- Home: cards ---------- */
function cardHtml(map) {
  const cover = map.coverVideo
    ? ytImg(map.coverVideo, map.name + ' 封面')
    : noCoverHtml('檔案缺少圖片');
  const wipBadge = map.wip ? `<span class="card-badge-wip">製作中</span>` : '';
  const version = map.version ? esc(map.version) : '版本尚未提供';
  const restrictBrief = map.restrictions.length ? esc(map.restrictions[0]) : '下載前限制尚未提供';
  return `
  <article class="map-card">
    <a class="map-card-link" href="#/map/${map.id}" aria-label="查看 ${esc(map.name)} 介紹">
      ${cover}
      ${wipBadge}
      <span class="view-hint">${I.arrowRight} 查看詳情</span>
      <div class="map-card-hovertext">
        <strong>${esc(map.name)}</strong>
        ${esc(map.brief)}
      </div>
    </a>
    <div class="map-card-body">
      <div class="map-card-title-row">
        <h3 class="map-card-title"><a href="#/map/${map.id}">${esc(map.name)}</a></h3>
        <div class="map-card-actions">
          <button class="fav-btn" data-fav="${esc(map.id)}" aria-label="收藏 ${esc(map.name)}（暫不會保存）" title="收藏（原型暫不保存）">${I.heart}</button>
        </div>
      </div>
      <div class="tag-row">${tagChips(map)}</div>
      <div class="card-meta">
        <p class="meta-line">${I.cube}<span><span class="meta-label">版本</span> ${version}</span></p>
        <p class="meta-line">${I.alert}<span><span class="meta-label">限制</span> ${restrictBrief}</span></p>
      </div>
      <a class="btn btn-ghost btn-details" href="#/map/${map.id}">${I.arrowRight} 查看詳情</a>
    </div>
  </article>`;
}

function liveCardHtml(entry) {
  return `
  <a class="live-card" href="${esc(entry.url)}" target="_blank" rel="noopener noreferrer" aria-label="${esc(entry.ytr)} 遊玩 ${esc(entry.mapName)} 的影片">
    <div class="live-thumb">
      ${ytImg(entry.videoId, entry.ytr + ' 遊玩 ' + entry.mapName)}
    </div>
    <span class="live-ytr"><span class="dot" aria-hidden="true"></span>${esc(entry.ytr)}</span>
    <span class="live-map">地圖：${esc(entry.mapName)}</span>
  </a>`;
}

function liveSectionHtml() {
  const entries = [];
  for (const m of MAPS) {
    for (const g of m.youtubers) {
      for (const v of g.videos) {
        const id = v.url.split('/').pop();
        entries.push({ ytr: g.name, mapName: m.name, url: v.url, videoId: id });
      }
    }
  }
  return `
  <section class="live-section container" id="live" aria-labelledby="live-title">
    <div class="section-head">
      <div>
        <h2 class="section-title" id="live-title">實況區</h2>
        <p class="live-hint">哪張地圖被哪位 YouTuber 玩過，一看就知道。</p>
      </div>
      <span class="result-count">${entries.length} 部實況影片</span>
    </div>
    <div class="live-grid">
      ${entries.map(liveCardHtml).join('')}
    </div>
  </section>`;
}

/* ---------- Home ---------- */
function trailerCardHtml(map) {
  if (!map.trailerVideo) {
    return `
    <figure class="trailer-card">
      <div class="trailer-empty">${I.imageMissing}<span>${esc(map.name)}：預告尚未公開</span></div>
      <figcaption class="trailer-meta">
        <span class="trailer-name">${esc(map.name)}</span>
        <span class="trailer-sub">${esc(map.releaseLabel)}・預告製作中</span>
      </figcaption>
    </figure>`;
  }
  return `
  <figure class="trailer-card">
    <div class="trailer-embed">
      <button class="trailer-facade" data-video="${map.trailerVideo}" aria-label="播放 ${esc(map.name)} 官方預告">
        ${ytImg(map.trailerVideo, map.name + ' 預告片', false)}
        <span class="trailer-play" aria-hidden="true">${I.play}</span>
      </button>
    </div>
    <figcaption class="trailer-meta">
      <span class="trailer-name">${esc(map.name)}</span>
      <span class="trailer-sub">${esc(map.releaseLabel)}・官方預告</span>
    </figcaption>
  </figure>`;
}

function trailerCardHtml(map) {
  if (!map.trailerVideo) {
    return `
    <figure class="trailer-card">
      <div class="trailer-empty">${I.imageMissing}<span>${esc(map.name)}：預告尚未公開</span></div>
      <figcaption class="trailer-meta">
        <span class="trailer-name">${esc(map.name)}</span>
        <span class="trailer-sub">${esc(map.releaseLabel)}・預告製作中</span>
      </figcaption>
    </figure>`;
  }
  return `
  <figure class="trailer-card">
    <div class="trailer-embed">
      <button class="trailer-facade" data-video="${map.trailerVideo}" aria-label="播放 ${esc(map.name)} 官方預告">
        ${ytImg(map.trailerVideo, map.name + ' 預告片', false)}
        <span class="trailer-play" aria-hidden="true">${I.play}</span>
      </button>
    </div>
    <figcaption class="trailer-meta">
      <span class="trailer-name">${esc(map.name)}</span>
      <span class="trailer-sub">${esc(map.releaseLabel)}・官方預告</span>
    </figcaption>
  </figure>`;
}

function renderHome() {
  const list = [...MAPS].sort((a, b) => (b.release || '').localeCompare(a.release || ''));
  return `
  ${heroHtml()}
  <section class="trailer-section container" aria-labelledby="home-switch-title">
    <div class="section-head">
      <h2 class="section-title" id="home-switch-title">精選內容</h2>
      <div class="home-switch" role="tablist" aria-label="選擇內容類型">
        <button class="home-switch-btn active" role="tab" aria-selected="true" data-home-view="trailers">${I.play} 預告</button>
        <button class="home-switch-btn" role="tab" aria-selected="false" data-home-view="maps">${I.cube} 地圖</button>
      </div>
    </div>

    <div class="home-view" id="view-trailers" role="tabpanel" aria-label="預告">
      <p class="live-hint">點一下影片，直接在頁面上播放。</p>
      <div class="trailer-grid">
        ${MAPS.map(trailerCardHtml).join('')}
      </div>
    </div>

    <div class="home-view" id="view-maps" role="tabpanel" aria-label="地圖" hidden>
      <div class="map-grid">${list.map(cardHtml).join('')}</div>
    </div>
  </section>
  ${creatorStripHtml()}`;
}


function creatorStripHtml() {
  return `
  <section class="creator-strip">
    <div class="container">
      <div class="creator-info">
        <h2>關於壽司 Sushi</h2>
        <p>一位專注於基岩版恐怖・冒險・解謎地圖的創作者。追蹤 YouTube 頻道，第一時間看到新地圖預告與實況。無怨製作完成後也會在這裡公開。</p>
      </div>
      <div class="creator-cta">
        <a class="btn btn-primary" href="${CHANNEL_URL}" target="_blank" rel="noopener noreferrer">${I.play} 前往 YouTube 頻道</a>
        <a class="btn btn-ghost" href="#/live">${I.users} 看看誰玩過</a>
      </div>
    </div>
  </section>`;
}

/* ---------- Detail ---------- */
function ytrCardHtml(map, g) {
  const chips = g.videos
    .map(
      (v, i) =>
        `<a class="ytr-video-chip" href="${esc(v.url)}" target="_blank" rel="noopener noreferrer">${I.play}<span class="num">${i + 1}</span>遊玩影片</a>`
    )
    .join('');
  return `
  <div class="ytr-card">
    ${ytrAvatar(g.name)}
    <div class="ytr-info">
      <span class="ytr-name">${esc(g.name)}</span>
      <div class="ytr-videos">${chips}</div>
    </div>
  </div>`;
}

function factHtml(label, icon, value) {
  const empty = !value;
  return `
  <div class="fact">
    <span class="fact-label">${icon} ${esc(label)}</span>
    <span class="fact-value ${empty ? 'empty' : ''}">${empty ? '尚未提供' : esc(value)}</span>
  </div>`;
}

function shotsHtml(map) {
  if (!map.shotVideos.length) {
    return `
    <div class="shot-empty">
      ${I.imageMissing}
      <span>目前沒有可用圖片</span>
    </div>`;
  }
  return `<div class="shot-grid">
    ${map.shotVideos
      .map(
        (id) => `
      <a class="shot" href="${yt(id)}" target="_blank" rel="noopener noreferrer" aria-label="玩法截圖，點擊開啟影片">
        ${ytImg(id, map.name + ' 玩法截圖')}
        <span class="shot-cap">${I.play} 點擊開啟實況影片</span>
      </a>`
      )
      .join('')}
  </div>`;
}

function restrictionsHtml(map) {
  if (!map.restrictions.length) {
    return `<div class="shot-empty" style="aspect-ratio:auto">${I.info}<span>下載前限制尚未提供</span></div>`;
  }
  return `<ul class="restrict-list" role="list">
    ${map.restrictions.map((r) => `<li class="restrict-item">${I.alert}<span>${esc(r)}</span></li>`).join('')}
  </ul>`;
}

function downloadPanelHtml(map) {
  if (map.wip || !map.downloads.length) {
    return `
    <section class="panel" aria-label="下載">
      <h2 class="panel-title">${I.download} 下載</h2>
      <div class="download-note">${I.info}<span>此地圖尚未完成，下載入口將在製作完成後開放。</span></div>
      <a class="btn btn-ghost btn-block" href="${CHANNEL_URL}" target="_blank" rel="noopener noreferrer">${I.play} 做好了通知我（YouTube 頻道）</a>
    </section>`;
  }
  return `
  <section class="panel" id="download-panel" aria-label="下載">
    <h2 class="panel-title">${I.download} 下載</h2>
    ${
      map.dlWarning
        ? `<div class="restrict-item" style="margin-block-end:var(--space-4)">${I.alert}<span><strong>重要：</strong>${esc(map.dlWarning)}</span></div>`
        : ''
    }
    <div class="download-panel">
      ${map.downloads
        .map(
          (d, i) => `
        <button class="btn btn-green btn-block" data-dl="${esc(map.id)}" data-dl-edition="${esc(d.label)}">
          ${I.download} ${esc(d.label)}
        </button>
        <p class="download-note">${I.info}<span>${esc(d.hint)}</span></p>`
        )
        .join('')}
    </div>
  </section>`;
}

function trailerHtml(map) {
  if (!map.trailerVideo) return '';
  return `
  <section class="panel" aria-label="官方預告">
    <h2 class="panel-title">${I.play} 官方預告</h2>
    <div class="shot-grid" style="grid-template-columns:1fr">
      <a class="shot" href="${yt(map.trailerVideo)}" target="_blank" rel="noopener noreferrer" aria-label="在 YouTube 觀看 ${esc(map.name)} 預告片">
        ${ytImg(map.trailerVideo, map.name + ' 預告片縮圖', false)}
        <span class="shot-cap">${I.play} 前往 YouTube 觀看預告</span>
      </a>
    </div>
  </section>`;
}

function renderDetail(map) {
  const cover = map.coverVideo
    ? ytImg(map.coverVideo, map.name + ' 封面', false)
    : noCoverHtml('檔案缺少圖片');

  return `
  <section class="detail-hero">
    <div class="detail-hero-media">${cover}</div>
  </section>
  <div class="back-bar">
    <div class="container">
      <a class="btn-back" href="#/">${I.arrowLeft} 返回地圖列表</a>
    </div>
  </div>
  <div class="container detail-head">
    <div class="detail-title-block">
      <div>
        ${map.wip ? '<span class="detail-status">' + I.alert + ' 製作中 — 尚未開放下載</span><br>' : ''}
        <h1 class="detail-title">${esc(map.name)}</h1>
        <div class="tag-row" style="margin-block-start:var(--space-4)">${tagChips(map)}</div>
      </div>
    </div>
    <div class="facts">
      ${factHtml('遊玩人數', I.users, map.players)}
      ${factHtml('支援版本', I.cube, map.version ? map.version + (map.versionNote ? '・' + map.versionNote : '') : null)}
      ${factHtml('玩法類型', I.gamepad, map.types.join('・'))}
      ${factHtml('作品狀態', I.calendar, map.releaseLabel)}
    </div>
  </div>
  <div class="container detail-body">
    <div class="detail-main">
      <section class="panel" aria-label="玩法說明">
        <h2 class="panel-title">${I.sparkle} 玩法說明</h2>
        <p class="detail-desc">${esc(map.short)}</p>
      </section>
      ${map.shotVideos.length ? `<section class="panel" aria-label="觀看預告">
        <h2 class="panel-title">${I.imageMissing} 觀看預告</h2>
        ${shotsHtml(map)}
      </section>` : ''}
      ${
        map.youtubers.length
          ? `<section class="panel" aria-label="YouTuber 實況紀錄">
        <h2 class="panel-title">${I.users} 誰玩過這張地圖</h2>
        <div class="ytr-list">
          ${map.youtubers.map((g) => ytrCardHtml(map, g)).join('')}
        </div>
      </section>`
          : `<section class="panel" aria-label="YouTuber 實況紀錄">
        <h2 class="panel-title">${I.users} 誰玩過這張地圖</h2>
        <div class="shot-empty" style="aspect-ratio:auto">${I.info}<span>還沒有實況紀錄，等你來當第一個</span></div>
      </section>`
      }
      ${trailerHtml(map)}
    </div>
    <aside class="detail-aside">
      <section class="panel" aria-label="下載前限制">
        <h2 class="panel-title">${I.alert} 下載前限制</h2>
        ${restrictionsHtml(map)}
      </section>
      ${downloadPanelHtml(map)}
      ${
        map.pages.length
          ? `<section class="panel" aria-label="地圖頁面">
        <h2 class="panel-title">${I.external} 地圖頁面</h2>
        ${map.pages
          .map(
            (p) =>
              `<a class="btn btn-ghost btn-block" href="${esc(p.url)}" target="_blank" rel="noopener noreferrer">${I.external} ${esc(p.name)}</a>`
          )
          .join('')}
      </section>`
          : ''
      }
    </aside>
  </div>
  ${creatorStripHtml()}`;
}

/* ---------- Live page (實況區獨立頁) ---------- */
function renderLivePage() {
  return `
  <div class="back-bar">
    <div class="container">
      <a class="btn-back" href="#/">${I.arrowLeft} 返回地圖列表</a>
    </div>
  </div>
  ${liveSectionHtml()}
  ${creatorStripHtml()}`;
}

/* ---------- Download confirm modal ---------- */
function showDownloadConfirm(map, editionLabel) {
  const root = document.getElementById('modal-root');
  root.innerHTML = `
  <div class="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="dl-modal-title">
    <div class="modal">
      <div class="modal-icon">${I.check}</div>
      <h3 id="dl-modal-title">下載入口已準備！</h3>
      <p><span class="map-name">${esc(map.name)}${editionLabel ? ' — ' + esc(editionLabel) : ''}</span>的下載頁即將開啟，準備好進入地圖了嗎？</p>
      <div class="modal-actions">
        <a class="btn btn-green" id="dl-go" href="#">${I.download} 前往下載頁</a>
        <button class="btn btn-ghost" id="dl-cancel">返回介紹頁</button>
      </div>
      <p class="download-note" style="justify-content:center">${I.info}<span>原型提示：實際檔案由 Google 雲端硬碟提供。</span></p>
    </div>
  </div>`;

  const dl = map.downloads.find((d) => d.label === editionLabel) || map.downloads[0];
  const goBtn = document.getElementById('dl-go');
  goBtn.href = dl.url;
  goBtn.target = '_blank';
  goBtn.rel = 'noopener noreferrer';

  document.getElementById('dl-cancel').addEventListener('click', closeModal);
  root.querySelector('.modal-overlay').addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) closeModal();
  });
  document.addEventListener('keydown', escCloseModal);
  goBtn.focus();
}

function escCloseModal(e) {
  if (e.key === 'Escape') closeModal();
}

function closeModal() {
  document.getElementById('modal-root').innerHTML = '';
  document.removeEventListener('keydown', escCloseModal);
}

/* ---------- Router ---------- */
function render() {
  const app = document.getElementById('app');
  const hash = location.hash || '#/';
  let html;

  if (hash.startsWith('#/map/')) {
    const id = decodeURIComponent(hash.replace('#/map/', ''));
    const map = getMap(id);
    html = map
      ? renderDetail(map)
      : `<div class="container"><div class="empty-state" style="padding-block:var(--space-24)"><div class="icon">${I.imageMissing}</div><h3>找不到這張地圖</h3><p>它可能還在礦坑深處，回首頁看看其他地圖吧。</p><a class="btn btn-primary" href="#/">${I.arrowLeft} 返回首頁</a></div></div>`;
    document.title = map ? `${map.name} — 壽司地圖集` : '找不到地圖 — 壽司地圖集';
  } else if (hash === '#/live') {
    html = renderLivePage();
    document.title = '實況區 — 壽司地圖集';
  } else {
    html = renderHome();
    document.title = '壽司地圖集 — Minecraft 自製地圖部落格';
  }

  app.innerHTML = `<div class="route-enter">${html}</div>`;
  app.focus({ preventScroll: true });

  // In-page anchors (#live / #trailers) scroll after render
  if (!hash.startsWith('#/') && hash !== '#' && hash !== '') {
    const el = document.getElementById(hash.slice(1));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  } else {
    window.scrollTo(0, 0);
  }

  syncMenuContext(hash);
}

/* ---------- Menu (context-aware) ---------- */
function syncMenuContext(hash) {
  const dlItem = document.getElementById('menu-dl');
  if (!dlItem) return;
  if (hash.startsWith('#/map/')) {
    const map = getMap(decodeURIComponent(hash.replace('#/map/', '')));
    dlItem.hidden = !(map && map.downloads.length);
  } else {
    dlItem.hidden = true;
  }

  // highlight current page item
  document.querySelectorAll('.menu-item[href^="#"]').forEach((a) => {
    a.classList.toggle('active', a.getAttribute('href') === hash || (hash === '' && a.getAttribute('href') === '#/'));
  });
}

(function initMenu() {
  const btn = document.getElementById('menu-btn');
  const menu = document.getElementById('menu-dropdown');

  function closeMenu() {
    menu.hidden = true;
    btn.setAttribute('aria-expanded', 'false');
  }

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.hidden = !menu.hidden;
    btn.setAttribute('aria-expanded', String(!menu.hidden));
  });

  document.addEventListener('click', (e) => {
    if (!menu.hidden && !e.target.closest('.menu-wrap')) closeMenu();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !menu.hidden) {
      closeMenu();
      btn.focus();
    }
  });

  menu.querySelectorAll('.menu-item').forEach((el) => el.addEventListener('click', () => closeMenu()));

  document.getElementById('menu-dl').addEventListener('click', () => {
    const panel = document.getElementById('download-panel');
    if (panel) panel.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
})();

/* ---------- Theme (menu switch: 預設模式 / 黑暗模式) ---------- */
(function initTheme() {
  let mode = matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light';

  function setTheme(m) {
    mode = m;
    document.documentElement.setAttribute('data-theme', m);
    document.querySelectorAll('[data-set-theme]').forEach((b) => {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-set-theme') === m));
    });
  }

  document.querySelectorAll('[data-set-theme]').forEach((b) =>
    b.addEventListener('click', () => setTheme(b.getAttribute('data-set-theme')))
  );
  setTheme(mode);
})();

/* ---------- Global event delegation ---------- */
document.addEventListener('click', (e) => {
  const favBtn = e.target.closest('[data-fav]');
  if (favBtn) {
    e.preventDefault();
    e.stopPropagation();
    const id = favBtn.getAttribute('data-fav');
    if (state.favs.has(id)) {
      state.favs.delete(id);
      favBtn.style.color = '';
    } else {
      state.favs.add(id);
      favBtn.style.color = 'var(--color-primary)';
    }
    return;
  }

  const dlBtn = e.target.closest('[data-dl]');
  if (dlBtn) {
    e.preventDefault();
    const map = getMap(dlBtn.getAttribute('data-dl'));
    const edition = dlBtn.getAttribute('data-dl-edition');
    if (map) showDownloadConfirm(map, edition);
    return;
  }

  // Home view switch (預告 / 地圖)
  const swBtn = e.target.closest('[data-home-view]');
  if (swBtn) {
    const view = swBtn.getAttribute('data-home-view');
    document.querySelectorAll('[data-home-view]').forEach((b) => {
      const on = b === swBtn;
      b.classList.toggle('active', on);
      b.setAttribute('aria-selected', String(on));
    });
    document.getElementById('view-trailers').hidden = view !== 'trailers';
    document.getElementById('view-maps').hidden = view !== 'maps';
    return;
  }

  // Trailer click-to-play: swap facade for YouTube embed
  const facade = e.target.closest('.trailer-facade');
  if (facade) {
    const id = facade.getAttribute('data-video');
    const embed = facade.parentElement;
    embed.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0" title="官方預告" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  }
});

/* Image fallback: maxres -> hq */
document.addEventListener(
  'error',
  (e) => {
    const img = e.target;
    if (img && img.tagName === 'IMG' && img.dataset.fallback && img.src !== img.dataset.fallback) {
      img.src = img.dataset.fallback;
    }
  },
  true
);

/* ---------- Boot ---------- */
window.addEventListener('hashchange', render);
render();

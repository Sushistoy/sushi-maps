# 壽司地圖集 — 自己編輯指南

這是一個純靜態網站，不用任何資料庫或付費服務，全部只有三種檔案：

## 檔案說明

| 檔案 | 內容 | 你會改到的部分 |
| --- | --- | --- |
| `index.html` | 頁面骨架、右上角選單文字 | 改選單項目名稱、標題 |
| `app.js` | **所有地圖資料 + 頁面邏輯**（最重要） | 99% 的修改都在這裡 |
| `style.css` / `base.css` | 外觀（顏色、字體、間距） | 想改配色時 |

## app.js 裡的 MAPS 資料（最常用）

打開 `app.js`，最上面就是 `const MAPS = [...]`，每張地圖是一個物件：

```js
{
  id: 'the-puppet-2',           // 網址用，不要改
  name: 'The Puppet 2 木偶 2',   // 顯示名稱
  coverVideo: 'DM1ol-3L7VY',    // YouTube 影片 ID（網址 watch?v= 後面那串）
  trailerVideo: 'DM1ol-3L7VY',  // 首頁「最新預告」用的影片
  shotVideos: ['WN65IErmg9M'],  // 詳細頁「玩法預覽」截圖影片（空陣列 = 不顯示）
  downloads: [
    { label: '下載中文版', hint: 'Google 雲端硬碟', url: 'https://...' },
  ],
  ytr: [ { name: '頻道名', video: '影片ID' }, ... ],  // 詳細頁「誰玩過」＋實況區
}
```

### 常見修改

- **換 / 新增影片**：把 YouTube 網址 `watch?v=XXXX` 裡的 `XXXX` 貼進對應欄位
- **新增地圖**：複製一整組 `{ ... },` 貼上改內容，首頁會自動出現
- **新增 YouTuber 實況**：在地圖的 `ytr:` 陣列加一行 `{ name: '頻道名', video: '影片ID' }`
- **改下載連結**：換 `downloads` 裡的 `url`
- **材質包提醒**：`dlWarning: '...'` 那行（The Puppet 2 有，要改文字直接改）

## 怎麼預覽

全部檔案是純前端，直接用瀏覽器打開 `index.html` 就能看，不需要安裝任何東西。

## 免費發佈到網路上（給別人一個固定網址）

1. **GitHub Pages**（免費）：開 GitHub 帳號 → 新增 Repository → 上傳這些檔案 → Settings → Pages → 選 main 分支，就有一個 `帳號.github.io/專案` 網址
2. **Netlify Drop**（免費、最快）：到 app.netlify.com/drop，把整個資料夾拖進去，30 秒拿到網址
3. **Vercel**（免費）：類似 Netlify

之後每次改檔案再上傳一次就會更新。

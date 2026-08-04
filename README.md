# Amara Landing Page

Build a single-page landing site for "Amara", a cozy indie PC game by Pixel Pond. Use React + Tailwind CSS. Import the Nunito font from Google Fonts.

COLOR PALETTE (use these exact hex values as Tailwind arbitrary values):
- Pink light bg: #F9EEF0
- Pink surface: #FBEAF0
- Pink border: #F4C0D1
- Pink mid: #ED93B1
- Dark rose: #72243E
- Rose: #993556
- Hot pink: #D4537E

LAYOUT — one long scrollable page with these sections in order:

---
SECTION 1: HERO
- Full-width block, bg #F9EEF0, rounded-2xl, padding py-14 px-8, text-center
- Small pill badge at top: text "Coming Q1 2027 · PC", bg #72243E, text #F4C0D1, rounded-full, text-xs font-bold uppercase tracking-widest
- Game title "Amara" in 56px, font-black, color #72243E, with a "." in #D4537E
- Subtitle: "A cozy café game... with a twist." — text-lg font-semibold color #993556
- Byline: "An indie game by Pixel Pond" — text-sm color #72243E opacity-70
- Description paragraph (max-w-lg mx-auto): "Brew beautiful drinks, serve talking cats, and manage your little café — while a deeper, darker story slowly unfolds around you." — text-sm color #72243E opacity-80
- Row of pill tags: "Narrative management", "Singleplayer", "5–9 hours", "EN & PT" — bg #FBEAF0, border #F4C0D1, text #72243E, text-xs font-semibold rounded-full px-3 py-1
- Decorative text row of cat faces: "ᓚᘏᗢ   ᓚᘏᗢ   ᓚᘏᗢ" — opacity-40 text-2xl tracking-widest

---
SECTION 2: FEATURES
- Section label: "Features" — text-xs font-bold uppercase tracking-widest text #D4537E
- Heading: "What you'll do in Amara" — text-2xl font-bold
- Subtext: "Two interwoven loops — run the café by day, live Rebeca's personal story by night."
- 6-card grid (3 cols on desktop, 2 on tablet, 1 on mobile), each card: white bg, border border-[#F4C0D1]/50, rounded-xl, p-4
  Card 1 — icon: Coffee — title: "Craft authentic drinks" — desc: "Research-driven recipes inspired by real barista culture. Follow the employee manual to perfect every layer."
  Card 2 — icon: Cat — title: "Serve peculiar guests" — desc: "Your customers are talking cats with personalities, orders, and patience meters."
  Card 3 — icon: TrendingUp — title: "Grow your reputation" — desc: "Earn REP, level up, and expand your space. Restock via in-game tablet."
  Card 4 — icon: BookOpen — title: "Write in your diary" — desc: "Each night, Rebeca writes. Unlock story elements and reveal what lies beneath the surface."
  Card 5 — icon: Moon — title: "Dual gameplay loop" — desc: "Café management by day. Narrative-driven personal moments by night."
  Card 6 — icon: GitBranch — title: "Multiple endings" — desc: "30 in-game days. Your choices shape the outcome — some routes lead somewhere unexpected."
  Icon container: w-10 h-10 rounded-lg bg-[#FBEAF0] flex items-center justify-center, icon color #993556
  Card title: text-sm font-bold
  Card desc: text-xs text-muted-foreground leading-relaxed

---
SECTION 3: MENU
- Section label: "On the menu"
- Heading: "Drinks & food to serve"
- Subtext: "Mix, layer, and pour — every item is a small craft challenge."
- 6-card grid (auto-fit, min 130px), each card: bg-muted rounded-lg p-3 text-center border border-[#F4C0D1]/30
  Items: ☕ Espresso (Hot drink) · 🧋 Latte (Hot drink) · 🍫 Chocolate mocha (Specialty) · 🍮 Caramel mocha (Specialty) · 🥐 Pastries (Food) · 🍰 Café sweets (Food)
  Emoji: text-3xl block mb-1
  Name: text-sm font-bold
  Type: text-xs text-muted-foreground

---
SECTION 4: SPECS
- Section label: "Game info"
- Heading: "At a glance"
- 6 stat cards in a responsive row, bg-muted rounded-lg p-3:
  Studio: Pixel Pond · Genre: Narrative management · Platform: PC · Dev stage: Alpha · Release: Q1 2027 · Length: 5–9 hours
  Label: text-xs text-muted-foreground
  Value: text-sm font-bold

---
SECTION 5: FOLLOW
- Full-width block bg-[#F9EEF0] rounded-2xl py-8 px-6 text-center
- Heading: "Follow along" — text-xl font-bold color #72243E
- Subtext: "We're a small team of friends — your support means the world to us." — text-sm color #993556
- Row of social buttons (flex wrap justify-center gap-2):
  Each button: bg-[#FBEAF0] border border-[#F4C0D1] rounded-lg px-4 py-2 text-sm font-bold color #72243E, hover bg-[#F4C0D1]
  Buttons: Instagram (link: https://instagram.com/amarathegame) · Discord · TikTok · YouTube (@amarathegameen) · Linktree
  Use lucide-react icons: Instagram, MessageCircle for Discord, Music2 for TikTok, Youtube, Link

---
FOOTER
- text-center py-4
- "Pixel Pond" — text-sm font-bold color #D4537E tracking-wide
- "A multidisciplinary indie team making meaningful games together." — text-xs text-muted-foreground mt-1

---
GLOBAL STYLES:
- Font: Nunito for everything
- Page bg: white
- Max content width: max-w-3xl mx-auto px-4
- Sections separated by a thin hr border-[#F4C0D1]/30
- Smooth, clean, no shadows, no gradients
- All section labels, headings, and subtext follow the same spacing pattern: label → heading → subtext → content

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/1e9ecadc-40db-4f80-84f7-b7262968e162).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

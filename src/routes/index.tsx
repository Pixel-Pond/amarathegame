import { createFileRoute } from "@tanstack/react-router";
import {
  Coffee,
  Cat,
  TrendingUp,
  BookOpen,
  Moon,
  GitBranch,
  Youtube,
  Link as LinkIcon,
  Sun,
  Bed,
} from "lucide-react";
import amaraTitle from "@/assets/amara-title.png";
import amaraCat from "@/assets/amara-cat.png";
import amaraCafe from "@/assets/amara-cafe.png";
import amaraEquipment from "@/assets/amara-equipment.png";
import amaraRooms from "@/assets/amara-rooms.png";
import iconInstagram from "@/assets/icon-instagram.png";
import iconDiscord from "@/assets/icon-discord.png";
import iconTiktok from "@/assets/icon-tiktok.png";
import laptop from "@/assets/laptop.png";
import coffeeBean from "@/assets/coffee-bean.png";
import sparkle from "@/assets/sparkle.png";
import surprise from "@/assets/surprise.png";
import question from "@/assets/question.png";
import pixelPondLogo from "@/assets/pixel-pond-logo.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Amara — A cozy café game with a twist | Pixel Pond" },
      {
        name: "description",
        content:
          "Amara is a cozy narrative-driven management game by Pixel Pond. Craft drinks, serve talking cats, and uncover a deeper story. Coming Q2 2027 on PC.",
      },
      { property: "og:title", content: "Amara — A cozy café game with a twist" },
      {
        property: "og:description",
        content: "An indie narrative-driven management game by Pixel Pond. Coming Q2 2027 on PC.",
      },
    ],
  }),
});

const features = [
  { Icon: Coffee, title: "Craft authentic drinks", desc: "Research-driven recipes inspired by real barista culture. Follow the employee manual to perfect every layer." },
  { Icon: Cat, title: "Serve peculiar guests", desc: "Your customers are talking cats with personalities, orders, and patience meters." },
  { Icon: TrendingUp, title: "Grow your reputation", desc: "Earn REP, level up, and expand your space. Restock via in-game tablet." },
  { Icon: BookOpen, title: "Write in your diary", desc: "Each night, Rebeca writes. Unlock story elements and reveal what lies beneath the surface." },
  { Icon: Moon, title: "Dual gameplay loop", desc: "Café management by day. Narrative-driven personal moments by night." },
  { Icon: GitBranch, title: "Multiple endings", desc: "30 in-game days. Your choices shape the outcome — some routes lead somewhere unexpected." },
];

const usps = [
  {
    img: amaraEquipment,
    title: "Authentic coffee crafting",
    desc: "Research-driven systems inspired by real barista culture.",
  },
  {
    img: amaraCafe,
    title: "Cozy… with a twist",
    desc: "A comforting experience that gradually reveals a deeper, darker narrative.",
  },
  {
    img: amaraRooms,
    title: "Dual gameplay",
    desc: "Café management by day, personal story-driven moments by night.",
  },
];

const menu = [
  { emoji: "☕", name: "Espresso", type: "Hot drink" },
  { emoji: "🧋", name: "Latte", type: "Hot drink" },
  { emoji: "🍫", name: "Chocolate mocha", type: "Specialty" },
  { emoji: "🍮", name: "Caramel mocha", type: "Specialty" },
  { emoji: "🥐", name: "Pastries", type: "Food" },
  { emoji: "🍰", name: "Café sweets", type: "Food" },
];

const specs = [
  { label: "Studio", value: "Pixel Pond" },
  { label: "Genre", value: "Narrative-Driven Management" },
  { label: "Platform", value: "PC · Unity 6.3" },
  { label: "Dev stage", value: "Alpha" },
  { label: "Release", value: "Q2 2027" },
  { label: "Mode", value: "Singleplayer" },
];

type SocialItem =
  | { type: "img"; src: string; label: string; href: string }
  | { type: "icon"; Icon: typeof Youtube; label: string; href: string };

const socialsEN: SocialItem[] = [
  { type: "icon", Icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@amarathegame" },
];

const socialsPT: SocialItem[] = [
  { type: "img", src: iconInstagram, label: "Instagram", href: "https://www.instagram.com/amarathegamebr" },
  { type: "img", src: iconDiscord, label: "Discord", href: "https://discord.com/invite/xzgxcSYAMp" },
  { type: "img", src: iconTiktok, label: "TikTok", href: "https://www.tiktok.com/@amarathegamebr" },
  { type: "icon", Icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@amarathegamebr" },
];

const tags = ["Narrative-Driven Management", "Singleplayer", "EN & PT"];

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block bg-[var(--amara-pink-surface)] border border-[var(--amara-pink-border)] text-[var(--amara-dark)] text-xs font-semibold rounded-full px-3 py-1">
      {children}
    </span>
  );
}

function SectionHeader({ label, heading, subtext }: { label: string; heading: string; subtext?: string }) {
  return (
    <div className="mb-6 text-center">
      <p className="text-xs font-bold uppercase tracking-widest text-[var(--amara-hot)]">{label}</p>
      <h2 className="mt-2 text-3xl font-extrabold text-[var(--amara-dark)]">{heading}</h2>
      {subtext && (
        <p className="mt-2 text-sm text-[var(--amara-rose)] max-w-xl mx-auto">{subtext}</p>
      )}
    </div>
  );
}

/* Decorative repeating pixel-block pattern (cream squares on dark) */
function PixelBand() {
  return (
    <div
      aria-hidden
      className="h-3 w-full"
      style={{
        backgroundImage:
          "linear-gradient(90deg, var(--amara-cream) 25%, transparent 25%, transparent 50%, var(--amara-cream) 50%, var(--amara-cream) 75%, transparent 75%)",
        backgroundSize: "16px 12px",
        backgroundColor: "var(--amara-dark)",
      }}
    />
  );
}

function Index() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "var(--amara-pink-light)" }}>
      {/* HERO — light peach so the dark logo pops */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "var(--amara-peach)" }}
      >
        {/* Decorative sparkles */}
        <img src={sparkle} alt="" aria-hidden className="hidden md:block absolute top-10 left-8 w-12 opacity-90 pointer-events-none" />
        <img src={sparkle} alt="" aria-hidden className="hidden md:block absolute top-24 right-16 w-8 opacity-70 pointer-events-none rotate-12" />
        <img src={surprise} alt="" aria-hidden className="hidden md:block absolute bottom-16 left-10 w-20 opacity-90 pointer-events-none" />
        <img src={coffeeBean} alt="" aria-hidden className="hidden md:block absolute top-32 left-20 w-10 opacity-80 pointer-events-none -rotate-12" />

        <div className="relative max-w-4xl mx-auto px-6 pt-16 pb-20 text-center">
          <span className="inline-block bg-[var(--amara-dark)] text-[var(--amara-cream)] rounded-full text-xs font-extrabold uppercase tracking-widest px-3 py-1.5">
            Coming Q2 2027 · PC
          </span>
          <img
            src={amaraTitle}
            alt="Amara"
            className="mt-8 mx-auto w-full max-w-xl h-auto amara-pixel"
          />
          <p className="mt-4 text-xl font-bold text-[var(--amara-dark)]">
            A cozy café game… with a twist.
          </p>
          <p className="mt-1 text-sm text-[var(--amara-rose)] opacity-90">
            An indie game by Pixel Pond
          </p>
          <p className="mt-5 max-w-lg mx-auto text-sm text-[var(--amara-dark)] opacity-90 leading-relaxed">
            Craft beautiful drinks, serve talking cats, and manage your little café — while a deeper, darker story slowly unfolds around you.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="bg-[var(--amara-rose)] text-[var(--amara-cream)] text-xs font-bold rounded-full px-3 py-1"
              >
                {t}
              </span>
            ))}
          </div>
          <p className="mt-10 opacity-50 text-2xl tracking-widest text-[var(--amara-dark)]">
            ᓚᘏᗢ&nbsp;&nbsp;&nbsp;ᓚᘏᗢ&nbsp;&nbsp;&nbsp;ᓚᘏᗢ
          </p>
        </div>
      </section>

      <PixelBand />

      {/* OVERVIEW — notebook card on cream */}
      <section style={{ backgroundColor: "var(--amara-cream)" }}>
        <div className="max-w-4xl mx-auto px-6 py-16">
          <SectionHeader
            label="Overview"
            heading="Meet Amara"
            subtext="A cozy management game where Rebeca runs a café for talking cats — and slowly uncovers a story that's anything but ordinary."
          />
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white border-2 border-[var(--amara-pink-border)] rounded-2xl p-6">
              <h3 className="text-lg font-extrabold text-[var(--amara-dark)]">What you'll do</h3>
              <ul className="mt-3 space-y-2 text-sm text-[var(--amara-dark)]">
                {[
                  "Make pretty, coffee-culture-inspired drinks.",
                  "Serve peculiar customers who happen to be talking cats.",
                  "Manage café resources to rise in popularity.",
                  "Write in your diary each night to unlock the story.",
                ].map((line) => (
                  <li key={line} className="flex gap-2 items-start">
                    <img src={coffeeBean} alt="" aria-hidden className="w-4 h-4 mt-0.5 shrink-0" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border-2 border-[var(--amara-pink-border)] rounded-2xl p-6">
              <h3 className="text-lg font-extrabold text-[var(--amara-dark)]">At a glance</h3>
              <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                {specs.map((s) => (
                  <div key={s.label} className="border-b border-[var(--amara-pink-border)]/60 pb-1">
                    <dt className="text-[10px] uppercase tracking-wider text-[var(--amara-rose)] font-bold">{s.label}</dt>
                    <dd className="text-[var(--amara-dark)] font-bold">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <PixelBand />

      {/* USPs section removed */}

      {/* CORE LOOP */}
      <section style={{ backgroundColor: "var(--amara-pink-light)" }}>
        <div className="max-w-4xl mx-auto px-6 py-16">
          <SectionHeader
            label="Core loop"
            heading="A day in Rebeca's life"
            subtext="30 in-game days. Two interwoven loops. Story moments unfold between every shift."
          />
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            {[
              { Icon: Sun, time: "8 a.m.", title: "Open the café", desc: "Rebeca starts her shift. Serve cats before their patience runs out." },
              { Icon: Coffee, time: "5 p.m.", title: "Daily report", desc: "Shift ends. Review your earnings, REP, and what tomorrow brings." },
              { Icon: Bed, time: "7 p.m.", title: "Bedroom activities", desc: "Return home, write in your diary, and let the story unfold." },
            ].map((b) => (
              <div
                key={b.time}
                className="bg-white rounded-2xl border-2 border-[var(--amara-pink-border)] p-5"
              >
                <div className="w-10 h-10 rounded-full bg-[var(--amara-dark)] flex items-center justify-center">
                  <b.Icon className="w-5 h-5 text-[var(--amara-cream)]" />
                </div>
                <p className="mt-3 text-xs font-bold uppercase tracking-wider text-[var(--amara-hot)]">{b.time}</p>
                <h3 className="text-base font-extrabold text-[var(--amara-dark)]">{b.title}</h3>
                <p className="mt-1 text-xs text-[var(--amara-rose)] leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PixelBand />

      {/* FEATURES */}
      <section style={{ backgroundColor: "var(--amara-cream)" }}>
        <div className="max-w-4xl mx-auto px-6 py-16">
          <SectionHeader
            label="Features"
            heading="What you'll do in Amara"
            subtext="Two interwoven loops — run the café by day, live Rebeca's personal story by night."
          />
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            {features.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white border-2 border-[var(--amara-pink-border)] rounded-2xl p-4"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--amara-pink-surface)] flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[var(--amara-rose)]" />
                </div>
                <h3 className="mt-3 text-sm font-extrabold text-[var(--amara-dark)]">{title}</h3>
                <p className="mt-1 text-xs text-[var(--amara-rose)] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PixelBand />

      {/* MENU */}
      <section style={{ backgroundColor: "var(--amara-pink-light)" }}>
        <div className="max-w-4xl mx-auto px-6 py-16">
          <SectionHeader
            label="On the menu"
            heading="Drinks & food to serve"
            subtext="Mix, layer, and pour — every item is a small craft challenge."
          />
          <div
            className="grid gap-3 mt-8"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))" }}
          >
            {menu.map((m) => (
              <div
                key={m.name}
                className="bg-white rounded-2xl p-4 text-center border-2 border-[var(--amara-pink-border)]"
              >
                <span className="text-3xl block mb-1">{m.emoji}</span>
                <p className="text-sm font-extrabold text-[var(--amara-dark)]">{m.name}</p>
                <p className="text-xs text-[var(--amara-rose)]">{m.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PixelBand />

      {/* FOLLOW — dark band */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "var(--amara-dark)" }}>
        <img src={sparkle} alt="" aria-hidden className="hidden md:block absolute top-6 left-12 w-10 opacity-80 pointer-events-none" />
        <img src={sparkle} alt="" aria-hidden className="hidden md:block absolute bottom-8 right-16 w-8 opacity-70 pointer-events-none rotate-45" />
        <div className="relative max-w-3xl mx-auto px-6 py-14 text-center">
          <img src={laptop} alt="" aria-hidden className="mx-auto w-28 mb-2 pointer-events-none" />
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--amara-hot)]">Stay in the loop</p>
          <h2 className="mt-2 text-3xl font-extrabold text-[var(--amara-cream)]">Follow along</h2>
          <p className="mt-2 text-sm text-[var(--amara-pink-border)]">
            We're a small team of friends — your support means the world to us.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[var(--amara-cream)] hover:bg-[var(--amara-peach)] transition-colors rounded-full px-4 py-2 text-sm font-extrabold text-[var(--amara-dark)]"
              >
                {s.type === "img" ? (
                  <img src={s.src} alt="" className="w-5 h-5 object-contain" />
                ) : (
                  <s.Icon className="w-4 h-4" />
                )}
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="text-center py-10 px-6"
        style={{ backgroundColor: "var(--amara-cream)" }}
      >
        <img src={pixelPondLogo} alt="Pixel Pond" className="mx-auto w-20 mb-3" />
        <p className="text-sm font-extrabold text-[var(--amara-hot)] tracking-wide">Pixel Pond</p>
        <p className="text-xs text-[var(--amara-rose)] mt-1 max-w-md mx-auto">
          A multidisciplinary indie team of friends making meaningful games together.
        </p>
        <p className="text-[10px] text-[var(--amara-rose)]/70 mt-3">
          © {new Date().getFullYear()} Pixel Pond · All rights reserved
        </p>
      </footer>
    </main>
  );
}

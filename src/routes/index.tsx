import { createFileRoute } from "@tanstack/react-router";
import {
  Coffee,
  Cat,
  TrendingUp,
  BookOpen,
  ShoppingBag,
  GitBranch,
  Youtube,
  Sun,
  Bed,
} from "lucide-react";
import amaraTitle from "@/assets/amara-title.png";
import drinkChocolateMocha from "@/assets/drink-chocolate-mocha.png";
import drinkStrawberryFrap from "@/assets/drink-strawberry-frappuccino.png";
import drinkCookiesCream from "@/assets/drink-cookies-cream.png";
import drinkEspresso from "@/assets/drink-espresso.png";
import drinkCappuccino from "@/assets/drink-cappuccino.png";
import iconInstagram from "@/assets/icon-instagram.png";
import iconDiscord from "@/assets/icon-discord.png";
import iconTiktok from "@/assets/icon-tiktok.png";
import sparkle from "@/assets/sparkle.png";
import question from "@/assets/question.png";
import pixelPondLogo from "@/assets/pixel-pond-logo.png";
import gameplayGif from "@/assets/gameplay.gif";
import catAlufo from "@/assets/cat-alufo.gif";
import rebeca from "@/assets/rebeca.png";
import amaraCupLogo from "@/assets/amara-cup-logo.png";
import iconCold from "@/assets/icon-cold.png";
import iconHot from "@/assets/icon-hot.png";
import iconMeowreo from "@/assets/icon-meowreo.png";
import iconSprinkles from "@/assets/icon-sprinkles.png";
import iconCafe from "@/assets/icon-cafe.png";
import iconMilk from "@/assets/icon-milk.png";

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
  { Icon: TrendingUp, title: "Grow your reputation", desc: "Earn reputation, level up, and expand your space to create a café loved by all." },
  { Icon: ShoppingBag, title: "Make purchases", desc: "Use your tablet to make online purchases for ingredients, equipment, expansions and decorations." },
  { Icon: BookOpen, title: "Write in your diary", desc: "Each night, Rebeca writes. Unlock story elements and reveal what lies beneath the surface." },
  { Icon: GitBranch, title: "Multiple endings", desc: "30 in-game days. Your choices shape the outcome — some routes lead somewhere unexpected." },
];

type MenuItem = { img: string; name: string; temp: "hot" | "cold" };
const menu: MenuItem[] = [
  { img: drinkEspresso, name: "Espresso", temp: "hot" },
  { img: drinkCappuccino, name: "Cappuccino", temp: "hot" },
  { img: drinkChocolateMocha, name: "Chocolate Mocha", temp: "hot" },
  { img: drinkStrawberryFrap, name: "Strawberry Frappuccino", temp: "cold" },
  { img: drinkCookiesCream, name: "Cookies 'n Cream Frappuccino", temp: "cold" },
];

type SocialItem =
  | { type: "img"; src: string; label: string; href: string }
  | { type: "icon"; Icon: typeof Youtube; label: string; href: string };

const socialsEN: SocialItem[] = [
  { type: "img", src: iconDiscord, label: "Discord", href: "https://discord.com/invite/xzgxcSYAMp" },
  { type: "icon", Icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@amarathegame" },
];

const socialsPT: SocialItem[] = [
  { type: "img", src: iconInstagram, label: "Instagram", href: "https://www.instagram.com/amarathegamebr" },
  { type: "img", src: iconDiscord, label: "Discord", href: "https://discord.com/invite/xzgxcSYAMp" },
  { type: "img", src: iconTiktok, label: "TikTok", href: "https://www.tiktok.com/@amarathegamebr" },
  { type: "icon", Icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@amarathegamebr" },
];

const tags = ["Narrative", "Management", "Pixel Art", "Singleplayer", "EN & PT"];

function SectionHeader({ heading, subtext }: { heading: string; subtext?: string }) {
  return (
    <div className="mb-6 text-center">
      <h2 className="text-3xl font-extrabold text-[var(--amara-dark)]">{heading}</h2>
      {subtext && (
        <p className="mt-2 text-sm text-[var(--amara-rose)] max-w-xl mx-auto">{subtext}</p>
      )}
    </div>
  );
}

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
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "var(--amara-dark)" }}>
        <div className="relative max-w-4xl mx-auto px-6 pt-16 pb-20 text-center">
          <span className="inline-block bg-[var(--amara-cream)] text-[var(--amara-dark)] rounded-full text-xs font-extrabold uppercase tracking-widest px-4 py-1.5">
            Coming Q2 2027 · PC
          </span>
          <img
            src={amaraTitle}
            alt="Amara"
            className="mt-8 mx-auto w-full max-w-xl h-auto amara-pixel"
          />
          <p className="mt-4 text-xl font-bold text-[var(--amara-peach)]">
            A cozy café game… with a twist.
          </p>
          <p className="mt-1 text-sm text-[var(--amara-pink-border)]">
            An indie game by Pixel Pond
          </p>
          <p className="mt-5 max-w-lg mx-auto text-sm text-[var(--amara-cream)] leading-relaxed">
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
        </div>
      </section>

      <PixelBand />

      {/* MEET AMARA */}
      <section style={{ backgroundColor: "var(--amara-cream)" }}>
        <div className="max-w-4xl mx-auto px-6 py-16">
          <SectionHeader heading="Meet Amara" />
          <div className="mt-6 flex justify-center">
            <img
              src={gameplayGif}
              alt="Amara gameplay"
              className="w-full max-w-2xl h-auto rounded-2xl border-4 border-[var(--amara-rose)] shadow-lg amara-pixel"
            />
          </div>
          <p className="mt-6 text-center text-base font-bold text-[var(--amara-dark)]">
            A cozy management game where Rebeca runs a café for talking cats!
          </p>
        </div>
      </section>

      <PixelBand />

      {/* CORE LOOP */}
      <section style={{ backgroundColor: "#FDD9DA" }}>
        <div className="max-w-5xl mx-auto px-6 py-12">
          <SectionHeader heading="A day in Rebeca's life" />
          <div className="flex items-center justify-center gap-8 mt-4">
            <img
              src={catAlufo}
              alt=""
              aria-hidden
              className="hidden md:block w-16 lg:w-20 h-auto amara-pixel shrink-0"
            />
            <div className="grid md:grid-cols-3 gap-4 flex-1">
              {[
                { Icon: Sun, time: "8 a.m.", title: "Open the café", desc: "Rebeca starts her shift. Serve cats before their patience runs out." },
                { Icon: Coffee, time: "5 p.m.", title: "Daily report", desc: "Shift ends. Review your performance, earnings, and reputation." },
                { Icon: Bed, time: "7 p.m.", title: "Bedroom activities", desc: "Return to bedroom on the café's second floor. Make online purchases and write in your diary." },
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
            <img
              src={rebeca}
              alt=""
              aria-hidden
              className="hidden md:block w-16 lg:w-20 h-auto amara-pixel shrink-0"
            />
          </div>
        </div>
      </section>

      <PixelBand />

      {/* FEATURES */}
      <section style={{ backgroundColor: "var(--amara-cream)" }}>
        <div className="relative max-w-6xl mx-auto px-6 py-16">
          {/* Side decorations */}
          <img src={iconMeowreo} alt="" aria-hidden className="hidden lg:block absolute left-2 top-8 w-20 pointer-events-none" style={{ transform: "rotate(-8deg)" }} />
          <img src={iconMilk} alt="" aria-hidden className="hidden lg:block absolute left-4 top-1/2 -translate-y-1/2 w-16 pointer-events-none" style={{ transform: "rotate(8deg)" }} />
          <img src={iconCafe} alt="" aria-hidden className="hidden lg:block absolute left-2 bottom-8 w-20 pointer-events-none" style={{ transform: "rotate(-8deg)" }} />
          <img src={iconHot} alt="" aria-hidden className="hidden lg:block absolute right-4 top-8 w-16 pointer-events-none" style={{ transform: "rotate(8deg)" }} />
          <img src={iconCold} alt="" aria-hidden className="hidden lg:block absolute right-2 top-1/2 -translate-y-1/2 w-20 pointer-events-none" style={{ transform: "rotate(-8deg)" }} />
          <img src={iconSprinkles} alt="" aria-hidden className="hidden lg:block absolute right-4 bottom-8 w-20 pointer-events-none" style={{ transform: "rotate(8deg)" }} />

          <div className="max-w-4xl mx-auto">
            <SectionHeader heading="What you'll do in Amara" />
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
        </div>
      </section>

      <PixelBand />

      {/* FEATURES */}
      <section style={{ backgroundColor: "var(--amara-cream)" }}>
        <div className="max-w-4xl mx-auto px-6 py-16">
          <SectionHeader heading="What you'll do in Amara" />
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
      <section style={{ backgroundColor: "#FDD9DA" }}>
        <div className="max-w-4xl mx-auto px-6 py-16">
          <SectionHeader
            heading="On the menu"
            subtext="Prepare adorable drinks and pastries with care."
          />
          <div
            className="grid gap-3 mt-8"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))" }}
          >
            {menu.map((m, i) => (
              <div
                key={m.name + i}
                className="bg-white rounded-2xl p-4 text-center border-2 border-[var(--amara-pink-border)] flex flex-col items-center"
              >
                <img
                  src={m.img}
                  alt={m.mystery ? "Mystery drink" : m.name}
                  className={`w-20 h-20 object-contain mb-2 ${m.mystery ? "opacity-70" : ""}`}
                />
                <p className="text-sm font-extrabold text-[var(--amara-dark)]">{m.name}</p>
                <p className="text-xs text-[var(--amara-rose)]">{m.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PixelBand />

      {/* FOLLOW */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "var(--amara-dark)" }}>
        <img src={sparkle} alt="" aria-hidden className="hidden md:block absolute top-6 left-12 w-10 pointer-events-none" />
        <img src={sparkle} alt="" aria-hidden className="hidden md:block absolute top-6 right-12 w-10 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-6 py-14 text-center">
          <img src={amaraCupLogo} alt="" aria-hidden className="mx-auto w-28 mb-2 pointer-events-none" />
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--amara-hot)]">Stay in the loop</p>
          <h2 className="mt-2 text-3xl font-extrabold text-[var(--amara-cream)]">Follow along</h2>
          <p className="mt-2 text-sm text-[var(--amara-pink-border)]">
            We're a small game studio of friends — your support means the world to us.
          </p>
          {([
            { title: "English", items: socialsEN },
            { title: "Português", items: socialsPT },
          ]).map((group) => (
            <div key={group.title} className="mt-6">
              <p className="text-xs font-extrabold uppercase tracking-widest text-[var(--amara-peach)] mb-2">
                {group.title}
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {group.items.map((s) => (
                  <a
                    key={s.label + group.title}
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
          ))}
        </div>
      </section>

      <PixelBand />

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

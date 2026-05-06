import { createFileRoute } from "@tanstack/react-router";
import {
  Coffee,
  Cat,
  TrendingUp,
  BookOpen,
  Moon,
  GitBranch,
  Instagram,
  MessageCircle,
  Music2,
  Youtube,
  Link as LinkIcon,
} from "lucide-react";
import amaraTitle from "@/assets/amara-title.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Amara — A cozy café game with a twist | Pixel Pond" },
      {
        name: "description",
        content:
          "Amara is a cozy narrative café management game by Pixel Pond. Brew drinks, serve talking cats, and uncover a deeper story. Coming Q1 2027 on PC.",
      },
      { property: "og:title", content: "Amara — A cozy café game with a twist" },
      {
        property: "og:description",
        content: "An indie narrative management game by Pixel Pond. Coming Q1 2027 on PC.",
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
  { label: "Genre", value: "Narrative management" },
  { label: "Platform", value: "PC" },
  { label: "Dev stage", value: "Alpha" },
  { label: "Release", value: "Q1 2027" },
  { label: "Length", value: "5–9 hours" },
];

const socials = [
  { Icon: Instagram, label: "Instagram", href: "https://instagram.com/amarathegame" },
  { Icon: MessageCircle, label: "Discord", href: "#" },
  { Icon: Music2, label: "TikTok", href: "#" },
  { Icon: Youtube, label: "YouTube", href: "https://youtube.com/@amarathegameen" },
  { Icon: LinkIcon, label: "Linktree", href: "#" },
];

const tags = ["Narrative management", "Singleplayer", "5–9 hours", "EN & PT"];

function SectionHeader({ label, heading, subtext }: { label: string; heading: string; subtext?: string }) {
  return (
    <div className="mb-6">
      <p className="text-xs font-bold uppercase tracking-widest text-[#D4537E]">{label}</p>
      <h2 className="mt-2 text-4xl font-bold text-[#72243E] font-handwriting">{heading}</h2>
      {subtext && <p className="mt-2 text-sm text-[#993556]">{subtext}</p>}
    </div>
  );
}

function Divider() {
  return <hr className="my-12 border-[#F4C0D1]/30" />;
}

function Index() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 py-10">
        {/* HERO */}
        <section className="bg-[#F9EEF0] rounded-2xl py-14 px-8 text-center">
          <span className="inline-block bg-[#72243E] text-[#F4C0D1] rounded-full text-xs font-bold uppercase tracking-widest px-3 py-1">
            Coming Q1 2027 · PC
          </span>
          <img
            src={amaraTitle}
            alt="Amara"
            className="mt-6 mx-auto w-full max-w-md h-auto"
            style={{ imageRendering: "pixelated" }}
          />
          
          <p className="mt-4 text-lg font-semibold text-[#993556]">
            A cozy café game... with a twist.
          </p>
          <p className="mt-2 text-sm text-[#72243E] opacity-70">
            An indie game by Pixel Pond
          </p>
          <p className="mt-4 max-w-lg mx-auto text-sm text-[#72243E] opacity-80 leading-relaxed">
            Brew beautiful drinks, serve talking cats, and manage your little café — while a deeper, darker story slowly unfolds around you.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="bg-[#FBEAF0] border border-[#F4C0D1] text-[#72243E] text-xs font-semibold rounded-full px-3 py-1"
              >
                {t}
              </span>
            ))}
          </div>
          <p className="mt-8 opacity-40 text-2xl tracking-widest text-[#72243E]">
            ᓚᘏᗢ&nbsp;&nbsp;&nbsp;ᓚᘏᗢ&nbsp;&nbsp;&nbsp;ᓚᘏᗢ
          </p>
        </section>

        <Divider />

        {/* FEATURES */}
        <section>
          <SectionHeader
            label="Features"
            heading="What you'll do in Amara"
            subtext="Two interwoven loops — run the café by day, live Rebeca's personal story by night."
          />
          <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white border border-[#F4C0D1]/50 rounded-xl p-4"
              >
                <div className="w-10 h-10 rounded-lg bg-[#FBEAF0] flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#993556]" />
                </div>
                <h3 className="mt-3 text-sm font-bold text-[#72243E]">{title}</h3>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* MENU */}
        <section>
          <SectionHeader
            label="On the menu"
            heading="Drinks & food to serve"
            subtext="Mix, layer, and pour — every item is a small craft challenge."
          />
          <div
            className="grid gap-3"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))" }}
          >
            {menu.map((m) => (
              <div
                key={m.name}
                className="bg-muted rounded-lg p-3 text-center border border-[#F4C0D1]/30"
              >
                <span className="text-3xl block mb-1">{m.emoji}</span>
                <p className="text-sm font-bold text-[#72243E]">{m.name}</p>
                <p className="text-xs text-muted-foreground">{m.type}</p>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* SPECS */}
        <section>
          <SectionHeader label="Game info" heading="At a glance" />
          <div
            className="grid gap-3"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))" }}
          >
            {specs.map((s) => (
              <div key={s.label} className="bg-muted rounded-lg p-3">
                <p className="text-xs text-muted-foreground">{s.label}</p>
                <p className="text-sm font-bold text-[#72243E]">{s.value}</p>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* FOLLOW */}
        <section className="bg-[#F9EEF0] rounded-2xl py-8 px-6 text-center">
          <h2 className="text-3xl font-bold text-[#72243E] font-handwriting">Follow along</h2>
          <p className="mt-2 text-sm text-[#993556]">
            We're a small team of friends — your support means the world to us.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {socials.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#FBEAF0] border border-[#F4C0D1] rounded-lg px-4 py-2 text-sm font-bold text-[#72243E] hover:bg-[#F4C0D1] transition-colors"
              >
                <Icon className="w-4 h-4" />
                {label}
              </a>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="text-center py-4 mt-8">
          <p className="text-sm font-bold text-[#D4537E] tracking-wide">Pixel Pond</p>
          <p className="text-xs text-muted-foreground mt-1">
            A multidisciplinary indie team making meaningful games together.
          </p>
        </footer>
      </div>
    </main>
  );
}

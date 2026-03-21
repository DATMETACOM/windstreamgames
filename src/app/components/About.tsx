import { ArrowRight, Globe, Sparkles, Users } from "lucide-react";

const stats = [
  { icon: Users, value: "5M+", label: "Players" },
  { icon: Globe, value: "150+", label: "Countries" },
  { icon: Sparkles, value: "12", label: "Live titles" },
  { icon: ArrowRight, value: "24h", label: "Update cycle" },
];

export function About() {
  return (
    <section id="about" className="bg-[#111827] px-4 py-16 text-white sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-white/45">About the studio</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
              A simpler studio page for a studio that ships fast.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
              The old version read like a generic landing page. This redesign shifts the tone
              closer to a modern game publisher site: large statements, fewer decorative blocks,
              and more emphasis on what the studio actually makes.
            </p>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-white/40">Approach</p>
                <p className="mt-3 text-lg font-medium text-white">Readable in one pass</p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-white/40">Product</p>
                <p className="mt-3 text-lg font-medium text-white">Short-session puzzle loops</p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-white/40">Visual rule</p>
                <p className="mt-3 text-lg font-medium text-white">Bold type, less clutter</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-white/45">Studio numbers</p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="rounded-[1.5rem] border border-white/10 bg-black/10 p-5">
                  <stat.icon className="text-sky-400" size={22} />
                  <div className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm text-white/55">{stat.label}</div>
                </div>
              ))}
            </div>
            <p className="mt-8 border-t border-white/10 pt-6 text-sm leading-7 text-white/60">
              PuzzleCraft is positioned as a compact mobile-first studio with a sharper,
              more editorial presentation. The page now communicates that in the first few
              scrolls instead of hiding it behind repeated cards and gradients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

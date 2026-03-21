import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 md:pb-24 md:pt-36 lg:px-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.14),_transparent_32%),radial-gradient(circle_at_80%_20%,_rgba(59,130,246,0.18),_transparent_24%),linear-gradient(180deg,#f8fbff_0%,#eef4ff_55%,#dbeafe_100%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
            <Sparkles size={16} className="text-sky-500" />
            Mobile puzzle games with a cleaner edge
          </div>

          <h1 className="mt-6 max-w-xl text-5xl font-semibold tracking-[-0.04em] text-slate-950 md:text-7xl">
            Playful ideas.
            <br />
            Sharp execution.
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600 md:text-xl">
            PuzzleCraft builds mobile puzzle games that feel bright, quick, and easy
            to understand from the first screen. Less noise, more momentum.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full bg-[#111827] px-6 text-white hover:bg-[#1f2937]"
            >
              <a href="#games">
                See the lineup
                <ArrowRight size={18} />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-black/10 bg-white/70 px-6 text-slate-900 hover:bg-white"
            >
              <a href="#about">Studio overview</a>
            </Button>
          </div>

          <div className="mt-10 grid max-w-xl gap-4 border-t border-black/10 pt-6 sm:grid-cols-3">
            <div>
              <div className="text-3xl font-semibold tracking-[-0.04em] text-slate-950">12</div>
              <p className="mt-1 text-sm text-slate-500">live puzzle titles</p>
            </div>
            <div>
              <div className="text-3xl font-semibold tracking-[-0.04em] text-slate-950">30M+</div>
              <p className="mt-1 text-sm text-slate-500">combined installs</p>
            </div>
            <div>
              <div className="text-3xl font-semibold tracking-[-0.04em] text-slate-950">4.8</div>
              <p className="mt-1 text-sm text-slate-500">average store rating</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute right-6 top-10 h-48 w-48 rounded-full bg-sky-300/30 blur-3xl" />
          <div className="absolute bottom-6 left-4 h-52 w-52 rounded-full bg-blue-300/30 blur-3xl" />
          <div className="relative flex h-[520px] items-center justify-center overflow-hidden rounded-[2.5rem] border border-black/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(233,243,255,0.96)_100%)] p-6 shadow-[0_24px_80px_rgba(15,23,42,0.12)]">
            <div className="absolute left-8 top-8 h-28 w-28 rounded-full bg-sky-300/25 blur-2xl" />
            <div className="absolute bottom-8 right-8 h-32 w-32 rounded-full bg-blue-400/20 blur-3xl" />
            <div className="relative flex w-full max-w-md flex-col items-center text-center">
              <div className="flex h-32 w-32 items-center justify-center rounded-[2rem] bg-[#111827] text-6xl font-semibold tracking-[-0.08em] text-white shadow-[0_20px_50px_rgba(15,23,42,0.22)]">
                W
              </div>
              <p className="mt-8 text-xs uppercase tracking-[0.34em] text-slate-500">
                Windstream Studio
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-slate-950 md:text-5xl">
                Windstream
              </h2>
              <div className="mt-6 rounded-full border border-black/8 bg-white/70 px-5 py-3 text-sm font-medium text-slate-700 shadow-sm">
                Windstream Holdings II, LLC
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

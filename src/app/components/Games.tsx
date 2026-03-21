import { ArrowUpRight, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logoFactoryImage from "../../unnamed (2).webp";
import arrowShooterImage from "../../unnamed (4).webp";
import hexaMatchImage from "../../unnamed.webp";

const games = [
  {
    id: 1,
    title: "Arrow Shooter",
    description: "A clean action-puzzle experience built around quick aim, timing, and satisfying level flow.",
    image: arrowShooterImage,
    players: "Featured title",
    rating: 4.8,
    category: "Action Puzzle",
  },
  {
    id: 2,
    title: "Hexa Match - Coin Puzzle",
    description: "A hex-based match puzzle with a coin mechanic and a clearer, more focused board presentation.",
    image: hexaMatchImage,
    players: "Featured title",
    rating: 4.9,
    category: "Match Puzzle",
  },
  {
    id: 3,
    title: "Logo Factory",
    description: "A visual puzzle concept centered on logo recognition, clean shapes, and quick pattern decisions.",
    image: logoFactoryImage,
    players: "Featured title",
    rating: 4.7,
    category: "Visual Puzzle",
  },
];

export function Games() {
  return (
    <section id="games" className="px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 border-t border-black/10 pt-8 md:grid-cols-[0.75fr_1.25fr] md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Selected games</p>
            <h2 className="mt-4 max-w-sm text-4xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              Fewer blocks.
              <br />
              Better focus.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
            Inspired by the cleaner studio-style presentation on Rollic, this section now
            behaves more like a lineup than a noisy marketplace. Each title gets room to
            breathe, with one clear image and only the metadata that matters.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {games.map((game) => (
            <article
              key={game.id}
              className="group overflow-hidden rounded-[2rem] border border-black/8 bg-[#fcfbf7] shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden p-3">
                <ImageWithFallback
                  src={game.image}
                  alt={game.title}
                  className="h-80 w-full rounded-[1.5rem] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute left-7 top-7 rounded-full bg-white/85 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-700 backdrop-blur">
                  {game.category}
                </span>
              </div>

              <div className="space-y-5 p-6 pt-2">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">
                      {game.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{game.description}</p>
                  </div>
                  <ArrowUpRight className="mt-1 text-slate-400 transition-colors group-hover:text-slate-950" size={18} />
                </div>

                <div className="flex items-center justify-between border-t border-black/8 pt-4 text-sm text-slate-500">
                  <span>{game.players}</span>
                  <span className="flex items-center gap-1.5 text-slate-700">
                    <Star size={15} className="fill-sky-400 text-sky-400" />
                    {game.rating}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

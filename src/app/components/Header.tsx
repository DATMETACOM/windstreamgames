import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Studio", href: "#home" },
    { label: "Games", href: "#games" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
    { label: "Privacy", href: "/privacy.html" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between rounded-full border border-black/8 bg-[#fcfbf7]/90 px-5 shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#111827] text-sm font-semibold text-white">
              R
            </div>
            <div>
              <div className="text-[0.7rem] uppercase tracking-[0.24em] text-slate-500">
                REN DESIGN
              </div>
              <span className="text-base font-semibold text-slate-950">ACEDev</span>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-950"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button asChild className="h-11 rounded-full bg-[#111827] px-5 text-sm text-white hover:bg-[#1f2937]">
              <a href="#games">Explore Games</a>
            </Button>
          </div>

          <button
            className="p-2 text-slate-600 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="mt-3 rounded-3xl border border-black/8 bg-[#fcfbf7] p-5 shadow-[0_8px_30px_rgba(15,23,42,0.06)] md:hidden">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-3 text-sm font-medium text-slate-700"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button asChild className="mt-4 h-11 w-full rounded-full bg-[#111827] text-white hover:bg-[#1f2937]">
              <a href="#games">Explore Games</a>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}

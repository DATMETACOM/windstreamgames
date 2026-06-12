import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#111827] px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 border-t border-white/10 pt-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-md">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-semibold text-slate-950">
              RD
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-white/45">Legal Entity</p>
              <p className="text-lg font-semibold">REN DESIGN JOINT STOCK COMPANY</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-7 text-white/55">
            Adjacent 6A-27 Nguyen Van Loc, Mo Lao Ward, Ha Noi, Viet Nam (VN).
          </p>
        </div>

        <div className="flex flex-col gap-5 md:items-end">
          <nav className="flex flex-wrap gap-5 text-sm text-white/60">
            <a href="#home" className="transition-colors hover:text-white">Studio</a>
            <a href="#games" className="transition-colors hover:text-white">Games</a>
            <a href="#about" className="transition-colors hover:text-white">About</a>
            <a href="#contact" className="transition-colors hover:text-white">Contact</a>
            <a href="/privacy.html" className="transition-colors hover:text-white">Privacy</a>
            <a href="/terms.html" className="transition-colors hover:text-white">Terms</a>
            <a href="/account-deletion.html" className="transition-colors hover:text-white">Delete Account</a>
          </nav>
          <div className="flex gap-3">
            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors hover:bg-white hover:text-slate-950">
              <Facebook size={18} />
            </a>
            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors hover:bg-white hover:text-slate-950">
              <Instagram size={18} />
            </a>
            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors hover:bg-white hover:text-slate-950">
              <Twitter size={18} />
            </a>
            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors hover:bg-white hover:text-slate-950">
              <Youtube size={18} />
            </a>
          </div>
          <p className="text-sm text-white/40">© 2026 REN DESIGN JOINT STOCK COMPANY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

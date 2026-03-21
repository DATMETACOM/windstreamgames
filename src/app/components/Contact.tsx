import { Building2, MapPin } from "lucide-react";
import { Button } from "./ui/button";

export function Contact() {
  return (
    <section id="contact" className="px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2.5rem] bg-[#dfeeff] p-6 md:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-xl">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Contact</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
                Company information
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Updated with the legal entity name and registered address you provided.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button className="h-auto rounded-full bg-[#111827] px-6 py-3 text-white hover:bg-[#1f2937]">
                  Windstream Holdings II, LLC
                </Button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] bg-white/80 p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <Building2 size={20} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-950">Legal name</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Windstream Holdings II, LLC
                </p>
              </div>
              <div className="rounded-[1.75rem] bg-white/80 p-6 shadow-sm sm:col-span-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <MapPin size={20} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-950">Registered address</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  4001 N Rodney Parham Rd
                  <br />
                  Little Rock - 72212-2459
                  <br />
                  United States (US)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

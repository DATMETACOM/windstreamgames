const sections = [
  {
    id: "introduction",
    title: "1. Introduction",
    body: [
      "This Privacy Policy explains how REN DESIGN JOINT STOCK COMPANY and its affiliated operating entity, REN DESIGN CONSTRUCTION INVESTMENT AND ARCHITECTURE JOINT STOCK COMPANY, collect, use, store, and disclose information when users interact with our websites, games, support channels, and related services.",
      "By using our services, you acknowledge that your information may be processed as described in this policy, subject to applicable law.",
    ],
  },
  {
    id: "information-we-collect",
    title: "2. Information We Collect",
    body: [
      "We may collect information you provide directly, such as contact details, support requests, feedback, and business communications.",
      "We may also collect technical and usage information automatically, including device details, operating system, language settings, app interactions, crash logs, identifiers, IP address, and approximate location derived from network information.",
      "When our games use analytics, advertising, or platform services, additional data may be collected by those providers in accordance with their own privacy notices.",
    ],
  },
  {
    id: "how-we-use-information",
    title: "3. How We Use Information",
    body: [
      "We use information to operate and improve our games and websites, maintain security, provide support, troubleshoot technical issues, analyze performance, respond to inquiries, and comply with legal obligations.",
      "Where permitted, information may also be used to evaluate user engagement, optimize game balance, measure campaigns, and support fraud prevention.",
    ],
  },
  {
    id: "legal-basis",
    title: "4. Legal Basis for Processing",
    body: [
      "Where required by law, we process personal data only when a valid legal basis applies. This may include your consent, our legitimate interests in operating and securing our services, performance of a contract, or compliance with a legal obligation.",
    ],
  },
  {
    id: "sharing",
    title: "5. Sharing of Information",
    body: [
      "We may share information with service providers that help us host, operate, analyze, secure, and support our services. We may also share information with platform operators, analytics partners, payment providers, advertising partners, legal advisors, or public authorities where required.",
      "We do not sell personal information in the ordinary meaning of a direct sale for money. However, some jurisdictions define certain advertising or analytics activities broadly, and users may have additional rights under local law.",
    ],
  },
  {
    id: "retention",
    title: "6. Data Retention",
    body: [
      "We retain information only for as long as reasonably necessary for the purposes described in this policy, including service delivery, dispute resolution, fraud prevention, security, bookkeeping, and legal compliance.",
    ],
  },
  {
    id: "children",
    title: "7. Children's Privacy",
    body: [
      "Our services are not intended to knowingly collect personal information from children in violation of applicable law. If you believe that a child has provided personal information to us improperly, please contact us so we can review and take appropriate action.",
    ],
  },
  {
    id: "security",
    title: "8. Security",
    body: [
      "We use reasonable administrative, technical, and organizational measures to protect information. No system is completely secure, and we cannot guarantee absolute security of data transmitted or stored through online systems.",
    ],
  },
  {
    id: "your-rights",
    title: "9. Your Rights",
    body: [
      "Depending on your location, you may have rights to request access, correction, deletion, restriction, portability, objection, or withdrawal of consent. We may need to verify your identity before responding to certain requests.",
    ],
  },
  {
    id: "international-transfers",
    title: "10. International Transfers",
    body: [
      "Your information may be processed in countries other than the country where you are located. When required, we take appropriate measures to provide safeguards for international data transfers.",
    ],
  },
  {
    id: "changes",
    title: "11. Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. When we do, we will revise the effective or last updated date and may provide additional notice where required by law.",
    ],
  },
  {
    id: "contact",
    title: "12. Contact Information",
    body: [
      "If you have questions about this Privacy Policy or would like to submit a privacy-related request, you may contact us at the address below.",
      "REN DESIGN CONSTRUCTION INVESTMENT AND ARCHITECTURE JOINT STOCK COMPANY, Adjacent 6A-27 Nguyen Van Loc, Mo Lao Ward, Ha Noi, Viet Nam (VN).",
      "Website: https://acedev.tech/ | Account owner contact: toxuantung1305@gmail.com (Tung To).",
    ],
  },
];

export function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#eef4ff] text-slate-950">
      <main className="px-4 pb-16 pt-10 sm:px-6 md:pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <a
            href="/"
            className="inline-flex rounded-full border border-black/10 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:bg-white"
          >
            Back to home
          </a>

          <div className="mt-8 rounded-[2.5rem] border border-black/8 bg-white/80 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] md:p-12">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Privacy Policy</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.05em] text-slate-950 md:text-6xl">
              REN DESIGN JOINT STOCK COMPANY Privacy Policy
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              This page describes how information may be collected, used, disclosed, and
              protected in connection with ACEDev websites, games, and related
              services.
            </p>
            <div className="mt-8 flex flex-col gap-3 border-t border-black/8 pt-6 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
              <div>Last updated: March 21, 2026</div>
              <div>Adjacent 6A-27 Nguyen Van Loc, Mo Lao Ward, Ha Noi, Viet Nam (VN)</div>
            </div>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[0.34fr_0.66fr]">
            <aside className="rounded-[2rem] border border-black/8 bg-white/75 p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)] lg:sticky lg:top-8 lg:h-fit">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                Contents
              </p>
              <nav className="mt-5 space-y-3">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block text-sm leading-6 text-slate-700 transition-colors hover:text-slate-950"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </aside>

            <section className="rounded-[2rem] border border-black/8 bg-white/75 p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)] md:p-8">
              <div className="space-y-10">
                {sections.map((section) => (
                  <article key={section.id} id={section.id} className="scroll-mt-8 border-b border-black/8 pb-8 last:border-b-0 last:pb-0">
                    <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">
                      {section.title}
                    </h2>
                    <div className="mt-4 space-y-4">
                      {section.body.map((paragraph, index) => (
                        <p key={index} className="text-base leading-8 text-slate-700">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

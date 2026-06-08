const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    body: [
      "These Terms of Use govern your access to and use of the websites, games, applications, and related services operated by REN DESIGN JOINT STOCK COMPANY and REN DESIGN CONSTRUCTION INVESTMENT AND ARCHITECTURE JOINT STOCK COMPANY.",
      "By downloading, accessing, browsing, or using our services, you agree to these Terms. If you do not agree, do not use the services.",
    ],
  },
  {
    id: "services",
    title: "2. Scope of Services",
    body: [
      "These Terms apply to ACEDev-branded and affiliated digital products, including game websites, mobile games, web features, player support, promotional pages, and related content we make available.",
      "Certain features may also be subject to additional notices, platform rules, or in-app terms.",
    ],
  },
  {
    id: "eligibility",
    title: "3. Eligibility and User Responsibilities",
    body: [
      "You are responsible for ensuring that your use of the services complies with applicable law and platform requirements in your jurisdiction.",
      "You agree not to misuse the services, disrupt operations, attempt unauthorized access, exploit bugs, infringe intellectual property rights, or use the services for unlawful, fraudulent, or abusive purposes.",
    ],
  },
  {
    id: "accounts",
    title: "4. Accounts and Access",
    body: [
      "Some services may allow or require account creation, platform sign-in, or user identifiers. You are responsible for information submitted through your account and for maintaining the confidentiality of your credentials.",
      "We may suspend, limit, or terminate access where reasonably necessary to protect users, enforce these Terms, maintain service integrity, or comply with legal obligations.",
    ],
  },
  {
    id: "virtual-items",
    title: "5. In-App Content and Virtual Items",
    body: [
      "Games may include unlockable content, virtual items, in-game currency, advertising-based rewards, or other limited digital entitlements. Unless required by law, these items have no cash value, are non-transferable, and may be modified, reset, or removed as part of gameplay balancing, technical changes, or service updates.",
      "Purchases made through third-party platforms are also subject to the billing, refund, and payment policies of the applicable platform provider.",
    ],
  },
  {
    id: "ip",
    title: "6. Intellectual Property",
    body: [
      "All rights, title, and interest in the services, including software, game content, text, artwork, branding, audio, video, design assets, and related materials, remain with us or our licensors.",
      "Except as expressly permitted, you may not copy, modify, distribute, reverse engineer, publicly display, sell, license, or commercially exploit any part of the services without prior written permission.",
    ],
  },
  {
    id: "ugc",
    title: "7. User Feedback and Submissions",
    body: [
      "If you provide suggestions, feedback, bug reports, ideas, reviews, or other submissions relating to the services, you agree that we may use them without restriction or compensation, to the extent permitted by law.",
      "You represent that you have the rights necessary to share any content or materials you submit to us.",
    ],
  },
  {
    id: "privacy",
    title: "8. Privacy",
    body: [
      "Our handling of personal data is described in our Privacy Policy. By using the services, you acknowledge that information may be processed in accordance with that policy and applicable law.",
    ],
  },
  {
    id: "availability",
    title: "9. Availability, Updates, and Third Parties",
    body: [
      "We may update, change, suspend, or discontinue any service, feature, content, or compatibility support at any time, including for maintenance, legal, commercial, or security reasons.",
      "The services may contain links to third-party platforms, stores, SDKs, advertising providers, or external websites. We are not responsible for third-party services, terms, or content.",
    ],
  },
  {
    id: "warranties",
    title: "10. Disclaimer of Warranties",
    body: [
      "To the maximum extent permitted by law, the services are provided on an \"as is\" and \"as available\" basis. We do not guarantee uninterrupted availability, error-free operation, compatibility with all devices, or that defects will always be corrected.",
    ],
  },
  {
    id: "liability",
    title: "11. Limitation of Liability",
    body: [
      "To the maximum extent permitted by law, we are not liable for indirect, incidental, special, consequential, exemplary, or punitive damages, or for loss of data, goodwill, revenue, profits, or business opportunities arising from or related to the use of the services.",
      "Where liability cannot be excluded, it will be limited to the minimum extent permitted under applicable law.",
    ],
  },
  {
    id: "termination",
    title: "12. Termination",
    body: [
      "We may terminate or restrict your access to the services if we reasonably believe you violated these Terms, created risk for users or systems, or where continued access is no longer commercially, technically, or legally feasible.",
      "Sections that by their nature should survive termination will remain in effect, including provisions related to intellectual property, disclaimers, limitations of liability, and dispute handling.",
    ],
  },
  {
    id: "governing-law",
    title: "13. Governing Law",
    body: [
      "These Terms are governed by applicable laws relevant to the operating entity and the specific service relationship, without regard to conflict of law principles, except where mandatory consumer protection laws provide otherwise.",
    ],
  },
  {
    id: "changes",
    title: "14. Changes to These Terms",
    body: [
      "We may revise these Terms from time to time. Continued use of the services after updated Terms become effective constitutes acceptance of the revised Terms, unless applicable law requires a different form of consent.",
    ],
  },
  {
    id: "contact",
    title: "15. Contact Information",
    body: [
      "If you have questions about these Terms of Use, you may contact us using the details below.",
      "REN DESIGN CONSTRUCTION INVESTMENT AND ARCHITECTURE JOINT STOCK COMPANY, Adjacent 6A-27 Nguyen Van Loc, Mo Lao Ward, Ha Noi, Viet Nam (VN).",
      "Website: https://acedev.tech/ | Account owner contact: toxuantung1305@gmail.com (Tung To).",
    ],
  },
];

export function TermsPage() {
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
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Terms of Use</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.05em] text-slate-950 md:text-6xl">
              REN DESIGN JOINT STOCK COMPANY Terms of Use
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              This page sets out the rules, rights, and limitations that apply when you use
              ACEDev websites, games, and related digital services.
            </p>
            <div className="mt-8 flex flex-col gap-3 border-t border-black/8 pt-6 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
              <div>Last updated: June 8, 2026</div>
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
                  <article
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-8 border-b border-black/8 pb-8 last:border-b-0 last:pb-0"
                  >
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

const sections = [
  {
    id: "introduction",
    title: "1. Introduction",
    body: [
      "This Privacy Policy explains how REN DESIGN JOINT STOCK COMPANY and its affiliated operating entity, REN DESIGN CONSTRUCTION INVESTMENT AND ARCHITECTURE JOINT STOCK COMPANY, collect, use, store, and disclose information when users interact with ACEDev websites, mobile games, applications, support channels, and related services.",
      "This policy applies to our websites, game landing pages, mobile apps, live operations, customer support, and other related digital services we make available.",
      "By using our services, you acknowledge that your information may be processed as described in this policy, subject to applicable law.",
    ],
  },
  {
    id: "where-data-comes-from",
    title: "2. Where We Get Your Data",
    body: [
      "We may collect information directly from you when you contact us, submit support requests, communicate with us by email, provide feedback, respond to promotions, or otherwise interact with our services.",
      "We may collect information automatically when you use our websites or games, including device details, operating system, language, gameplay events, crash information, advertising identifiers, IP address, browser data, session activity, and approximate location inferred from network or device information.",
      "We may also receive information from third parties such as app stores, analytics providers, advertising networks, social login providers, payment processors, attribution services, hosting providers, and fraud-prevention or security partners.",
    ],
  },
  {
    id: "data-processing",
    title: "3. What Data We Process and Why",
    body: [
      "We use information to provide and operate our services, save or restore player progress where supported, maintain game functionality, authenticate users where relevant, process transactions through platform providers, and deliver customer support.",
      "We also use information to analyze gameplay, improve technical performance, monitor stability, diagnose bugs, detect abuse or fraud, measure campaigns, understand user engagement, and maintain service security.",
      "Where permitted, we may use data for advertising, attribution, audience measurement, re-engagement, and promotion of our games across websites, ad networks, social platforms, and app distribution channels.",
    ],
  },
  {
    id: "legal-basis",
    title: "4. Legal Basis for Processing",
    body: [
      "Where required by law, we process personal data only when a valid legal basis applies. Depending on the service and jurisdiction, this may include your consent, our legitimate interests in operating and securing the services, performance of a contract, or compliance with a legal obligation.",
      "If we rely on consent for certain advertising, analytics, or messaging activities, you may be able to withdraw that consent through device, browser, or in-app settings, subject to technical and legal limitations.",
    ],
  },
  {
    id: "ads-analytics",
    title: "5. Advertising, Analytics, and Similar Technologies",
    body: [
      "Our services may use analytics SDKs, advertising SDKs, cookies, pixels, software development kits, and similar technologies to understand service usage, measure campaign performance, personalize content where permitted, prevent fraud, and support monetization.",
      "Depending on the device, platform, and local law, you may manage advertising preferences through your browser settings, operating-system privacy controls, cookie controls, or platform-level advertising settings.",
      "Third-party partners may process data under their own privacy terms when they provide measurement, attribution, advertising delivery, or related infrastructure.",
    ],
  },
  {
    id: "sharing",
    title: "6. Sharing of Information",
    body: [
      "We may share information with service providers and business partners that help us host, distribute, operate, analyze, secure, monetize, and support our services. This may include cloud providers, app stores, analytics partners, advertising partners, attribution providers, payment processors, customer-support tools, fraud-prevention services, and legal or professional advisors.",
      "We may also share information with public authorities, regulators, auditors, courts, or law-enforcement bodies where required by law, to respond to valid legal requests, or to protect rights, safety, systems, or users.",
      "We do not sell personal information in the ordinary meaning of a direct sale for money. However, some jurisdictions define certain advertising or analytics activities broadly, and users may have additional rights under local law.",
    ],
  },
  {
    id: "retention",
    title: "7. Data Retention",
    body: [
      "We retain information only for as long as reasonably necessary for the purposes described in this policy, including account or gameplay support, service delivery, dispute resolution, fraud prevention, security, bookkeeping, and legal compliance.",
      "Retention periods may vary depending on the type of data, the service involved, technical backup cycles, unresolved disputes, chargeback windows, and applicable legal or regulatory obligations.",
    ],
  },
  {
    id: "international-transfers",
    title: "8. International Transfers",
    body: [
      "Your information may be processed in countries other than the country where you are located, including jurisdictions where our vendors, infrastructure providers, or partners operate.",
      "When required, we take appropriate measures intended to safeguard international transfers, which may include contractual protections, internal controls, and reasonable technical and organizational safeguards.",
    ],
  },
  {
    id: "automated-decisions",
    title: "9. Automated Decisions",
    body: [
      "We may use automated tools to support fraud detection, security monitoring, ad measurement, gameplay analytics, or service operations. We do not intentionally rely on solely automated decision-making in a manner that produces legal or similarly significant effects on users unless permitted by law and accompanied by required safeguards.",
    ],
  },
  {
    id: "children",
    title: "10. Children's Privacy",
    body: [
      "Our services are not intended to knowingly collect personal information from children in violation of applicable law. If we learn that personal information from a child was collected improperly, we may restrict the relevant account or service access and take steps to delete or de-identify the data where appropriate.",
      "If you believe that a child has provided personal information to us improperly, please contact us so we can review and take appropriate action.",
    ],
  },
  {
    id: "security",
    title: "11. Security",
    body: [
      "We use reasonable administrative, technical, and organizational measures to protect information. No system is completely secure, and we cannot guarantee absolute security of data transmitted or stored through online systems.",
    ],
  },
  {
    id: "your-rights",
    title: "12. Your Rights",
    body: [
      "Depending on your location, you may have rights to request access, correction, deletion, restriction, portability, objection, or withdrawal of consent. In some jurisdictions, you may also have rights to complain to a regulator or request information about categories of data, categories of recipients, or specific disclosure practices.",
      "We may need to verify your identity before responding to certain requests, and some requests may be limited where exceptions under applicable law apply.",
      "If an app or service includes account creation, you may request deletion of your app account and associated data through our account deletion page at https://acedev.tech/account-deletion.html.",
    ],
  },
  {
    id: "us-residents",
    title: "13. Additional Notice for Certain U.S. Residents",
    body: [
      "Residents of certain U.S. states may have additional privacy rights, such as rights to know, access, delete, correct, opt out of certain profiling, targeted advertising, or certain data-sharing activities, subject to applicable statutory exceptions.",
      "Where required, authorized agents may submit requests on behalf of users, subject to verification requirements and proof of authority.",
    ],
  },
  {
    id: "changes",
    title: "14. Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. When we do, we will revise the effective or last updated date and may provide additional notice where required by law.",
    ],
  },
  {
    id: "contact",
    title: "15. Contact Information",
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
              protected in connection with ACEDev websites, games, mobile applications,
              and related services published or operated by REN DESIGN entities.
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

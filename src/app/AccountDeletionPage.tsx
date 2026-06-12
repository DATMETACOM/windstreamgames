const requestSteps = [
  "Send a request from the email address associated with your app account to toxuantung1305@gmail.com with the subject line: Account Deletion Request.",
  "Include the game or service name, your player ID, username, email address, or other account identifier so we can locate the correct account.",
  "If needed, we may request additional verification before processing deletion in order to protect accounts from unauthorized requests.",
];

const outcomes = [
  "Once a valid request is confirmed, we will delete the app account and the user data associated with that account, except data we are required or permitted to retain by law or for legitimate purposes such as security and fraud prevention.",
  "Temporary deactivation, disabling, or uninstalling the app does not by itself delete the account.",
  "Limited records may be retained for a reasonable period where required for transaction reconciliation, dispute handling, legal compliance, security, or fraud prevention.",
  "If some data remains in secure backups for a limited period, it will be deleted or de-identified when those backup systems rotate through their normal retention cycle.",
];

export function AccountDeletionPage() {
  return (
    <div className="min-h-screen bg-[#eef4ff] text-slate-950">
      <main className="px-4 pb-16 pt-10 sm:px-6 md:pb-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <a
            href="/"
            className="inline-flex rounded-full border border-black/10 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:bg-white"
          >
            Back to home
          </a>

          <div className="mt-8 rounded-[2.5rem] border border-black/8 bg-white/80 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] md:p-12">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Account Deletion</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.05em] text-slate-950 md:text-6xl">
              Request Account and Data Deletion
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              This page is the public web resource users can use to request deletion of an app
              account and associated data for any REN DESIGN or ACEDev app or service that
              supports account creation.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
              This web request option is available even if you no longer have access to the app
              or have already uninstalled it.
            </p>
            <div className="mt-8 flex flex-col gap-3 border-t border-black/8 pt-6 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
              <div>Last updated: June 12, 2026</div>
              <div>REN DESIGN JOINT STOCK COMPANY</div>
            </div>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[0.58fr_0.42fr]">
            <section className="rounded-[2rem] border border-black/8 bg-white/75 p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)] md:p-8">
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">
                How to submit a request
              </h2>
              <ol className="mt-5 space-y-4 text-base leading-8 text-slate-700">
                {requestSteps.map((step, index) => (
                  <li key={index}>
                    <span className="mr-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
                      {index + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>

              <div className="mt-8 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Request email
                </p>
                <a
                  href="mailto:toxuantung1305@gmail.com?subject=Account%20Deletion%20Request"
                  className="mt-3 inline-block text-lg font-semibold text-slate-950 underline decoration-slate-300 underline-offset-4"
                >
                  toxuantung1305@gmail.com
                </a>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  We will review valid requests within a reasonable period and may contact you if
                  we need identity verification, account clarification, or supporting details to
                  process the request safely.
                </p>
              </div>
            </section>

            <aside className="space-y-8">
              <section className="rounded-[2rem] border border-black/8 bg-white/75 p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)]">
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">
                  What happens next
                </h2>
                <div className="mt-4 space-y-4">
                  {outcomes.map((item, index) => (
                    <p key={index} className="text-base leading-8 text-slate-700">
                      {item}
                    </p>
                  ))}
                </div>
              </section>

              <section className="rounded-[2rem] border border-black/8 bg-white/75 p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)]">
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">
                  Data covered by this request
                </h2>
                <div className="mt-4 space-y-4 text-base leading-8 text-slate-700">
                  <p>
                    This request is intended to cover the app account and data associated with that
                    account, which may include profile details, saved progress, support records,
                    and other account-linked personal data processed by us for the app or service.
                  </p>
                  <p>
                    Where third-party service providers process account-linked data on our behalf,
                    we will also take reasonable steps to request deletion through those providers
                    where applicable.
                  </p>
                </div>
              </section>

              <section className="rounded-[2rem] border border-black/8 bg-white/75 p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)]">
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">
                  Related policies
                </h2>
                <div className="mt-4 space-y-3 text-base leading-8 text-slate-700">
                  <p>
                    Privacy Policy: <a href="/privacy.html" className="underline underline-offset-4">/privacy.html</a>
                  </p>
                  <p>
                    Terms of Use: <a href="/terms.html" className="underline underline-offset-4">/terms.html</a>
                  </p>
                </div>
              </section>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}

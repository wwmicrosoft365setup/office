import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/activate")({
  head: () => ({
    meta: [
      { title: "Fix Microsoft 365 Activation & 'Unlicensed Product' Errors" },
      {
        name: "description",
        content:
          "Troubleshoot Microsoft 365 activation problems: 'Unlicensed Product', sign-in loops, activation errors, and the Office repair tool. Fix it in minutes.",
      },
      { property: "og:title", content: "Fix Microsoft 365 Activation Errors" },
      {
        property: "og:description",
        content:
          "Resolve 'Unlicensed Product', sign-in loops, and activation errors in Microsoft 365 with these steps.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ActivatePage,
});

function ActivatePage() {
  return (
    <SiteLayout>
      <>
        <article className="mx-auto max-w-3xl px-4 py-12">
          <header className="border-b border-border pb-8">
            <p className="text-sm font-medium text-primary">Activation Help</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-balance">
              Fix Microsoft 365 activation problems
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Most activation issues come down to being signed in with the wrong account or an
              expired plan. Work through these fixes in order — the first two solve the majority of
              cases.
            </p>
          </header>
          <div className="mt-8 space-y-6">
            <section className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-start gap-3">
                <span className="grid h-7 w-7 flex-shrink-0 place-items-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  1
                </span>
                <h2 className="text-lg font-semibold tracking-tight">
                  “Unlicensed Product” or “Activation Required” banner
                </h2>
              </div>
              <div className="prose-step mt-4 space-y-3 pl-10 text-[15px]">
                <p>
                  This usually means Office isn&#x27;t signed in with the account that holds your
                  subscription. Open any Office app → <strong>File → Account</strong> →{" "}
                  <strong>Sign Out</strong> of any account shown, then sign back in with the account
                  you used to subscribe or redeem.
                </p>
                <p>
                  Still there? Your subscription may have lapsed — check status at{" "}
                  <a
                    href="https://account.microsoft.com/services"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-primary underline-offset-4 hover:underline"
                  >
                    Services &amp; subscriptions
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M7 17 17 7M9 7h8v8" />
                    </svg>
                  </a>{" "}
                  and renew if needed.
                </p>
              </div>
            </section>
            <section className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-start gap-3">
                <span className="grid h-7 w-7 flex-shrink-0 place-items-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  2
                </span>
                <h2 className="text-lg font-semibold tracking-tight">
                  Sign-in loop or “Sorry, we can&#x27;t connect”
                </h2>
              </div>
              <div className="prose-step mt-4 space-y-3 pl-10 text-[15px]">
                <p>
                  Close all Office apps, then sign in once at{" "}
                  <a
                    href="https://account.microsoft.com/"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-primary underline-offset-4 hover:underline"
                  >
                    account.microsoft.com
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M7 17 17 7M9 7h8v8" />
                    </svg>
                  </a>{" "}
                  in your browser so the session is fresh. Reopen Word and sign in again.
                </p>
                <p>
                  On Windows, a stuck credential can cause loops: open{" "}
                  <strong>Settings → Accounts → Access work or school</strong>, disconnect any old
                  accounts, then sign back in inside Office.
                </p>
              </div>
            </section>
            <section className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-start gap-3">
                <span className="grid h-7 w-7 flex-shrink-0 place-items-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  3
                </span>
                <h2 className="text-lg font-semibold tracking-tight">
                  Activation error codes (0xC004C003, 0x80070005, etc.)
                </h2>
              </div>
              <div className="prose-step mt-4 space-y-3 pl-10 text-[15px]">
                <p>
                  Many codes mean the product key isn&#x27;t linked to your account yet or the
                  device limit is reached. If you have a key, redeem it at{" "}
                  <a
                    href="https://setup.office.com/"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-primary underline-offset-4 hover:underline"
                  >
                    setup.office.com
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M7 17 17 7M9 7h8v8" />
                    </svg>
                  </a>{" "}
                  first. Microsoft 365 Personal/Family allow installs on up to five devices each —
                  sign out of a device you no longer use in Services &amp; subscriptions.
                </p>
                <p>
                  For the exact meaning of a code, search it on{" "}
                  <a
                    href="https://support.microsoft.com/"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-primary underline-offset-4 hover:underline"
                  >
                    support.microsoft.com
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M7 17 17 7M9 7h8v8" />
                    </svg>
                  </a>{" "}
                  for the official fix.
                </p>
              </div>
            </section>
            <section className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-start gap-3">
                <span className="grid h-7 w-7 flex-shrink-0 place-items-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  4
                </span>
                <h2 className="text-lg font-semibold tracking-tight">Run the Office repair tool</h2>
              </div>
              <div className="prose-step mt-4 space-y-3 pl-10 text-[15px]">
                <p>
                  On Windows, a damaged install can break activation. Go to{" "}
                  <strong>
                    Settings → Apps → Installed apps → Microsoft 365 → Modify → Quick Repair
                  </strong>
                  . If that doesn&#x27;t help, repeat with <strong>Online Repair</strong> (takes
                  longer, reinstalls files).
                </p>
                <p>
                  On Mac, the easiest fix is to remove Office from Applications and reinstall it
                  fresh from your account.
                </p>
              </div>
            </section>
            <section className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-start gap-3">
                <span className="grid h-7 w-7 flex-shrink-0 place-items-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  5
                </span>
                <h2 className="text-lg font-semibold tracking-tight">
                  Check date, time, and firewall
                </h2>
              </div>
              <div className="prose-step mt-4 space-y-3 pl-10 text-[15px]">
                <p>
                  Activation needs a secure connection to Microsoft. Confirm your device&#x27;s date
                  and time are set automatically (a wrong clock blocks the TLS handshake), and that
                  your firewall or VPN isn&#x27;t blocking Office from reaching the internet.
                </p>
              </div>
            </section>
          </div>
          <div className="mt-10 rounded-xl border border-border bg-muted/40 p-6">
            <h2 className="font-semibold">Still won&#x27;t activate?</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Microsoft offers free support for activation on genuine purchases. Start at{" "}
              <a
                href="https://support.microsoft.com/contactus"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-primary underline-offset-4 hover:underline"
              >
                support.microsoft.com/contactus
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M7 17 17 7M9 7h8v8" />
                </svg>
              </a>{" "}
              and choose Office for the contact options. Have your account email and any order
              number ready.
            </p>
          </div>
          <nav className="mt-12 flex flex-col gap-3 border-t border-border pt-8 sm:flex-row sm:justify-between">
            <a
              href="/faq"
              className="inline-flex items-center justify-center gap-1.5 rounded-md border border-border bg-background px-5 py-2.5 text-sm font-medium hover:bg-accent"
            >
              Read the FAQ →
            </a>
            <a
              href="/setup"
              className="inline-flex items-center justify-center gap-1.5 rounded-md border border-border bg-background px-5 py-2.5 text-sm font-medium hover:bg-accent"
            >
              ← Back to setup guide
            </a>
          </nav>
        </article>
      </>
    </SiteLayout>
  );
}

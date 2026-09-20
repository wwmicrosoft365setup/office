import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/setup")({
  head: () => ({
    meta: [
      { title: "How to Set Up Microsoft 365 — Step-by-Step Guide" },
      {
        name: "description",
        content:
          "Complete Microsoft 365 setup walkthrough: sign in, redeem a product key, install the Office apps, and verify activation. Links to official Microsoft pages.",
      },
      { property: "og:title", content: "How to Set Up Microsoft 365 — Step-by-Step" },
      {
        property: "og:description",
        content:
          "Sign in, redeem a product key, install Office apps, and activate Microsoft 365. Step-by-step guide with official links.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SetupPage,
});

function SetupPage() {
  return (
    <SiteLayout>
      <>
        <article className="mx-auto max-w-3xl px-4 py-12">
          <header className="border-b border-border pb-8">
            <p className="text-sm font-medium text-primary">Setup Guide</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-balance">
              How to set up Microsoft 365 and Office
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Follow these seven steps in order. Each one links to the official Microsoft page where
              the action actually happens — you&#x27;ll never be asked for your password here.
            </p>
          </header>
          <ol className="mt-10 space-y-10">
            <li id="step-1" className="scroll-mt-20">
              <div className="flex gap-4">
                <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full border-2 border-primary text-sm font-bold text-primary">
                  1
                </span>
                <div className="min-w-0">
                  <h2 className="text-xl font-semibold tracking-tight">Confirm what you bought</h2>
                  <div className="prose-step mt-3 space-y-3 text-[15px]">
                    <p>
                      You&#x27;ll have either a Microsoft 365 subscription (billed monthly or
                      yearly, tied to an account) or a one-time Office purchase that comes with a{" "}
                      <strong>25-character product key</strong>. Check your purchase confirmation
                      email so you know which path you&#x27;re on.
                    </p>
                    <p>
                      No subscription yet? You can compare plans on the official{" "}
                      <a
                        href="https://www.microsoft.com/microsoft-365"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-medium text-primary underline-offset-4 hover:underline"
                      >
                        Microsoft 365 page
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
                      — buying there links the subscription to your account automatically.
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li id="step-2" className="scroll-mt-20">
              <div className="flex gap-4">
                <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full border-2 border-primary text-sm font-bold text-primary">
                  2
                </span>
                <div className="min-w-0">
                  <h2 className="text-xl font-semibold tracking-tight">
                    Sign in to (or create) a Microsoft account
                  </h2>
                  <div className="prose-step mt-3 space-y-3 text-[15px]">
                    <p>
                      Everything in Microsoft 365 is tied to a Microsoft account — this is where
                      your subscription, devices, and product keys live. Go to{" "}
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
                      and sign in.
                    </p>
                    <p>
                      If you don&#x27;t have one, choose <em>Create one</em>. A free account works
                      even if you later add a paid subscription or redeem a product key to it.
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li id="step-3" className="scroll-mt-20">
              <div className="flex gap-4">
                <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full border-2 border-primary text-sm font-bold text-primary">
                  3
                </span>
                <div className="min-w-0">
                  <h2 className="text-xl font-semibold tracking-tight">
                    Redeem a product key (if you have one)
                  </h2>
                  <div className="prose-step mt-3 space-y-3 text-[15px]">
                    <p>
                      Bought Office as a one-time purchase or a gift key? Redeem it so it&#x27;s
                      attached to your account. Visit{" "}
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
                      (or microsoft.com/redemption), sign in, and enter the 25-character key exactly
                      as printed, including the dashes.
                    </p>
                    <p>
                      Once redeemed you&#x27;ll never need the key again — it lives on your account,
                      so you can reinstall any time by signing in.
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li id="step-4" className="scroll-mt-20">
              <div className="flex gap-4">
                <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full border-2 border-primary text-sm font-bold text-primary">
                  4
                </span>
                <div className="min-w-0">
                  <h2 className="text-xl font-semibold tracking-tight">Install the Office apps</h2>
                  <div className="prose-step mt-3 space-y-3 text-[15px]">
                    <p>
                      Open{" "}
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
                      and find your Microsoft 365 plan or Office product. Choose{" "}
                      <strong>Install</strong> to download the official installer. This is the only
                      legitimate download source — never install Office from a third-party mirror.
                    </p>
                    <p>
                      On mobile, get the apps from your device&#x27;s official store (Microsoft 365
                      app, Word, Excel, PowerPoint) and sign in to unlock editing.
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li id="step-5" className="scroll-mt-20">
              <div className="flex gap-4">
                <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full border-2 border-primary text-sm font-bold text-primary">
                  5
                </span>
                <div className="min-w-0">
                  <h2 className="text-xl font-semibold tracking-tight">Run the installer</h2>
                  <div className="prose-step mt-3 space-y-3 text-[15px]">
                    <p>
                      <strong>Windows:</strong> open the downloaded{" "}
                      <code className="rounded bg-muted px-1.5 py-0.5 text-sm">
                        OfficeSetup.exe
                      </code>{" "}
                      and follow the prompts. Installation runs in the background; Office appears in
                      your Start menu when it&#x27;s done.
                    </p>
                    <p>
                      <strong>Mac:</strong> open the{" "}
                      <code className="rounded bg-muted px-1.5 py-0.5 text-sm">.pkg</code> file,
                      agree to the license, and let it install to your Applications folder.
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li id="step-6" className="scroll-mt-20">
              <div className="flex gap-4">
                <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full border-2 border-primary text-sm font-bold text-primary">
                  6
                </span>
                <div className="min-w-0">
                  <h2 className="text-xl font-semibold tracking-tight">Sign in to activate</h2>
                  <div className="prose-step mt-3 space-y-3 text-[15px]">
                    <p>
                      Open Word (or Excel/PowerPoint). On the first-run screen choose{" "}
                      <strong>Sign In</strong> and use the same account that holds your subscription
                      or redeemed key. Accept the license terms when prompted.
                    </p>
                    <p>
                      Activation happens automatically once you&#x27;re signed in — there&#x27;s
                      nothing to type. If a “Let&#x27;s get started” or activation dialog appears,
                      just sign in again with that account.
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li id="step-7" className="scroll-mt-20">
              <div className="flex gap-4">
                <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full border-2 border-primary text-sm font-bold text-primary">
                  7
                </span>
                <div className="min-w-0">
                  <h2 className="text-xl font-semibold tracking-tight">Verify activation</h2>
                  <div className="prose-step mt-3 space-y-3 text-[15px]">
                    <p>
                      In any Office app open <strong>File → Account</strong>. Under “Product
                      Information” you should see your Microsoft 365 subscription or Office product
                      listed as active, with no “Unlicensed Product” banner. That&#x27;s it —
                      you&#x27;re set up.
                    </p>
                    <p>
                      If you see an activation or license error instead, jump to the{" "}
                      <a href="/activate" className="font-medium text-primary hover:underline">
                        activation troubleshooting
                      </a>{" "}
                      guide.
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ol>
          <div className="mt-12 rounded-xl border border-primary/30 bg-accent/50 p-6">
            <h2 className="font-semibold">Prefer the official page directly?</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              If you already know what you&#x27;re doing, you can go straight to the source.
              Microsoft&#x27;s guided setup at{" "}
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
              walks you through signing in and installing.
            </p>
          </div>
          <nav className="mt-12 flex flex-col gap-3 border-t border-border pt-8 sm:flex-row sm:justify-between">
            <a
              href="/download"
              className="inline-flex items-center justify-center gap-1.5 rounded-md border border-border bg-background px-5 py-2.5 text-sm font-medium hover:bg-accent"
            >
              Next: Download &amp; install details →
            </a>
            <a
              href="/faq"
              className="inline-flex items-center justify-center gap-1.5 rounded-md border border-border bg-background px-5 py-2.5 text-sm font-medium hover:bg-accent"
            >
              Read the FAQ →
            </a>
          </nav>
        </article>
      </>
    </SiteLayout>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Microsoft 365 Setup Guide — Install, Sign In & Activate Office" },
      {
        name: "description",
        content:
          "Free, plain-English guide to setting up Microsoft 365 and Office: download, install, sign in, redeem a product key, and activate. Links to official Microsoft pages.",
      },
      { property: "og:title", content: "Microsoft 365 Setup Guide — Install & Activate Office" },
      {
        property: "og:description",
        content:
          "Step-by-step help to set up Microsoft 365: download, install, sign in, redeem a key, and activate. Links to official Microsoft pages.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <>
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_120%_at_50%_0%,oklch(0.95_0.05_250)_0%,transparent_60%)] dark:bg-[radial-gradient(60%_120%_at_50%_0%,oklch(0.28_0.06_250)_0%,transparent_60%)]"></div>
          <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:py-28">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>Independent guide · not
              affiliated with Microsoft
            </span>
            <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl">
              Set up Microsoft 365 the <span className="text-primary">right way</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
              Clear, step-by-step help to install Microsoft 365 and Office apps, sign in, redeem a
              product key, and get everything activated. Every guide sends you to the official
              Microsoft pages.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="/setup"
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 sm:w-auto"
              >
                Start the setup guide
              </a>
              <a
                href="/faq"
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent sm:w-auto"
              >
                Read the FAQ
              </a>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              No sign-up · no downloads hosted here · always links to{" "}
              <a
                href="https://www.microsoft.com/microsoft-365"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-primary underline-offset-4 hover:underline"
              >
                microsoft.com
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
              </a>
            </p>
          </div>
        </section>
        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Pick what you need help with
            </h2>
            <p className="mt-3 text-muted-foreground">
              Each guide walks you through the steps and links to the official Microsoft page where
              the action actually happens.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <a
              href="/setup"
              className="card-hover group flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm hover:border-primary/40 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-accent text-accent-foreground">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01" />
                  </svg>
                </span>
                <span className="text-xs font-medium text-muted-foreground">8 min read</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold tracking-tight">Full setup walkthrough</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                The complete path from purchase to a working Office installation — sign in, redeem a
                key, install, and verify activation.
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                Read guide
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </span>
            </a>
            <a
              href="/download"
              className="card-hover group flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm hover:border-primary/40 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-accent text-accent-foreground">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" />
                  </svg>
                </span>
                <span className="text-xs font-medium text-muted-foreground">5 min read</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold tracking-tight">Download &amp; install</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Get the installer for Windows, Mac, and mobile from the official source and run it
                without surprises.
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                Read guide
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </span>
            </a>
            <a
              href="/activate"
              className="card-hover group flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm hover:border-primary/40 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-accent text-accent-foreground">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="7.5" cy="15.5" r="3.5" />
                    <path d="M10 13 19 4m-3 0 3 3" />
                  </svg>
                </span>
                <span className="text-xs font-medium text-muted-foreground">6 min read</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold tracking-tight">
                Activation &amp; troubleshooting
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Fix &#x27;Unlicensed product&#x27;, sign-in loops, and activation errors so Word,
                Excel, and Outlook open normally.
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                Read guide
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </span>
            </a>
            <a
              href="/faq"
              className="card-hover group flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm hover:border-primary/40 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-accent text-accent-foreground">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.8.4-1 .9-1 1.7M12 17h.01" />
                  </svg>
                </span>
                <span className="text-xs font-medium text-muted-foreground">4 min read</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold tracking-tight">
                Frequently asked questions
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Product keys vs. subscription, how many devices, what happens when you renew —
                straight answers.
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                Read guide
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </span>
            </a>
          </div>
        </section>
        <section className="border-y border-border bg-muted/30">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 md:grid-cols-3">
            <div>
              <h3 className="font-semibold tracking-tight">We never touch your account</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                You sign in, redeem keys, and download on official microsoft.com pages. This site is
                text and links — no forms, no password fields, no payments.
              </p>
            </div>
            <div>
              <h3 className="font-semibold tracking-tight">Plain English, not jargon</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Guides explain each step in order, with what you&#x27;ll see on screen and what to
                do if something looks different on your device.
              </p>
            </div>
            <div>
              <h3 className="font-semibold tracking-tight">Built for speed</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                A lightweight, mobile-first page with minimal scripts, so it loads fast even on a
                slow connection — good for you and for search ranking.
              </p>
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-3xl px-4 py-16">
          <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
            Common questions
          </h2>
          <dl className="mt-8 space-y-4">
            <div className="rounded-xl border border-border bg-card p-5">
              <dt className="font-semibold">Do I need a Microsoft account to set up Office?</dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                Yes. A free Microsoft account is required to sign in, install, and activate
                Microsoft 365 or Office. If you bought a product key, you redeem it to that account.
              </dd>
            </div>
            <div className="rounded-xl border border-border bg-card p-5">
              <dt className="font-semibold">Is this the official Microsoft setup page?</dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                No. This is an independent help site. We explain the steps and link you to the
                official microsoft.com pages where sign-in, downloads, and activation actually
                happen.
              </dd>
            </div>
            <div className="rounded-xl border border-border bg-card p-5">
              <dt className="font-semibold">How many devices can I install on?</dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                Microsoft 365 Personal covers one person on up to five devices; Family covers up to
                six people, each with five devices. One-time Office purchases are for one PC or Mac.
              </dd>
            </div>
          </dl>
          <div className="mt-8 text-center">
            <a
              href="/faq"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
            >
              See all FAQs →
            </a>
          </div>
        </section>
      </>
    </SiteLayout>
  );
}

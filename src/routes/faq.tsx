import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Microsoft 365 Setup FAQ — Keys, Devices & Activation" },
      {
        name: "description",
        content:
          "Answers to common Microsoft 365 setup questions: product keys vs. subscription, device limits, transferring licenses, and what happens when you renew.",
      },
      { property: "og:title", content: "Microsoft 365 Setup FAQ" },
      {
        property: "og:description",
        content:
          "Product keys vs. subscription, device limits, transfers, and renewal — answered plainly.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <SiteLayout>
      <>
        <article className="mx-auto max-w-3xl px-4 py-12">
          <header className="border-b border-border pb-8">
            <p className="text-sm font-medium text-primary">FAQ</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-balance">
              Microsoft 365 setup — frequently asked questions
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Straight answers about accounts, product keys, devices, and what happens when you
              renew. Need the steps instead? See the{" "}
              <a href="/setup" className="font-medium text-primary hover:underline">
                full setup guide
              </a>
              .
            </p>
          </header>
          <div className="mt-8 divide-y divide-border">
            <details className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold tracking-tight">
                Is OfficeSetup Guide affiliated with Microsoft?
                <span className="grid h-6 w-6 flex-shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="prose-step mt-3 text-[15px]">
                No. We&#x27;re an independent, unofficial help site. We explain the setup steps in
                plain English and link you to the official microsoft.com pages where sign-in,
                downloads, and activation actually happen. We never ask for your password or process
                payments.
              </p>
            </details>
            <details className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold tracking-tight">
                Do I need a Microsoft account to use Microsoft 365?
                <span className="grid h-6 w-6 flex-shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="prose-step mt-3 text-[15px]">
                Yes. A Microsoft account holds your subscription, product keys, and device installs.
                Sign in at account.microsoft.com; if you don&#x27;t have one, you can create a free
                account in a couple of minutes.
              </p>
            </details>
            <details className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold tracking-tight">
                What&#x27;s the difference between Microsoft 365 and one-time Office?
                <span className="grid h-6 w-6 flex-shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="prose-step mt-3 text-[15px]">
                Microsoft 365 is a subscription (Personal or Family) billed monthly/yearly that
                includes the latest Office apps, cloud storage, and ongoing updates. A one-time
                Office purchase (e.g. Office Home &amp; Student) is a single payment for one PC or
                Mac with the features at time of purchase — no future feature updates.
              </p>
            </details>
            <details className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold tracking-tight">
                How many devices can I install Microsoft 365 on?
                <span className="grid h-6 w-6 flex-shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="prose-step mt-3 text-[15px]">
                Microsoft 365 Personal lets one person install on up to 5 devices. Microsoft 365
                Family covers up to 6 people, each with 5 devices. One-time Office purchases are
                licensed for one PC or Mac.
              </p>
            </details>
            <details className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold tracking-tight">
                Where do I redeem my 25-character product key?
                <span className="grid h-6 w-6 flex-shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="prose-step mt-3 text-[15px]">
                Go to setup.office.com (or microsoft.com/redemption), sign in with the Microsoft
                account you want the product attached to, and enter the key. After that the product
                lives on your account and you&#x27;ll never need the key again.
              </p>
            </details>
            <details className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold tracking-tight">
                Is it safe to download Office from this site?
                <span className="grid h-6 w-6 flex-shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="prose-step mt-3 text-[15px]">
                We don&#x27;t host any downloads. You always download from your own Microsoft
                account at account.microsoft.com/services — the only legitimate source. Avoid
                third-party mirrors and &#x27;free Office&#x27; sites, which often carry malware and
                won&#x27;t activate.
              </p>
            </details>
            <details className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold tracking-tight">
                Can I transfer Office to a new computer?
                <span className="grid h-6 w-6 flex-shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="prose-step mt-3 text-[15px]">
                Yes. For Microsoft 365, sign in on the new device and install from Services &amp;
                subscriptions; sign out of the old device there if you&#x27;ve hit the device limit.
                For a redeemed one-time Office product, sign in on the new PC/Mac and reinstall —
                the license travels with your account.
              </p>
            </details>
            <details className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold tracking-tight">
                What happens when my subscription expires?
                <span className="grid h-6 w-6 flex-shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="prose-step mt-3 text-[15px]">
                The Office apps switch to view-only mode (you can read and print but not edit), and
                OneDrive storage drops to the free 5 GB. Your files stay safe. Renew anytime from
                Services &amp; subscriptions to restore full editing.
              </p>
            </details>
            <details className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold tracking-tight">
                Do I need to uninstall old Office before installing?
                <span className="grid h-6 w-6 flex-shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="prose-step mt-3 text-[15px]">
                It&#x27;s recommended. Having an older or trial Office alongside a new subscription
                is a common cause of activation errors. Uninstall the old version first, then
                install fresh from your account.
              </p>
            </details>
            <details className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold tracking-tight">
                Does Microsoft 365 work on Mac and mobile?
                <span className="grid h-6 w-6 flex-shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="prose-step mt-3 text-[15px]">
                Yes. The same subscription installs full Office apps on Windows, Mac, Android, and
                iPhone/iPad — up to five devices per person. Get the mobile apps from your
                device&#x27;s official store and sign in to unlock editing.
              </p>
            </details>
          </div>
          <div className="mt-12 rounded-xl border border-primary/30 bg-accent/50 p-6 text-center">
            <h2 className="font-semibold">Ready to set up?</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Head to the official{" "}
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
              page to install, or follow our{" "}
              <a href="/setup" className="font-medium text-primary hover:underline">
                step-by-step guide
              </a>
              .
            </p>
          </div>
        </article>
      </>
    </SiteLayout>
  );
}

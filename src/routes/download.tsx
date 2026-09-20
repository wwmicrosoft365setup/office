import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/download")({
  head: () => ({
    meta: [
      { title: "Download & Install Microsoft 365 Office Apps (Official)" },
      {
        name: "description",
        content:
          "Download and install Microsoft 365 Office apps on Windows, Mac, and mobile from the official source. System requirements and install steps explained.",
      },
      { property: "og:title", content: "Download & Install Microsoft 365 Office Apps" },
      {
        property: "og:description",
        content:
          "Install Office apps on Windows, Mac, and mobile from the official Microsoft source. Requirements and steps.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DownloadPage,
});

function DownloadPage() {
  return (
    <SiteLayout>
      <>
        <article className="mx-auto max-w-3xl px-4 py-12">
          <header className="border-b border-border pb-8">
            <p className="text-sm font-medium text-primary">Download &amp; Install</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-balance">
              Download Microsoft 365 and Office apps the safe way
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              The only legitimate place to download Office is your own Microsoft account. Anything
              else — a “free Office” mirror, a key shop&#x27;s installer — risks malware and
              won&#x27;t activate.
            </p>
          </header>
          <section className="mt-10">
            <h2 className="text-xl font-semibold tracking-tight">Before you download</h2>
            <ul className="prose-step mt-4 space-y-2.5 text-[15px]">
              <li>
                A Microsoft account with an active Microsoft 365 subscription or redeemed Office
                product.
              </li>
              <li>
                Windows 10/11 (64-bit recommended) or macOS with the latest two versions. ~4 GB free
                disk space and an internet connection.
              </li>
              <li>Uninstall any older or trial Office first to avoid activation conflicts.</li>
            </ul>
          </section>
          <section className="mt-10">
            <h2 className="text-xl font-semibold tracking-tight">
              Step 1 — Open your download page
            </h2>
            <p className="prose-step mt-3 text-[15px]">
              Sign in at{" "}
              <a
                href="https://account.microsoft.com/services"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-primary underline-offset-4 hover:underline"
              >
                account.microsoft.com/services
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
              and scroll to your Microsoft 365 plan or Office product. Choose{" "}
              <strong>Install</strong> (or <strong>Install Office</strong>) to download the official
              installer to your device.
            </p>
          </section>
          <section className="mt-10">
            <h2 className="text-xl font-semibold tracking-tight">
              Step 2 — Install on your device
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-semibold">Windows</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Run the downloaded{" "}
                  <code className="rounded bg-muted px-1 py-0.5">OfficeSetup.exe</code>. The
                  installer runs in the background and installs Word, Excel, PowerPoint, and
                  Outlook. When it finishes, find Office in your Start menu.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-semibold">Mac</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Open the <code className="rounded bg-muted px-1 py-0.5">.pkg</code>, agree to the
                  license, and let the Microsoft Office installer copy the apps to Applications.
                  Launch Word and sign in to activate.
                </p>
              </div>
            </div>
          </section>
          <section className="mt-10">
            <h2 className="text-xl font-semibold tracking-tight">
              Step 3 — Install on phones &amp; tablets
            </h2>
            <p className="prose-step mt-3 text-[15px]">
              Get the apps from your device&#x27;s official store — search “Microsoft 365”, “Word”,
              “Excel”, or “PowerPoint”. Sign in with the account on your subscription to unlock full
              editing. Microsoft 365 subscribers can install on up to five devices per person.
            </p>
          </section>
          <div className="mt-10 rounded-xl border border-destructive/30 bg-destructive/5 p-5">
            <h3 className="flex items-center gap-2 font-semibold">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 9v4m0 4h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />
              </svg>{" "}
              Avoid unsafe downloads
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Never download Office from a third-party file host, torrent, or “free Office” site.
              These often bundle malware and the keys they sell are frequently volume-license keys
              that Microsoft later blocks. Only the installer from your Microsoft account is
              genuine.
            </p>
          </div>
          <nav className="mt-12 flex flex-col gap-3 border-t border-border pt-8 sm:flex-row sm:justify-between">
            <a
              href="/activate"
              className="inline-flex items-center justify-center gap-1.5 rounded-md border border-border bg-background px-5 py-2.5 text-sm font-medium hover:bg-accent"
            >
              Next: Activation &amp; troubleshooting →
            </a>
            <a
              href="/setup"
              className="inline-flex items-center justify-center gap-1.5 rounded-md border border-border bg-background px-5 py-2.5 text-sm font-medium hover:bg-accent"
            >
              ← Full setup guide
            </a>
          </nav>
        </article>
      </>
    </SiteLayout>
  );
}

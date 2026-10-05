const STATUS_URL = "https://www.githubstatus.com/api/v2/status.json";

export const dynamic = "force-dynamic";

async function getGitHubStatus() {
  try {
    const response = await fetch(STATUS_URL, {
      cache: "no-store",
      headers: { Accept: "application/json" },
    });

    if (!response.ok) {
      return { error: `GitHub Status returned HTTP ${response.status}.` };
    }

    const payload = await response.json();
    const status = payload.status;

    if (typeof status?.indicator !== "string" || typeof status?.description !== "string") {
      return { error: "GitHub Status returned an unexpected response." };
    }

    return {
      indicator: status.indicator,
      description: status.description,
      checkedAt: new Date().toISOString(),
    };
  } catch {
    return { error: "Could not reach the public GitHub Status API." };
  }
}

export default async function HealthPage() {
  const status = await getGitHubStatus();
  const isOperational = status.indicator === "none";

  return (
    <section className="mx-auto w-full max-w-4xl">
      <p className="mb-3 text-sm font-semibold text-[var(--accent)]">FlyRank workspace</p>
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Health</h1>
      <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--muted)]">
        Live status from GitHub&apos;s public status service. This checks the upstream service, not FlyRank application health.
      </p>

      <div className="surface mt-8 p-6 sm:p-8">
        <h2 className="text-lg font-semibold">GitHub Status API</h2>
        {status.error ? (
          <p className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900" role="status">
            {status.error}
          </p>
        ) : (
          <>
            <div className={`mt-4 rounded-lg border p-4 ${isOperational ? "border-emerald-200 bg-emerald-50" : "border-amber-200 bg-amber-50"}`}>
              <p className={`font-semibold ${isOperational ? "text-emerald-900" : "text-amber-900"}`}>
                {status.description}
              </p>
              <p className={`mt-1 text-sm ${isOperational ? "text-emerald-800" : "text-amber-800"}`}>
                Status indicator: {status.indicator}
              </p>
            </div>
            <p className="mt-4 text-sm text-[var(--muted)]">
              Checked at <time dateTime={status.checkedAt}>{new Date(status.checkedAt).toLocaleString("en", { timeZone: "UTC", dateStyle: "medium", timeStyle: "short" })} UTC</time>
            </p>
          </>
        )}
      </div>
    </section>
  );
}
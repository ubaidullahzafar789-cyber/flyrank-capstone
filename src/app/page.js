import Link from "next/link";

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-4xl py-8 sm:py-16">
      <p className="mb-4 text-sm font-semibold text-[var(--accent)]">Capstone workspace</p>
      <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
        A clear foundation for your next project.
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">
        FlyRank is ready to grow into your capstone. Start with the project areas below and shape each one around your goals.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/dashboard" className="button-primary">Open dashboard</Link>
        <Link href="/projects" className="inline-flex min-h-11 items-center rounded-lg border border-[var(--border)] bg-white px-4 text-sm font-semibold text-[var(--foreground)] transition-colors hover:bg-[#eef3ef]">
          View projects
        </Link>
      </div>
      <div className="mt-14 grid gap-4 sm:grid-cols-3">
        <Link href="/dashboard" className="surface block p-5 transition-transform hover:-translate-y-0.5">
          <h2 className="font-semibold">Dashboard</h2>
          <p className="mt-2 text-sm leading-6 text-[var(--muted)]">A home for future project metrics and updates.</p>
        </Link>
        <Link href="/projects" className="surface block p-5 transition-transform hover:-translate-y-0.5">
          <h2 className="font-semibold">Projects</h2>
          <p className="mt-2 text-sm leading-6 text-[var(--muted)]">A starting point for organizing project work.</p>
        </Link>
        <Link href="/settings" className="surface block p-5 transition-transform hover:-translate-y-0.5">
          <h2 className="font-semibold">Settings</h2>
          <p className="mt-2 text-sm leading-6 text-[var(--muted)]">A place for future workspace preferences.</p>
        </Link>
      </div>
    </div>
  );
}

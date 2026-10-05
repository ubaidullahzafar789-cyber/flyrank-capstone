export default function SectionPage({ title, description, emptyState }) {
  return (
    <section className="mx-auto w-full max-w-4xl">
      <p className="mb-3 text-sm font-semibold text-[var(--accent)]">FlyRank workspace</p>
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
      <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--muted)]">{description}</p>
      <div className="surface mt-8 p-6 sm:p-8">
        <h2 className="text-lg font-semibold">Ready to build</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--muted)]">{emptyState}</p>
      </div>
    </section>
  );
}
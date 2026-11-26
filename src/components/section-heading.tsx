export function SectionHeading({ command, title, intro }: { command: string; title: string; intro?: string }) {
  return (
    <header className="mb-10">
      <p className="kicker" aria-hidden>
        $ {command}
      </p>
      <h2 className="mt-2 font-mono text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      {intro ? <p className="mt-3 max-w-2xl text-muted-foreground">{intro}</p> : null}
    </header>
  );
}

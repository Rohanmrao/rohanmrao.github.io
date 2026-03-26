import { hero } from "@/content/portfolio";

export function HeroSection() {
  return (
    <section
      id="home"
      className="snap-section relative flex min-h-screen flex-col justify-center overflow-hidden px-6 py-24 lg:px-14"
    >
      <div
        className="pointer-events-none absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-primary/25 blur-[100px] dark:bg-primary/20 animate-float"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-1/4 h-72 w-72 rounded-full bg-accent/30 blur-[90px] dark:bg-accent/15 animate-float [animation-delay:-6s]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.2]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground) / 0.06) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground) / 0.06) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
        aria-hidden
      />

      <div className="hero-lines pointer-events-none absolute inset-y-0 right-[8%] hidden w-[min(40vw,28rem)] md:block">
        <div className="hero-line hero-line-1 absolute left-1/4 top-0 h-full w-px bg-foreground/10" />
        <div className="hero-line hero-line-2 absolute left-2/3 top-0 h-full w-px bg-foreground/10" />
      </div>

      <div className="relative max-w-3xl">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.35em] text-brand">
          {hero.headline}
        </p>
        <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] bg-clip-text text-transparent dark:from-primary dark:via-foreground/90 dark:to-primary">
            {hero.name}
          </span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl">
          {hero.tagline}
        </p>
        <p className="mt-4 max-w-xl font-display text-base font-medium text-primary sm:text-lg">
          {hero.subline}
        </p>
      </div>
    </section>
  );
}

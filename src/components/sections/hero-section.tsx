import { Button } from "@/components/ui/button";
import { contact, experience, hero } from "@/content/portfolio";
import { withBaseUrl } from "@/lib/base-url";
import { scrollToSection } from "@/lib/scroll";

export function HeroSection() {
  const current = experience[0];
  const github = contact.links.find((link) => link.label === "GitHub");

  return (
    <section id="home" className="section pt-10 sm:pt-20">
      <div className="panel overflow-hidden shadow-[0_0_60px_-30px_hsl(var(--primary)/0.45)]">
        <div className="flex items-center gap-2 border-b bg-muted/60 px-4 py-2.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-primary" />
          <span className="ml-2 font-mono text-xs text-muted-foreground">rohan@portfolio: ~</span>
        </div>
        <div className="grid gap-8 p-6 sm:p-10 md:grid-cols-[1fr_auto] md:items-center">
          <div className="min-w-0">
            <p className="kicker" aria-hidden>
              $ whoami
            </p>
            <p className="mt-4 font-mono text-sm text-muted-foreground">{hero.headline}</p>
            <h1 className="mt-1 font-mono text-3xl font-bold leading-tight tracking-tight sm:text-5xl">{hero.name}</h1>
            <p className="mt-3 font-mono text-sm text-primary">
              {current.role} @ {current.org}
            </p>
            <button type="button" className="mt-1 font-mono text-xs text-muted-foreground underline-offset-4 hover:text-primary hover:underline" onClick={() => scrollToSection("music")}>
              Also an artist and producer ♪
            </button>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">{hero.tagline}</p>
            <p className="mt-4 font-mono text-sm text-brand">{`// ${hero.subline}`}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button className="font-mono" onClick={() => scrollToSection("experience")}>
                View experience
              </Button>
              <Button variant="outline" className="font-mono" onClick={() => scrollToSection("blogs")}>
                Read the blog
              </Button>
              {github ? (
                <Button variant="ghost" className="font-mono" asChild>
                  <a href={github.href} target="_blank" rel="noopener noreferrer">
                    GitHub ↗
                  </a>
                </Button>
              ) : null}
            </div>
          </div>
          <img
            src={withBaseUrl("/static/profile.jpg")}
            alt="Rohan Mahesh Rao"
            width={208}
            height={208}
            className="order-first h-28 w-28 rounded-lg border-2 border-primary/60 object-cover md:order-none md:h-52 md:w-52"
          />
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";
import { contact, footer } from "@/content/portfolio";
import { cn } from "@/lib/utils";

export function ContactSection() {
  return (
    <section
      id="reachme"
      className={cn(
        "snap-section scroll-mt-20 px-6 pb-16 pt-12 lg:scroll-mt-8 lg:px-14"
      )}
    >
      <div className="relative mx-auto max-w-2xl overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-brand-muted/80 via-background to-secondary/40 p-10 shadow-inner dark:from-brand-muted/20 dark:via-background dark:to-secondary/10">
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/20 blur-3xl"
          aria-hidden
        />
        <h2 className="relative font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          {contact.intro}
        </h2>
        <div className="relative mt-10 flex w-full flex-nowrap items-stretch justify-center gap-2 overflow-x-auto pb-1 scrollbar-hide sm:gap-3">
          {contact.links.map((link) => (
            <Button
              key={link.href + link.label}
              size="lg"
              className="shrink-0 min-w-[6.75rem] px-3 font-display text-sm shadow-md sm:min-w-[8.5rem] sm:px-6 sm:text-base"
              asChild
            >
              <a
                href={link.href}
                {...(link.download
                  ? { download: link.download }
                  : link.href.startsWith("mailto:")
                    ? {}
                    : { target: "_blank", rel: "noopener noreferrer" })}
              >
                {link.label}
              </a>
            </Button>
          ))}
        </div>
        <p className="relative mt-10 text-center font-display text-xl text-foreground">
          {contact.closing}
        </p>
      </div>

      <footer className="mt-16 border-t border-border/40 pt-8 text-right text-sm text-muted-foreground">
        <p>
          {footer.name} · {footer.year}
        </p>
      </footer>
    </section>
  );
}

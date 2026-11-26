import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { contact, footer } from "@/content/portfolio";
import { withBaseUrl } from "@/lib/base-url";

function resolveContactHref(href: string): string {
  if (href.startsWith("http") || href.startsWith("mailto:")) return href;
  return withBaseUrl(href.startsWith("/") ? href : `/${href}`);
}

export function ContactSection() {
  return (
    <section id="reachme" className="section pb-8">
      <SectionHeading command="ping rohan" title="Reach me" intro={contact.intro} />
      <div className="panel p-6 sm:p-8">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {contact.links.map((link) => (
            <Button key={link.href + link.label} variant="outline" size="lg" className="px-3 font-mono text-sm hover:border-primary" asChild>
              <a
                href={resolveContactHref(link.href)}
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
        <p className="mt-6 font-mono text-sm text-primary">{contact.closing}</p>
      </div>
      <footer className="mt-16 border-t pt-6 font-mono text-xs text-muted-foreground">
        <p>
          {footer.name} · {footer.year}
        </p>
      </footer>
    </section>
  );
}

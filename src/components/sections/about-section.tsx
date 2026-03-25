import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { about } from "@/content/portfolio";

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-20 px-6 py-24 lg:scroll-mt-8 lg:px-14"
    >
      <div className="mx-auto max-w-2xl">
        <Badge variant="brand" className="mb-4 font-display uppercase tracking-widest">
          {about.title}
        </Badge>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          {about.lead}
        </h2>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {about.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <Separator className="my-10 bg-border/80" />
        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            {about.skillsLabel}
          </p>
          <p className="mt-3 text-base leading-relaxed text-foreground sm:text-lg">
            {about.skills}
          </p>
        </div>
      </div>
    </section>
  );
}

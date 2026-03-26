import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { experience } from "@/content/portfolio";
import { cn } from "@/lib/utils";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className={cn(
        "snap-section scroll-mt-20 border-y border-border/60 bg-muted/30 px-6 py-24 lg:scroll-mt-8 lg:px-14"
      )}
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="font-display text-3xl font-bold tracking-tight text-foreground">
          Experience
        </h2>
        <p className="mt-2 max-w-xl text-muted-foreground">
          Shipping systems end to end — APIs, data, cloud, and ML.
        </p>
        <ul className="mt-12 space-y-6">
          {experience.map((job) => (
            <li key={`${job.role}-${job.period}`}>
              <Card className="border-border/80 bg-card/80 shadow-md backdrop-blur-sm transition-shadow hover:shadow-lg dark:bg-card/60">
                <CardHeader className="space-y-3 pb-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="secondary" className="font-normal">
                      {job.period}
                    </Badge>
                    {job.location ? (
                      <span className="text-xs text-muted-foreground">
                        {job.location}
                      </span>
                    ) : null}
                  </div>
                  <CardTitle className="text-lg sm:text-xl">{job.role}</CardTitle>
                  <p className="text-sm font-medium text-primary">{job.org}</p>
                </CardHeader>
                <CardContent>
                  <ul className="list-inside list-disc space-y-2 text-sm leading-relaxed text-muted-foreground marker:text-primary sm:text-base">
                    {job.details.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

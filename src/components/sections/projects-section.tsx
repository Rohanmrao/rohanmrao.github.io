import { ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { publication, projects } from "@/content/portfolio";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className={cn(
        "snap-section scroll-mt-20 px-6 py-24 lg:scroll-mt-8 lg:px-14"
      )}
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-3xl font-bold tracking-tight text-foreground">
          Projects & publication
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
          Selected work from university and research.
        </p>

        <Card className="mt-10 border-border/80 bg-card/60 shadow-sm">
          <CardHeader>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Publication
            </p>
            <CardTitle className="text-lg leading-snug sm:text-xl">
              {publication.title}
            </CardTitle>
            <p className="text-sm text-muted-foreground">{publication.venue}</p>
          </CardHeader>
          <CardFooter className="pt-0">
            <Button variant="outline" size="sm" asChild>
              <a
                href={publication.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on DOI
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </CardFooter>
        </Card>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group flex flex-col border-border/80 bg-gradient-to-b from-card to-card/40 shadow-md transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-xl dark:from-card/80 dark:to-card/40"
            >
              <CardHeader>
                {project.context ? (
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {project.context}
                  </p>
                ) : null}
                <CardTitle className="text-lg leading-snug">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="default" className="w-full sm:w-auto" asChild>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                    <ExternalLink className="h-4 w-4 opacity-80" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

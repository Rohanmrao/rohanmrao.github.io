import { ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/content/portfolio";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 px-6 py-24 lg:scroll-mt-8 lg:px-14"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-3xl font-bold tracking-tight text-foreground">
          Projects
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
          A few things I&apos;ve built — ML, robotics, and full-stack edges
          included.
        </p>
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group flex flex-col border-border/80 bg-gradient-to-b from-card to-card/40 shadow-md transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-xl dark:from-card/80 dark:to-card/40"
            >
              <CardHeader>
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
                    View project
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

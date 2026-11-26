import { ExternalLink } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { projects, publication } from "@/content/portfolio";

export function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <SectionHeading command="ls ./projects" title="Projects & publication" intro="Selected work from university and research." />

      <article className="panel panel-hover border-l-4 border-l-primary p-6">
        <p className="font-mono text-xs text-primary">Publication · {publication.venue}</p>
        <h3 className="mt-2 font-mono text-base font-bold leading-snug sm:text-lg">{publication.title}</h3>
        <Button variant="outline" size="sm" className="mt-4 font-mono" asChild>
          <a href={publication.href} target="_blank" rel="noopener noreferrer">
            View on DOI
            <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </article>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <article key={project.title} className="panel panel-hover flex flex-col p-6">
            {project.context ? <p className="font-mono text-xs text-muted-foreground">{project.context}</p> : null}
            <h3 className="mt-2 font-mono text-lg font-bold leading-snug">{project.title}</h3>
            <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{project.description}</p>
            <Button variant="outline" size="sm" className="mt-5 self-start font-mono" asChild>
              <a href={project.href} target="_blank" rel="noopener noreferrer">
                View on GitHub
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </article>
        ))}
      </div>
    </section>
  );
}

import { SectionHeading } from "@/components/section-heading";
import { experience } from "@/content/portfolio";

export function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <SectionHeading command="git log --career" title="Experience" intro="Shipping systems end to end — APIs, data, cloud, and ML." />
      <ol className="space-y-8 border-l pl-5 sm:pl-8">
        {experience.map((job) => (
          <li key={`${job.role}-${job.period}`} className="relative">
            <span className="absolute -left-[calc(1.25rem+5px)] top-7 h-2.5 w-2.5 rounded-full bg-primary sm:-left-[calc(2rem+5px)]" aria-hidden />
            <article className="panel panel-hover p-5 sm:p-7">
              <p className="font-mono text-xs text-muted-foreground">
                {job.period}
                {job.location ? ` · ${job.location}` : ""}
              </p>
              <h3 className="mt-2 font-mono text-lg font-bold sm:text-xl">{job.role}</h3>
              <p className="mt-1 text-sm font-medium text-primary">{job.org}</p>
              <ul className="mt-5 space-y-2.5 leading-relaxed text-muted-foreground">
                {job.details.map((line) => (
                  <li key={line} className="flex gap-3">
                    <span className="font-mono text-primary" aria-hidden>
                      ›
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}

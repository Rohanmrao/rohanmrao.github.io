import { SectionHeading } from "@/components/section-heading";
import { about } from "@/content/portfolio";

export function AboutSection() {
  // Splits on commas and sentence ends only, so names such as "ASP.NET" stay whole.
  const skills = about.skills.split(/,\s*|\.\s+|\.$/).filter(Boolean);

  return (
    <section id="about" className="section">
      <SectionHeading command="cat about.md" title={about.title} />
      <div className="grid gap-10 lg:grid-cols-[3fr_2fr]">
        <div className="space-y-5 leading-relaxed text-muted-foreground">
          <p className="text-xl leading-relaxed text-foreground">{about.lead}</p>
          {about.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <div className="panel self-start p-6">
          <h3 className="font-mono text-sm font-bold text-primary">{about.skillsLabel}</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li key={skill} className="rounded border bg-muted/60 px-2.5 py-1 font-mono text-xs">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

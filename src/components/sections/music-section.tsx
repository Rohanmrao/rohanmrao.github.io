import { ExternalLink } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { music } from "@/content/portfolio";
import { withBaseUrl } from "@/lib/base-url";

export function MusicSection() {
  const { single } = music;

  return (
    <section id="music" className="section">
      <SectionHeading command="play ./music" title={music.title} intro={music.intro} />
      <article className="panel panel-hover grid gap-6 p-5 sm:grid-cols-[14rem_1fr] sm:p-7">
        <img
          src={withBaseUrl(single.image)}
          alt={single.imageAlt}
          width={672}
          height={896}
          loading="lazy"
          className="mx-auto aspect-[3/4] w-full max-w-[14rem] self-start rounded-md border object-cover"
        />
        <div className="min-w-0">
          <p className="font-mono text-xs text-primary">{single.label}</p>
          <h3 className="mt-1 font-mono text-2xl font-bold">{single.title}</h3>
          <div className="mt-3 space-y-3 leading-relaxed text-muted-foreground">
            {single.description.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <iframe
            src={single.embedUrl}
            title={`Spotify player: ${single.title}`}
            width="100%"
            height="152"
            loading="lazy"
            allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            className="mt-5 rounded-xl border-0"
          />
          {/* Spotify's player can time out inside its own frame, which the page cannot detect. */}
          <p className="mt-2 text-sm text-muted-foreground">
            Player not loading?{" "}
            <a href={single.trackUrl} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">
              Listen to {single.title} on Spotify
            </a>
          </p>
          <Button variant="outline" className="mt-4 font-mono" asChild>
            <a href={music.artistUrl} target="_blank" rel="noopener noreferrer">
              My Spotify artist page
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
          <p className="mt-4 font-mono text-sm text-primary">{music.closing}</p>
        </div>
      </article>
    </section>
  );
}

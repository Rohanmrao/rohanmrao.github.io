import { ArrowUpRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { getBlogPosts } from "@/content/blog/registry";

export function BlogSection() {
  const posts = getBlogPosts();

  return (
    <section
      id="blogs"
      className="snap-section scroll-mt-20 px-6 py-24 lg:scroll-mt-8 lg:px-14"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-3xl font-bold tracking-tight text-foreground">
          Blog
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
          Notes on systems, ML, and how I think about code.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <Card
              key={post.slug}
              className="group flex flex-col overflow-hidden border-border/80 bg-card/80 shadow-md transition-all hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-lg dark:bg-card/60"
            >
              <div className="relative aspect-[1200/630] w-full overflow-hidden bg-muted">
                <img
                  src={post.coverImage}
                  alt={post.coverAlt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              <CardHeader className="space-y-2">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {new Date(post.date).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
                <h3 className="font-display text-xl font-semibold leading-snug text-foreground">
                  {post.title}
                </h3>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {post.excerpt}
                </p>
              </CardContent>
              <CardFooter className="flex items-center justify-between gap-3 border-t border-border/60 pt-4">
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readingMinutes} min read
                </span>
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 font-display text-sm font-semibold text-primary transition-colors hover:text-accent"
                >
                  Read
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

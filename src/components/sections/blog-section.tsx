import { Link } from "react-router-dom";

import { SectionHeading } from "@/components/section-heading";
import { getBlogPosts } from "@/content/blog/registry";

export function BlogSection() {
  const posts = getBlogPosts();

  return (
    <section id="blogs" className="section">
      <SectionHeading command="tail ./blog" title="Blog" intro="Notes on systems, ML, and how I think about code." />
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={`/blog/${post.slug}`} className="panel panel-hover group flex gap-6 p-5">
              <img
                src={post.coverImage}
                alt=""
                width={192}
                height={101}
                loading="lazy"
                className="hidden aspect-[1200/630] w-48 shrink-0 self-start rounded border object-cover sm:block"
              />
              <div className="min-w-0">
                <p className="font-mono text-xs text-muted-foreground">
                  <time dateTime={post.date}>{post.date}</time> · {post.readingMinutes} min read
                </p>
                <h3 className="mt-2 font-mono text-base font-bold leading-snug group-hover:text-primary sm:text-lg">{post.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">{post.excerpt}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

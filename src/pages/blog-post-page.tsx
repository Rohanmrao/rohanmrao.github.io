import { ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { Navigate, useParams } from "react-router-dom";
import remarkGfm from "remark-gfm";

import { Button } from "@/components/ui/button";
import { getBlogPostBySlug } from "@/content/blog/registry";
import { useGoToSection } from "@/lib/scroll";

export function BlogPostPage() {
  const { slug } = useParams();
  const goToSection = useGoToSection();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) return <Navigate to="/" replace />;

  return (
    <article className="mx-auto max-w-3xl px-5 pb-24 pt-8 sm:px-8 sm:pt-12">
      <Button variant="ghost" className="-ml-3 mb-8 px-3 font-mono text-muted-foreground" type="button" onClick={() => goToSection("blogs")}>
        <ArrowLeft className="h-4 w-4" />
        Back to blog
      </Button>

      <header>
        <p className="kicker">
          <time dateTime={post.date}>{post.date}</time> · {post.readingMinutes} min read
        </p>
        <h1 className="mt-3 font-mono text-2xl font-bold leading-tight tracking-tight sm:text-4xl">{post.title}</h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{post.excerpt}</p>
        <img src={post.coverImage} alt={post.coverAlt} width={1200} height={630} className="mt-8 h-auto w-full rounded-lg border" />
      </header>

      <div className="blog-prose mt-10">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body.trim()}</ReactMarkdown>
      </div>

      <div className="mt-16 border-t pt-8">
        <Button variant="outline" className="font-mono" type="button" onClick={() => goToSection("blogs")}>
          Browse all posts
        </Button>
      </div>
    </article>
  );
}

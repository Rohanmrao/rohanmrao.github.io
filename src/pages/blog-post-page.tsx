import { ArrowLeft, Clock } from "lucide-react";
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import remarkGfm from "remark-gfm";

import { Button } from "@/components/ui/button";
import { getBlogPostBySlug } from "@/content/blog/registry";

export function BlogPostPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  useEffect(() => {
    document.documentElement.classList.remove("snap-scroll-home");
  }, []);

  if (!post) {
    return <Navigate to="/" replace />;
  }

  const backToBlogs = () => {
    navigate("/");
    window.setTimeout(() => {
      document.getElementById("blogs")?.scrollIntoView({ behavior: "smooth" });
    }, 120);
  };

  return (
    <article className="px-6 pb-24 pt-8 lg:px-14 lg:pt-12">
      <div className="mx-auto max-w-3xl">
        <Button
          variant="ghost"
          className="mb-8 gap-2 px-0 font-display text-muted-foreground hover:text-foreground"
          type="button"
          onClick={backToBlogs}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to blog
        </Button>

        <header className="space-y-4">
          <div className="overflow-hidden rounded-2xl border border-border/60 bg-muted shadow-sm">
            <img
              src={post.coverImage}
              alt={post.coverAlt}
              className="aspect-[1200/630] w-full object-cover"
            />
          </div>
          <p className="text-sm font-medium text-muted-foreground">
            {new Date(post.date).toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
            <span className="mx-2 text-border">·</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="inline h-3.5 w-3.5" />
              {post.readingMinutes} min read
            </span>
          </p>
          <h1 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {post.title}
          </h1>
          <p className="text-lg text-muted-foreground">{post.excerpt}</p>
        </header>

        <div className="blog-prose mt-12">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body.trim()}</ReactMarkdown>
        </div>

        <div className="mt-16 border-t border-border/60 pt-8">
          <p className="text-sm text-muted-foreground">
            Want more?{" "}
            <Link
              to="/"
              className="font-medium text-primary underline-offset-4 hover:underline"
              onClick={(e) => {
                e.preventDefault();
                backToBlogs();
              }}
            >
              Browse all posts
            </Link>
          </p>
        </div>
      </div>
    </article>
  );
}

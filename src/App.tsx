import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { SiteShell } from "@/components/layout/site-shell";
import { HomePage } from "@/pages/home-page";

// Keeps the markdown renderer out of the home page download.
const BlogPostPage = lazy(() => import("@/pages/blog-post-page").then((m) => ({ default: m.BlogPostPage })));

export default function App() {
  return (
    <Routes>
      <Route element={<SiteShell />}>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/blog/:slug"
          element={
            <Suspense fallback={<p className="kicker mx-auto min-h-screen max-w-3xl px-5 py-16">$ loading…</p>}>
              <BlogPostPage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

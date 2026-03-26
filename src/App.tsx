import { Route, Routes } from "react-router-dom";

import { SiteShell } from "@/components/layout/site-shell";
import { BlogPostPage } from "@/pages/blog-post-page";
import { HomePage } from "@/pages/home-page";

export default function App() {
  return (
    <Routes>
      <Route element={<SiteShell />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
      </Route>
    </Routes>
  );
}

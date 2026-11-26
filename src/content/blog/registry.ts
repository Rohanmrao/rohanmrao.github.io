import { post as digitalTwinGraph } from "@/content/blog/posts/digital-twin-knowledge-graph";
import { post as ragNeo4jBedrock } from "@/content/blog/posts/rag-knowledge-graph-neo4j-bedrock";
import { post as agentWorkflows } from "@/content/blog/posts/reliable-multi-agent-workflows";
import { post as solidThinkTwice } from "@/content/blog/posts/solid-think-twice-code-later";
import { post as trustworthyRag } from "@/content/blog/posts/trustworthy-rag-over-building-data";
import type { BlogPost } from "@/content/blog/types";

const all: BlogPost[] = [
  trustworthyRag,
  digitalTwinGraph,
  agentWorkflows,
  ragNeo4jBedrock,
  solidThinkTwice,
];

export function getBlogPosts(): BlogPost[] {
  return [...all].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return all.find((p) => p.slug === slug);
}

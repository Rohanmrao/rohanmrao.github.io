import { post as clickhouseTimeSeries } from "@/content/blog/posts/clickhouse-time-series-queries";
import { post as backgroundWorkers } from "@/content/blog/posts/dependable-background-workers";
import { post as digitalTwinGraph } from "@/content/blog/posts/digital-twin-knowledge-graph";
import { post as ecsLongJobs } from "@/content/blog/posts/long-running-jobs-on-ecs";
import { post as ragNeo4jBedrock } from "@/content/blog/posts/rag-knowledge-graph-neo4j-bedrock";
import { post as agentWorkflows } from "@/content/blog/posts/reliable-multi-agent-workflows";
import { post as solidThinkTwice } from "@/content/blog/posts/solid-think-twice-code-later";
import { post as trustworthyRag } from "@/content/blog/posts/trustworthy-rag-over-building-data";
import { post as reactDashboardStates } from "@/content/blog/posts/typescript-react-dashboard-states";
import type { BlogPost } from "@/content/blog/types";

const all: BlogPost[] = [
  agentWorkflows,
  trustworthyRag,
  ecsLongJobs,
  digitalTwinGraph,
  ragNeo4jBedrock,
  solidThinkTwice,
  reactDashboardStates,
  backgroundWorkers,
  clickhouseTimeSeries,
];

export function getBlogPosts(): BlogPost[] {
  return [...all].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return all.find((p) => p.slug === slug);
}

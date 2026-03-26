import ragCoverUrl from "@/assets/blog/rag-neo4j-cover.svg?url";
import type { BlogPost } from "@/content/blog/types";

export const post: BlogPost = {
  slug: "rag-knowledge-graph-neo4j-bedrock",
  title: "Building a knowledge RAG stack with Neo4j, Bedrock, and embeddings",
  date: "2025-11-12",
  readingMinutes: 12,
  excerpt:
    "How graph structure, vector search, and managed LLMs fit together for retrieval-augmented generation — and why embeddings are the glue.",
  coverImage: ragCoverUrl,
  coverAlt: "Abstract graph nodes connecting to a vector field",
  body: `
Retrieval-augmented generation (RAG) is often introduced as “chunk your docs, put them in a vector DB, call an LLM.” That works for many FAQs. The moment your domain has **relationships** — policies that reference entities, dependencies between services, or multi-hop questions — a flat pile of chunks starts to fight you. A **knowledge graph** gives you explicit structure; **vector embeddings** give you fuzzy, semantic similarity. Used together, they cover precision *and* recall.

This post walks through a pragmatic architecture: **Neo4j** as the graph and metadata store, **Amazon Bedrock** for embeddings and generation, and a retrieval flow that queries *both* structure and vectors before the model answers.

## Why Neo4j for the knowledge layer

Neo4j stores nodes and relationships natively. For RAG, you typically model:

- **Document** or **Chunk** nodes (with text and an embedding id)
- **Entity** nodes (people, products, services)
- **Relationships** like \`MENTIONS\`, \`DEPENDS_ON\`, \`APPLIES_TO\`, \`SUPERSEDES\`

Cypher lets you traverse constraints: “everything that depends on API X” or “policies that apply to region Y before 2024.” That is hard to express reliably with vector search alone.

## Where vector embeddings fit

An **embedding** is a dense numeric representation of text (or images) in a high-dimensional space. Phrases with similar *meaning* land nearby, even when wording differs.

In RAG, embeddings help you:

1. **Find relevant chunks** when the user’s question does not match keywords.
2. **Pre-filter or re-rank** graph results — e.g. take 50 candidate nodes from the graph, embed their summaries, and keep the top *k* by cosine similarity to the query embedding.
3. **Link unstructured text to structured nodes** — embed a paragraph and match it to the closest entity or chunk nodes.

So the graph answers *relational* questions; embeddings answer *semantic* “what is this talking about?” questions. Neither replaces the other.

## AWS Bedrock in the loop

**Bedrock** gives you managed foundation models without hosting weights yourself. A typical split:

- **Embeddings model** (e.g. Amazon Titan Embeddings) — turn user queries and chunk text into vectors for similarity search.
- **Text model** (e.g. Claude or Llama via Bedrock) — generate the final answer *conditioned* on retrieved context.

You keep API keys inside AWS IAM, log invocations in CloudWatch, and enforce quotas per environment — important when you move from a notebook to production.

## End-to-end flow

1. **Ingestion** — Parse sources, extract entities (rules-based, NER, or LLM-assisted), upsert nodes and edges in Neo4j. Chunk long text, store chunk text on nodes, compute embeddings, store vector id or the vector in a **vector index** (Neo4j 5 has vector indexes; alternatively keep vectors in OpenSearch / pgvector and store only ids in Neo4j).

2. **Query** — Embed the user question. Run **vector search** for top chunks and **graph pattern match** for structured constraints (time range, product line, etc.). Merge candidates into a single context bundle.

3. **Generation** — Send system prompt + retrieved context + user question to Bedrock. Optionally add a **citation** step: ask the model to quote chunk ids or node ids so answers trace back to sources.

4. **Evaluation** — Track faithfulness (does the answer stay in context?), latency, and cost per query. RAG failures often show up as “hallucinated” numbers — tighten prompts and shrink context windows when that happens.

## Embeddings: intuition without the math overwhelm

Think of embeddings as **coordinates of meaning**. Training pushes similar sentences closer in space. Cosine similarity between query and chunk vectors approximates “are these about the same thing?” It is not perfect — synonyms, negation, and domain jargon all break naive similarity — which is why you combine it with graph filters and metadata.

## Closing

Graph + vectors + managed LLMs is a solid pattern for **enterprise knowledge** where both relationships and language matter. Start with a small ontology, one ingestion path, and clear evaluation; expand relationships as you learn what users actually ask.

If you are only shipping a help center, a simpler vector-only RAG may be enough. When questions sound like “what breaks if we change this?” — reach for the graph.
`,
};

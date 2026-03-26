import type { BlogPost } from "@/content/blog/types";
import { publicAsset } from "@/lib/public-asset";

export const post: BlogPost = {
  slug: "solid-think-twice-code-later",
  title: "Think twice, code later: SOLID as a design pressure test",
  date: "2025-09-03",
  readingMinutes: 8,
  excerpt:
    "SOLID is not a checklist for tiny functions — it is a way to notice coupling and churn before they become production incidents.",
  coverImage: publicAsset("/blog/solid-architecture-cover.svg"),
  coverAlt: "Layered blocks and arrows suggesting modular architecture",
  body: `
Most engineers meet **SOLID** in a classroom slide and then forget it until a service turns into a 3,000-line class that nobody dares to touch. The five principles are easy to quote and hard to apply *in context*. This post reframes them as **questions to ask before you merge**, not dogma to satisfy line-by-line.

## Why “think twice” matters

The cost of software is dominated by **change**: new requirements, bug fixes, dependency upgrades, and team turnover. SOLID is about making change cheaper by controlling **dependencies** and **boundaries**. If you only remember one thing: *depend on abstractions, keep reasons to change from piling onto one module.*

## The principles as pressure tests

### Single responsibility (SRP)

**Ask:** “If I get a new requirement tomorrow, how many unrelated parts of this class would I have to edit?”

If the answer is “half the file,” the module is doing more than one job. Splitting by *reason to change* — not by arbitrary size — keeps diffs reviewable.

### Open / closed (OCP)

**Ask:** “Can I add a new behavior without editing existing, battle-tested code?”

Prefer extension points (strategies, plugins, composition) over endless \`if (type === …)\` chains. Every branch is a merge conflict waiting to happen.

### Liskov substitution (LSP)

**Ask:** “Can I swap this implementation without surprising callers?”

Subtypes must honor contracts — no throwing where the base promised success, no tightening preconditions. Break LSP and polymorphism becomes a trap.

### Interface segregation (ISP)

**Ask:** “Do callers depend on methods they never use?”

Fat interfaces force dummy implementations and obscure intent. Smaller, focused interfaces keep mocks and tests honest.

### Dependency inversion (DIP)

**Ask:** “Does high-level policy depend on low-level details, or the other way around?”

Push infrastructure (DB, HTTP, queues) behind ports; keep domain rules independent of frameworks. That is how you swap Postgres for something else without rewriting business logic.

## SOLID and the real world

In shipping systems, you will not score “100% SOLID.” Pragmatic trade-offs exist: a thin violation to hit a deadline, a God-module you plan to split next sprint. The goal is **visible debt**: name it, track it, pay it down before it compounds.

Pair SOLID with **tests at boundaries**. If a class is hard to test without booting half the app, DIP is probably telling you something.

## A small habit

Before you open a PR, spend two minutes on:

1. **One sentence** describing what this module is responsible for.
2. **One sentence** on what would force it to change.
3. If those sentences feel fuzzy, sketch boundaries on paper — *then* code.

Thinking twice does not slow you down; it saves the week you would spend untangling a rushed abstraction.

## Takeaway

SOLID is not about micro-refactors for purity. It is a shared vocabulary for **where to put the seam** so your system can evolve without turning every feature into a rewrite. Think twice, sketch boundaries, *then* let the editor earn its keep.
`,
};

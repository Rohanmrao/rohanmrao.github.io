import coverUrl from "@/assets/blog/agent-workflows-cover.svg?url";
import type { BlogPost } from "@/content/blog/types";

export const post: BlogPost = {
  slug: "reliable-multi-agent-workflows",
  title: "Getting dependable results from multi-agent development workflows",
  date: "2026-11-26",
  readingMinutes: 4,
  excerpt:
    "More agents do not automatically mean better software. Clear briefs, independent checks and human gates are what make the output reliable.",
  coverImage: coverUrl,
  coverAlt: "Several agent nodes passing work through a review gate",
  body: `
Running several AI agents on a codebase feels like gaining a team overnight. Like a team, it works when responsibilities are clear and falls apart when everyone is guessing. The habits that help are mostly ordinary engineering discipline, applied more strictly.

## Write the brief you would give a new colleague

An agent starts with only what you hand it. A good brief covers:

- **The goal**, and why it matters
- **Scope**: which files or areas are in, and which are off limits
- **What done looks like**, in checkable terms
- **Known traps** and decisions already made
- **What to report back**, including anything left unfinished

"Fix the flaky tests" invites improvisation. "These tests fail intermittently; find the cause, do not add retries, and show the failing run before and the passing runs after" gives the work a shape.

## Split work along clean seams

Parallel agents help when tasks are independent. Two agents editing the same files will overwrite each other or build on different assumptions. Give each writer its own branch or working copy, and run dependent steps in order. Read-only research is the easiest thing to parallelize, so start there.

## Separate the author from the checker

Whoever wrote the code is poorly placed to judge it, and that applies to agents too. Hand review to a **fresh context** with the requirements and the diff, not the author's explanation of why it is right. Ask the reviewer to try to break it: edge cases, missing tests, claims that were never exercised.

Then verify the reviewer. A finding is a hypothesis until someone reproduces it.

## Ask for evidence, not confidence

"All tests pass" is a claim. The command that ran and its output are evidence. Make agents show:

- What they ran and what it printed
- What they did **not** verify
- Where they departed from the brief

Mechanical checks such as builds, tests, linters and type checks should be the first gate, because they cannot be talked into agreement.

## Keep people at the one-way doors

Let agents move quickly on work that is easy to undo. Require explicit approval for anything that is not: deploying, changing data, deleting files, sending messages, spending money. Give each agent the least access its task needs.

Treat whatever an agent reads, from web pages to log files to another agent's report, as **information**, not as instructions.

## Write things down between sessions

Context disappears when a session ends. Short handoff notes, a runbook of known failures and conventions kept in the repository let the next run start informed instead of rediscovering the same problems.

## Know when one is enough

A small change does not need an orchestra. Coordination has a real cost in tokens, time and review effort. Add agents when the work genuinely divides, or when an independent second look is worth paying for.

## Takeaway

Reliability comes from the structure around the agents: precise briefs, isolated work, adversarial review, real evidence and human judgment where mistakes are expensive. You are still the engineer responsible for what ships.
`,
};

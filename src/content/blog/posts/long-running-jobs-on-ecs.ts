import coverUrl from "@/assets/blog/ecs-cover.svg?url";
import type { BlogPost } from "@/content/blog/types";

export const post: BlogPost = {
  slug: "long-running-jobs-on-ecs",
  title: "Running long jobs on AWS ECS without losing work",
  date: "2026-03-16",
  readingMinutes: 3,
  excerpt:
    "Containers are replaced all the time. Long imports and batch jobs need checkpoints, honest memory limits and a plan for being stopped.",
  coverImage: coverUrl,
  coverAlt: "Containers being replaced while a job continues from a checkpoint",
  body: `
An HTTP request that dies during a deployment gets retried. A job that has been running for an hour is another matter. On a container platform, being stopped is normal behaviour, so design for it.

## Know how a task stops

ECS sends \`SIGTERM\`, waits for the container's \`stopTimeout\` and then sends \`SIGKILL\`. The default wait is 30 seconds, and on Fargate it can be raised to at most 120. Handle the signal: stop taking new work, finish or abandon the current batch and save progress. Check that your entry point actually forwards the signal to your process.

## Checkpoint at batch boundaries

Split the job into batches that can each be repeated safely. After a batch commits, record how far you got in durable storage. On start, read the checkpoint and continue.

Two rules make this work:

- Writing a batch twice must give the same result as writing it once.
- The checkpoint moves only **after** the work is durable.

## Treat memory as a hard wall

A container that exceeds its memory limit is killed, typically showing exit code 137, with no chance to clean up. Stream input instead of loading whole files, cap batch sizes and watch peak memory with realistic input. Raising the limit buys room; it does not fix usage that grows with the size of the data.

## Separate jobs from request handling

A heavy job inside the API service competes with users for CPU and memory, and ties its lifetime to API releases. Run it as its own service or task so it can be sized, scaled and deployed independently.

## Scale on the work, not only the CPU

For queue-driven workers, backlog per task is usually a better scaling signal than processor use, because a worker waiting on a database looks idle while the queue grows. When scaling in, ECS task scale-in protection lets a busy task ask not to be chosen.

## Make deployments boring

Use health checks that reflect readiness, enable the deployment circuit breaker so a bad release rolls back, and keep old and new versions compatible while both run. That includes the checkpoint format: a new version may resume a job the old one started.

## Takeaway

Assume the task will be stopped at the worst moment. If resuming is routine, deployments, scaling and failures stop being special events.
`,
};

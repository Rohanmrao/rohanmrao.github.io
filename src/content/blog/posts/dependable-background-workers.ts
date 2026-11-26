import coverUrl from "@/assets/blog/workers-cover.svg?url";
import type { BlogPost } from "@/content/blog/types";

export const post: BlogPost = {
  slug: "dependable-background-workers",
  title: "Background workers that survive real life",
  date: "2025-04-02",
  readingMinutes: 3,
  excerpt:
    "A loop that polls and processes is easy to write. Claiming work safely, limiting concurrency and shutting down cleanly are what make it dependable.",
  coverImage: coverUrl,
  coverAlt: "A queue of tasks being picked up by parallel workers",
  body: `
Precomputing dashboard results, refreshing statuses and sending scheduled reports all follow one pattern: find what is due, do it, record when it is due next. The first version is a few lines. The trouble starts with the second instance, the first deployment and the first slow dependency.

## Claim work atomically

If two instances read the same due row, both will process it. Select and mark in one statement. In PostgreSQL, \`FOR UPDATE SKIP LOCKED\` lets several workers take different rows without waiting on each other:

\`\`\`sql
UPDATE jobs
SET claimed_at = now()
WHERE id IN (
  SELECT id
  FROM jobs
  WHERE next_run_at <= now()
    AND (claimed_at IS NULL OR claimed_at < now() - interval '5 minutes')
  ORDER BY next_run_at
  LIMIT 20
  FOR UPDATE SKIP LOCKED
)
RETURNING id;
\`\`\`

The expiry on the claim is the safety net: if a worker dies, its rows become available again. Choose a period longer than your slowest healthy job, or renew the claim while working.

## Assume it will run twice

Claims reduce duplicates; they do not remove them. Make each job **idempotent**: upsert results, use a stable key for side effects and record what has already been sent.

## Limit concurrency on purpose

Starting a task for every due item is a good way to overwhelm a database. In .NET, \`Parallel.ForEachAsync\` expresses a bound clearly:

\`\`\`csharp
var options = new ParallelOptions { MaxDegreeOfParallelism = 4, CancellationToken = stoppingToken };
await Parallel.ForEachAsync(dueJobs, options, async (job, token) =>
{
    try { await processor.RunAsync(job, token); }
    catch (Exception ex) when (ex is not OperationCanceledException) { logger.LogError(ex, "Job {JobId} failed", job.Id); }
});
\`\`\`

Catching inside the body keeps one bad item from cancelling the rest of the batch.

## Back off instead of hammering

When a job fails, schedule the retry further out each time, with a little randomness so retries do not arrive together. After enough attempts, park it somewhere a person will look.

## Shut down politely

Deployments stop processes constantly. Stop claiming new work when shutdown begins, pass the cancellation token all the way down to database and HTTP calls, and let unfinished claims expire.

## Watch the lag

"The worker is running" says very little. Track how far behind it is: the age of the oldest due item. Alert on that, along with failure counts and duration. Lag rises before users notice stale data.

## One worker, one job

It is tempting to add another task to an existing loop. Separate workers get separate intervals, limits and failure modes, and can be switched off independently.
`,
};

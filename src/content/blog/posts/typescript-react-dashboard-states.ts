import coverUrl from "@/assets/blog/react-types-cover.svg?url";
import type { BlogPost } from "@/content/blog/types";

export const post: BlogPost = {
  slug: "typescript-react-dashboard-states",
  title: "Typing dashboard widgets in React so empty never looks healthy",
  date: "2025-07-19",
  readingMinutes: 3,
  excerpt:
    "Loading, empty, stale and failed are different things. TypeScript can force every widget to say which one it is showing.",
  coverImage: coverUrl,
  coverAlt: "Dashboard tiles showing distinct data states",
  body: `
A dashboard tile that shows a calm zero when its request has failed is worse than a blank one. The reader trusts it. The fix is less about styling and more about how state is modeled.

## Replace boolean soup with a union

Flags such as \`isLoading\`, \`hasError\` and \`data?\` allow combinations that make no sense. A discriminated union allows only the states you intend:

\`\`\`ts
type WidgetState<T> =
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "empty" }
  | { status: "ready"; data: T; updatedAt: Date; stale: boolean };
\`\`\`

\`data\` exists only when the status is \`ready\`, so a component cannot read it by accident.

## Make the compiler check every case

\`\`\`tsx
function Widget({ state }: { state: WidgetState<number> }) {
  switch (state.status) {
    case "loading":
      return <Skeleton />;
    case "error":
      return <Problem message={state.message} />;
    case "empty":
      return <p>No data for this period</p>;
    case "ready":
      return <Stat value={state.data} stale={state.stale} />;
    default: {
      const unreachable: never = state;
      return unreachable;
    }
  }
}
\`\`\`

Add a fifth state and this stops compiling until it is handled.

## Distrust data at the boundary

Types describe what you expect, not what arrives. Check responses where they enter the application, with a type guard or a schema library, and turn anything unexpected into the \`error\` state. Inside that boundary the types can be trusted.

## Show freshness

Data that is correct but old can mislead as much as wrong data. Carry the time the result was produced, not the time the browser fetched it, and mark the tile when it passes the age you consider current.

## Cancel what you no longer need

When someone changes the date range quickly, an older request can finish last and overwrite the newer one. Pass an \`AbortSignal\` to \`fetch\` and abort in the effect cleanup, or use a data-fetching library that keys results by their parameters.

## Isolate failures

One broken widget should not blank the page. Give each tile its own error boundary and its own request lifecycle. A registry that maps a widget type to its component and data transform keeps additions small and predictable, with an explicit fallback for unknown types.

## Takeaway

If the type system cannot represent "empty and healthy" and "failed" as the same thing, the interface will not confuse them either.
`,
};

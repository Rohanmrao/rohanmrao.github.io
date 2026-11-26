import coverUrl from "@/assets/blog/trustworthy-rag-cover.svg?url";
import type { BlogPost } from "@/content/blog/types";

export const post: BlogPost = {
  slug: "trustworthy-rag-over-building-data",
  title: "Making a RAG assistant trustworthy over live building data",
  date: "2026-11-26",
  readingMinutes: 4,
  excerpt:
    "When people ask about real equipment, a fluent answer is not enough. Let the database do the facts, and let the model do the language.",
  coverImage: coverUrl,
  coverAlt: "A speech bubble linked to a database through a verification check",
  body: `
A chat assistant that answers questions about documents can get away with being roughly right. An assistant that answers questions about a **building** cannot. If someone asks how many alarms went off last night, or whether a particular pump is running, they may act on the reply. This is a different problem from classic retrieval-augmented generation, because much of the truth lives in databases that change by the minute.

## Let the database compute, let the model explain

Language models are good at working out what a person means and at phrasing a result. They are a poor place to count, sum, average or filter. So draw a hard line:

- The **query** produces every number, name and timestamp.
- The **model** chooses what to ask for and describes what came back.

If a figure in the reply cannot be traced to a row in a result, treat that as a bug, not as a matter of style.

## Resolve names against everything, not just the top matches

People say "the chiller on the roof". Systems store a short code. Vector search is a good way to suggest candidates, but it returns the *closest few*, which is not the same as *everything that exists*.

Use a layered lookup: exact match first, then pattern match, then semantic search. Only say that something does not exist after checking the full source. "I did not find it in my first twenty results" and "it is not there" are very different statements.

## Keep "nothing", "unknown" and "failed" apart

These three often collapse into one friendly sentence:

| Situation | What the user should hear |
| --- | --- |
| The query ran and returned no rows | There were none, for this scope and time range |
| The thing could not be identified | I am not sure what you mean; here are close matches |
| The query errored or timed out | I could not check that right now |

Decide which case you are in with **code**. If you leave it to the model, an outage can turn into a confident "everything is fine".

## Be explicit about scope and time

"Today" depends on where the building is, not where the server runs. State the time zone and range used in the answer. Do the same for scope: which site, which floor, which type of equipment.

Access rules belong in the query layer. Apply the user's permissions in code to every request, and never rely on a prompt instruction to keep one customer's data away from another.

## Give every turn a deadline

A chain of model calls and database queries can run far longer than anyone will wait. Set a time budget for the whole turn, bound every query, and plan what happens when the budget runs out: return what you have, say what is still pending, or offer a narrower question. A clear partial answer beats an endless spinner.

## Evaluate against ground truth

Reading a few transcripts and nodding is not evaluation. Build a question set where each expected answer comes from a **direct query** you trust, then compare. Include:

- Plain questions with one right answer
- Vague phrasing, typos and local shorthand
- Questions whose honest answer is "none" or "I cannot tell"
- Follow-ups that depend on the previous turn

When something fails, label *where* it failed: understanding, lookup, query or wording. Each has a different fix, and rewriting the prompt only addresses some of them.

## Takeaway

Trust comes from the parts around the model: reliable lookup, computed facts, honest failure states and repeatable tests. The model makes the system pleasant to talk to. The engineering makes it safe to believe.
`,
};

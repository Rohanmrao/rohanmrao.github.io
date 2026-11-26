import coverUrl from "@/assets/blog/digital-twin-cover.svg?url";
import type { BlogPost } from "@/content/blog/types";

export const post: BlogPost = {
  slug: "digital-twin-knowledge-graph",
  title: "Modeling a building as a graph: a practical take on digital twins",
  date: "2026-11-26",
  readingMinutes: 4,
  excerpt:
    "A building is a web of places, equipment and signals. Model those relationships well and many hard questions become simple ones.",
  coverImage: coverUrl,
  coverAlt: "A building outline connected to a network of nodes",
  body: `
"Digital twin" can mean anything from a 3D rendering to a physics simulation. The version I find most useful is quieter: a **structured, queryable model of what is in a building and how it connects**, tied to the live data coming out of it.

## The problem with a flat list

A building control system typically exposes a long list of **signals**: temperatures, switch states, setpoints, meter readings. Each has a short, cryptic name. Naming habits differ between vendors, contractors and decades.

A list can tell you the latest value of one signal. It cannot easily answer "what else is affected if this unit fails?" That is a question about relationships.

## A small hierarchy goes a long way

Start with a few node types:

- **Location**: site, building, level, room
- **Equipment**: a chiller, a fan, a door controller
- **Component**: a part of that equipment, such as a valve or motor
- **Signal**: a single stream of readings

Then connect them. In Cypher, "every temperature signal on equipment located on level 3" reads close to the sentence itself:

\`\`\`cypher
MATCH (:Location {name: "Level 3"})<-[:LOCATED_IN]-(e:Equipment)
MATCH (e)-[:HAS_COMPONENT]->(:Component)-[:HAS_SIGNAL]->(s:Signal)
WHERE s.quantity = "temperature"
RETURN e.name, s.name
\`\`\`

Resist designing a perfect ontology up front. Add a node or relationship type when a real question needs it.

## Keep readings out of the graph

The graph describes **what things are**. Time-series data describes **what they are doing**. High-volume readings belong in a column store or time-series database; the graph holds the identifier that joins to them. Each store then does what it is good at, and the model stays small enough to reason about.

## Automate the draft, not the decision

Building the model by hand is slow and error-prone. Pattern matching and language models can propose it: group signals that share a naming pattern, suggest what kind of equipment each group represents, and flag the ones that do not fit.

Proposals still need review. A good review screen shows:

- The suggestion and the raw names behind it
- How many signals the same pattern covers
- Examples that match poorly
- A fast way to approve, correct or reject in bulk

An unclassified signal is a visible gap. A **wrongly** classified one quietly corrupts every answer built on top of it, so prefer leaving something blank over guessing.

## Design for the second import

Sites change, rules improve and imports get interrupted. Plan for that early:

- Give nodes **stable identifiers** derived from the source, so a re-run updates instead of duplicating.
- Write in batches with **checkpoints**, so a long job can resume.
- Keep human corrections separate from generated output, so they survive a rebuild.
- Check integrity after each import: orphaned signals, equipment with no location, duplicates.

## What it unlocks

Once the structure exists, other things get easier. Dashboards can be generated from the model instead of wired by hand. Fault rules can ask for "the supply air temperature of this unit" without knowing its local name. A chat assistant can turn a plain-English question into a precise lookup.

## Takeaway

A useful digital twin is mostly careful data modeling. Start with places, equipment and signals, keep people in the loop, and make rebuilding it cheap.
`,
};

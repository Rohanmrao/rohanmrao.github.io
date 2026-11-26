export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "music", label: "Music" },
  { id: "blogs", label: "Blog" },
  { id: "reachme", label: "Reach me" },
] as const;

export const hero = {
  headline: "Hi, I'm",
  name: "Rohan Mahesh Rao",
  tagline:
    "Software engineer focused on full-stack development, AI, and machine learning — scalable, production-ready systems.",
  subline: "Let the problem define the approach.",
};

export const about = {
  title: "About me",
  lead: "In the tech realm, my philosophy is simple: let the problem define the approach. I care about end-to-end delivery, from APIs and data stores to cloud and ML pipelines.",
  body: [
    "B.Tech in Electronics and Communication Engineering with a minor in Computer Science from PES University (8.0/10). Four-time DAC (Distinction Award Certificate) holder.",
    "Community development volunteer with the Dept. of ECE: computer literacy sessions and team-building activities for government school students.",
    "Off the clock I'm an artist and producer; also guitar, basketball, and films.",
  ],
  skillsLabel: "Skills",
  skills:
    "ASP.NET, React, GenAI, MCP servers. MySQL, MongoDB, Elasticsearch, ClickHouse, PostgreSQL, Neo4j. TypeScript, JavaScript, C#, Python, shell scripting. Git, AWS, Docker, Kubernetes, Terraform, JIRA.",
};

export type ExperienceItem = {
  role: string;
  period: string;
  org: string;
  location?: string;
  intro?: string;
  stats?: { value: string; label: string }[];
  sections: { title?: string; bullets: string[] }[];
};

// In intro and bullets, {{text}} marks a figure and **text** marks an emphasised phrase.
export const experience: ExperienceItem[] = [
  {
    role: "Software Engineer",
    period: "Jan 2024 — Present",
    org: "KangaSys Pty Ltd",
    location: "Bangalore",
    intro:
      "KangaSys turns data from building systems (air conditioning, power, fire, security) into dashboards, alerts and AI insights. Top code contributor to its main backend services; {{580+}} tickets closed.",
    stats: [
      { value: "580+", label: "tickets closed" },
      { value: "1,200+", label: "code changes to the main REST API" },
      { value: "340+ billion", label: "records in production databases (~13 TB compressed)" },
      { value: "138,000", label: "raw sensor and control signals turned into a digital twin" },
      { value: "~68% → 100%", label: "KanGPT sensor lookup coverage" },
      { value: "10+ min → 22 s", label: "worst-case wait, now a reply limit" },
      { value: "2,300+", label: "automated tests backing the AI service" },
      { value: "2×", label: "faster site integration with KangaKonnect" },
    ],
    sections: [
      {
        title: "Current focus: Fiona Stanley Hospital, a major public hospital in Perth, Australia",
        bullets: [
          "Driving **product evolution and technical delivery** end to end: requirements, solution design, code, data accuracy checks with site engineers and keeping the customer confident and supported.",
          "Built out **Odin**, our in-house web tool for **digitally modeling a site’s assets**: AI proposes equipment from raw building data, and engineers review and publish it (top code contributor).",
          "Turned {{138,000}} raw sensor and control signals into a **digital twin**, a live model of the building and its {{33,000}} pieces of equipment.",
          "Built a **fault detection engine** for a hospital producing {{300+ million}} sensor readings a week: {{70}} automated health checks, verified to match reference results exactly, flag failing air-conditioning equipment.",
        ],
      },
      {
        title: "Cloud services, APIs and databases",
        bullets: [
          "Operate and scale the platform’s **microservices on AWS (ECS, App Runner, Lambda)**: main API, core business engine, digital twin and fault detection engine.",
          "Made hospital-scale data loads **resumable** and fixed memory crashes, so long jobs survive restarts and releases.",
          "Handle the **main REST API** (C#, ASP.NET) as its top code contributor ({{1,200+}} code changes): dashboard and report features, security hardening, a .NET 10 upgrade and **CI/CD** releases to production.",
          "Designed background processing that prepares dashboard results in advance, so screens load without searching raw data.",
          "Maintain **production databases** (ClickHouse, PostgreSQL, Neo4j), including {{340+ billion}} records ({{~13 TB}} compressed): schema changes, query tuning, recovery of missing data and resolving a {{30-million-record}} migration mismatch.",
          "Delivered **KangaKonnect**, a tool for setting up new customer sites, making integration {{2× faster}}; top contributor to the connector that sends on-site building data to AWS.",
        ],
      },
      {
        title: "AI products",
        bullets: [
          "Built the search layer of **KanGPT**, an assistant answering plain-English building questions using **retrieval-augmented generation (RAG)**, **LLMs**, a **knowledge graph** and **vector search**: sensor lookup coverage rose from {{~68% to 100%}}, and alarm totals overstated up to {{8×}} were corrected.",
          "Slashed the worst-case wait from {{10+ minutes}} to a {{22 s}} reply limit and stress-tested accuracy with **large-scale automated evaluations** against real building data, on a service backed by {{2,300+}} automated tests.",
          "Set up **agentic development workflows**, coordinating multiple AI agents with clear briefs, independent verification and human sign-off to get dependable results in building and testing.",
        ],
      },
      {
        title: "Security, product shaping and team leadership",
        bullets: [
          "**Drove the team** to tighten cybersecurity and was **instrumental in achieving ISO 27001 certification**; all {{4}} high-severity penetration-test findings were fixed and passed retest within {{three weeks}}.",
          "**Shape the product** on recurring calls with {{five}} hospital and research sites: architect solutions to their operational problems and turn them into scoped work with delivery dates.",
          "Scoped {{700+}} tickets and shared delivery across {{12+}} teammates; lead backend design and code reviews.",
        ],
      },
    ],
  },
  {
    role: "Software R&D Intern",
    period: "Oct 2023 — Jan 2024",
    org: "Qualitas Technologies Pvt Ltd",
    location: "Bangalore",
    sections: [
      {
        bullets: [
          "Built image-recognition models for classification and fault detection (Vision Transformers, PyTorch, TensorFlow), improving **processing speed** by {{3×}}.",
          "Automated multi-step AI workflows with OpenAI APIs and Semantic Kernel; supported Azure cloud and web app work.",
        ],
      },
    ],
  },
];

export type ProjectItem = {
  title: string;
  description: string;
  href: string;
  context?: string;
};

export const projects: ProjectItem[] = [
  {
    title: "ML-assisted image despeckling",
    context: "PES University",
    description:
      "ML-assisted despeckling for SAR images: Random Forest, SVM, and Multinomial & Bernoulli Naive Bayes models to predict optimal Lee filter kernel size from HSV features, improving noise reduction while preserving detail. Post-processing with unsharp masking for edge clarity; evaluated on real SAR datasets.",
    href: "https://github.com/Rohanmrao/Image-Despeckling",
  },
  {
    title: "FRedBots",
    context: "PES Innovation Lab",
    description:
      "Multi-agent reinforcement learning for warehouse automation with Q-learning and ROS — path planning, task allocation, and collision avoidance on a dynamic grid. Scalable collaborative robotics with intelligent scheduling and deadlock prevention via centralized controllers; simulated in Gazebo + ROS.",
    href: "https://github.com/Rohanmrao/fredbots",
  },
];

export type PublicationItem = {
  title: string;
  venue: string;
  href: string;
};

export const publication: PublicationItem = {
  title: "FRedBots: Fundamental Reinforcement Learning Enabled Bots",
  venue: "IEEE",
  href: "https://doi.org/10.1109/ICCCR65461.2025.11072598",
};

export const music = {
  title: "Artist and producer",
  intro: "I write, produce and sing every song myself, chasing greatness one song at a time.",
  artistUrl: "https://open.spotify.com/artist/6uuZTdxLwGJ1pktMnQ8aZJ",
  single: {
    title: "Prarthane",
    label: "First single",
    description: [
      "Prarthane (Kannada for “prayer”) is an original song I wrote, produced and performed: a prayer in Kannada, written from the heart for the one person it was meant for.",
      "Out now on Spotify and other streaming platforms.",
    ],
    image: "/static/prarthane-bw.jpg",
    imageAlt: "Rohan Rao on a motorcycle",
    embedUrl: "https://open.spotify.com/embed/track/7sQ4W2k3f0KEvoa0fEsWUC",
    trackUrl: "https://open.spotify.com/track/7sQ4W2k3f0KEvoa0fEsWUC",
  },
  closing: "Stay tuned for more.",
};

export type ContactLink = {
  label: string;
  href: string;
  download?: string;
};

export const contact = {
  intro: "Email, resume, GitHub, and LinkedIn — say hello.",
  links: [
    { label: "Email", href: "mailto:rohanmaheshrao10@gmail.com" },
    {
      label: "Resume",
      href: "/static/RohanRao-SoftwareEngineer.pdf",
      download: "RohanRao-SoftwareEngineer.pdf",
    },
    { label: "GitHub", href: "https://github.com/Rohanmrao" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rohan-mahesh-rao-0aba62187/",
    },
  ] satisfies ContactLink[],
  closing: "Do reach out.",
};

export const footer = {
  name: "Rohan Mahesh Rao",
  year: new Date().getFullYear(),
};

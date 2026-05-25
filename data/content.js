export const meta = {
  name: "Siv",
  title: "UX & Product Designer",
  email: "hello@sivdesigns.com",
  linkedin: "https://linkedin.com/in/yourhandle",
  dribbble: "https://dribbble.com/yourhandle",
  available: true,
};

export const hero = {
  eyebrow: "UX & Product Designer · Open to work",
  heading: ["Designing products", "people love."],
  sub: "I'm Siv — a product designer with 5+ years shipping real features across enterprise, fintech, and community platforms. I lead with research and care about the details.",
};

export const marquee = [
  "UX Research",
  "Interaction Design",
  "Figma",
  "Design Systems",
  "Usability Testing",
  "ERG & Community Products",
  "B2B SaaS",
  "Mobile Design",
  "Prototyping",
  "Cross-functional Collaboration",
];

export const process = [
  {
    num: "01",
    title: "Understand",
    desc: "Research, interviews, and digging into the real problem before touching any design tool.",
  },
  {
    num: "02",
    title: "Define",
    desc: "Synthesize findings into clear problem statements, flows, and design principles.",
  },
  {
    num: "03",
    title: "Design",
    desc: "Explore broadly, refine ruthlessly. Wireframes to high-fidelity, tested with real users.",
  },
  {
    num: "04",
    title: "Ship & learn",
    desc: "Work closely with engineers, QA the build, and stay engaged post-launch to iterate.",
  },
];

export const caseStudies = [
  {
    slug: "audiences",
    featured: true,
    emoji: "🎯",
    thumbColor: "green",
    tags: ["B2B SaaS", "Enterprise", "ERG / Community"],
    title: "Audience targeting for event & community organizers",
    subtitle:
      "Giving event creators control over who gets notified — not everyone, just the right people.",
    desc: "Event creators had no control over who got notified. I designed an audience segmentation feature — filters by location, department, title, and individual names — that ERG communities immediately adopted.",
    meta: { role: "Lead Designer", type: "End-to-end feature design", platform: "Enterprise SaaS (web)", users: "Event & ERG organizers" },
    sections: [
      {
        label: "The problem",
        heading: "No control over who gets notified",
        content: [
          "Event creators on the platform had a blunt tool: publish an event, notify everyone. There was no way to control who received the notification — which was a real problem inside ERG (Employee Resource Group) communities where events are intentional and audience-specific.",
          "The original trigger was a request to filter event notifications by geographic location so location-specific events only reached relevant people. But as conversations evolved with PMs and stakeholders, it became clear location alone wasn't enough — the need was much broader.",
        ],
        highlight:
          '"For a Women in Leadership event, we should be able to target people in leadership or management roles — not blast the entire organization."',
        list: [
          "Location — notify people in a specific office or region",
          "Department — target by team or org unit, with multi-select",
          "Title / role — reach leadership, management, or specific seniority",
          "Individual names — hand-pick specific people",
          "CSV import — bulk upload for large or pre-defined audience lists",
        ],
      },
      {
        label: "Design challenges",
        heading: "The hard problems",
        list: [
          "AND/OR filter logic — organizers needed both \"users in NY and Engineering\" and \"users in NY or Engineering.\" Designing this to feel intuitive without exposing raw logic operators was the core UX challenge.",
          "Post-publish audience — once an event is live, organizers work from the event dashboard, not the creation form. Reopening the form risked confusion and duplicate invites.",
          "CSV error handling — bulk imports fail on some rows. The design needed to show which rows failed, why, and let users download and fix them without starting over.",
          "Auto-register discoverability — an existing feature clients kept asking for because they couldn't find it. The toggle was buried in the confirmation modal.",
        ],
      },
      {
        label: "Solution",
        heading: "What we shipped",
        cards: [
          {
            title: "Audience modal with filter groups",
            desc: "Filter by location, title, department, or individual name. Add and remove filter items and groups, with AND/OR logic surfaced in plain language rather than operator symbols.",
          },
          {
            title: "CSV import with error handling",
            desc: "Alternative to manual filtering for large lists. Failed rows shown with a reason, downloadable as a fixed template, and replaceable without starting over.",
          },
          {
            title: "Post-publish audience actions",
            desc: "Additional audience button in the event dashboard kebab menu — kept separate from the creation form. Duplicate invites prevented automatically.",
          },
          {
            title: "Unified communication flow",
            desc: "Replaced scattered entry points with a single guided flow. One button surfaces all options: invite, auto-register, send reminder, invite all subscribers, register all subscribers.",
          },
        ],
      },
      {
        label: "Outcome",
        heading: "Results & reflections",
        content: [
          "No formal KPI data, but ERG communities adopted audience targeting immediately for group-specific events — which was the core use case the feature was built for.",
          "The improved communication flow addressed a recurring client misconception that auto-registration didn't exist, which had generated ongoing support requests.",
        ],
        highlight:
          "If I were to do it again, I'd push for usability testing on the AND/OR filter UI before shipping — the logic interaction is the riskiest part of the design and the one most worth validating early.",
      },
    ],
  },
  {
    slug: "communities",
    featured: false,
    emoji: "🏘️",
    thumbColor: "amber",
    tags: ["Enterprise", "Social product", "ERG"],
    title: "Community & leadership features",
    subtitle: "Helping employee resource groups create more focused, engaging experiences for their members.",
    desc: "Shipped multiple features for ERG communities and leaders — helping them create more intentional, group-specific experiences.",
    meta: { role: "Product Designer", type: "Feature design", platform: "Enterprise SaaS", users: "Community leaders & members" },
    sections: [
      {
        label: "Overview",
        heading: "Building tools for ERG community leaders",
        content: [
          "Over 3 years, I shipped multiple features for the communities and leadership areas of an enterprise platform used by ERG organizers. The focus was on helping leaders create more intentional, group-specific experiences.",
          "Add your specific feature details, screens, and outcomes here.",
        ],
        highlight: "Replace this with your real communities and leadership case study content. You have the story — this is just the scaffolding.",
      },
    ],
  },
  {
    slug: "contract",
    featured: false,
    emoji: "📋",
    thumbColor: "slate",
    tags: ["Contract", "Client work"],
    title: "Contract design project",
    subtitle: "End-to-end client engagement — real stakeholders, real constraints, shipped deliverables.",
    desc: "Real-world client project from discovery through handoff with external stakeholders and defined constraints.",
    meta: { role: "Freelance Designer", type: "Client project", platform: "TBD", users: "TBD" },
    sections: [
      {
        label: "Overview",
        heading: "Your contract work case study",
        content: [
          "This is a placeholder for your existing contract work case study — the real one that helped you land your current job.",
          "Add your actual content, screens, and story here.",
        ],
        highlight: "You already have this one written. Drop it in here and it becomes the third strong case study in the portfolio.",
      },
    ],
  },
];

export const about = {
  intro: "I believe great design is invisible — it gets out of the way and lets people do what they came to do.",
  body: [
    "I'm a UX and product designer with 5+ years of experience shipping real features inside enterprise, community, and B2B SaaS products. I've spent the last 3 years deeply embedded in one product — learning its users, its constraints, and what it takes to ship work that actually holds up.",
    "I lead with research, think in systems, and care about the details most people scroll past. I'm at my best working closely with PMs and engineers — where the real decisions happen.",
    "Outside of work, I'm usually at a local UX meetup, hosting friends, or doing a deep-dive into some design system I have no professional reason to care about.",
  ],
  skills: [
    { name: "UX Research", pct: 90 },
    { name: "Interaction Design", pct: 86 },
    { name: "Figma & Prototyping", pct: 92 },
    { name: "Design Systems", pct: 78 },
    { name: "Usability Testing", pct: 82 },
    { name: "Cross-functional collaboration", pct: 88 },
    { name: "HTML / CSS basics", pct: 60 },
  ],
  tools: ["Figma", "Maze", "Dovetail", "Notion", "Jira", "Loom", "Framer"],
};

export const resume = {
  experience: [
    {
      role: "Senior Product Designer",
      company: "Current Company",
      location: "[City, CA]",
      years: "2022 – present",
      desc: "Led end-to-end design of multiple features including the Audiences targeting system, communities flows, and leadership tools for an enterprise ERG platform. Partnered closely with PMs and engineers across the full product lifecycle.",
    },
    {
      role: "Freelance Product Designer",
      company: "Contract Work",
      location: "Remote",
      years: "2021 – 2022",
      desc: "Designed for a real client with real stakeholders — from discovery through handoff. Delivered production-ready designs on time within defined constraints.",
    },
    {
      role: "Junior UX Designer",
      company: "Bootcamp + Early Career",
      location: "",
      years: "Pre-2022",
      desc: "Built foundational skills in UX research, wireframing, and visual design. Completed projects that led to first hire.",
    },
  ],
  education: [
    {
      role: "UX Design Bootcamp",
      company: "[Your bootcamp name]",
      location: "[City]",
      years: "2021",
      desc: "Full-stack UX curriculum covering research, information architecture, interaction design, and visual design.",
    },
  ],
};

// Every personal detail on the site lives here. Components read from this
// file, so updating a link, project, or photo is a one-line change.

export const PROFILE = {
  name: "Aryan Bharambe",
  firstName: "Aryan",
  location: "Ahmedabad, India",
  email: "aryanyb05@gmail.com",
  // Leave github as null to hide every GitHub link on the site.
  github: null,
  linkedin: "https://www.linkedin.com/in/aryanbharambe-3ba9b0304",
  resume: "/Aryan_Bharambe_CV.pdf",
};

export const SEO = {
  title: "Aryan Bharambe | Financial & Equity Research Analyst",
  description:
    "Aryan Bharambe is an MBA (Finance & Business Intelligence and Data Analytics) candidate with a B.Tech in Artificial Intelligence, combining financial analysis with data skills for equity research and financial analyst roles.",
};

// Swap these for real media when it's ready (drop files into /public).
// Set heroVideo to null to show heroPoster instead, with no play button.
export const MEDIA = {
  avatar: "/avatar-logo.svg",
  portrait: "/portrait.svg",
  heroVideo: null,
  heroPoster: "/hero-poster.svg",
  favicon: "/icon.svg",
};

// Loader cycles through these, one per second, before the hero reveals.
export const LOADER_TEXT = ["આર્યન પોર્ટફોલિયો", "आर्यन पोर्टफोलियो", "ARYAN PORTFOLIO"];

export const HERO = {
  eyebrow: "HELLO, I'M ARYAN",
  lines: ["FINANCIAL", "& EQUITY"],
  mutedLine: "ANALYST",
  tagline: "MBA in Finance & Business Analytics with a B.Tech in AI, turning market data into investment insight.",
};

export const ABOUT = {
  heading: [
    ["Turning", "Data"],
    ["Into", "Decisions"],
  ],
  intro: [
    "Hi, I'm Aryan, an MBA candidate in Finance and Business Intelligence & Data Analytics at Amity University, Ahmedabad.",
    "With a B.Tech in Artificial Intelligence behind me, I combine financial analysis with data skills. I've built a real-time NSE stock trend detection system, constructed client portfolios, and seen equity research up close at Aditya Birla Capital. I'm looking for equity research, financial analyst, and research & development roles.",
  ],
  services: [
    {
      title: "Equity & Market Research",
      body: "Studying companies, sectors, and capital markets the way analysts do, from first-hand exposure at Aditya Birla Capital.",
    },
    {
      title: "Financial Analysis & Risk",
      body: "Portfolio construction and risk assessment, including the Goldman Sachs Risk and Mastercard Advisors & Consulting job simulations.",
    },
    {
      title: "Data & Dashboards",
      body: "Power BI dashboarding, MS Excel, and PowerPoint for clear, analysis-ready reporting.",
    },
    {
      title: "AI & Market Analytics",
      body: "Python time-series stock prediction, live market data pipelines, and prompt engineering.",
    },
  ],
};

// Each section renders as a numbered list in the same style. Rows take
// name, role, kind, and either a one-line note or a list of highlights.
// Give a row an href to make it a link; image adds a thumbnail.
export const SECTIONS = [
  {
    id: "experience",
    label: "EXPERIENCE",
    title: "work & leadership",
    items: [
      {
        name: "Aditya Birla Capital",
        role: "Intern",
        kind: "Internship",
        highlights: [
          "Gained exposure to equity research, learning how analysts study companies and markets.",
          "Worked on the insurance market and generated ₹88,000 in insurance sales.",
        ],
      },
      {
        name: "Global EXPO",
        role: "Strategy Lead, Client Relationships & Negotiation",
        kind: "1st of 8 teams",
        highlights: [
          "Led deal negotiations and co-developed the team's competitive strategy, finishing first among 8 teams.",
          "Proposed a virtual payment gateway that streamlined event transactions.",
        ],
      },
      {
        name: "Placement Committee",
        role: "Data Head — Amity University",
        kind: "Leadership",
        highlights: [
          "Managed placement data, keeping records accurate and analysis-ready for data-driven decisions.",
        ],
      },
    ],
  },
  {
    id: "work",
    label: "PROJECTS",
    title: "selected work",
    items: [
      {
        name: "Stock Trend Detection",
        role: "EverestWealth • Live NSE data • APIs • Dashboards",
        kind: "Live project",
        note: "Real-time system that ranks the top 10 high-momentum NSE stocks from percentage change and live market signals, feeding dashboards and predictive models.",
        image: "/images/projects/trend.svg",
      },
      {
        name: "Portfolio Construction",
        role: "Wealth Management • Case Project",
        kind: "Case study",
        note: "Built an investment portfolio tailored to a client's objectives for a wealth management case.",
        image: "/images/projects/portfolio.svg",
      },
      {
        name: "Time Series Forecasting",
        role: "Python • Great Learning",
        kind: "Certification",
        note: "Stock market price prediction with time-series models in Python.",
        image: "/images/projects/timeseries.svg",
      },
    ],
  },
  {
    id: "education",
    label: "EDUCATION",
    title: "where i studied",
    items: [
      {
        name: "Amity University",
        role: "MBA — Finance & Business Intelligence and Data Analytics",
        kind: "2025 – 2027",
        note: "Ahmedabad. Pursuing.",
      },
      {
        name: "ITM SLS Baroda University",
        role: "B.Tech — Artificial Intelligence",
        kind: "Completed 2025",
        note: "Vadodara.",
      },
    ],
  },
];

export const MARQUEE = "Where Finance Meets Data.";

export const MENU_CTA = ["Hiring an analyst?", "Let's talk."];

export const CONTACT = {
  eyebrow: "have a role or opportunity in mind?",
  headline: "let's talk.",
};

export const FOOTER = {
  tagline: "MBA (Finance & BIDA) candidate combining financial analysis with data and AI.",
  subline: "Where finance meets data.",
};
